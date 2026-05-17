"use client";

import { useState } from "react";
import Dropzone from "./Dropzone";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function MaterialForm({ className }: Props) {
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [infill, setInfill] = useState(20);
  const materials = ["ABS", "ASA", "PA12-CF", "TPU", "PLA", "PETG"];
  const colors = [
    { name: "Grün", hex: "bg-green-500" },
    { name: "Rot", hex: "bg-red-500" },
    { name: "Gelb", hex: "bg-yellow-400" },
    { name: "Blau", hex: "bg-blue-500" },
  ];
  const tpuColors = [
    { name: "black", hex: "bg-black" },
    { name: "white", hex: "bg-white" },
  ];
  const heights = ["0.08 mm", "0.12 mm", "0.16 mm", "0.2 mm"];

  return (
    <form className={`${className}`} action="#">
      <label className="text-blue tracking-wide">
        Material<span>*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {materials.map((mat) => {
          // PRÜFUNG: Ist DIESER Button gerade ausgewählt UND ist es PLA/PETG?
          const isSelected = selectedMaterial === mat;
          const isColorMaterial = mat === "PLA" || mat === "PETG";
          const isTPU = mat === "TPU";

          return (
            <label
              key={mat}
              className={`h-12 bg-blue relative flex items-center gap-8 py-2 px-4 rounded-xl border transition-all cursor-pointer
                ${
                  isSelected
                    ? "border-blue bg-blue-500/50"
                    : "border-white/10  hover:bg-blue-500/60"
                }`}
            >
              <input
                type="radio"
                name="material"
                value={mat}
                className="sr-only"
                onChange={(e) => setSelectedMaterial(e.target.value)}
              />

              {/* Material Name */}
              <span
                className={`font-semibold transition-colors w-full  hover:text-blue ${isSelected ? "text-blue" : "text-slate-300"}`}
              >
                {mat}
              </span>

              {/* Farbauswahl NUR anzeigen, wenn dieses Material gewählt ist UND es PLA/PETG ist */}
              {isColorMaterial && (
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden px-2 ${
                    isSelected
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex gap-2 items-center">
                    {colors.map((color) => (
                      <label
                        key={color.name}
                        className="relative cursor-pointer py-1"
                      >
                        <input
                          type="radio"
                          name="color_choice" // Eigenes Name-Attribut für die Farben
                          value={`${mat}-${color.name}`}
                          className="sr-only peer"
                          // Verhindert, dass der Klick auf die Farbe den Material-Radio stört
                          onClick={(e) => e.stopPropagation()}
                        />
                        <div
                          className={`w-6 h-6 rounded-full ${color.hex}  peer-checked:border peer-checked:border-white peer-checked:scale-130 transition-all`}
                          title={color.name}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {!isColorMaterial && (
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden px-2 ${
                    isSelected
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex gap-2 items-center">
                    {tpuColors.map((color) => (
                      <label
                        key={color.name}
                        className="relative cursor-pointer py-1"
                      >
                        <input
                          type="radio"
                          name="color_choice" // Eigenes Name-Attribut für die Farben
                          value={`${mat}-${color.name}`}
                          className="sr-only peer"
                          // Verhindert, dass der Klick auf die Farbe den Material-Radio stört
                          onClick={(e) => e.stopPropagation()}
                        />
                        <div
                          className={`w-6 h-6 rounded-full ${color.hex}  peer-checked:scale-130 transition-all`}
                          title={color.name}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Indikator-Punkt oben rechts */}
              <div
                className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-blue transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}
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

      {/* heights */}
      <div className="mt-16">
        <label className="text-blue tracking-wide">
          Schichthöhe<span>*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 mt-4">
          {heights.map((mat) => {
            // PRÜFUNG: Ist DIESER Button gerade ausgewählt UND ist es PLA/PETG?
            const isSelected = selectedMaterial === mat;
            const isColorMaterial = mat === "PLA" || mat === "PETG";

            return (
              <label
                key={mat}
                className={`h-12 bg-blue relative flex items-center gap-8 py-2 px-4 rounded-xl border transition-all cursor-pointer
                ${
                  isSelected
                    ? "border-blue bg-blue-500/50"
                    : "border-white/10  hover:bg-blue-500/50"
                }`}
              >
                <input
                  type="radio"
                  name="material"
                  value={mat}
                  className="sr-only"
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                />

                {/* Material Name */}
                <span
                  className={`font-semibold transition-colors w-full  hover:text-blue ${isSelected ? "text-blue" : "text-slate-300"}`}
                >
                  {mat}
                </span>

                {/* Indikator-Punkt oben rechts */}
                <div
                  className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-500 transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}
                />
              </label>
            );
          })}
        </div>
      </div>

      {/* Fülldichte */}
      <div className="mt-16 flex flex-col gap-4">
        {/* Label & Wert-Anzeige */}
        <div className="flex justify-between items-center">
          <label className="text-blue tracking-wide">
            Fülldichte<span>*</span>
          </label>
          <span className="font-mono">{infill}%</span>
        </div>

        {/* Der Slider-Balken */}
        <div className="relative flex items-center group">
          <input
            type="range"
            min="10"
            max="80"
            step="5" // Optional: 5er Schritte für leichtere Bedienung
            value={infill}
            onChange={(e) => setInfill(Number(e.target.value))}
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
        <div className="flex justify-between text-sm text-white font-bold px-1">
          <span>10% (Leicht)</span>
          <span>45%</span>
          <span>80% (Massiv)</span>
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
              type="text"
              min="1"
              className="w-full bg-blue border border-blue rounded-xl p-3 pr-12 text-white outline-none focus:bg-blue-500/50 focus:ring-1 focus:ring-blue-500 focus:text-blue transition-all"
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
              type="text"
              className="w-full bg-blue border border-blue rounded-xl p-3 pr-12 text-white outline-none focus:bg-blue-500/50 focus:ring-1 focus:ring-blue-500 focus:text-blue transition-all"
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
          className="mt-4 w-full bg-blue border border-blue rounded-xl p-3 pr-12 text-white outline-none focus:bg-blue-500/50 focus:ring-1 focus:ring-blue-500 focus:text-blue transition-all"
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

      <button
        type="submit"
        className="text-white h-12 mt-16 font-bold uppercase tracking-widest bg-cta px-4 py-2 font-semibold  rounded-xl hover:shadow-xl cursor-pointer w-full uppercase"
      >
        Spezifikationen & Datei abschicken
      </button>
    </form>
  );
}
