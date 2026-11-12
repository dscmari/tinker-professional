import Image from "next/image";
import Hero from "./components/Hero";
import MaterialForm from "./components/forms/MaterialForm";
import FourBoxLayout from "./components/FourBoxLayout";
import { heightsData } from "./data/HeightsData";

import MaterialCard from "./components/MaterialCard";
import {
  nozzleDiameterCards,
  wallThicknessCards,
} from "./data/MaterialCardsData";
import { FileCheck2, SlidersHorizontal, Star, UploadCloud } from "lucide-react";
import { densityData } from "./data/DensityData";
import EasyUpload from "./components/forms/EasyUpload";

export default function Home() {
  const hero = {
    title: "3d-Druck & CAD-Konstruktion",
    subtitle:
      "  Für Privatpersonen und Unternehmen: Wir verwandeln Skizzen, Ideen und 3D-Dateien in maßgeschneiderte Bauteile.",
    intro:
      "Hochwertige 3D-Drucke für Prototypen, Ersatzteile und individuelle Bauteile. Ich unterstütze Sie von der ersten Idee bis zum fertigen Druck – inklusive Beratung, Dateianpassung und Konstruktion einfacher Bauteile für optimale Ergebnisse.",
    subintro:
      "Wählen Sie Material, Farbe und Druckeinstellungen, laden Sie Ihre Datei hoch und erhalten Sie innerhalb kürzester Zeit ein individuelles Angebot.",
    imgPath: "/images/3dprinter.png",
  };
  const { title, subtitle, intro, subintro, imgPath } = hero;
  return (
    <div style={{ backgroundImage: `url(/images/tool_bg_vertikal.jpg)` }}>
      <Hero
        title={title}
        subtitle={subtitle}
        intro={intro}
        subintro={subintro}
        imgPath={imgPath}
      />
      <section className="py-12 lg:py-32 px-4 md:px-16 lg:px-32"></section>
    </div>
  );
}
