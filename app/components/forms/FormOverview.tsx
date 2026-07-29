"use client";

import { Specification } from "@/app/types";
import {
  Drill,
  FileText,
  Gauge,
  Grid3X3,
  Hash,
  Layers,
  Mail,
  PaintbrushVertical,
  Ruler,
  Shield,
  Upload,
} from "lucide-react";

type Props = {
  specification: Specification;
  honeypotRef: any;
  inputFileRef: any;
  selectedFiles: File[];
  onFilesChange: any;
};

export default function FormOverview({
  specification,
  honeypotRef,
  inputFileRef,
  selectedFiles,
  onFilesChange,
}: Props) {
  return (
    <div className="text-blue flex flex-col mt-8 lg:mt-0">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <Layers className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Material<span>*</span>
            </label>
          </div>

          {specification.material ? (
            <span className="text-sm md:text-md font-semibold ml-2">
              {specification.material.name}
            </span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <PaintbrushVertical className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Materialfarbe<span>*</span>
            </label>
          </div>
          {specification.color ? (
            <span className="text-sm md:text-md font-semibold ml-2">
              {specification.color}
            </span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <Ruler className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Schichthöhe<span>*</span>
            </label>
          </div>
          {specification.height ? (
            <span className="text-sm md:text-md font-semibold ml-2">
              {specification.height}
            </span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <Gauge className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Fülldichte<span>*</span>
            </label>
          </div>
          {specification.density ? (
            <span className="text-sm md:text-md font-semibold ml-2">
              {specification.density}
            </span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <Grid3X3 className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Füllmuster<span>*</span>
            </label>
          </div>
          {specification.pattern ? (
            <span className="text-sm md:text-md font-semibold ml-2">
              {specification.pattern}
            </span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <Hash className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Stückzahl<span>*</span>
            </label>
          </div>
          {specification.quantity ? (
            <span className="text-sm md:text-md font-semibold ml-2">
              {specification.quantity}
            </span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <Shield className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Wandstärke<span>*</span>
            </label>
          </div>
          {specification.wall ? (
            <span className="text-sm md:text-md font-semibold ml-2">
              {specification.wall}
            </span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <Drill className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Düsendurchmesser
            </label>
          </div>
          <span className="text-sm md:text-md font-semibold ml-2">
            0.4 mm (auf Anfrage 0.2mm möglich)
          </span>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <Mail className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Kontakt<span>*</span>
            </label>
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-md font-semibold ml-2">
              {specification.name}
            </span>
            <span className="text-sm md:text-md font-semibold ml-2">
              {specification.mail}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 lg:col-span-3">
          <div className="flex items-center gap-2">
            <FileText className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Verwendungszweck
            </label>
          </div>
          <span className="text-sm md:text-md">
            {specification.explaination}
          </span>
        </div>
      </div>
      <aside className="mt-4 flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex items-center gap-2">
          <Upload className="shrink-0 text-blue h-4 md:h-8" />
          <label className="text-blue text-sm md:text-md">Datei:</label>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          {selectedFiles.length > 0 ? (
            selectedFiles.map((file: File, index: number) => (
              <p key={index}>
                {file.name.length > 16
                  ? file.name.slice(0, 16) + "..."
                  : file.name}
              </p>
            ))
          ) : (
            <p className="text-sm mx-auto lg:mx-0 !font-normal">
              Keine Dateien ausgewählt
            </p>
          )}
        </div>
        <input
          ref={honeypotRef}
          type="text"
          name="website"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="flex lg:ml-auto">
          <input
            ref={inputFileRef}
            type="file"
            className="hidden"
            accept=".stl,.obj,.3mf,.txt"
            onChange={(e) =>
              onFilesChange((prev: File[]) => [
                ...prev,
                ...Array.from(e.target.files ?? []),
              ])
            }
          />
          <button
            type="button"
            className="mx-auto lg:mx-auto cursor-pointer bg-blue text-white rounded-lg py-1 px-4 hover:shadow-xl"
            onClick={() => inputFileRef.current?.click()}
          >
            Datei auswählen
          </button>
        </div>
      </aside>
    </div>
  );
}
