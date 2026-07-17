import { Specification } from "@/app/types";
import { formatSize } from "../utils/formatSize";
import {
  Drill,
  FileText,
  Gauge,
  Grid3X3,
  Hash,
  Layers,
  PaintbrushVertical,
  Ruler,
  Shield,
  Upload,
} from "lucide-react";

type Props = {
  specification: Specification;
  files: File[];
};

export default function FormOverview({ specification, files }: Props) {
  return (
    <div className="text-blue flex flex-col mt-8 lg:mt-0">
      <div className="grid lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Layers className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Material<span>*</span>
            </label>
          </div>

          {specification.material ? (
            <span className="text-sm md:text-md font-semibold">{specification.material.name}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <PaintbrushVertical className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Materialfarbe<span>*</span>
            </label>
          </div>
          {specification.color ? (
            <span className="text-sm md:text-md font-semibold">{specification.color}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Ruler className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Schichthöhe<span>*</span>
            </label>
          </div>
          {specification.height ? (
            <span className="text-sm md:text-md font-semibold">{specification.height}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Gauge className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Fülldichte<span>*</span>
            </label>
          </div>
          {specification.density ? (
            <span className="text-sm md:text-md font-semibold">{specification.density}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Grid3X3 className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Füllmuster<span>*</span>
            </label>
          </div>
          {specification.pattern ? (
            <span className="text-sm md:text-md font-semibold">{specification.pattern}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Hash className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Stückzahl<span>*</span>
            </label>
          </div>
          {specification.quantity ? (
            <span className="text-sm md:text-md font-semibold">{specification.quantity}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Shield className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Wandstärke<span>*</span>
            </label>
          </div>
          {specification.wall ? (
            <span className="text-sm md:text-md font-semibold">{specification.wall}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Drill className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Düsendurchmesser
            </label>
          </div>
          <span className="text-sm md:text-md font-semibold">
            0.4 mm (auf Anfrage 0.2mm möglich)
          </span>
        </div>
        <div className="flex flex-col gap-2 lg:col-span-3">
          <div className="flex items-center gap-2">
            <FileText className="shrink-0 text-blue h-4 md:h-8" />
            <label className="text-blue text-sm md:text-md">
              Verwendungszweck
            </label>
          </div>
          <span className="text-sm md:text-md font-semibold">{specification.explaination}</span>
        </div>
      </div>
      <aside className="mt-4 flex items-start gap-4">
        <div className="flex items-center gap-2">
          <Upload className="shrink-0 text-blue h-4 md:h-8" />
          <label className="text-blue text-sm md:text-md">Datei:</label>
        </div>
        <ul className="text-sm md:text-md text-blue font-semibold">
          {files.map((e, index) => (
            <li key={index} className="text">
              {e.name} - {formatSize(e.size)}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
