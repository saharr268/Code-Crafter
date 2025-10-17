import { FaThumbsUp } from "react-icons/fa";

import digitalSafety from "../../assets/images/digital-safety.png";
import privacy from "../../assets/images/privacy.png";
import phishing from "../../assets/images/phishing.png";
import { urlImageHandler } from "../../helpers/utils/images";

export default function PopularTopics({ data }) {
  return (
    <section className="w-full bg-white py-16 px-4 lg:px-12">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
        مطالب پر بازدید
      </h2>

      {/* Container with arrows and cards */}
      <div className="flex items-center justify-between gap-6 w-full">
        {/* Left arrow */}
        <button className="hidden lg:flex w-12 h-12 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition shadow">
          ←
        </button>

        {/* Cards wrapper */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-8 flex-1">
          {data.map((topic) => (
            <div
              key={topic.id}
              className="flex flex-col items-start w-full sm:w-64 md:w-72 lg:w-[30%]"
            >
              {/* Card */}
              <div className="relative bg-gray-100 rounded-2xl p-6 w-full h-80 flex items-center justify-center hover:shadow-md transition">
                {/* Like badge */}
                {/* <div className="absolute top-4 left-4 bg-gray-200 px-2 py-0.5 rounded-full flex items-center gap-1 text-gray-800 text-xs shadow">
                  <FaThumbsUp className="text-[10px]" />
                  <span>{topic.likes}</span>
                </div> */}

                {/* Image */}
                <img
                  src={urlImageHandler(topic.thumbnail_url)}
                  alt={topic.title}
                  className="w-[240px] h-[240px] object-contain"
                />
              </div>

              {/* Title under card */}
              <p className="mt-4 w-full text-right text-base font-medium text-gray-800">
                {topic.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="hidden lg:flex w-12 h-12 items-center justify-center rounded-full bg-gray-200 text-teal-500 hover:bg-gray-300 transition shadow">
          ➔
        </button>
      </div>
    </section>
  );
}
