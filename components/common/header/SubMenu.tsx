import { Category } from "@/types/category.types";
import Link from "next/link";
import { MouseEvent } from "react";

export default function SubMenu({
  selectedSubCategory,
  handleSelectedSubCategory,
  index,
}: {
  selectedSubCategory: Category | null;
  handleSelectedSubCategory: (
    e: MouseEvent,
    category: Category,
    index: number
  ) => void;
  index: number;
}) {
  return (
    <div className="mt-32 px-7">
      <div className="border-b border-b-[#494e58] pb-5">
        <p className="text-2xl font-brandonGrotesque text-white uppercase">
          {selectedSubCategory?.name}
        </p>
        <Link
          href="/"
          className="block text-blue-500 font-brandonGrotesque text-xl"
        >
          See All
        </Link>
      </div>
      <ul className="mt-10 h-[calc(100vh-300px)] overflow-y-auto">
        {selectedSubCategory?.children?.map((category) => (
          <li key={category?.id}>
            <Link
              href={category?.url || "/"}
              className="block text-white transition delay-75 font-brandonGrotesque text-xl py-3 hover:text-blue-500"
              onClick={(e) => handleSelectedSubCategory(e, category, index + 2)}
            >
              {category?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
