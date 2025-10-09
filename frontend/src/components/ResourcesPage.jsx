// src/ResourcesPage.jsx
import React from "react";
import secApp from "../images/sec-app.png";
import secVpn from "../images/sec-vpn.png";
import emergencyToolkit from "../images/emergency-toolkit.png";
import browserExt from "../images/browser-extension.png";

const resources = [
   {
    title: "وی‌پی‌ان برای انواع کامپیوتر و موبایل",
    image: secVpn,
    bg: "bg-[#e7dcf8]",
  },
  {
    title: "اپلیکیشن‌های ارتباطات و پیام‌رسانی",
    image: secApp,
    bg: "bg-[#d5f4f9]",
  },
   {
    title: "انواع Browser Extensions",
    image: browserExt,
    bg: "bg-[#dff6f9]",
  },
 
  {
    title: "ابزار اضطراری Emergency Toolkit",
    image: emergencyToolkit,
    bg: "bg-[#f3eaf9]",
  },
 
];

export default function ResourcesPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-right">
          منابع
        </h2>
        <p className="text-gray-600 mb-10 text-sm sm:text-base text-right leading-relaxed">
          مجموعه‌ی منابع شامل مطمئن‌ترین و آسان‌ترین ابزارهای فناوری جهت استفاده‌ای امن و با کیفیت برای شما جمع‌آوری گردیده است.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} relative rounded-2xl shadow-sm p-6 w-[98%] sm:w-[99%] h-72 hover:shadow-md transition`}
            >
              {/* Title (top-right) */}
              <h3 className="absolute top-8 right-6 text-gray-800 font-semibold text-lg sm:text-xl leading-snug text-right">
                {item.title}
              </h3>

              {/* Image (bottom-left) */}
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
  );
}
