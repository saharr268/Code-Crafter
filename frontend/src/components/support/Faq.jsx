import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Navbar from "../../components/common/Navbar";
import { useFaqData } from "../../services/hooks/faqs";
import { PAGE_SIZE } from "../../../src/helpers/constant/statics";
import { map } from "lodash";
import { CustomShimmer } from "../controllers/CustomShimmer";
import { nanoid } from "nanoid";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const { data: faqsSearch, isPending } = useFaqData(1, PAGE_SIZE, undefined);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white min-h-screen" dir="rtl">
      {/* Navbar */}
      <div className="py-3 px-4">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left side - FAQs */}
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-right mb-4 sm:mb-6">
              سوالات مکرر
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {isPending ? (
                map(Array(PAGE_SIZE).fill(0), (_, idx) => (
                  <CustomShimmer key={idx} className="w-full h-10 sm:h-12" />
                ))
              ) : faqsSearch?.data?.length > 0 ? (
                faqsSearch.data.map(({ id, title, description }, idx) => {
                  const contentId = `faq-content-${id || nanoid()}`;
                  return (
                    <article
                      key={id || idx}
                      className="border rounded-lg shadow-sm bg-gray-50 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 text-right"
                        aria-expanded={openIndex === idx}
                        aria-controls={contentId}
                      >
                        <span className="text-gray-700 font-medium text-sm sm:text-base">
                          {title}
                        </span>
                        <FiChevronDown
                          className={`text-gray-500 transition-transform duration-300 ${
                            openIndex === idx ? "rotate-180" : ""
                          }`}
                          size={18}
                        />
                      </button>
                      <div
                        id={contentId}
                        className={`px-3 sm:px-4 pb-3 sm:pb-4 text-gray-600 text-xs sm:text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                          openIndex === idx ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="pt-2">{description}</div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <p className="text-gray-500 text-right">هیچ سوالی یافت نشد.</p>
              )}
            </div>
          </div>

          {/* Right side - Sidebar */}
          <aside className="mt-6 lg:mt-0">
            <div className="bg-black text-white w-full rounded-2xl p-4 sm:p-6">
              <h3 className="text-teal-400 text-base sm:text-xl font-semibold px-2 py-2 sm:py-4 text-right">
                سوالات مکرر
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li className="hover:text-teal-400 cursor-pointer px-2 py-2 sm:py-3 text-right">
                  نکات مهم‌سازی آنلاین
                </li>
                <li className="hover:text-teal-400 cursor-pointer px-2 py-2 sm:py-3 text-right">
                  صندوق ارسال پیام
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
