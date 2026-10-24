---
title: "Von der Problemstellung zur eigenständigen Systemkonzeption"
subtitle: "Eine quellengebundene Fallstudie zur methodengeführten, KI-gestützten Entwicklung eines lokalen Agentensystems"
documentType: "Methodisches Whitepaper / explorative retrospektive Einzelfallstudie"
version: "Öffentliche Arbeitsfassung V1.6.1 (auditgebundene Präzisierung; Basis: öffentliche V1.6)"
date: "2026-10-23"
locale: "de-CH"
status: "Öffentlicher Publikationsentwurf – redaktionell vorbereitet, nicht freigegeben"
sourcePolicy: "Historische Unterlagen bleiben historische Belege; keine Übernahme als aktuelle Architekturautorität"
implementationStatus: "Die MVP-Implementierung und deren technische Prüfungen werden in diesem Dokument nicht nachgewiesen"
---

# Von der Problemstellung zur eigenständigen Systemkonzeption

*Eine Fallstudie zur methodengeführten, KI-gestützten Entwicklung eines lokalen Agentensystems*

**Öffentliche Arbeitsfassung V1.6.1 · 23. Oktober 2026**  
**Dokumentcharakter:** Methodisches Whitepaper mit historischem Erkenntnisinteresse. Kein Implementierungs-, Sicherheits- oder Wirksamkeitsnachweis des geplanten lokalen KI-Agentensystems.

<figure class="whitepaper-illustration whitepaper-illustration--hero">
  <img src="/assets/writings/methodengefuehrte-ki-systementwicklung/wp-methodik-01-hero.webp" alt="Headerbild: abstrakte Verbindung von Landschaft und Architektur mit präzisen Linien in Blau und Gold." width="1536" height="355" loading="eager" decoding="async" />
  <figcaption>Konzeptionelle Illustration: Von der offenen Problemstellung zur strukturierten Systemvorstellung.</figcaption>
</figure>

## Zusammenfassung

Inwiefern kann die Verbindung vorhandener interdisziplinärer Kompetenzen, methodischer Projektarbeit und generativer KI die Erschliessung neuer technischer Handlungsfelder unterstützen? Diese Fallstudie untersucht die Frage anhand der Entstehung eines lokalen KI-Agentensystem-Projekts. Am Anfang stand kein Programmierauftrag. Der Entwicklungsweg führte von der Gestaltung spezialisierter Custom GPTs über Schwierigkeiten bei der Übergabe von Arbeitsständen bis zu Fragen des Ressourcenverbrauchs in mehrstufigen, cloudbasierten KI-Arbeitsprozessen.

Die historische Grundlage umfasst frühe Gespräche zur Chat- und Themenorganisation im Mai 2025, erhaltene Custom-GPT-Konfigurationen und spätere GPT-Stack-Unterlagen, Konzeptnotizen und Gesprächszusammenfassungen zur lokalen Systemvision im Frühjahr 2026 sowie spätere Recherche- und Prozessunterlagen. Dazu gehören ein Phase-1-Rechercheauftrag, eine Scan-Registry und ein dokumentiertes Vorgehensmodell für Phase 2. Ergänzt wird sie durch persönliche Erinnerungen zur früheren Ausbildung, beruflichen Entwicklung und Nutzung verschiedener KI-Dienste. Die Quellen lassen wichtige Entwicklungsstufen erkennen. Eine lückenlose Datierung, eine kausale Wirksamkeitsmessung oder eine abschliessende Prüfung des Kompetenzzuwachses ermöglichen sie nicht.

Ein zentraler Befund der Fallstudie ist die **Veränderung der Problemstellung**: von der Ausarbeitung verhaltensstarker, spezialisierter Custom GPTs hin zur Frage, wie freie menschliche Reflexion, zuverlässiger Arbeitszustand und koordinierte technische Bearbeitung verbunden werden könnten. Gleichzeitig wurde auch das Vorgehen systematischer: Die breite, ausdrücklich entscheidungsfreie Exploration und das später differenzierte Vorgehensmodell dokumentieren eine zunehmende methodische Trennung von Anforderungsarbeit, Architekturvorbereitung und Technologieentscheidungen; das bedeutet nicht, dass alle vorgesehenen Schritte bereits durchgeführt wurden. Auch eine allgemeine Überlegenheit des Vorgehens ist damit nicht belegt. Es entsteht jedoch ein dokumentierbarer Einzelfall für die Untersuchung von KI als Instrument fachübergreifender Entwicklung.

**Leitunterscheidung:** Ein KI-gestützt erzeugtes Resultat ist nicht mit eigenständig erworbener Kompetenz gleichzusetzen. Ein Architekturentwurf ist kein Implementierungsnachweis. Lokaler Betrieb ist kein automatischer Souveränitätsnachweis.

## 1. Erkenntnisinteresse und Ausgangsfrage

Die öffentliche Diskussion über generative KI und Softwareentwicklung beginnt häufig bei der Codeerzeugung: Welche Anwendung lässt sich mit natürlichsprachlichen Anweisungen erstellen? Im hier untersuchten Fall beginnt der relevante Prozess früher. Bereits vor einer möglichen Implementierung wurden Aufgaben analysiert, Verhaltensregeln ausgearbeitet, spezialisierte KI-Rollen gestaltet, Probleme der Zusammenarbeit erkannt und die Entwicklung in unterscheidbare Untersuchungs- und Entscheidungsphasen gegliedert.

Die leitende Frage lautet deshalb:

> Inwiefern können vorhandene methodische und interdisziplinäre Kompetenzen in Verbindung mit KI-gestützter Wissenserschliessung und einem systematisch geführten Entwicklungsprozess den Weg von einer konkreten Nutzungseinschränkung zur eigenständigen Konzeption und späteren Überprüfung eines komplexen technischen Systems ermöglichen?

Daraus ergeben sich vier Teilfragen:

1. Welche bereits vorhandenen Erfahrungen und Kompetenzen prägten die Art, wie das Problem wahrgenommen und bearbeitet wurde?
2. Durch welche Nutzungserfahrungen verschob sich das Vorhaben von einzelnen spezialisierten Custom GPTs zu einem übergreifenden Agentensystem?
3. Wie wurden Exploration, Anforderungen, Architekturentscheidungen und Implementierung methodisch voneinander getrennt?
4. Welche Aussagen über neue Handlungsmöglichkeiten, eigenes Verständnis und die Grenzen der KI-Unterstützung lassen sich tatsächlich belegen?

Untersucht wird der tatsächliche Entwicklungsweg. Eine vorab festgelegte Erfolgsthese soll damit nicht bestätigt werden.

## 2. Methodik, Quellen und Aussagegrenzen

### 2.1 Fallstudiendesign

Die ursprüngliche Systemkonzeption und die inhaltliche Verantwortung für das untersuchte Projekt liegen beim Autor, der zugleich Projektinitiator und Beteiligter des rekonstruierten Entwicklungsprozesses ist. Die historische Aufarbeitung, Gliederung, Formulierung und redaktionelle Überprüfung dieses Whitepapers wurden durch generative KI unterstützt. Die Auswahl und Einordnung der Aussagen sowie die Verantwortung für die endgültige Veröffentlichung verbleiben beim Autor. Der Zugang zu eigenen Arbeitsunterlagen und früheren Entscheidungskontexten erleichtert die Rekonstruktion. Gleichzeitig können Erinnerungen selektiv sein und die spätere Interpretation beeinflussen. Zeitgenössische Dokumente, retrospektive Angaben und analytische Schlussfolgerungen werden daher unterschieden. KI-gestützte Textprüfung wird dabei nicht mit einer unabhängigen wissenschaftlichen Begutachtung gleichgesetzt.

Die Untersuchung ist eine **retrospektive, explorative Einzelfallstudie**. Sie kombiniert die Auswertung historischer Projektunterlagen mit persönlichen Erinnerungshinweisen. Die Entstehung technischer Konzepte, das methodische Vorgehen und die mögliche Entwicklung menschlicher Fähigkeiten werden getrennt betrachtet. Die Untersuchung ist keine kontrollierte Interventionsstudie, kein Experiment zur Messung von Lernfortschritt und keine repräsentative Erhebung über KI-gestützte Softwareentwicklung.

### 2.2 Quellenklassen

Die historische Rekonstruktion stützt sich auf ein **nicht öffentlich zugängliches Archiv projektspezifischer Arbeitsmaterialien**. Diese Materialien sind keine wissenschaftliche Fachliteratur. Sie dienen als dokumentarische Quellen für den untersuchten Entwicklungsprozess. Für die Auswertung werden folgende Quellenarten unterschieden:

**Frühe Konfigurations- und Gestaltungsartefakte:** erhaltene Systeminstruktionen, Rollen- und Modulbeschreibungen spezialisierter Custom GPTs sowie frühe Entwürfe des übergreifenden GPT-Stacks. Sie zeigen, welche Funktionen, Arbeitsabläufe und Verhaltensregeln konzipiert wurden; die Wirksamkeit dieser Konfigurationen lässt sich daraus nicht ableiten.

**Historische Konzept- und Prozessunterlagen:** Entwürfe zur Zusammenarbeit spezialisierter Assistenten, zum strukturierten Handoff, zur Trennung von Reflexion und Orchestrierung sowie Projekt-, Recherche- und Vorgehenspläne. Dazu gehören ein explizit entscheidungsfrei angelegter Phase-1-Rechercheauftrag, ein zugehöriges Register von 35 Scan-Einträgen und ein Phase-2-Prozessmodell. Solche Dokumente belegen konzipierte Vorgehensweisen, nicht automatisch deren vollständige Durchführung.

**Spätere Rekonstruktionen und Gesprächszusammenfassungen:** Materialien, die frühere Überlegungen, Konzeptstände und ihre Entwicklung rückblickend ordnen. Sie sind für die inhaltliche Rekonstruktion hilfreich, ersetzen aber keinen zeitgenössischen Nachweis für die Erstentstehung einer Idee.

**Persönliche Erinnerungsangaben:** Schilderungen zur Ausbildung und Berufspraxis, zum vermuteten Beginn der Arbeit am ThemenSortierer ungefähr im März 2025, zu Inspirationsquellen, zur weiteren GPT-Stack-Entwicklung, zu Erfahrungen mit externen KI-Diensten und zur Urheberschaft der ursprünglichen Systemvision. Sie werden als retrospektive Auskünfte gekennzeichnet, soweit keine datierten Gesprächsbelege oder sonstigen zeitgenössischen Unterlagen vorliegen.

**Konzeptioneller Bezugstext:** Der eigenständige Fachartikel *Künstliche Intelligenz und die Erweiterung menschlicher Entwicklungsmöglichkeiten* dient der Einordnung der übergeordneten Fragestellung. Er belegt keine historischen Projektereignisse und stellt keine externe empirische Bestätigung der hier untersuchten Entwicklung dar.

Das interne Archiv mit den ursprünglichen Dateinamen, Fundstellen und Prüfvermerken bleibt erhalten. Die Leserschaft kann es jedoch nicht unmittelbar einsehen. Damit können einzelne Befunde nicht unabhängig anhand sämtlicher Originaldokumente kontrolliert werden. Diese Einschränkung wird in der Analyse berücksichtigt und in Anhang B nach Materialklassen offengelegt. Wissenschaftliche Veröffentlichungen, die allenfalls später zur theoretischen Einordnung herangezogen werden, wären von diesem historischen Untersuchungsmaterial getrennt auszuweisen.

### 2.3 Auswertungsregeln

Historische Konfigurationen belegen beabsichtigte Funktionen, nicht deren tatsächliche Zuverlässigkeit. Gesprächszusammenfassungen belegen dokumentierte Reflexionen, nicht automatisch den exakten Zeitpunkt ihrer ersten Entstehung. Rückblickende Erinnerungen werden nicht als unabhängig verifizierte Chronologie ausgegeben. Frühere, teilweise ausdrücklich «verbindlich» bezeichnete Architekturentscheidungen bleiben innerhalb ihrer historischen Dokumentversionen; sie bestimmen nicht die aktuelle technische Projektautorität.

**Evidenzstatus im Text:** `dokumentiert` bezeichnet im bereitgestellten Material sichtbare Angaben; `persönliche Erinnerung` kennzeichnet retrospektive Angaben des Autors; `Interpretation` kennzeichnet eine aus mehreren Beobachtungen abgeleitete Lesart; `offen` bezeichnet eine noch nicht ausreichend belegte Frage.

### 2.4 Aussagebezogene Quellenprüfung

Die Materialauswahl orientierte sich an der dokumentierten Entstehung der Fragestellung: frühe Konfigurationen zur spezialisierten Arbeit, Unterlagen zur Zusammenarbeit und zum Handoff sowie spätere Pläne zur systematischen Exploration und Entwicklung. Für jedes Artefakt wurde geprüft, **welches Problem** es behandelt, **welche Form der Arbeit oder Entscheidung** es beschreibt und **welche historischen oder methodischen Schlüsse** es zulässt. Die drei Entwicklungslinien in Abschnitt 9.6 ordnen die dokumentierten Sachverhalte nachträglich. Sie waren weder ursprüngliche Auswertungskategorien noch Ergebnis einer formalen Kodierungsstudie. Bei unklarer Datierung, retrospektiver Verdichtung oder abweichenden Geltungsständen werden zeitliche Reihenfolge und Kausalität nicht vorausgesetzt.

Die Auswertung unterscheidet die Art des Materials, den konkreten dokumentierten Inhalt und die Reichweite der daraus abgeleiteten Aussage. Erhaltene Konfigurationen können eine beabsichtigte Funktion belegen, nicht deren Wirksamkeit. Konzeptnotizen können eine ausgearbeitete Vorstellung dokumentieren, nicht notwendigerweise den Zeitpunkt ihrer erstmaligen Entstehung. Retrospektive Zusammenfassungen und persönliche Erinnerungen werden nicht mit unabhängig datierten Primärbelegen gleichgesetzt.

Ausgewählte zentrale Aussagen wurden innerhalb der internen Arbeitsfassung konkreten Fundstellen zugeordnet; für einen Teil dieser Zuordnungen wurden die historischen Originalstellen unmittelbar abgeglichen. Dazu gehören unter anderem Rollen- und Modulbeschreibungen der frühen Custom GPTs, die Trennung der konzeptionellen Rollen Nova und Nadia, die Vorgabe einer entscheidungsfreien Phase-1-Recherche und das historische Vorgehensmodell für Phase 2. Im Scan-Register wurden **35 Einträge** überprüft: 31 reguläre Nummern und vier ergänzende Vertiefungseinträge. Die Zahl belegt einen Registerbestand, weder die Qualität aller Scans noch deren vollständige Durchführung.

Die detaillierten Dateipfade, Abschnittsverweise und Prüfstatus sind in der **nicht veröffentlichten Masterfassung V1.2** dokumentiert. Der öffentlich zugängliche Text beschreibt in Anhang B stattdessen die jeweiligen Materialklassen, ihre Belegfunktion und ihre Zugänglichkeitsgrenzen. Ohne Einsicht in das Archiv können externe Leserinnen und Leser nicht sämtliche Einzelstellen unabhängig prüfen. Die persönliche Aussage zur ursprünglichen Urheberschaft der Systemvision bleibt ausdrücklich eine retrospektive Auskunft und wird nicht durch eine spätere Rollenbeschreibung in einen unabhängigen Erstbeleg umgedeutet.


Die Einordnung als Fallstudie ist dabei methodologisch zu begrenzen. Yin (2018, Vorwort, S. 21–22 der bereitgestellten Ausgabe; Abschnitt «A Trilogy: Case Study Research, Case Studies, and the Case(s)») unterscheidet systematische Fallstudienforschung von Fallgeschichten, die vorrangig der Darstellung dienen. Die vorliegende Untersuchung nutzt historische Dokumente für eine explizit beschriebene retrospektive Analyse; sie beansprucht weder, das ursprüngliche Entwicklungsprojekt nach einem vorab definierten Fallstudienprotokoll durchgeführt zu haben, noch, alle Anforderungen eines vollständigen Forschungsdesigns nach Yin zu erfüllen. Die Bezugnahme dient der transparenten Einordnung des heutigen Vorgehens und seiner Grenzen.

## 3. Fachliche Ausgangslage: interdisziplinäre Vorbildung statt fachlicher Nullpunkt

Der Autor besitzt keinen klassischen Ausbildungsabschluss in Informatik, Data Science oder AI Engineering. Technische und methodische Vorerfahrungen waren dennoch vorhanden. Gemäss persönlicher Schilderung umfasst die Ausbildungsbiografie orientierende Studienabschnitte im Wirtschaftsingenieurwesen mit Schwerpunkt Bauingenieurwesen (rund zwei Jahre), im Bauingenieurwesen (rund zwei Jahre), in System- und Informationstechnik (rund ein Jahr) sowie Verkehr und Mobilität (rund ein Jahr). Der Abschluss erfolgte in Architektur mit Schwerpunkt mediales Design. Diese Stationen zeigen wechselnde fachliche Schwerpunkte. Sie sind nicht als jeweils separat abgeschlossene Studiengänge zu verstehen.

Bereits im Studium bestanden Berührungspunkte mit Rhino 3D, Grasshopper und parametrischer Gestaltung, Robotik sowie CAD- und Visualisierungswerkzeugen wie Archicad, Allplan, Maya, 3ds Max, Photoshop, InDesign und Illustrator. Bei einem Robotikprojekt kam mit Unterstützung eines Experten auch Python zum Einsatz, um einen Roboterarm räumlich auszurichten und zu bewegen. Dabei handelte es sich um eine fachlich begleitete Anwendung von Python, nicht um die eigenständige Entwicklung einer industriellen Robotersteuerung.

Später kamen BIM-Weiterbildungen im Bereich Modeling und Management sowie mehr als zwei Jahre berufliche Erfahrung in der Zürcher Stadtverwaltung beim Umwelt- und Gesundheitsschutz, Bereich Baubewilligungen, hinzu. Zu den genannten Tätigkeitsfeldern gehören digitale Fachapplikationen, IT-Support und stellvertretende Product-Owner-Aufgaben. Ergänzend werden PSPO I, Kurse in Projektmanagement und Requirements Engineering sowie Weiterbildungen unter anderem zu digitaler Transformation und organisatorischem Wandel genannt. Eine genaue Kompetenzzuordnung erfordert später Ausbildungs- und Tätigkeitsnachweise.

Der Fall lässt sich deshalb nicht auf die Erzählung eines «Nichttechnikers, der dank KI programmiert», reduzieren. Im Mittelpunkt steht vielmehr, wie sich **vorhandene systemische, gestalterische und produktbezogene Kompetenzen in einem neuen technischen Fachgebiet einsetzen lassen**. Ob und wie KI diese Übertragung erleichterte, bleibt Untersuchungsgegenstand.

## 4. Von Prompting-Anregungen zur Gestaltung spezialisierter Custom GPTs

### 4.1 Inspiration durch einzelne Prompt-Techniken

Nach persönlicher Erinnerung entstand ein früher Anstoss durch Beiträge in sozialen Medien, insbesondere Instagram. Dort wurden einzelne Möglichkeiten von ChatGPT und Claude über Prompts, Anwendungsbeispiele und vermeintliche «Hacks» vorgestellt. Daraus entstand jedoch nicht einfach eine Sammlung einzelner Prompt-Vorlagen. Die entscheidende eigene Frage lautete, weshalb man wiederholt individuelle Prompts formulieren sollte, wenn sich dafür spezialisierte, dauerhaft konfigurierte Custom GPTs entwickeln liessen.

Der Autor erinnert den Beginn seiner Arbeit am **ThemenSortierer** ungefähr im März 2025; dieser Monat ist noch nicht durch einen Erstbeleg bestätigt. Ein datiertes Gespräch vom **23. Mai 2025** dokumentiert bereits die Frage, wie sich bestehende Chats mithilfe des ThemenSortierers, eines zentralen Themenindex und einer wiederverwendbaren Wissensorganisation strukturieren lassen. Schon zu diesem Zeitpunkt ging es neben besseren Prompts auch darum, Gesprächswissen zu ordnen und wiederzufinden. Die anschliessende Ausarbeitung des spezialisierten GPT-Stacks wird retrospektiv vor allem für **Juni bis August 2025** verortet; aus wiedergefundenen Gesprächskontexten ergeben sich Hinweise auf Prompt Builder und Prompt Pilot bereits im Juni 2025. Deren exakte Erstellungsdaten sind damit weiterhin nicht gesichert. Daneben wird retrospektiv eine nicht eindeutig identifizierte Vorstellung eines mehrteiligen KI-Systems aus dem Google-Umfeld als möglicher Impuls erinnert. Welches konkrete Angebot oder Konzept gemeint war und wann diese Anregung wirkte, ist nicht belegt.

### 4.2 Prompt Builder und Prompt Pilot

Der ThemenSortierer stand am Anfang der Chat-Organisation. Mit Prompt Builder und Prompt Pilot verlagerte sich die Arbeit zunehmend auf die Konzeption, Prüfung und Weiterentwicklung spezialisierter Systeminstruktionen.

Die erhaltene historische Custom-GPT-Sammlung belegt einen bereits differenzierten Konfigurationsansatz. Prompt Builder und Prompt Pilot waren keine blossen Vorlagen für einzelne Chatfragen. Ihre historischen Instruktionen und Moduldokumente behandeln die Gestaltung, Analyse und Weiterentwicklung spezialisierter Custom GPTs. Der Prompt Builder orientierte sich an der Konzeption und Strukturierung entsprechender Konfigurationen; der Prompt Pilot war nach der persönlichen Erinnerung ein besonders wichtiges Werkzeug für das Ausformulieren anspruchsvoller Custom-Systemprompts.

Eine historische, vergleichende Notiz zur modularen Agenten- und Verhaltensarchitektur dokumentiert unter anderem Rollen, Fähigkeiten, Module, Trigger, Marker, Subprofile, Spezialmodi, Zustandskonventionen, Schutzregeln, Resetmechanismen und Exportlogiken. Damit war bereits innerhalb der Plattform eine frühe **Spezifikation von Verhalten und Arbeitsprozessen** erkennbar. Der historische Umfang der Markersteuerung ist dokumentiert; eine belastbare Gesamtzahl der verschiedenen Marker ist für diese Fassung nicht ermittelt worden.

Die beiden historischen Hauptkonfigurationen grenzen ihre Aufgaben bereits ausdrücklich ab: Die Prompt-Builder-Konfiguration beschreibt die Konzeption, Strukturierung und Optimierung von Custom GPTs sowie die Systemprompt-Gestaltung; die Prompt-Pilot-Konfiguration bezeichnet den Pilot als Analysten zum Prüfen, Simulieren und Weiterentwickeln von Systemprompts und Agentenverhalten. Eine zugehörige historische Spezifikation zur Markersteuerung legt unter anderem Schutzkonventionen gegen Kontextüberladung, Informationsverlust und Konflikte zwischen gleichzeitig aktiven Markern. Diese Texte belegen die eigenständige, früh einsetzende Konzeption spezialisierter Arbeitsprozesse. Sie belegen nicht, dass die darin angestrebten Schutzwirkungen im Modellbetrieb durchgängig eintraten.

Aus solchen textuellen Mechanismen folgt allerdings nicht, dass der Plattformbetrieb technisch erzwingbare Policies oder formale Zustandsmaschinen besass. Ein Systemprompt beschreibt angestrebtes Modellverhalten; er ist nicht mit einer unabhängig kontrollierten Ausführungsarchitektur gleichzusetzen.

### 4.3 Vom spezialisierten Werkzeug zum GPT-Stack

Mit der Spezialisierung entstanden mehrere Custom GPTs für unterschiedliche Aufgaben. Die getrennten Rollen ermöglichten eine differenzierte Bearbeitung, führten aber gleichzeitig zu einer neuen Grenze: Ergebnisse eines Assistenten waren nicht ohne Weiteres als gültiger, vollständig nachvollziehbarer Arbeitsstand in einem anderen verfügbar.

Die konzeptionelle Eigenleistung reichte damit bereits vor der späteren Nova/Nadia-Vision über das Formulieren einzelner Prompts hinaus. Sie umfasste die Gestaltung von Rollen, Modulen und spezialisierten Arbeitsabläufen innerhalb der Custom-GPT-Plattform. Die spätere Idee getrennter Reflexions- und Orchestrierungsrollen ist in diesem früheren Gestaltungszusammenhang zu betrachten, ohne ihre konkrete Ausformung rückwirkend in die ersten GPT-Fassungen hineinzulesen.

Die nächste Frage betraf nicht mehr nur die Qualität einer einzelnen Konfiguration, sondern die Zusammenarbeit mehrerer spezialisierter Einheiten. Die Arbeit an einzelnen Werkzeugen machte damit neue Anforderungen auf der übergeordneten Systemebene sichtbar.

<figure class="whitepaper-illustration whitepaper-illustration--werkzeuge">
  <img src="/assets/writings/methodengefuehrte-ki-systementwicklung/wp-methodik-02-werkzeuge.webp" alt="Einzelne blaue und goldene Linien und Knoten verbinden sich zu einem gemeinsamen Verlauf." width="593" height="298" loading="lazy" decoding="async" />
  <figcaption>Konzeptionelle Illustration: Vom einzelnen Werkzeug zu verbundenen Arbeitsstrukturen.</figcaption>
</figure>

## 5. Das ursprüngliche Integrationsproblem: Handoff ohne Informationsverlust

Die persönliche Schilderung macht die ursprüngliche Schwierigkeit deutlich: Eine Ausarbeitung soll nach der Arbeit mit einem spezialisierten Custom GPT unmittelbar mit einem anderen fortgesetzt werden können, ohne jedes Mal einen neuen Übergabeprompt verfassen und die bisherigen Ergebnisse manuell als Dateien beilegen zu müssen. Zudem darf die Fortsetzung nicht auf Vermutungen über den vorherigen Verlauf beruhen, sondern muss sich auf konkrete, gültige Arbeitsartefakte stützen.

Daraus ergeben sich drei unterscheidbare Anforderungen:

**Übergabekomfort:** Ein Wechsel der spezialisierten Funktion soll keine ständige manuelle Rekonstruktion der Aufgabe erfordern.

**Informationskontinuität:** Relevante Entscheidungen, Artefakte, Annahmen und offene Punkte müssen für die nachfolgende Bearbeitung verfügbar bleiben.

**Nachweisbarkeit des Zustands:** Die nachfolgende Bearbeitung muss zwischen tatsächlich dokumentierten Ergebnissen, offenen Sachverhalten und blossen Modellannahmen unterscheiden können.

Eine historische Konzeptnotiz beschreibt diesen Übergang später mit dem Muster **Dialog → Struktur → Handoff**. Ein freies Gespräch kann unvollständig, explorativ, iterativ oder widersprüchlich sein. Ein nachfolgender spezialisierter Arbeitsprozess benötigt dagegen eine explizite Übergabe mit Ziel, Scope, Constraints, relevanten Entscheidungen, Quellen und erwarteten Ergebnissen. Die Notiz dokumentiert diesen konzeptionellen Schritt. Eine technisch realisierte Übergabe ist damit nicht nachgewiesen.

## 6. Externe Erprobung und die Ressourcenfrage

Nach persönlicher Schilderung wurden auch alternative integrierte KI-Angebote untersucht. Abacus AI bot bei mehreren kleineren Projekten einen Einblick in mögliche Funktionalitäten einer umfassenderen KI-Arbeitsumgebung. Eine zweite praktische Schwierigkeit trat bei ausführlicher, mehrstufiger Projektbearbeitung hervor: Mit der Länge des Gesprächs wuchs der Kontext, und nach eigener Beobachtung stieg der Tokenverbrauch erheblich. Gegen Ende längerer Ausarbeitungen konnte dadurch ein grosser Anteil des verfügbaren Guthabens beansprucht werden.

Daraus lässt sich keine unabhängige quantitative Aussage über das damalige Abrechnungsverhalten von Abacus AI ableiten. Entscheidend ist die beobachtete Herausforderung: Wenn grössere Kontextmengen bei weiteren Aufrufen erneut verarbeitet und abgerechnet werden, können mehrstufige Projekte zunehmend aufwendig werden. Ähnliche Kosten- und Kontextprobleme wurden im weiteren Verlauf auch bei der Nutzung von Claude wahrgenommen. Die konkreten technischen Mechanismen der Anbieter dürfen dabei nicht ohne Prüfung gleichgesetzt werden.

Neben dem Handoff entstand damit eine weitere Frage: **Wie kann ein langfristiger, verlässlicher Arbeitszustand bewahrt werden, ohne für jeden Teilauftrag den gesamten bisherigen Verlauf erneut in den Modellkontext aufzunehmen?** Diese Frage berührt spätere Forschungsfelder wie Memory, Retrieval, Kontextauswahl, Quellenautorität und Ressourcenmanagement. Wie genau einzelne Erfahrungen spätere Entscheidungen beeinflussten, lässt sich historisch nicht vollständig rekonstruieren.

## 7. Die frühe Vision: Menschliche Reflexion und spezialisierte Ausführung

Nach der ausdrücklichen persönlichen historischen Klarstellung stammt die ursprüngliche Systemvision vom Projektinitiator: Sie verband eine sokratische Gesprächspartnerin für offene menschliche Problembearbeitung mit einer davon getrennten Orchestrierungsrolle und der koordinierten Arbeit spezialisierter KI-Agenten. Die anschliessende Mensch-KI-Zusammenarbeit diente der kritischen Untersuchung, Präzisierung von Anforderungen, Erschliessung technischer Möglichkeiten und Entwicklung weiterer Fragestellungen. Diese Angabe zur Urheberschaft ist retrospektiv; die historischen Gesprächszusammenfassungen dokumentieren die später ausformulierte Rollenidee, nicht ihren exakten ersten Entstehungszeitpunkt.

Im Zentrum stand nicht die automatische Erledigung von Aufgaben. Das System sollte zunächst einen offenen menschlichen Denkprozess unterstützen und diesen von der technischen Ausführung trennen.

### 7.1 Nova: sokratische Sparringspartnerin

Die Rolle Nova wird als kooperative Gesprächspartnerin auf Augenhöhe beschrieben. Sie soll sich an Brainstorming, Projektentwicklung und Problemklärung beteiligen, Annahmen hinterfragen, Blindspots sichtbar machen und bei Bedarf widersprechen. Sokratische Zusammenarbeit bedeutet dabei mehr als Zustimmung: Annahmen sollen hinterfragt und andere Sichtweisen ernsthaft geprüft werden. Die persönliche Verantwortung für Ziele und Entscheidungen bleibt beim Menschen.

### 7.2 Strukturierte Übergabe

Die im Dialog gewonnenen Informationen sollen nicht allein als ungefilterter Chatverlauf an technische Ausführungsrollen weitergereicht werden. Zwischen offenem Gespräch und Ausführung steht konzeptionell eine Strukturierung der relevanten Erkenntnisse, Entscheidungen, Grenzen und offenen Fragen. Die historische Handoff-Notiz beschreibt diese notwendige Übersetzung ausdrücklich.

### 7.3 Nadia: getrennte Orchestrierungsrolle

Nadia wird in den späteren historischen Zusammenfassungen als eigene Orchestratorin beschrieben, welche Aufgaben aufteilen, spezialisierte Agenten oder Werkzeuge auswählen, Abhängigkeiten koordinieren und Übergaben steuern sollte. Nova und Nadia sind demnach funktional zu unterscheiden: Reflexion einerseits, Orchestrierung andererseits. Die Zusammenfassung vom 28. August 2026 dokumentiert die getrennten Rollen ausdrücklich, ist aber **kein Entstehungsbeleg für August**. Datierte Gesprächskontexte verorten die Konzeption eines lokalen modularen Agentensystems mit Nova und getrennter Orchestrierung bereits spätestens im **März 2026**; Gespräche aus **April 2026** vertiefen Rollen, Ablauf und technische Rahmenbedingungen. Welche Details damals schon vollständig definiert waren, muss jeweils am betreffenden Gesprächsstand überprüft werden.

Diese historischen Rollenzuschreibungen sind **kein Nachweis der aktuellen technischen Implementation**. Ebenso dürfen früher diskutierte Frameworks wie OpenJarvis oder Mastra nicht rückwirkend als Ursprung der Idee behandelt werden. Sie sind historische Technologiehypothesen, soweit die Quellen sie so führen.

Kennzeichnend für die frühe Vorstellung ist die Verbindung von **offener menschlicher Reflexion, nachvollziehbarer Übergabe und modularer fachlicher Ausführung**.

<figure class="whitepaper-illustration whitepaper-illustration--uebergabe">
  <img src="/assets/writings/methodengefuehrte-ki-systementwicklung/wp-methodik-03-uebergabe.webp" alt="Übereinanderliegende transparente Schichten in Blau, Grau und Gold mit seitlichen Bezugslinien." width="455" height="298" loading="lazy" decoding="async" />
  <figcaption>Konzeptionelle Illustration: Getrennte Ebenen und nachvollziehbarer Informationsübergang.</figcaption>
</figure>

## 8. Von der Systemidee zum methodisch geführten Projekt

Die Konzept- und Planungsarbeit am lokalen Agentensystem reicht mindestens in das **Frühjahr 2026** zurück. August 2026 markiert insbesondere einen späteren Recherche- und Aktualisierungsstand, darunter eine erneute Betrachtung der Phase-1-Themen, nicht den Beginn der Systemvision oder der Projektplanung. Bereits im April 2026 wurden konzeptionelle und technische Arbeitsfragen vertieft. Die genaue Reihenfolge früher Teilentscheidungen bleibt dort offen, wo nur spätere Zusammenfassungen vorliegen.

Im Folgenden werden die dokumentierten Entwicklungsschritte nach ihrem methodischen Zusammenhang dargestellt. Daraus folgt keine lückenlos belegte zeitliche oder kausale Abfolge. Einzelne Ideen entstanden möglicherweise parallel, wurden später verändert oder erst in retrospektiven Zusammenfassungen gemeinsam eingeordnet. Ein historisches Beispiel bildet die in einer Konzeptinventur zum lokalen Agentensystem unter «Souveränität» dokumentierte Differenzierung zwischen der anfänglich stark offlineorientierten Vorstellung und späteren Überlegungen zu explizit vergebenen Netzwerkrechten. Das ist ein Nachweis einer beschriebenen Konzeptänderung, keine aktuelle Architekturfestlegung.

### 8.1 Problem- und Zielklärung vor der Implementierung

An die Stelle eines unmittelbaren technischen Aufbaus trat zunächst eine Gliederung des Vorhabens in unterschiedliche Bearbeitungsphasen. Bereits die im Frühjahr 2026 entwickelte System- und Projektkonzeption ist als eigenständige methodische Bearbeitung zu verstehen; die spätere aktualisierte Recherche war nicht ihr Ausgangspunkt. Historische Strukturunterlagen dokumentieren sieben nummerierte Bearbeitungsschritte und einen ergänzenden Alignment-Schritt: Extraktion früherer Überlegungen, Alignment (Phase 1.5), phasenübergreifende Konsolidierung, Entwurf der Systemstruktur, Strukturprüfung, Festhalten damaliger Entscheidungen, erneute Konsistenzprüfung und Priorisierung der Umsetzung. Die Bezeichnungen «Phase 1» bis «Phase 7» in diesen frühen Unterlagen gehören zu dieser damaligen Bearbeitungsfolge und sind nicht mit den späteren drei übergeordneten Projektphasen oder dem aktualisierten Phase-1-Scan gleichzusetzen. Die Unterlagen dokumentieren die jeweiligen Bearbeitungsprodukte; ohne gesonderte datierte Originalbelege lässt sich daraus nicht für jeden Einzelschritt ein Abschluss im April 2026 ableiten. Diese frühen Dokumente enthalten teilweise sehr konkrete Komponenten und damalige «verbindliche» Entscheidungen. Für die vorliegende Fallstudie sind vor allem ihr methodischer Verlauf, die identifizierten Zielkonflikte und die Iterationsschritte relevant; ihre Technikentscheidungen sind nicht aktuelle Projektautorität.

Hier zeigen sich Bezüge zu Projektmanagement, Produktmanagement und Requirements Engineering: Ausgangslage und Ziel verstehen, Anforderungen und Grenzen präzisieren, Optionen untersuchen, Entscheidungen nachvollziehbar machen und die Umsetzung erst danach kontrolliert vorbereiten. Die Disziplinen erfüllen unterschiedliche Funktionen; der historische Prozess ist keine Behauptung, dass jedes formale Standardverfahren vollständig angewendet wurde.

### 8.2 Phase 1: Breite Exploration statt früher Technologieauswahl

Die finale Phase-1-Anweisung definiert eine quellenbasierte Evidenzinventur relevanter Forschungen, Methoden, Frameworks, Modelle, Risiken, Benchmarks und Architekturmöglichkeiten. Recherche, Klassifikation, Evidenzprüfung und Coverage sind ausdrücklich vorgesehen. Technische Entscheidungen sind ausdrücklich ausgeschlossen (dokumentiert in der abschliessenden Phase-1-Anweisung).

Die erhaltene aktive Scan-Registry verzeichnet **35 Scan-Einträge** – 31 regulär nummerierte Aufträge und vier ergänzende Vertiefungseinträge –, verteilt auf verschiedene fachliche Schwerpunkte (dokumentiert in der historischen aktiven Scan-Registry). Aus dieser Zahl folgt nicht automatisch Vollständigkeit oder die fachliche Validität sämtlicher Einzelergebnisse. Die Registry zeigt jedoch, dass der Lösungsraum vor einer konkreten Komponentenwahl bewusst breit untersucht werden sollte.

Diese Trennung war bei schnell veränderlichen KI-Technologien besonders wichtig: Ein Scanstand kann als historische Evidenz erhalten bleiben, während konkrete Produkte, Modellversionen und Leistungswerte später neu geprüft werden müssen. Das Vorgehen erlaubt, stabile Problemklassen von zeitabhängigen technischen Kandidaten zu unterscheiden.

### 8.3 Phase 2: Anforderungen vor Architektur und Stack

Das dokumentierte Vorgehensmodell vom 2. September 2026 beschreibt einen weiter ausdifferenzierten Phase-2-Prozess. Auf Grundlage der Phase-1-Evidenz und der historischen Projektbasis **sah das Modell** funktionale Discovery, eine Requirements- und Constraint-Basis, Preservation- und Traceability-Prüfungen sowie nachgelagerte Architekturübersetzung, Kandidatenbewertung, Technologieevaluation und MVP-Definition **vor** (dokumentiert im damaligen Phase-2-Vorgehensmodell).

Auch die geplante Prozessfolge ist historisch aufschlussreich: Nicht nur die Systemvision wurde komplexer; auch die **Arbeitsmethode zur Beherrschung dieser Komplexität** wurde weiterentwickelt. Gestaltet wurde damit auf zwei Ebenen: an der angestrebten Agenteninfrastruktur und am Vorgehen zu ihrer Entwicklung. Bereits die frühen modularen Custom-GPT-Konfigurationen dokumentieren methodische Arbeit; die 35 Scans markieren nicht deren Beginn, sondern eine später stärker formalisierte Forschungsstufe. Die Trennung von Exploration und technischer Festlegung sowie die spätere Ausdifferenzierung von Discovery, Requirements, Architekturübersetzung und Technologieevaluation belegen eine Weiterentwicklung des **dokumentierten Prozessrahmens**, nicht automatisch die vollständige Durchführung jeder darin vorgesehenen Aktivität oder deren technische Wirksamkeit.

Die fachliche Auseinandersetzung sollte nicht als schon abgeschlossene technische Realisierung beschrieben werden. Ihre konkrete Quellennutzung und allfällige Publikationsrechte wären für öffentlich zitierte Details separat zu prüfen.


Eine externe Vergleichsperspektive bietet das Requirements Engineering: Nuseibeh und Easterbrook (2000, Abschnitte 1–2 und 9) beschreiben die Ermittlung, Modellierung, Analyse, Kommunikation, Abstimmung und Weiterentwicklung von Anforderungen als zusammenhängende Aufgaben. Der dokumentierte Übergang von einem konkreten Handoff-Problem zu Fragen der Informationskontinuität, von Arbeitszuständen und der Abgrenzung technischer Entscheidungen lässt sich damit methodisch vergleichen. Die Parallele bezeichnet eine Nähe der Problem- und Anforderungsklärung; weder belegt sie die vollständige Anwendung eines bestimmten RE-Verfahrens noch die Durchführung sämtlicher im Phase-2-Modell vorgesehenen Aktivitäten.

<figure class="whitepaper-illustration whitepaper-illustration--entwicklungsweg">
  <img src="/assets/writings/methodengefuehrte-ki-systementwicklung/wp-methodik-04-entwicklungsweg.webp" alt="Abstrakte blau-goldene Datenlandschaft mit miteinander verbundenen Erhebungen und Punkten." width="556" height="333" loading="lazy" decoding="async" />
  <figcaption>Konzeptionelle Illustration: Exploration und schrittweise methodische Konkretisierung.</figcaption>
</figure>

### 8.4 Phase 3: Technische Umsetzung als vorgesehene Nachweisphase

Die Unterlagen beschreiben Phase 3 als spätere Implementierungs-, Integrations- und Prüfphase. Der derzeit bereitgestellte historische Quellenbestand erlaubt keine abschliessende Aussage über die tatsächlich implementierten Funktionen, Sicherheitsgarantien oder den MVP-Akzeptanzstand. Diese Ergebnisse bleiben einem separaten technischen Whitepaper auf Grundlage aktueller, autoritativer Implementierungs- und Prüfberichte vorbehalten.

## 9. Analytische Einordnung: Was dieser Fall untersuchbar macht

### 9.1 Problemgetriebene statt werkzeuggetriebene Entwicklung

Am Anfang der rekonstruierten Entwicklung stand eine praktische Aufgabe. Ihre Bearbeitung machte zunehmend Grenzen der verfügbaren Werkzeuge sichtbar. Die Frage «Welches Modell oder Framework soll eingesetzt werden?» steht nicht am Anfang. Zunächst werden spezialisierte Arbeitsprozesse gestaltet, danach deren mangelnde Verknüpfbarkeit als Problem wahrgenommen und schliesslich unterschiedliche technische Möglichkeiten untersucht. Dieser problemorientierte Ansatz ist im historischen Verlauf erkennbar. Ob er wirksamer war als andere Vorgehensweisen, wurde nicht untersucht.

### 9.2 Instrumentelle Befähigung und Kompetenzzuwachs sind verschieden

Der bestehende Fachartikel zur Erweiterung menschlicher Entwicklungsmöglichkeiten unterscheidet persönliche Kompetenz, instrumentelle Befähigung und die mögliche Entwicklung neuer Interessen. Diese Unterscheidung ist für die Fallstudie direkt nutzbar: Bereits vorhandenes Systemdenken kann die Problemdefinition prägen; KI kann technische Untersuchungen erleichtern; wiederholte Arbeit an neuen Themen kann zusätzliche Kenntnisse oder Interessen hervorbringen. Die erfolgreiche KI-gestützte Bearbeitung einer Aufgabe beweist aber nicht automatisch eigenständigen Kompetenzgewinn. Dafür wären geeignete Vergleichsaufgaben, Lernnachweise oder eine nachvollziehbare longitudinale Reflexion erforderlich.

### 9.3 Kontextkontinuität ist nicht vollständige Kontextwiederholung

Aus den historischen Erfahrungen ergeben sich drei Qualitätsfragen: Sind relevante Informationen dauerhaft vorhanden? Werden sie bei einer bestimmten Aufgabe richtig ausgewählt? Kann ihre Gültigkeit, Herkunft und Entscheidungshoheit erkannt werden? Hinzu tritt die Kostenfrage, welche Kontextmengen für einen konkreten Modellaufruf tatsächlich benötigt werden. Jede dieser Fragen muss eigenständig geprüft werden. Ein langes Memory garantiert weder gutes Retrieval noch korrekte Kontextselektion oder geringe Betriebskosten.

### 9.4 Menschliche Kontrolle ist mehr als ein instruiertes Modellverhalten

Sokratischer Dialog und getrennte Orchestrierung können den Arbeitsprozess sinnvoll strukturieren. Sie ersetzen aber keine technischen Berechtigungen, Prüfverfahren oder menschliche Freigaben. Gerade ein System, das menschliche Handlungsmöglichkeiten erweitern soll, muss unterscheiden zwischen vorgeschlagener Entscheidung, autorisierter Handlung und tatsächlich geprüftem Resultat. Die historische Vision formuliert solche Kontrollansprüche; ihre spätere Durchsetzung bleibt separat zu belegen.


Eine ergänzende Perspektive liefern die Gestaltungsrichtlinien von Amershi et al. (2019, Tabelle 1, Richtlinien G9 und G15). Sie betonen unter anderem effiziente Korrekturen und differenzierte Rückmeldungen durch Nutzende in KI-gestützten Anwendungen. Damit lässt sich der historische Anspruch auf menschliche Einflussnahme in Beziehung setzen. Die konzeptionelle Trennung von Reflexion und Orchestrierung ist jedoch weder ein Nachweis implementierter Korrekturmechanismen noch gleichbedeutend mit den technischen Anforderungen an Berechtigungen, Sicherheit und Governance.

### 9.5 Entwicklung der Fragestellung und Entwicklung des Menschen

Im dokumentierten Verlauf zeichnet sich eine mögliche Rückkopplung ab: Die Gestaltung eigener Custom GPTs führte zu Fragen ihrer Zusammenarbeit; Plattformexperimente machten zusätzliche Grenzen wahrnehmbar; die anschliessende Exploration eröffnete weitere technische Problemfelder. Dokumentiert ist damit zunächst die **Erweiterung des bearbeiteten Problemraums**. Ob zugleich neue stabile persönliche Kompetenzen, Interessen oder autonome fachliche Fähigkeiten entstanden, ist eine weitere empirische Frage. Diese Unterscheidung ist wichtig, damit ein nachvollziehbarer Entwicklungsweg nicht mit einem allgemeinen Wirkungsnachweis verwechselt wird.

### 9.6 Methodische Synthese

#### Vorerfahrung und methodische Gestaltung

Für die Untersuchung des Kompetenztransfers sind konkrete **Entsprechungen zwischen früheren Arbeitsweisen und dokumentierten Projektaktivitäten** aussagekräftiger als eine pauschale Berufung auf interdisziplinäre Erfahrung. Die Konfiguration spezialisierter Rollen, Module und Abläufe erinnert an modellbasiertes und parametrisches Strukturdenken; das belegt eine Ähnlichkeit der Gestaltungsperspektive, nicht die kausale Herkunft einzelner Entscheidungen aus der früheren Ausbildung. Die Wahrnehmung fehlender Übergaben als Nutzungsproblem und die Untersuchung möglicher Lösungswege weisen eine Nähe zur produktorientierten Problemklärung auf. Die explizite Trennung von Problemstellung, Requirements und technischen Kandidaten entspricht einem Kernanliegen des Requirements Engineering. Phasenplanung, Scan-Registry und die Unterscheidung von Recherche und Entscheidung zeigen projektmethodische Strukturierung; die Planung belegt jedoch nicht ohne Weiteres die Durchführung aller vorgesehenen Schritte. Die Beschäftigung mit Kontext, Arbeitszuständen, Beleggrenzen und Übergaben lässt zudem eine informationsarchitektonische Perspektive erkennen. Die frühen Systeminstruktionen, Rollenmodelle und Arbeitsabläufe lassen sich zugleich als **konzeptionelle Gestaltungsartefakte** betrachten. In der Design-Science-Forschung unterscheiden Hevner et al. (2004, Abschnitt »Design as an Artifact« sowie Guideline 3 »Design Evaluation«) unter anderem Konstrukte, Modelle, Methoden und Instanziierungen und behandeln Evaluation als eigenständige Anforderung. Dieser Vergleich verdeutlicht den Gestaltungscharakter der frühen GPT-Arbeit, ohne das Projekt rückwirkend als Design-Science-Research-Studie oder die Artefakte als unabhängig evaluiert einzustufen.

#### KI-Unterstützung und menschliche Verantwortung

Auch die Funktion generativer KI ist nicht über alle Entwicklungsschritte identisch. In der rekonstruierten Zusammenarbeit erscheint sie **als Dialog- und Reflexionspartner** bei der Untersuchung offener Fragen, **als Strukturierungshilfe** bei der Ausarbeitung von Rollen, Anforderungen und Arbeitsaufträgen sowie **als Unterstützung der technischen Wissenserschliessung** bei der Untersuchung von Konzepten und Alternativen. Die erhaltenen Konfigurations- und Projektartefakte zeigen darüber hinaus KI-gestützte **Text- und Artefakterstellung**. Diese funktionale Unterscheidung beschreibt beobachtete beziehungsweise retrospektiv berichtete Nutzungsweisen; sie setzt weder eine verlässlich wirksame sokratische Funktion noch die Richtigkeit erzeugter Inhalte voraus. Für jede konkrete Tätigkeit bleibt massgeblich, ob historische Dokumente ihre Verwendung zeigen oder lediglich eine spätere Erinnerung vorliegt. Diese Aufgabendifferenzierung weist Berührungspunkte zum Konzept der *Hybrid Intelligence* auf: Dellermann et al. (2019, Abschnitte 1–2) diskutieren das Zusammenwirken komplementärer menschlicher und maschineller Fähigkeiten. Im hier untersuchten Fall bleiben ursprüngliche Problemgestaltung und Entscheidungsverantwortung beim Projektinitiator, während generative KI unterschiedliche unterstützende Funktionen übernahm. Das ist eine analytische Gegenüberstellung, kein Nachweis, dass die Arbeitsteilung eine höhere Leistung bewirkt hätte oder jedes einzelne Interaktionsereignis durch ein zeitgenössisches Transkript belegt wäre.

#### Synthese der drei Entwicklungslinien

Im dokumentierten Verlauf lassen sich drei Entwicklungen unterscheiden, die miteinander verbunden sind. Erstens verändert sich der Problemraum: Aus der eigenen Gestaltung spezialisierter Custom GPTs tritt die Schwierigkeit zuverlässiger Übergaben zwischen ihnen hervor; daraus ergeben sich weitergehende Fragen nach Informationskontinuität und koordinierter Ausführung. Zweitens werden mitgebrachte gestalterische, technische und methodische Erfahrungen auf eine neue Domäne bezogen, während generative KI den Zugang zu weiteren Fachinformationen und Bearbeitungsmöglichkeiten unterstützt. Drittens wird auch der Entwicklungsprozess zunehmend formalisiert: von frühen Konfigurations- und Konzeptarbeiten über breit angelegte Exploration bis zur Differenzierung zwischen Requirements, Architektur und späterer Implementierung.

Die drei Linien wirken im rekonstruierten Fall zusammen: Die frühe Gestaltung spezialisierter Assistenten machte deren Koordinationsgrenzen zum eigenständigen Gegenstand; die Erweiterung der Problemstellung erhöhte den Bedarf an expliziter Planung, Anforderungsabgrenzung und Belegführung; diese Formalisierung bot wiederum Kategorien, um neue technische Fragen zu untersuchen. Diese Verbindung ist eine **Interpretation dokumentierter Vorgänge** und keine lückenlose Kausalgeschichte. Die Linien sind weder zwingend zeitlich streng aufeinanderfolgend noch in ihrer wechselseitigen Verursachung nachgewiesen. Die Quellen zeigen dokumentierte Konzepte, Bearbeitungsschritte und spätere Prozessbeschreibungen; sie erlauben keine isolierte Messung des Anteils generativer KI an diesen Veränderungen. Der methodische Erkenntniswert liegt darin, wie sich menschliche Problemgestaltung, vorhandene Methodenkompetenz, KI-gestützte Wissenserschliessung und die schrittweise Strukturierung des Vorhabens im konkreten Fall zueinander verhalten. Welche Teile dieses Vorgehens auf andere Kontexte übertragbar sind, bleibt eine begründungsbedürftige Anschlussfrage.

## 10. Einschränkungen und alternative Erklärungen

**Retrospektive Verzerrung:** Frühe Ereignisse werden teilweise aus heutiger Perspektive berichtet. Die Rekonstruktion könnte dadurch geradliniger erscheinen, als die damalige Entwicklung war.

**Versions- und Quellenlücken:** Die historische Custom-GPT-Sammlung bietet einen inhaltlichen Bestand, aber nicht notwendigerweise vollständige Zeitstempel jeder frühen Revision. Einzelne spätere Zusammenfassungen können frühere Entscheidungen neu ordnen.

**Selektionsbias:** Dokumentiert sind vor allem erhaltene Artefakte. Verworfenes, nie niedergeschriebenes oder ausserhalb der Unterlagen erprobtes Vorgehen bleibt möglicherweise unsichtbar.

**Fehlende Vergleichsgruppe:** Es kann aus dieser Einzelfallstudie nicht abgeleitet werden, wie derselbe Entwicklungsweg ohne KI, mit anderen Tools oder durch eine professionell ausgebildete Entwicklerperson verlaufen wäre.

**Mehrere Einflussfaktoren:** Nicht nur generative KI, sondern auch Studium, Berufserfahrung, verfügbare Zeit, Weiterbildung, persönliche Motivation und vorhandene digitale Werkzeuge können den Verlauf geprägt haben.

**Unvollständige Wirksamkeitsmessung:** Umfangreiche Projektunterlagen belegen eine methodische Arbeitsleistung, aber weder automatisch technische Richtigkeit noch produktive Effizienz oder nachhaltigen Kompetenzaufbau.

**Keine implementierte Sicherheitsgarantie:** Historisch definierte lokale Ausführung, Sandboxing, Freigabeprozesse oder Prüfagenten dürfen nicht als technisch durchgesetzt dargestellt werden.

## 11. Vorläufige Erkenntnisse und weiterer Nachweisbedarf

Die verfügbaren Quellen zeigen, dass aus der systematischen Gestaltung spezialisierter Custom GPTs zunehmend Fragen nach Handoff und Informationskontinuität entstanden. Für die spätere Bearbeitung ist zudem ein differenziertes Recherche- und Entwicklungsvorgehen dokumentiert.

Als bereits dokumentierte Befunde sind die frühen differenzierten GPT-Konfigurationen, die spätere Beschreibung einer getrennten Reflexions- und Orchestrierungsrolle, der entscheidungsfreie Anspruch der Phase-1-Recherche und das differenzierte Phase-2-Vorgehen voneinander unterscheidbar. Die Aussage, die Grundvision stamme vom Projektinitiator, wird zusätzlich durch seine ausdrückliche historische Klarstellung getragen, ist aber kein unabhängig datierter Erstnachweis. Weitergehende Schlussfolgerungen zu Lernwirkung, Effizienz oder technischer Qualität bleiben offen.

Noch offen sind insbesondere das genaue Erstellungsdatum von ThemenSortierer, Prompt Builder und Prompt Pilot, die vollständige Abfolge der frühen GPT-Fassungen und des Plattformvergleichs; die Identifikation und Datierung der retrospektiv erwähnten Anregung aus dem Google-Umfeld; die ursprüngliche Projektausgangsplanung; die Prüfung konkreter Kostenbeobachtungen; die Abgrenzung historischer Rollen- von späteren Architekturentscheidungen; die dokumentierte Entwicklung eigenständiger technischer Kompetenzen; sowie der implementierte und validierte MVP-Stand.

Für eine weitergehende historische Prüfung wären datierte frühe Systempromptfassungen, Handoff-Beispiele, die ursprünglichen Ausführungspläne, ausgewählte Scan- und Auditspuren und eine retrospektive Kompetenzmatrix besonders hilfreich. Dies sind Möglichkeiten, die historische Rekonstruktion zu verdichten, nicht sämtlich zwingende Voraussetzungen für die Veröffentlichung dieser methodischen Einzelfallstudie. Spätere dokumentierte MVP-Prüfungen gehören dagegen primär zu einer **separaten technischen Anschlussuntersuchung**. Nicht alle Rohmaterialien müssen dafür veröffentlicht werden; in einzelnen Fällen wäre dies auch nicht sinnvoll.

## 12. Schlussfolgerung

Auf die Leitfrage antwortet der Fall in einem begrenzten Sinn: **Vorhandene interdisziplinäre und methodische Kompetenzen lassen sich in dokumentierten Schritten der eigenständigen Problemgestaltung, Systemkonzeption und Projektstrukturierung wiedererkennen; generative KI wurde dabei für unterschiedliche Formen der Reflexion, Strukturierung und Wissenserschliessung eingesetzt.** Die Dokumente zeigen diesen Entwicklungsprozess. Wie gross der eigenständige Beitrag generativer KI daran war, lässt sich daraus nicht isoliert bestimmen.

Der hier rekonstruierte Fall macht eine methodische Entwicklung sichtbar, die lange vor der Codeerzeugung einsetzt: die eigene Gestaltung spezialisierter KI-Arbeitsprozesse, die Identifikation von Integrationsgrenzen und die zunehmend formalisierte Untersuchung eines technischen Lösungsraums. Das gilt zunächst für diesen Fall. Eine allgemeine Effizienzsteigerung oder ein kausaler Kompetenzzuwachs sind damit nicht bewiesen. Eine Person mit interdisziplinärer Vorbildung und Erfahrungen in Projekt-, Produkt- und Anforderungsarbeit kann ein konkretes Nutzungshindernis methodisch untersuchen, die eigenen Arbeitsinstrumente strukturieren, neue technische Fragestellungen erschliessen und ein umfangreicheres Entwicklungsprojekt vorbereiten. Generative KI kann Teil dieses Prozesses sein, ohne fachliche Verantwortung oder die Notwendigkeit unabhängiger Prüfungen aufzuheben.

Der Übergang vom Prompt Builder und Prompt Pilot über den spezialisierten GPT-Stack zum Problem eines zuverlässigen Handoffs zeigt, wie aus einer zunächst begrenzten Anwendung neue Systemfragen entstehen können. Die historische Trennung von sokratischer Reflexion, strukturierter Übergabe und orchestrierter fachlicher Ausführung gibt dieser Entwicklung ein eigenständiges konzeptionelles Profil. Die spätere Trennung von Recherche, Requirements, Architektur und Implementierung macht zudem sichtbar, wie die Arbeitsmethode selbst weiterentwickelt wurde.

**Die übergeordnete Erkenntnisfrage bleibt offen:** Nicht ob KI allein die Entwicklung komplexer Systeme übernimmt, sondern unter welchen Bedingungen Menschen mithilfe von KI ihre vorhandenen Kompetenzen in neue technische Handlungsfelder übertragen, ihr Verständnis erweitern und Ergebnisse eigenständig verantworten können.

Die rekonstruierte Entwicklung bietet einen konkreten Fall, an dem diese Frage weiter untersucht werden kann. Ob die angestrebte Infrastruktur die ursprünglichen Anforderungen erfüllt und welche technischen Eigenschaften sie tatsächlich besitzt, wird erst durch die spätere Implementierung und deren Prüfung entscheidbar.

---

## Anhang A. Chronologische Rekonstruktion und Evidenzstatus

| Zeitraum / Stufe | Gegenstand | Evidenzstatus |
|---|---|---|
| Ungefähr März 2025 | Vermuteter Beginn der Arbeit am ThemenSortierer und an der Ordnung von Chat-Inhalten | Persönliche Erinnerung des Autors; Erstentstehung nicht datiert |
| 23. Mai 2025 | Datierte Diskussion über ThemenSortierer, Themenindex und wiederverwendbare Chat-Organisation | Zeitgenössischer Gesprächsauszug mit Datum; belegt den Diskussionsstand, nicht die Ersterstellung |
| Juni 2025 | Prompt Builder und Prompt Pilot in historischen Gesprächskontexten erwähnt; GPT-Stack-Konzeption in Entwicklung | Retrospektiv wiedergefundene Gesprächskontexte; exakte Erstellungsdaten offen |
| Juni–August 2025 | Weitere Ausarbeitung spezialisierter Custom GPTs und eines GPT-Stacks | Persönliche zeitliche Einordnung; einzelne Fassungsdaten offen |
| Frühe Konfigurationsphase | Prompt Builder / Prompt Pilot, ausgearbeitete Systeminstruktionen und Markerstrukturen | Historisches Archiv und kuratierte Konzeptanalyse; einzelne Fassungsdaten offen |
| Spätere GPT-Stack-Nutzung | Schwierige Übergaben und manuelle Weitergabe von Ergebnissen | Persönliche Erinnerung und historische Handoff-Konzeptnotizen |
| Zeitpunkt offen | Retrospektiv erwähnte, noch nicht identifizierte Anregung aus dem Google-Umfeld; Erprobung von Abacus AI; Kontext- und Guthabenprobleme | Persönliche Erinnerung, externe Verifikation und Datierung offen |
| März 2026 (spätestens) | Dokumentierte Konzeption eines lokalen modularen Agentensystems mit Reflexions- und Orchestrierungsrollen | Wiedergefundener datierter Gesprächskontext; keine vollständige Rekonstruktion aller frühen Details |
| April 2026 | Vertiefung der lokalen System- und Projektplanung, einschliesslich Rollen, technischer Rahmenbedingungen und Sicherheitsfragen | Wiedergefundene datierte Gesprächskontexte; Einzelstände gesondert zu prüfen |
| August 2026 | Konzeptinventur, Handoff- und Memory-Notizen als spätere Dokumentations- und Vertiefungsstände | Datierte historische Unterlagen; kein Ursprung der Systemvision |
| August 2026 | Aktualisierter beziehungsweise erneuter Phase-1-Recherchestand mit Scan-Registry von 35 Einträgen | Projektanweisung und Registry; späterer Forschungsstand, kein Beginn der Konzeptarbeit |
| 28. August 2026 | Spätere Projektzusammenfassung zur bereits zuvor entwickelten Trennung von Nova / Nadia und zum Übergang zu Requirements Discovery | Datierte Zusammenfassung; dokumentiert damaligen Stand, nicht Erstentstehung |
| 2. September 2026 | Ausdifferenziertes Phase-2-Vorgehensmodell | Datierter Prozessrahmen |
| Späterer Verlauf | MVP-Implementierung und Testnachweise | Nicht Gegenstand des aktuellen Quellenpakets |

## Anhang B. Untersuchungsmaterial und Zugänglichkeit

Die historische Fallstudie basiert überwiegend auf **projektinternen, nicht öffentlich zugänglichen Dokumenten**. Das folgende Verzeichnis beschreibt die Materialgruppen, aus denen die Darstellung entwickelt wurde. Es handelt sich um dokumentarisches Untersuchungsmaterial, nicht um eine Bibliografie unabhängiger wissenschaftlicher Veröffentlichungen.

| Materialgruppe | Inhalt und Nachweisfunktion | Zugänglichkeit und Beleggrenze |
|---|---|---|
| Frühe Custom-GPT-Konfigurationen | Rollenprofile, Systeminstruktionen, Modul- und Markerregeln von Prompt Builder, Prompt Pilot und weiteren spezialisierten Assistenten; Nachweis der frühen Gestaltungsabsichten | Intern archiviert, nicht öffentlich; kein Wirksamkeitsnachweis |
| Frühe Systementwürfe und Handoff-Konzepte | Vorstellungen zur Zusammenarbeit von Assistenten, zu strukturierten Arbeitsübergaben sowie zu Nova und Nadia; Nachweis dokumentierter Konzeptstände | Intern archiviert, nicht öffentlich; frühe Entstehungszeitpunkte teilweise offen |
| Historische Projekt- und Rechercheunterlagen | Projektphasen, ausdrücklich entscheidungsfreie Phase-1-Exploration, Scan-Registry mit 35 Einträgen und Vorgehensmodell für Phase 2; Nachweis methodischer Planung | Intern archiviert, nicht öffentlich; Planung und Registerbestand sind von tatsächlicher Umsetzung zu unterscheiden |
| Gesprächszusammenfassungen und Konzeptinventuren | Retrospektive Zusammenführung von Entwicklungsstufen und Veränderungen des Problemverständnisses | Intern archiviert, nicht öffentlich; keine unabhängigen Erstbelege für alle historischen Ereignisse |
| Persönliche historische Angaben | Ausbildungs- und Berufsweg, Anstösse zur Custom-GPT-Arbeit, Erfahrungen mit KI-Diensten und Urheberschaft der frühen Vision | Retrospektive Auskünfte; unabhängig datierte Bestätigung nicht in allen Punkten vorhanden |
| Eigenständiger konzeptioneller Fachartikel | Übergeordnete Diskussion über KI und menschliche Entwicklungsmöglichkeiten | Eigenständiger Text; keine empirische Evidenz für die hier behaupteten Projektereignisse |

### B.1 Tragweite der dokumentarischen Nachweise

Die Zuordnung historischer Aussagen zu Unterlagen wurde in der internen Masterfassung anhand einer aussagebezogenen Prüfmatrix dokumentiert. Für die hier besonders wichtigen Fallaspekte bedeutet das:

- Die erhaltenen Konfigurationen von **Prompt Builder** und **Prompt Pilot** belegen eine bereits früh ausgearbeitete Rollen-, Modul- und Prozessgestaltung. Sie belegen weder die technische Zuverlässigkeit noch die praktische Überlegenheit dieser Konfigurationen.
- Die **Handoff-Konzepte** und die dokumentierte Trennung von **Nova** und **Nadia** belegen eine konzeptionelle Auseinandersetzung mit offener menschlicher Reflexion, überprüfbarer Übergabe und spezialisierter Ausführung. Sie belegen weder eine fertige Implementierung noch den ersten Entstehungszeitpunkt der Vision.
- Die historische **Phase-1-Anweisung** dokumentiert den Anspruch, Recherche von technischen Entscheidungen zu trennen. Das **Scan-Register** weist 35 erfasste Einträge aus, davon vier ergänzende Vertiefungen. Beides ist noch kein vollständiger Qualitätsnachweis der Recherche.
- Das **Phase-2-Vorgehensmodell** dokumentiert die beabsichtigte Trennung zwischen Discovery, Requirements und späteren technischen Entscheidungen. Daraus folgt nicht, dass sämtliche späteren Phasen bereits umgesetzt waren.
- Die Zuordnung der **ursprünglichen Urheberschaft** beruht auf der ausdrücklichen persönlichen Rekonstruktion des Projektinitiators; spätere Gesprächszusammenfassungen dokumentieren die Rollenidee, ersetzen aber keinen unabhängigen Erstbeleg.

Auf den Abdruck sämtlicher interner Einzelreferenzen wird zugunsten der Lesbarkeit verzichtet. Ihre Nichtveröffentlichung ist eine Grenze der externen Nachprüfbarkeit und wird nicht durch künstliche Belegkennungen oder bloss formale Verweise ausgeglichen. Eine weitergehende unabhängige Kontrolle einzelner Aussagen wäre nur möglich, wenn die jeweiligen Primärstellen gesondert zugänglich gemacht würden.

## Anhang C. Geltungsgrenzen der öffentlichen Fassung

Diese Publikationsfassung stellt die dokumentierte Entstehungs- und Methodengeschichte dar. Sie enthält **keinen** Nachweis, dass ein vollständiges lokales Agentensystem bereits implementiert, sicher betrieben oder hinsichtlich seiner Wirksamkeit evaluiert worden ist. Frühere historische Architekturentscheidungen werden nicht als heutige technische Festlegungen ausgegeben.

Der Autor untersucht hier sein eigenes Entwicklungsprojekt; die dadurch mögliche retrospektive Perspektivverzerrung bleibt ausdrücklich zu berücksichtigen. Die Angaben zu persönlichen Ausbildungs- und Tätigkeitsstationen sowie zu einzelnen frühen zeitlichen Erinnerungsankern beruhen teilweise auf retrospektiven Auskünften. Aussagen über externe KI-Plattformen beschreiben beobachtete Nutzungserfahrungen und sollen nicht als unabhängig bestätigte technische Aussagen über deren interne Abrechnung oder Kontextverarbeitung gelesen werden.

Vor der tatsächlichen Veröffentlichung bleiben die abschliessende sachliche Prüfung personenbezogener und historischer Angaben sowie die redaktionelle Freigabe erforderlich. Die interne Masterfassung V1.2 mit ihrer ausführlichen Quellenmatrix bleibt gesondert erhalten.

## Wissenschaftliche Literatur

Die folgenden Veröffentlichungen dienen der **nachträglichen methodischen und theoretischen Einordnung**. Sie sind nicht mit dem internen historischen Untersuchungsmaterial in Anhang B gleichzusetzen und werden nicht als ursprüngliche Entscheidungsgrundlagen des Projekts ausgegeben.

- Amershi, S., Weld, D., Vorvoreanu, M., Fourney, A., Nushi, B., Collisson, P., Suh, J., Iqbal, S., Bennett, P. N., Inkpen, K., Teevan, J., Kikin-Gil, R., & Horvitz, E. (2019). *Guidelines for Human-AI Interaction*. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (Paper 3, S. 1–13). ACM. https://doi.org/10.1145/3290605.3300233
- Dellermann, D., Ebel, P., Söllner, M., & Leimeister, J. M. (2019). *Hybrid Intelligence*. *Business & Information Systems Engineering, 61*, 637–643. https://doi.org/10.1007/s12599-019-00595-2
- Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). *Design Science in Information Systems Research*. *MIS Quarterly, 28*(1), 75–105. https://aisel.aisnet.org/misq/vol28/iss1/6/
- Nuseibeh, B., & Easterbrook, S. (2000). *Requirements Engineering: A Roadmap*. In *Proceedings of the Conference on the Future of Software Engineering* (S. 35–46). ACM. https://doi.org/10.1145/336512.336523
- Yin, R. K. (2018). *Case Study Research and Applications: Design and Methods* (6. Aufl.). SAGE Publications. ISBN 978-1-5063-3616-9.
