import Navbar from "../common/Navbar";
import { useNavigate } from "react-router-dom";
import { urlImageHandler } from "../../helpers/utils/images";
import { CustomShimmer } from "../controllers/CustomShimmer";
import { AnimationSlideIn } from "../common/Animations";

const MostVisitedPost = ({ data, isLoading }) => {
  const navigate = useNavigate();

  return (
    <AnimationSlideIn direction="left">
      <div className="flex flex-col items-center justify-center mt-6 ">
        <div className="w-full max-w-7xl ">
          <Navbar />
        </div>
        {/* Page Title */}
        <h2 className="text-right text-gray-800 font-medium text-lg md:text-xl mr-32 mb-6 w-full max-w-7xl mt-32">
          پیشنهاد امروز صدا به شما
        </h2>

        {/* Card */}
        {isLoading ? (
          <CustomShimmer className="h-[368px] max-w-[1280px] w-full mx-auto" />
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-between bg-background-card rounded-3xl shadow-sm p-8 md:p-10 w-10/12 max-w-6xl mx-auto">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 flex justify-start ml-4 mb-8 md:mb-0">
              <img
                src={urlImageHandler(data?.thumbnail_url)}
                alt="امنیت دیجیتال"
                // className="w-64 md:w-82 lg:w-96 h-auto object-contain"
                className="w-[320px] md:w-[300px] lg:w-[300px] h-auto object-contain"
              />
            </div>

            {/* Right Side: Text */}
            <div className="w-full md:w-1/2 text-right md:pr-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
                {data?.title}
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-7 mb-10 line-clamp-3">
                {data?.short_description}
              </p>

              {/* Button */}
              <button
                onClick={() => navigate(`lesson/${data?.id}`)}
                className="bg-primary-deep hover:bg-primary-dark text-white font-medium px-6 py-4 rounded-xl transition-colors duration-200"
              >
                بیشتر بدانید
              </button>
            </div>
          </div>
        )}
      </div>
    </AnimationSlideIn>
  );
};

export default MostVisitedPost;
