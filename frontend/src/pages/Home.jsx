import AboutSection from "../components/home/AboutSection";
import BannerSection from "../components/home/BannerSection";
import CardSection from "../components/home/CardSection";
import Testimonials from "../components/home/Testimonials";
import MostViewedSection from "../components/home/MostViewedSection";

const Home = () => {
  return (
    <div>
      <AboutSection />
      <CardSection />
      <Testimonials />
      <BannerSection />
      <MostViewedSection/>
    </div>
  )
}

export default Home;
