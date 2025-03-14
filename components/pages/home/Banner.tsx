import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/banner/banner1.jpg')" }}
      className="bg-fixed object-cover bg-cover bg-left-top bg-no-repeat min-h-screen flex flex-col justify-center px-[4.44vw] items-start py-56 relative"
    >
      <div className="border-l-4 pl-14 relative z-10">
        <h1 className="text-white text-[5vw] uppercase font-bold leading-[1.5em] tracking-[0.2em] pl-14">
          A tribute to our friend - Remembering Matt Opperman
        </h1>
        <button className="w-auto uppercase text-[1.5rem] text-white leading-[1.5em] whitespace-nowrap font-[700] tracking-[.0625em] border-b-4 mt-[50vh]">
          Read Now
        </button>
      </div>
      <Image
        src="/images/banner/banner-2.jpg"
        width={500}
        height={500}
        alt="Banner 2"
        className="w-[30vw] h-auto absolute left-0 bottom-[10vh] z-[9]"
      />
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
