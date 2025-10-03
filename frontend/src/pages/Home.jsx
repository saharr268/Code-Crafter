import React from "react";
import Footer from "../components/common/Footer";
import AboutSection from "../components/home/AboutSection";
import BannerSection from "../components/home/BannerSection";
import CardSection from "../components/home/CardSection";
import CommentsSection from "../components/home/CommentsSection";
import MostViewedSection from "../components/home/MostViewedSection";
import HeroSection from "../components/home/HeroSection";
import HeroBanner from "../components/home/HeroBanner";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroBanner />
      <AboutSection/>
      <CardSection />
      <CommentsSection />
      <BannerSection />
      <MostViewedSection />
      <Footer />
    </div>
  );
};

export default Home;
