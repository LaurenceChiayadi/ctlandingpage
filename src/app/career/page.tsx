"use client";

import CareerContent from "@/components/career/CareerContent";
import CareerHero from "@/components/career/CareerHero";
import CareerImage from "@/components/career/CareerImage";
import CareerIntro from "@/components/career/CareerIntro";
import ContentWrapper from "@/components/global/ContentWrapper";
import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";

const CareerPage = () => {
  return (
    <>
      <NavBar defaultBlack />
      <CareerHero />
      <ContentWrapper noMarginTop>
        <CareerIntro />
        <CareerImage />
        <CareerContent />
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default CareerPage;
