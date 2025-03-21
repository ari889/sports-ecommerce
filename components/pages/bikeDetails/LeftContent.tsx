import Image from "next/image";
import React from "react";

const LeftContent = () => {
  return (
    <div className="min-h-screen py-[9rem] bg-black">
      <div className="pl-[8.88vw] pr-[11.1vw] flex flex-row justify-between items-stretch">
        <div className="flex-1">
          <h2 className="text-[4.8vw] font-bold text-white uppercase tracking-[.2em] leading-[1.5em]">
            IT’S WHAT’S NOT INSIDE THAT COUNTS.
          </h2>
          <p className="text-[.875rem] leading-[2em] text-white max-w-[400px]">
            We wanted to kill carbon redundancy everywhere, not just where it
            was easy. Our 20+ years of carbon-only experience told us we could
            remove solid volume at pivots and still exceed the demands of XC,
            with no downside on performance or bearing life.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/details/banner-4.jpg"
            width={500}
            height={500}
            alt="Banner 4"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
