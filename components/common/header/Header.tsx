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
  const { setCategories, setShowSideBar } = useHeaderContext();

  const heandleSidebar = (e: MouseEvent, category: Category) => {
    e.preventDefault();
    if (category) {
      setCategories((prev) => [...prev, category]);
      setShowSideBar(true);
    } else {
      console.log("Cliked for search");
    }
  };

  return (
    <header className="sticky top-0 flex-col flex bg-transparent w-full z-[400]">
      <div className="h-[82px] px-[4.44vw] flex flex-row justify-between items-center">
        <div className="bg-[#009fad]">
          <Image
            src="/images/logo/yeti.svg"
            width={110}
            height={42}
            alt="Yeti Logo"
          />
        </div>
        <Nav navItems={navItems} action={heandleSidebar} />

        <Nav navItems={cartItems} anchorClass="text-2xl" />
      </div>
      <Categories />
    </header>
  );
};

export default Header;
