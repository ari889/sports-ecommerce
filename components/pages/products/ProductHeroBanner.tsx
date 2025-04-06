import Image from "next/image";
import Link from "next/link";

const ProductHeroBanner = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Bikes", href: "/bike/bikes" },
    { label: "Mountain Bikes", href: "/bike/bikes/mountain-bikes" },
    {
      label: "Cross Country Bikes",
      href: "/bike/bikes/mountain-bikes/cross-country-bikes",
    },
  ];

  return (
    <div className="relative mb-10">
      <div className="w-full flex flex-col">
        {/* Banner Image with Text Overlay */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src={"/images/products/product-banner.jpg"}
            alt={"Cyclists riding cross country bikes on a trail"}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider text-center drop-shadow-lg">
              {"CROSS COUNTRY BIKES"}
            </h1>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        {breadcrumbs && (
          <div className="w-full bg-white py-3 px-4 md:px-8 border-b">
            <div className="max-w-7xl mx-auto">
              <nav className="flex flex-wrap items-center text-sm text-gray-500">
                {breadcrumbs.map((crumb, index) => (
                  <div key={index}>
                    <Link
                      href={crumb.href}
                      className={`hover:text-blue-500 transition-colors ${
                        index === 0 ? "text-blue-500" : ""
                      }`}
                    >
                      {crumb.label}
                    </Link>
                    {index < breadcrumbs.length - 1 && (
                      <span className="mx-2">›</span>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductHeroBanner;
