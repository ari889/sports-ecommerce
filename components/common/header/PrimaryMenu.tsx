import Image from "next/image";
import React, { MouseEvent } from "react";
import { IoMdClose } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import data from "@/data/Categories.json";
import SubMenu from "./SubMenu";
import { Category } from "@/types/category.types";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrimaryMenu({
  categories,
  setCategories,
  closeSidebar,
}: {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  closeSidebar: (e: MouseEvent) => void;
}) {
  const selectedCategory = categories[0];

  const handleSelectedCategory = (
    e: MouseEvent,
    category: Category,
    index: number
  ) => {
    if (category?.children?.length > 0) {
      e.preventDefault();
      e.stopPropagation();

      setCategories((prev: Category[]) => {
        const updatedCategories = [...prev];
        updatedCategories[index] = category;
        return updatedCategories.slice(0, index + 1);
      });
    }
  };

  const handleBackButton = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (categories?.length === 0) {
      setCategories([]);
    } else {
      setCategories((prev: Category[]) => prev.slice(0, prev.length - 1));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-row items-stretch"
    >
      <div className="bg-[#31343b] h-full w-[calc(320px+16px*2+64px)] relative z-20">
        <div className="py-6 px-3 gap-7">
          <div className="flex flex-row items-center gap-5">
            <button
              className="text-[#b0b3b8] text-xl transition delay-75 w-10 h-10 flex items-center justify-center rounded-md bg-transparent hover:bg-[#494e58] hover:text-white"
              onClick={closeSidebar}
            >
              <IoMdClose />
            </button>
            <Image
              src="/images/logo/Drais-logo-wt.png"
              alt="Logo"
              width={150}
              height={100}
            />
          </div>
          <div className="mt-16 flex flex-row items-baseline gap-5">
            <button
              className={`text-[#b0b3b8] text-xl transition delay-75 w-10 h-10 flex items-center justify-center rounded-md bg-transparent ${
                selectedCategory
                  ? "opacity-1 cursor-pointer pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } hover:bg-[#494e58] hover:text-white`}
              onClick={handleBackButton}
            >
              <IoArrowBack />
            </button>
            <div className="relative w-full overflow-hidden">
              {/* Primary Menu */}
              <ul className="mb-10">
                {data?.map((category: Category, index: number) => (
                  <li key={category?.id}>
                    <Link
                      href="/"
                      className={`block text-white transition delay-75 uppercase font-brandonGrotesque text-2xl ${
                        index !== 0 ? "my-7" : ""
                      } hover:text-blue-500`}
                      onClick={(e) => handleSelectedCategory(e, category, 0)}
                    >
                      {category?.name}
                    </Link>
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
              {/* Secondary Menu */}
              <AnimatePresence>
                {selectedCategory && (
                  <div
                    className={`absolute top-0 w-full h-full z-20 bg-[#31343b]`}
                  >
                    <motion.div
                      initial={{ x: "-100%" }} // Start from off-screen (left)
                      animate={{ x: selectedCategory ? "0%" : "-100%" }} // Slide in or out based on selectedCategory
                      exit={{ x: "-100%" }} // Exit by sliding out to the left
                      transition={{ duration: 0.3, ease: "easeInOut" }} // Set the transition duration and easing
                    >
                      <p className="text-2xl font-brandonGrotesque text-white uppercase pb-10 border-b border-b-[#494e58]">
                        {selectedCategory?.name}
                      </p>
                      <ul className="my-10">
                        {selectedCategory &&
                          selectedCategory?.children?.map((category, index) => (
                            <li key={category?.id}>
                              <Link
                                href="/"
                                className={`block text-white transition delay-75 font-brandonGrotesque text-2xl ${
                                  index !== 0 ? "my-7" : ""
                                } hover:text-blue-500`}
                                onClick={(e) =>
                                  handleSelectedCategory(e, category, 1)
                                }
                              >
                                {category?.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Menu */}
      <AnimatePresence mode="popLayout">
        {categories?.length > 1 &&
          categories
            ?.slice(1, categories?.length)
            ?.map((category: Category, index: number) => (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-[#31343b] h-full w-[calc(320px+16px*2+64px)] border-l border-l-[#494e58]"
                key={category?.id}
              >
                <SubMenu
                  selectedSubCategory={category}
                  handleSelectedSubCategory={handleSelectedCategory}
                  index={index}
                />
              </motion.div>
            ))}
      </AnimatePresence>
    </motion.div>
  );
}
