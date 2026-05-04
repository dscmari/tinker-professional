import { Check, X } from "lucide-react";

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

const tpuCard = {
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

export const materialCardsData = [plaCard, petgCard, absCard, asaCard, pa12Card, tpuCard];
