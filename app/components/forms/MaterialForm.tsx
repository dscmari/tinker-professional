"use client";

import { useEffect, useState, useRef, SetStateAction } from "react";
import Material from "./Material";
import { Specification } from "@/app/types";
import Heights from "./Heights";
import Filling from "./Filling";
import AmountANDWall from "./AmountANDWall";
import FormOverview from "./FormOverview";
import {
  heights,
  materials,
  pattern,
  nozzles,
} from "@/app/data/MaterialSpecificationData";
import { Check, MoveLeft, MoveRight } from "lucide-react";
import submitPrint from "@/actions/submitPrint";
import { usePathname } from "next/navigation";
import ContactInfo from "./ContactInfo";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import ThankYou from "./ThankYou";
import Color from "./Color";
import UsageANDUpload from "./UsageANDUpload";

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
    material: "",
    color: "",
    height: "0.20mm Standard @BBL H2S",

    density: 20,
    pattern: "",
    quantity: 1,
    wall: 2,
    nozzle: "0,4 Millimeter",
    explaination: "",
    name: "",
    mail: "",
  });

  const handleChange = (key: keyof Specification, value: string) => {
    setSpecification((prev) => ({ ...prev, [key]: value }));
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [isAttempted, setIsAttempted] = useState(false);

  const isStepValid = (step: number): boolean => {
    if (step === 0) return !!specification.material;
    if (step === 1) return !!specification.color;
    if (step === 3) return !!specification.pattern;
    if (step === 4) return specification.quantity > 0 && specification.wall > 0;
    if (step === 5) return selectedFiles.length > 0;
    if (step === 6) {
      return (
        !!specification.mail &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(specification.mail)
      );
    }
    return true;
  };
  const STEPS = [
    <Material
      materials={materials}
      specification={specification}
      handleChange={handleChange}
      isAttempted={isAttempted}
      hasValidMaterial={!!specification.material}
    />,
    <Color
      specification={specification}
      handleChange={handleChange}
      isAttempted={isAttempted}
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
      nozzles={nozzles}
      isAttempted={isAttempted}
      hasValidQuantity={specification.quantity > 0}
      hasValidWall={specification.wall > 0}
    />,
    <UsageANDUpload
      handleChange={handleChange}
      setFiles={setSelectedFiles}
      files={selectedFiles}
    />,
    <ContactInfo
      handleChange={handleChange}
      specification={specification}
      isAttempted={isAttempted}
      hasValidName={!!specification.name}
      hasValidMail={
        !!specification.mail &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(specification.mail)
      }
    />,

    <FormOverview
      specification={specification}
      honeypotRef={honeypotRef}
      inputFileRef={inputFileRef}
      selectedFiles={selectedFiles}
      onFilesChange={setSelectedFiles}
      isAttempted={isAttempted}
      hasValidFiles={selectedFiles.length > 0}
    />,
    <ThankYou specification={specification} />,
  ];

  useEffect(() => {
    // console.log("Materials selected");
    console.log(specification);
    // console.log(selectedFiles);
    console.log(currentStep);
  }, [specification, selectedFiles, currentStep]);

  return (
    <form
      className={`flex flex-col justify-between bg-white border-y md:border border-slate-300 md:rounded-xl p-4 py-16 lg:p-16 ${className}`}
      onSubmit={async (event) => {
        event.preventDefault();
        console.log("submit triggered at step:", currentStep);
        // Honeypot check — wenn ausgefüllt, ist es ein Bot
        if (honeypotRef.current?.value) {
          return;
        }

        if (selectedFiles.length === 0) {
          return;
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
      <div
        className={`${currentStep === 8 ? "h-full flex flex-col items-center justify-center" : ""}`}
      >
        {/* Header */}
        <div id="form-start" className="scroll-mt-12">
          <h2
            className={`!text-lg lg:!text-2xl  ${currentStep === 8 ? "" : " text-left underline underline-offset-4 "}`}
          >
            {currentStep === 8
              ? "Druckauftrag erfolgreich hochgeladen!"
              : "Druck-Spezifikationen angeben & Datei hochladen"}
          </h2>
        </div>

        {/* Inhalte */}
        <div
          key={currentStep}
          className={`mt-8 ${currentStep === 7 ? "" : "max-w-3xl"} ${currentStep === 0 || isAttempted ? "" : "slide-in"} ${isAttempted && !isStepValid(currentStep) ? "shake" : ""}`}
        >
          {STEPS[currentStep]}
        </div>
      </div>

      <div className={`${currentStep === 8 ? "hidden" : "relative"}`}>
        {/* Leiste */}
        {/* <div className="hidden lg:flex items-center justify-center pb-4">
          {STEPS.slice(0, -1).map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-default transition-colors duration-500
    ${index === currentStep ? "bg-blue text-white" : "bg-slate-200 text-blue"}`}
                // onClick={() => setCurrentStep(index)}
              >
                {index + 1}
              </div>
              {index < STEPS.length - 2 && (
                <div className="relative h-1 w-24 bg-slate-200">
                  <div
                    className="absolute top-0 left-0 h-1 bg-blue transition-all duration-300"
                    style={{ width: index < currentStep ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div> */}

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
          {currentStep === 7 ? (
            <button
              type="submit"
              onClick={() => {
                if (!isStepValid(currentStep)) {
                  setIsAttempted(true);
                  return;
                }
                setIsAttempted(false);
                setTimeout(() => {
                  setCurrentStep((prev) =>
                    Math.min(prev + 1, STEPS.length - 1),
                  );
                }, 10);
              }}
              className="flex items-center gap-4 mt-8 cursor-pointer text-white bg-green-500  font-semibold px-4 py-2 rounded-xl h-8"
            >
              <span>Senden</span> <Check className="shrink-0" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("form-start")
                  ?.scrollIntoView({ behavior: "smooth" });
                if (!isStepValid(currentStep)) {
                  setIsAttempted(true);
                  return;
                }
                setIsAttempted(false);
                setTimeout(() => {
                  setCurrentStep((prev) =>
                    Math.min(prev + 1, STEPS.length - 1),
                  );
                }, 10);
              }}
              className="mt-8 p-4"
            >
              <MoveRight
                className={`shrink-0 ${true ? "text-blue" : "text-blue/50"}`}
                size={32}
              />
            </button>
          )}
        </div>
        {/* tablet & desktop */}
        <div className="flex items-center justify-between">
          <div className={`${currentStep === 8 ? "hidden" : "relative"}`}>
            <div className="flex items-center justify-center">
              <div className="text-sm font-semibold text-blue">
                <span className="">{currentStep + 1}</span>{" "}
                / <span className="">{STEPS.length - 1}</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 justify-end">
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            className="flex items-center gap-4 cursor-pointer text-white bg-[#2e86de]/50 font-semibold px-4 py-2 rounded-xl h-10"
          >
            <span>ZURÜCK</span>
          </button>
          {currentStep === 7 ? (
            <button
              type="submit"
              onClick={() => {
                if (!isStepValid(currentStep)) {
                  setIsAttempted(true);
                  return;
                }
                setIsAttempted(false);
                setTimeout(() => {
                  setCurrentStep((prev) =>
                    Math.min(prev + 1, STEPS.length - 1),
                  );
                }, 10);
              }}
              className="flex items-center gap-4 cursor-pointer text-white bg-green-500  font-semibold px-4 py-2 rounded-xl h-10"
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
                setTimeout(() => {
                  setCurrentStep((prev) =>
                    Math.min(prev + 1, STEPS.length - 1),
                  );
                }, 10);
              }}
              className={`flex items-center gap-2 cursor-pointer text-white  font-semibold px-4 py-2 rounded-xl h-10 border ${isStepValid(currentStep) ? "bg-[#2e86de]/90" : "bg-[#2e86de]/50"}`}
            >
              <span>WEITER</span> <MoveRight className="shrink-0" size={16} />
            </button>
          )}
        </div>
        </div>
        
      </div>
    </form>
  );
}
