"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import ProductFilter from "./ProductFilter";

interface Product {
  id: string;
  name: string;
  image: string;
  isNew?: boolean;
  slug: string;
}

interface ProductListingProps {
  products: Product[];
}

const ProductList = ({
  products = [],
}: ProductListingProps) => {

  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-8 xl:px-0 pb-8">
      {/* Description */}
      <div className=" text-gray-700 mb-4 md:mb-8">
        <p>
          Our Cross Country bikes have won World Cups, World Championships and
          Olympic Medals. Find out what makes these race machines the most
          sought after XC bikes by athletes worldwide.
        </p>
      </div>

      {/* Filters */}
      
      <ProductFilter />



      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
      {/* Featured Product */}
      <div className="relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
        <div className="relative h-full bg-gray-100">
          <Image src="/images/products/cross-country.jpg" alt="THE SCOTT SPARK RC" fill className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white text-xl font-bold">THE SCOTT SPARK RC</h3>
          </div>
        </div>
      </div>

      {/* Regular Products */}
      {products.map((item) => (
        <Link href={item.slug} key={item.id} className="block h-full">
          <motion.div
            className="relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow rounded-lg h-full"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            initial={{ scale: 1, y: 0 }}
          >
            <div className="relative h-[400px]">
              <Image
                src="/images/products/bikes-1.png"
                alt={`SCOTT SPARK RC BIKE ${item.id}`}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="p-4">
              <h3 className="text-gray-700 font-medium text-center mb-4">{item.name}</h3>
            </div>
            {item.isNew && (
              <div className="absolute top-2 left-2">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">New</span>
              </div>
            )}
          </motion.div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
