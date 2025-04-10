"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const VariationSlider = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const swiperRef = useRef<SwiperClass | null>(null); // Store Swiper instance
  const variations = ["bg-red-500", "bg-blue-500", "bg-green-500"];

  return (
    <div className="p-[4.44vw] relative z-40 bg-white">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        modules={[Scrollbar, Pagination]}
        loop={false}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <SwiperSlide
              key={index}
              className="h-[100vh-82px] cursor-grab active:cursor-grabbing"
            >
              <Image
                src={`/images/cycles/1.png`}
                width={1920}
                height={1080}
                className="aspect-video w-full h-full"
                alt=""
              />
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination flex flex-row gap-2 justify-center items-center mt-4">
        {variations.map((variation, index) => (
          <div
            key={index}
            className={`flex justify-center items-center w-[2.625rem] h-[2.625rem] rounded-full cursor-pointer transition delay-75 ${
              activeSlide === index ? "bg-[#e6eeee]" : "hover:bg-gray-200"
            }`}
            onClick={() => {
              setActiveSlide(index);
              swiperRef.current?.slideTo(index); // Move to clicked slide
            }}
          >
            <div
              className={`w-[1.5rem] h-[1.5rem] rounded-full ${variation}`}
            ></div>
          </div>
        ))}
      </div>
      <Link
        href={"/bikes/1/buy"}
        className="mt-[4rem] mb-[5rem] table mx-auto bg-[#111] text-center text-white text-[1.125rem] font-bold tracking-[.0625em] leading-[1.2] uppercase p-[calc(.75em+1px)2.5em]"
      >
        Configure & Buy
      </Link>
    </div>
  );
};

export default VariationSlider;
