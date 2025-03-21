import Button from "@/components/common/Button";
import React from "react";

const Login = () => {
  return (
    <div className="py-[3.5rem] max-w-[calc(420px+3rem)] px-[1.5rem] mx-auto">
      <h2 className="text-[2.5rem] font-bold uppercase tracking-[.0625em] leading-[1.25] my-[2rem]">
        Login
      </h2>
      <p className="text-[#014955] text-[.875rem] fw-[500] mb-[1.5rem] p-[1rem] bg-[#e6eeee]">
        We’ve updated our website. If this your first time logging in, reset
        your password using the Forgot Password link below.
      </p>
      <form action="" className="flex items-end flex-col">
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
          <p className="text-[#8a0a0a] text-right text-[.75rem] mr-[1rem] block w-full">
            Please enter a valid email address.
          </p>
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
          <p className="text-[#8a0a0a] text-right text-[.75rem] mr-[1rem] block w-full">
            Please enter a valid password.
          </p>
        </div>
        <div className="flex justify-between items-center mt-[1rem] w-full">
          <div>
            <input type="checkbox" id="remember" className="hidden peer" />
            <label
              htmlFor="remember"
              className="relative pl-[2.25em] cursor-pointer text-[#222] text-[.875rem] font-bold uppercase tracking-[1.25] align-middle leading-[1.2] 
      before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-[1.5em] before:h-[1.5em] before:-translate-y-1/2 before:bg-white before:border-2 before:border-[#d8d8d8] before:rounded-sm before:flex before:items-center before:justify-center
      after:content-['x'] after:absolute after:left-[10px] after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rotate-0 after:text-white after:flex after:items-center after:justify-center
      after:transition-all after:duration-250 after:ease-out 
      peer-checked:after:scale-100 after:text-[12px] peer-checked:before:bg-[#009fad] peer-checked:before:border-[#009fad]"
            >
              Remember Me
            </label>
          </div>
          <Button
            className="text-black mt-0"
            color="#666"
            hoveredColor="#009fad"
            type="link"
            href="forgot-password"
          >
            Forgot Password
          </Button>
        </div>
        <button className="bg-[#111] text-[1.125rem] font-bold leading-[1.2] tracking-[.0625em] whitespace-nowrap w-full p-[calc(.75em+1px)2.5em] text-[#fffdfa] uppercase mt-[2.5rem]">
          Login
        </button>
      </form>
      <div className="w-full text-center">
        <Button
          className="mt-[4rem] text-[1.25rem] mx-auto"
          color="#666"
          borderHeight={3}
          hoveredColor="#009fad"
          type="link"
          href="/register"
        >
          Create A New Account
        </Button>
      </div>
    </div>
  );
};

export default Login;
