import { useState } from "react";
import { FaRegImage } from "react-icons/fa";

export default function MessageBox() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("لطفا یک پیام وارد کنید!");
      return;
    }
    console.log("پیام ارسال شد:", message);
    setMessage("");
  };

  return (
    <section className="w-full flex justify-center items-center py-12 px-4 pr-96 bg-white">
      <div
        dir="rtl"
        className="w-full max-w-3xl bg-slate-50 rounded-lg shadow-sm p-8"
      >
        <h2 className="text-xl font-bold mb-3 text-gray-900">
          صندوق ارسال پیام
        </h2>
        <p className="text-gray-600 text-sm leading-6 mb-6">
          دوست عزیز! اگر جوابی برای سوالی که داری در بخش سوالات متداول وجود
          نداشت، می‌توانی به‌صورت ناشناس برای ما پیام ارسال کنی. تیم مدیریت در
          بخش پاسخ پیام‌های شما به آن جواب خواهد داد.
        </p>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              className="w-full min-h-[300px] p-4 rounded-lg border  bg-gray-200 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none text-gray-800 resize-none"
            ></textarea>

            {/*  Uplode image ico*/}
            <button
              type="button"
              className="absolute bottom-4 left-[670px]  text-gray-500 hover:text-teal-600"
            >
              <FaRegImage size={20} />
            </button>

            {/* send button */}
            <button
              type="submit"
              className="px-6 py-2 bg-teal-600 absolute right-[560px] bottom-6 text-white rounded-md hover:bg-teal-700 transition"
            >
              ارسال پیام
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
