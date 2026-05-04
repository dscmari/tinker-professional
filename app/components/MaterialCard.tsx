import { Sun, ThermometerSun, ShieldPlus } from "lucide-react";

type Bullet = {
  icon: React.ReactNode;
  bulletTitle: string;
  bulletSubtitle: string;
};

type MaterialCard = {
  iconText: string;
  title: string;
  subtitle: string;
  bullets: Bullet[];
  applications: string[];
};

type Props = {
  className?: string;
  data: MaterialCard;
};

export default function MaterialCard({ className, data }: Props) {
  const { iconText, title, subtitle, bullets, applications } = data;
  return (
    <div
      className={`flex flex-col rounded-xl font-inter border-x-1 border-b-1 border-slate-300  ${className}`}
    >
      <div className="bg-blue/70 rounded-t-xl flex flex-col gap-2 p-8">
        <span className="self-start bg-blue-500 px-2 text-white rounded-xl text-xs/5 font-semibold tracking-tight">
          {iconText}
        </span>
        <span className="font-semibold text-3xl text-white">{title}</span>
        <p className="!text-white font-semibold">{subtitle}</p>
      </div>
      <div className="text-blue flex flex-col gap-4 border-b border-slate-300 p-4">
        {bullets.map((e, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-xl flex items-center gap-8 p-4"
          >
            {e.icon}
            <div className="flex flex-col">
              <span className="font-semibold">{e.bulletTitle}</span>
              <span className="text-sm">{e.bulletSubtitle}</span>
            </div>
          </div>
        ))}
        {/* <div className="bg-slate-50 rounded-xl flex items-center gap-8 p-4">
                <Sun className="shrink-0 text-blue" size={32} />
                <div className="flex flex-col">
                  <span className="font-semibold">
                    Witterungs- & UV-Beständigkeit
                  </span>
                  <span className="text-sm">
                    Hält Sonneneinstrahlung und Feuchtigkeit dauerhaft stand
                  </span>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl flex items-center gap-8 p-4">
                <ThermometerSun className="shrink-0" size={32} />
                <div className="flex flex-col">
                  <span className="font-semibold">Temperaturresistent</span>
                  <span className="text-sm ">
                    Stabil bei hohen und wechselnden Temperaturen
                  </span>
                </div>
              </div> 
              <div className="bg-slate-50 rounded-xl flex items-center gap-8 p-4">
                <ShieldPlus className="shrink-0 text-blue" size={32} />
                <div className="flex flex-col">
                  <span className="font-semibold">
                    Langlebig im Außenbereich
                  </span>
                  <span className="text-sm">
                    Geringer Materialverschleiß über lange Zeiträume
                  </span>
                </div>
              </div>
              */}
      </div>
      <div className=" flex flex-col gap-2 p-4">
        <span className="text-slate-400 font-semibold">Einsatzgebiete</span>
        <div className="flex items-center gap-4">
          {applications.map((e, index) => (
        <span key={index} className="self-start bg-blue-500/50 px-4 py-1 text-white rounded-xl text-xs font-semibold tracking-tight">
            {e}
          </span>
          ))}
  
          {/* <span className="self-start bg-blue-500/50 px-4 py-1 text-white rounded-xl text-xs font-semibold tracking-tight">
            Automotive
          </span>
          <span className="self-start bg-blue-500/50 px-4 py-1 text-white rounded-xl text-xs font-semibold tracking-tight">
            Gehäuse im Freien
          </span> */}
        </div>
      </div>
    </div>
  );
}
