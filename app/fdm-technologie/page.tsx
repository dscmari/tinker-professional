import Image from "next/image";
import Hero from "../components/Hero";
import { Check, Star, X } from "lucide-react";
import Hero_noImage from "../components/Hero_noImage";
import FourBoxLayout from "../components/FourBoxLayout";
import { heightsData } from "../data/HeightsData";
import {
  nozzleDiameterCards,
  wallThicknessCards,
} from "../data/MaterialCardsData";
import MaterialCard from "../components/MaterialCard";
import { densityData } from "../data/DensityData";

export default function page() {
  const hero = {
    title: "FDM-Druck",
    subtitle: "- Fused Deposition Modeling",
    intro:
      "In der modernen additiven Fertigung ist die Entscheidung für eine bestimmte Technologie eine strategische Weichenstellung. Bevor man sich mit den Spezifikationen und Parametern auseinandersetzt, steht eine grundlegende Analyse im Vordergrund: Harmoniert die gewählte Methode mit dem angestrebten Einsatzzweck des Bauteils?",
    imgPath: "/images/tool_5.png",
    backgroundImgPath: "/images/tool_bg_horizontal.jpg",
  };
  const { title, subtitle, intro, imgPath } = hero;

  return (
    <div style={{ backgroundImage: `url(/images/tool_bg_vertikal.jpg)` }}>
      <Hero_noImage
        title={title}
        subtitle={subtitle}
        intro={intro}
        imgPath={imgPath}
      />
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32 xl:pt-48">
        <div>
          <h3 className="text-center">Fused Deposition Modeling</h3>
          <h1 className="text-center mt-4">Wie funktioniert FDM?</h1>
        </div>
        <div className="flex flex-col lg:gap-16 mt-12 max-w-5xl mx-auto">
          <div className=" max-w-3xl text-center mx-auto">
            <p className="lg:text-lg">
              Der FDM 3D-Druck zählt zu den am weitesten verbreiteten Verfahren
              der additiven Fertigung. Dabei wird ein thermoplastischer
              Kunststoff erhitzt und Schicht für Schicht präzise aufgetragen,
              bis ein belastbares und detailgetreues Bauteil entsteht. Die
              Technologie eignet sich hervorragend für Prototypenbau,
              funktionale Teile und individuelle Sonderanfertigungen.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="grid gap-8 lg:gap-0 md:grid-cols-3">
              <div className="flex flex-col items-center lg:h-90">
                <Image
                  src="/images/tool_6.png"
                  alt="Illustration eines Zahnrades"
                  width={200}
                  height={200}
                  className="lg:w-72 "
                  loading="eager"
                />
                <span className="lg:mt-auto text-lg lg:text-2xl font-semibold text-blue">
                  Prototypenbau
                </span>
              </div>
              <div className="flex flex-col items-center lg:h-90">
                <Image
                  src="/images/tool_7.png"
                  alt="Illustration eines Zahnrades"
                  width={200}
                  height={200}
                  className="lg:w-76 "
                  loading="eager"
                />
                <span className="mt-auto text-lg lg:text-2xl font-semibold text-blue">
                  Funktionale Teile
                </span>
              </div>
              <div className="flex flex-col items-center lg:h-90">
                <Image
                  src="/images/tool_8.png"
                  alt="Illustration eines Zahnrades"
                  width={200}
                  height={200}
                  className="lg:w-80 "
                  loading="eager"
                />
                <span className="mt-auto text-lg lg:text-2xl font-semibold text-blue">
                  Sonderanfertigungen
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-24 lg:text-lg max-w-3xl mx-auto text-center">
          Für unsere Fertigung setzen wir auf hochwertige Komponenten wie den
          Bambu Lab h2S, die eine gleichbleibend hohe Druckqualität, präzise
          Details und zuverlässige Ergebnisse ermöglichen. Moderne
          FDM-Technologie bietet dabei eine optimale Kombination aus
          <strong> Geschwindigkeit</strong>, <strong> Stabilität</strong> und{" "}
          <strong> Wirtschaftlichkeit</strong>.
        </p>
      </section>
      <section className="px-4 sm:px-16 lg-px-32 pt-24 lg:pt-32 xl:pt-48 mb-48">
        <div>
          <h3 className="text-center">Fused Deposition Modeling</h3>
          <h1 className="text-center mt-4">Vorteile & Nachteile von FDM</h1>
        </div>
        <div className="flex flex-col gap-24 lg:flex-row lg:gap-0 max-w-5xl mx-auto pt-12 bg-white/60">
          <div className="flex-1 rounded-xl shadow-xl flex flex-col gap-4 p-4 lg:p-8">
            <h1 className="text-center text-blue pb-8 border-b border-slate-200">
              PRO
            </h1>
            <div className="flex gap-4 items-center">
              <Check className="shrink-0 text-green-500" size={32} />
              <span className="lg:text-lg font-semibold text-blue">
                Kosteneffiziente Herstellung von Einzelteilen und Kleinserien
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Check className="shrink-0 text-green-500" size={32} />
              <span className="lg:text-lg font-semibold text-blue">
                Hohe mechanische Belastbarkeit der Bauteile
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Check className="shrink-0 text-green-500" size={32} />
              <span className="lg:text-lg font-semibold text-blue">
                Flexible Materialauswahl
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Check className="shrink-0 text-green-500" size={32} />
              <span className="lg:text-lg font-semibold text-blue">
                Schnelle Umsetzung von individuellen Projekten
              </span>
            </div>
            <p className="text-blue font-semibold">
              Der FDM 3D-Druck ist die ideale Lösung für Unternehmen und
              Privatkunden, die maßgeschneiderte, funktionale und
              wirtschaftliche Bauteile benötigen.
            </p>
          </div>
          <div className="flex-1 rounded-xl flex flex-col gap-4 p-4 lg:p-8">
            <h1 className="text-center text-blue pb-8 border-b border-slate-100 !font-normal">
              CONTRA
            </h1>
            <div className="flex gap-4 items-center">
              <X className="shrink-0 text-red-500" size={32} />
              <span className="lg:text-lg text-blue">
                Die typische Layer-Struktur führt zu einer weniger glatten
                Oberfläche.
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <X className="shrink-0 text-red-500" size={32} />
              <span className="lg:text-lg text-blue">
                Feine Details sind schwieriger darzustellen als bei anderen
                Verfahren.
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <X className="shrink-0 text-red-500" size={32} />
              <span className="lg:text-lg text-blue">
                Teile sind oft weniger stabil, besonders entlang der
                Schichtrichtung.
              </span>
            </div>
            <p className="text-blue mt-auto">
              Sichtbare Schichtlinien, eine geringere Detailgenauigkeit und
              möglicherweise schlechtere Materialeigenschaften.
            </p>
          </div>
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
                Eine größere Düse macht ein Bauteil nicht automatisch stabiler.
                Sie ermöglicht jedoch breitere Druckbahnen und kräftigere
                Wandstrukturen, was besonders bei großen und funktionalen
                Bauteilen von Vorteil sein kann.
              </p>
              <p>
                Entscheidend für die Stabilität ist das Zusammenspiel aus
                Düsengröße, Wandstärke, Fülldichte, Druckausrichtung und
                Material. Deshalb passe ich diese Parameter individuell an das
                jeweilige Bauteil und seinen Einsatzzweck an – für eine optimale
                Kombination aus Stabilität, Gewicht und Kosten.{" "}
              </p>
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
