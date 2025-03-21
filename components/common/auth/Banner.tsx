import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[43vh] relative overflow-hidden flex justify-center items-center">
      <Image
        src="/images/auth/login-1.jpg"
        width={1920}
        height={1440}
        alt="Login Bg"
        className="w-full absolute -top-[10vw] left-0 z-10 hidden lg:block"
        quality={100}
      />
      <Image
        src="/images/auth/login.jpg"
        width={1920}
        height={1440}
        alt="Login Bg"
        className="w-full absolute -top-[20vw] left-0 z-10 block lg:hidden"
        quality={100}
      />
      <h2 className="text-[5vw] text-white uppercase font-bold tracking-[.2em] leading-[1.5em] relative z-20">
        Account
      </h2>
    </div>
  );
};

export default Banner;
