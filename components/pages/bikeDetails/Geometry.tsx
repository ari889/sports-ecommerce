"use client";
import Image from "next/image";
import React, { useState } from "react";

const Geometry = () => {
  const [checked, isChecked] = useState<boolean>(false);
  return (
    <>
      <div className="py-[5rem] mb-[7rem]">
        <div className="px-[4.44vw]">
          <h2 className="text-black uppercase text-[3.9vw] font-bold leading-[1.5em] tracking-[.2em] mb-[2rem]">
            Geometry
          </h2>
          <div className="flex flex-row items-center text-[.75rem] uppercase text-black font-bold leading-[1.25rem]">
            in
            <label className="flex h-[1rem] w-[2rem] mx-[.5rem] relative">
              <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={(e) => isChecked(e.target.checked)}
              />
              <span
                className={`absolute top-0 left-0 w-full h-full bg-[#e6eeee] transition-all duration-250 ease-out before:bg-[#014955] before:content-[''] before:absolte before:bottom-0 before:h-[1rem] before:block before:left-0 before:w-[1rem] before:transform before:transition-all before:duration-250 before:ease-out ${
                  checked ? "before:translate-x-[1rem]" : "before:translate-x-0"
                }`}
              ></span>
            </label>
            mm
          </div>
          <div className="flex flex-row justify-between relative">
            <div className="flex-1">
              <Image
                src="/images/details/banner-5.jpg"
                width={500}
                height={500}
                alt="Banner 5"
                className="object-fit aspect-video w-full"
              />
            </div>
            <div className="flex-1">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="pl-[1rem] py-[1.125rem] px-[.5rem] text-left whitespace-nowrap"
                    ></th>
                    <th className="text-center text-black uppercase py-[1.125rem] px-[.5rem] tracking-[.0625em] leading-[1.25]">
                      XS
                    </th>
                    <th className="text-center text-black uppercase py-[1.125rem] px-[.5rem] tracking-[.0625em] leading-[1.25]">
                      SM
                    </th>
                    <th className="text-center text-black uppercase py-[1.125rem] px-[.5rem] tracking-[.0625em] leading-[1.25]">
                      MD
                    </th>
                    <th className="text-center text-black uppercase py-[1.125rem] px-[.5rem] tracking-[.0625em] leading-[1.25]">
                      LG
                    </th>
                    <th className="text-center text-black uppercase py-[1.125rem] px-[.5rem] tracking-[.0625em] leading-[1.25]">
                      XL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#f7f7f6] group hover:bg-[#e6eeee]">
                    <td className="py-[1.125rem] px-[0.5rem] pl-[1rem] w-[2.75rem]">
                      <span className="w-[1.25rem] h-[1.25rem] tracking-[.0625em] rounded-full flex justify-center items-center uppercase font-bold bg-[#909090] group-hover:bg-[#014955] transition delay-75 text-white text-[.75rem]">
                        A
                      </span>
                    </td>
                    <td className="text-[.75rem] font-bold uppercase tracking-[.0625em] leading-[1.25] w-[140px] py-[1.125rem] px-[.5rem]">
                      SEAT TUBE LENGTH
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                  </tr>
                  <tr className="group hover:bg-[#e6eeee]">
                    <td className="py-[1.125rem]  px-[0.5rem] pl-[1rem] w-[2.75rem]">
                      <span className="w-[1.25rem] h-[1.25rem] tracking-[.0625em] rounded-full flex justify-center items-center uppercase font-bold bg-[#909090] group-hover:bg-[#014955] transition delay-75 text-white text-[.75rem]">
                        A
                      </span>
                    </td>
                    <td className="text-[.75rem] font-bold uppercase tracking-[.0625em] leading-[1.25] w-[140px] py-[1.125rem] px-[.5rem]">
                      SEAT TUBE LENGTH
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                    <td className="text-[.875rem] text-[#666] calc(20%-2.75rem-140px) uppercase tracking-[.0625em] leading-[1.25] py-[1.125rem] px-[.5rem] text-center">
                      12.5
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[4.44vw]">
        <h2 className="text-[2.5rem] text-black uppercase leading-[1.25] tracking-[.0625em] mb-[2rem] font-bold">
          Fit Guide
        </h2>
        <ul>
          <li className="flex items-end gap-2 my-[1.25rem]">
            <div className="w-[5rem] font-bold tracking-[.0625em] leading-[1.25] uppercase text-[.875rem]">
              x-small
            </div>
            <div className="relative w-full after:bg-[#f7f7f6] after:content-[''] after:block after:bottom-0 after:h-[.625rem] after:absolute after:w-full z-[9]">
              <div
                className="flex flex-col relative text-center h-[38px] z-10"
                style={{
                  width: "26.7857%",
                  marginLeft: "0%",
                }}
              >
                <div className="text-[.875rem] text-[#222] absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap leading-[2]">
                  4’10” - 5’3”
                </div>
                <div className="bg-[#014955] bottom-0 absolute w-full h-[.625rem]"></div>
              </div>
            </div>
          </li>
          <li className="flex items-end gap-2 my-[1.25rem]">
            <div className="w-[5rem] font-bold tracking-[.0625em] leading-[1.25] uppercase text-[.875rem]">
              Small
            </div>
            <div className="relative w-full after:bg-[#f7f7f6] after:content-[''] after:block after:bottom-0 after:h-[.625rem] after:absolute after:w-full z-[9]">
              <div
                className="flex flex-col relative text-center h-[38px] z-10"
                style={{
                  width: "26.7857%",
                  marginLeft: "17.8571%",
                }}
              >
                <div className="text-[.875rem] text-[#222] absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap leading-[2]">
                  4’10” - 5’3”
                </div>
                <div className="bg-[#014955] bottom-0 absolute w-full h-[.625rem]"></div>
              </div>
            </div>
          </li>
          <li className="flex items-end gap-2 my-[1.25rem]">
            <div className="w-[5rem] font-bold tracking-[.0625em] leading-[1.25] uppercase text-[.875rem]">
              Medium
            </div>
            <div className="relative w-full after:bg-[#f7f7f6] after:content-[''] after:block after:bottom-0 after:h-[.625rem] after:absolute after:w-full z-[9]">
              <div
                className="flex flex-col relative text-center h-[38px] z-10"
                style={{
                  width: "26.7857%",
                  marginLeft: "35.7143%",
                }}
              >
                <div className="text-[.875rem] text-[#222] absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap leading-[2]">
                  4’10” - 5’3”
                </div>
                <div className="bg-[#014955] bottom-0 absolute w-full h-[.625rem]"></div>
              </div>
            </div>
          </li>
          <li className="flex items-end gap-2 my-[1.25rem]">
            <div className="w-[5rem] font-bold tracking-[.0625em] leading-[1.25] uppercase text-[.875rem]">
              Large
            </div>
            <div className="relative w-full after:bg-[#f7f7f6] after:content-[''] after:block after:bottom-0 after:h-[.625rem] after:absolute after:w-full z-[9]">
              <div
                className="flex flex-col relative text-center h-[38px] z-10"
                style={{
                  width: "23.2143%",
                  marginLeft: "58.9286%",
                }}
              >
                <div className="text-[.875rem] text-[#222] absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap leading-[2]">
                  4’10” - 5’3”
                </div>
                <div className="bg-[#014955] bottom-0 absolute w-full h-[.625rem]"></div>
              </div>
            </div>
          </li>
          <li className="flex items-end gap-2 my-[1.25rem]">
            <div className="w-[5rem] font-bold tracking-[.0625em] leading-[1.25] uppercase text-[.875rem]">
              x-large
            </div>
            <div className="relative w-full after:bg-[#f7f7f6] after:content-[''] after:block after:bottom-0 after:h-[.625rem] after:absolute after:w-full z-[9]">
              <div
                className="flex flex-col relative text-center h-[38px] z-10"
                style={{
                  width: "28.5714%",
                  marginLeft: "71.4286%",
                }}
              >
                <div className="text-[.875rem] text-[#222] absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap leading-[2]">
                  4’10” - 5’3”
                </div>
                <div className="bg-[#014955] bottom-0 absolute w-full h-[.625rem]"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Geometry;
