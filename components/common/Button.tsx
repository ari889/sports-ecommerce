import React from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`mt-[1.25rem] font-bold uppercase pb-[.25em] whitespace-nowrap tracking-[.0625em] overflow-hidden relative group ${className}`}
    >
      {children}
      <span className="h-[2px] w-full block bg-white mt-1 absolute left-0 bottom-0 group-hover:left-full transition-all duration-300 ease-out"></span>
      <span className="h-[2px] w-full block bg-white mt-1 absolute -left-full bottom-0 group-hover:left-0 transition-all duration-300 ease-in delay-300"></span>
    </button>
  );
};

export default Button;
