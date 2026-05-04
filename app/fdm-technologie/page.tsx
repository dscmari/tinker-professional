import Image from "next/image";
import Hero from "../components/Hero";
import { Check, Cylinder, Gavel, X } from "lucide-react";
import Navbar from "../components/Navbar";

export default function page() {
  const hero = {
    desktopTitle: "FDM 3D Druck - Fused Deposition Modeling",
    mobileTitle: "FDM-Druck",
    mobileSubtitle: "Fused Deposition Modeling",
    intro:
      "In der modernen additiven Fertigung ist die Entscheidung für eine bestimmte Technologie eine strategische Weichenstellung. Bevor man sich mit den Spezifikationen und Parametern auseinandersetzt, steht eine grundlegende Analyse im Vordergrund: Harmoniert die gewählte Methode mit dem angestrebten Einsatzzweck des Bauteils?",
    imgPath: "/images/tool_5.png",
  };
  const { desktopTitle, mobileTitle, mobileSubtitle, intro, imgPath } = hero;
  return (
    <div>
      <Hero
        desktopTitle={desktopTitle}
        mobileTitle={mobileTitle}
        mobileSubtitle={mobileSubtitle}
        intro={intro}
        imgPath={imgPath}
      />
      <section className="px-4 sm:px-16 lg-px-32 pt-24">
        <div>
          <h3 className="text-center">Fused Deposition Modeling</h3>
          <h1 className="text-center mt-4">Wie funktioniert FDM?</h1>
        </div>
        <div className="flex flex-col lg:gap-16 mt-12 lg:mt-24 max-w-5xl mx-auto">
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
        <p className="mt-24 lg:mt-32 lg:text-lg max-w-3xl mx-auto text-center">
          Für unsere Fertigung setzen wir auf hochwertige Komponenten wie den
          Bambu Lab h3S, die eine gleichbleibend hohe Druckqualität, präzise
          Details und zuverlässige Ergebnisse ermöglichen. Moderne
          FDM-Technologie bietet dabei eine optimale Kombination aus
          <strong> Geschwindigkeit</strong>, <strong> Stabilität</strong> und{" "}
          <strong> Wirtschaftlichkeit</strong>.
        </p>
      </section>
      <section className="px-4 sm:px-16 lg-px-32 pt-24 lg:pt-32 xl:pt-48">
        <div>
          <h3 className="text-center">Fused Deposition Modeling</h3>
          <h1 className="text-center mt-4">Vorteile & Nachteile von FDM</h1>
        </div>
        <div className="flex flex-col gap-24 lg:flex-row lg:gap-0 max-w-5xl mx-auto pt-12 lg:pt-24">
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
    </div>
  );
}
