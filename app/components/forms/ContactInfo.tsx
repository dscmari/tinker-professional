import { Specification } from "@/app/types";
import { Mail, Ruler } from "lucide-react";
import Link from "next/link";

type Props = {
  specification: Specification;
  handleChange: (key: keyof Specification, value: string) => void;
};

export default function Heights({ specification, handleChange }: Props) {
  return (
    <div>
      <div>
        <div className="flex items-center gap-2 mt-4 lg:mt-0">
          <Ruler className="shrink-0 text-blue text-blue h-4 md:h-8" />
          <label className="text-blue text-sm md:text-md">
            Name<span>*</span>
          </label>
        </div>
        <div>
          <input
            type="text"
            className="mt-2 w-full h-10 relative flex items-center gap-8 py-2 px-4 rounded-xl border border-slate-300 transition-all cursor-pointer"
             onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mt-4 lg:mt-0">
          <Mail className="shrink-0 text-blue text-blue h-4 md:h-8" />
          <label className="text-blue text-sm md:text-md">
            Mail<span>*</span>
          </label>
        </div>
        <div>
          <input
            type="mail"
            className="mt-2 w-full h-10 relative flex items-center gap-8 py-2 px-4 rounded-xl border border-slate-300 transition-all cursor-pointer"
             onChange={(e) => handleChange("mail", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
