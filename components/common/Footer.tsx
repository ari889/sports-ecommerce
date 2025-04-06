import footer from "@/data/Footer.json";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaRegEnvelope,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[9rem] pb-[3.5rem] bg-[#111] text-[#909090] text-[.875rem]">
      <nav className="flex flex-col gap-5 justify-center px-[4.44vw]">
        <div className="flex flex-col lg:flex-row justify-between items-stretch">
          <div className="flex flex-col sm:flex-row justify-between items-baseline gap-6">
            <ul className="flex flex-col gap-5">
              {footer?.slice(0, 6)?.map((item) => (
                <li key={item?.id}>
                  <a
                    href="#"
                    className="transition delay-75 hover:text-[#009fad]"
                  >
                    {item?.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-5">
              {footer?.slice(6, 6 * 2)?.map((item) => (
                <li key={item?.id}>
                  <a
                    href="#"
                    className="transition delay-75 hover:text-[#009fad]"
                  >
                    {item?.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-5">
              {footer?.slice(6 * 2, 6 * 3)?.map((item) => (
                <li key={item?.id}>
                  <a
                    href="#"
                    className="transition delay-75 hover:text-[#009fad]"
                  >
                    {item?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end items-stretch mt-10 lg:mt-0">
            <p className="flex flex-row align-center mb-10 lg:mb-0">
              <Image
                src="/images/usa.jpg"
                width={30}
                height={20}
                alt="Us"
                className="mr-2 object-cover"
              />
              English
            </p>
            <div className="relative mt-auto min-w-full sm:min-w-[300px] group">
              <input
                type="text"
                className="px-3 py-2 bg-transparent focus:outline-none border-b-2 transition w-full delay-75 border-[#666] focus:border-white text-white placeholder:uppercase placeholder:font-bold placeholder:text-base"
                placeholder="Newsletter sign up"
              />
              <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-[#666] transition-colors group-focus-within:text-white" />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col sm:flex-row justify-between items-baseline px-[4.44vw] mt-24">
        <div className="sm:w-auto w-full">
          <p className="sm:text-left text-center">
            © Drais Bicycles {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <ul className="flex flex-row items-center justify-center sm:justify-start gap-4 mt-7">
            <li>
              <a href="#" className="transition delay-75 hover:text-[#009fad]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-75 hover:text-[#009fad]">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-75 hover:text-[#009fad]">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-row gap-7 justify-center sm:justify-end text-2xl mt-10 sm:w-auto w-full lg:mt-0">
          <li>
            <a href="#" className="transition delay-75 hover:text-[#009fad]">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="transition delay-75 hover:text-[#009fad]">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#" className="transition delay-75 hover:text-[#009fad]">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#" className="transition delay-75 hover:text-[#009fad]">
              <FaVimeoV />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
