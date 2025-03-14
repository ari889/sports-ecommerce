import ProductSlider from "@/components/pages/home/ProductSlider";
import Banner from "@/components/pages/home/Banner";
import Blogs from "@/components/pages/home/Blogs";
import Stories from "@/components/pages/home/Stories";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductSlider />
      <Blogs />
      <Stories />
    </>
  );
}
