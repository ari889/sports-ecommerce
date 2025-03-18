import HeaderWhite from "@/components/common/header/HeaderWhite";
import React from "react";

const OtherLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderWhite />
      {children}
    </>
  );
};

export default OtherLayout;
