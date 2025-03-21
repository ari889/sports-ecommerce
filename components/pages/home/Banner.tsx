"use client";

import Button from "@/components/common/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const Banner = () => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [100, 0]);

  return (
    <div className="relative">
      <div
        style={{ backgroundImage: "url('/images/banner/banner1.jpg')" }}
        className="bg-fixed object-cover bg-cover bg-left-top bg-no-repeat min-h-[170vh] -mt-[82px]"
      >
        <motion.div
          style={{ y }}
          className="flex flex-col justify-center px-[4.44vw] items-start py-56 relative"
        >
          <div className="border-l-4 pl-14 relative z-10">
            <h1 className="text-white text-[5vw] uppercase font-bold leading-[1.5em] tracking-[0.2em] pl-14">
              A tribute to our friend - Remembering Matt Opperman
            </h1>
            <Button className="w-auto text-white text-[1.5rem] mt-[40vh]">
              Read Now
            </Button>
          </div>

          {/* Wrapping the image in motion.div and applying the y transform */}
          <motion.div
            style={{ y }}
            className="h-[70vw] md:h-[50vw] xl:h-[30vw] w-[70vw] md:w-[50vw] xl:w-[30vw] absolute top-[90vh] left-0"
          >
            <Image
              src="/images/banner/banner-2.jpg"
              width={500}
              height={500}
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="text-right absolute bottom-0 right-[4.44vw]">
        <h2 className="text-[2rem] font-bold text-white tracking-[.0625em] leading-[1.25] uppercase pr-[2.5rem] pb-[2.5rem] border-r-[.3125rem] border-white">
          Ride Driven <br />
          Since -85
        </h2>
      </div>
    </div>
  );
};

export default Banner;
