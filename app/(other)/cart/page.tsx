import Button from "@/components/common/Button";
import CartItem from "@/components/pages/cart/CartItem";
import Image from "next/image";
import React from "react";
import { MdLockOutline } from "react-icons/md";

const CartPage = () => {
  const isEmpty = false;
  return (
    <div className="min-h-screen flex flex-col justify-between lg:flex-row">
      <div className="flex-1 px-[4.44vw]">
        <h2 className="my-[3rem] text-black uppercase text-[3.5rem] font-bold leading-[1.25] tracking-[.0625em]">
          Cart
        </h2>
        <p className="text-[#014955] text-[.875rem] fw-[500] mb-[1.5rem] p-[1rem] bg-[#e6eeee]">
          Free Ground Shipping For U.S. Orders $125+ (excludes bikes)
        </p>
        {isEmpty ? (
          <div className="aspect-video flex flex-col items-center justify-center">
            <h1 className="text-dark uppercase text-[1.125rem] font-bold leading-[1.25] tracking-[.0625em] mb-[2rem]">
              Your cart is currently empty
            </h1>
            <Button className="text-[#fffdfa] text-[1.125rem]">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <hr />
            <ul>
              <CartItem />
            </ul>
            <div className="flex-row justify-between gap-3 items-baseline py-[2.5rem] hidden lg:flex">
              <div>
                <h4 className="text-[1.5rem] font-bold uppercase leading-[1.25] tracking-[.0625em]">
                  Subtotal
                </h4>
                <p className="text-[#666] text-[.75rem] font-bold uppercase leading-[1.25] tracking-[.0625em]">
                  Excludes Tax and Shipping
                </p>
              </div>
              <h2 className="text-[#111] uppercase font-bold leading-[1.25] tracking-[.0625em] text-[1.5rem]">
                $52,000.00
              </h2>
            </div>
            <Button className="text-[#666] block lg:hidden text-[.75rem] text-center mx-auto mb-5 border-[#666]">
              Shipping & Returns
            </Button>
          </>
        )}
      </div>
      <div className="w-full lg:w-[500px] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/25 z-20 hidden lg:block"></div>
        <Image
          src="/images/cart/cart-bg.jpg"
          width={800}
          height={900}
          alt="Cart bg"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 hidden lg:block"
        />
        <div className="static lg:absolute bottom-0 right-0 w-full z-30 p-[4vw] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] lg:shadow-none">
          <div className="flex flex-row justify-between items-center mb-[.5rem]">
            <h4 className="text-[1.5rem] font-bold leading-[1.25] tracking-[.0625em] uppercase text-black lg:text-white">
              Subtotal
            </h4>
            <h5 className="text-[1.5rem] font-bold leading-[1.25] tracking-[.0625em] uppercase text-black lg:text-white">
              $52,000.00
            </h5>
          </div>
          <p className="uppercase text-black lg:text-white text-[.75rem] font-bold leading-[1.25] tracking-[.0625em]">
            Excludes Tax and Shipping
          </p>
          <button className="mt-[1.5rem] mb-[2rem] bg-[#009fad] text-white text-[1.125rem] font-bold tracking-[.0625em] leading-[1.2] uppercase whitespace-nowrap flex items-center justify-center text-center p-[calc(.75em+1px)2.5em] w-full transition delay-75 hover:bg-[#008894]">
            <MdLockOutline className="mr-2" />
            <span className="uppercase text-white whitespace-nowrap">
              Checkout
            </span>
          </button>
          <Button className="text-white text-[.75rem] whitespace-nowrap text-center table mt-16 mb-5 mx-auto">
            Shipping & Returns
          </Button>
          {/* <p className="uppercase  cursor-pointer font-bold leading-[1.25] tracking-[.0625em] whitespace-nowrap w-full text-center block mt-16 mb-5">
            Shipping & Returns
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
