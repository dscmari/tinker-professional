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

export default function Home() {
  const hero = {
    title: "Professioneller 3D-Druck Service",
    subtitle: "- für Unternehmen & Privatkunden",
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
      <section
        id="print-now"
        className="lg:scroll-mt-40 mx-4 sm:mx-16 lg:mx-32 mt-24 flex flex-col gap-8 lg:gap-16"
      >
        <div className="lg:mx-auto">
          <div className="max-w-4xl">
            <h1 className="lg:!text-5xl/14 !font-extrabold !tracking-tight text-center">
             Jetzt Drucken
            </h1>
            <p>
              Laden Sie Ihre STL-, STEP- oder 3MF-Datei hoch und wählen Sie die
              gewünschten Druckeinstellungen aus. Ich prüfe Ihr Projekt
              persönlich und erstelle Ihnen ein individuelles Angebot inklusive
              Materialempfehlung und technischer Beratung.
            </p>
            <div className="hidden md:flex flex-col lg:flex-row gap-8 ml-4 mt-8 text-blue">
              <div className="flex items-center gap-2">
                {" "}
                <SlidersHorizontal className="text-blue" size={32} />{" "}
                <span className="text-xl font-semibold">
                  Druck-Spezifikationen festlegen
                </span>
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <UploadCloud className="text-blue" size={32} />{" "}
                <span className="text-xl font-semibold">Datei hochladen</span>
              </div>{" "}
              <div className="flex items-center gap-2">
                {" "}
                <FileCheck2 className="text-blue" size={32} />{" "}
                <span className="text-xl font-semibold">Angebot erhalten</span>
              </div>
            </div>
          </div>

          <MaterialForm className="lg:h-[700px] -mx-4 md:mx-auto lg:mx-0  max-w-4xl mt-12" />
        </div>
      </section>
    
    </div>
  );
}
