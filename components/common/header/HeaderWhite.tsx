"use client";

import Image from "next/image";
import { FaRegQuestionCircle, FaRegUser } from "react-icons/fa";
import {
  IoCartOutline,
  IoLocationOutline,
  IoSearchSharp,
} from "react-icons/io5";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, MouseEvent } from "react";
import Nav from "./Nav";
import Categories from "./Categories";
import data from "@/data/Categories.json";
import { useHeaderContext } from "@/hooks/useHeaderContext";
import { Category } from "@/types/category.types";
import { HeaderElementType } from "@/types/header.types";
import Link from "next/link";

const navItems: HeaderElementType[] = [
  ...data,
  { id: 1, name: <IoSearchSharp />, isSearch: true },
];

const cartItems: HeaderElementType[] = [
  { id: 2, name: <FaRegQuestionCircle />, isLink: true, link: "/faq" },
  { id: 3, name: <IoLocationOutline />, isLink: true, link: "/location" },
  { id: 4, name: <FaRegUser />, isLink: true, link: "/login" },
  { id: 5, name: <IoCartOutline />, isLink: true, link: "/cart" },
];

const HeaderWhite = () => {
  const { showSideBar, setCategories, setShowSideBar } = useHeaderContext();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true); // Set scroll state when scrolling down
    } else {
      setScrolled(false); // Reset when scrolling up
    }
  });

  const handleSidebar = (e: MouseEvent, category: Category) => {
    e.preventDefault();
    console.log("Clicked...");
    if (category?.children?.length === 0) return;
    setCategories((prev) => [...prev, category]);
    setShowSideBar(true);
  };

  const handleOpenSidebar = (e: MouseEvent) => {
    e.preventDefault();
    setShowSideBar((prev) => !prev);
  };

  return (
    <>
      <motion.header
        className={`sticky top-0 left-0 w-full z-[400] transition-all duration-300 ease-out ${
          scrolled ? "backdrop-blur-lg bg-black/70" : "bg-white"
        }`}
        initial={{ height: 82, backgroundColor: "rgba(255, 255, 255, 1)" }}
        animate={{
          height: scrolled ? 65 : 82,
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 0.3)"
            : "rgba(255, 255, 255, 1)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="h-full px-[4.44vw] flex flex-row justify-between items-center">
          {/* Left Section */}
          <div className="flex flex-row items-center gap-5">
            {/* Sidebar Toggle Button */}
            <button
              onClick={handleOpenSidebar}
              className="xl:hidden flex flex-col items-center justify-center w-10 h-10"
            >
              <div
                className={`w-5 h-0.5 bg-black rounded-full transition-transform ${
                  showSideBar ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-black rounded-full my-1 transition-opacity ${
                  showSideBar ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-black rounded-full transition-transform ${
                  showSideBar ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </button>

            {/* Logo */}
            <Link href="/">
              {scrolled ? (
                <Image
                  src="/images/logo/Drais-logo-wt.png"
                  width={150}
                  height={45}
                  alt="Drais Bicycle"
                />
              ) : (
                <Image
                  src="/images/logo/Drais-logo-bk.png"
                  width={150}
                  height={45}
                  alt="Drais Bicycle"
                />
              )}
            </Link>
          </div>

          {/* Navigation */}
          <Nav
            navItems={navItems}
            action={handleSidebar}
            anchorClass={scrolled ? "text-white" : "text-black"}
          />
          <Nav
            navItems={cartItems}
            anchorClass={scrolled ? "text-white text-2xl" : "text-black text-2xl"}
          />

          {/* Mobile Cart Icon */}
          <div className="text-black text-2xl block xl:hidden">
            <IoCartOutline />
          </div>
        </div>
      </motion.header>
      <Categories />
    </>
  );
};

export default HeaderWhite;
