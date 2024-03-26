"use client";

import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import NewsRoomContent from "@/components/news/NewsRoomContent";
import NewsRoomHero from "@/components/news/NewsRoomHero";

const NewsPage = () => {
  return (
    <>
      <NavBar defaultBlack={true} />
      <NewsRoomHero />
      <NewsRoomContent />
      <Footer />
    </>
  );
};

export default NewsPage;
