import Button from "@/components/common/Button";
import React from "react";

const Register = () => {
  return (
    <div className="py-[3.5rem] max-w-[calc(420px+3rem)] px-[1.5rem] mx-auto">
      <h2 className="text-[2.5rem] font-bold uppercase tracking-[.0625em] leading-[1.25] my-[2rem]">
        New Account
      </h2>
      <form action="" className="flex items-end flex-col">
        <div className="flex flex-row justify-between gap-4">
          <div className="flex flex-wrap justify-between w-full pb-[1.5rem] relative">
            <label
              htmlFor="firstName"
              className="text-[.75rem] uppercase font-bold tracking-[.0833em] inline-block pb-[.25em] cursor-pointer leading-[1em] text-[#909090] mb-[.25rem] ml-[1rem]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full block text-[1rem] py-[.75em] px-[1em] border border-[#8c8a7e] text-[#181817] focus:border-2 focus:border-[#009fad] focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap justify-between w-full pb-[1.5rem] relative">
            <label
              htmlFor="lastName"
              className="text-[.75rem] uppercase font-bold tracking-[.0833em] inline-block pb-[.25em] cursor-pointer leading-[1em] text-[#909090] mb-[.25rem] ml-[1rem]"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full block text-[1rem] py-[.75em] px-[1em] border border-[#8c8a7e] text-[#181817] focus:border-2 focus:border-[#009fad] focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full pb-[1.5rem] relative">
          <label
            htmlFor="email"
            className="text-[.75rem] uppercase font-bold tracking-[.0833em] inline-block pb-[.25em] cursor-pointer leading-[1em] text-[#909090] mb-[.25rem] ml-[1rem]"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full block text-[1rem] py-[.75em] px-[1em] border border-[#8c8a7e] text-[#181817] focus:border-2 focus:border-[#009fad] focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap justify-between w-full pb-[1.5rem] relative">
          <label
            htmlFor="password"
            className="text-[.75rem] uppercase font-bold tracking-[.0833em] inline-block pb-[.25em] cursor-pointer leading-[1em] text-[#909090] mb-[.25rem] ml-[1rem]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full block text-[1rem] py-[.75em] px-[1em] border border-[#8c8a7e] text-[#181817] focus:border-2 focus:border-[#009fad] focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap justify-between w-full pb-[1.5rem] relative">
          <label
            htmlFor="confirmPassword"
            className="text-[.75rem] uppercase font-bold tracking-[.0833em] inline-block pb-[.25em] cursor-pointer leading-[1em] text-[#909090] mb-[.25rem] ml-[1rem]"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full block text-[1rem] py-[.75em] px-[1em] border border-[#8c8a7e] text-[#181817] focus:border-2 focus:border-[#009fad] focus:outline-none"
          />
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-[1rem]">
          <div className="flex-1">
            <Button
              className="mt-0 text-[.875rem] mx-auto"
              color="#666"
              borderHeight={3}
              hoveredColor="#009fad"
              type="link"
              href="/register"
            >
              Return To Login
            </Button>
          </div>
          <button className="bg-[#111] text-[1.125rem] font-bold leading-[1.2] tracking-[.0625em] whitespace-nowrap w-[calc(50%-1rem)] p-[calc(.75em+1px)2.5em] text-[#fffdfa] uppercase">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
