import React from "react";
import { useNavigate } from "react-router-dom";
import secApp from "../images/sec-app.png";
import secVpn from "../images/sec-vpn.png";
import emergencyToolkit from "../images/emergency-toolkit.png";
import browserExt from "../images/browser-extension.png";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

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
    path: "/resources/apps",
  },
  {
    title: "انواع Browser Extensions",
    image: browserExt,
    bg: "bg-[#dff6f9]",
    path: "/resources/extensions",
  },
  {
    title: "ابزار اضطراری Emergency Toolkit",
    image: emergencyToolkit,
    bg: "bg-[#f3eaf9]",
    path: "/resources/emergency",
  },
];

export default function ResourcesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <div className="fixed top-6 px-6 w-full z-50 mt-6">
        <Navbar />
      </div>

      <div dir="rtl" className="px-4 py-4 mt-52">
        <div className="max-w-5xl mx-auto ">
          <div className="mb-12 ml-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-right ml-11">
              منابع
            </h2>
            <p className="text-gray-600 mb-10 text-sm sm:text-base text-right leading-relaxed">
              مجموعه‌ی منابع شامل مطمئن‌ترین و آسان‌ترین ابزارهای فناوری جهت
              استفاده‌ای امن و با کیفیت برای شما جمع‌آوری گردیده است.
            </p>
          </div>

          {/* کارت‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((item, idx) => (
              <div
                key={idx}
                onClick={() => navigate(item.path)}
                className={`${item.bg} relative rounded-2xl shadow-sm p-6 h-72 hover:shadow-md cursor-pointer transition`}
              >
                <h3 className="absolute top-8 right-6 text-gray-800 font-semibold text-lg sm:text-xl leading-snug text-right">
                  {item.title}
                </h3>

                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute bottom-3 left-7 w-40 sm:w-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
