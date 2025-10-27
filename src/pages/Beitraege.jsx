import { Link } from "react-router-dom";
import Layout from "../Layout.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { Card, CardContent } from "../components/ui/card.jsx";

export default function Beitraege() {
  const beitraege = [
    {
      slug: "ki-governance",
      titel: "KI im öffentlichen Sektor – Verantwortung statt Hype",
      datum: "2025",
      teaser:
        "Warum Vertrauen, Transparenz und klare Governance-Strukturen die Grundlage für erfolgreiche KI-Projekte in der Verwaltung bilden.",
    },
    {
      slug: "bim-und-verwaltung",
      titel: "BIM und Datenqualität im Baubewilligungsverfahren",
      datum: "2024",
      teaser:
        "Wie modellbasierte Datenprüfungen den Baubewilligungsprozess transparenter und effizienter gestalten können.",
    },
  ];

  return (
    <Layout>
      <Breadcrumbs />

      <section id="beitraege" className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary">Beiträge</h2>

        <div className="space-y-6">
          {beitraege.map((b) => (
            <Card key={b.slug}>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary">
                    {b.titel}
                  </h3>
                  <span className="text-sm text-gray-500">{b.datum}</span>
                </div>
                <p className="text-gray-700">{b.teaser}</p>
                <Link
                  to={`/beitraege/${b.slug}`}
                  className="text-accent hover:text-primary text-sm transition-colors"
                >
                  Weiterlesen →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
