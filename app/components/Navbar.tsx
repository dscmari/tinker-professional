import Link from "next/link";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  return (
    <div className={``}>
      {/* desktop */}
      <div className="flex items-center justify-between ">
        <Link className="z-100" href={"/"}>
          {" "}
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="w-24"
            loading="eager"
          />
        </Link>
        <div className="flex items-center text-white text-xl font-semibold font-inter">
          <div className="flex items-center xl:gap-4 2xl:gap-16">
            <Link
              href={"#"}
              className="hover:underline underline-offset-4"
            >
              FDM Technologie
            </Link>
            <Link
              href={"#"}
                className="hover:underline underline-offset-4"
            >
              Referenzen
            </Link>
            <Link
              href={"#"}
                   className="hover:underline underline-offset-4"
            >
              Über mich
            </Link>
            <Link
              href={"#print-now"}
                    className="p-4 bg-blue/50 rounded-xl font-bold text-2xl tracking-tight"
            >
              Jetzt Drucken
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
