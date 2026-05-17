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
   title,
    subtitle,
    intro,
    imgPath,
  } = hero;
  return (
     <div style={{ backgroundImage: `url(/images/tool_bg_vertikal.jpg)` }}>
      <Hero 
         title={title}
          subtitle={subtitle}
          intro={intro}
          imgPath={imgPath}
      />
      <p className="my-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat impedit, incidunt ad tempore atque ducimus, veniam velit cum vel minus accusamus veritatis fugit repudiandae, eveniet ex laudantium? Qui, officiis veniam.</p>
    </div>
  );
}
