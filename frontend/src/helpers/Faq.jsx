import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const faqs = [
  {
    question: "مطالب وب‌سایت برای یک کسب‌وکار مفید و قابل‌استفاده است؟",
    answer: "بله، تمام مطالب با هدف آموزش و کمک به کسب‌وکارها تهیه شده‌اند.",
  },
  {
    question: "مطالب وب‌سایت به‌روز و کاربردی هستند؟",
    answer: "بله، تیم ما به‌صورت دوره‌ای محتوای سایت را به‌روز می‌کند.",
  },
  {
    question: "آیا می‌توان به منابع معرفی‌شده اعتماد کرد؟",
    answer: "تمام منابع از سایت‌ها و مراجع معتبر گردآوری شده‌اند.",
  },
  {
    question: "آیا پشتیبانی آنلاین در دسترس است؟",
    answer: "بله، از طریق چت و ایمیل می‌توانید با تیم ما در ارتباط باشید.",
  },
  {
    question: "آیا مقالات رایگان در اختیار کاربران قرار می‌گیرد؟",
    answer: "بله، بخش زیادی از محتوای آموزشی به‌صورت رایگان منتشر می‌شود.",
    },
   {
    question: "آیا مقالات رایگان در اختیار کاربران قرار می‌گیرد؟",
    answer: "بله، بخش زیادی از محتوای آموزشی به‌صورت رایگان منتشر می‌شود.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-44 justify-center items-center">
        {/* Left side - FAQs */}
        <div className="md:col-span-2 pl-16">
          <h2 className="text-2xl font-bold mb-8 text-right">سوالات مکرر</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm transition bg-gray-50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-right px-4 py-3"
                >
                  <FiChevronDown
                    className={`text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                  <span className="text-gray-700 font-medium">
                    {faq.question}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Box */}
        <div className="flex justify-center">
          <div className="bg-black text-white w-[300px] h-[340px] rounded-2xl p-6 text-right">
            <h3 className="text-teal-400 px-2 py-4">
              سوالات مکرر
            </h3>
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
        </div>
      </div>
    </section>
  );
}
