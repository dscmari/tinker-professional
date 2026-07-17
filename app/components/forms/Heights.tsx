import { Specification } from "@/app/types";
import { Ruler } from "lucide-react";
import Link from "next/link";

type Props = {
  heights: string[];
  specification: Specification;
  handleChange: (key: keyof Specification, value: string) => void;
};

export default function Heights({
  heights,
  specification,
  handleChange,
}: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mt-4 lg:mt-0">
        <Ruler className="shrink-0 text-blue text-blue h-4 md:h-8" />
        <label className="text-blue text-sm md:text-md">
          Schichthöhe<span>*</span>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {heights.map((e, index) => {
          const isSelected = specification.height === e;
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
                onChange={(e) => handleChange("height", e.target.value)}
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
        <p className="text-sm text-blue">
          Tipps zu richtigen Schichthöhe findest du{" "}
          <Link href={"/3d-druck-material"} className="underline">
            hier
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
