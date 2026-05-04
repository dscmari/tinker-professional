import Hero from "../components/Hero";
import MaterialCard from "../components/MaterialCard";
import { materialCardsData } from "../data/MaterialCardsData";
import Image from "next/image";

export default function page() {
  const hero = {
    desktopTitle: "Materialien im 3D-Druck – Eigenschaften & Einsatzbereiche",
    mobileTitle: "Materialien im 3D-Druck",
    mobileSubtitle: "Eigenschaften & Einsatzbereiche",
    intro:
      "Die Wahl des richtigen Materials ist entscheidend für die Funktion, Haltbarkeit und Optik eines Bauteils. Wir bieten eine Auswahl bewährter Kunststoffe für unterschiedlichste Anforderungen im FDM 3D-Druck.",
    imgPath: "/images/tool_5.png",
    backgroundImgPath: "/images/tool_bg_horizontal.jpg",
  };
  const {
    desktopTitle,
    mobileTitle,
    mobileSubtitle,
    intro,
    imgPath,
    backgroundImgPath,
  } = hero;

  const className = "placeholder";
  return (
    <div style={{ backgroundImage: `url(/images/tool_bg_vertikal.jpg)` }}>
      <Hero
        desktopTitle={desktopTitle}
        mobileTitle={mobileTitle}
        mobileSubtitle={mobileSubtitle}
        intro={intro}
        imgPath={imgPath}
        backgroundImgPath={backgroundImgPath}
      />
      <section className="px-4 sm:px-16 lg:px-32 lg:pt-32 xl:pt-48">
        <div className="bg-white/50 lg:p-8">
          <h3 className="text-center">FDM 3D-Druck</h3>
          <h1 className="text-center mt-4">Unsere Materialien</h1>
          <div className=" max-w-3xl text-center mx-auto">
            <p className="lg:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              iusto illum animi, debitis delectus dolorum aliquid optio
              temporibus porro? Architecto fugit sint illum facilis ea iusto
              recusandae velit ipsum natus?
            </p>
          </div>
        </div>
        <div className="grid justify-items-center xl:grid-cols-2 gap-8 lg:gap-y-24 mt-12 lg:mt-24 xl:mt-32">
          {materialCardsData.map((card, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "xl:justify-self-end" : "xl:justify-self-start"}`}
            >
              <MaterialCard data={card} />
            </div>
          ))}
        </div>
        <div className="hidden lg:block mt-32">
          <Image
            src={"/images/materials_overview.jpg"}
            alt="Eine Grafik, die eine Übersicht von 3D-Druck Materialien darstellt"
            width={1535}
            height={1024}
            className="mx-auto rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
