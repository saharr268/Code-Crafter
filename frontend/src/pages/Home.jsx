import React from "react";

import ResourcesPage from "../components/ResourcesPage";
import MobileBanner from "../components/home/MobileBanner";
import PopularTopics from "../components/home/PopularTopics";
import Footer from "../components/common/Footer";
import AboutSection from "../components/home/AboutSection";
import BannerSection from "../components/home/BannerSection";
import Testimonials from "../components/home/Testimonials";
import CardSection from "../components/home/CardSection";
import HeroSection from "../components/home/HeroSection";
import HeroBanner from "../components/home/HeroBanner";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroBanner />
      <AboutSection />
      <CardSection />
      <Testimonials />
      <BannerSection />
      <MobileBanner />
      <PopularTopics />
      <ResourcesPage />
      <Footer />
    </div>
  );
};

export default Home;
