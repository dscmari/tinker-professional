import Image from "next/image";
import Hero from "./components/Hero";
import MaterialForm from "./components/forms/MaterialForm";

export default function Home() {
   const hero = {
    desktopTitle: "Professioneller 3D Druck - für Industrie & Tüftler",
    mobileTitle: "Professioneller 3D Druck",
    mobileSubtitle:
      "- für Industrie & Tüftler",
    intro:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque incidunt laboriosam tempora itaque provident veniam, soluta assumenda dicta facilis pariatur.",
    imgPath: "/images/printer_graphic.webp",
  };
  const { desktopTitle, mobileTitle, mobileSubtitle, intro, imgPath } = hero;
  return (
    <div>
      <Hero desktopTitle={desktopTitle} mobileTitle={mobileTitle} mobileSubtitle={mobileSubtitle} intro={intro} imgPath={imgPath} />
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="relative p-16 flex-1 flex flex-col justify-center item-center">
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
            <h2 className="text-center mt-12">
              Jetzt Drucken
            </h2>
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
        </div>
        <div className="flex-1 bg-black py-24 px-4 sm:px-16 flex flex-col justify-center item-center text-white">
          <h1 className="text-center !text-white">ABC.abc Datei hochladen</h1>
          <MaterialForm/>
        </div>
      </div>
    </div>
  );
}
