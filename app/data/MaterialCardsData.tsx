import { Check, Star, X } from "lucide-react";

//Materialkarten

const plaCard = {
  iconText: "FILAMENT",
  title: "PLA - Einfach & Präzise",
  subtitle: "Standardmaterial für Prototypen, Modelle und Designobjekte",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Druckqualität & Details",
      bulletSubtitle: "PLA bietet sehr gute Druckqualität feine Details",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Umweltfreundlich",
      bulletSubtitle:
        "Biobasiert und damit umweltfreundlicher als viele Kunststoffe",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Geringe Wärmebeständigkeit",
      bulletSubtitle: "Geringe Wärmebeständigkeit",
      isPro: false,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Nicht UV-beständig",
      bulletSubtitle: "Nicht UV-beständig",
      isPro: false,
    },
  ],
  applications: ["Anschauungsmodelle", "Deko"],
};

const petgCard = {
  iconText: "FILAMENT",
  title: "PETG – Robust & Vielseitig",
  subtitle: "Kombiniert Stabilität mit Flexibilität – ideal für funktionale Bauteile",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Hohe Schlagfestigkeit",
      bulletSubtitle: "Sehr robust und widerstandsfähig gegen mechanische Stöße",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Chemikalienbeständigkeit",
      bulletSubtitle: "Gute Resistenz gegenüber vielen Laugen, Säuren und Ölen",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Geringe Verformung",
      bulletSubtitle: "Sehr maßhaltig durch minimales Warping-Risiko beim Druck",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Bedingt UV-beständig",
      bulletSubtitle: "Nur für geschützten Außenbereich oder kurze Einsatzzeiten geeignet",
      isPro: false,
    },
  ],
  applications: ["Halterungen", "Mechanische Bauteile", "Outdoor (leicht)"],
};

const absCard = {
  iconText: "FILAMENT",
  title: "ABS – Klassisch & Belastbar",
  subtitle: "Industrieller Standard für widerstandsfähige und belastbare Bauteile",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Hitzebeständigkeit",
      bulletSubtitle: "Formstabil bei hohen Temperaturen und mechanischer Last",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Hervorragende Nachbearbeitung",
      bulletSubtitle: "Lässt sich sehr gut schleifen und mit Aceton glätten",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Neigt zu Verzug (Warping)",
      bulletSubtitle: "Anspruchsvoll im Druck; benötigt meist einen geschlossenen Bauraum",
      isPro: false,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Nicht UV-beständig",
      bulletSubtitle: "Material wird bei direkter Sonneneinstrahlung spröde und gelb",
      isPro: false,
    },
  ],
  applications: ["Funktionsteile", "Gehäuse", "Technische Prototypen"],
};

const asaCard = {
  iconText: "FILAMENT",
  title: "ASA",
  subtitle: "Weiterentwicklung von ABS für anspruchsvolle Umgebungen",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Witterungs- & UV-Beständigkeit",
      bulletSubtitle:
        "Hält Sonneneinstrahlung und Feuchtigkeit dauerhaft stand",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Temperaturresistent",
      bulletSubtitle: "Stabil bei hohen und wechselnden Temperaturen",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Langlebig im Außenbereicht",
      bulletSubtitle: "Geringer Materialverschleiß über lange Zeiträume",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Warping",
      bulletSubtitle: "Erhöhter Anspruch an die Druckumgebung ",
      isPro: false,
    },
  ],
  applications: ["Outdoor-Teile", "Automotive", "Gehäuse im Freien"],
};

const pa12Card = {
  iconText: "FILAMENT",
  title: "PA12 (Nylon) – Extrem Belastbar",
  subtitle: "Hochleistungsmaterial für mechanisch anspruchsvolle Anwendungen",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Maximale Zähigkeit",
      bulletSubtitle: "Enorm bruchfest und belastbar bei mechanischer Beanspruchung",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Verschleißfestigkeit",
      bulletSubtitle: "Hervorragende Gleiteigenschaften und chemische Beständigkeit",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Leichte Flexibilität",
      bulletSubtitle: "Material bricht nicht unter Last, sondern gibt leicht nach",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Bedingt UV-beständig",
      bulletSubtitle: "Ohne spezielle Additive nicht für dauerhaften Außeneinsatz geeignet",
      isPro: false,
    },
  ],
  applications: ["Zahnräder", "Industrielle Bauteile", "Gleitlager"],
};

export const tpuCard = {
  iconText: "FILAMENT",
  title: "TPU – Flexibel & Elastisch",
  subtitle: "Gummiartiges Spezialmaterial für flexible und dämpfende Anwendungen",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Hohe Elastizität",
      bulletSubtitle: "Extrem biegsam und dehnbar ohne bleibende Verformung",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Stoßdämpfung",
      bulletSubtitle: "Hervorragende Absorption von Vibrationen und Aufprallenergie",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Abriebfestigkeit",
      bulletSubtitle: "Sehr widerstandsfähig gegen mechanischen Verschleiß und Wasser",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Bedingt UV-beständig",
      bulletSubtitle: "Längere Sonneneinstrahlung kann das Material verfärben oder spröde machen",
      isPro: false,
    },
  ],
  applications: ["Dichtungen", "Handyhüllen & Schutzteile", "Vibrationsdämpfer"],
};

//Wandstärke

export const wallThicknessStandard = {
  iconText: "Wandstärke",
  title: <div className="flex gap-4 relative "> <Star className="absolute -top-1 shrink-0 text-[#EFBF04]" fill="#EFBF04" size={32}/> <h2 className="ml-12 !text-white !mb-0">2 Außenwände – Standard</h2></div>,
  subtitle: " Ein Bauteil mit 2 Außenwänden benötigt etwa 4 Stunden Druckzeit",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Geringer Materialverbrauch",
      bulletSubtitle: "Spart Filament dank optimierter Fülldichte",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Kürzere Druckzeit",
      bulletSubtitle: "Schnellerer Druck durch effiziente Pfadplanung",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Gute Stabilität",
      bulletSubtitle: "Hohe Formfestigkeit auch bei Belastung",
      isPro: true,
    },
  ],
  applications: ["Dekoration", "Gehäuse", "Modelle", "Ersatzteile", "Funktionsteile"],
};

export const wallThicknessThreeWalls = {
  iconText: "Wandstärke",
  title: "3 Außenwände – Mehr Stabilität",
  subtitle: "Das gleiche Bauteil benötigt mit 3 Außenwänden etwa 4,5 bis 5 Stunden Druckzeit",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Deutlich höhere Stabilität",
      bulletSubtitle: "Widersteht stärker mechanischer Belastung",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Etwas höheres Gewicht",
      bulletSubtitle: "Erhöhter Materialeinsatz",
      isPro: false,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Moderat längere Druckzeit",
      bulletSubtitle: "Etwa 30 – 45 Minuten längere Druckzeit",
      isPro: false,
    },
  ],
  applications: ["Halterungen", "Mechanische Bauteile", "Leicht belastete Funktionsteile"],
};

export const wallThicknessFourWalls = {
  iconText: "Wandstärke",
  title: "4 Außenwände – Hohe Belastbarkeit",
  subtitle: "Das gleiche Bauteil benötigt mit vier Außenwänden etwa 5 bis 5,5 Stunden.",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Sehr hohe Stabilität",
      bulletSubtitle: "Maximale Widerstandsfähigkeit",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Weniger anfällig für Brüche",
      bulletSubtitle: "Deutlich höhere Bruchfestigkeit im Betrieb",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Höherer Materialverbrauch",
      bulletSubtitle: "Erhöhter Materialeinsatz",
      isPro: false,
    },
  ],
  applications: ["Werkzeughalter", "Maschinenbauteile", "Stark belastete Funktionsteile"],
};

export const wallThicknessFiveWalls = {
  iconText: "Wandstärke",
  title: "5 Außenwände – Max. Belastbarkeit",
  subtitle: "Das gleiche Bauteil benötigt mit fünf Außenwänden etwa 5,5 bis 6 Stunden",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Maximale Stabilität",
      bulletSubtitle: "Höchste Festigkeit der Wandstruktur",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Sehr hoher Materialverbrauch",
      bulletSubtitle: "Sehr hoher Materialverbrauch",
      isPro: false,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Lange Druckzeit",
      bulletSubtitle: "Spürbar längere Fertigung",
      isPro: false,
    },
  ],
  applications: ["Stark belastete Teile", "Hydraulik- & Pneumatikteile", "Sicherheitskritische Bauteile"]
};

//Düsendurchmesser

export const nozzleDiameterStandard = {
  iconText: "Düsendurchmesser",
  title: <div className="flex gap-4 relative "> <Star className="absolute -top-1 shrink-0 text-[#EFBF04]" fill="#EFBF04" size={32}/> <h2 className="ml-12 !text-white !mb-0">0,4 mm – Standard</h2></div>,
  subtitle: "Empfohlender Standarddurchmesser",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Sehr gute Detailqualität",
      bulletSubtitle: "Feine Konturen und präzise Oberflächen",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Gute Stabilität",
      bulletSubtitle: "Zuverlässige Festigkeit für die meisten Bauteile",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Schnelle Druckzeit",
      bulletSubtitle: "Ausgewogenes Verhältnis von Tempo und Qualität",
      isPro: true,
    },
  ],
  applications: ["Dekoration", "Gehäuse", "Modelle", "Ersatzteile", "Funktionsteile"],
};
export const nozzleDiameterFineDetail = {
  iconText: "Düsendurchmesser",
  title: "0,2 mm – Höhere Präzision",
  subtitle: "Feineres Auflösungsvermögen",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Höchste Detailgenauigkeit",
      bulletSubtitle: "Feinste Konturen werden originalgetreu abgebildet",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Sehr glatte Oberflächen",
      bulletSubtitle: "Kaum sichtbare Schichtlinien im Druckbild",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Kleine Radien möglich",
      bulletSubtitle: "Präzise Rundungen auch bei filigranen Formen",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Deutlich längere Druckzeit",
      bulletSubtitle: "Fast doppelt so lange wie mit Standarddüse",
      isPro: false,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Nicht für große Bauteile geeignet",
      bulletSubtitle: "Unwirtschaftlich bei großvolumigen Drucken",
      isPro: false,
    },
  ],
  applications: ["Miniaturen", "Figuren", "Schriftzüge", "Kleine Bauteile", "Sehr feine Details"],
};

export const nozzleDiameterFastStable = {
  iconText: "Düsendurchmesser",
  title: "0,6 mm – Schnell & Stabil",
  subtitle: "Schnellerer Druck als bei den geringeren Durchmessern",
  bullets: [
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Kürzere Druckzeit",
      bulletSubtitle: "Deutlich schnellerer Druck durch breitere Bahnen",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Höhere Stabilität zwischen den Druckbahnen",
      bulletSubtitle: "Bessere Schichthaftung durch mehr Materialauftrag",
      isPro: true,
    },
    {
      icon: <Check className="shrink-0 text-green-500" size={32} />,
      bulletTitle: "Weniger empfindlich gegenüber kleinen Druckfehlern",
      bulletSubtitle: "Robusterer Druckprozess mit weniger Ausschuss",
      isPro: true,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Weniger feine Details",
      bulletSubtitle: "Geringere Auflösung bei kleinen Strukturen",
      isPro: false,
    },
    {
      icon: <X className="shrink-0 text-red-500" size={32} />,
      bulletTitle: "Kleine Schrift und filigrane Strukturen können verloren gehen",
      bulletSubtitle: "Ungeeignet für sehr feine oder detaillierte Formen",
      isPro: false,
    },
  ],
  applications: ["Große Bauteile", "Gartenprodukte", "Funktionsteile", "Vorrichtungen", "Prototypen"],
};

export const materialCardsData = [plaCard, petgCard, absCard, asaCard, pa12Card, tpuCard];
export const wallThicknessCards = [wallThicknessStandard, wallThicknessThreeWalls, wallThicknessFourWalls, wallThicknessFiveWalls]
export const nozzleDiameterCards = [nozzleDiameterStandard, nozzleDiameterFineDetail, nozzleDiameterFastStable]