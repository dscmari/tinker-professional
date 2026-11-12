import { SlidersHorizontal, UploadCloud, FileCheck2 } from 'lucide-react'
import React from 'react'
import MaterialForm from '../components/forms/MaterialForm'

export default function page() {
  return (
    <div>
          <section
        id="print-now"
        className="mx-4 sm:mx-16 lg:mx-32 pt-12 md:pt-24 lg:pt-60 lex flex-col gap-8 lg:gap-16"
      >
        <div className="lg:mx-auto">
          <div className="max-w-4xl">
            <h1 className="lg:!text-5xl/14 !font-extrabold !tracking-tight text-center xl:text-start">
              Jetzt Drucken
            </h1>
            <p>
              Laden Sie Ihre STL-, STEP- oder 3MF-Datei hoch und wählen Sie die
              gewünschten Druckeinstellungen aus. Ich prüfe Ihr Projekt
              persönlich und erstelle Ihnen ein individuelles Angebot inklusive
              Materialempfehlung und technischer Beratung.
            </p>
            <div className="hidden md:flex flex-col lg:flex-row gap-8 ml-4 mt-8 text-blue">
              <div className="flex items-center gap-2">
                {" "}
                <SlidersHorizontal className="text-blue" size={32} />{" "}
                <span className="text-xl font-semibold">
                  Druck-Spezifikationen festlegen
                </span>
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <UploadCloud className="text-blue" size={32} />{" "}
                <span className="text-xl font-semibold">Datei hochladen</span>
              </div>{" "}
              <div className="flex items-center gap-2">
                {" "}
                <FileCheck2 className="text-blue" size={32} />{" "}
                <span className="text-xl font-semibold">Angebot erhalten</span>
              </div>
            </div>
          </div>

          <MaterialForm className="lg:min-h-[700px] 2xl:min-h-[600px] -mx-4 md:mx-auto lg:mx-0 xl:min-w-5xl 2xl:min-w-7xl  mt-12" />
        </div>
      </section>
    </div>
  )
}
