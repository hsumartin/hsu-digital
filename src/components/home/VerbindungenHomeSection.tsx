'use client';

import { useEffect, useRef, useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';

type NodeType = 'core' | 'prinzip' | 'feld' | 'projekt' | 'schrift' | 'methode';

interface GraphNode {
  id: string;
  t: NodeType;
  x: number;
  y: number;
  label: string;
  kind: string;
  text: string;
}

interface GraphEdge {
  a: string;
  b: string;
}

const NODES: GraphNode[] = [
  { id: 'core', t: 'core', x: 560, y: 360, label: 'Systemdenken', kind: 'Kern', text: 'Der gemeinsame Kern. Alle Prinzipien, Felder, Projekte und Schriften sind sein Ausdruck.' },
  { id: 'p1', t: 'prinzip', x: 360, y: 255, label: 'Struktur vor Werkzeug', kind: 'Prinzip', text: 'Erst das System verstehen, dann das Werkzeug wählen. Verbindet Architektur, beide Projekte und die meisten Schriften.' },
  { id: 'p2', t: 'prinzip', x: 762, y: 255, label: 'Beleg vor Behauptung', kind: 'Prinzip', text: 'Gelieferte Systeme stehen vor jeder Aussage. Verbindet Product Ownership und die Projekte.' },
  { id: 'p3', t: 'prinzip', x: 560, y: 500, label: 'Kontrolle beim Menschen', kind: 'Prinzip', text: 'KI bleibt verantwortbar. Verbindet Verwaltung, KI, Governance und den Entscheidungsweg.' },
  { id: 'f_arch', t: 'feld', x: 235, y: 95, label: 'Architektur', kind: 'Feld · 01', text: 'Herkunft des Denkens — Schichten und Sequenz. Drückt „Struktur vor Werkzeug" aus.' },
  { id: 'f_verw', t: 'feld', x: 470, y: 66, label: 'Verwaltung', kind: 'Feld · 01', text: 'Reguliertes Feld, das Substanz erzwingt — verbindet „Beleg" und „Kontrolle".' },
  { id: 'f_po', t: 'feld', x: 700, y: 66, label: 'Product Ownership', kind: 'Feld · 01', text: 'Von der Anforderung zum Betrieb. Drückt „Beleg vor Behauptung" aus.' },
  { id: 'f_ki', t: 'feld', x: 905, y: 100, label: 'KI', kind: 'Feld · 01', text: 'Werkzeug, kein Ziel — nur unter menschlicher Kontrolle.' },
  { id: 'pr_civitas', t: 'projekt', x: 1010, y: 270, label: 'CivitasFlow', kind: 'Projekt · 02', text: 'Geliefertes Fachsystem. Beleg vor Behauptung trifft modellierte Struktur.' },
  { id: 'pr_gis', t: 'projekt', x: 1010, y: 420, label: 'GIS-Suchfunktion', kind: 'Projekt · 02', text: 'Bewusst ohne KI — deterministische Struktur als Beleg.' },
  { id: 's_gpt', t: 'schrift', x: 108, y: 235, label: 'GPT-Stack', kind: 'Schrift · 04', text: '„Struktur vor Modell" — eine Architektur für KI-Arbeit.' },
  { id: 's_denk', t: 'schrift', x: 108, y: 380, label: 'Denkarchitektur', kind: 'Schrift · 04', text: 'Denken sichtbar und steuerbar machen — Struktur als Methode.' },
  { id: 's_decision', t: 'schrift', x: 215, y: 600, label: 'Decision Layer', kind: 'Schrift · 04', text: 'Bewusste Begrenzung — wo Struktur auf Kontrolle trifft.' },
  { id: 's_govern', t: 'schrift', x: 735, y: 625, label: 'KI-Governance', kind: 'Schrift · 04', text: '„Kontrolle bleibt beim Menschen" — Steuerungslogik für die Verwaltung.' },
  { id: 'm_entsch', t: 'methode', x: 430, y: 618, label: 'Entscheidungsweg', kind: 'Methode · 03', text: 'Wo die Prinzipien zusammenlaufen: Problem → Bewertung → KI oder einfachere Lösung.' },
];

const EDGES: GraphEdge[] = [
  { a: 'p1', b: 'core' }, { a: 'p2', b: 'core' }, { a: 'p3', b: 'core' },
  { a: 'f_arch', b: 'p1' },
  { a: 'f_verw', b: 'p2' }, { a: 'f_verw', b: 'p3' },
  { a: 'f_po', b: 'p2' },
  { a: 'f_ki', b: 'p3' },
  { a: 'pr_civitas', b: 'p2' }, { a: 'pr_civitas', b: 'p1' },
  { a: 'pr_gis', b: 'p2' }, { a: 'pr_gis', b: 'p1' },
  { a: 's_gpt', b: 'p1' },
  { a: 's_denk', b: 'p1' },
  { a: 's_decision', b: 'p1' }, { a: 's_decision', b: 'p3' },
  { a: 's_govern', b: 'p3' },
  { a: 'm_entsch', b: 'p1' }, { a: 'm_entsch', b: 'p2' }, { a: 'm_entsch', b: 'p3' },
];

const NODE_RADIUS: Record<NodeType, number> = {
  core: 13, prinzip: 9, feld: 6.5, projekt: 6.5, schrift: 6.5, methode: 6.5,
};

const NODE_FILL: Record<NodeType, string> = {
  core: 'none',
  prinzip: '#C9A94B',
  feld: '#2B6895',
  projekt: '#3F7FAE',
  schrift: '#7C8794',
  methode: '#A88E3D',
};

const LEGEND_ITEMS: { type: NodeType; label: string }[] = [
  { type: 'core', label: 'Kern' },
  { type: 'prinzip', label: 'Prinzip' },
  { type: 'feld', label: 'Feld' },
  { type: 'projekt', label: 'Projekt' },
  { type: 'schrift', label: 'Schrift' },
  { type: 'methode', label: 'Methode' },
];

interface Readout {
  kind: string;
  title: string;
  text: string;
  principles: string[];
}

const DEFAULT_READOUT: Readout = {
  kind: 'Leitthese',
  title: 'Alles hängt zusammen.',
  text: 'Jeder Knoten — Feld, Projekt, Schrift, Methode — ist Ausdruck derselben Denkarchitektur. Drei Prinzipien halten alles zusammen.',
  principles: [],
};

function principlesOf(nodeId: string): string[] {
  const adj = new Set(
    EDGES.filter((e) => e.a === nodeId || e.b === nodeId).map((e) =>
      e.a === nodeId ? e.b : e.a,
    ),
  );
  return NODES.filter((n) => adj.has(n.id) && n.t === 'prinzip').map((n) => n.label);
}

export default function VerbindungenHomeSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [locked, setLocked] = useState<string | null>(null);
  const [readout, setReadout] = useState<Readout>(DEFAULT_READOUT);

  const active = locked ?? hovered;

  // Adjacency set for highlighted node
  const activeAdj = useRef<Set<string>>(new Set());
  useEffect(() => {
    if (active === null) {
      activeAdj.current = new Set();
      return;
    }
    const adj = new Set<string>([active]);
    EDGES.forEach((e) => {
      if (e.a === active) adj.add(e.b);
      if (e.b === active) adj.add(e.a);
    });
    activeAdj.current = adj;
  }, [active]);

  function handleNodeEnter(node: GraphNode) {
    if (locked) return;
    setHovered(node.id);
    setReadout({
      kind: node.kind,
      title: node.label,
      text: node.text,
      principles: node.t === 'prinzip' || node.t === 'core' ? [] : principlesOf(node.id),
    });
  }

  function handleNodeLeave() {
    if (locked) return;
    setHovered(null);
    setReadout(DEFAULT_READOUT);
  }

  function handleNodeClick(node: GraphNode) {
    if (locked === node.id) {
      setLocked(null);
      setHovered(null);
      setReadout(DEFAULT_READOUT);
    } else {
      setLocked(node.id);
      setReadout({
        kind: node.kind,
        title: node.label,
        text: node.text,
        principles: node.t === 'prinzip' || node.t === 'core' ? [] : principlesOf(node.id),
      });
    }
  }

  function handleSvgClick() {
    if (locked) {
      setLocked(null);
      setHovered(null);
      setReadout(DEFAULT_READOUT);
    }
  }

  function isEdgeHot(edge: GraphEdge): boolean {
    if (!active) return false;
    return edge.a === active || edge.b === active;
  }

  function isNodeDim(nodeId: string): boolean {
    if (!active) return false;
    return !activeAdj.current.has(nodeId);
  }

  // Label anchor logic matching original
  function labelAnchor(node: GraphNode): { anchor: 'middle' | 'end' | 'start'; dx: number; dy: number } {
    const r = NODE_RADIUS[node.t];
    if (node.x < 260) return { anchor: 'end', dx: -(r + 8), dy: 4 };
    if (node.x > 860) return { anchor: 'end', dx: -(r + 8), dy: 4 };
    if (node.y < 360) return { anchor: 'middle', dx: 0, dy: -(r + 9) };
    return { anchor: 'middle', dx: 0, dy: r + 15 };
  }

  return (
    <section
      id="section-05"
      className="px-[clamp(1.5rem,4vw,4rem)] py-24 pb-[4.5rem]"
      aria-label="Verbindungen"
    >
      <div className="max-w-[88rem] mx-auto">
        <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-text-muted mb-6">
          <b className="text-gold-600 font-medium">Editorial Architecture</b>
          {' '}×{' '}
          <b className="text-gold-600 font-medium">Civic Digital</b>
          {' '}×{' '}
          <b className="text-gold-600 font-medium">AI Clarity</b>
        </p>
        <SectionLabel num="05">Verbindungen</SectionLabel>

        <div className="grid gap-12 items-end mb-6" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
          <h2 className="font-serif font-normal text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.28] tracking-[-0.01em] max-w-[18ch] pb-[0.04em]">
            Alles hängt{' '}
            <em className="italic text-gold-600">zusammen.</em>
          </h2>
          <p className="text-[1.04rem] leading-[1.7] text-stone-700 font-light max-w-[42ch]">
            Felder, Projekte, Methode und Schriften hängen an{' '}
            <b className="text-ink font-medium">denselben Prinzipien</b>. Der Graph zeigt nicht
            Themen, sondern den Prinzipienkern, der alles verbindet.{' '}
            <b className="text-ink font-medium">Knoten wählen</b>, um die Verbindungen zu lesen.
          </p>
        </div>

        {/* Graph wrapper */}
        <div
          className="grid border border-stone-200 bg-[#FBFAF7]"
          style={{ gridTemplateColumns: '1fr 320px' }}
        >
          {/* SVG stage */}
          <div
            className="relative min-w-0 border-r border-stone-200 bg-paper-soft"
            style={{
              backgroundImage:
                'linear-gradient(rgba(43,104,149,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(43,104,149,0.10) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          >
            <svg
              viewBox="0 0 1120 720"
              className="block w-full h-auto relative z-10"
              role="img"
              aria-label="Knowledge Graph der Verbindungen"
              onClick={handleSvgClick}
            >
              {/* Edges */}
              {EDGES.map((edge, i) => {
                const na = NODES.find((n) => n.id === edge.a)!;
                const nb = NODES.find((n) => n.id === edge.b)!;
                const hot = isEdgeHot(edge);
                return (
                  <line
                    key={i}
                    x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                    stroke={hot ? '#A88E3D' : 'rgba(43,104,149,0.34)'}
                    strokeWidth={hot ? 1.5 : 1}
                    opacity={active && !hot ? 0.10 : 0.95}
                    fill="none"
                    style={{ transition: 'opacity 0.2s, stroke 0.2s, stroke-width 0.2s' }}
                  />
                );
              })}

              {/* Nodes */}
              {NODES.map((node) => {
                const r = NODE_RADIUS[node.t];
                const fill = NODE_FILL[node.t];
                const dim = isNodeDim(node.id);
                const isActive = active === node.id;
                const isLocked = locked === node.id;
                const { anchor, dx, dy } = labelAnchor(node);
                const lx = node.x + dx;
                const ly = node.y + dy;
                const approxW = node.label.length * 6.4 + 10;

                return (
                  <g
                    key={node.id}
                    style={{ cursor: 'pointer', opacity: dim ? 0.26 : 1, transition: 'opacity 0.2s' }}
                    onMouseEnter={() => handleNodeEnter(node)}
                    onMouseLeave={handleNodeLeave}
                    onClick={(e) => { e.stopPropagation(); handleNodeClick(node); }}
                    role="button"
                    aria-label={`${node.kind}: ${node.label}`}
                  >
                    <circle
                      cx={node.x} cy={node.y} r={r}
                      fill={fill}
                      stroke={isActive || isLocked ? '#A88E3D' : 'rgba(245,244,240,0.95)'}
                      strokeWidth={node.t === 'core' ? 2.5 : isActive || isLocked ? 2 : 1.25}
                      style={{ transition: 'stroke 0.2s, stroke-width 0.2s' }}
                    />
                    {/* Label background */}
                    <rect
                      x={anchor === 'end' ? lx - approxW + 6 : anchor === 'start' ? lx - 4 : lx - approxW / 2}
                      y={ly - 11}
                      width={approxW} height={16} rx={3}
                      fill="rgba(248,247,243,0.82)"
                      style={{ transition: 'opacity 0.2s' }}
                    />
                    <text
                      x={lx} y={ly + 1}
                      textAnchor={anchor}
                      fontFamily="var(--font-plex-mono), monospace"
                      fontSize={11}
                      letterSpacing="0.02em"
                      fill={isActive || isLocked ? '#0E1116' : '#6B6A63'}
                      style={{ pointerEvents: 'none', transition: 'fill 0.2s' }}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Readout panel */}
          <div className="flex flex-col px-6 py-[1.6rem]">
            <div className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-blue-800 mb-3">
              {readout.kind}
            </div>
            <div
              className="font-serif text-[1.65rem] leading-[1.36] text-ink mb-6 pb-[0.28em]"
              dangerouslySetInnerHTML={{ __html: readout.title }}
            />
            <p className="text-[0.9rem] leading-[1.62] text-stone-700 font-light">
              {readout.text}
            </p>
            {readout.principles.length > 0 && (
              <div className="mt-5">
                <div className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-text-muted mb-2">
                  Verbunden über
                </div>
                <div className="flex flex-wrap gap-2">
                  {readout.principles.map((p) => (
                    <span
                      key={p}
                      className="font-mono text-[0.6rem] tracking-[0.06em] text-gold-600 border border-[rgba(201,169,75,0.45)] rounded-full px-[0.6rem] py-[0.22rem]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <p className="mt-auto pt-6 font-mono text-[0.6rem] tracking-[0.06em] text-text-muted leading-[1.7]">
              Knoten anklicken zum Fixieren · daneben klicken zum Lösen
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-5 mt-5">
          {LEGEND_ITEMS.map(({ type, label }) => (
            <span key={type} className="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.08em] uppercase text-text-muted">
              {type === 'core' ? (
                <span className="w-[11px] h-[11px] rounded-full shrink-0 border-2 border-gold-600" />
              ) : (
                <span
                  className="w-[11px] h-[11px] rounded-full shrink-0"
                  style={{ background: NODE_FILL[type] }}
                />
              )}
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
