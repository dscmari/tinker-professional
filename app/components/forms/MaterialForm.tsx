"use client";

import { useEffect, useState, useRef } from "react";
import Material from "./Material";
import { MaterialType, Specification } from "@/app/types";
import Heights from "./Heights";
import Filling from "./Filling";
import AmountANDWall from "./AmountANDWall";
import FormOverview from "./FormOverview";
import {
  heights,
  materials,
  pattern,
} from "@/app/data/MaterialSpecificationData";
import { Check, MoveLeft, MoveRight } from "lucide-react";
import submitPrint from "@/actions/submitPrint";
import { usePathname } from "next/navigation";
import ContactInfo from "./ContactInfo";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";

type Props = {
  className?: string;
};

export default function MaterialForm({ className }: Props) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const pathname = usePathname();
  const [specification, setSpecification] = useState<Specification>({
    material: { name: "", colors: [] },
    height: "0.20mm Standard @BBL H2S",
    color: "",
    density: 20,
    pattern: "",
    quantity: 0,
    wall: 0,
    explaination: "",
    name: "",
    mail: "",
  });

  const handleChange = (
    key: keyof Specification,
    value: string | MaterialType,
  ) => {
    setSpecification((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    console.log("Materials selected");
    console.log(specification);
    console.log(selectedFiles);
  }, [specification, selectedFiles]);

  const [currentStep, setCurrentStep] = useState(0);
  const [isAttempted, setIsAttempted] = useState(false);

  const isStepValid = (step: number): boolean => {
    if (step === 0)
      return !!specification.material.name && !!specification.color;
    else if (step === 2) {
      return !!specification.pattern;
    } else if (step === 3) {
      return specification.quantity > 0 && specification.wall > 0;
    } else if (step === 4) {
      return !!specification.name && !!specification.mail;
    }
    return true;
  };
  const STEPS = [
    <Material
      materials={materials}
      specification={specification}
      handleChange={handleChange}
      isAttempted={isAttempted}
      hasValidMaterial={!!specification.material.name}
      hasValidColor={specification.color !== ""}
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
      isAttempted={isAttempted}
      isStepValid={isStepValid(currentStep)}
    />,
    <AmountANDWall
      handleChange={handleChange}
      specification={specification}
      isAttempted={isAttempted}
      hasValidQuantity={specification.quantity > 0}
      hasValidWall={specification.wall > 0}
    />,
    // <UsageANDUpload
    //   handleChange={handleChange}
    //   setFiles={setFiles}
    //   files={files}
    // />,
    <ContactInfo
      handleChange={handleChange}
      specification={specification}
      isAttempted={isAttempted}
      hasValidName={!!specification.name}
      hasValidMail={!!specification.mail}
    />,
    <FormOverview
      specification={specification}
      honeypotRef={honeypotRef}
      inputFileRef={inputFileRef}
      selectedFiles={selectedFiles}
      onFilesChange={setSelectedFiles}
    />,
  ];

  return (
    <form
      className={`flex flex-col justify-between bg-white border-y md:border border-slate-300 md:rounded-xl p-4 lg:p-16 lg:py-8 ${className}`}
      onSubmit={async (event) => {
        event.preventDefault();

        // Honeypot check — wenn ausgefüllt, ist es ein Bot
        if (honeypotRef.current?.value) {
          return;
        }

        if (!selectedFiles.length) {
          throw new Error("No file selected");
        }

        const files = selectedFiles;

        const blobs = await Promise.all(
          files.map((file) =>
            upload(file.name, file, {
              access: "private",
              handleUploadUrl: "/api",
            }),
          ),
        );
        const blobUrls = await blobs.map((b) => b.url);
        await submitPrint(specification, files, blobUrls);

        setBlob(blobs);
      }}
    >
      <div className="">
        {/* Header */}
        <div id="form-start" className="scroll-mt-12">
          <h2 className="!text-lg lg:!text-2xl text-left underline underline-offset-4">
            Druck-Spezifikationen angeben & Datei hochladen
          </h2>
        </div>

        {/* Inhalte */}
        <div
          key={currentStep}
          className={`${currentStep === 0 || isAttempted ? "" : "slide-in"} ${isAttempted && !isStepValid(currentStep) ? "shake" : ""}`}
        >
          {STEPS[currentStep]}
        </div>
      </div>
      {/* Leiste */}
      <div className="relative">
        <div className="hidden lg:flex items-center justify-center pb-4">
          {STEPS.map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-default transition-colors duration-500
    ${index === currentStep ? "bg-blue text-white" : "bg-slate-200 text-blue"}`}
                // onClick={() => setCurrentStep(index)}
              >
                {index + 1}
              </div>
              {index < STEPS.length - 1 && (
                <div className="relative h-1 w-24 bg-slate-200">
                  <div
                    className="absolute top-0 left-0 h-1 bg-blue transition-all duration-300"
                    style={{ width: index < currentStep ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* btns */}
        {/* mobile */}
        <div className="flex md:hidden items-center gap-4 justify-between lg:justify-end">
          <button
            type="button"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("form-start")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
              setCurrentStep((prev) => Math.max(prev - 1, 0));
            }}
            className="mt-8 p-4"
          >
            <MoveLeft className="shrink-0 text-blue/50" size={32} />
          </button>
          {currentStep === 5 ? (
            <button
              type="submit"
              className="flex items-center gap-4 mt-8 cursor-pointer text-white bg-green-500  font-semibold px-4 py-2 rounded-xl h-8"
            >
              <span>Hochladen</span> <Check className="shrink-0" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (!isStepValid(currentStep)) {
                  setIsAttempted(true);
                  return;
                }
                setIsAttempted(false);
                setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
              }}
              className="mt-8 p-4"
            >
              <MoveRight className={`shrink-0 ${isStepValid(currentStep) ? "text-blue" : "text-blue/50"}`} size={32} />
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
              type="submit"
              className="flex items-center gap-4 mt-8 cursor-pointer text-white bg-green-500  font-semibold px-4 py-2 rounded-xl h-10"
            >
              <span>SPEZIFIKATIONEN & DATEI ABSCHICKEN</span>{" "}
              <Check className="shrink-0" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (!isStepValid(currentStep)) {
                  setIsAttempted(true);
                  return;
                }
                setIsAttempted(false);
                setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
              }}
              className={`flex items-center gap-2 mt-8 cursor-pointer text-white  font-semibold px-4 py-2 rounded-xl h-10 border ${isStepValid(currentStep) ? "bg-[#2e86de]/90" : "bg-[#2e86de]/50"}`}
            >
              <span>WEITER</span> <MoveRight className="shrink-0" size={16} />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
