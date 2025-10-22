import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CustomShimmer } from "../controllers/CustomShimmer";

export default function Testimonials({ data, isLoading }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section
      className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden"
      dir="rtl"
    >
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12 text-gray-800">
        نظرات شما
      </h2>

      {/* Swiper container */}
      <div className="relative w-[95%] sm:w-[90%] md:w-[85%] mx-auto px-2 sm:px-6">
        <Swiper
          modules={[Navigation]}
          onInit={(swiper) => {
            // 👇 connect buttons dynamically after swiper initializes
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {data &&
            data.map((t) => (
              <SwiperSlide key={t.id}>
                {isLoading ? (
                  <CustomShimmer className={"w-[380px] h-[256px]"} />
                ) : (
                  <div className="bg-background-card border border-gray-100 py-8 px-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 h-auto min-h-[250px]">
                    {/* ⭐ Stars */}
                    <div className="text-yellow-400 mb-3 text-lg">
                      {"★".repeat(t.stars) + "☆".repeat(5 - t.stars)}
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 leading-7 text-sm sm:text-base">
                      {t.text}
                    </p>

                    {/* Date */}
                    <p className="mt-6 text-teal-600 text-xs sm:text-sm font-medium">
                      {t.date}
                    </p>
                  </div>
                )}
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Custom Nav Buttons */}
        <button
          ref={prevRef}
          className="absolute  top-[39%] left-1 sm:left-3 md:-left-[60px] -translate-y-1/2 bg-background-card text-primary-dark p-2 sm:p-3 rounded-full hover:bg-gray-200 transition-all z-10 shadow-md active:scale-95 disabled:opacity-5"
          aria-label="قبلی"
        >
          <FaArrowLeft className="text-sm sm:text-base" />
        </button>

        <button
          ref={nextRef}
          className="absolute top-[39%] right-1 sm:right-3 md:-right-[60px] -translate-y-1/2 bg-background-card text-primary-dark p-2 sm:p-3 rounded-full hover:bg-gray-200 transition-all z-10 shadow-md active:scale-95 disabled:opacity-5"
          aria-label="بعدی"
        >
          <FaArrowRight className="text-sm sm:text-base" />
        </button>
      </div>
    </section>
  );
}
