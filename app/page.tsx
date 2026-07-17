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
              JETZT DRUCKEN
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

          <MaterialForm className="h-screenlg:h-[700px] -mx-4 md:mx-auto lg:mx-0  max-w-4xl mt-12" />
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32  flex flex-col gap-12 lg:flex-row lg:gap-24 lg:justify-center">
        <div className="flex-1 max-w-3xl">
          <h1>Präzision und Maßhaltigkeit</h1>
          <div className="flex flex-col gap-4">
            <p>
              Jedes Material verhält sich beim Drucken unterschiedlich. Einige
              Kunststoffe ziehen sich beim Abkühlen leicht zusammen
              (Schrumpfung). Dadurch können geringe Maßabweichungen entstehen.
            </p>
            <p>
              Um eine möglichst hohe Maßgenauigkeit zu erreichen, berücksichtige
              ich materialabhängige Schrumpffaktoren bereits bei der
              Druckvorbereitung. Zusätzlich werden Druckparameter und
              Bauteilausrichtung individuell auf Ihr Bauteil abgestimmt.
            </p>
            <div className="text-blue font-medium">
              <span>Typische Maßgenauigkeit:</span>
              <ul className="list-disc ml-8">
                <li>±0,2 mm bei kleinen bis mittleren Bauteilen </li>
                <li>Größere Bauteile abhängig von Material und Geometrie </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={"/images/gear.png"} width={300} height={300} alt="" />
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32  flex flex-col gap-12 lg:flex-row lg:gap-24 lg:justify-center">
        <div className="hidden lg:block">
          <Image src={"/images/tool_7.png"} width={300} height={300} alt="" />
        </div>
        <div className="flex-1 max-w-2xl">
          <h1>Wichtiger Hinweis zur Stabilität</h1>
          <div className="flex flex-col gap-4">
            <p className="font-medium">
              3D-gedruckte Bauteile bestehen aus vielen einzelnen Schichten.
              Innerhalb einer Schicht ist das Bauteil am stabilsten. Zwischen
              den einzelnen Schichten ist die Festigkeit geringer. Dadurch
              können Bauteile bei ungünstiger Belastung leichter entlang der
              Schichtlinien brechen.
            </p>
            <p>
              Deshalb richte ich jedes Bauteil individuell so aus, dass die
              höchste Stabilität in Belastungsrichtung erreicht wird. Falls
              erforderlich, passe ich zusätzlich Wandstärke, Fülldichte oder
              Material an, um die bestmögliche Festigkeit zu erzielen.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 py-4 lg:py-32 mt-24 lg:mt-32 flex flex-col items-center bg-slate-300/50">
        <h1>Tipps zur richtigen Schichthöhe</h1>
        <p className="max-w-3xl text-center">
          Die Schichthöhe bestimmt, wie fein Ihr Bauteil gedruckt wird. Kleinere
          Schichten sorgen für eine glattere Oberfläche und feinere Details,
          erhöhen jedoch die Druckzeit. Größere Schichten ermöglichen eine
          schnellere und kostengünstigere Fertigung.
        </p>
        <FourBoxLayout data={heightsData} className="mt-12" />
        <div className="flex flex-col gap-12 lg:flex-row gap-8 mt-24 lg:mt-32">
          <div className="flex-1 max-w-xl">
            <h2>Beeinflusst die Schichthöhe die Stabilität?</h2>
            <div className="flex flex-col gap-4">
              <p>
                Nur geringfügig. Die Schichthöhe hat einen kleinen Einfluss auf
                die Festigkeit eines Bauteils.
              </p>
              <p>
                Eine kleinere Schichthöhe kann die Haftung zwischen den
                Schichten leicht verbessern, da mehr Schichten miteinander
                verbunden werden. Der Unterschied ist jedoch in der Praxis meist
                gering.
              </p>
              <p>
                Für eine hohe Stabilität optimiere ich die Druckeinstellungen
                und die Ausrichtung jedes Bauteils individuell.
              </p>
            </div>
          </div>
          <div className="flex-1 max-w-xl">
            <h2>Gut zu wissen</h2>
            <div className="flex flex-col gap-4">
              <p>
                Die Schichthöhe beeinflusst hauptsächlich die
                Oberflächenqualität, den Detailgrad und die Druckzeit. Die
                Stabilität eines Bauteils hängt dagegen überwiegend von anderen
                Faktoren ab, wie beispielsweise:
              </p>
              <div className="text-blue font-medium">
                <ul className="list-disc ml-8">
                  <li>Materialwahl</li>
                  <li>Bauteilausrichtung</li>
                  <li>Wandstärke </li>
                  <li>Anzahl der Außenwände </li>
                  <li>Fülldichte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32 flex flex-col items-center gap-12">
        <div className=" max-w-2xl">
          <h1 className="text-center">Tipps zur Wandstärke</h1>
          <div className="flex flex-col gap-4">
            <p>
              Die Wandstärke bestimmt die Anzahl der äußeren Druckbahnen
              (Perimeter), aus denen Ihr Bauteil besteht. Da Belastungen
              überwiegend über die Außenwände aufgenommen werden, beeinflusst
              die Wandstärke die Stabilität häufig stärker als eine hohe
              Fülldichte.
            </p>
            <p>
              Für die meisten Anwendungen sind 2 Außenwände vollkommen
              ausreichend. Bei stärker belasteten Bauteilen sind 3 bis 4
              Außenwände zu empfehlen.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:-mx-32 lg:grid-cols-2  gap-8">
          {wallThicknessCards.map((card, index) => (
            <div key={index} className="max-w-lg">
              <MaterialCard data={card} className="max-w-lg" />
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32  flex flex-col gap-12 lg:flex-row lg:gap-24 lg:justify-center">
        <div className="flex-1 max-w-3xl">
          <h2>Gut zu wissen</h2>
          <div className="flex flex-col gap-4">
            <p>
              Ich optimiere die Wandstärke individuell für jedes Bauteil, um die
              beste Kombination aus Stabilität, Gewicht und Kosten zu erreichen.
            </p>
            <p>
              Eine größere Düse macht ein Bauteil nicht automatisch wesentlich
              stabiler. Sie ermöglicht jedoch breitere Druckbahnen und eine
              bessere Verbindung zwischen diesen, was insbesondere bei großen
              und funktionalen Bauteilen von Vorteil sein kann. Deshalb
              optimiere ich die Wandstärke individuell für jedes Bauteil, um die
              beste Kombination aus Stabilität, Gewicht und Kosten zu erreichen.
            </p>
            <p>
              Eine größere Düse macht ein Bauteil nicht automatisch wesentlich
              stabiler. Sie ermöglicht jedoch breitere Druckbahnen und eine
              bessere Verbindung zwischen diesen, was insbesondere bei großen
              und funktionalen Bauteilen von Vorteil sein kann.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={"/images/gear.png"} width={300} height={300} alt="" />
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32 flex flex-col items-center gap-12">
        <div className=" max-w-2xl">
          <h1 className="text-center">Tipps zur Düsenwahl</h1>
          <div className="flex flex-col gap-4">
            <p>
              Der Düsendurchmesser beeinflusst die Detailgenauigkeit, die
              Druckgeschwindigkeit und die Stabilität eines Bauteils.
            </p>
            <p>
              Eine kleinere Düse ermöglicht feinere Details und glattere
              Oberflächen, benötigt jedoch deutlich mehr Druckzeit. Eine größere
              Düse druckt schneller und erzeugt stabilere Schichtverbindungen,
              kann aber feine Details nicht so präzise darstellen.
            </p>
            <p>
              Für die meisten Anwendungen ist die 0,4 mm Düse die beste Wahl.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:-mx-32 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {nozzleDiameterCards.map((card, index) => (
            <div key={index} className="max-w-lg">
              <MaterialCard data={card} className="max-w-md" />
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 py-4 lg:py-32 mt-24 lg:mt-32 flex flex-col items-center bg-slate-300/50">
        <h1>Welches Füllmuster sollte ich wählen?</h1>
        <p className="max-w-3xl text-center">
          Viele vermuten, dass eine sehr hohe Fülldichte automatisch ein
          deutlich stabileres Bauteil ergibt. In der Praxis ist der Unterschied
          jedoch oft kleiner als erwartet. Ab etwa 40–50 % Fülldichte steigt die
          Stabilität meist nur noch geringfügig an, während sich Druckzeit,
          Materialverbrauch und Gewicht deutlich erhöhen.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 lg:mt-24">
          <div className="flex flex-col gap-1 max-w-sm">
            <div className="flex items-center gap-2">
              {" "}
              <Star
                className="shrink-0 text-[#EFBF04]"
                fill="#EFBF04"
                size={24}
              />{" "}
              <h3 className="!mb-0">Gyroid (Empfohlen)</h3>
            </div>
            <p>
              {" "}
              Sehr gleichmäßige Stabilität in alle Richtungen. Meine Empfehlung
              für über 80 % aller Drucke.
            </p>
          </div>
          <div className="flex flex-col gap-1 max-w-sm">
            <h3 className="!mb-0">Lines</h3>
            <p>Für einfache Modelle und Prototypen mit kurzer Druckzeit.</p>
          </div>
          <div className="flex flex-col gap-1 max-w-sm">
            <h3 className="!mb-0">Grid</h3>
            <p>Der bewährte Allrounder für die meisten Bauteile.</p>
          </div>
          <div className="flex flex-col gap-1 max-w-sm">
            <h3 className="!mb-0">Cubic</h3>
            <p>Ideal für hochbelastete technische Bauteile.</p>
          </div>
          <div className="flex flex-col gap-1 max-w-sm">
            <h3 className="!mb-0">Honeycomb</h3>
            <p>
              Stabil und leicht, wird heute jedoch seltener verwendet als Gyroid
              oder Cubic.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start mt-12 lg:mt-24">
          <div className="max-w-xl">
            <h2>Die Empfehlung von TechTinker</h2>
            <div className="flex flex-col gap-4">
              <p>
                Für die meisten Anwendungen empfehle ich Gyroid mit 20 %
                Fülldichte. Diese Kombination bietet eine hervorragende Balance
                aus Stabilität, Materialverbrauch und Druckzeit.
              </p>
            </div>
          </div>
          <FourBoxLayout data={densityData} className="mt-12" />
          <div className="mt-24 lg:mt-32">
            <div className="max-w-xl">
              <h2>Gut zu wissen</h2>
              <div className="flex flex-col gap-4">
                <p>
                  Eine höhere Fülldichte bedeutet nicht automatisch ein deutlich
                  stabileres Bauteil. Ab etwa 40–50 % nimmt der
                  Stabilitätsgewinn nur noch langsam zu, während Druckzeit,
                  Materialverbrauch und Gewicht stark ansteigen. Für die
                  Stabilität sind außerdem entscheidend:
                </p>
                <div className="text-blue font-medium">
                  <ul className="list-disc ml-8">
                    <li>Material</li>
                    <li>Wandstärke </li>
                    <li>Anzahl der Außenwände </li>
                    <li>Druckausrichtung </li>
                    <li>Füllmuster </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
