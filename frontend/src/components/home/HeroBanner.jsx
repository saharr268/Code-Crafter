import { useEffect } from "react";
import { MdSecurity } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { LuLockKeyhole } from "react-icons/lu";
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
      <div className="max-w-4xl mx-auto text-center relative px-4">
        <p className="text-gray-600 text-md sm:mb-16 md:text-xl font-semibold leading-relaxed">
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
          <div className="flex absolute -top-48 -left-16 text-right bg-[#FBFBFB] p-2 rounded-2xl rounded-tl-none border shadow-md">
            حفاظت از حریم شخصی کاربران
            <br />و احترام به حقوق آن‌ها
            <MdSecurity className="text-[#03C0C1] text-2xl m-2" />
          </div>

          <div className="flex absolute -top-20 -right-28 text-right bg-[#FBFBFB] p-2 rounded-xl rounded-tr-none border shadow-md">
            بدون نیاز به ایجاد اکونت برای
            <br />
            دسترسی به مطالب
            <FaUser className="text-[#03C0C1] text-2xl m-2" />
          </div>

          <div className="flex text-right absolute -bottom-32 -left-20 bg-[#FBFBFB] p-2 rounded-2xl rounded-br-none border shadow-md">
            اپلیکیشن موبایل برای
            <br />
            اندروید و IOS
            <CiMobile3 className="text-[#03C0C1] text-2xl m-2" />
          </div>

          <div className="flex absolute bottom-60 -right-16 bg-[#FBFBFB] p-2 rounded-xl rounded-bl-none border shadow-md">
            محیط امن و بستری وسیع برای
            <br />
            جستجوی آسان و مطمئن
            <LuLockKeyhole className="text-[#03C0C1] text-2xl m-2" />
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
          <div className="absolute top-24 left-4 bg-[#FBFBFB]/95 rounded-tl-none rounded-2xl backdrop-blur-sm border shadow-md p-3 text-sm flex items-center justify-end gap-2">
            <div className="text-right">
              حفاظت از حریم شخصی کاربران
              <br />و احترام به حقوق آن‌ها
            </div>
            <MdSecurity className="text-[#03C0C1] text-xl" />
          </div>

          <div className="absolute top-16 right-4 bg-[#FBFBFB]/95 rounded-tr-none rounded-2xl backdrop-blur-sm border shadow-md p-3 text-sm flex items-center justify-end gap-2">
            <div className="text-right">
              بدون نیاز به ایجاد اکونت برای
              <br />
              دسترسی به مطالب
            </div>
            <FaUser className="text-[#03C0C1] text-xl" />
          </div>

          <div className="absolute bottom-52 left-0 bg-[#FBFBFB]/95 rounded-br-none rounded-2xl backdrop-blur-sm border shadow-md p-3 text-sm flex items-center justify-end gap-2">
            <div className="text-right">
              اپلیکیشن موبایل برای
              <br />
              اندروید و IOS
            </div>
            <CiMobile3 className="text-[#03C0C1] text-xl" />
          </div>

          <div className="absolute bottom-64 right-0 text-right rounded-bl-none bg-[#FBFBFB]/95 backdrop-blur-sm border shadow-md rounded-2xl p-2 text-sm flex items-center justify-end gap-1">
            <div className="text-right">
              محیط امن و بستری وسیع برای
              <br />
              جستجوی آسان و مطمئن
            </div>
            <LuLockKeyhole className="text-[#03C0C1] text-xl" />
          </div>
        </div>
      </div>

      {/* موبایل */}
      <div className="block sm:hidden mt-10 px-4">
        {/* پیام‌ها با انیمیشن */}
        <div className="overflow-hidden mb-6">
          <div className="flex animate-slide gap-3">
            <div className="flex bg-[#FBFBFB] border rounded-xl p-2 shadow-md text-sm whitespace-nowrap">
              حفاظت از حریم شخصی کاربران
              <MdSecurity className="text-[#03C0C1] text-lg ml-2" />
            </div>
            <div className="flex bg-[#FBFBFB] border rounded-xl p-2 shadow-md text-sm whitespace-nowrap">
              بدون نیاز به ایجاد اکونت برای دسترسی به مطالب
              <FaUser className="text-[#03C0C1] text-lg ml-2" />
            </div>
            <div className="flex bg-[#FBFBFB] border rounded-xl p-2 shadow-md text-sm whitespace-nowrap">
              اپلیکیشن موبایل برای اندروید و IOS
              <CiMobile3 className="text-[#03C0C1] text-lg ml-2" />
            </div>
            <div className="flex bg-[#FBFBFB] border rounded-xl p-2 shadow-md text-sm whitespace-nowrap">
              محیط امن و بستری برای جستجوی آسان و مطمئن
              <LuLockKeyhole className="text-[#03C0C1] text-lg ml-2" />
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
