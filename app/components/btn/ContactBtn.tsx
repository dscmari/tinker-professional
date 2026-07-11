"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";



type Props = {
  className?: string;
  content?: string;
};

export default function ContactBtn({ className, content }: Props) {
 

  return (
    <Link
      href={"#"}
      target="_blank"
      className={`flex items-center gap-2 justify-center lg:justify-start bg-slate-100 border border-slate-300 text-blue px-4 py-2 font-inter font-semibold rounded-xl hover:shadow-xl lg:w-fit ${className}`}
    >
      Beratungsgespräch
    </Link>
  );
}
