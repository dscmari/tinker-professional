import Image from "next/image";
import Hero from "../components/Hero";
import { Check, X } from "lucide-react";
import { div } from "motion/react-client";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function page() {
  const hero = {
    title: "Über Mich",
    subtitle: "",
    intro: (
      <span className="">
        Mein Name ist Luca Krösche und hinter TechTinker steckt meine
        Leidenschaft für Technik, Konstruktion und 3D-Druck. Meinen Abschluss
        als staatlich geprüfter Maschinenbautechniker habe ich in München
        absolviert. Dabei konnte ich mein Wissen in den Bereichen Konstruktion,
        Werkstoffe und Fertigungstechnik vertiefen – Wissen, das heute direkt in
        meine Arbeit einfließt.
        <br /> <br />
        Was ursprünglich als Hobby begann, habe ich Schritt für Schritt zu
        meinem Beruf gemacht. Heute unterstütze ich Privatkunden und Unternehmen
        dabei, Ideen in reale Bauteile umzusetzen, von der Konstruktion und
        Entwicklung über Prototypen bis zum fertigen Bauteil aus dem
        FDM-3D-Druck.
        {/* <Link
          href="https://www.youtube.com/@lu.techtinker"
          target="_blank"
          className="underline underline-offset-4"
        >
          YouTube-Kanal
        </Link>{" "} */}
      </span>
    ),

    imgPath: "/images/portrait_placeholder.png",
    backgroundImgPath: "/images/tool_bg_horizontal.jpg",
  };
  const { title, subtitle, intro, imgPath } = hero;
  return (
    <div style={{ backgroundImage: `url(/images/tool_bg_vertikal.jpg)` }}>
      <Hero title={title} subtitle={subtitle} intro={intro} imgPath={imgPath} />
      <section className="sm:px-16 lg:px-32 pt-24 lg:pt-48 2xl:pt-0 flex flex-col gap-12 2xl:flex-row 2xl:gap-24 2xl:justify-center lg:items-center">
        <div className="flex-1 max-w-3xl">
          <h1 className="px-4 sm:px-0">Techtinker bei YouTube</h1>
          <div className="flex flex-col gap-4 ">
            <p className="px-4 sm:px-0">
              Auf meinem{" "}
              <Link
                href="https://www.youtube.com/@lu.techtinker"
                target="_blank"
                className="underline underline-offset-4 font-semibold"
              >
                YouTube-Kanal
              </Link>{" "}
              veröffentliche ich, wenn es die Zeit zulässt, Videos rund um
              3D-Druck, Konstruktion und Technik. Dort teste ich beispielsweise
              die Belastbarkeit von 3D-gedruckten Bauteilen und versuche
              technische Zusammenhänge möglichst anschaulich und praxisnah zu
              zeigen.
            </p>
            <div className="block md:hidden lg:border lg:border-1 border-slate-300 my-12">
              <Image
                src={"/images/youtube_screenshot.jpg"}
                width={600}
                height={300}
                alt="Screenshot Youtube Kanal TechTinker"
              />
            </div>
          <p className="px-4 sm:px-0">
              Auch der Nachwuchs soll dabei nicht zu kurz kommen: Auf meiner
              Experimentier-Webseite finden Kinder und Familien verschiedene
              Experimente mit unterschiedlichen Materialien, die sich mit
              einfachen Mitteln selbst nachmachen lassen. Mein Ziel dabei ist
              dasselbe wie bei TechTinker: Technik nicht unnötig kompliziert zu
              machen, sondern verständlich, praktisch und greifbar.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:border lg:border-1 border-slate-300">
          <Image
            src={"/images/youtube_screenshot.jpg"}
            width={600}
            height={300}
            alt="Screenshot Youtube Kanal TechTinker"
          />
        </div>
      </section>
    </div>
  );
}
