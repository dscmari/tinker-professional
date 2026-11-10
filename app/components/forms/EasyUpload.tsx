"use client";
import { Inquiry } from "@/app/types";
import { formatSize } from "@/app/utils/formatSize";
import { PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import { Check, FileText, Mail, Ruler, Upload } from "lucide-react";
import { useRef, useState } from "react";
import Dropzone from "./Dropzone";
import submitInquery from "@/actions/submitInquery";

type Props = {
  className?: string
}

export default function EasyUpload({className} : Props) {
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [isAttempted, setIsAttempted] = useState(false);
  const [blob, setBlob] = useState<PutBlobResult[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [inquiry, setSpecification] = useState<Inquiry>({
    name: "",
    mail: "",
    message: "",
    material: "",
    quantity: 1,
  });

  const handleChange = (key: keyof Inquiry, value: string) => {
    setSpecification((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form
      className={`flex flex-col gap-4 lg:gap-8 max-w-4xl ${className}`}
      onSubmit={async (event) => {
        event.preventDefault();
        // Honeypot check — wenn ausgefüllt, ist es ein Bot
        if (honeypotRef.current?.value) {
          return;
        }

        const blobs = await Promise.all(
          files.map((file) =>
            upload(file.name, file, {
              access: "private",
              handleUploadUrl: "/api",
            }),
          ),
        );
        const blobUrls = await blobs.map((b) => b.url);
        await submitInquery(inquiry, files, blobUrls);

        setBlob(blobs);
      }}
    >
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />


      <div>
              <div className="flex items-center gap-4">
        <Ruler className="shrink-0 text-blue text-blue" />
        <label
          className={`text-blue ${isAttempted && true ? "text-red-500" : "text-blue"}`}
        >
          Name<span>*</span>
        </label>
      </div>
        <input
          type="text"
          value={inquiry.name || ""}
          className="mt-2 w-full h-10 relative flex items-center gap-8 py-2 px-4 rounded bg-slate-300 transition-all cursor-pointer"
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>

      <div className="">
        <div className="flex items-center gap-4">
          <Mail className="shrink-0 text-blue text-blue" />
          <label className={`text-blue`}>
            Mail<span>*</span>
            {isAttempted && true ? (
              <span className="ml-4">
                Bitte eine gültige Email-Adresse angeben. Z.b. max@musterfrau.de
              </span>
            ) : (
              ""
            )}
          </label>
        </div>
        <div>
          <input
            type="email"
            value={inquiry.mail || ""}
            className="mt-2 w-full h-10 relative flex items-center gap-8 py-2 px-4 rounded-xl bg-slate-300 transition-all cursor-pointer"
            onChange={(e) => handleChange("mail", e.target.value)}
          />
        </div>
      </div>
      {/* Verwendungszweck */}
      <div>
        <div className="flex items-center gap-4">
          <FileText className="shrink-0 text-blue" />
          <label className="text-blue">
            Verwendungszweck
          </label>
        </div>
        <textarea
          rows={3} // Startgröße: 3 Zeilen hoch
          placeholder="Beschreibe kurz dein Projekt (z.B. mechanische Belastung, Hitzeeinwirkung, Einsatzort)..."
          className="text-sm md:text-md mt-4 w-full bg-slate-300 rounded-xl p-2 text-blue outline-none transition-all"
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </div>
      {/* File Drop */}
      <div className="">
        <div className="flex items-center gap-4">
          <Upload className="shrink-0 text-blue" />
          <label className="text-blue">
            Datei(en) hochladen<span>*</span>
          </label>
        </div>
        <div className="mt-2 bg-slate-300 rounded">
          <Dropzone
           className="bg-slate-300 rounded"
            onFilesChange={(newFiles) =>
              setFiles((prev) => [...prev, ...newFiles])
            }
          />
        </div>
        <aside className="mt-4 flex items-start gap-4 ">
          <span className="text-blue text-sm md:text-md">Datei:</span>
          <ul className="text-green-600 tracking-widest">
            {files.map((e, index) => (
              <li key={index}>
                {e.name} - {formatSize(e.size)}
              </li>
            ))}
          </ul>
        </aside>
      </div>
                  <button
              type="submit"
      
              className=" cursor-pointer font-semibold px-4 py-2 rounded bg-blue text-white"
            >
              ANFRAGE ABSCHICKEN
            </button>
    </form>
  );
}
