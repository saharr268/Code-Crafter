import Navbar from "../common/Navbar";

import heroImage from "../../assets/images/hero.png";
import { useNavigate } from "react-router-dom";
import { AnimationSlideIn } from "../common/Animations";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center bg-background-card px-4 sm:px-20 md:px-12 m-4 md:mt-6 rounded-[40px] max-h-auto py-4">
      {/* Navbar */}
      <div className="fixed w-full top-12 z-50">
        <Navbar />
      </div>

      <AnimationSlideIn direction="left">
        <div className="flex flex-col-reverse md:flex-row items-center mt-20 justify-between w-full p-0 md:py-10">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start md:mt-0 sm:ml-10 md:mr-20">
            <img
              src={heroImage}
              alt="security illustration"
              className="sm:w-[500px] md:h-auto lg:w-[600px] xl:w-[650px]"
            />
          </div>

          <div
            dir="rtl"
            className="w-full md:w-1/2 text-right mr-5 sm:mr-0 md:text-right md:mr-10"
          >
            {/* <p dir="rtl" className="text-text-body text-sm sm:text-base md:text-md mt-6 font-medium mb-4">
            اولین حامی امنیت و آزادی زنان افغان در جهان تکنولوژی
          </p> */}

            <p
              dir="rtl"
              className="text-5xl mt-6 mb-12 leading-tight text-text-body"
            >
              <span className="text-primary"> صدا </span>
              برای محافظت و توانمندسازی توست
            </p>

            <button
              onClick={() => navigate("/learn")}
              className="bg-primary text-white px-6 py-4 mb-10 rounded-xl hover:bg-primary-dark"
            >
              مشاهده‌ی مطالب
            </button>
          </div>
        </div>
      </AnimationSlideIn>
    </section>
  );
};

export default HeroSection;
