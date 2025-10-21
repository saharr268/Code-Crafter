import React from "react";

// all six images
import { PAGE_SIZE } from "../../helpers/constant/statics";
import { urlImageHandler } from "../../helpers/utils/images";
import { useNavigate } from "react-router-dom";
import { CustomShimmer } from "../controllers/CustomShimmer";
import { map } from "lodash";
import { AnimationSlideIn } from "../common/Animations";

const AllPosts = ({ data, isLoading }) => {
  const nagivate = useNavigate();

  return (
    <AnimationSlideIn direction="right">
      <section className="w-full bg-white py-10 px-6 sm:px-10 md:px-20 lg:px-32">
        {/* Page Title */}
        <h2 className="text-xl font-semibold text-right mb-12">همه‌ی مطالب</h2>

        {/* Responsive Grid */}
        <div className="-mx-1 sm:-mx-2 md:-mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10 justify-items-center">
          {!isLoading
            ? data?.map(({ title, thumbnail_url, id }) => (
                <div
                  key={id}
                  onClick={() => nagivate(`lesson/${id}`)}
                  className="flex flex-col items-center text-right"
                >
                  {/* Card */}
                  <div className="bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-80 h-80 flex justify-center items-center p-8">
                    <img
                      src={urlImageHandler(thumbnail_url)}
                      alt={title}
                      className="w-56 h-56 object-contain"
                    />
                  </div>
                  {/* Title (outside the card) */}
                  <p className="mt-5 text-gray-800 text-sm md:text-base font-medium pr-2 text-center md:text-right">
                    {title}
                  </p>
                </div>
              ))
            : map([1, 2, 3, 4, 5, 6, 7, 8], () => (
                <CustomShimmer className={"w-80 h-80"} />
              ))}
        </div>
      </section>
    </AnimationSlideIn>
  );
};

export default AllPosts;
