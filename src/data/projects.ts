export type ProjectCategory = 'ugz' | 'arch';

export interface ProjectIndex {
  slug: string;
  title: string;
  context: string;
  domain: string;
  kicker: string;
  status: string;
  tags: string[];
  description: string;
  artifacts: string;
  category: ProjectCategory;
  featured: boolean;
  hasDetail: boolean;
}

export interface ProjectDetail extends ProjectIndex {
  subtitle: string;
  lead: string;
  record: Array<{ key: string; value: string; gold?: boolean }>;
  abstractText: string;
  notice?: string;
}

export const projects: ProjectIndex[] = [
  {
    slug: 'civitasflow',
    title: 'CivitasFlow',
    context: 'Öffentliche Verwaltung · Baubewilligung · Product Ownership',
    domain: 'Verwaltung · Baubewilligung',
    kicker: 'Featured · Fachsystem',
    status: 'Im Einsatz',
    tags: ['Requirements', 'Systemlogik', 'Referenzfall'],
    description:
      'Digitales Fachsystem zur Vernetzung fachlicher Prüfungen, Zuständigkeiten und Arbeitsstände im Baubewilligungsverfahren. Die Fallstudie zeigt, wie organisatorische Wirklichkeit in prüfbare Systemlogik übersetzt wird.',
    artifacts: 'Systemarchitektur · Prozessmodell · Rollenmatrix',
    category: 'ugz',
    featured: true,
    hasDetail: true,
  },
  {
    slug: 'gis-suchfunktion',
    title: 'GIS-Suchfunktion',
    context: 'GIS · Datenmodellierung · Verwaltung',
    domain: 'Geodaten · Suchlogik · Verwaltung',
    kicker: 'Featured · GIS',
    status: 'Publiziert',
    tags: ['GIS', 'Datenmodell', 'Geodaten'],
    description:
      'Räumliche Zuständigkeiten im Baubewilligungsverfahren werden in eine geodatenbasierte, prüfbare und nachführbare Struktur überführt. Im Zentrum stehen Layerlogik, Suchbarkeit und fachliche Nachvollziehbarkeit.',
    artifacts: 'Layerstruktur · Suchlogik · Prozessbezug',
    category: 'ugz',
    featured: true,
    hasDetail: true,
  },
  {
    slug: 'sound-to-form',
    title: 'Sound to Form',
    context: 'Klangdaten · Geometrie · Prozess',
    domain: 'Klangdaten · Geometrie · Prozess',
    kicker: 'Computational',
    status: 'Studie',
    tags: ['Computational', 'Geometrie'],
    description:
      'Audiodaten werden in geometrische und animierte Strukturen übersetzt. Musik wird als Datensatz, Kurve und Formprozess lesbar.',
    artifacts: 'Prozesskette · Amplitudengraph · Formgenerierung',
    category: 'arch',
    featured: false,
    hasDetail: true,
  },
  {
    slug: 'algorithmische-waerme',
    title: 'Algorithmische Wärme',
    context: 'Robotik · Wachs · Reaktion',
    domain: 'Robotik · Wachs · Reaktion',
    kicker: 'Material',
    status: 'Experiment',
    tags: ['Material', 'Robotik'],
    description:
      'Experimentelle Materialstudie über Wärme, Steuerung und Reaktion. Ein Roboterarm steuert thermische Prozesse, das Material antwortet mit Form.',
    artifacts: 'Versuchsreihe · Werkzeugkette · Materialreaktion',
    category: 'arch',
    featured: false,
    hasDetail: true,
  },
  {
    slug: 'mittenmang',
    title: 'Mittenmang',
    context: 'Hamburg · Grünband · Strategie',
    domain: 'Hamburg · Grünband · Strategie',
    kicker: 'Städtebau',
    status: 'Entwurf',
    tags: ['Städtebau', 'Strategie'],
    description:
      'Städtebaulicher Entwurf in Hamburg, der ein unterbrochenes Grünband als räumliche Strategie weiterführt und Landschaft, Verbindung und Quartierslogik zusammendenkt.',
    artifacts: 'Grünband · Städtebauliche Setzung · Strategie',
    category: 'arch',
    featured: false,
    hasDetail: true,
  },
  {
    slug: 'ohnesorg',
    title: 'Erinnerung als räumliche Eskalation',
    context: 'Ohnesorg-Denkmal',
    domain: 'Erinnerung · Raumdramaturgie · Konzept',
    kicker: 'Architektur',
    status: 'Entwurf',
    tags: ['Architektur', 'Erinnerung'],
    description:
      'Ein Erinnerungsort wird als sequenzielle Raumdramaturgie verstanden. Architektur erzeugt Annäherung, Verdichtung, Konfrontation und Reflexion.',
    artifacts: 'Raumsequenz · Akte · Städtebauliche Setzung',
    category: 'arch',
    featured: false,
    hasDetail: true,
  },
];

export const civitasflowDetail: ProjectDetail = {
  ...projects[0],
  subtitle: 'Digitales Fachsystem für Baubewilligungen',
  lead: 'Eine webbasierte Plattform zur Vernetzung fachlicher Prüfungen, Zuständigkeiten und Arbeitsstände im Baubewilligungsverfahren. Der Fokus liegt nicht auf Technologie als Selbstzweck, sondern auf der Modellierung organisatorischer Wirklichkeit.',
  record: [
    { key: 'Status', value: 'Im Einsatz', gold: true },
    { key: 'Domäne', value: 'Verwaltung · Baubewilligung' },
    { key: 'Rolle', value: 'PO-nah · Requirements · QS' },
    { key: 'Methodik', value: 'Scrum · User Stories · MVP' },
    { key: 'Systemtyp', value: 'Fachapplikation' },
    { key: 'Artefakte', value: 'Architektur · Prozess · Matrix' },
    { key: 'Darstellung', value: 'Abstrahiert' },
    { key: 'Vertraulichkeit', value: 'Keine internen Daten' },
  ],
  abstractText:
    'CivitasFlow modelliert ein digitales Fachsystem für verwaltungsnahe Baubewilligungsverfahren. Im Zentrum steht die Übersetzung fachlicher Zuständigkeiten, Prüfbereiche und Prozessstände in eine nachvollziehbare Systemstruktur. Die Fallstudie zeigt, wie Product Ownership, Requirements Engineering und Systemdenken zusammenwirken, wenn digitale Verwaltung nicht nur automatisiert, sondern fachlich modelliert wird.',
  notice:
    'CivitasFlow wird als abstrahierte Portfolio-Fallstudie geführt. Interne Bezeichnungen, reale Daten und vertrauliche Abläufe werden nicht dargestellt.',
};

export const gisSuchfunktionDetail: ProjectDetail = {
  ...projects[1],
  subtitle: 'Geodatenbasierte Zuständigkeitslogik im Baubewilligungsverfahren',
  lead: 'Räumliche Zuständigkeiten im Baubewilligungsverfahren in eine geodatenbasierte, prüfbare und nachführbare Struktur überführt — publiziert im Geodatenkatalog der Stadt Zürich.',
  record: [
    { key: 'Status', value: 'Publiziert', gold: true },
    { key: 'Domäne', value: 'GIS · Baubewilligung' },
    { key: 'Rolle', value: 'Konzeption · Umsetzung · QS' },
    { key: 'Werkzeuge', value: 'QGIS · SQL · GeoPackage' },
    { key: 'Systemtyp', value: 'Geodatenstruktur' },
    { key: 'Artefakte', value: 'Architektur · Prozessmodell' },
    { key: 'Ergebnis', value: 'Geodatenkatalog Zürich' },
    { key: 'Kontext', value: 'Öffentliche Verwaltung' },
  ],
  abstractText:
    'Die GIS-gestützte Suchfunktion übersetzt organisatorische Zuständigkeitslogik in eine räumlich abfragbare Datenstruktur. Zuständigkeiten im Baubewilligungsverfahren werden geodatenbasiert, auf mehreren räumlichen Ebenen (Stadtgrenze, Stadtkreise, Quartiere, Gebäude) prüfbar und zentral nachführbar gemacht. Das Ergebnis ist im Geodatenkatalog der Stadt Zürich publiziert.',
};

export const soundToFormDetail: ProjectDetail = {
  ...projects[2],
  subtitle: 'Klang als architektonischer Generierungsprozess',
  lead: 'Audiodaten aus Hans Zimmers Komposition Why Do We Fall werden in Blender als Amplitudengraphen extrahiert, in Rhino 3D zu Schichtgeometrie übereinandergelegt und in Maya animiert — Musik als geometrischer Datensatz.',
  record: [
    { key: 'Status', value: 'Studie', gold: true },
    { key: 'Kontext', value: 'MAYA-Workshop · TU Braunschweig' },
    { key: 'Jahr', value: '2014/15' },
    { key: 'Werkzeuge', value: 'Blender · Rhino 3D · Maya · V-Ray' },
    { key: 'Systemtyp', value: 'Generativer Prozess' },
    { key: 'Artefakte', value: 'Amplitudenanalyse · Geometrie · Rendering' },
    { key: 'Betreuung', value: 'Zaha Hadid Architects' },
    { key: 'Institut', value: 'Institut für Mediales Entwerfen' },
  ],
  abstractText:
    'Sound to Form untersucht Klang als geometrischen Datensatz. Hans Zimmers Komposition Why Do We Fall wird in Blender als zeitbasierte Amplitudenkurve extrahiert, als Schichtebenen in Rhino 3D übereinandergelegt und zu einem dreidimensionalen Objekt gefügt. Die vertikale Entwicklung folgt dem emotionalen Spannungsbogen der Musik — von gedrückter Grundlage zu aufsteigender Verdichtung, zur zackigen Gipfelform.',
};

export const algorithmischeWaermeDetail: ProjectDetail = {
  ...projects[3],
  subtitle: 'Wachs als reaktives Medium zwischen digitaler Steuerung und physischem Verhalten',
  lead: 'Vier Versuchsanordnungen mit einem UR5-Industrieroboterarm erkunden Wachs als Material an der Grenze zwischen algorithmischer Steuerung und eigenständiger physikalischer Reaktion.',
  record: [
    { key: 'Status', value: 'Experiment', gold: true },
    { key: 'Kontext', value: 'Institute of Media Design' },
    { key: 'Jahr', value: '2016' },
    { key: 'Werkzeuge', value: 'UR5 · Rhino · Grasshopper · Python' },
    { key: 'Systemtyp', value: 'Materialstudie' },
    { key: 'Artefakte', value: 'Versuchsreihe · Prozessdokumentation' },
    { key: 'Format', value: 'Seminar · Freier Entwurf' },
    { key: 'Zusammenarbeit', value: 'Gruppenarbeit' },
  ],
  abstractText:
    'Vier Versuchsanordnungen mit einem UR5-Industrieroboterarm befragen Wachs als Material zwischen digitaler Steuerung und physikalischer Eigenlogik. Thermische Erosion durch Heissluft, Gusslogik über programmierte Bewegungspfade, mechanische Kreisbewegung während des Erstarrens und analoger Thermoschock durch Eis: Jeder Versuch offenbart eine andere Eigenschaft. Das Wachs antwortet, setzt Grenzen und schreibt seinen eigenen Zustand in die Form ein.',
};

export const ohnesorgDetail: ProjectDetail = {
  ...projects[5],
  subtitle: 'Erinnerungsdenkmal an die Tötung Benno Ohnesorgs, Berlin 1967',
  lead: 'Das Denkmal übersetzt den historischen Ablauf des 2. Juni 1967 in eine sequenzielle Raumdramaturgie nach dem Freytag-Schema. Fünf Akte führen den Besucher von der Enge des Eingangs bis zum Raum der Stille — Architektur als körperlich erfahrbare Erzählung.',
  record: [
    { key: 'Status', value: 'Entwurf', gold: true },
    { key: 'Kontext', value: 'Bachelorthesis TU Braunschweig' },
    { key: 'Jahr', value: '2017/18' },
    { key: 'Betreuung', value: 'Prof. Matthias Karch' },
    { key: 'Systemtyp', value: 'Raumdramaturgie' },
    { key: 'Artefakte', value: 'Pläne · Schnitte · Renderings' },
    { key: 'Material', value: 'Corten · Beton · Licht' },
    { key: 'Lage', value: 'Krumme Strasse, Berlin' },
  ],
  abstractText:
    'Erinnerung als räumliche Eskalation übersetzt den historischen Ablauf des 2. Juni 1967 in eine fünfaktige Raumdramaturgie. Das Denkmal ist in den Sockel eines aufgeständerten Wohngebäudes an der Krummen Strasse eingeschrieben und führt vier Ebenen in den Hinterhof hinab. Corten, Beton und gezielt eingesetztes Licht erzeugen Annäherung, Verdichtung, Konfrontation und Reflexion — Architektur als körperlich erfahrbare Erzählung eines historischen Moments.',
};

export const mittenmangDetail: ProjectDetail = {
  ...projects[4],
  subtitle: 'Grüne Welle — Ein städtebaulicher Entwurf in Hamburg',
  lead: 'Die Gruppe verweigert die Beschränkung auf das zugewiesene Areal und fragt nach dem grösseren räumlichen Zusammenhang. Ein unterbrochenes Grünband wird zur Leitidee: eine begehbare Brückenstruktur verbindet drei Stadtgebiete.',
  record: [
    { key: 'Status', value: 'Entwurf', gold: true },
    { key: 'Kontext', value: 'ISU · TU Braunschweig' },
    { key: 'Ort', value: 'Hamburg Hafenrand' },
    { key: 'Jahr', value: '2015/16' },
    { key: 'Systemtyp', value: 'Städtebaulicher Entwurf' },
    { key: 'Artefakte', value: 'Analysekarte · Lageplan' },
    { key: 'Format', value: 'Gruppenarbeit' },
    { key: 'Massstab', value: '1:1000' },
  ],
  abstractText:
    'Mittenmang beginnt mit einer Verweigerung: Die Gruppe lehnt die Beschränkung auf das zugewiesene Areal ab und analysiert den grösseren räumlichen Zusammenhang. Ein unterbrochenes Grünband zieht sich fragmentiert durch mehrere Hamburger Stadtteile. Die Leitidee — eine begehbare Brückenstruktur als urbaner Landschaftsraum für Fussgänger und Radfahrer — war stark. Was fehlte, war die mittlere Ebene: die räumliche Strategie. Das Projekt ist heute auch eine Reflexion über den Unterschied zwischen Konzeptebene und operativer Umsetzbarkeit.',
};

export function getProjectDetail(slug: string): ProjectDetail | null {
  if (slug === 'civitasflow') return civitasflowDetail;
  if (slug === 'gis-suchfunktion') return gisSuchfunktionDetail;
  if (slug === 'sound-to-form') return soundToFormDetail;
  if (slug === 'algorithmische-waerme') return algorithmischeWaermeDetail;
  if (slug === 'ohnesorg') return ohnesorgDetail;
  if (slug === 'mittenmang') return mittenmangDetail;
  return null;
}
