import { useEffect, useState } from "react";

export function useScrollProgress(targetId = null) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = targetId ? document.getElementById(targetId) : window;
    if (!el) return;
    const handler = () => {
      const max = el.scrollHeight - el.clientHeight;
      const ratio = el.scrollTop / max;
      setProgress(Math.min(Math.max(ratio, 0), 1));
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [targetId]);

  return progress;
}
