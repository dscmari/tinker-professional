import Link from "next/link";
import { Specification, MaterialType } from "@/app/types";
import { Layers, PaintbrushVertical } from "lucide-react";

type Props = {
  materials: MaterialType[];
  specification: Specification;
  handleChange: (key: keyof Specification, value: string | MaterialType) => void;
};

export default function Material({
  materials,
  specification,
  handleChange,
}: Props) {
        const availableColors = specification.material.colors;
  return (
    <div>
      <div className="flex items-center gap-2">
        <Layers className="shrink-0 text-blue" />
        <label className="text-blue">
          Material<span>*</span>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {materials.map((mat, index) => {
          const isSelected = specification.material.name === mat.name;
  
          return (
            <div key={index}>
              <label
                className={`h-10  border border-2 relative flex items-center gap-8 py-2 px-4 rounded-xl transition-all cursor-pointer
                ${isSelected ? "border-blue bg-blue" : "bg-white border-blue hover:bg-slate-200"}`}
              >
                <input
                  type="radio"
                  name="material"
                  value={mat.name}
                  className="sr-only"
                  onChange={(e) => handleChange("material", mat)}
                />

                {/* Material Name */}
                <span
                  className={`font-semibold transition-colors w-full  ${isSelected ? "text-white" : "text-blue"}`}
                >
                  {mat.name}
                </span>

                {/* Indikator-Punkt oben rechts */}
                <div
                  className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-white transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}
                />
              </label>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-blue">
        Tipps zu richtigen Materialwahl findest du{" "}
        <Link href={"/3d-druck-material"} className="underline">
          hier
        </Link>
        .
      </p>
       <fieldset className="mt-8">
        <div className="flex items-center gap-2">
          <PaintbrushVertical className="shrink-0 text-blue" />
          <label className="text-blue">
            Materialfarbe<span>*</span>
          </label>
        </div>
        <div className="flex gap-4 lg:gap-12 flex-wrap mt-8 justify-start">
          {availableColors.map((color, index) => (
            <label
              key={index}
              className="flex flex-col items-center gap-1 cursor-pointer w-16 lg:w-auto"
            >
              <input
                type="radio"
                name="color"
                value={color.name}
                className="sr-only peer"
                onChange={(e) => handleChange("color", e.target.value)}
              />
              <span
                className={`text-blue w-8 h-8 rounded-full transition-transform duration-200 ease-in-out peer-checked:scale-150 ${color.class} `}
              />
              <span className="text-sm mt-2 peer-checked:font-semibold text-blue">
                {color.name}
              </span>
            </label>
          ))}
        </div>
      </fieldset> 
    </div>
  );
}
