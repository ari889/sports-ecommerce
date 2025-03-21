import Image from "next/image";
import React from "react";

const ImageBanner = () => {
  return (
    <div className="min-h-screen">
      <Image
        src="/images/details/banner-2.jpg"
        width={1920}
        height={1080}
        alt="Banner 1"
        className="w-full h-full"
      />
    </div>
  );
};

export default ImageBanner;
