import DetailsBanner from "@/components/pages/bikeDetails/DetailsBanner";
import FeaturedBanner from "@/components/pages/bikeDetails/FeaturedBanner";
import FloatingBanner from "@/components/pages/bikeDetails/FloatingBanner";
import ImageBanner from "@/components/pages/bikeDetails/ImageBanner";
import VariationSlider from "@/components/pages/bikeDetails/VariationSlider";
import Video from "@/components/pages/bikeDetails/Video";
import React from "react";
import LeftContent from "@/components/pages/bikeDetails/LeftContent";
import RightContent from "@/components/pages/bikeDetails/RightContent";
import Geometry from "@/components/pages/bikeDetails/Geometry";

const BikeDetailsPage = () => {
  return (
    <>
      <DetailsBanner />
      <VariationSlider />
      <Video />
      <FloatingBanner />
      <ImageBanner />
      <FloatingBanner />
      <FeaturedBanner />
      <LeftContent />
      <RightContent />
      <Geometry />
    </>
  );
};

export default BikeDetailsPage;
