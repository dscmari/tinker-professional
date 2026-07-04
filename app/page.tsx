import Image from "next/image";
import Hero from "./components/Hero";
import MaterialForm from "./components/forms/MaterialForm";

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
      <section id="print-now" className="lg:scroll-mt-40 mx-4 sm:mx-16 lg:mx-32 mt-24 flex flex-col gap-8 lg:gap-16">
        <div className="mx-auto">
          <div className="max-w-4xl">
        <h1>
            Druck-Spezifikationen festlegen, Datei hochladen und individuelles
            Angebot erhalten
          </h1>
          <p>
            Laden Sie Ihre STL-, STEP- oder 3MF-Datei hoch und wählen Sie die
            gewünschten Druckeinstellungen aus. Ich prüfe Ihr Projekt persönlich
            und erstelle Ihnen ein individuelles Angebot inklusive
            Materialempfehlung und technischer Beratung.
          </p>
          </div>
  
           <MaterialForm className="lg:h-[600px] mx-auto lg:mx-0  max-w-4xl  mt-12" />
        </div>

        <div>
         
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32 xl:pt-48">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam nulla
          veniam exercitationem eveniet iusto et dolore, a ipsam. Quam nulla
          autem officiis odio doloremque a perferendis accusamus quas vel sint.
        </p>
      </section>
    </div>
  );
}
