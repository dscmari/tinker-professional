"use client";

import { useEffect, useState } from "react";
import Material from "./Material";
import { Specification } from "@/app/types";
import Heights from "./Heights";
import Filling from "./Filling";
import AmountANDWall from "./AmountANDWall";
import UsageANDUpload from "./UsageANDUpload";
import FormOverview from "./FormOverview";
import {
  colors,
  heights,
  materials,
  pattern,
} from "@/app/data/MaterialSpecificationData";
import { MoveLeft, MoveRight } from "lucide-react";

type Props = {
  className?: string;
};

export default function MaterialForm({ className }: Props) {
  const [specification, setSpecification] = useState<Specification>({
    material: "",
    color: "",
    height: "0.20mm Standard @BBL H2S",
    density: 20,
    pattern: "",
    quantity: 0,
    wall: 0,
    explaination: "",
  });

  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (key: keyof Specification, value: string) => {
    setSpecification((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    console.log("Materials selected");
    console.log(specification);
    console.log(files)
  }, [specification, files]);

  const [currentStep, setCurrentStep] = useState(0);
  const STEPS = [
    <Material
      materials={materials}
      colors={colors}
      specification={specification}
      handleChange={handleChange}
    />,
    <Heights
      heights={heights}
      specification={specification}
      handleChange={handleChange}
    />,
    <Filling
      pattern={pattern}
      specification={specification}
      handleChange={handleChange}
    />,
    <AmountANDWall handleChange={handleChange} />,
    <UsageANDUpload handleChange={handleChange} setFiles={setFiles} files={files}  />,
    <FormOverview specification={specification} files={files} />,
  ];

  return (
    <form
      className={`flex flex-col justify-between bg-white border border-2 border-slate-300 opacity-80 p-8 ${className}`}
      action="#"
    >
      <div>
        {STEPS.map((step, index) => (
          <div key={index}>{index === currentStep && <div>{step}</div>}</div>
        ))}
      </div>

      {/* Leiste */}
      <div className="relative">
        <div className="hidden lg:flex items-center justify-center pb-4">
          {STEPS.map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer
    ${
      index === currentStep ? "bg-blue text-white" : "bg-slate-200 text-blue"
    }`}
                onClick={() => setCurrentStep(index)}
              >
                {index + 1}
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`h-1 w-16 ${index < currentStep ? "bg-blue" : "bg-slate-200"}`}
                />
              )}
            </div>
          ))}
        </div>
        {/* btns */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            className="mt-8 lg:mt-0 lg:absolute bottom-0 left-0 cursor-pointer"
          >
            <MoveLeft className="shrink-0 text-blue" size={24} />
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1))
            }
     className="mt-8 lg:mt-0 lg:absolute bottom-0 right-0 cursor-pointer"
          >
            <MoveRight className="shrink-0 text-blue" size={24} />
          </button>
        </div>
      </div>
    </form>
  );
}
