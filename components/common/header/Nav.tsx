"use client";
import { Category } from "@/types/category.types";
import { HeaderElementType } from "@/types/header.types";
import { motion } from "framer-motion";
import Link from "next/link";
import { MouseEvent, useState } from "react";

const Nav = ({
  navItems,
  anchorClass = "text-base",
  action = () => {},
}: {
  navItems: HeaderElementType[];
  anchorClass?: string;
  action?: (e: MouseEvent, category: Category) => void;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredWidth, setHoveredWidth] = useState<number>(0);
  const [hoveredLeft, setHoveredLeft] = useState<number>(0);
  const [previousHoveredIndex, setPreviousHoveredIndex] = useState<
    number | null
  >(null);

  const handleMouseEnter = (
    index: number,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    setPreviousHoveredIndex(hoveredIndex);
    setHoveredIndex(index);

    const target = event.currentTarget as HTMLElement;
    const textElement = target.querySelector("span");

    if (textElement) {
      const textWidth = textElement.offsetWidth;
      const middlePosition = target.offsetLeft + target.offsetWidth / 2;

      setHoveredWidth(textWidth);
      setHoveredLeft(middlePosition - textWidth / 2);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered index when mouse leaves
    setHoveredWidth(0); // Reset the width to 0
  };
  return (
    <div className="relative hidden xl:block">
      <ul className="flex flex-row justify-center items-center h-10">
        {navItems.map((item: HeaderElementType, index: number) => (
          <li key={item?.id} className="h-8 flex items-center text-center">
            {item?.isLink ? (
              <Link
                href={item?.link ?? "#"}
                className={`${anchorClass} uppercase font-bold px-3 lg:px-5 leading-none`}
                onMouseEnter={(event) => handleMouseEnter(index, event)}
                onMouseLeave={handleMouseLeave}
              >
                <span>{item?.name}</span> {/* Wrap text in <span> */}
              </Link>
            ) : (
              <a
                href="#"
                className={`${anchorClass} uppercase font-bold px-5 leading-none`}
                onMouseEnter={(event) => handleMouseEnter(index, event)}
                onMouseLeave={handleMouseLeave}
                onClick={(e: MouseEvent) => action(e, item as Category)}
              >
                <span>{item?.name}</span> {/* Wrap text in <span> */}
              </a>
            )}
          </li>
        ))}
      </ul>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-white"
        style={{
          width: hoveredWidth,
          left: hoveredLeft,
        }}
        initial={{
          width: 0,
          left: hoveredLeft,
        }}
        animate={{
          width: hoveredWidth,
          left: hoveredLeft,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          duration: 0.3,
          ease:
            previousHoveredIndex &&
            hoveredIndex &&
            previousHoveredIndex < hoveredIndex
              ? "easeOut"
              : "easeIn",
        }}
      />
    </div>
  );
};

export default Nav;
