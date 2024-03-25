"use client";

import AboutUsHistory from "@/components/about-us/AboutUsHistory";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import NavBar from "@/components/global/NavBar";
import AboutUsCollections from "@/components/about-us/AboutUsCollections";
import AboutUsAchievements from "@/components/about-us/AboutUsAchievements";

const AboutUs = () => {
  return (
    <>
      <NavBar defaultBlack={true} />
      <AboutUsHero />
      <AboutUsHistory />
      <AboutUsCollections />
      <AboutUsAchievements />
    </>
  );
};

export default AboutUs;
