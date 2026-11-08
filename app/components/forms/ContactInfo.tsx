import { Specification } from "@/app/types";
import { FileText, Mail, Ruler } from "lucide-react";

type Props = {
  specification: Specification;
  handleChange: (key: keyof Specification, value: string) => void;
  isAttempted: boolean;
  hasValidName: boolean;
  hasValidMail: boolean;
};

export default function ContactInfo({
  specification,
  handleChange,
  isAttempted,
  hasValidName,
  hasValidMail,
}: Props) {
  return (
    <div>
      <div>
        <div className="flex items-center gap-2 mt-4 lg:mt-12">
          <Ruler className="shrink-0 text-blue text-blue h-4 md:h-8" />
          <label
            className={`text-blue text-sm md:text-md ${isAttempted && !hasValidName ? "text-red-500" : "text-blue"}`}
          >
            Name<span>*</span>
          </label>
        </div>
        <div>
          <input
            type="text"
            value={specification.name || ""}
            className="mt-2 w-full h-10 relative flex items-center gap-8 py-2 px-4 rounded-xl border border-slate-300 transition-all cursor-pointer"
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-2 mt-4 lg:mt-0">
          <Mail className="shrink-0 text-blue text-blue h-4 md:h-8" />
          <label
            className={`text-blue text-sm md:text-md ${isAttempted && !hasValidMail ? "text-red-500" : "text-blue"}`}
          >
            Mail<span>*</span>
            {isAttempted && !hasValidMail ? <span className="ml-4">Bitte eine gültige Email-Adresse angeben. Z.b. max@musterfrau.de</span> : ""}
          </label>
        </div>
        <div>
          <input
            type="email"
            value={specification.mail || ""}
            className="mt-2 w-full h-10 relative flex items-center gap-8 py-2 px-4 rounded-xl border border-slate-300 transition-all cursor-pointer"
            onChange={(e) => handleChange("mail", e.target.value)}
          />
        </div>
      </div>
      {/* <div className="mt-8">
        <div className="flex items-center gap-2">
          <FileText className="shrink-0 text-blue h-4 md:h-8" />
          <label className="text-blue text-sm md:text-md">
            Verwendungszweck
          </label>
        </div>
        <textarea
          rows={3} // Startgröße: 3 Zeilen hoch
          placeholder="Beschreibe kurz dein Projekt (z.B. mechanische Belastung, Hitzeeinwirkung, Einsatzort)..."
          className="text-sm md:text-md mt-4 w-full bg-white border border-slate-300 rounded-xl p-2 text-blue outline-none transition-all"
          onChange={(e) => handleChange("explaination", e.target.value)}
        />
      </div> */}
    </div>
  );
}
