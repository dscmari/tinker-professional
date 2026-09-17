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
      href={"/kontakt/"}
      className={`bg-white text-blue hover:bg-sage px-4 py-2  font-semibold tracking-tight rounded-xl whitespace-nowrap hover:shadow-xl w-full xl:w-52 text-center border border-blue ${className}`}
    >
      Beratungsgespräch
    </Link>
  );
}
