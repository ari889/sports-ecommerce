import ProductHeroBanner from "@/components/pages/products/ProductHeroBanner";
import ProductList from "@/components/pages/products/ProductList";
import sampleProducts from "@/data/Products.json";

const CategoryPage = () => {
  return (
    <>
      <ProductHeroBanner />
      <ProductList products={sampleProducts} />
    </>
  );
};

export default CategoryPage;
