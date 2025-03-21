import HeaderTransparent from "@/components/common/header/HeaderTransparent";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderTransparent />
      {children}
    </>
  );
};

export default HomeLayout;
