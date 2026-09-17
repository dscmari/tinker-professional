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
      className={`flex items-center justify-center xl:justfiy-start gap-4 bg-blue text-white hover:shadow-xl px-4 py-2  font-semibold tracking-tight rounded-xl whitespace-nowrap hover:shadow-xl w-full xl:w-52 ${className}`}
    >
      {hasArrow &&     <ArrowRight className="shrink-0" /> }
  
      <span>{content ? `${content}` : "JETZT DRUCKEN"}</span>
    </Link>
  );
}
