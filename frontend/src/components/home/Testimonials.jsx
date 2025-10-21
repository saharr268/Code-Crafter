import { CustomShimmer } from "../controllers/CustomShimmer";

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

      {/* Testimonials Grid */}
      <div className="flex flex-col items-center gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {data.map((testimonial, index) => (
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
