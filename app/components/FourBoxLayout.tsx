import { Star } from 'lucide-react';
import React from "react";

type Box = {
  icon: string;
  title: string;
  bullets: string[];
  text: string;
  link?: string;
};

type Props = {
  className?: string;
  data: Box[];
};

export default function FourBoxLayout({ className, data }: Props) {
  return (
    <section className={`grid lg:grid-cols-3 gap-8 lg:gap-4 ${className}`}>
      {data.map((e, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between p-8 bg-white rounded-xl dark border border-slate-300 ${
            index === 0 || index === 3 ? "lg:col-span-2" : "col-span-1"
          }`}
        >
          <div className="flex flex-col pt-4">
            <div className={`flex items-center gap-4 ${index === 0 ? "mb-2" : ""}`}>
              {index === 0 && <Star className=" shrink-0 text-[#EFBF04]" fill="#EFBF04" size={32}/>}
     <h2 className={`${index === 0 ? "!mb-0" : ""}`}>{e.icon}</h2>
            </div>
       
            <p className="pt-4 mb-4">{e.title}</p>
            <ul className="lg:text-sm text-blue font-medium ml-8 list-disc">
              {e.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
            <p className="lg:text-sm mt-4">{e.text}</p>
          </div>

          {/* <button className="self-start rounded-xl text-custom-red bg-custom-red-op px-4 py-2 mt-8 text-sm">
                Mehr Infos
              </button> */}
        </div>
      ))}
    </section>
  );
}
