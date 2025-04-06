import Image from "next/image";

const ImageBanner = () => {
  return (
    <div className="max-h-screen">
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
