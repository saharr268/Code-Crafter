import { FaThumbsUp } from "react-icons/fa";

import digitalSafety from "../assets/images/digital-safety.png";
import privacy from "../assets/images/privacy.png";
import phishing from "../assets/images/phishing.png";

const topics = [
  { id: 1, title: "اهمیت امنیت در دنیای دیجیتال", image: digitalSafety, likes: 345 },
  { id: 2, title: "حریم خصوصی در فضای مجازی", image: privacy, likes: 345 },
  { id: 3, title: "فیشینگ و سواستفاده‌ی مالی", image: phishing, likes: 345 },
];

export default function PopularTopics() {
  return (
    <section className="w-full flex flex-col items-center py-10 px-4">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-8 text-center">
        مطالب پر بازدید
      </h2>

      {/* Container with arrows and cards */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
        
        {/* Left arrow */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 shadow text-gray-600">
          ←
        </button>

        {/* Cards wrapper */}
        <div className="flex flex-wrap justify-center gap-8">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="flex flex-col items-start w-full sm:w-72 md:w-80"
            >
              {/* Card */}
              <div className="relative bg-gray-100 rounded-2xl p-6 w-full h-80 flex items-center justify-center">
                {/* Like badge */}
                <div className="absolute top-4 left-4 bg-gray-200 px-2 py-0.5 rounded-full flex items-center gap-1 text-gray-800 text-xs shadow">
                  <FaThumbsUp className="text-[10px]" />
                  <span>{topic.likes}</span>
                </div>

                {/* Image */}
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-[240px] h-[240px] object-contain"
                />
              </div>

              {/* Title under card */}
              <p className="mt-4 w-full text-right text-sm font-medium text-gray-800">
                {topic.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 shadow">
          <span style={{ color: "#03C0C1" }}>➔</span>
        </button>
      </div>
    </section>
  );
}
