"use client";
import { Category } from "@/types/category.types";
import { createContext, Dispatch, SetStateAction } from "react";

// Define the shape of the context
interface HeaderContextType {
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
}

// Create context with an undefined default value
const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export default HeaderContext;
