import React from "react";
import { useNavigate } from "react-router-dom";
import secApp from "../images/sec-app.png";
import secVpn from "../images/sec-vpn.png";
import emergencyToolkit from "../images/emergency-toolkit.png";
import browserExt from "../images/browser-extension.png";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { AnimationSlideIn } from "../components/common/Animations";

const resources = [
  {
    title: "وی‌پی‌ان برای انواع کامپیوتر و موبایل",
    image: secVpn,
    bg: "bg-[#e7dcf8]",
    path: "/resources/vpn", // مسیر جزئیات
  },
  {
    title: "اپلیکیشن‌های ارتباطات و پیام‌رسانی",
    image: secApp,
    bg: "bg-[#d5f4f9]",
    path: "/messaging",
  },
  {
    title: "انواع Browser Extensions",
    image: browserExt,
    bg: "bg-[#dff6f9]",
    path: "/extensions",
  },
  {
    title: "انواع انتی‌ویروس",
    image: emergencyToolkit,
    bg: "bg-[#f3eaf9]",
    path: "/antivirus",
  },
];

export default function ResourcesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <div className="fixed top-6 px-6 w-full z-50 ">
        <Navbar />
      </div>

      <div dir="rtl" className="justify-start mt-48">
        <div className="mb-8 justify-start mr-12">
          <h2 className="text-2xl sm:text-3xl text-gray-800 mb-2 text-right">
            منابع
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base text-right leading-relaxed">
            مجموعه‌ی منابع شامل مطمئن‌ترین و آسان‌ترین ابزارهای فناوری جهت
            استفاده‌ای امن و با کیفیت برای شما جمع‌آوری گردیده است.
          </p>
        </div>
        <AnimationSlideIn direction="left">
          <div className="max-w-5xl mx-auto ">
            {/* کارت‌ها */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24">
              {resources.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(item.path)}
                  className={`${item.bg} relative rounded-2xl shadow-sm p-6 w-9/10 h-72 hover:shadow-md cursor-pointer transition`}
                >
                  <h3 className="absolute top-8 right-6 text-gray-800 font-semibold text-lg sm:text-xl leading-snug text-right">
                    {item.title}
                  </h3>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute mb-2 mt-12 left-7 w-40 sm:w-48 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimationSlideIn>
      </div>

      <Footer />
    </div>
  );
}
