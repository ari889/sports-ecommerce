import React from "react";
import { TiMinus, TiPlus } from "react-icons/ti";

const CartStock = ({ className }: { className?: string }) => {
  return (
    <div className={`flex-row items-center gap-2 ${className}`}>
      <button className="text-black text-[.75rem] h-[1.5rem] w-[1.5rem] bg-[#f7f7f6] flex justify-center items-center">
        <TiMinus />
      </button>
      <p className="text-black text-[.75rem] font-bold">4</p>
      <button className="text-black text-[.75rem] h-[1.5rem] w-[1.5rem] bg-[#f7f7f6] flex justify-center items-center">
        <TiPlus />
      </button>
    </div>
  );
};

export default CartStock;
