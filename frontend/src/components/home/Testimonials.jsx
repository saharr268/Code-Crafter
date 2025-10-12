import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Testimonials = () => {
  const testimonials = [
    {
      text: "مطالب صدا واقعاً کاربردی بود. یاد گرفتم چطور از اطلاعات شخصی‌ام محافظت کنم و جلوی مزاحمت‌های آنلاین را بگیرم. تجربه‌ای ارزشمند برای هر کاربر اینترنتی.",
      stars: 5,
      time: "چهار ماه قبل",
    },
    {
      text: "قبل از آشنایی باصدا همیشه نگران حریم خصوصی‌ام بودم. حالا با مهارت‌هایی که یاد گرفتم، مطمئن‌تر و با اعتماد‌به‌نفس بیشتری در فضای مجازی حضور دارم.",
      stars: 5,
      time: "سه هفته قبل",
    },
    {
      text: "صدا به من یاد داد چطور از حساب‌های کاربری‌ام در شبکه‌های اجتماعی بهتر محافظت کنم. حالا با آرامش بیشتری در اینترنت فعالیت و احساس امنیت دارم.",
      stars: 4,
      time: "دو ماه قبل",
    },
    {
      text: "به لطف آموزش‌های صدا، امنیت دیجیتال برایم خیلی روشن‌تر شد و حالا می‌توانم با خیال راحت‌تری آنلاین باشم.",
      stars: 5,
      time: "یک ماه قبل",
    },
    {
      text: "آموزش‌های صدا برای من مثل راهنمای کامل امنیت اینترنت بود. هر کسی باید این مطالب رو یاد بگیره.",
      stars: 5,
      time: "دو هفته قبل",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3; // show 3 cards at a time

  const handleNext = () => {
    if (startIndex + cardsPerPage < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        نظرات شما
      </h2>

      <div className="flex items-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-50 text-teal-500 hover:bg-teal-100 transition disabled:opacity-40"
        >
          <GoArrowLeft size={22} />
        </button>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex mb-6 mt-2 ml-52">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                {t.stars < 5 &&
                  Array.from({ length: 5 - t.stars }).map((_, i) => (
                    <span key={i} className="text-gray-300 text-xl">★</span>
                  ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-right leading-relaxed mb-6">
                {t.text}
              </p>

              {/* Time */}
              <p className="text-teal-500 text-sm font-medium text-right mb-6">
                {t.time}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= testimonials.length}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-50 text-teal-500 hover:bg-teal-100 transition disabled:opacity-40"
        >
          <GoArrowRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

