"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Select from "./Select";
import Button from "@/components/common/Button";

const RightSidebar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <div
      className={`min-w-[600px] max-w-[600px] h-screen sticky transition-all delay-75 ${
        scrolled ? "top-[65px]" : "top-[82px]"
      } overflow-y-auto py-[2.5rem] px-[4.44vw]`}
    >
      <h2 className="font-bold uppercase text-[1.25rem] mb-[.75rem] text-black tracking-[.0625em] leadin-[1.25]">
        Select A Kit
      </h2>
      <Select />
      <div className="flex justify-end">
        <Button
          className="text-[.875rem] mt-[.75rem] cursor-pointer"
          color="#666"
          hoveredColor="#009fad"
        >
          Kit Details
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="uppercase font-bold text-black tracking-[.0625em] leading-[1.5] mb-[.75rem]">
            Color
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 justify-left items-center mt-4">
              <div className="flex justify-center items-center w-[2.625rem] h-[2.625rem] rounded-full cursor-pointer transition delay-75 bg-[#e6eeee]">
                <div
                  className={`w-[1.5rem] h-[1.5rem] rounded-full bg-black`}
                ></div>
              </div>
              <div className="flex justify-center items-center w-[2.625rem] h-[2.625rem] rounded-full cursor-pointer transition delay-75 hover:bg-gray-200">
                <div
                  className={`w-[1.5rem] h-[1.5rem] rounded-full bg-red-500`}
                ></div>
              </div>
              <div className="flex justify-center items-center w-[2.625rem] h-[2.625rem] rounded-full cursor-pointer transition delay-75 hover:bg-gray-200">
                <div
                  className={`w-[1.5rem] h-[1.5rem] rounded-full bg-blue-500`}
                ></div>
              </div>
            </div>
            <p className="text-[#666] block text-[.875rem] tracking-[.0625em] leading-[1.25] text-right uppercase whitespace-nowrap font-bold">
              turquoise
            </p>
          </div>
        </div>
        <div>
          <p className="uppercase font-bold text-black tracking-[.0625em] leading-[1.5] mb-[.75rem]">
            Size
          </p>
          <div className="flex flex-row justify-between items-center">
            <ul className="flex flex-row gap-1">
              <li>
                <input
                  type="radio"
                  name="variation"
                  id="variation1"
                  className="hidden peer"
                />
                <label
                  htmlFor="variation1"
                  className="rounded-full flex justify-center items-center font-bold text-[.875rem] h-[2.625rem] tracking-[.0625em] leading-[1.25] cursor-pointer transition delay-75 uppercase w-[2.625rem] border-2 border-transparent hover:border-black peer-checked:border-black"
                >
                  M
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="variation"
                  id="variation2"
                  className="hidden peer"
                />
                <label
                  htmlFor="variation2"
                  className="rounded-full flex justify-center items-center font-bold text-[.875rem] h-[2.625rem] tracking-[.0625em] leading-[1.25] cursor-pointer transition delay-75 uppercase w-[2.625rem] border-2 border-transparent hover:border-black peer-checked:border-black"
                >
                  L
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="variation"
                  id="variation3"
                  className="hidden peer"
                />
                <label
                  htmlFor="variation3"
                  className="rounded-full flex justify-center items-center font-bold text-[.875rem] h-[2.625rem] tracking-[.0625em] leading-[1.25] cursor-pointer transition delay-75 uppercase w-[2.625rem] border-2 border-transparent hover:border-black peer-checked:border-black"
                >
                  XL
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="variation"
                  id="variation4"
                  className="hidden peer"
                />
                <label
                  htmlFor="variation4"
                  className="rounded-full flex justify-center items-center font-bold text-[.875rem] h-[2.625rem] tracking-[.0625em] leading-[1.25] cursor-pointer transition delay-75 uppercase w-[2.625rem] border-2 border-transparent hover:border-black peer-checked:border-black"
                >
                  XXL
                </label>
              </li>
            </ul>
            <Button
              className="text-[.875rem] mt-[.75rem] cursor-pointer"
              color="#666"
              hoveredColor="#009fad"
            >
              Sizing Guide
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-baseline relative">
          <input type="checkbox" id="remember" className="hidden peer" />
          <label
            htmlFor="remember"
            className="items-center indent-[-9999px] w-[30px] flex font-normal h-[30px] pl-[46px] text-[.875rem] tracking-[.0625em] leading-[1.25] cursor-pointer before:w-[30px] before:h-[30px] before:bg-white before:border-2 before:border-[#d8d8d8] before:content-[''] before:block before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 after:text-[1.6rem] after:font-bold after:left-[4px] after:top-[calc(50%-6px)] after:text-white after:content-['x'] after:h-[1.4rem] after:leading-[1] after:absolute after:text-center after:w-[1.4rem] after:opacity-0 after:block after:transform after:rotate-0 after:scale-0 after:translate-y-0 after:transition-all after:duration-250 after:ease-out peer-checked:after:scale-100 peer-checked:after:opacity-100 peer-checked:after:translate-y-[-50%] peer-checked:after:rotate-0 peer-checked:before:bg-[#009fad] peer-checked:before:border-[#009fad]"
          >
            I agree that this transaction is subject to the View terms and
            conditions.
          </label>
          <div className="text-[#222] text-[.875rem]">
            <p className="cursor-pointer">
              I agree that this transaction is subject to the
            </p>
            <button className="underline">View terms and conditions</button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center my-[1.5rem]">
          <p className="text-[1.25rem] uppercase text-black font-bold tracking-[.0625em] leading-[1.25]">
            Total:
          </p>
          <p className="text-[1.25rem] uppercase text-black font-bold tracking-[.0625em] leading-[1.25]">
            $13,900
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5">
        <button className="bg-[#009fad] uppercase text-white text-[1.125rem] font-bold uppercaser tracking-[.0625em] leading-[1.2] whitespace-nowrap w-full text-center p-[calc(.75em+1px)2.5em] transition delay-75 hover:bg-[#008894]">
          Add to Cart
        </button>
        <p className="text-[.875rem] leading-[1.5] text-center">
          Starting at $482/mo or 0% APR with Affirm{" "}
          <button className="font-bold underline">
            Check your purchasing power
          </button>
        </p>
        <button className="bg-black uppercase text-white text-[1.125rem] font-bold uppercaser tracking-[.0625em] leading-[1.2] whitespace-nowrap w-full text-center p-[calc(.75em+1px)2.5em]">
          Find A dealer
        </button>
        <p className="text-[#666] text-[11px] leading-[12px]">
          Shop Locally in Dhaka, Dhaka Division{" "}
          <button className="underline font-bold">Change</button>
        </p>
        <p className="text-[.875rem] py-[15px] px-[20px] bg-[#eee]">
          There are no Yeti Cycles dealers stocking this specific configuration
          within 300 miles. Select the FIND A DEALER button to view what is
          available
        </p>
        <p className="text-[rgb(112,112,112)] text-center text-[11px] block leading-[12px]">
          show all local options
        </p>
        <div className="flex flex-row justify-center items-center gap-5">
          <Button
            className="text-[.875rem] mt-[.75rem] cursor-pointer"
            color="#666"
            hoveredColor="#009fad"
          >
            Lifetime Warranty
          </Button>
          <Button
            className="text-[.875rem] mt-[.75rem] cursor-pointer"
            color="#666"
            hoveredColor="#009fad"
          >
            Shipping & Returns
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
