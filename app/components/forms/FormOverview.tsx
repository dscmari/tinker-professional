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
    <div className="text-blue flex flex-col gap-4">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Layers className="shrink-0 text-blue" />
            <label className="text-blue">
              Material<span>*</span>
            </label>
          </div>

          {specification.material ? (
            <span className="font-semibold">{specification.material}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <PaintbrushVertical className="shrink-0 text-blue" />
            <label className="text-blue">
              Materialfarbe<span>*</span>
            </label>
          </div>
          {specification.color ? (
            <span className="font-semibold">{specification.color}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Ruler className="shrink-0 text-blue" />
            <label className="text-blue">
              Schichthöhe<span>*</span>
            </label>
          </div>
          {specification.height ? (
            <span className="font-semibold">{specification.height}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Gauge className="shrink-0 text-blue" />
            <label className="text-blue">
              Fülldichte<span>*</span>
            </label>
          </div>
          {specification.density ? (
            <span className="font-semibold">{specification.density}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Grid3X3 className="shrink-0 text-blue" />
            <label className="text-blue">
              Füllmuster<span>*</span>
            </label>
          </div>
          {specification.pattern ? (
            <span className="font-semibold">{specification.pattern}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Hash className="shrink-0 text-blue" />
            <label className="text-blue">
              Stückzahl<span>*</span>
            </label>
          </div>
          {specification.quantity ? (
            <span className="font-semibold">{specification.quantity}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Shield className="shrink-0 text-blue" />
            <label className="text-blue">
              Wandstärke<span>*</span>
            </label>
          </div>
          {specification.wall ? (
            <span className="font-semibold">{specification.wall}</span>
          ) : (
            <span className="text-lg text-red-500"> - </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Drill className="shrink-0 text-blue" />
            <label className="text-blue">Düsendurchmesser</label>
          </div>
          <span className="font-semibold">
            0.4 mm (auf Anfrage 0.2mm möglich)
          </span>
        </div>
        <div className="flex flex-col gap-2 lg:col-span-3">
          <div className="flex items-center gap-2">
            <FileText className="shrink-0 text-blue" />
            <label className="text-blue">Verwendungszweck</label>
          </div>
          <span className="font-semibold">{specification.explaination}</span>
        </div>
      </div>
      <aside className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Upload className="shrink-0 text-blue" />
          <label className="text-blue">
            Datei(en) hochladen<span>*</span>
          </label>
        </div>
        <ul className="text-blue font-semibold">
          {files.map((e, index) => (
            <li key={index} className="text">
              {e.name} - {formatSize(e.size)}
            </li>
          ))}
        </ul>
      </aside>

      <button
        type="submit"
        className="mx-auto text-white lg:h-10 mt-8 tracking-wide bg-blue px-4 py-2 font-semibold rounded-xl hover:shadow-xl cursor-pointer"
      >
        Spezifikationen & Datei abschicken
      </button>
    </div>
  );
}
