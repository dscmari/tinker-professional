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
      href={"/3d-druck-skizze/"}
      className={`flex items-center justify-between xl:justfiy-start gap-2 bg-blue text-white px-4 py-2 font-semibold tracking-tight rounded-xl whitespace-nowrap shadow w-full lg:w-60 transform transition-transform duration-300 ease-in-out hover:scale-105 ${className}`}
    >
      <span>{content ? `${content}` : "3D Skizze hochladen"}</span>
      {hasArrow && <ArrowRight className="shrink-0" size={18} />}
    </Link>
  );
}
