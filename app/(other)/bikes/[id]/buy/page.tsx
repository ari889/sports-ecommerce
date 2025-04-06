"use client";
import ImageSlider from "@/components/pages/buy/ImageSlider";
import RightSidebar from "@/components/pages/buy/RightSidebar";
import Image from "next/image";

const ProductBuyPage = () => {
  return (
    <div className="flex flex-col lg:flex-row relative z-[200]">
      {/* Left Content */}
      <div className="w-full bg-[rgba(0,0,0,.05)]">
        <ImageSlider />
        <ul className="hidden lg:block">
          {[1, 2, 3, 4].map((num) => (
            <li key={num} className="my-10 aspect-video">
              <Image
                src={`/images/cycles/${num}.png`}
                width={1920}
                height={1080}
                alt="Bike"
                className="w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Sticky Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default ProductBuyPage;
