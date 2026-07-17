import { Specification } from "@/app/types";
import { Gauge, Grid3X3 } from "lucide-react";

type Props = {
  pattern: string[];
  specification: Specification;
  handleChange: (key: keyof Specification, value: string) => void;
};

export default function Filling({
  pattern,
  specification,
  handleChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 mt-4 lg:mt-0">
      {/* Label & Wert-Anzeige */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Gauge className="shrink-0 text-blue h-4 md:h-8" />
          <label className="text-blue text-sm md:text-md">
            Fülldichte<span>*</span>
          </label>
        </div>
        <span className="font-semibold text-blue">{specification.density}%</span>
      </div>

      {/* Der Slider-Balken */}
      <div className="relative flex items-center group">
        <input
          type="range"
          min="10"
          max="80"
          step="1"
          value={specification.density}
          onChange={(e) => handleChange("density", e.target.value)}
          className="w-full h-1 md:h-2 bg-blue rounded-lg appearance-none cursor-pointer 
                         accent-blue-500 hover:bg-blue-500/50 transition-all
                         [&::-webkit-slider-thumb]:appearance-none 
                         [&::-webkit-slider-thumb]:w-4 
                         [&::-webkit-slider-thumb]:h-4 
                         [&::-webkit-slider-thumb]:rounded-full 
                         [&::-webkit-slider-thumb]:bg-white
                         [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        />
      </div>
      <div className="flex justify-between text-sm text-blue">
        <div className="flex flex-col lg:flex-row lg:gap-2">
          <span>5 %</span>
          <span>(Leicht)</span>
        </div>
        <span>45%</span>
        <div className="flex flex-col lg:flex-row lg:gap-2">
          <span>80 %</span>
          <span>(Massiv)</span>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <Grid3X3 className="shrink-0 text-blue h-4 md:h-8" />
          <label className="text-blue text-sm md:text-md">
            Füllmuster<span>*</span>
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {pattern.map((e, index) => {
            const isSelected = specification.pattern === e;
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
                  onChange={(e) => handleChange("pattern", e.target.value)}
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
