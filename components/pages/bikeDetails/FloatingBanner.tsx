import Image from "next/image";
import React from "react";

const FloatingBanner = () => {
  return (
    <div className="min-h-screen relative z-30 flex flex-col justify-center items-center">
      <div className="absolute w-full h-full top-0 left-0 bg-black/25 z-20"></div>
      <Image
        src="/images/details/banner-1.jpg"
        width={1920}
        height={1080}
        alt="Banner 1"
        className="object-cover w-full h-full absolute top-0 left-0 z-10"
      />
      <div className="flex flex-col justify-center items-center w-full relative z-30">
        <div className="max-w-[720px] text-center">
          <h2 className="text-[3.9vw] font-bold uppercase leading-[1.5em] tracking-[.2em] text-white">
            IT’S BACK. BECAUSE XC IS X AGAIN.
          </h2>
          <p className="mt-[2rem] mx-auto max-w-[420px] text-[.875rem] leading-[2em] mb-[2rem] text-white">
            The ASR is back. We’ve never made a lighter full-suspension bike,
            but that’s just half the story. It brings proper suspension to
            proper mountain bike racing. The kind that takes skill, not just
            lungs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloatingBanner;
