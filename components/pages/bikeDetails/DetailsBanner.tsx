import Image from "next/image";

const DetailsBanner = () => {
  return (
    <div className="relative min-h-screen">
      <div className="z-20 absolute top-0 left-0 w-full h-full bg-black/25"></div>
      <Image
        src="/images/details/banner.jpg"
        width={1920}
        height={1080}
        alt="Banner"
        className="object-cover w-full h-full absolute top-0 left-0 z-10"
        quality={100}
      />
      <div className="flex h-screen w-full text justify-center items-center uppercase relative z-30">
        <p className="text-white text-[10vw] font-bold tracking-[13vw]">160e</p>
      </div>
      <div className="min-h-screen flex justify-center items-center relative z-30">
        <p className="text-white uppercase text-[1.92vw] max-w-[90%] w-[52ch] tracking-[.4em] leading-[2em] font-bold">
          WE DON’T PARTY UNTIL THE RACE IS OVER. SO WE TOOK OUR TIME TO DESIGN
          AN e-MTB THE WAY A YETI e-MTB HAS TO BE DESIGNED: READY TO TOE THE
          LINE AT EWS-E RACES.
          <span className="block text-[#009fad]">
            MEET THE 160E: THE WORLD’S FIRST RACE SPECIFIC e-MTB.
          </span>
        </p>
      </div>
    </div>
  );
};

export default DetailsBanner;
