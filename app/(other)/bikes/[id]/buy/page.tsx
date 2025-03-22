"use client";
import Image from "next/image";
import RightSidebar from "@/components/pages/buy/RightSidebar";

const ProductBuyPage = () => {
  return (
    <div className="flex flex-row relative z-[200]">
      {/* Left Content */}
      <div className="w-full bg-[rgba(0,0,0,.05)]">
        <ul>
          {[1, 2, 3, 4].map((num) => (
            <li key={num} className="my-10">
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
