import Image from "next/image";
import Navbar from "./Navbar";
import ContactBtn from "./btn/ContactBtn";

export default function Hero() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-950 from-10% via-blue-900 via-40% to-blue-500 to-70% flex flex-col justify-center items-center p-16">
      <div className="h-full w-full border-[16px] border-white rounded-[60px] p-16 px-32">
        <Navbar />
        <div className=" h-full hidden xl:flex flex-col justify-center ">
          <div className="flex items-center">
            <div className="text-white flex-1">
              <h1 className=" tracking-tight">
                Professioneller 3D Druck - für Industrie & Tüftler
              </h1>
              <p className="font-semibold text-lg 2xl:text-lg mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                incidunt laboriosam tempora itaque provident veniam, soluta
                assumenda dicta facilis pariatur.
              </p>
              <ContactBtn className="inline-block self-start mt-8" />
            </div>
            <div className="flex-1">
              <div className="flex justify-center">
                <Image
                  src={"/images/printer_graphic.webp"}
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
