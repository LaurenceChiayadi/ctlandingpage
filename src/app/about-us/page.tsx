"use client";

import AboutUsHistory from "@/components/about-us/AbousUsHistory";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import NavBar from "@/components/global/NavBar";

const AboutUs = () => {
  return (
    <>
      <NavBar defaultBlack={true} />
      <AboutUsHero />
      <AboutUsHistory />
    </>
  );
};

export default AboutUs;
