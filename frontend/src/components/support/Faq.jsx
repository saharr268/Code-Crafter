import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Navbar from "../../components/common/Navbar";
import { useFaqData } from "../../services/hooks/faqs";
import { PAGE_SIZE } from "../../../src/helpers/constant/statics";
import { map } from "lodash";
import { CustomShimmer } from "../controllers/CustomShimmer";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const { data: faqsSearch, isPending } = useFaqData(1, PAGE_SIZE, undefined);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="mt-6 py-3 px-4">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-32  gap-10 justify-center items-center">
        {/* Left side - FAQs */}
        <div className="md:col-span-2 pl-16">
          <h2 className="text-2xl font-bold text-right sm:mr-6">سوالات مکرر</h2>
          <div className="space-y-4">
            {isPending
              ? map([1, 2, 3, 4, 5, 6, 7, 8], () => (
                  <CustomShimmer className="w- h-[40px]" />
                ))
              : faqsSearch?.data?.map(({ title, descriptoin }, idx) => (
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

        {/* Right side - Box */}
        <aside className="flex justify-center mt-32">
          <div className="bg-black text-white w-[300px] h-[340px] rounded-2xl p-6 text-right">
            <h3 className="text-teal-400 px-2 py-4">سوالات مکرر</h3>
            <ul className="space-y-2 text-sm ">
              <li className="hover:text-teal-400 cursor-pointer mt-6 px-2 py-4">
                نکات مهم‌سازی آنلاین
              </li>
              <li className="hover:text-teal-400 cursor-pointer mt-6 px-2 py-4">
                صندوق ارسال پیام
              </li>
              <li className="hover:text-teal-400 cursor-pointer mt-6 px-2 py-4">
                پاسخ پرسش‌های شما
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
