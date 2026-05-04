import { ShieldPlus, Sun, ThermometerSun } from "lucide-react";

const asaCard = {
  iconText: "FILAMENT",
  title: "ASA",
  subtitle: "Weiterentwicklung von ABS für anspruchsvolle Umgebungen",
  bullets: [
    {
      icon: <Sun className="shrink-0 text-blue" size={32} />,
      bulletTitle: "Witterungs- & UV-Beständigkeit",
      bulletSubtitle:
        "Hält Sonneneinstrahlung und Feuchtigkeit dauerhaft stand",
    },
    {
      icon: <ThermometerSun className="shrink-0 text-blue" size={32} />,
      bulletTitle: "Temperaturresistent",
      bulletSubtitle: "Stabil bei hohen und wechselnden Temperaturen",
    },
    {
      icon: <ShieldPlus className="shrink-0 text-blue" size={32} />,
      bulletTitle: "Langlebig im Außenbereicht",
      bulletSubtitle: "Geringer Materialverschleiß über lange Zeiträume",
    },
  ],
  applications: ["Outdoor-Teile", "Automotive", "Gehäuse im Freien"],
};

const plaCard = {
  iconText: "FILAMENT",
  title: "PLA - Einfach & Präzise",
  subtitle: "Standardmaterial für Prototypen, Modelle und Designobjekte",
  bullets: [
    {
      icon: <Sun className="shrink-0 text-blue" size={32} />,
      bulletTitle: "Druckqualität & Details",
      bulletSubtitle:
        "PLA bietet sehr gute Druckqualität feine Details",
    },
    {
      icon: <ThermometerSun className="shrink-0 text-blue" size={32} />,
      bulletTitle: "Umweltfreundlich",
      bulletSubtitle: "Biobasiert und damit umweltfreundlicher als viele Kunststoffe",
    },
    {
      icon: <ShieldPlus className="shrink-0 text-blue" size={32} />,
      bulletTitle: "Geringe Wärmebeständigkeit",
      bulletSubtitle: "Geringe Wärmebeständigkeit",
    },
        {
      icon: <ShieldPlus className="shrink-0 text-blue" size={32} />,
      bulletTitle: "Nicht UV-beständig",
      bulletSubtitle: "Nicht UV-beständig",
    }
  ],
  applications: ["Anschauungsmodelle, Deko"],
};

export const materialCardsData = [asaCard, plaCard];
