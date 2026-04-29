"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bebasNeue, poppins } from "@/lib/fonts";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full h-screen">
      {/* Layer atas */}
      {/* <div className="absolute inset-0 pointer-events-none w-screen h-65 flex items-center justify-center  ">
        <div className="flex justify-center items-center w-[80%] h-35 bg-[#030149] rounded-xl">
          <h1 className={`${bebasNeue.className} text-white text-[100px] text`}>
            Portofolio
          </h1>
        </div>
      </div> */}

      {/* Layer bawah */}
      <div className="min-h-screen max-h-screen flex flex-col md:flex-row items-center justify-center gap-5 px-6 md:px-13 ">
        {/* IMAGE */}
        <div className="w-full md:w-1/3 lg:w-1/4 h-1/2.5 md:h-1/2 flex justify-center items-center ">
          <Image
            src="/my3.png"
            alt="my image"
            width={200}
            height={200}
            style={{ height: "100%", width: "auto" }}
            priority
          />
        </div>

        {/* TEXT */}
        <div className="p-7 w-full md:w-1/2 flex flex-col ">
          <h1 className="text-primary font-bold text-xl md:text-2xl">
            Hi, I'm Yafi
          </h1>
          <br />
          <p className="text-primary text-left text-xl md:text-2xl leading-relaxed min-h-[4rem]">
            you can expect me as a web frontend developer and web backnd
            developer
            {/* <TypeAnimation
              sequence={[
                "you can expect me as a web frontend developer and web backnd developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /> */}
          </p>

          <br />
          <Button
            asChild
            variant="default"
            className="w-fit h-fit gap-2 group bg-primary"
          >
            <Link href="/projects">
              <h1
                className={`${bebasNeue.className}  text-xl md:text-2xl leading-relaxed`}
              >
                Know me More
              </h1>
              <ArrowRight className="w-4 h-4 animate-bounce " />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
