import { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import LegalSection from '@/components/legal/LegalSection';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — Martin Hsu',
  description: 'Datenschutzerklärung gemäss revidiertem Schweizer Datenschutzgesetz (revDSG) sowie DSGVO.',
  alternates: { canonical: '/datenschutz' },
};

const TOC_ITEMS = [
  { href: '#verantwortlich', label: 'Verantwortliche Stelle' },
  { href: '#grundsatz', label: 'Grundsatz der Datenbearbeitung' },
  { href: '#logfiles', label: 'Server-Logfiles' },
  { href: '#cookies', label: 'Cookies und lokale Speicherung' },
  { href: '#schriften', label: 'Schriften (lokal ausgeliefert)' },
  { href: '#kontakt', label: 'Kontaktaufnahme per E-Mail' },
  { href: '#rechte', label: 'Ihre Rechte' },
  { href: '#aenderungen', label: 'Änderungen dieser Erklärung' },
] as const;

export default function DatenschutzPage() {
  return (
    <PageShell>
      <main className="max-w-[56rem] mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-20 pb-24">

        {/* ── Header ── */}
        <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-gold-600 mb-6">
          Rechtliche Angaben
        </p>
        <h1 className="font-serif font-normal text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.025em] text-ink mb-3">
          Datenschutzerklärung
        </h1>
        <p className="font-serif italic text-[1.2rem] text-stone-500 mb-2">
          Information gemäss revidiertem Schweizer Datenschutzgesetz (revDSG) sowie DSGVO
        </p>
        <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-stone-400 mb-12">
          Stand: Juni 2026
        </p>

        {/* ── Inhaltsverzeichnis ── */}
        <nav
          aria-label="Inhaltsübersicht Datenschutz"
          className="border border-stone-200 bg-[#F8F7F3] p-6 mb-16"
        >
          <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-gold-600 mb-4">
            Übersicht
          </p>
          <ol className="list-none space-y-1">
            {TOC_ITEMS.map(({ href, label }, i) => (
              <li key={href} className="flex gap-3 items-baseline">
                <span className="font-mono text-[0.65rem] text-stone-400 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <a
                  href={href}
                  className="text-[0.92rem] text-stone-600 no-underline hover:text-gold-600
                             transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── 01 Verantwortliche Stelle ── */}
        <LegalSection num="01" title="Verantwortliche Stelle" id="verantwortlich">
          <p>
            Verantwortlich für die Datenbearbeitung im Sinne des revDSG sowie — soweit
            anwendbar — Art. 4 Nr. 7 DSGVO ist:
          </p>
          <div
            className="border border-stone-200 bg-[#F8F7F3] grid gap-0 mt-4"
            aria-label="Kontaktangaben"
          >
            {[
              { key: 'Name', val: 'Martin Hsu' },
              { key: 'Adresse', val: 'Elfenweg 15\n8038 Zürich\nSchweiz' },
              { key: 'E-Mail', val: 'kontakt@martinhsu.digital', href: 'mailto:kontakt@martinhsu.digital' },
            ].map(({ key, val, href }) => (
              <div
                key={key}
                className="grid grid-cols-[10rem_1fr] border-b border-stone-100 last:border-b-0
                           max-[520px]:grid-cols-1"
              >
                <div className="px-4 py-3 font-mono text-[0.65rem] tracking-[0.14em] uppercase text-stone-400
                                border-r border-stone-100 max-[520px]:border-r-0 max-[520px]:border-b max-[520px]:pb-1">
                  {key}
                </div>
                <div className="px-4 py-3 text-stone-800">
                  {href ? (
                    <a
                      href={href}
                      className="text-gold-600 no-underline border-b border-gold-500/30 pb-px
                                 hover:border-gold-500 transition-colors duration-200"
                    >
                      {val}
                    </a>
                  ) : (
                    val.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </LegalSection>

        {/* ── 02 Grundsatz ── */}
        <LegalSection num="02" title="Grundsatz der Datenbearbeitung" id="grundsatz">
          <p>
            Diese Website ist als statisches Portfolio konzipiert. Es werden bewusst{' '}
            <strong className="text-stone-900 font-medium">
              keine Tracking-Tools, keine Analyse-Skripte und keine Werbecookies
            </strong>{' '}
            eingesetzt. Personenbezogene Daten werden nur in dem Umfang erhoben und
            bearbeitet, der für den Betrieb der Website technisch erforderlich ist oder
            wenn Sie aktiv mit dem Anbieter Kontakt aufnehmen.
          </p>
          <p>
            Die Bearbeitung erfolgt nach den Grundsätzen der Zweckbindung, der
            Verhältnismässigkeit, der Datensicherheit und der Transparenz.
          </p>
        </LegalSection>

        {/* ── 03 Server-Logfiles ── */}
        <LegalSection num="03" title="Server-Logfiles" id="logfiles">
          <p>
            Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch
            technische Informationen in Server-Logfiles erfasst, die Ihr Browser übermittelt:
          </p>
          <ul className="list-disc pl-5 space-y-1 max-w-[60ch]">
            <li>IP-Adresse (gekürzt, soweit der Hoster dies unterstützt)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene URL und HTTP-Status</li>
            <li>verwendeter Browser, Betriebssystem und Referrer-URL</li>
          </ul>
          <p>
            Diese Daten dienen ausschliesslich der Sicherstellung des störungsfreien
            Betriebs, der Sicherheit der Infrastruktur und der statistischen Auswertung in
            aggregierter Form. Eine Zusammenführung mit anderen Datenquellen oder eine
            Personenidentifizierung erfolgt nicht. Die Speicherdauer beträgt in der Regel{' '}
            <strong className="text-stone-900 font-medium">maximal 30 Tage</strong>.
          </p>
        </LegalSection>

        {/* ── 04 Cookies ── */}
        <LegalSection num="04" title="Cookies und lokale Speicherung" id="cookies">
          <p>
            Diese Website setzt{' '}
            <strong className="text-stone-900 font-medium">
              keine Tracking- oder Marketing-Cookies
            </strong>. Derzeit werden keine Einstellungen dauerhaft im Browser gespeichert
            und keine Nutzungsprofile im Browser angelegt.
          </p>
          <p>
            Sollten künftig rein technische lokale Speicherungen eingesetzt werden, dienen
            sie ausschliesslich der Funktion der jeweiligen Seite und nicht dem Tracking.
          </p>
        </LegalSection>

        {/* ── 05 Schriften ── */}
        <LegalSection num="05" title="Schriften (lokal ausgeliefert)" id="schriften">
          <p>
            Diese Website verwendet die Schriften Instrument Serif, IBM Plex Sans und IBM
            Plex Mono. Die Schriften werden zusammen mit den übrigen Website-Dateien lokal
            über den eigenen Hosting-Anbieter ausgeliefert. Beim Aufruf einer Seite stellt
            Ihr Browser{' '}
            <strong className="text-stone-900 font-medium">
              keine direkte Verbindung zu Servern Dritter
            </strong>{' '}
            her, um Schriften zu laden. Es werden dabei keine Daten an externe
            Schriftanbieter übermittelt.
          </p>
        </LegalSection>

        {/* ── 06 Kontakt ── */}
        <LegalSection num="06" title="Kontaktaufnahme per E-Mail" id="kontakt">
          <p>
            Wenn Sie per E-Mail Kontakt mit dem Anbieter aufnehmen, werden Ihre Angaben
            (E-Mail-Adresse, Name sofern angegeben, Inhalt der Nachricht) zur Bearbeitung
            Ihres Anliegens gespeichert. Diese Daten werden nicht an Dritte weitergegeben
            und gelöscht, sobald die Bearbeitung abgeschlossen ist und keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>
        </LegalSection>

        {/* ── 07 Rechte ── */}
        <LegalSection num="07" title="Ihre Rechte" id="rechte">
          <p>Sie haben jederzeit das Recht:</p>
          <ul className="list-disc pl-5 space-y-1 max-w-[60ch]">
            <li>
              <strong className="text-stone-900 font-medium">Auskunft</strong> über die zu
              Ihrer Person bearbeiteten Daten zu erhalten,
            </li>
            <li>
              die <strong className="text-stone-900 font-medium">Berichtigung</strong>{' '}
              unrichtiger Daten zu verlangen,
            </li>
            <li>
              die <strong className="text-stone-900 font-medium">Löschung</strong> oder die
              Einschränkung der Bearbeitung zu verlangen,
            </li>
            <li>
              eine erteilte{' '}
              <strong className="text-stone-900 font-medium">Einwilligung</strong> mit
              Wirkung für die Zukunft zu widerrufen,
            </li>
            <li>
              der Bearbeitung Ihrer Daten zu{' '}
              <strong className="text-stone-900 font-medium">widersprechen</strong>,
            </li>
            <li>
              bei der zuständigen Aufsichtsbehörde (in der Schweiz: EDÖB){' '}
              <strong className="text-stone-900 font-medium">Beschwerde</strong>{' '}
              einzulegen.
            </li>
          </ul>
          <p>
            Zur Wahrnehmung Ihrer Rechte genügt eine formlose Mitteilung an die unter
            Punkt 01 genannte E-Mail-Adresse.
          </p>
        </LegalSection>

        {/* ── 08 Änderungen ── */}
        <LegalSection num="08" title="Änderungen dieser Erklärung" id="aenderungen">
          <p>
            Diese Datenschutzerklärung wird angepasst, sobald sich die rechtlichen
            Rahmenbedingungen oder die technische Umsetzung dieser Website wesentlich
            ändern. Es gilt die zum Zeitpunkt Ihres Besuchs jeweils aktuelle Fassung.
          </p>
        </LegalSection>

      </main>
    </PageShell>
  );
}
