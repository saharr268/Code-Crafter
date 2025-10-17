import React from "react";
import { useParams } from "react-router-dom";
import { IoIosVideocam } from "react-icons/io";
import { BiSolidFilePdf } from "react-icons/bi";
import { useGetLessonById } from "../../services/hooks/lessons";
import ReactMarkdown from "react-markdown";

const TopicPage = () => {
  const { id: currentId } = useParams();
  const { data: getLessonData } = useGetLessonById(
    currentId ? +currentId : currentId
  );
  const { content, title, video_url } = getLessonData?.data ?? {};

  return (
    <div
      className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-16"
      dir="rtl"
    >
      {/* ===== Grid Layout ===== */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
        style={{ direction: "ltr" }} // 👈 force visual order to stay normal (video right, sidebar left)
      >
        {/* ==== Sidebar (Topic Recommendations) ==== */}
        <aside
          className="bg-white shadow rounded-2xl p-6 order-1 lg:order-1 h-fit lg:sticky top-8 self-start"
          style={{ direction: "rtl" }} // keep text RTL
        >
          <h3 className="text-lg font-bold mb-4 text-gray-800">پیشنهاد صدا</h3>
          <div className="space-y-4">
            <a
              href="#"
              className="block bg-gray-100 hover:bg-gray-200 transition rounded-xl p-4"
            >
              <p className="text-sm font-medium text-gray-700">
                محافظت از اطلاعات شخصی در فضای آنلاین
              </p>
            </a>
            <a
              href="#"
              className="block bg-gray-100 hover:bg-gray-200 transition rounded-xl p-4"
            >
              <p className="text-sm font-medium text-gray-700">
                فعال‌سازی احراز هویت دو مرحله‌ای (Two-Factor Authentication)
              </p>
            </a>
            <a
              href="#"
              className="block bg-gray-100 hover:bg-gray-200 transition rounded-xl p-4"
            >
              <p className="text-sm font-medium text-gray-700">
                مقابله با آزار و خشونت آنلاین (Cyberbullying)
              </p>
            </a>
            <a
              href="#"
              className="block bg-gray-100 hover:bg-gray-200 transition rounded-xl p-4"
            >
              <p className="text-sm font-medium text-gray-700">
                شناسایی فیشینگ و کلاهبرداری‌های آنلاین
              </p>
            </a>
          </div>
        </aside>

        {/* ==== Main Content (Video + Description) ==== */}
        <main
          className="lg:col-span-2 bg-white shadow rounded-2xl p-8 order-2 lg:order-2"
          style={{ direction: "rtl" }}
        >
          {/* Video Section */}
          <div className="mb-8">
            <div className="rounded-2xl overflow-hidden aspect-video mb-4">
              <iframe
                className="w-full h-full"
                src={video_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">{title} </h2>

            <div className="w-full mb-6" style={{ direction: "ltr" }}>
              <div className="w-full gap-3 flex justify-end">
                {/* buttons */}
                <a
                  href="#"
                  className="flex items-center gap-2 border border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <BiSolidFilePdf className="text-lg" />
                  دانلود فایل
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 border border-purple-600 text-purple-600 hover:text-white hover:bg-purple-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <IoIosVideocam className="text-lg" />
                  دانلود ویدیو
                </a>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <ReactMarkdown>{content}</ReactMarkdown>
        </main>
      </div>

      {/* ===== Gradient Banner for Quiz CTA ===== */}
      <div className="max-w-7xl mx-auto mt-12 mb-6">
        <div
          className="rounded-2xl px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between
                     bg-gradient-to-r from-[#00C6B3] via-[#06A6E8] to-[#7C4DFF] text-white shadow-lg"
        >
          <div className="mb-4 md:mb-0 text-center md:text-right">
            <p className="text-lg font-semibold">
              برای شرکت در کوییز مرتبط با این تاپیک آماده‌ای؟
            </p>
            <p className="text-sm opacity-90 mt-1">
              سوالات کوتاه و آموزنده برای محک زدن دانش شما — آماده‌اید شروع
              کنید؟
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
            <a
              href="/quiz-link" /* Replace with actual quiz route */
              className="inline-flex items-center gap-3 bg-white text-[#0f766e] hover:bg-white/90 px-6 py-3 rounded-full font-semibold transition-shadow shadow-md"
            >
              شروع کوییز
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
