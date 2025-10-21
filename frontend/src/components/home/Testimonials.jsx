import { CustomShimmer } from "../controllers/CustomShimmer";
import { map } from "lodash";
import { timeAgoFa } from "../../helpers/utils/date";

const Testimonials = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          نظرات شما
        </h2>

        {/* Loading Shimmer */}
        <div className="flex flex-col items-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {Array.from({ length: 3 }).map((_, index) => (
              <CustomShimmer key={index} className="h-48 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          نظرات شما
        </h2>

        {/* No Data Message */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-text-body text-center">هنوز نظری ثبت نشده است</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        نظرات شما
      </h2>

      {/* دسکتاپ */}
      <div className="hidden lg:flex items-center justify-center relative w-full">
        {/* فلش چپ */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute left-4 xl:left-12 w-12 h-12 flex items-center justify-center rounded-full bg-background-card text-primary-deep hover:bg-teal-100 transition disabled:opacity-40 shadow"
        >
          <GoArrowLeft size={24} />
        </button>

        {/* کارت‌ها */}
        <div className="flex justify-center gap-8 w-full px-20">
          {!isLoading
            ? visibleTestimonials?.map((t, index) => (
                <div
                  key={index}
                  className="bg-background-card p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow w-1/3 max-w-sm"
                >
                  {/* Stars */}
                  <div className="flex justify-end mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < t.rate ? "text-[#FFCF0F]" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-text-body text-right leading-relaxed mb-6">
                    {t.comment_text}
                  </p>
                  <p
                    style={{ direction: "rtl" }}
                    className="text-primary-deep text-sm font-medium text-right"
                  >
                    {timeAgoFa(t.created_at)}{" "}
                    {/* //! CREATE THE DATE HANDLER FOR THIS */}
                  </p>
                </div>
              ))
            : map([1, 2, 3], () => (
                <CustomShimmer className={"w-[380px] h-[220px]"} />
              ))}
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= data.length}
          className="absolute right-4 xl:right-12 w-12 h-12 flex items-center justify-center rounded-full bg-background-card text-p hover:bg-teal-100 transition disabled:opacity-40 shadow"
        >
          <GoArrowRight size={24} />
        </button>
      </div>

      {/* موبایل و تبلت */}
      <div className="flex flex-col items-center gap-6 lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-background-card p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex justify-end mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < testimonial.stars ? "text-[#FFCF0F]" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-text-body text-right leading-relaxed mb-6">
                {testimonial.comment_text}
              </p>

              <p className="text-primary-deep text-sm font-medium text-right">
                {testimonial.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
