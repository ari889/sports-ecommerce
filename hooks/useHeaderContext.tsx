import { useContext } from "react";
import HeaderContext from "@/context/HeaderContext";

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error(
      "useHeaderContext must be used within a HeaderContextProvider"
    );
  }
  return context;
}
