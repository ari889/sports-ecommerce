import Image from "next/image";
import stories from "@/data/Stories.json";

const Stories = () => {
  return (
    <>
      <div className="px-[12vw] mb-[3.5rem]">
        <h1 className="font-bold leading-[1.25rem] tracking-[.0625em] uppercase text-[2.5rem] flex flex-col items-start">
          <span className="flex flex-col justify-start items-center">
            <span>Stories</span>
            <Image
              src="/images/clip-path/word-underline.png"
              width={200}
              height={50}
              alt="Underline"
            />
          </span>
        </h1>
      </div>
      <div className="flex flex-nowrap scroll-snap-x-mandatory scroll-pl-[4.44vw] overflow-x-auto overflow-y-hidden mx-w-full w-full mx-auto px-[4.44vw]">
        {stories?.map((story) => (
          <div
            key={story.id}
            className="flex-shrink-0 snap-start ml-[2.22vw] min-w-[40rem] w-[40rem]"
          >
            <Image
              src={story?.image}
              width={500}
              height={350}
              alt="Story"
              className="aspect-video object-cover w-full"
            />
            <div className="py-[2rem] px-[2.22vw]">
              <h1 className="font-bold uppercase leading-[1.25] text-[1.75rem] whitespace-normal tracking-[.0625em] pb-[1rem] relative">
                {story?.title}
              </h1>
              <span className="h-[.1875rem] w-[3rem] block bg-black"></span>
              <p className="mt-[1rem] text-[1rem] max-w-[28rem] whitespace-normal leading-[2em]">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stories;
