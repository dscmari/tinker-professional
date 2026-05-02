import Image from "next/image";
import Navbar from "./Navbar";
import ContactBtn from "./btn/ContactBtn";

type Props = {
  className?: string;
  desktopTitle: string;
  mobileTitle?: string;
  mobileSubtitle?: string;
  intro: string;
  imgPath: string;
};

export default function Hero({
  className,
  desktopTitle,
  mobileTitle,
  mobileSubtitle,
  intro,
  imgPath,
}: Props) {
  return (
    <div
      className={`h-screen bg-gradient-to-br from-blue-950 from-10% via-blue-900 via-40% to-blue-500 to-70% lg:flex flex-col justify-center items-center lg:p-8 xl:p-16 ${className}`}
    >
      <div className="h-full w-full lg:border-[16px] border-white lg:rounded-[60px] lg:p-8 xl:px-32">
        <Navbar className="p-4" />
        <div className="h-full lg:flex lg:flex-col lg:justify-center">
          <div className="h-full text-center lg:text-start px-4 sm:px-16 lg:px-0 flex flex-col justify-center items-center lg:flex-row">
            <div className="text-white lg:flex-1 z-10">
              {mobileTitle && (
                <div className="lg:hidden">
                  <h1 className="!text-5xl/14 !font-extrabold !tracking-tight !text-white">
                    {mobileTitle}
                  </h1>
                  <h2 className="!text-white">{mobileSubtitle}</h2>
                </div>
              )}

              <h1 className="hidden lg:block !text-white !text-3xl/10 lg:!text-5xl/14 !font-extrabold !tracking-tight">
                {desktopTitle}
              </h1>

              <p className="font-semibold text-lg 2xl:text-lg mt-8 !text-white">{intro}</p>
              <ContactBtn className="mx-4 lg:mx-0 mt-16 lg:mt-8 lg:px-6 py-4 mb-24 lg:mb-0" />
            </div>
            <div className="hidden lg:block lg:flex-1">
              <div className="flex justify-center">
                <Image
                  src={imgPath}
                  alt="Grafik eines 3D Druckers"
                  width={400}
                  height={400}
                  className="aspect-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
