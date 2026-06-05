'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ALL_NODES, EDGES, MAIN_NODES, type GraphNode } from '@/data/graph';
import GraphFilterBar, { type GraphFilter } from './GraphFilterBar';

// ── helpers ──────────────────────────────────────────────────────────────────

function nodeColor(n: GraphNode): string {
  if (n.cat === 'ugz') return '#C9A94B';
  if (n.cat === 'arch') return '#2B6895';
  if (n.cat === 'ki') return '#3F7FAE';
  return '#7C8794';
}

function nodeBorder(n: GraphNode): string {
  if (n.cat === 'ugz') return 'rgba(168,142,61,0.65)';
  if (n.cat === 'arch') return 'rgba(43,104,149,0.58)';
  if (n.cat === 'ki') return 'rgba(63,127,174,0.60)';
  return 'rgba(107,106,99,0.42)';
}

function nodeRadius(n: GraphNode): number {
  if (n.type === 'tag') return Math.max(11, Math.min(24, 7 + (n.count ?? 1) * 3));
  return n.type === 'artikel' ? 20 : 22;
}

function nodeTypeLabel(n: GraphNode): string {
  if (n.type === 'tag') return 'Thema';
  if (n.type === 'projekt') return n.cat === 'ugz' ? 'Projekt Verwaltung' : 'Projekt Architektur';
  return 'Schrift';
}

function hashStr(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (((h << 5) - h) + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// ── types ─────────────────────────────────────────────────────────────────────

interface SimNode extends GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  visible: boolean;
}

interface SimEdge {
  source: SimNode;
  target: SimNode;
}

interface Transform {
  x: number;
  y: number;
  scale: number;
}

export interface ReadoutData {
  type: string;
  title: string;
  desc: string;
  tags: string[];
  url: string | null;
}

const DEFAULT_READOUT: ReadoutData = {
  type: 'Verbindung',
  title: 'Knoten wählen',
  desc: 'Wähle einen Knoten im Graph, um zu sehen, wie Projekte, Schriften und Wissensfelder miteinander verbunden sind.',
  tags: ['Systemdenken', 'Wissensstruktur'],
  url: null,
};

// ── component ─────────────────────────────────────────────────────────────────

interface GraphCanvasProps {
  readout: ReadoutData;
  onReadout: (r: ReadoutData) => void;
}

export default function GraphCanvas({ readout, onReadout }: GraphCanvasProps) {
  const [filter, setFilter] = useState<GraphFilter>('all');
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simulation state — all in refs, never triggers re-render
  const nodesRef = useRef<SimNode[]>([]);
  const edgesRef = useRef<SimEdge[]>([]);
  const transformRef = useRef<Transform>({ x: 0, y: 0, scale: 1 });
  const draggingRef = useRef<SimNode | null>(null);
  const hoveredRef = useRef<SimNode | null>(null);
  const isPanningRef = useRef(false);
  const panStartRef = useRef<{ x: number; y: number } | null>(null);
  const activeFilterRef = useRef<GraphFilter>('all');
  const rafRef = useRef<number>(0);
  const WRef = useRef(0);
  const HRef = useRef(0);
  const dprRef = useRef(1);

  // ── resize + init ──────────────────────────────────────────────────────────

  const resize = useCallback(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = stage.getBoundingClientRect();
    const W = Math.max(320, Math.floor(rect.width));
    const H = Math.max(420, Math.floor(rect.height));
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    WRef.current = W;
    HRef.current = H;
    dprRef.current = dpr;
  }, []);

  const initNodes = useCallback(() => {
    const W = WRef.current;
    const H = HRef.current;
    const cx = W / 2;
    const cy = H / 2;
    nodesRef.current = ALL_NODES.map((n) => {
      const seed = hashStr(n.id);
      const a = ((seed % 1000) / 1000) * Math.PI * 2;
      const r = n.type === 'tag'
        ? 80 + (seed % 60)
        : Math.min(W, H) * 0.36 + (seed % 70);
      return { ...n, x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, vx: 0, vy: 0, visible: true };
    });
    edgesRef.current = EDGES.map((e) => ({
      source: nodesRef.current.find((n) => n.id === e.source)!,
      target: nodesRef.current.find((n) => n.id === e.target)!,
    })).filter((e) => e.source && e.target);
  }, []);

  const applyFilter = useCallback((f: GraphFilter) => {
    activeFilterRef.current = f;
    nodesRef.current.forEach((n) => {
      if (f === 'all') {
        n.visible = true;
      } else if (f === 'projekt') {
        n.visible =
          n.type === 'projekt' ||
          (n.type === 'tag' &&
            MAIN_NODES.some((p) => p.type === 'projekt' && p.tags.includes(n.label)));
      } else {
        n.visible =
          n.type === 'artikel' ||
          (n.type === 'tag' &&
            MAIN_NODES.some((p) => p.type === 'artikel' && p.tags.includes(n.label)));
      }
    });
  }, []);

  // ── simulation tick ────────────────────────────────────────────────────────

  const tick = useCallback(() => {
    const nodes = nodesRef.current;
    const edges = edgesRef.current;
    const W = WRef.current;
    const H = HRef.current;
    const cx = W / 2;
    const cy = H / 2;
    const boundX = Math.min(W * 0.42, 480);
    const boundY = Math.min(H * 0.40, 330);

    nodes.forEach((n) => { n.vx *= 0.78; n.vy *= 0.78; });
    nodes.forEach((n) => {
      if (!n.visible) return;
      n.vx += (cx - n.x) * 0.04;
      n.vy += (cy - n.y) * 0.04;
    });
    nodes.forEach((n) => {
      if (!n.visible) return;
      const dx = n.x - cx;
      const dy = n.y - cy;
      if (Math.abs(dx) > boundX) n.vx -= Math.sign(dx) * (Math.abs(dx) - boundX) * 0.18;
      if (Math.abs(dy) > boundY) n.vy -= Math.sign(dy) * (Math.abs(dy) - boundY) * 0.18;
    });
    for (let i = 0; i < nodes.length; i++) {
      if (!nodes[i].visible) continue;
      for (let j = i + 1; j < nodes.length; j++) {
        if (!nodes[j].visible) continue;
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d2 = dx * dx + dy * dy + 0.01;
        const f = 700 / d2;
        nodes[i].vx += dx * f; nodes[i].vy += dy * f;
        nodes[j].vx -= dx * f; nodes[j].vy -= dy * f;
      }
    }
    edges.forEach((e) => {
      if (!e.source.visible || !e.target.visible) return;
      const dx = e.target.x - e.source.x;
      const dy = e.target.y - e.source.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const f = (d - 88) * 0.085;
      e.source.vx += (dx / d) * f; e.source.vy += (dy / d) * f;
      e.target.vx -= (dx / d) * f; e.target.vy -= (dy / d) * f;
    });
    nodes.forEach((n) => {
      if (!n.visible || n === draggingRef.current) return;
      n.x += n.vx * 0.022 * 60;
      n.y += n.vy * 0.022 * 60;
    });
  }, []);

  // ── draw ───────────────────────────────────────────────────────────────────

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = WRef.current;
    const H = HRef.current;
    const { x: tx, y: ty, scale: ts } = transformRef.current;
    const hovered = hoveredRef.current;
    const nodes = nodesRef.current;
    const edges = edgesRef.current;

    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.translate(tx, ty);
    ctx.scale(ts, ts);

    // Edges
    edges.forEach((e) => {
      if (!e.source.visible || !e.target.visible) return;
      const hot = hovered && (e.source === hovered || e.target === hovered);
      ctx.beginPath();
      ctx.moveTo(e.source.x, e.source.y);
      ctx.lineTo(e.target.x, e.target.y);
      ctx.strokeStyle = hot ? 'rgba(168,142,61,0.65)' : 'rgba(43,104,149,0.22)';
      ctx.lineWidth = hot ? 1.5 : 1;
      ctx.stroke();
    });

    // Nodes
    nodes.forEach((n) => {
      if (!n.visible) return;
      const r = nodeRadius(n);
      const isHovered = n === hovered;
      const isConnected =
        hovered != null &&
        edges.some((e) => (e.source === hovered && e.target === n) || (e.target === hovered && e.source === n));
      const dimmed = hovered != null && !isHovered && !isConnected;

      ctx.globalAlpha = dimmed ? 0.2 : 1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r + (isHovered ? 3 : 0), 0, Math.PI * 2);
      ctx.fillStyle = n.type === 'tag' ? 'rgba(248,247,243,0.96)' : nodeColor(n);
      ctx.fill();
      ctx.strokeStyle = isHovered ? '#A88E3D' : nodeBorder(n);
      ctx.lineWidth = isHovered ? 2 : 1;
      ctx.stroke();

      const showLabel = n.type !== 'tag' || (n.count ?? 0) >= 2 || isHovered || isConnected;
      if (showLabel) {
        const isTag = n.type === 'tag';
        const fontSize = isTag ? 11 : 13;
        ctx.font = isTag
          ? `500 ${fontSize}px "IBM Plex Mono", monospace`
          : `500 ${fontSize}px "IBM Plex Sans", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        const labelY = n.y + r + 7;
        const text = isTag ? n.label.toUpperCase() : n.label;
        const padX = 5, padY = 3;
        const metrics = ctx.measureText(text);
        const labelW = metrics.width + padX * 2;
        const labelH = fontSize + padY * 2;
        ctx.fillStyle = isHovered ? 'rgba(248,247,243,0.96)' : 'rgba(248,247,243,0.82)';
        ctx.fillRect(n.x - labelW / 2, labelY - padY, labelW, labelH);
        ctx.fillStyle = isHovered ? '#0E1116' : (isTag ? '#A88E3D' : '#343B48');
        ctx.fillText(text, n.x, labelY);
        ctx.textBaseline = 'alphabetic';
      }

      ctx.globalAlpha = 1;
    });

    ctx.restore();
  }, []);

  // ── RAF loop ───────────────────────────────────────────────────────────────

  const loop = useCallback(() => {
    tick();
    draw();
    rafRef.current = requestAnimationFrame(loop);
  }, [tick, draw]);

  // ── coordinate helpers ─────────────────────────────────────────────────────

  function screenToWorld(sx: number, sy: number) {
    const { x, y, scale } = transformRef.current;
    return { x: (sx - x) / scale, y: (sy - y) / scale };
  }

  function nodeAt(sx: number, sy: number): SimNode | null {
    const p = screenToWorld(sx, sy);
    const nodes = nodesRef.current;
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      if (!n.visible) continue;
      const r = nodeRadius(n) + 6;
      const dx = n.x - p.x, dy = n.y - p.y;
      if (dx * dx + dy * dy < r * r) return n;
    }
    return null;
  }

  // ── readout ────────────────────────────────────────────────────────────────

  function showReadout(n: SimNode) {
    onReadout({
      type: nodeTypeLabel(n),
      title: n.label,
      desc: n.short || (n.type === 'tag' ? `Dieses Thema verbindet ${n.count ?? 0} Inhalte innerhalb der Karte.` : ''),
      tags: n.tags?.length ? n.tags : [n.label],
      url: n.url,
    });
  }

  // ── mount / unmount ────────────────────────────────────────────────────────

  useEffect(() => {
    resize();
    initNodes();
    applyFilter('all');
    rafRef.current = requestAnimationFrame(loop);

    const canvas = canvasRef.current!;

    function onMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      if (isPanningRef.current && panStartRef.current) {
        transformRef.current.x += mx - panStartRef.current.x;
        transformRef.current.y += my - panStartRef.current.y;
        panStartRef.current = { x: mx, y: my };
        return;
      }
      if (draggingRef.current) {
        const p = screenToWorld(mx, my);
        draggingRef.current.x = p.x;
        draggingRef.current.y = p.y;
        draggingRef.current.vx = 0;
        draggingRef.current.vy = 0;
        return;
      }
      const n = nodeAt(mx, my);
      hoveredRef.current = n;
      canvas.style.cursor = n ? 'pointer' : 'default';
    }

    function onMouseLeave() {
      hoveredRef.current = null;
    }

    function onMouseDown(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const n = nodeAt(mx, my);
      if (n) {
        draggingRef.current = n;
      } else {
        isPanningRef.current = true;
        panStartRef.current = { x: mx, y: my };
        canvas.style.cursor = 'grabbing';
      }
    }

    function onMouseUp() {
      draggingRef.current = null;
      isPanningRef.current = false;
      panStartRef.current = null;
      canvas.style.cursor = hoveredRef.current ? 'pointer' : 'default';
    }

    function onClick(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const n = nodeAt(e.clientX - rect.left, e.clientY - rect.top);
      if (n) showReadout(n);
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.max(0.45, Math.min(2.7, transformRef.current.scale * delta));
      transformRef.current.x = mx - (mx - transformRef.current.x) * (newScale / transformRef.current.scale);
      transformRef.current.y = my - (my - transformRef.current.y) * (newScale / transformRef.current.scale);
      transformRef.current.scale = newScale;
    }

    function onTouchStart(e: TouchEvent) {
      if (e.touches.length === 1) {
        const t = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const n = nodeAt(t.clientX - rect.left, t.clientY - rect.top);
        if (n) {
          draggingRef.current = n;
        } else {
          isPanningRef.current = true;
          panStartRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top };
        }
      }
    }

    function onTouchMove(e: TouchEvent) {
      if (e.touches.length === 1) {
        const t = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const mx = t.clientX - rect.left;
        const my = t.clientY - rect.top;
        if (draggingRef.current) {
          const p = screenToWorld(mx, my);
          draggingRef.current.x = p.x;
          draggingRef.current.y = p.y;
          draggingRef.current.vx = 0;
          draggingRef.current.vy = 0;
        } else if (isPanningRef.current && panStartRef.current) {
          transformRef.current.x += mx - panStartRef.current.x;
          transformRef.current.y += my - panStartRef.current.y;
          panStartRef.current = { x: mx, y: my };
        }
      }
    }

    function onTouchEnd() {
      draggingRef.current = null;
      isPanningRef.current = false;
      panStartRef.current = null;
    }

    function onResize() {
      resize();
      initNodes();
      applyFilter(activeFilterRef.current);
    }

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('click', onClick);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('click', onClick);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── filter change ──────────────────────────────────────────────────────────

  useEffect(() => {
    if (nodesRef.current.length > 0) applyFilter(filter);
  }, [filter, applyFilter]);

  // ── render ─────────────────────────────────────────────────────────────────

  return (
    <div>
      <GraphFilterBar value={filter} onChange={setFilter} />
      <div
        className="grid border border-stone-200 bg-[#FBFAF7]"
        style={{ gridTemplateColumns: '1fr 340px' }}
      >
        {/* Canvas stage */}
        <div
          ref={stageRef}
          className="relative min-w-0 border-r border-stone-200 bg-paper-soft overflow-hidden"
          style={{
            minHeight: '680px',
            backgroundImage:
              'linear-gradient(rgba(43,104,149,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(43,104,149,0.10) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(80% 80% at 50% 50%, #000 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(80% 80% at 50% 50%, #000 40%, transparent 85%)',
          }}
          aria-label="Interaktive Themenkarte"
        >
          <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full block" />
          <div className="absolute left-4 bottom-4 z-20 font-mono text-[0.58rem] tracking-[0.12em] uppercase text-stone-400 bg-[rgba(248,247,243,0.82)] border border-stone-200 px-[0.65rem] py-[0.45rem] backdrop-blur-sm pointer-events-none">
            Scroll · Zoom · Drag · Klick
          </div>
        </div>

        {/* Readout panel */}
        <aside
          className="flex flex-col px-[1.5rem] py-[1.6rem] bg-[#FBFAF7]"
          aria-live="polite"
          style={{ minHeight: '680px' }}
        >
          <div className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-blue-800 mb-[0.7rem]">
            {readout.type}
          </div>
          <div className="font-serif text-[1.72rem] leading-[1.32] text-ink mb-[1.25rem] pb-[0.25em]">
            {readout.title}
          </div>
          <p className="text-[0.92rem] leading-[1.68] text-stone-700 font-light">
            {readout.desc}
          </p>
          {readout.tags.length > 0 && (
            <div className="flex flex-wrap gap-[0.45rem] mt-[1.1rem]">
              {readout.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.58rem] tracking-[0.06em] text-gold-600 border border-[rgba(201,169,75,0.45)] rounded-full px-[0.6rem] py-[0.22rem]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          {readout.url && (
            <a
              href={readout.url}
              className="inline-flex w-max mt-[1.2rem] font-mono text-[0.62rem] tracking-[0.12em] uppercase text-gold-600 border-b border-[rgba(201,169,75,0.28)] pb-[2px] hover:text-ink transition-colors"
            >
              Detail öffnen
            </a>
          )}
          <p className="mt-auto pt-[1.6rem] font-mono text-[0.6rem] tracking-[0.06em] text-stone-400 leading-[1.7]">
            Die Karte ist keine neue Anwendung, sondern die vertiefte Variante der Verbindungssektion der Startseite.
          </p>
        </aside>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-[1.2rem] mt-[1.3rem]" aria-label="Legende">
        {[
          { cls: 'bg-gold', label: 'Projekte Verwaltung' },
          { cls: 'bg-blue', label: 'Projekte Architektur' },
          { cls: 'bg-blue-700', label: 'Schriften' },
          { cls: 'bg-stone-400 border border-[rgba(14,17,22,0.18)]', label: 'Themen' },
        ].map(({ cls, label }) => (
          <span key={label} className="flex items-center gap-[0.5rem] font-mono text-[0.62rem] tracking-[0.08em] uppercase text-stone-400">
            <span className={`w-[11px] h-[11px] rounded-full shrink-0 ${cls}`} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export { DEFAULT_READOUT };
