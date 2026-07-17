import { Specification } from "@/app/types";
import { Drill, Frame, Hash, Shield } from "lucide-react";

type Props = {
  handleChange: (key: keyof Specification, value: string) => void;
};

export default function AmountANDWall({ handleChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
      {/* Stückzahl */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Hash className="shrink-0 text-blue h-4 md:h-8" />
          <label className="text-blue text-sm md:text-md">
            Stückzahl<span>*</span>
          </label>
        </div>
        <div>
          <input
            type="number"
            min="1"
            placeholder=""
            className="h-10 w-full bg-white border border-slate-300 rounded-xl p-2 text-blue outline-none transition-all"
            onChange={(e) => handleChange("quantity", e.target.value)}
          />
        </div>
      </div>

      {/* Wandstärke */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Shield className="shrink-0 text-blue h-4 md:h-8" />
     <label className="text-blue text-sm md:text-md">
            Wandstärke<span>*</span>
          </label>
        </div>
        <div>
          <input
            type="number"
            placeholder=""
            className="h-10 w-full bg-white border border-slate-300 rounded-xl p-2 text-blue outline-none transition-all"
            onChange={(e) => handleChange("wall", e.target.value)}
          />
        </div>
      </div>
      {/* Düsendurchmesser */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <Drill className="shrink-0 text-blue h-4 md:h-8" />
                   <label className="text-blue text-sm md:text-md">
            Düsendurchmesser<span>*</span>
          </label>
        </div>
        <p className="text-blue mt-2 font-semibold">
          0.4 mm (auf Anfrage 0.2mm möglich)
        </p>
      </div>
    </div>
  );
}
