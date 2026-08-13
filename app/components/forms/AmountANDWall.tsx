import { Specification } from "@/app/types";
import { Drill, Frame, Hash, Shield } from "lucide-react";

type Props = {
  handleChange: (key: keyof Specification, value: string) => void;
  specification: Specification;
  nozzles: string[]
  isAttempted: boolean;
  hasValidQuantity: boolean;
  hasValidWall: boolean;
};

export default function AmountANDWall({
  handleChange,
  specification,
  nozzles,
  isAttempted,
  hasValidQuantity,
  hasValidWall,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-12">
      {/* Stückzahl */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Hash className="shrink-0 text-blue h-4 md:h-8" />
          <label
            className={`text-blue text-sm md:text-md ${isAttempted && !hasValidQuantity ? "text-red-500" : "text-blue"}`}
          >
            Stückzahl<span>*</span>
          </label>
        </div>
        <div>
          <input
            type="number"
            min="1"
            placeholder=""
            value={specification.quantity || ""}
            className="h-10 w-full bg-white border border-slate-300 rounded-xl p-2 text-blue outline-none transition-all"
            onChange={(e) => handleChange("quantity", e.target.value)}
          />
        </div>
      </div>

      {/* Wandstärke */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Shield className="shrink-0 text-blue h-4 md:h-8" />
          <label
            className={`text-blue text-sm md:text-md ${isAttempted && !hasValidWall ? "text-red-500" : "text-blue"}`}
          >
            Wandstärke<span>*</span>
          </label>
        </div>
        <div>
          <input
            type="number"
            value={specification.wall}
            className="h-10 w-full bg-white border border-slate-300 rounded-xl p-2 text-blue outline-none transition-all"
            onChange={(e) => handleChange("wall", e.target.value)}
          />
        </div>
      </div>
      {/* Düsendurchmesser */}
      <div className="mt-4 sm:col-span-2">
        <div className="flex items-center gap-2">
          <Drill className="shrink-0 text-blue h-4 md:h-8" />
          <label className="text-blue text-sm md:text-md">
            Düsendurchmesser<span>*</span>
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {nozzles.map((e, index) => {
            const isSelected = specification.nozzle === e;
            return (
              <label
                key={index}
                className={`h-10 bg-blue relative flex items-center gap-8 py-2 px-4 rounded-xl border transition-all cursor-pointer
                 ${isSelected ? "border-blue bg-blue" : "bg-white border-slate-300 hover:bg-slate-200"}`}
              >
                <input
                  type="radio"
                  name="height"
                  value={e}
                  className="sr-only"
                  onChange={(e) => handleChange("nozzle", e.target.value)}
                />
                <span
                  className={`text-sm md:text-lg font-semibold transition-colors w-full  ${isSelected ? "text-white" : "text-blue"}`}
                >
                  {e}
                </span>

                {/* Indikator-Punkt oben rechts */}
                <div
                  className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-white transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
