import { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Testimonials = () => {
  const testimonials = [
    {
      text: "مطالب صدا واقعاً کاربردی بود. یاد گرفتم چطور از اطلاعات شخصی‌ام محافظت کنم و جلوی مزاحمت‌های آنلاین را بگیرم. تجربه‌ای ارزشمند برای هر کاربر اینترنتی.",
      stars: 5,
      time: "چهار ماه قبل",
    },
    {
      text: "قبل از آشنایی با صدا همیشه نگران حریم خصوصی‌ام بودم. حالا با مهارت‌هایی که یاد گرفتم، مطمئن‌تر و با اعتماد‌به‌نفس بیشتری در فضای مجازی حضور دارم.",
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

  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex + cardsPerPage < testimonials.length)
      setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  );

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
          className="absolute left-4 xl:left-12 w-12 h-12 flex items-center justify-center rounded-full bg-teal-50 text-teal-500 hover:bg-teal-100 transition disabled:opacity-40 shadow"
        >
          <GoArrowLeft size={24} />
        </button>

        {/* کارت‌ها */}
        <div className="flex justify-center gap-8 w-full px-20">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow w-1/3 max-w-sm"
            >
              <div className="flex justify-end mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < t.stars ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 text-right leading-relaxed mb-6">
                {t.text}
              </p>

              <p className="text-teal-500 text-sm font-medium text-right">
                {t.time}
              </p>
            </div>
          ))}
        </div>

        {/* فلش راست */}
        <button
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= testimonials.length}
          className="absolute right-4 xl:right-12 w-12 h-12 flex items-center justify-center rounded-full bg-teal-50 text-teal-500 hover:bg-teal-100 transition disabled:opacity-40 shadow"
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
              className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex justify-end mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < t.stars ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 text-right leading-relaxed mb-6">
                {t.text}
              </p>

              <p className="text-teal-500 text-sm font-medium text-right">
                {t.time}
              </p>
            </div>
          ))}
        </div>

        {/* فلش‌ها پایین */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-50 text-teal-500 hover:bg-teal-100 transition disabled:opacity-40"
          >
            <GoArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + cardsPerPage >= testimonials.length}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-50 text-teal-500 hover:bg-teal-100 transition disabled:opacity-40"
          >
            <GoArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
