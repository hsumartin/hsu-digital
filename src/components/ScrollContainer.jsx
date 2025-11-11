export default function ScrollContainer({ children }) {
  return (
    <div
      id="scroll-context"
      className="relative w-full max-w-[1080px] max-h-[90vh] overflow-y-auto overflow-x-hidden
                 rounded-2xl bg-surface-overlay/95 border border-gold-400/15 shadow-soft-dark
                 scrollbar-none"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
