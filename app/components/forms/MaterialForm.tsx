"use client";

import { useEffect, useState } from "react";
import Dropzone from "./Dropzone";
import Link from "next/link";
import { div } from "motion/react-client";

type Props = {
  className?: string;
};

type Specification = {
  material: string;
  color: string;
  height: string;
  pattern: string;
  density: number;
  quantity: number;
  wall: number;
  explaination: string;
};

export default function MaterialForm({ className }: Props) {
  const [infill, setInfill] = useState(20);
  const materials = ["ABS", "ASA", "PA12-CF", "TPU", "PLA", "PETG"];
  const colors = [
    { name: "Schwarz", class: "bg-black" },
    { name: "Weiss", class: "bg-white border border-gray-300" },
    { name: "Grün", class: "bg-green-500" },
    { name: "Rot", class: "bg-red-500" },
    { name: "Gelb", class: "bg-yellow-400" },
    { name: "Blau", class: "bg-blue-500" },
  ];
  const heights = ["0.12mm High Quality @BBL H2S", "0.16mm Standard @BBL H2S", "0.16mm High Quality @BBL H2S", "0.20mm Standard @BBL H2S", "0.20mm High Quality @BBL H2S", "0.24mm Standard @BBL H2S"];
  const pattern = ["Stabil", "Instabil"]

  const [specification, setSpecification] = useState<Specification>({
    material: "0.20mm Standard @BBL H2S",
    color: "",
    height: "",
    density: 20,
    pattern: ""
,    quantity: 0,
    wall: 0,
    explaination: "",
  });

  const handleChange = (key: keyof Specification, value: string) => {
    setSpecification((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    console.log("Materials selected");
    console.log(specification);
  }, [specification]);

  return (
    <form className={`max-w-2xl ${className}`} action="#">
      <label className="text-blue tracking-wide">
        Material<span>*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {materials.map((mat) => {
          const isSelected = specification.material === mat;

          return (
            <label
              key={mat}
              className={`h-12  border border-2 relative flex items-center gap-8 py-2 px-4 rounded-xl transition-all cursor-pointer
                ${isSelected ? "border-blue bg-blue" : "bg-white border-blue hover:bg-slate-200"}`}
            >
              <input
                type="radio"
                name="material"
                value={mat}
                className="sr-only"
                onChange={(e) => handleChange("material", e.target.value)}
              />

              {/* Material Name */}
              <span
                className={`font-semibold transition-colors w-full  ${isSelected ? "text-white" : "text-blue"}`}
              >
                {mat}
              </span>

              {/* Indikator-Punkt oben rechts */}
              <div
                className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-white transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}
              />
            </label>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-blue">
        Tipps zu richtigen Materialwahl findest du{" "}
        <Link href={"#"} className="underline">
          hier
        </Link>
        .
      </p>
      <fieldset className="mt-8">
        <label className="text-blue tracking-wide">
          Materialfarbe<span>*</span>
        </label>
        <div className="flex gap-12 mt-4">
          {colors.map((color, index) => (
            <label
              key={index}
              className="flex flex-col items-center gap-1 cursor-pointer"
            >
              <input
                type="radio"
                name="color"
                className="sr-only peer"
                onChange={(e) => handleChange("color", e.target.value)}
              />
              <span
                className={`text-blue w-8 h-8 rounded-full transition-transform duration-200 ease-in-out peer-checked:scale-150 ${color.class} `}
              />
              <span className="text-sm mt-2 peer-checked:font-semibold">
                {color.name}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      {/* heights */}
      <div className="mt-16">
        <label className="text-blue tracking-wide">
          Schichthöhe<span>*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {heights.map((e, index) => {
            const isSelected = specification.height === e;
            return (
              <label
                key={index}
                className={`h-12 bg-blue relative flex items-center gap-8 py-2 px-4 rounded-xl border transition-all cursor-pointer
             ${isSelected ? "border-blue bg-blue" : "bg-white border-blue hover:bg-slate-200"}`}
              >
                <input
                  type="radio"
                  name="height"
                  value={e}
                  className="sr-only"
                  onChange={(e) => handleChange("height", e.target.value)}
                />
                <span
                  className={`font-semibold transition-colors w-full  ${isSelected ? "text-white" : "text-blue"}`}
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
        <Link href={"#"} className="underline">
          hier
        </Link>
        .
      </p>
        </div>
      </div>

      {/* Fülldichte */}
      <div className="mt-16 flex flex-col gap-4">
        {/* Label & Wert-Anzeige */}
        <div className="flex justify-between items-center">
          <label className="text-blue tracking-wide">
            Fülldichte<span>*</span>
          </label>
          <span className="font-bold">{specification.density}%</span>
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
            className="w-full h-2 bg-blue rounded-lg appearance-none cursor-pointer 
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
          <span>5% (Leicht)</span>
          <span>45%</span>
          <span>80% (Massiv)</span>
        </div>
      <div className="mt-8">
        <label className="text-blue tracking-wide">
          Füllmuster<span>*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {pattern.map((e, index) => {
            const isSelected = specification.pattern === e;
            return (
              <label
                key={index}
                className={`h-12 bg-blue relative flex items-center gap-8 py-2 px-4 rounded-xl border transition-all cursor-pointer
             ${isSelected ? "border-blue bg-blue" : "bg-white border-blue hover:bg-slate-200"}`}
              >
                <input
                  type="radio"
                  name="height"
                  value={e}
                  className="sr-only"
                  onChange={(e) => handleChange("pattern", e.target.value)}
                />
                <span
                  className={`font-semibold transition-colors w-full  ${isSelected ? "text-white" : "text-blue"}`}
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

      {/* Stückzahl, Wandstärke */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {/* Stückzahl */}
        <div className="flex flex-col gap-2">
          <label className="text-blue tracking-wide">
            Stückzahl<span>*</span>
          </label>
          <div>
            <input
              type="number"
              min="1"
              placeholder=""
              className=" w-full bg-white border border-blue rounded-xl p-2 text-blue outline-none transition-all"
              onChange={(e) => handleChange("quantity", e.target.value)}
            />
          </div>
        </div>

        {/* Wandstärke */}
        <div className="flex flex-col gap-2">
          <label className="text-blue tracking-wide">
            Wandstärke<span>*</span>
          </label>
          <div>
            <input
              type="number"
              placeholder=""
              className=" w-full bg-white border border-blue rounded-xl p-2 text-blue outline-none transition-all"
              onChange={(e) => handleChange("wall", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Düsendurchmesser */}
      <div className="mt-16">
        <label className="text-blue tracking-wide">Düsendurchmesser</label>
        <p className="text-blue">0.4 mm (auf Anfrage 0.2mm möglich)</p>
      </div>

      {/* Verwendungszweck */}
      <div className="mt-16">
        <label className="text-blue tracking-wide">Verwendungszweck</label>
        <textarea
          rows={3} // Startgröße: 3 Zeilen hoch
          placeholder="Beschreibe kurz dein Projekt (z.B. mechanische Belastung, Hitzeeinwirkung, Einsatzort)..."
          className="mt-4 w-full bg-white border border-blue rounded-xl p-2 text-blue outline-none transition-all"
          onChange={(e) => handleChange("explaination", e.target.value)}
        />
      </div>
      {/* File Drop */}
      <div className="mt-16">
        <label className="text-blue tracking-wide">
          ABC.abc. Datei hochladen<span>*</span>
        </label>
        <div className="mt-4">
          <Dropzone />
        </div>
      </div>

      <div className="pt-4 text-blue tracking-wide">
        <p>Spezifikationen</p>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex gap-4">
            <span>Material:</span>
            <span className="font-semibold">{specification.material}</span>
          </div>
             <div className="flex gap-4">
            <span>Farbe:</span>
            <span className="font-semibold">{specification.color}</span>
          </div>
             <div className="flex gap-4">
            <span>Schichthöhe:</span>
            <span className="font-semibold">{specification.height}</span>
          </div>
             <div className="flex gap-4">
            <span>Fülldichte:</span>
            <span className="font-semibold">{specification.density}</span>
          </div>
             <div className="flex gap-4">
            <span>Stückzahl:</span>
            <span className="font-semibold">{specification.quantity}</span>
          </div>
             <div className="flex gap-4">
            <span>Wandstärke:</span>
            <span className="font-semibold">{specification.wall}</span>
          </div>
               <div className="flex gap-4">
            <span>Verwendungszweck:</span>
            <span className="font-semibold">{specification.explaination}</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-white h-12 mt-16 font-bold uppercase tracking-widest bg-cta px-4 py-2 font-semibold  rounded-xl hover:shadow-xl cursor-pointer w-full uppercase"
      >
        Spezifikationen & Datei abschicken
      </button>
    </form>
  );
}
