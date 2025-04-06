"use client";

import cycles from "@/data/Slider.json";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="w-full flex justify-center py-[7rem] relative">
      <Swiper
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".button-next", // Ensure this matches the class name in JSX
          prevEl: ".button-prev", // Ensure this matches the class name in JSX
        }}
        loop={true}
        speed={1000}
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {cycles.map((cycle, index) => (
          <SwiperSlide key={cycle?.id}>
            <Link href={"/bikes/1"}>
              <div className="w-full aspect-video relative">
                {index !== activeIndex && (
                  <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
                )}
                <Image
                  src={cycle?.path}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={1000}
                  height={700}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <AnimatePresence>
        <motion.div
          className="absolute bottom-[4rem] w-full flex justify-center text-black font-semibold z-10 text-center uppercase text-base md:text-[2rem] tracking-[.0625em]"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
          }}
          exit={{
            y: -50,
            opacity: 0,
            transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
          }}
          key={activeIndex}
        >
          {cycles[activeIndex]?.name}
        </motion.div>
      </AnimatePresence>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 cursor-pointer button-prev text-black/50 transition delay-75 hover:text-black z-10">
        <GrPrevious className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 cursor-pointer button-next text-black/50 transition delay-75 hover:text-black z-10">
        <GrNext className="w-full h-full" />
      </div>
    </div>
  );
};

export default ProductSlider;
