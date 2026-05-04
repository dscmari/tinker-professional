import { Sun, ThermometerSun, ShieldPlus } from "lucide-react";

type Bullet = {
  icon: React.ReactNode;
  bulletTitle: string;
  bulletSubtitle: string;
  isPro: boolean;
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
      className={`flex flex-col bg-[#f5f6fa] rounded-xl font-inter border-x-1 border-b-1 border-slate-300 lg:w-xl h-full  ${className}`}
    >
      <div className="bg-[#2e86de]/90 rounded-t-xl flex flex-col gap-2 p-8 xl:h-[200px]">
        <span className="self-start bg-blue/60 px-2 py-1 text-white rounded-xl text-xs/5 font-semibold tracking-tight">
          {iconText}
        </span>
        <span className="font-semibold text-3xl text-white mt-4">{title}</span>
        <p className="!text-white font-semibold">{subtitle}</p>
      </div>
      <div className="text-blue flex flex-col p-4">
        {bullets.map((e, index) => (
          <div
            key={index}
            className={`border-b-1 border-slate-200  flex items-start gap-8 p-4`}
          >
            {e.icon}
            <div className="flex flex-col">
              <span className="font-semibold">{e.bulletTitle}</span>
              <span className="text-sm">{e.bulletSubtitle}</span>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-col gap-2 p-4 mt-auto">
        <span className="text-slate-400 font-semibold">Einsatzgebiete</span>
        <div className="flex flex-wrap items-center gap-4">
          {applications.map((e, index) => (
            <span
              key={index}
              className="self-start bg-green-500/80 px-4 py-1 text-white rounded-xl text-sm font-semibold tracking-tight"
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
