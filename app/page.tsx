import Image from "next/image";
import Hero from "./components/Hero";
import MaterialForm from "./components/forms/MaterialForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="min-h-screen flex">
        <div className="relative p-16 flex-1 flex flex-col justify-center item-center">
          <div className="absolute top-1/8 left-1/6">
            <Image
              src="/images/gear.png"
              alt="Illustration eines Zahnrades"
              width={200}
              height={200}
              className="w-24"
              loading="eager"
            />
          </div>
          <div className="absolute  top-1/5 right-1/6">
            <Image
              src="/images/tool_2.webp"
              alt="Illustration eines Zahnrades"
              width={200}
              height={200}
              className="w-32"
              loading="eager"
            />
          </div>
          <div className="absolute  bottom-10 left-1/6">
            <Image
              src="/images/tool_3.webp"
              alt="Illustration eines Zahnrades"
              width={200}
              height={200}
              className="w-48"
              loading="eager"
            />
          </div>
          <div className="absolute  bottom-1/8 right-1/6">
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
              className="w-24 mx-auto"
              loading="eager"
            />
            <h1 id="print-now" className="text-center mt-12">
              Jetzt Drucken
            </h1>
            <h2 className="text-center">
              Schnell und einfach ABC.abc Datei hochladen
            </h2>
            <p className="pb-4 text-lg text-center">
              Laden Sie hier Ihre 3D-Datei (STL/STEP) hoch und wählen Sie Ihre
              Spezifikationen. Ob robuster Industrieteil oder filigraner
              Prototyp – wir fertigen nach Ihren Vorgaben. Sie sind unsicher bei
              der Materialwahl? Bei Bedarf klären wir Ihre Fragen im Rahmen
              eines Beratungsgesprächs.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-black p-16 flex flex-col justify-center item-center text-white">
          <h1 className="text-center">ABC.abc Datei hochladen</h1>
          <MaterialForm/>
        </div>
      </div>
    </div>
  );
}
