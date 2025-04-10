import Button from "@/components/common/Button";
import Image from "next/image";
import CartStock from "./CartStock";

const CartItem = () => {
  return (
    <li className="flex flex-col sm:flex-row justify-between items-stretch py-[2rem] gap-5">
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div className="min-w-[100px]">
          <Image
            src="/images/cycles/1.png"
            alt="Product 1"
            width={100}
            height={100}
            className="aspect-video w-full h-auto"
          />
        </div>
        <div className="w-full">
          <a
            href="#"
            className=" font-bold uppercase text-black leading-[1.25] tracking-[.0625em] break-words"
          >
            160E TE3 2025
          </a>
          <p className="break-words font-[.875rem] text-dark capitalize">
            SM , black , DT Swiss HXC 1501 30MM Carbon Wheelset
          </p>
          <p className="text-[#909090] leading-[2] capitalize">
            SKU: B25160ESMPBAX2TE387W0
          </p>
          <h3 className="text-black font-bold leading-[1.25] tracking-[.0625em] uppercase">
            $13,000.00
          </h3>
          <CartStock className="justify-start flex mt-3 lg:hidden" />
        </div>
      </div>
      <div className="text-left sm:text-right">
        <div className="flex flex-row justify-start sm:justify-end items-center gap-4">
          <CartStock className="justify-end hidden lg:flex" />
          <h2 className="text-[#111] uppercase font-bold leading-[1.25] tracking-[.0625em] text-[1.5rem]">
            $52,000.00
          </h2>
        </div>
        <Button
          className="text-[.75rem]"
          color="#666"
          hoveredColor="#009fad"
          type="button"
        >
          Remove
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
