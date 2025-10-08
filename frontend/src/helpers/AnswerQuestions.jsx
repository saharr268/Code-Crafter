import React from "react";

export default function FAQSection() {
  return (
    <section className="bg-[#8C58D9] flex justify-center items-center py-12 px-6 min-h-screen rounded-t-[40px]">
      <div className="w-full max-w-4xl text-right pr-40">
        {/* عنوان */}
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          پاسخ پیام‌های شما
        </h2>
        {/* توضیح کوتاه */}
        <p className="text-purple-100 mb-10 text-sm md:text-base">
          دوست عزیز! اگر جواب سوالی که داری، در بخش «سوالات متداول» موجود نیست،
          می‌توانی به صورت ناشناس برای ما پیام ارسال کنی. تیم مدیریت در بخش پاسخ
          سوالات شما، به آن جواب خواهد داد.
        </p>

        {/* کارت‌های سوال و جواب */}
        <div className="space-y-6">
          {/* کارت اول */}
          <div className="bg-white text-right p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold mb-3 text-gray-800">
              مطالب وبسایت برای چه کسانی مفید و قابل استفاده است؟
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              اهمیت امنیت در دنیای دیجیتال در حفاظت از اطلاعات حساس شخصی و
              سازمانی در برابر تهدیدات سایبری، جلوگیری از کلاهبرداری، سرقت هویت،
              و تخریب سیستم‌ها، و همچنین حفظ اعتبار و اعتماد، نهفته است. با
              افزایش وابستگی به فناوری اطلاعات، تامین امنیت برای حفظ حریم خصوصی،
              منافع مالی و تداوم کسب‌وکارها بیش از هر زمان دیگری ضروری است.
            </p>
          </div>

          {/* کارت دوم */}
          <div className="bg-white text-right p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold mb-3 text-gray-800">
              مطالب وبسایت برای چه کسانی مفید و قابل استفاده است؟
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              اهمیت امنیت در دنیای دیجیتال در حفاظت از اطلاعات حساس شخصی و
              سازمانی در برابر تهدیدات سایبری، جلوگیری از کلاهبرداری، سرقت هویت،
              و تخریب سیستم‌ها، و همچنین حفظ اعتبار و اعتماد، نهفته است. با
              افزایش وابستگی به فناوری اطلاعات، تامین امنیت برای حفظ حریم خصوصی،
              منافع مالی و تداوم کسب‌وکارها بیش از هر زمان دیگری ضروری است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
