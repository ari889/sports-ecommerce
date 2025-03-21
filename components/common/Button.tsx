"use client";
import Link from "next/link";
import React, { useState } from "react";

const Button = ({
  children,
  className,
  color = "#fff",
  hoveredColor = "#000",
  borderHeight = 2,
  type = "button",
  href = "#",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  hoveredColor?: string;
  borderHeight?: number;
  type?: "button" | "link";
  href?: string;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return type === "link" ? (
    <Link
      href={href}
      className={`mt-[1.25rem] font-bold table uppercase pb-[.25em] transition delay-75 whitespace-nowrap tracking-[.0625em] overflow-hidden relative group ${className}`}
      style={{ color: isHovered ? hoveredColor : color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        className={`w-full mt-1 absolute left-0 bottom-0 group-hover:left-full transition-all duration-300 ease-out`}
        style={{
          backgroundColor: isHovered ? hoveredColor : color,
          height: `${borderHeight}px`,
        }}
      ></span>
      <span
        className={`w-full block mt-1 absolute -left-full bottom-0 group-hover:left-0 transition-all duration-300 ease-in delay-300`}
        style={{
          backgroundColor: isHovered ? hoveredColor : color,
          height: `${borderHeight}px`,
        }}
      ></span>
    </Link>
  ) : (
    <button
      className={`mt-[1.25rem] font-bold uppercase pb-[.25em] transition delay-75 whitespace-nowrap tracking-[.0625em] overflow-hidden relative group ${className}`}
      style={{ color: isHovered ? hoveredColor : color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        className={`w-full mt-1 absolute left-0 bottom-0 group-hover:left-full transition-all duration-300 ease-out`}
        style={{
          backgroundColor: isHovered ? hoveredColor : color,
          height: `${borderHeight}px`,
        }}
      ></span>
      <span
        className={`w-full block mt-1 absolute -left-full bottom-0 group-hover:left-0 transition-all duration-300 ease-in delay-300`}
        style={{
          backgroundColor: isHovered ? hoveredColor : color,
          height: `${borderHeight}px`,
        }}
      ></span>
    </button>
  );
};

export default Button;
