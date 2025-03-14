import Image from "next/image";
import blogs from "@/data/Blogs.json";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 pb-[7rem] pl-[4.44vw] pr-[4.44vw] w-full">
      {blogs?.map((blog) => (
        <div
          className="aspect-square relative group overflow-hidden"
          key={blog?.id}
        >
          <div className="bg-black/25 absolute top-0 left-0 w-full h-full z-[15]"></div>
          <Image
            src={blog?.banner}
            width={500}
            height={500}
            alt="Blog 1"
            className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-transform duration-[800ms] ease-out delay-300 group-hover:scale-110"
          />
          <div className="p-[6.66%] absolute bottom-0 left-0 z-20">
            <p className="uppercase text-white text-[max(1vw,1rem)] mb-[1rem] font-bold leading-[1.25em] tracking-[.0625em]">
              {blog?.subtitle}
            </p>
            <h1 className="text-white block text-[max(1.75rem,min(3vw,2.5rem))] uppercase font-bold leading-[1.25em] tracking-[.2em]">
              {blog?.title}
            </h1>
            <button className="text-xl text-white mt-[1.25rem] font-bold uppercase pb-[.25em] whitespace-nowrap tracking-[.0625em] overflow-hidden relative group">
              Shop Now
              <span className="h-[2px] w-full block bg-white mt-1 absolute left-0 bottom-0 group-hover:left-full transition-all duration-300 ease-out"></span>
              <span className="h-[2px] w-full block bg-white mt-1 absolute -left-full bottom-0 group-hover:left-0 transition-all duration-300 ease-in delay-300"></span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
