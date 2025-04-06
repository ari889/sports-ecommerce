"use client";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageSlider = () => {
  return (
    <div className="block lg:hidden">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {[1, 2, 3, 4].map((num) => (
          <SwiperSlide key={num} className="my-10 aspect-video">
            <Image
              src={`/images/cycles/${num}.png`}
              width={1920}
              height={1080}
              alt="Bike"
              className="w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ImageSlider;
