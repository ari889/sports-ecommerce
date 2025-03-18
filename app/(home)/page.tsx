import ProductSlider from "@/components/pages/home/ProductSlider";
import Banner from "@/components/pages/home/Banner";
import Blogs from "@/components/pages/home/Blogs";
import Stories from "@/components/pages/home/Stories";
import Featured from "@/components/pages/home/Featured";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductSlider />
      <Blogs />
      <Featured />
      <Stories />
    </>
  );
}
