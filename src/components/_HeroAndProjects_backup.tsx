// src/components/HeroAndProjects.tsx
export default function HeroAndProjects() {
  return (
    <main className="relative min-h-screen bg-surface-base text-text-primary font-sans overflow-hidden">
      {/* 🌌 Atmosphärische Raum-Licht-Ebene */}
      <div className="absolute inset-0 bg-gradient-space" />
      <div className="absolute inset-0 bg-gradient-gold opacity-60 mix-blend-soft-light" />

      {/* Optional: leichte Weißlicht-Nuance zur Aufhellung */}
      <div className="absolute inset-0 mix-blend-soft-light bg-[radial-gradient(circle_at_70%_90%,rgba(255,255,255,0.03),transparent_80%)]" />

      {/* HERO SECTION */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-40 px-6">
        <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-gold-400 drop-shadow-gold-soft">
          Martin Hsu
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl">
          Designstratege · Visuelle Komposition · Digitale Ästhetik
        </p>
        <a
          href="#projects"
          className="mt-10 inline-block rounded-2xl border border-gold-500/40 px-8 py-3 text-gold-400 hover:bg-gold-500/10 transition-theme duration-slow ease-breath shadow-gold-soft"
        >
          Projekte ansehen
        </a>
      </section>

      {/* PROJECT GRID */}
      <section
        id="projects"
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-24"
      >
        {["Interface Design", "Markenraum", "Visual Systems"].map((title, i) => (
          <div
            key={i}
            className="rounded-3xl bg-surface-overlay/70 backdrop-blur-md shadow-soft-dark hover:shadow-gold-soft hover:border-gold-400/30 transition-theme duration-slow ease-breath border border-navy-700/60 p-8"
          >
            <h3 className="text-xl font-semibold text-gold-400 mb-2">
              {title}
            </h3>
            <p className="text-neutral-200 leading-relaxed">
              Experimentelle Systeme für Licht, Raum und digitale Semantik.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
