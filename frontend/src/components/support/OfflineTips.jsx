export default function OfflineTips() {
  return (
    <section className="bg-white py-12 px-6">
      <div
        dir="rtl"
        className="bg-teal-600 text-white w-full rounded-[55px] shadow-lg p-10 leading-8 max-w-5xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6">نکات دسترسی آفلاین</h2>

        <p className="mb-6 text-right">
          تقریبا تمامی مرورگرها در پلتفرم‌های مختلف گزینه‌ای برای دانلود کامل صفحات وب در اختیار کاربران می‌گذارند. این گزینه تحت عناوینی مانند{" "}
          <span className="font-semibold">Save webpage</span> یا{" "}
          <span className="font-semibold">Save page</span> شناخته می‌شود و امکان دانلود برای مرور آفلاین را فراهم می‌کند.
        </p>

        <h3 className="font-semibold text-lg mb-2">ذخیره وب سایت در کامپیوتر با Google Chrome</h3>
        <ol className="list-decimal list-inside space-y-1 mb-6">
          <li>در گوشه بالای سمت راست، منوی مرورگر را باز کنید.</li>
          <li>روی گزینه Save page as کلیک کنید.</li>
          <li>می‌توانید Cast، Save و Share را انتخاب کنید.</li>
        </ol>

        <h3 className="font-semibold text-lg mb-2">ذخیره وب سایت با FireFox</h3>
        <ol className="list-decimal list-inside space-y-1 mb-6">
          <li>در گوشه بالای سمت راست منوی مرورگر را باز کنید.</li>
          <li>روی گزینه Save page as کلیک کنید.</li>
        </ol>

        <h3 className="font-semibold text-lg mb-2">ذخیره وب سایت با Safari</h3>
        <ol className="list-decimal list-inside space-y-1 mb-6">
          <li>
            از منو Settings به Advanced بروید و گزینه{" "}
            <span className="font-semibold">Save Articles for Offline Reading Automatically</span> را فعال کنید.
          </li>
          <li>روی دکمه Share کلیک کنید و Add to Reading List را بزنید.</li>
        </ol>

        <p className="mt-6 text-justify">
          نکته: با فشردن <span className="font-semibold">Ctrl + S</span> در ویندوز یا{" "}
          <span className="font-semibold">Command + S</span> در مک می‌توانید صفحه را ذخیره کنید.
        </p>
      </div>
    </section>
  );
}
