"use client";

import Image from "next/image";
import { FaRegQuestionCircle, FaRegUser } from "react-icons/fa";
import {
  IoCartOutline,
  IoLocationOutline,
  IoSearchSharp,
} from "react-icons/io5";
import Nav from "./Nav";

const navItems: { id: number; name: string | JSX.Element }[] = [
  { id: 1, name: "Bikes" },
  { id: 1, name: "Apparel" },
  { id: 1, name: "Gear" },
  { id: 1, name: "Roots" },
  { id: 1, name: "Sale" },
  { id: 1, name: <IoSearchSharp /> },
];

const cartItems: { id: number; name: string | JSX.Element }[] = [
  { id: 1, name: <FaRegQuestionCircle /> },
  { id: 1, name: <IoLocationOutline /> },
  { id: 1, name: <FaRegUser /> },
  { id: 1, name: <IoCartOutline /> },
];

const Header = () => {
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
        <Nav navItems={navItems} />

        <Nav navItems={cartItems} anchorClass="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
