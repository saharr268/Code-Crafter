import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Navbar from "../../components/common/Navbar";
import { useFaqData } from "../../services/hooks/faqs";
import { PAGE_SIZE } from "../../../src/helpers/constant/statics";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const { data: faqsSearch } = useFaqData(1, PAGE_SIZE, undefined);

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white min-h-screen relative">
      <div className="absolute top-0 left-0 right-0">
        <Navbar />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 pt-32">
        {/* Left: FAQs */}
        <div className="lg:col-span-2 pr-4">
          <h2 className="text-2xl font-bold mb-8 text-right">سوالات مکرر</h2>

          <div className="space-y-4">
            {faqsSearch?.data?.map(({ title, descriptoin }, idx) => (
              <article
                key={idx}
                className="border rounded-lg shadow-sm bg-gray-50 overflow-hidden"
                dir="rtl"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between px-4 py-3 text-right"
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-gray-700 font-medium">{title}</span>
                  <FiChevronDown
                    className={`text-gray-500 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                {/* Animated content */}
                <div
                  className={`px-4 pb-4 text-gray-600 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="pt-2">{descriptoin}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right: Sticky sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="bg-black text-white w-72 rounded-2xl p-6 text-right">
              <h3 className="text-teal-400 px-2 py-2 font-semibold">سوالات مکرر</h3>
              <ul className="space-y-3 text-sm mt-6">
                <li className="hover:text-teal-400 cursor-pointer px-2 py-2">
                  نکات دسترسی آفلاین
                </li>
                <li className="hover:text-teal-400 cursor-pointer px-2 py-2">
                  صندوق ارسال پیام
                </li>
                <li className="hover:text-teal-400 cursor-pointer px-2 py-2">
                  پاسخ پرسش‌های شما
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
