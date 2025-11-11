export default function UIPreview() {
  return (
    <main className="min-h-screen bg-navy-900 text-neutral-200 py-24 px-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-gold-400 text-4xl font-display font-semibold mb-10">
          UI-System Preview
        </h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="btn-gold">Primärer Button</button>
          <button className="btn-outline">Sekundärer Button</button>
          <button className="btn-ghost">Ghost Button</button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-12">
          <span className="badge-gold">Gold</span>
          <span className="badge-dark">Dark</span>
          <span className="badge-outline">Outline</span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card card-hover p-6">
            <h3 className="section-title">Card-Titel</h3>
            <p className="subtitle">
              Beispielinhalt – harmonische Gold-Kontraste auf Navy-Hintergrund.
            </p>
            <button className="btn-outline mt-4">Aktion</button>
          </div>

          <div className="card card-hover p-6">
            <h3 className="section-title">Hover-Interaktion</h3>
            <p className="subtitle">
              Sanfte Tiefenwirkung bei Mausbewegung.
            </p>
            <button className="btn-gold mt-4">Aktion</button>
          </div>
        </div>

        {/* Typografie */}
        <div className="prose prose-invert prose-gold">
          <h2>Typografie-Beispiel</h2>
          <p>
            Beispielabsatz mit Systemtypografie und
            <a href="#" className="link-gold"> Inline-Link</a>.
          </p>
          <ul>
            <li>Listenpunkt 1</li>
            <li>Listenpunkt 2</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
