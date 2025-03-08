"use client";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import categories from "@/data/Categories.json";
import { MouseEvent, useState } from "react";

const Categories = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const selectedCategoryChildren = categories?.find(
    (category) => category?.id === selectedCategoryId
  );

  const handleSelectedCategory = (e: MouseEvent, id: number) => {
    e.preventDefault();
    setSelectedCategoryId(id);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex flex-row">
      <div className="bg-[#31343b] h-full w-[calc(320px+16px*2+64px)]">
        <div className="py-6 px-3 gap-7">
          <div className="flex flex-row items-center gap-5">
            <button className="text-[#b0b3b8] text-xl transition delay-75 w-10 h-10 flex items-center justify-center rounded-md bg-transparent hover:bg-[#494e58] hover:text-white">
              <IoMdClose />
            </button>
            <Image
              src="/images/logo/sidenav-logo.svg"
              alt="Logo"
              width={150}
              height={100}
            />
          </div>
          <div className="mt-16 flex flex-row items-baseline gap-5">
            <button
              className={`text-[#b0b3b8] text-xl transition delay-75 w-10 h-10 flex items-center justify-center rounded-md bg-transparent ${
                selectedCategoryId
                  ? "opacity-1 cursor-pointer pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } hover:bg-[#494e58] hover:text-white`}
              onClick={() => setSelectedCategoryId(null)}
            >
              <IoArrowBack />
            </button>
            <div className="relative w-full overflow-hidden">
              <ul className="mb-10">
                {categories?.map((category, index) => (
                  <li key={category?.id}>
                    <a
                      href="#"
                      className={`block text-white transition delay-75 uppercase font-brandonGrotesque text-2xl ${
                        index !== 0 ? "my-7" : ""
                      } hover:text-blue-500`}
                      onClick={(e) => handleSelectedCategory(e, category?.id)}
                    >
                      {category?.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="pt-10 border-t border-t-[#494e58]">
                <li>
                  <a
                    href="#"
                    className="block text-base uppercase font-brandonGrotesque text-white transition delay-75 hover:text-blue-500 py-2"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-base uppercase font-brandonGrotesque text-white transition delay-75 hover:text-blue-500 py-2"
                  >
                    Find a Dealer
                  </a>
                </li>
              </ul>
              <div
                className={`absolute top-0 w-full h-full z-20 bg-[#31343b] transition-transform duration-300 ${
                  selectedCategoryId ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <p className="text-2xl font-brandonGrotesque text-white uppercase pb-10 border-b border-b-[#494e58]">
                  {selectedCategoryChildren?.name}
                </p>
                <ul className="my-10">
                  {selectedCategoryId &&
                    selectedCategoryChildren?.children?.map(
                      (category, index) => (
                        <li key={category?.id}>
                          <a
                            href="#"
                            className={`block text-white transition delay-75 font-brandonGrotesque text-2xl ${
                              index !== 0 ? "my-7" : ""
                            } hover:text-blue-500`}
                          >
                            {category?.name}
                          </a>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
