import Image from "next/image";
import React from "react";
import { MdLockOutline } from "react-icons/md";
import { TiMinus, TiPlus } from "react-icons/ti";

const CartPage = () => {
  const isEmpty = true;
  return (
    <div className="h-screen flex flex-row">
      <div className="w-full px-[4.44vw]">
        <h2 className="my-[3rem] text-black uppercase text-[3.5rem] font-bold leading-[1.25] tracking-[.0625em]">
          Cart
        </h2>
        <p className="text-[#014955] font-[.875rem] fw-[500] mb-[1.5rem] p-[1rem] bg-[#e6eeee]">
          Free Ground Shipping For U.S. Orders $125+ (excludes bikes)
        </p>
        {isEmpty ? (
          <div className="aspect-video flex flex-col items-center justify-center">
            <h1 className="text-dark uppercase text-[1.125rem] font-bold leading-[1.25] tracking-[.0625em] mb-[2rem]">
              Your cart is currently empty
            </h1>
            <a
              href="#"
              className="bg-black text-[#fffdfa] uppercase font-bold text-[1.125rem] leading-[1.2] tracking-[.0625em] whitespace-nowrap text-center p-[calc(.75em+1px)2.5em]"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <hr />
            <ul>
              <li className="flex flex-row items-stretch py-[2rem] gap-5">
                <div>
                  <Image
                    src="/images/cycles/1.png"
                    alt="Product 1"
                    width={100}
                    height={100}
                    className="aspect-square w-full h-auto"
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
                </div>
                <div className="text-right">
                  <div className="flex fles-row justify-end items-center gap-4">
                    <div className="flex flex-row justify-end items-center gap-2">
                      <button className="text-black text-[.75rem] h-[1.5rem] w-[1.5rem] bg-[#f7f7f6] flex justify-center items-center">
                        <TiMinus />
                      </button>
                      <p className="text-black text-[.75rem] font-bold">4</p>
                      <button className="text-black text-[.75rem] h-[1.5rem] w-[1.5rem] bg-[#f7f7f6] flex justify-center items-center">
                        <TiPlus />
                      </button>
                    </div>
                    <h2 className="text-[#111] uppercase font-bold leading-[1.25] tracking-[.0625em] text-[1.5rem]">
                      $52,000.00
                    </h2>
                  </div>
                  <button className="uppercase text-[#666] cursor-pointer font-bold leading-[1.25] tracking-[.0625em] whitespace-nowrap text-[.75rem]">
                    Remove
                  </button>
                </div>
              </li>
            </ul>
            <div className="flex flex-row justify-between items-baseline py-[2.5rem]">
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
          </>
        )}
      </div>
      <div className="w-[700px] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/25 z-20"></div>
        <Image
          src="/images/cart/cart-bg.jpg"
          width={800}
          height={900}
          alt="Cart bg"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />
        <div className="absolute bottom-[4rem] right-[4rem] w-[calc(100%-8rem)] z-30">
          <div className="flex flex-row justify-between items-center mb-[.5rem]">
            <h4 className="text-[1.5rem] font-bold leading-[1.25] tracking-[.0625em] uppercase text-white">
              Subtotal
            </h4>
            <h5 className="text-[1.5rem] font-bold leading-[1.25] tracking-[.0625em] uppercase text-white">
              $52,000.00
            </h5>
          </div>
          <p className="uppercase text-white text-[.75rem] font-bold leading-[1.25] tracking-[.0625em]">
            Excludes Tax and Shipping
          </p>
          <button className="mt-[1.5rem] mb-[2rem] bg-[#009fad] text-white text-[1.125rem] font-bold tracking-[.0625em] leading-[1.2] uppercase whitespace-nowrap flex items-center justify-center text-center p-[calc(.75em+1px)2.5em] w-full transition delay-75 hover:bg-[#008894]">
            <MdLockOutline className="mr-2" />
            <span className="uppercase text-white whitespace-nowrap">
              Checkout
            </span>
          </button>
          <p className="uppercase text-white text-[.75rem] cursor-pointer font-bold leading-[1.25] tracking-[.0625em] whitespace-nowrap w-full text-center block mt-16 mb-5">
            Shipping & Returns
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
