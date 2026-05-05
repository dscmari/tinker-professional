import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 lg:mt-0">
      <div className="p-8 lg:p-16 bg-blue text-white grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="flex flex-col items-center lg:items-start gap-2 order-2 lg:order-1">
          <div className="flex flex-col mb-4">
            <span>Luca Krösche</span>
            <span>www.tinkerprofessional.de</span>
          </div>
          <span>+49 1234 1234 1234</span>
          <span>tinker@tinker.de</span>
          <span>strasse 123</span>
          <span>82538 Geretsried</span>
        </div>
        <div className="flex flex-col gap-8 order-3 mb-12 lg:mb-0 lg:order-2">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <span>FDM Technologie</span>
            <span>Material</span>
            <span>Referenzen</span>
            <span>Über Mich</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Link href={"/agb/"} className="underline">
              Allgemeine Geschäftsbedingungen
            </Link>
            <Link href={"/datenschutz/"} className="underline">
              Datenschutzerklärung
            </Link>
            <Link href={"/impressum/"} className="underline">
              Impressum
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-3 mt-12 lg:mt-0 ">
          <h1 className="!text-white">
            Professioneller 3D Druck - für Industrie & Tüftler
          </h1>
          <p className="mb-2 !text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            incidunt laboriosam tempora itaque provident veniam, soluta
            assumenda dicta facilis pariatur.
          </p>
        </div>
      </div>
      <div className="bg-blue border-t border-gray-800 px-8 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 Luca Krösche</span>
        <span>
          Design & Entwicklung von{" "}
          <a
            href="https://namaste-websites.de"
            className="hover:text-white transition-colors underline"
          >
            Marian Nökel
          </a>
        </span>
      </div>
    </footer>
  );
}
