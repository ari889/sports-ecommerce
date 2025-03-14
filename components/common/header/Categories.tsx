"use client";
import { useHeaderContext } from "@/hooks/useHeaderContext";
import PrimaryMenu from "./PrimaryMenu";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Categories = () => {
  const { showSideBar, setShowSideBar } = useHeaderContext();
  return (
    <AnimatePresence>
      {showSideBar && (
        <motion.div
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          exit={{ opacity: 0 }} // Fade out
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-black/40 flex flex-row z-50"
          onClick={() => setShowSideBar(false)}
        >
          <PrimaryMenu />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Categories;
