"use client";

import Image from "next/image";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Categories from "./Categories";
import { useHeaderContext } from "@/hooks/useHeaderContext";

const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { showSideBar, setShowSideBar } = useHeaderContext();

  const handleShowSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  const handleOpenSidebar = (e: MouseEvent) => {
    e.preventDefault();

    setShowSideBar((prev) => !prev);
  };

  return (
    <header className="container flex flex-row-reverse lg:flex-row items-center">
      <button
        onClick={handleOpenSidebar}
        className="flex flex-col items-center justify-center w-10 h-10"
      >
        <div
          className={`w-5 h-0.5 bg-[#1a1a1a] rounded-full transition-transform ${
            showSideBar ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-5 h-0.5 bg-[#1a1a1a] rounded-full my-1 transition-opacity ${
            showSideBar ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-5 h-0.5 bg-[#1a1a1a] rounded-full transition-transform ${
            showSideBar ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      <div className="flex flex-row justify-between items-center w-full">
        <Image
          src="/images/logo/logo.svg"
          alt="Logo"
          width={150}
          height={70}
          className="px-2.5 py-4"
        />
        <div className="flex flex-row justify-end md:justify-between items-center relative w-full h-12">
          <ul className="hidden flex-row justify-center items-center mx-auto md:flex">
            <li className="font-brandonGrotesque uppercase font-bold text-sm leading-5 px-2.5 py-4 border-b border-b-transparent transition delay-75 cursor-pointer hover:border-b-[#008ae6]">
              Bike
            </li>
            <li className="font-brandonGrotesque uppercase font-bold text-sm leading-5 px-2.5 py-4 border-b border-b-transparent transition delay-75 cursor-pointer hover:border-b-[#008ae6]">
              Ski
            </li>
            <li className="font-brandonGrotesque uppercase font-bold text-sm leading-5 px-2.5 py-4 border-b border-b-transparent transition delay-75 cursor-pointer hover:border-b-[#008ae6]">
              Running
            </li>
            <li className="font-brandonGrotesque uppercase font-bold text-sm leading-5 px-2.5 py-4 border-b border-b-transparent transition delay-75 cursor-pointer hover:border-b-[#008ae6]">
              Moto
            </li>
            <li className="font-brandonGrotesque uppercase font-bold text-sm leading-5 px-2.5 py-4 border-b border-b-transparent transition delay-75 cursor-pointer hover:border-b-[#008ae6]">
              Apparel & Equipment
            </li>
            <li className="font-brandonGrotesque uppercase font-bold text-sm leading-5 px-2.5 py-4 border-b border-b-transparent transition delay-75 cursor-pointer hover:border-b-[#008ae6]">
              Travel
            </li>
            <li className="font-brandonGrotesque uppercase font-bold text-sm leading-5 px-2.5 py-4 border-b border-b-transparent transition delay-75 cursor-pointer hover:border-b-[#008ae6]">
              Universe
            </li>
          </ul>
          <button className="cursor-pointer" onClick={handleShowSearch}>
            <CiSearch className="text-xl" />
          </button>
          <form
            ref={formRef}
            className={`absolute top-0 right-0 h-full bg-white border border-[#b3b3b3] transition-all duration-300 ease-in-out flex items-center z-10 ${
              showSearch
                ? "w-[calc(100%+150px)] sm:w-full opacity-100 scale-x-100"
                : "w-0 opacity-0 scale-x-0"
            }`}
            style={{
              transformOrigin: "right",
              transition:
                "transform 0.3s ease-in-out, opacity 0.3s ease-in-out, width 0.3s ease-in-out",
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <CiSearch className="text-xl" />
            </div>
            <input
              type="text"
              placeholder="I'm Looking for"
              className="w-full h-full focus:outline-none py-2 text-base"
            />
            <button
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
              onClick={handleShowSearch}
            >
              <IoMdClose className="text-xl" />
            </button>
          </form>
        </div>
      </div>
      <Categories />
    </header>
  );
};

export default Header;
