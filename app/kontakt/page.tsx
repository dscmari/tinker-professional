import React from "react";
import PrintNowBtn from "../components/btn/PrintNowBtn";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div
      style={{ backgroundImage: `url(/images/tool_bg_vertikal.jpg)` }}
      className="px-4 sm:px-16 lg:px-32 grid lg:grid-cols-12 gap-12 pt-12 md:pt-24 lg:pt-60"
    >
      <div className="lg:col-span-6">
        <h1 className="xl:!text-5xl/14 !font-extrabold">
          Haben Sie Fragen oder wünschen Sie eine persönliche Beratung?
        </h1>
        <p className="font-semibold 2xl:text-lg lg:mt-12 max-w-3xl text-start">
          Schreiben Sie uns einfach eine Nachricht oder rufen Sie uns direkt an.
          Wir nehmen uns Zeit für Ihr Anliegen und melden uns so schnell wie
          möglich bei Ihnen zurück.
        </p>
      </div>
      <div className="text-center md:text-start lg:col-span-6 grid justify-items-center lg:justify-items-start grid-cols-1 md:grid-cols-3 lg:grid-cols-2 text-blue gap-4 md:gap-0">
        <div className="flex flex-col gap-2">
          <span>Telefonnummer</span>
          <span className="font-semibold">+49 123456982</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Email</span>
          <span className="font-semibold">123456982</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Adresse</span>
          <div className="flex flex-col font-semibold">
            <span>Luca Krösche</span>
            <span>Strasse 123</span>
            <span>82538 Geretsried</span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 row-span-2 grid justify-items-center lg:justify-items-start gap-2 md:gap-0 md:grid-cols-3 lg:grid-cols-6 font-semibold text-blue underline lg:no-underline">
        <div className="flex flex-col justify-end lg:col-span-2 ">
          <Link className="" href={"#"}>
            Youtube
          </Link>
        </div>
        <div className="flex flex-col justify-end lg:col-span-2">
          <Link className="" href={"#"}>
            Instagram
          </Link>
        </div>
        <div className="flex flex-col justify-end lg:col-span-2">
          <Link className="" href={"#"}>
            Facebook
          </Link>
        </div>
      </div>
      <div className="lg:col-span-6 row-span-2 justify-items-center lg:justify-items-start">
        <div className="relative aspect-[21/9] w-full max-w-[600px] overflow-hidden">
          <Image
            src="/images/materials_overview.jpg"
            alt=""
            fill // Nutzt die volle Größe des Containers
            className="object-cover object-center" // Füllt den Raum, zentriert das Motiv (kann auf object-bottom geändert werden, falls nötig)
            sizes="(max-width: 1024px) 100vw, 600px" // Optimierung für das Laden des Bildes
          />
        </div>
      </div>
    </div>
  );
}
