"use client";

import NavBar from "@/components/global/NavBar";
import HighlightContent from "@/components/highlight/HighlightContent";
import HighlightHero from "@/components/highlight/HighlightHero";

const Highlight = () => {
  return (
    <>
      <NavBar defaultBlack={true} />
      <HighlightHero />
      <HighlightContent />
    </>
  );
};

export default Highlight;
