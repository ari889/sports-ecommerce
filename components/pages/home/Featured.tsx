import Button from "@/components/common/Button";
import Image from "next/image";

const Featured = () => {
  return (
    <>
      <div className="px-[1.5rem] md:px-[12vw] relative">
        <h1 className="relative uppercase font-bold mb-[7rem] mt-[1.25rem] text-dark text-[2.25rem] md:text-[3.5rem] tracking-[.0625em] leading-[1.25] after:content-[''] after:absolute after:left-[-.9em] after:top-[-.75em] after:w-[4.1em] after:h-[2.61em] after:bg-[url('/images/clip-path/word-circle.png')] after:bg-no-repeat after:bg-[length:100%_100%] after:bg-center -z-10">
          Yeti Happenings
        </h1>
      </div>
      <div className="flex flex-end flex-col relative z-0 before:content-[''] before:h-[60%] before:top-[20%] before:left-[8.88vw] before:w-[82.24vw] before:absolute before:-z-10 before:bg-[#e6eeee]">
        <div className="self-end mb-[10vw] w-[calc(100vw-1rem)] md:w-[80vw] group">
          <div className="aspect-square md:aspect-video overflow-hidden relative">
            <div className="bg-black/25 absolute top-0 left-0 w-full h-full z-20"></div>
            <Image
              src="/images/pin-content/1.jpg"
              width={800}
              height={1200}
              alt="Pin 1"
              className="w-full absolute top-1/2 left-0 -translate-y-1/2 object-cover z-10 transition transform duration-800 ease-out delay-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full z-30 p-[4rem]">
              <p className="uppercase text-white mb-[1.5rem] text-wrap font-bold tracking-[.0625em] leading-[1.25]">
                Gatherings
              </p>
              <h2 className="uppercase text-white tracking-[.2em] leading-[1.5em] font-bold text-[3.9vw]">
                2025 Yeti Gatherings Events are Here
              </h2>
              <Button className="text-white text-base sm:text-xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="self-start mb-[10vw] w-[calc(100vw-1rem)] md:w-[80vw] group">
          <div className="aspect-square md:aspect-video overflow-hidden relative">
            <div className="bg-black/25 absolute top-0 left-0 w-full h-full z-20"></div>
            <Image
              src="/images/pin-content/2.jpg"
              width={800}
              height={1200}
              alt="Pin 1"
              className="w-full absolute top-1/2 left-0 -translate-y-1/2 object-cover z-10 transition transform duration-800 ease-out delay-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full z-30 p-[4rem]">
              <p className="uppercase text-white mb-[1.5rem] text-wrap font-bold tracking-[.0625em] leading-[1.25]">
                Ambassador
              </p>
              <h2 className="uppercase text-white tracking-[.2em] leading-[1.5em] font-bold text-[3.9vw]">
                A tribute to our friend - Remembering Matt Opperman
              </h2>
              <Button className="text-white text-base sm:text-xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
