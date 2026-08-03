import React from "react";
import PrintNowBtn from "../components/btn/PrintNowBtn";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div
      style={{ backgroundImage: `url(/images/tool_bg_vertikal.jpg)` }}
      className="px-4 sm:px-16 lg:px-32 grid lg:grid-cols-12 gap-12 pt-60"
    >
      <div className="lg:col-span-6 row-span-2">
        <h1 className="lg:!text-5xl/14 !font-extrabold">
          Haben Sie Fragen oder wünschen Sie eine persönliche Beratung?
        </h1>
        <p className="font-semibold 2xl:text-lg lg:mt-12 max-w-3xl text-center lg:text-start">
          Schreiben Sie uns einfach eine Nachricht oder rufen Sie uns direkt an.
          Wir nehmen uns Zeit für Ihr Anliegen und melden uns so schnell wie
          möglich bei Ihnen zurück.
        </p>
      </div>
      <div className="lg:col-span-6 grid grid-cols-2 text-blue">
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
      <div />
      <div className="lg:col-span-6 row-span-2 grid grid-cols-6 font-semibold text-blue">
        <div className="flex flex-col justify-end">
          <Link className="" href={"#"}>
            Youtube
          </Link>
        </div>
      <div className="flex flex-col justify-end">
          <Link className="" href={"#"}>
            Instagram
          </Link>
        </div>
    <div className="flex flex-col justify-end">
          <Link className="" href={"#"}>
            Facebook
          </Link>
        </div>
      </div>
      <div className="lg:col-span-6 row-span-2">
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
      <div />
    </div>
  );
}
