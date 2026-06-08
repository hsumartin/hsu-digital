import { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import LegalSection from '@/components/legal/LegalSection';

export const metadata: Metadata = {
  title: 'Impressum — Martin Hsu',
  description: 'Rechtliche Angaben gemäss Art. 3 Abs. 1 lit. s UWG.',
  alternates: { canonical: '/impressum' },
};

export default function ImpressumPage() {
  return (
    <PageShell>
      <main className="max-w-[56rem] mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-20 pb-24">

        {/* ── Header ── */}
        <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-gold-600 mb-6">
          Rechtliche Angaben
        </p>
        <h1 className="font-serif font-normal text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.025em] text-ink mb-3">
          Impressum
        </h1>
        <p className="font-serif italic text-[1.2rem] text-stone-500 mb-16">
          Angaben gemäss Art. 3 Abs. 1 lit. s UWG
        </p>

        {/* ── 01 Anbieter ── */}
        <LegalSection num="01" title="Anbieter dieser Website" id="anbieter">
          <div
            className="border border-stone-200 bg-[#F8F7F3] grid gap-0 mt-0"
            aria-label="Kontaktangaben"
          >
            {[
              { key: 'Name', val: 'Martin Hsu' },
              { key: 'Adresse', val: 'Elfenweg 15\n8038 Zürich\nSchweiz' },
              { key: 'E-Mail', val: 'kontakt@martinhsu.digital', href: 'mailto:kontakt@martinhsu.digital' },
              { key: 'Website', val: 'martinhsu.digital' },
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

        {/* ── 02 Redaktion ── */}
        <LegalSection num="02" title="Redaktion" id="redaktion">
          <p>
            Verantwortlich für die Inhalte dieser Website ist Martin Hsu unter der oben
            genannten Anschrift. Alle Texte, Konzepte, Diagramme und Projektbeschreibungen
            wurden von Martin Hsu verfasst, sofern nicht anders ausgewiesen.
          </p>
        </LegalSection>

        {/* ── 03 Urheberrecht ── */}
        <LegalSection num="03" title="Nutzungsrechte und Inhalte" id="urheberrecht">
          <p>
            Sämtliche Inhalte dieser Website — Texte, Bilder, Diagramme, Quellcode,
            Konzepte und gestalterische Elemente — unterliegen, soweit nicht anders
            gekennzeichnet, dem schweizerischen Urheberrecht. Eine Vervielfältigung,
            Bearbeitung, Verbreitung oder Verwertung über die Grenzen des Urheberrechts
            hinaus bedarf der schriftlichen Zustimmung des Verfassers.
          </p>
          <p>
            Projekte aus dem beruflichen Kontext (insbesondere CivitasFlow und die
            GIS-Suchfunktion) werden in anonymisierter und konzeptioneller Form
            dargestellt. Die Rechte an den dort beschriebenen Systemen liegen bei der
            jeweils auftraggebenden Stelle.
          </p>
        </LegalSection>

        {/* ── 04 Haftungsausschluss ── */}
        <LegalSection num="04" title="Haftung für Inhalte und Links" id="haftung">
          <p>
            Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine
            Gewähr übernommen werden. Die Nutzung der Inhalte erfolgt auf eigene
            Verantwortung der Nutzerin oder des Nutzers.
          </p>
          <p>
            Diese Website enthält Verweise auf externe Websites Dritter. Auf deren Inhalte
            hat der Anbieter keinen Einfluss; eine Haftung für diese fremden Inhalte ist
            ausgeschlossen. Für die Inhalte der verlinkten Seiten ist ausschliesslich der
            jeweilige Anbieter verantwortlich.
          </p>
        </LegalSection>

        {/* ── 05 Bildnachweise ── */}
        <LegalSection num="05" title="Verwendetes Material" id="bildnachweise">
          <p>
            Portraitaufnahmen sowie Projektabbildungen aus dem Architekturstudium und der
            Tätigkeit beim UGZ stammen, sofern nicht anders gekennzeichnet, von Martin Hsu
            beziehungsweise wurden mit Genehmigung verwendet. Diagramme zu KI-Themen wurden
            eigens für die Artikel auf martinhsu.digital erstellt.
          </p>
        </LegalSection>

      </main>
    </PageShell>
  );
}
