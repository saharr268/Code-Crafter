import React from "react";
import MobileBanner from "../components/MobileBanner";
import PopularTopics from "../components/PopularTopics";
import ResourcesPage from "../components/ResourcesPage";

const Home = () => {
  return (
    <div>
      <MobileBanner/>
       <PopularTopics />
        <ResourcesPage />
    </div>
  );
};
export default Home;

