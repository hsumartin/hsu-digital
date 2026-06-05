import Link from 'next/link';
import { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import SectionLabel from '@/components/ui/SectionLabel';
import WritingIndexCard from '@/components/writings/WritingIndexCard';
import { writings } from '@/data/writings';

export const metadata: Metadata = {
  title: 'Schriften · Martin Hsu',
  description:
    'Whitepapers, Frameworks und Denkmodelle: der strukturierte Katalog hinter Projekten, Methode und KI-Haltung.',
  alternates: { canonical: '/schriften' },
};

const featured = writings.filter((w) => w.featured);
const catalog = writings.filter((w) => !w.featured);

export default function SchriftenPage() {
  return (
    <PageShell>
      {/* Header */}
      <header className="relative pt-24 pb-[3.2rem] border-b border-stone-100 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(43,104,149,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(43,104,149,0.10) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(110% 75% at 22% 0%,#000 22%,transparent 66%)',
            WebkitMaskImage: 'radial-gradient(110% 75% at 22% 0%,#000 22%,transparent 66%)',
          }}
        />
        <div className="relative z-10 max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
          <p className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-stone-400 mb-6">
            <b className="text-gold-600 font-medium">Editorial Architecture</b>
            {' × '}Civic Digital{' × '}
            <b className="text-gold-600 font-medium">AI Clarity</b>
          </p>
          <SectionLabel num="04">Schriften</SectionLabel>
          <div className="grid grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.8fr)] gap-12 items-end max-[860px]:grid-cols-1 max-[860px]:gap-6">
            <div>
              <h1 className="font-serif font-normal text-[clamp(3rem,6vw,5rem)] leading-[1.05] tracking-[-0.025em] max-w-[14ch] pb-[0.08em]">
                Denkmodelle, <em className="italic text-gold-600">keine Publikationen.</em>
              </h1>
            </div>
            <div>
              <p className="text-[1.04rem] leading-[1.72] text-stone-700 font-light max-w-[42ch]">
                Die Schriften bilden den strukturierten Katalog hinter Projekten, Methode und
                KI-Haltung. Sie funktionieren nicht als Blog, Newsfeed oder Wissensdatenbank,
                sondern als kuratierte Sammlung von{' '}
                <b className="text-stone-900 font-medium">Whitepapers, Frameworks und Denkmodellen</b>.
              </p>
            </div>
          </div>

          {/* MetadataRecord */}
          <div
            className="border border-stone-200 bg-[#F8F7F3] grid grid-cols-4 mt-8
                       max-[900px]:grid-cols-2 max-[520px]:grid-cols-1"
            aria-label="Schriftenübersicht"
          >
            {[
              { key: 'Umfang', val: '04 Schriften', gold: false },
              { key: 'Featured', val: '02 Referenzen', gold: true },
              { key: 'Typen', val: 'Denkmodell · Framework · Position', gold: false },
              { key: 'Routing', val: 'Start → Index → Detail', gold: false },
            ].map((item) => (
              <div
                key={item.key}
                className="p-[0.95rem_1.1rem] border-r border-stone-100 min-h-[4.9rem] last:border-r-0"
              >
                <span className="block font-mono text-[0.56rem] tracking-[0.13em] uppercase text-stone-400 mb-[0.42rem]">
                  {item.key}
                </span>
                <span
                  className={`block font-mono text-[0.76rem] leading-[1.45] ${
                    item.gold ? 'text-gold-600' : 'text-blue-700'
                  }`}
                >
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* 01 Featured */}
        <section className="py-[4.5rem] border-b border-stone-100">
          <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <SectionLabel num="01">Featured-Schriften</SectionLabel>
            <div className="flex flex-col gap-[0.4rem]">
              {featured.map((w) => (
                <WritingIndexCard key={w.slug} writing={w} featured />
              ))}
            </div>
          </div>
        </section>

        {/* 02 Vollständiger Katalog */}
        <section className="py-[4.5rem] border-b border-stone-100">
          <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <SectionLabel num="02">Vollständiger Schriftenkatalog</SectionLabel>
            <div className="flex flex-col gap-[0.4rem]">
              {catalog.map((w) => (
                <WritingIndexCard key={w.slug} writing={w} />
              ))}
            </div>
          </div>
        </section>

        {/* 03 Routing */}
        <section className="py-[4.5rem] border-b border-stone-100">
          <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <SectionLabel num="03">Routing &amp; Skalierung</SectionLabel>
            <div className="border border-stone-200 bg-[#F8F7F3]">
              <div className="p-[1.65rem_1.85rem] border-b border-stone-100">
                <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-gold-600 mb-[0.65rem]">
                  Routing-Kette
                </div>
                <h2 className="font-serif font-normal text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.25] tracking-[-0.01em] mb-[0.8rem]">
                  Startseite → Schriftenindex → Schriftendetail.
                </h2>
                <p className="text-[0.95rem] leading-[1.72] text-stone-700 font-light max-w-[62ch]">
                  Die Startseite kuratiert wenige Schriften. Der Index führt den vollständigen
                  Katalog. Die Detailseite trägt Abstract, Kapitel, Diagramme, Referenzen und
                  Verbindungen. Neue Schriften werden als Datensätze ergänzt, nicht als
                  Layoutänderung.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-px bg-stone-200 max-[800px]:grid-cols-1">
                {[
                  { title: 'Startseite', text: 'Zeigt ausgewählte Schriften als Orientierung und verweist auf den vollständigen Katalog.' },
                  { title: '/schriften', text: 'Führt alle Whitepaper, Denkmodelle, Frameworks und Positionen als ruhigen Katalog.' },
                  { title: '/schriften/[slug]', text: 'Trägt die Tiefe: Abstract, Kapitel, Modelle, Diagramme, Downloads und Verbindungen.' },
                ].map((col) => (
                  <div key={col.title} className="bg-[#FBFAF7] p-[1.25rem_1.35rem]">
                    <h3 className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-gold-600 mb-[0.65rem]">
                      {col.title}
                    </h3>
                    <p className="text-[0.88rem] leading-[1.62] text-stone-700 font-light">
                      {col.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-[4.5rem]">
          <div className="max-w-[88rem] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
            <div
              className="bg-blue-800 text-[#F5F4F0] border border-[#183B55] p-[clamp(2rem,4vw,3rem)]
                         grid grid-cols-[1.4fr_1fr] gap-10 items-start max-[760px]:grid-cols-1"
            >
              <div>
                <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.1rem)] leading-[1.25] tracking-[-0.01em] text-[#F5F4F0]">
                  Schriften als <em className="italic text-[#F0E1B5]">Systemgedächtnis.</em>
                </h2>
              </div>
              <div>
                <p className="text-[1rem] leading-[1.72] text-[rgba(244,242,236,0.72)] font-light">
                  Die Schriften machen sichtbar, welche Prinzipien hinter Projekten, KI-Haltung
                  und Informationsarchitektur stehen. Sie dienen als Referenzebene, nicht als
                  laufender Blog.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <Link
                    href="/projekte"
                    className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#F5F4F0] no-underline border-b border-[rgba(244,242,236,0.22)] pb-[0.35rem]"
                  >
                    Projekte ansehen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
