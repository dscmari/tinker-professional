import { Sun, ThermometerSun, ShieldPlus } from "lucide-react";

type Bullet = {
  icon: React.ReactNode;
  bulletTitle: string;
  bulletSubtitle: string;
  isPro: boolean;
};

type MaterialCard = {
  iconText: string;
  title: string | React.ReactNode;
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
      <div className="bg-white border-y border-slate-300 rounded-t-xl flex flex-col gap-2 p-4 xl:h-[160px]">
        <span className="self-start bg-blue px-4 py-2 text-white rounded-xl text-sm font-semibold tracking-tight">
          {iconText}
        </span>
        <h3 className="font-semibold mt-4 !mb-0">{title}</h3>
        <p className="text-sm !font-light">{subtitle}</p>
      </div>
      <div className="text-blue flex flex-col">
        {bullets.map((e, index) => (
          <div
            key={index}
            className={`border-b-1 border-slate-200  flex items-start gap-2 p-2`}
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
        <div className="flex flex-wrap items-center gap-2">
          {applications.map((e, index) => (
            <span
              key={index}
              className="self-start bg-green-500 px-4 py-1 text-white rounded-xl text-sm font-semibold tracking-tight"
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
