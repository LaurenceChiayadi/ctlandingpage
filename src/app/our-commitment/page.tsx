"use client";

import NavBar from "@/components/global/NavBar";
import CommitmentContent from "@/components/our-commitment/CommitmentContent";
import CommitmentHero from "@/components/our-commitment/CommitmentHero";

const Commitment = () => {
  return (
    <>
      <NavBar defaultBlack={true} />
      <CommitmentHero />
      <CommitmentContent />
    </>
  );
};

export default Commitment;
