import Image from 'next/image';

export default function ProfileHero() {
  return (
    <section
      className="grid-profile-hero overflow-hidden"
      aria-label="Profil"
    >
      {/* Portrait */}
      <div className="relative overflow-hidden max-[900px]:aspect-[4/5] max-[900px]:max-h-[450px]">
        <Image
          src="/uploads/DSC_7508_4a.jpg"
          alt="Portrait Martin Hsu"
          fill
          className="object-cover object-[center_15%] max-[900px]:object-[center_38%] grayscale-[5%]"
          priority
        />
        {/* Fade-Overlay Richtung Inhaltsspalte — Desktop only */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none max-[900px]:hidden"
          style={{
            background:
              'linear-gradient(to right, transparent 50%, rgba(245,244,240,0.55) 78%, #F5F4F0 100%)',
          }}
        />
        {/* Fade-Overlay unten — Mobile only */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none hidden max-[900px]:block"
          style={{
            background:
              'linear-gradient(to bottom, transparent 72%, rgba(245,244,240,0.7) 90%, #F5F4F0 100%)',
          }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center px-[clamp(2rem,5vw,5rem)] py-[clamp(3rem,6vw,6rem)] max-[900px]:px-[clamp(1.5rem,6vw,4rem)] max-[900px]:pt-10">
        <p className="font-mono text-[0.68rem] tracking-[0.22em] uppercase text-gold-600 mb-6">
          Profil · Martin Hsu
        </p>
        <h1 className="font-serif font-normal text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.025em] text-ink max-w-[16ch]">
          Informationsarchitekt{' '}
          <em className="italic text-gold-500">für Systeme und Denkstrukturen</em>
        </h1>
        <p className="font-mono text-[0.76rem] tracking-[0.14em] uppercase text-stone-400 mt-3">
          Digitalisierung · Verwaltung · KI
        </p>
        <p className="mt-8 text-[1rem] leading-[1.8] text-stone-600 font-light max-w-[34rem]">
          Architektur hat mich gelehrt, in Massstäben zu denken: Systeme zu
          verstehen, zu ordnen und ihnen Form zu geben. Heute arbeite ich an
          der Schnittstelle von Raum, Verwaltung und künstlicher Intelligenz,
          dort, wo Strukturen sichtbar, steuerbar und lernfähig werden.
        </p>
      </div>
    </section>
  );
}
