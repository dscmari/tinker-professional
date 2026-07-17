"use client";

import { useEffect, useState } from "react";
import Material from "./Material";
import { MaterialType, Specification } from "@/app/types";
import Heights from "./Heights";
import Filling from "./Filling";
import AmountANDWall from "./AmountANDWall";
import UsageANDUpload from "./UsageANDUpload";
import FormOverview from "./FormOverview";
import {
  heights,
  materials,
  pattern,
} from "@/app/data/MaterialSpecificationData";
import { Check, MoveLeft, MoveRight } from "lucide-react";
import submitPrint from "@/actions/submitPrint";

type Props = {
  className?: string;
};

export default function MaterialForm({ className }: Props) {
  const [specification, setSpecification] = useState<Specification>({
    material: { name: "", colors: [] },
    height: "0.20mm Standard @BBL H2S",
    color: "",
    density: 20,
    pattern: "",
    quantity: 0,
    wall: 0,
    explaination: "",
  });

  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (
    key: keyof Specification,
    value: string | MaterialType,
  ) => {
    setSpecification((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    console.log("Materials selected");
    console.log(specification);
    console.log(files);
  }, [specification, files]);

  const [currentStep, setCurrentStep] = useState(0);
  const STEPS = [
    <Material
      materials={materials}
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
    <UsageANDUpload
      handleChange={handleChange}
      setFiles={setFiles}
      files={files}
    />,
    <FormOverview specification={specification} files={files} />,
  ];

  return (
    <form
      className={`flex flex-col justify-between bg-white border-y md:border border-slate-300 md:rounded-xl p-4 lg:p-16 lg:py-8 ${className}`}
    >
      {/* Header */}
      <div>
        <h2 className="!text-lg lg:!text-2xl text-left underline underline-offset-4">
          Druck-Spezifikationen angeben & Datei hochladen
        </h2>
      </div>

      {/* Inhalte */}
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
    ${index === currentStep ? "bg-blue text-white" : "bg-slate-200 text-blue"}`}
                onClick={() => setCurrentStep(index)}
              >
                {index + 1}
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`h-1 w-24 ${index < currentStep ? "bg-blue" : "bg-slate-200"}`}
                />
              )}
            </div>
          ))}
        </div>
        {/* btns */}
        {/* mobile */}
        <div className="flex items-center gap-4 justify-between lg:justify-end">
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            className="mt-8 p-4"
          >
            <MoveLeft className="shrink-0 text-blue/50" size={32} />
          </button>
          {currentStep === 5 ? (
            <button
              type="button"
              onClick={() => submitPrint(specification, files)}
              className="flex items-center gap-4 mt-8 cursor-pointer text-white bg-green-500  font-semibold px-4 py-2 rounded-xl h-8"
            >
              <span>Hochladen</span>{" "}
              <Check className="shrink-0" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1))
              }
              className="mt-8 p-4"
            >
              <MoveRight className="shrink-0 text-blue" size={32} />
            </button>
          )}
        </div>
        {/* tablet & desktop */}
        <div className="hidden md:flex items-center gap-4 justify-end">
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            className="flex items-center gap-4 mt-8 cursor-pointer text-white bg-[#2e86de]/50 font-semibold px-4 py-2 rounded-xl h-10"
          >
            <span>ZURÜCK</span>
          </button>
          {currentStep === 5 ? (
            <button
              type="button"
              onClick={() => submitPrint(specification, files)}
              className="flex items-center gap-4 mt-8 cursor-pointer text-white bg-green-500  font-semibold px-4 py-2 rounded-xl h-10"
            >
              <span>SPEZIFIKATIONEN & DATEI ABSCHICKEN</span>{" "}
              <Check className="shrink-0" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1))
              }
              className="flex items-center gap-4 mt-8 cursor-pointer text-white bg-[#2e86de]/90  font-semibold px-4 py-2 rounded-xl h-10"
            >
              <span>WEITER</span> <MoveRight className="shrink-0" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
