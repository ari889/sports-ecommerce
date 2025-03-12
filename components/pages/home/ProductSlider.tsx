"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import cycles from "@/data/Slider.json";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

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
          </SwiperSlide>
        ))}
      </Swiper>
      <AnimatePresence>
        <motion.div
          className="absolute bottom-[6rem] left-1/2 transform -translate-x-1/2 text-black font-semibold z-10 uppercase text-[2rem] tracking-[.0625em]"
          initial={{ y: 50, opacity: 0 }} // Initial state when text is not visible
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "tween", duration: 0.5, ease: "easeInOut" }, // Use tween for smooth animation
          }} // Text comes from bottom when the slide enters
          exit={{
            y: -50,
            opacity: 0,
            transition: { type: "tween", duration: 0.5, ease: "easeInOut" }, // Smooth exit animation
          }} // Text goes to the top when the slide exits
          key={activeIndex} // The key changes whenever the slide changes, triggering the animation
        >
          {cycles[activeIndex]?.name} {/* Display current slide text */}
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
