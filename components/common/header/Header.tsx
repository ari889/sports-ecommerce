"use client";

import Image from "next/image";
import { FaRegQuestionCircle, FaRegUser } from "react-icons/fa";
import {
  IoCartOutline,
  IoLocationOutline,
  IoSearchSharp,
} from "react-icons/io5";
import Nav from "./Nav";
import Categories from "./Categories";
import data from "@/data/Categories.json";
import { useHeaderContext } from "@/hooks/useHeaderContext";
import { Category } from "@/types/category.types";
import { HeaderElementType } from "@/types/header.types";
import { MouseEvent } from "react";

const navItems: HeaderElementType[] = [
  ...data,
  { id: 1, name: <IoSearchSharp />, isSearch: true },
];

const cartItems: HeaderElementType[] = [
  { id: 1, name: <FaRegQuestionCircle />, isLink: true, link: "/faq" },
  { id: 1, name: <IoLocationOutline />, isLink: true, link: "/faq" },
  { id: 1, name: <FaRegUser />, isLink: true, link: "/faq" },
  { id: 1, name: <IoCartOutline />, isLink: true, link: "/faq" },
];

const Header = () => {
  const { showSideBar, setCategories, setShowSideBar } = useHeaderContext();

  const heandleSidebar = (e: MouseEvent, category: Category) => {
    e.preventDefault();
    if (category) {
      setCategories((prev) => [...prev, category]);
      setShowSideBar(true);
    } else {
      console.log("Cliked for search");
    }
  };

  const handleOpenSidebar = (e: MouseEvent) => {
    e.preventDefault();

    setShowSideBar((prev) => !prev);
  };

  return (
    <header className="sticky top-0 flex-col flex bg-transparent w-full z-[400]">
      <div className="h-[82px] px-[4.44vw] flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-between gap-5">
          <button
            onClick={handleOpenSidebar}
            className="flex flex-col items-center justify-center w-10 h-10 block xl:hidden"
          >
            <div
              className={`w-5 h-0.5 bg-white rounded-full transition-transform ${
                showSideBar ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-white rounded-full my-1 transition-opacity ${
                showSideBar ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-white rounded-full transition-transform ${
                showSideBar ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
          <div className="bg-[#009fad]">
            <Image
              src="/images/logo/yeti.svg"
              width={110}
              height={42}
              alt="Yeti Logo"
            />
          </div>
        </div>
        <Nav navItems={navItems} action={heandleSidebar} />

        <Nav navItems={cartItems} anchorClass="text-2xl" />
        <div className="text-white text-2xl block xl:hidden">
          <IoCartOutline />
        </div>
      </div>
      <Categories />
    </header>
  );
};

export default Header;
