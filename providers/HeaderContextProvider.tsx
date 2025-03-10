"use client";
import { useState } from "react";
import HeaderContext from "@/context/HeaderContext";
import { Category } from "@/types/category.types";

export default function HeaderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <HeaderContext.Provider
      value={{ categories, setCategories, showSideBar, setShowSideBar }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
