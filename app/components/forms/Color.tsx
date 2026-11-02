import { materialsWithColors } from "@/app/data/MaterialSpecificationData";
import { Specification } from "@/app/types";
import { PaintbrushVertical } from "lucide-react";
import React from "react";

type Props = {
  specification: Specification;
  handleChange: (key: keyof Specification, value: string) => void;
  isAttempted: boolean;
  hasValidColor: boolean;
};

export default function Color({
  specification,
  handleChange,
  isAttempted,
  hasValidColor,
}: Props) {
  const choosenMaterial = specification.material;
  //look for spezific material and check what colors are available

  const availableColors =
    materialsWithColors.find((mat) => mat.name === choosenMaterial)?.colors || [];

  return (
    <fieldset className="mt-8">
      <div className="flex items-center gap-2">
        <PaintbrushVertical className="shrink-0 text-blue h-4 md:h-8" />
        <label
          className={`text-blue text-sm md:text-md ${isAttempted && !hasValidColor ? "text-red-500" : "text-blue"}`}
        >
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
  );
}
