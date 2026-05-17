import Image from "next/image";
import Hero from "./components/Hero";
import MaterialForm from "./components/forms/MaterialForm";

export default function Home() {
  const hero = {
    title: "Professioneller 3D Druck",
    subtitle: "- für Industrie & Tüftler",
    intro:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque incidunt laboriosam tempora itaque provident veniam, soluta assumenda dicta facilis pariatur.",
    imgPath: "/images/printer_graphic.png",
  };
  const { title, subtitle, intro, imgPath } = hero;
  return (
    <div style={{ backgroundImage: `url(/images/tool_bg_vertikal.jpg)` }}>
      <Hero title={title} subtitle={subtitle} intro={intro} imgPath={imgPath} />
      <section className="mx-4 sm:mx-16 lg:mx-32 mt-24 lg:mt-32">
        {/* <div className="relative p-16 flex-1 flex flex-col justify-center item-center">
          <div className="absolute top-1/8 left-1/6 hidden lg:block">
            <Image
              src="/images/gear.png"
              alt="Illustration eines Zahnrades"
              width={200}
              height={200}
              className="w-24 "
              loading="eager"
            />
          </div>
          <div className="absolute top-1/5 right-1/6 hidden lg:block">
            <Image
              src="/images/tool_2.webp"
              alt="Illustration eines Zahnrades"
              width={200}
              height={200}
              className="w-32"
              loading="eager"
            />
          </div>
          <div className="absolute  bottom-10 left-1/6 hidden lg:block">
            <Image
              src="/images/tool_3.webp"
              alt="Illustration eines Zahnrades"
              width={200}
              height={200}
              className="w-48"
              loading="eager"
            />
          </div>
          <div className="absolute bottom-1/8 right-1/6 hidden lg:block">
            <Image
              src="/images/tool_4.png"
              alt="Illustration eines Zahnrades"
              width={200}
              height={200}
              className="w-24"
              loading="eager"
            />
          </div>
          <div className="z-10 bg-white">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-24 h-auto mx-auto"
              loading="eager"
            />
            <h2 className="text-center mt-12">Jetzt Drucken</h2>
            <h1 className="text-center mt-4">
              Schnell und einfach ABC.abc Datei hochladen
            </h1>
            <p className="pb-4 text-lg text-center">
              Laden Sie hier Ihre 3D-Datei (STL/STEP) hoch und wählen Sie Ihre
              Spezifikationen. Ob robuster Industrieteil oder filigraner
              Prototyp – wir fertigen nach Ihren Vorgaben. Sie sind unsicher bei
              der Materialwahl? Bei Bedarf klären wir Ihre Fragen im Rahmen
              eines Beratungsgesprächs.
            </p>
          </div>
        </div> */}
             <h1 >ABC.abc Datei hochladen</h1>
             <div>
          <MaterialForm />
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
