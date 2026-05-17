"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import ContactBtn from "./btn/ContactBtn";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import { useScrolled } from "../hooks/useScrolled";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  className?: string;
  title: string;
  subtitle: string;
  intro: string | React.ReactNode;
  imgPath: string;
};

export default function Hero({
  className,
  title,
  subtitle,
  intro,
  imgPath,
}: Props) {
  const pathname = usePathname();
  const isScrolled = useScrolled(20);

  return (
    <div>
      {/* mobile */}
      <div className="lg:hidden">
        <div
          className={`min-h-screen bg-gradient-to-br from-blue-950 from-10% via-blue-900 via-40% to-blue-500 to-70%  ${className}`}
        >
          <Navbar className="p-4" />
          <div className="min-h-screen flex flex-col justify-center px-4 item-center text-center pb-[25vh]">
            <h1 className="!text-4xl !font-extrabold !tracking-tight !text-white">
              {title}
            </h1>
            <h2 className="!text-white">{subtitle}</h2>
            <p className="font-semibold mt-8 !text-white max-w-3xl mx-auto">
              {intro}
            </p>
            <ContactBtn className="w-full mt-16  max-w-3xl mx-auto" />
          </div>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden lg:block">
        <AnimatePresence>
          {isScrolled ? (
            <div>
              <motion.div
                className="fixed top-0 w-full z-50"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Navbar className="px-16 pt-8 pb-4 xl:pt-12 xl:pb-8 just bg-gradient-to-br from-blue-950 from-10% via-blue-900 via-40% to-blue-500 to-70%" />
              </motion.div>
              <motion.div
                className=" h-screen flex flex-col items-center justify-center pt-[50vh]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }} // leichter delay wirkt schön
              >
                <ViewTransition name="hero">
                  <div className="flex flex-col justiy-center">
                    <h1 className="max-w-4xl !text-5xl/14 !font-extrabold !tracking-tight">
                      {title}
                    </h1>
                    <h2 className="max-w-4xl !text-5xl/14 !font-extrabold !tracking-tight">
                      {subtitle}
                    </h2>
                    <p className="font-semibold text-lg 2xl:text-lg mt-8 max-w-3xl mb-16">
                      {intro}
                    </p>
                    <ContactBtn className="mx-4 lg:mx-0 lg:mt-8 lg:px-6 mb-24 lg:mb-0" />
                  </div>
                </ViewTransition>
              </motion.div>
            </div>
          ) : (
            <div
              className={`min-h-screen lg:h-screen bg-gradient-to-br from-blue-950 from-10% via-blue-900 via-40% to-blue-500 to-70% lg:flex flex-col justify-center items-center lg:p-8 xl:p-16 ${className}`}
            >
              <div className="h-full w-full border-[16px] border-white rounded-[60px] p-16 xl:px-32">
                <Navbar className="p-4 px-0" />
                <div className="h-full flex items-center justify-center">
                  <ViewTransition name="hero">
                    <div className="flex items-center">
                      <div className="text-white flex-3">
                        <h1 className="!text-white !text-5xl/14 !font-extrabold !tracking-tight">
                          {title}
                        </h1>
                        <h2 className="!text-white !text-5xl/14 !font-extrabold !tracking-tight">
                          {subtitle}
                        </h2>
                        <p className="font-semibold max-w-3xl 2xl:text-lg mt-8 !text-white">
                          {intro}
                        </p>
                        <ContactBtn className="mx-4 lg:mx-0 mt-16 lg:mt-8 lg:px-6 mb-24 lg:mb-0" />
                      </div>
                                <div className="flex justify-center h-[300px] w-[282px]">
                    <Image
                      src={imgPath}
                      alt="Illustration eines 3D Druckers und von Fertigungsstücken"
                      width={300}
                      height={282}
                      priority
                    />
                  </div>
                    </div>
                  </ViewTransition>
                  {/* <div className="flex justify-center h-[200px] w-[190px]">
                    <Image
                      src={imgPath}
                      alt="Illustration eines 3D Druckers und von Fertigungsstücken"
                      width={200}
                      height={190}
                      priority
                    />
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
