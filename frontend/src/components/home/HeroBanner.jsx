import { useEffect } from "react";
import { MdPrivacyTip } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import HeroBannerImg from "../../assets/images/hero-banner.png";
import Image from "../../assets/images/Image_Home_Mobile.png";
import TabletImage from "../../assets/images/Hero Banner_Tablet.png";

export default function HeroBanner() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slide {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-slide {
        animation: slide 20s linear infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="bg-white min-h-screen mt-14">
      {/* متن بالای بنر */}
      <div className="max-w-4xl mx-auto xl:mb-16 md:mb-24 text-center relative px-8 py-4">
        <p className="text-text-body text-md md:text-xl leading-relaxed mb-8">
          ما زنان افغان را با مهارت‌های امنیت دیجیتال توانمند می‌سازیم. صدا نه
          تنها یک آموزش‌دهنده، بلکه یک حامی برای امنیت و آزادی زنان افغان در
          دنیای دیجیتال به شمار می‌رود.
        </p>
      </div>

      {/* دسکتاپ */}
      <div className="hidden lg:flex items-center justify-center min-h-screen mt-10">
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={HeroBannerImg}
              alt="hero-banner"
              className="max-w-[1728px] h-[600px] z-0 mb-32"
            />
          </div>

          {/* کارت‌ها */}
          <div className="flex w-5/12 gap-3 leading-5 absolute -top-48 -left-24 text-right text-text-body bg-[#FBFBFB] p-5 rounded-2xl rounded-tl-none border shadow-md">
            حفاظت از حریم شخصی کاربران و احترام به حقوق آن‌ها
            <MdPrivacyTip className="text-primary-deep text-5xl"/>
          </div>

          <div className="flex w-5/12 gap-3 leading-5 absolute -top-20 -right-40 text-right text-text-body bg-[#FBFBFB] p-5 rounded-xl rounded-tr-none border shadow-md">
            بدون نیاز به ایجاد اکونت برای دسترسی به مطالب
            <FaUser className="text-primary-deep text-3xl m-2" />
          </div>

          <div dir="rtl" className="flex w-4/12 gap-3 leading-5 text-right absolute -bottom-32 -left-32 text-text-body bg-[#FBFBFB] p-5 rounded-2xl rounded-br-none border shadow-md">
           <FaMobile className="text-primary-deep text-2xl m-2" />
            اپلیکیشن موبایل برای اندروید و IOS
            
          </div>

          <div className="flex w-5/12 gap-3 leading-5 text-right absolute bottom-60 -right-16 bg-[#FBFBFB] text-text-body p-5 rounded-xl rounded-bl-none border shadow-md">
            محیط امن و بستری وسیع برای جستجوی آسان و مطمئن
            <FaLock  className="text-primary-deep text-3xl m-2" />
          </div>
        </div>
      </div>

      {/* تبلت */}
      <div className="hidden sm:flex lg:hidden items-center justify-center mt-12 px-4 relative">
        <div className="relative w-full max-w-3xl">
          <img
            src={TabletImage}
            alt="tablet-banner"
            className="w-full h-auto rounded-2xl"
          />

          {/* پیام‌ها روی تصویر (کمی overlap) */}
          <div className="absolute top-24 left-4 bg-[#FBFBFB]/95 text-text-body rounded-tl-none rounded-2xl backdrop-blur-sm border shadow-md p-3 text-sm flex items-center justify-end gap-2">
            <div className="text-right">
              حفاظت از حریم شخصی کاربران
              <br />و احترام به حقوق آن‌ها
            </div>
            <MdPrivacyTip className="text-primary-deep text-xl" />
          </div>

          <div className="absolute top-16 right-4 bg-[#FBFBFB]/95 text-text-body rounded-tr-none rounded-2xl backdrop-blur-sm border shadow-md p-3 text-sm flex items-center justify-end gap-2">
            <div className="text-right">
              بدون نیاز به ایجاد اکونت برای
              <br />
              دسترسی به مطالب
            </div>
            <FaUser className="text-primary-deep text-xl" />
          </div>

          <div className="absolute bottom-52 left-0 bg-[#FBFBFB]/95 text-text-body rounded-br-none rounded-2xl backdrop-blur-sm border shadow-md p-3 text-sm flex items-center justify-end gap-2">
            <div className="text-right">
              اپلیکیشن موبایل برای
              <br />
              اندروید و IOS
            </div>
            <FaMobile className="text-primary-deep text-xl" />
          </div>

          <div className="absolute bottom-64 right-0 text-right rounded-bl-none text-text-body bg-[#FBFBFB]/95 backdrop-blur-sm border shadow-md rounded-2xl p-2 text-sm flex items-center justify-end gap-1">
            <div className="text-right">
              محیط امن و بستری وسیع برای
              <br />
              جستجوی آسان و مطمئن
            </div>
            <FaLock className="text-primary-deep text-xl" />
          </div>
        </div>
      </div>

      {/* موبایل */}
      <div className="block sm:hidden mt-10 px-4">
        {/* پیام‌ها با انیمیشن */}
        <div className="overflow-hidden mb-6">
          <div className="flex animate-slide gap-3">
            <div className="flex bg-[#FBFBFB] border rounded-xl p-2 text-text-body shadow-md text-sm whitespace-nowrap">
              حفاظت از حریم شخصی کاربران
              <MdPrivacyTip className="text-primary-deep text-lg ml-2" />
            </div>
            <div className="flex bg-[#FBFBFB] text-text-body border rounded-xl p-2 shadow-md text-sm whitespace-nowrap">
              بدون نیاز به ایجاد اکونت برای دسترسی به مطالب
              <FaUser className="text-primary-deep text-lg ml-2" />
            </div>
            <div className="flex bg-[#FBFBFB] text-text-body border rounded-xl p-2 shadow-md text-sm whitespace-nowrap">
              اپلیکیشن موبایل برای اندروید و IOS
              <FaMobile className="text-primary-deep text-lg ml-2" />
            </div>
            <div className="flex bg-[#FBFBFB] border text-text-body rounded-xl p-2 shadow-md text-sm whitespace-nowrap">
              محیط امن و بستری برای جستجوی آسان و مطمئن
              <FaLock className="text-primary-deep text-lg ml-2" />
            </div>
          </div>
        </div>

        {/* تصویر موبایل */}
        <div className="flex justify-center">
          <img
            src={Image}
            alt="mobile-banner"
            className="max-w-[440px] h-[330px] mt-10"
          />
        </div>
      </div>
    </div>
  );
}
