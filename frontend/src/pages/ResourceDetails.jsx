import React from "react";
import ResourceSection from "../components/resource/ResourceSection";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { AnimationSlideIn } from "../components/common/Animations";

const ResourceDetails = () => {
  return (
    <div>
      <AnimationSlideIn direction="left">
        <ResourceSection />
      </AnimationSlideIn>
      <Footer />
    </div>
  );
};

export default ResourceDetails;
