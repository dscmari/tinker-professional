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
      className={`flex items-center gap-4 justify-center lg:justify-start text-lg text-white bg-cta px-4 py-2 font-inter font-bold tracking-tight rounded-xl hover:shadow-xl lg:w-fit ${className}`}
    >
      <ArrowRight className="shrink-0" /> <span>BERATUNGSGESPRÄCH</span>
    </Link>
  );
}
