"use client";
import { motion } from "framer-motion";
import { MouseEvent, useState } from "react";

const Nav = ({
  navItems,
  anchorClass = "text-base",
}: {
  navItems: { id: number; name: string | JSX.Element }[];
  anchorClass?: string;
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
    <div className="relative">
      <ul className="flex flex-row justify-center items-center h-10">
        {navItems.map(
          (item: { id: number; name: string | JSX.Element }, index: number) => (
            <li key={item?.id} className="h-8 flex items-center">
              <a
                href="#"
                className={`text-white ${anchorClass} uppercase font-bold px-5 leading-none`}
                onMouseEnter={(event) => handleMouseEnter(index, event)}
                onMouseLeave={handleMouseLeave}
              >
                <span>{item?.name}</span> {/* Wrap text in <span> */}
              </a>
            </li>
          )
        )}
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
