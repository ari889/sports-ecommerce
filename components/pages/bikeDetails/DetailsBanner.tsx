"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import BannerTitleChar from "./BannerTitleChar";

const DetailsBanner = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const characters = ["1", "6", "0", "e"];
  return (
    <div className="min-h-[calc(100vh-82px)] relative bg-white" ref={scrollRef}>
      <div className="relative bg-black z-10">
        <div className="sticky h-0 left-0 top-0 w-full z-10">
          <motion.div
            style={{ opacity }}
            className="absolute w-full h-screen top-0 left-0 bg-black z-20"
          ></motion.div>
          <div className="absolute h-screen w-full overflow-hidden">
            <Image
              src="/images/details/banner-height.jpg"
              width={1920}
              height={1080}
              alt="Banner"
              quality={100}
              className="object-cover w-full h-full hidden md:block"
            />
            <Image
              src="/images/details/banner.jpg"
              width={800}
              height={1066}
              alt="Banner"
              quality={100}
              className="object-cover w-full h-full block md:hidden"
            />
          </div>
        </div>
        <div className="relative z-20 bg-transparent">
          <div className="items-center bg-transparent text-white flex justify-center sticky h-screen top-0 w-full z-30">
            <p className="text-white font-bold tracking-[.0625em] uppercase">
              {characters.map((char, i) => (
                <BannerTitleChar
                  key={i}
                  char={char}
                  index={i}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </p>
          </div>
          <div className="items-center flex flex-col justify-center sticky h-screen top-0 w-full z-30">
            <p className="text-white uppercase text-[1.92vw] max-w-[90%] w-[52ch] tracking-[.4em] leading-[2em] font-bold">
              WE DON’T PARTY UNTIL THE RACE IS OVER. SO WE TOOK OUR TIME TO
              DESIGN AN e-MTB THE WAY A YETI e-MTB HAS TO BE DESIGNED: READY TO
              TOE THE LINE AT EWS-E RACES.
              <span className="block text-[#009fad]">
                MEET THE 160E: THE WORLD’S FIRST RACE SPECIFIC e-MTB.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
