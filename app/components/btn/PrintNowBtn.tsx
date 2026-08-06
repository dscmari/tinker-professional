"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  className?: string;
  content?: string;
  hasArrow?: boolean
};

export default function ContactBtn({ className, content, hasArrow}: Props) {
  const pathname = usePathname();


  return (
    <Link
      href={"/"}
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          document
            .getElementById("print-now")
            ?.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`flex items-center gap-2 justify-center lg:justify-start text-white bg-blue px-4 py-2 font-inter font-semibold rounded-xl hover:shadow-xl lg:w-fit ${className}`}
    >
      {hasArrow &&     <ArrowRight className="shrink-0" /> }
  
      <span>{content ? `${content}` : "JETZT DRUCKEN"}</span>
    </Link>
  );
}
