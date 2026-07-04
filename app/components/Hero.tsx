"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import ContactBtn from "./btn/ContactBtn";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import { useScrolled } from "../hooks/useScrolled";
import { AnimatePresence, motion } from "framer-motion";
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
      <div className=" mt-12 flex flex-col items-center lg:items-start">
        <h1 className="max-w-4xl lg:!text-5xl/14 !font-extrabold !tracking-tight text-center lg:text-start">
          {title}
        </h1>
        <h2 className="max-w-4xl !tracking-tight text-center lg:text-start">
          {subtitle}
        </h2>
        <p className="font-semibold text-lg 2xl:text-lg mt-8 max-w-3xl text-center lg:text-start">
          {intro}
        </p>
        <p className="mt-4 font-semibold text-lg 2xl:text-lg max-w-3xl text-center lg:text-start">
          {subintro}
        </p>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-12 mt-8">
          <ContactBtn className="mx-4 lg:mx-0" />
          <PrintNowBtn className="mx-4 lg:mx-0" />
        </div>
      </div>
      <div />
      <div className="hidden lg:grid grid-cols-2 gap-4">
        <Image
          src={imgPath}
          alt=""
          width={250}
          height={250}
          className="rounded object-cover aspect-square"
        />
        <Image
          src={"/images/3dprinter_1.png"}
          alt=""
          width={250}
          height={250}
          className="rounded object-cover aspect-square"
        />
        <Image
          src={"/images/3dprinter_2.png"}
          alt=""
          width={250}
          height={250}
          className="rounded object-cover aspect-square"
        />
        <Image
          src={"/images/tool_9.png"}
          alt=""
          width={250}
          height={250}
          className="rounded object-cover aspect-square"
        />
      </div>
    </div>
  );
}
