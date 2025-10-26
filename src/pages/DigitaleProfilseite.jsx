import React from 'react'
import { Card, CardContent } from '../components/ui/card.jsx'
import { Button } from '../components/ui/button.jsx'

const projekte = [
  {
    titel: 'KI-Atlas Stadt Zürich',
    beschreibung:
      'Konzeption eines Lernsystems für den sicheren, pragmatischen KI-Einsatz in der Verwaltung. Fokus: Prompterstellung, Governance, Pilotierung für ZüriA.'
  },
  {
    titel: 'Geodaten-Suchmaske (QGIS)',
    beschreibung:
      'Aufbau einer geoverknüpften Suchmaske zur Ansprechpartner-Suche nach Gebietszuständigkeit. Umsetzung mit QGIS, SQL und Excel-Integration.'
  }
]

export default function DigitaleProfilseite() {
  return (
    <main className="min-h-screen bg-background text-text">
      {/* Hero */}
<section className="bg-gradient-to-b from-primary to-[#0e223c] text-white">
  <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col sm:flex-row sm:items-center sm:space-x-8">
    
{/* Profilfoto */}
<img
  src="/profile.jpg"
  alt="Profilfoto von Martin Hsu"
  className="w-32 h-32 rounded-full object-cover photo-gold-animate mb-6 sm:mb-0"
/>

    {/* Textbereich */}
    <div>
      <h1 className="text-4xl sm:text-5xl font-heading font-semibold tracking-tight text-appear">
  Martin Hsu
</h1>
      <div className="mt-2 h-1 w-24 bg-accent/90 rounded-full glow-gold"></div>
      <p className="mt-6 text-lg max-w-3xl opacity-95 font-sans text-appear-delayed">
  Product Owner & Systemgestalter für digitale Verwaltungsprozesse, KI-Integration und datenbasierte Innovation.
</p>
      <p className="mt-2 max-w-3xl text-white/80">
        Ich gestalte Schnittstellen zwischen Fachlichkeit, Technologie und Strategie – mit Fokus auf Klarheit, Effizienz und Verantwortungsbewusstsein.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button className="bg-accent text-primary hover:shadow-glow-gold">Kontakt aufnehmen</Button>
        <a href="#projekte" className="px-4 py-2 rounded-md border border-white/20 hover:border-accent/70 transition">Projekte ansehen</a>
      </div>
    </div>
  </div>
</section>

      {/* Über mich */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Über mich</h2>
        <Card>
          <CardContent>
            <p>
              Ich gestalte digitale Anwendungen für die öffentliche Verwaltung mit Fokus auf Datenqualität,
              Benutzerfreundlichkeit und nachhaltiger Wirkung. Aktuell tätig bei der Stadt Zürich (UGZ) im Bereich Digitalisierung BBV.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Projekte */}
      <section id="projekte" className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-primary">Projekte</h2>
          <span className="text-sm text-gray-500">Auswahl</span>
        </div>
        {projekte.map((p) => (
          <Card key={p.titel}>
            <CardContent>
              <h3 className="text-xl font-semibold text-primary">{p.titel}</h3>
              <p className="mt-2 text-gray-700">{p.beschreibung}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Laufende Entwicklungen */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-2xl font-semibold text-primary">Laufende Entwicklungen</h2>
        <Card>
          <CardContent>
            <h3 className="text-xl font-semibold text-primary">G Mass Stack (GPT-Systemarchitektur)</h3>
            <p className="mt-2 text-gray-700">
              Aufbau eines modularen Frameworks für die strukturierte Nutzung von KI-Systemen in Verwaltung und Forschung.
              Fokus auf Methodik, Transparenz und Verantwortung.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Downloads */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Downloads</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <a href="/downloads/CV_MartinHsu.pdf" className="block rounded-xl border p-4 hover:shadow-md transition">
            <div className="font-medium">Lebenslauf (PDF)</div>
            <div className="text-sm text-gray-600">Aktuelle Version</div>
          </a>
          <a href="/downloads/Zeugnisse_MartinHsu.pdf" className="block rounded-xl border p-4 hover:shadow-md transition">
            <div className="font-medium">Zeugnisse</div>
            <div className="text-sm text-gray-600">Zwischen- & Praktikumszeugnisse</div>
          </a>
          <a href="/downloads/Zertifikate_MartinHsu.pdf" className="block rounded-xl border p-4 hover:shadow-md transition">
            <div className="font-medium">Zertifikate</div>
            <div className="text-sm text-gray-600">PSPO, BIM-Manager u. a.</div>
          </a>
        </div>
      </section>

      {/* Kontakt */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <Card>
          <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-primary">Kontakt</h2>
              <p className="text-gray-700 mt-1">Offen für Positionen in Digitalisierung, Product Ownership, Data/AI Consulting und Prozessmanagement.</p>
            </div>
            <Button asChild className="bg-accent text-primary hover:shadow-glow-gold">
              <a href="mailto:martin.hsu@gmx.net">E-Mail senden</a>
            </Button>
          </CardContent>
        </Card>
        <p className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} Martin Hsu</p>
      </section>
    </main>
  )
}
