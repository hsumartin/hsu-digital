import PageShell from '@/components/layout/PageShell';
import HeroSection from '@/components/home/HeroSection';
import ArbeitsfelderSection from '@/components/home/ArbeitsfelderSection';
import SystemeProjekteSection from '@/components/home/SystemeProjekteSection';
import MethodeKiSection from '@/components/home/MethodeKiSection';
import SchriftenSection from '@/components/home/SchriftenSection';
import VerbindungenHomeSection from '@/components/home/VerbindungenHomeSection';
import KontaktSection from '@/components/home/KontaktSection';

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <ArbeitsfelderSection />
      <SystemeProjekteSection />
      <MethodeKiSection />
      <SchriftenSection />
      <VerbindungenHomeSection />
      <KontaktSection />
    </PageShell>
  );
}
