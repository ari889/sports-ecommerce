import Image from "next/image";

const FeaturedBanner = () => {
  return (
    <div className="min-h-screen bg-black relative z-10">
      <Image
        src="/images/details/banner-3.jpg"
        width={1920}
        height={1080}
        alt="Banner 3"
        className="object-cover w-full h-full absolute top-0 left-0 p-[4.44vw] z-[20]"
      />
      <div className="max-w-[23rem] py-[3rem] px-[2rem] bg-black absolute top-1/2 left-0 transform -translate-y-1/2 z-30 mx-[8.88vw]">
        <h2 className="tracking-[.2em] leading-[1.5em] text-base sm:text-[1.5rem] text-white uppercase font-bold">
          ZERO REDUNDANT CARBON.
        </h2>
        <p className="text-white mt-5 text-sm sm:text-[1rem] leading-[2em]">
          Custom ply shapes, critical material choice, intelligent draping
          methods, and smooth transitions between every carbon ply have
          eliminated redundant carbon, giving radical strength for super
          lightweight. Such a boundary pushing schedule driven from in-depth
          carbon analysis tools marks a Yeti first.
        </p>
      </div>
    </div>
  );
};

export default FeaturedBanner;
