"use client";
import { useHeaderContext } from "@/hooks/useHeaderContext";
import PrimaryMenu from "./PrimaryMenu";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { MouseEvent } from "react";

const Categories = () => {
  const { categories, showSideBar, setShowSideBar, setCategories } =
    useHeaderContext();

  const handleCloseSidebar = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowSideBar(false);
    setCategories([]);
  };

  return (
    <AnimatePresence>
      {showSideBar && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-black/40 flex flex-row z-50"
          onClick={handleCloseSidebar}
        >
          <PrimaryMenu
            closeSidebar={handleCloseSidebar}
            categories={categories}
            setCategories={setCategories}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Categories;
