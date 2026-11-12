import { SlidersHorizontal, UploadCloud, FileCheck2 } from "lucide-react";
import React from "react";
import MaterialForm from "../components/forms/MaterialForm";
import EasyUpload from "../components/forms/EasyUpload";

export default function page() {
  return (
    <div>
      <section className="mx-4 sm:mx-16 lg:mx-32 pt-12 md:pt-24 lg:pt-60">
        <div className="lg:mx-auto">
          <div className="max-w-4xl">
            <h1 className="lg:!text-5xl/14 !font-extrabold !tracking-tight text-center xl:text-start">
              3D Skizze hochladen
            </h1>
            <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus et aut magnam. Enim vel sint, quia harum officiis asperiores explicabo, blanditiis placeat, tenetur libero magnam suscipit eligendi ea optio!
            </p>
            <div className="hidden md:flex flex-col lg:flex-row gap-8 ml-4 mt-8 text-blue">
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
        </div>

      </section>
      <section className="px-4 md:px-16 lg:px-32 pt-12 md:pt-16 lg:pt-32">
                <h1 className="text-center">Anfrage</h1>
        <p className="text-center max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit
          officia odit magni co.
        </p>
        <EasyUpload className="mt-8 mx-auto" />
      </section>
    </div>
  );
}
