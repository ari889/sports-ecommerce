import Image from "next/image";

const RightContent = () => {
  return (
    <div className="min-h-auto md:min-h-screen py-[9rem] bg-black">
      <div className="pl-[8.88vw] pr-[11.1vw] flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Image Section */}
        <div className="flex-1 h-full md:mt-0 mt-[2rem]">
          <Image
            src="/images/details/banner-4.jpg"
            width={500}
            height={500}
            alt="Banner 4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex-1">
          <h2 className="text-[1.5rem] font-bold text-white uppercase tracking-[.2em] leading-[1.5em]">
            SIZE-SPECIFIC STIFFNESS.FINE-TUNED.
          </h2>
          <p className="text-[.875rem] leading-[2em] text-white max-w-[400px] mt-5">
            Another goal for the ASR was to engineer each frame for the same
            ride characteristics to give every rider the same feel, regardless
            of size. Since theASR uses single-ply carbon layups to eliminate
            redundant carbon, each sheet had to be precision cut. Tedious? Yes.
            Worth it? Absolutely. Doing so allowed for size-specific tuning at a
            much more sensitive level, and accurately matching torsional
            stiffness and chassis-flex profiles too.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
