"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname()

  const toggleMenu = () => {
    toggleX();
    setShowMenu(!showMenu);
  };

  const toggleX = () => {
    const burgerMenu = document.getElementById("burger-menu");
    const spans = burgerMenu?.getElementsByTagName("span");

    if (spans) {
      Array.from(spans).forEach((span) => {
        span.classList.toggle("open");
      });
    }
  };

  return (
    <div className={`px-8 ${className}`}>
      {/* mobile */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center">
          {/* <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-12 md:w-32"
            />
          </Link> */}
          <Link href={"/"}>
            <h1 className="!text-white !font-extrabold !tracking-tight">
              TINKER PRO
            </h1>
          </Link>

          <div className="burgermenu" id="burger-menu" onClick={toggleMenu}>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
        </div>
        {showMenu ? (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            onClick={toggleMenu}
          >
            <div className="flex flex-col items-end  gap-8 py-12 font-semibold text-white text-lg">
              <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-end">
                <Link href={"/"}>Home</Link>
              </div>
              <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-end">
                <Link href={"/fdm-technologie/"}>FDM Technologie</Link>
              </div>
              <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-end">
                <Link href={"3d-druck-naterial"}>Materialwahl</Link>
              </div>
              <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-end">
                <Link href={"#n"}>Über mich</Link>
              </div>
              <div className=" w-full flex justify-end">
                <Link
                  href={"#"}
                  className="text-center bg-cta py-2 px-4 tracking-tight flex items-center gap-4 rounded-xl"
                >
                  <ArrowRight className="shrink-0" /> <span>Jetzt Drucken</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
      {/* desktop */}
      <div className="hidden lg:flex items-center justify-between ">
        {/* <Link className="z-100" href={"/"}>
          {" "}
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="w-24"
            loading="eager"
          />
        </Link> */}
               <Link href={"/"}>
            <h1 className="!text-white !font-extrabold !tracking-tight">
              TINKER PRO
            </h1>
          </Link>

        <div className="flex items-center text-white text-lg xl:text-xl font-semibold font-inter lg:gap-4 xl:gap-8 2xl:gap-16">
          <Link href={"/fdm-technologie/"} className={`hover:shadow-xl ${pathname === "/fdm-technologie" ? "underline underline-offset-4" : ""}`}>
            FDM Technologie
          </Link>
          {/* <Link href={"#"} className="hover:underline underline-offset-4">
            Referenzen
          </Link> */}
          <Link href={"3d-druck-material"} className={`hover:shadow-xl ${pathname === "/3d-druck-material" ? "underline underline-offset-4 " : ""}`}>
            Materialwahl
          </Link>
          <Link href={"ueber-mich"} className={`hover:shadow-xl ${pathname === "/ueber-mich" ? "underline underline-offset-4 " : ""}`}>
            Über mich
          </Link>
          <Link
            href={"#print-now"}
            className="p-4 bg-cta rounded-xl font-bold tracking-tight hover:shadow-xl"
          >
            Jetzt Drucken
          </Link>
        </div>
      </div>
    </div>
  );
}
