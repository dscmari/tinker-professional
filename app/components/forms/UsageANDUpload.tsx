import { FileText, Upload } from "lucide-react";
import { formatSize } from "../utils/formatSize";
import Dropzone from "./Dropzone";
import { Specification } from "@/app/types";

type Props = {
  handleChange: (key: keyof Specification, value: string) => void;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  files: File[];
};

export default function UsageANDUpload({
  files,
  setFiles,
  handleChange,
}: Props) {
  return (
    <div>
      {/* Verwendungszweck */}
      <div>
        <div className="flex items-center gap-2">
          <FileText className="shrink-0 text-blue" />
          <label className="text-blue">Verwendungszweck</label>
        </div>
        <textarea
          rows={3} // Startgröße: 3 Zeilen hoch
          placeholder="Beschreibe kurz dein Projekt (z.B. mechanische Belastung, Hitzeeinwirkung, Einsatzort)..."
          className="mt-4 w-full bg-white border border-blue rounded-xl p-2 text-blue outline-none transition-all"
          onChange={(e) => handleChange("explaination", e.target.value)}
        />
      </div>
      {/* File Drop */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <Upload className="shrink-0 text-blue" />
          <label className="text-blue">
            Datei(en) hochladen<span>*</span>
          </label>
        </div>
        <div className="mt-4">
          <Dropzone
            onFilesChange={(newFiles) =>
              setFiles((prev) => [...prev, ...newFiles])
            }
          />
        </div>
        <aside className="mt-4 flex items-start gap-4 ">
          <span className="text-blue">Datei:</span>
          <ul className="text-green-600 tracking-widest">
            {files.map((e, index) => (
              <li key={index}>
                {e.name} - {formatSize(e.size)}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
