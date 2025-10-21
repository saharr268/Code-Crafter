import { useNavigate } from "react-router-dom";
import { urlImageHandler } from "../../helpers/utils/images";
import { CustomImage } from "../controllers/CustomImage";
import { map } from "lodash";
import { CustomShimmer } from "../controllers/CustomShimmer";
import { AnimationSlideIn } from "../common/Animations";

export default function PopularTopics({ data, isLoading }) {
  const navigate = useNavigate();
  return (
    <AnimationSlideIn direction="left">
      <section className="w-full bg-white py-16 px-4 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-10 text-center">
          پیشنهاد صدا برای شما{" "}
        </h2>

        {/* Container of cards */}
        <div className="w-full flex justify-between flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 flex-1">
            {!isLoading
              ? data &&
                data.map((topic) => (
                  <div
                    key={topic.id}
                    onClick={() => navigate(`learn/lesson/${topic.id}`)}
                    className="flex flex-col items-start w-full sm:w-64 md:w-96 lg:w-50 cursor-pointer"
                  >
                    {/* Card */}
                    <div className="relative bg-background-card rounded-2xl py-20 p-12 w-full h-100 flex items-center justify-center hover:shadow-md transition">
                      {/* Image */}
                      <CustomImage
                        src={urlImageHandler(topic.thumbnail_url)}
                        alt={topic.title}
                        className="w-[200px] h-[200px] object-contain"
                      />
                    </div>

                    {/* Title under card */}
                    <p className="mt-4 w-full text-right text-base font-medium text-text-body">
                      {topic.title}
                    </p>
                  </div>
                ))
              : map([1, 2, 3], () => (
                  <CustomShimmer className={"w-[380px] h-[360px]"} />
                ))}
          </div>
        </div>
      </section>
    </AnimationSlideIn>
  );
}
