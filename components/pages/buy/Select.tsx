"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Select = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false); // Close the dropdown
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative">
      <button
        className="flex flex-row items-stretch border border-[#d8d8d8] w-full cursor-pointer group"
        onClick={() => setIsVisible(!isVisible)}
        ref={buttonRef}
      >
        <div className="p-[1rem] flex flex-col gap-1 w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <span className="text-[1rem] text-left uppercase text-black font-bold tracking-[.0625em] leading-[1.25]">
                T3 X0 TRANSMISSION
              </span>
              <Image
                src="/images/buy/turq_logo.png"
                width={70}
                height={50}
                alt="Turquoise Logo"
              />
            </div>
            <span className="text-[1rem] font-bold uppercase tracking-[.0625em] leading-[1.25]">
              $8,600
            </span>
          </div>
          <p className="text-[.875rem] leading-[2] text-left">
            TURQ Carbon Frame, 120mm SID ULT 3P and SIDLUXE ULT 3p with Twistloc
            ULT, SRAM X0 AXS T-Type and LEVEL Silver Stealth 4P Brakes
          </p>
        </div>
        <div className="border-l border-l-[#d8d8d8] flex items-center justify-center transition delay-75 px-[.75rem] group-hover:bg-[#e6eeee]">
          <FaAngleDown className="h-6 w-6" />
        </div>
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            ref={dropdownRef}
            className="absolute top-[calc(100%+20px)] left-0 w-full max-h-[500px] overflow-y-auto border border-[#d8d8d8] bg-white shadow-lg z-50"
          >
            <ul>
              {Array(5)
                .fill({
                  name: "T3 X0 TRANSMISSION",
                  price: "$8,600",
                  description:
                    "TURQ Carbon Frame, 120mm SID ULT 3P and SIDLUXE ULT 3p with Twistloc ULT, SRAM X0 AXS T-Type and LEVEL Silver Stealth 4P Brakes",
                  image: "/images/buy/turq_logo.png",
                })
                .map((item, index) => (
                  <li
                    key={index}
                    className="p-[1rem] flex flex-col gap-1 bg-white w-full border-b border-b-[#d8d8d8] transition delay-75 hover:bg-[#e6eeee] cursor-pointer"
                  >
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row gap-2 items-center flex-wrap">
                        <span className="text-[1rem] text-left uppercase text-black font-bold tracking-[.0625em] leading-[1.25]">
                          {item.name}
                        </span>
                        <Image
                          src={item.image}
                          width={70}
                          height={50}
                          alt="Turquoise Logo"
                        />
                      </div>
                      <span className="text-[1rem] font-bold uppercase tracking-[.0625em] leading-[1.25]">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[.875rem] leading-[2] text-left">
                      {item.description}
                    </p>
                  </li>
                ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
