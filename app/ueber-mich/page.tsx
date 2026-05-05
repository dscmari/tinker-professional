import Image from "next/image";
import Hero from "../components/Hero";
import { Check, X } from "lucide-react";
import { div } from "motion/react-client";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function page() {
  const hero = {
    desktopTitle: "Über Mich - Luca Krösche",
    mobileTitle: "Über Mich",
    mobileSubtitle: "Luca Krösche",
    intro: (
      <span className="text-base">
        Mein Name ist Luca Krösche und ich unterstütze Unternehmen und
        Privatkunden dabei, technische Bauteile präzise und effizient im
        3D-Druck umzusetzen. Als ausgebildeter Maschinenbau-Techniker bringe ich
        fundiertes Wissen in Konstruktion, Werkstoffen und Fertigungsprozessen
        mit. Dadurch kann ich Projekte nicht nur fertigen, sondern auch gezielt
        beraten. <br /> <br />
        Was als Hobby begann, hat sich zu einer professionellen Spezialisierung
        im 3D-Druck entwickelt – mit Fokus auf funktionale Bauteile, Prototypen
        und Kleinserien. Auf meinem{" "}
        <Link href="https://www.youtube.com/@lu.techtinker" target="_blank" className="underline underline-offset-4">
          YouTube-Kanal
        </Link>{" "}
        teile ich zusätzlich Einblicke in technische Projekte, Materialtests und
        praktische Anwendungen.
      </span>
    ),

    imgPath: "/images/portrait_placeholder.png",
    backgroundImgPath: "/images/tool_bg_horizontal.jpg",
  };
  const {
    desktopTitle,
    mobileTitle,
    mobileSubtitle,
    intro,
    imgPath,
    backgroundImgPath,
  } = hero;
  return (
    <div>
      <Hero 
        desktopTitle={desktopTitle}
        mobileTitle={mobileTitle}
        mobileSubtitle={mobileSubtitle}
        intro={intro}
        imgPath={imgPath}
        backgroundImgPath={backgroundImgPath}
      />
    </div>
  );
}
