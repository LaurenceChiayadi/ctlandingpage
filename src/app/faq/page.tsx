"use client";

import FAQContent from "@/components/faq/FAQContent";
import FAQHero from "@/components/faq/FAQHero";
import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import UnderMaintenance from "@/components/global/UnderMaintenance";

const FAQPage = () => {
  return (
    <>
      <NavBar defaultBlack={true} />
      <FAQHero />
      <FAQContent />
      <Footer />
    </>
  );
};
export default UnderMaintenance;
