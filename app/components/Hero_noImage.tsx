"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import ContactBtn from "./btn/ContactBtn";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import { useScrolled } from "../hooks/useScrolled";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PrintNowBtn from "./btn/PrintNowBtn";

type Props = {
  className?: string;
  title: string;
  subtitle: string;
  intro: string | React.ReactNode;
  subintro?: string | React.ReactNode;
  imgPath: string;
};

export default function Hero({
  className,
  title,
  subtitle,
  intro,
  subintro,
  imgPath,
}: Props) {
  const pathname = usePathname();
  const isScrolled = useScrolled(20);

  return (
    <div className="px-4 sm:px-16 lg:px-32 lg:h-screen lg:flex lg:justify-center lg:items-center gap-12">
      <div className="mt-12 lg:mt-0 lg:col-start-4 lg:col-span-8 flex flex-col items-center lg:items-start">
        <h1 className="max-w-4xl !text-5xl/14 !font-extrabold !tracking-tight text-center lg:text-start">
          {title}
        </h1>
        <h2 className="max-w-4xl !tracking-tight text-center lg:text-start">
          {subtitle}
        </h2>
        <p className="font-semibold 2xl:text-lg lg:mt-8 max-w-3xl text-center lg:text-start">
          {intro}
        </p>
        <p className="mt-4 font-semibold 2xl:!text-lg max-w-3xl text-center lg:text-start">
          {subintro}
        </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
              <PrintNowBtn className="mx-4 lg:mx-0" />
            <ContactBtn className=" mx-4 lg:mx-0" />
          </div>
      </div>
      <div />
    </div>
  );
}
