export default function OfflineTips() {
  return (
    <section className="bg-white flex justify-center items-center py-12">
      <div
        dir="rtl"
        className="bg-teal-600 pr-40 text-white w-full rounded-[55px] shadow-lg p-10 leading-8"
      >
        {/* عنوان */}
        <h2 className="text-2xl font-bold mb-6">نکات دسترسی آفلاین</h2>

        {/* متن */}
        <p className="mb-6 text-right">
          تقریبا تمامی مرورگرها در پلتفرم‌های مختلف گزینه‌ای برای دانلود کامل
          صفحات وب در اختیار کاربران می‌گذارند. این گزینه در مرورگرهای مختلف تحت
          عناوینی مانند <span className="font-semibold">Save webpage</span> یا{" "}
          <span className="font-semibold">Save page</span> شناخته می‌شود و امکان
          دانلود یک صفحه مشخص وب یا کل صفحات یک وب‌سایت را برای مرور آفلاین در
          آینده فراهم می‌کند. همچنین برخی مرورگرها با امکان{" "}
          <span className="font-semibold">Reading List</span> مرور آفلاین را
          ساده‌تر کرده‌اند.
        </p>

        {/* Google Chrome */}
        <h3 className="font-semibold text-lg mb-2">
          ذخیره وب سایت در کامپیوتر با Google Chrome
        </h3>
        <ol className="list-decimal list-inside space-y-1 mb-6">
          <li>در گوشه بالای سمت راست، منوی مرورگر را باز کنید.</li>
          <li>روی گزینه Save page as کلیک کنید.</li>
          <li>می‌توانید Cast، Save و Share را انتخاب کنید.</li>
        </ol>

        {/* Firefox */}
        <h3 className="font-semibold text-lg mb-2">
          ذخیره وب سایت در کامپیوتر با FireFox
        </h3>
        <ol className="list-decimal list-inside space-y-1 mb-6">
          <li>در گوشه بالای سمت راست منوی مرورگر را باز کنید.</li>
          <li>روی گزینه Save page as کلیک کنید.</li>
        </ol>

        {/* Safari */}
        <h3 className="font-semibold text-lg mb-2">
          ذخیره وب سایت در کامپیوتر با Safari
        </h3>
        <ol className="list-decimal list-inside space-y-1 mb-6">
          <li>
            از منو Settings، به Advanced بروید و گزینه{" "}
            <span className="font-semibold">
              Save Articles for Offline Reading Automatically
            </span>{" "}
            را فعال کنید.
          </li>
          <li>روی دکمه Share کلیک کنید و Add to Reading List را بزنید.</li>
          <li>سپس در نوار کناری Sidebar روی Reading List کلیک کنید.</li>
        </ol>

        {/* نکته */}
        <p className="mt-8 text-justify">
          نکته: شما می‌توانید بدون نیاز به اینترنت مراحل گفته شده را برای دسترسی
          به پنجره ذخیره‌سازی محتوا طی کنید. همچنین می‌توانید با فشردن کلیدهای{" "}
          <span className="font-semibold">Ctrl + S</span> در ویندوز یا{" "}
          <span className="font-semibold">Command + S</span> در مک ذخیره‌سازی را
          انجام دهید.
        </p>

        {/* PDF */}
        <p className="mt-6 text-justify">
          همچنین ذخیره وب‌سایت به صورت PDF هم امکان‌پذیر می‌باشد. گزینه{" "}
          <span className="font-semibold">Print to PDF</span> در تقریباً تمام
          مرورگرها در دسترس است.
        </p>
      </div>
    </section>
  );
}
