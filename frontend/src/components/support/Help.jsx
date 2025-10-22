import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useFormik } from "formik";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useFaqData } from "../../services/hooks/faqs";
import { useCreateComment } from "../../services/hooks/comments";
import { tryCatchHandler } from "../../helpers/utils/handlers";
import { CommentValidation } from "../../helpers/utils/validations";
import { PAGE_SIZE } from "../../helpers/constant/statics";
import { map } from "lodash";
import { CustomShimmer } from "../controllers/CustomShimmer";
import { CustomRate } from "../controllers/CustomRate";
import { motion, AnimatePresence } from "framer-motion";

const Help = () => {
  const faqRef = useRef(null);
  const tipsRef = useRef(null);
  const messageRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const { data: faqsSearch, isPending: isLoadingFaq } = useFaqData(
    1,
    PAGE_SIZE,
    undefined
  );

  const { mutateAsync: createComment, isPending: isLoading } = useCreateComment();

  const formIK = useFormik({
    initialValues: { comment_text: "", rate: "", is_accepted: "" },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: CommentValidation,
    onSubmit: ({ comment_text, rate }, { resetForm }) => {
      tryCatchHandler({
        handler: async () => {
          const finalValues = {
            comment_text: comment_text || "",
            rate: rate || null,
            is_accepted: true,
          };
          const res = await createComment(finalValues);
          resetForm();
          return res;
        },
        successMessage: "دیدگاهتان فرستاده شد!",
        errorCallback: (error) => error,
      });
    },
  });

  return (
    <div className="relative bg-white text-right">
      <Navbar className={"top-6"} />
      {/* Main Content Container */}
      <div
        dir="rtl"
        className="sm:mt-10 lg:mt-0 pt-24 sm:pt-32 lg:pt-32 px-4 sm:px-6 lg:px-0"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block sticky top-32 right-0 bg-black text-white rounded-2xl p-10 h-fit md:w-[300px] z-30 mr-8">
            <ul className="space-y-8 text-m">
              <li
                onClick={() => scrollToSection(faqRef)}
                className="cursor-pointer hover:text-teal-400"
              >
                سوالات مکرر
              </li>
              <li
                onClick={() => scrollToSection(tipsRef)}
                className="cursor-pointer hover:text-teal-400"
              >
                نکات دسترسی آفلاین
              </li>
              <li
                onClick={() => scrollToSection(messageRef)}
                className="cursor-pointer hover:text-teal-400"
              >
                صندوق ارسال پیام
              </li>
            </ul>
          </aside>
          {/* Floating Button - Mobile */}
          <div className="fixed bottom-6 right-6 lg:hidden z-50">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="w-[60px] h-[60px] flex justify-center items-center bg-black text-white rounded-2xl shadow-lg transition-all duration-300"
            >
              <span className="text-2xl font-bold">•••</span>
            </button>
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-16 right-0 bg-black text-white rounded-2xl shadow-lg p-4 w-40 space-y-3"
                >
                  <p
                    onClick={() => {
                      scrollToSection(faqRef);
                      setShowMenu(false);
                    }}
                    className="cursor-pointer hover:text-teal-400"
                  >
                    سوالات مکرر
                  </p>
                  <p
                    onClick={() => {
                      scrollToSection(tipsRef);
                      setShowMenu(false);
                    }}
                    className="cursor-pointer hover:text-teal-400"
                  >
                    نکات آفلاین
                  </p>
                  <p
                    onClick={() => {
                      scrollToSection(messageRef);
                      setShowMenu(false);
                    }}
                    className="cursor-pointer hover:text-teal-400"
                  >
                    پیام
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Main Section */}
          <main className="w-full px-2 sm:px-6 lg:pl-12 lg:col-span-2 order-2 lg:order-2">
            {/* FAQ Section */}
            <section ref={faqRef} className="bg-white pb-20">
              <div className="max-w-full px-4 sm:px-8">
                <h2 className="text-2xl font-bold mb-8">سوالات مکرر</h2>
                <div className="space-y-4">
                  {isLoadingFaq
                    ? map([1, 2, 3, 4, 5, 6, 7], () => (
                        <CustomShimmer
                          key={`shimmer-${Math.random()}`}
                          className="w-full h-[40px] bg-gray-100 rounded-lg animate-pulse"
                        />
                      ))
                    : faqsSearch?.data?.map(({ title, description }, index) => (
                        <div
                          key={index}
                          dir="rtl" // تنظیم جهت RTL برای هر آیتم FAQ
                          className="border rounded-lg shadow-sm bg-background-card transition overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between px-4 py-3"
                          >
                            <span className="text-gray-700 font-medium">
                              {title}
                            </span>
                            <FiChevronDown
                              className={`text-gray-500 transition-transform duration-300 ${
                                openIndex === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {openIndex === index && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.3,
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 25,
                                }}
                                className="overflow-hidden"
                              >
                                <motion.div
                                  initial={{ y: -5 }}
                                  animate={{ y: 0 }}
                                  exit={{ y: -5 }}
                                  transition={{ duration: 0.25 }}
                                  className="px-4 pb-4 text-gray-600 text-sm leading-relaxed text-right"
                                >
                                  {description}
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                </div>
              </div>
            </section>
            {/* Offline Tips Section */}
            <section
              dir="rtl"
              ref={tipsRef}
              className="bg-[#8C58D9] text-white py-20 px-8 rounded-3xl"
            >
              <div className="max-w-5xl mx-auto leading-8">
                <h2 className="text-2xl mb-6">نکات دسترسی آفلاین</h2>
                <p>
                  تقریباً تمامی مرورگرها در پلتفرم‌های مختلف، گزینه‌ای برای دانلود کامل صفحات وب در اختیار کاربران می‌گذارند...
                </p>
                <p className="mb-6">
                  تقریبا تمامی مرورگرها در پلتفرم‌های مختلف گزینه‌ای برای دانلود کامل صفحات وب دارند...
                </p>
                <h3 className="font-semibold text-lg mb-2">ذخیره وب سایت در Google Chrome</h3>
                <ol className="list-decimal list-inside space-y-1 mb-6">
                  <li>در گوشه بالا سمت راست، منوی مرورگر را باز کنید。</li>
                  <li>روی گزینه Save page as کلیک کنید。</li>
                  <li>می‌توانید Cast، Save و Share را انتخاب کنید。</li>
                </ol>
                <p className="mt-8">
                  همچنین می‌توانید با کلیدهای <span className="font-semibold">Ctrl + S</span> در ویندوز یا <span className="font-semibold">Command + S</span> در مک نیز این کار را انجام دهید.
                </p>
                <p>
                  نکته: می‌توانید به‌جای مراحل گفته شده، برای دسترسی به پنجره‌ی ذخیره‌سازی صفحه‌وب، در ویندوز از Ctrl + S و در مک از Command + S استفاده کنید. در پنجره‌ی باز شده، مطمئن شوید که Save as type روی Webpage,Complete تنظیم شده است.
                </p>
              </div>
            </section>
            {/* Message Box Section */}
            <section
              ref={messageRef}
              className="w-full flex justify-center items-center py-20 px-4 bg-white"
            >
              <div dir="rtl" className="w-full max-w-3xl">
                <h2 className="text-xl font-bold mb-3 text-gray-900">صندوق ارسال دیدگاه</h2>
                <p className="text-gray-600 text-sm leading-6 mb-6">
                  دوست عزیز! با تشکر از اینکه ما را برای همراهی انتخاب کردید؛ لطفا تجربه‌ی خود را درباره‌ی وبسایت صدا با به اشتراک بگذارید.
                </p>
                <form onSubmit={formIK.handleSubmit} className="space-y-2">
                  <div className="relative bg-background-card py-8 rounded-3xl">
                    <textarea
                      value={formIK.values.comment_text}
                      onChange={formIK.handleChange}
                      name="comment_text"
                      placeholder="پیام خود را بنویسید..."
                      className="w-full min-h-[320px] px-8 rounded-lg bg-transparent border-gray-300 focus:ring-teal-500 focus:ring-0 focus:outline-none focus-visible:ring-0 text-gray-800 resize-none"
                    ></textarea>
                    {formIK.errors.comment_text && (
                      <p className="text-red-500 text-sm mt-1">{formIK.errors.comment_text}</p>
                    )}
                    <div className="flex px-8 justify-between items-center pt-8 border-solid border-[#DDDDDD] border-t-2">
                      <CustomRate
                        onChange={formIK.handleChange}
                        value={formIK.values.rate}
                        name="rate"
                      />
                      <button
                        type="submit"
                        className="px-8 py-4 bg-primary-deep text-white rounded-2xl hover:bg-primary-dark transition"
                      >
                        {isLoading ? "درحال بارگذازی..." : " ارسال پیام"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;