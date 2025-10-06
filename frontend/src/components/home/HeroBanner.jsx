import { MdSecurity } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { LuLockKeyhole } from "react-icons/lu";
export default function HeroBanner() {
  return (
    <div className="bg-white min-h-screen mt-14">
      <div className="max-w-4xl mx-auto text-center relative">
        <p className="text-gray-500 text-2xl font-semibold md:text-base leading-relaxed">
          ما زنان افغان را با مهارت‌های امنیت دیجیتال توانمند می‌سازیم. صدا نه
          تنها یک آموزش‌دهنده، بلکه یک حامی برای
          <br />
          امنیت و آزادی زنان افغان در دنیای دیجیتال به شمار می‌رود.
        </p>
      </div>
      <div className="flex items-center justify-center min-h-screen mt-10">
        <div className="relative w-full max-w-2xl">
          {/* دایره اصلی با پس‌زمینه سبز */}
          <div className="absolute inset-0 flex items-center justify-center mt-[590px]">
            <div className="w-[810px] h-[680px] rounded-full bg-[#03C0C1] transform -translate-y-1/2 z-0"></div>
          </div>

          {/* تصویر یا محتوای اصلی */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src="../../../public/images/girl.png" // جایگزین با تصویر واقعی
              alt="User with phone"
              className="w-[500px] h-auto top-0 rounded-lg"
            />

            {/* متن‌ها و آیکون‌ها در اطراف */}
            <div className="flex absolute top-14 -left-12 bg-[#FBFBFB] p-2 rounded-2xl rounded-tl-none border shadow-md">
              حفاظت از حریم شخصی کاربران
              <br />و احترام به حقوق آن‌ها
              <MdSecurity className="text-[#03C0C1] mt-1 ml-2" />
            </div>
            <div className="flex absolute top-0 -right-14 bg-[#FBFBFB] p-2 rounded-xl rounded-tr-none border shadow-md">
              بدون نیاز به ایجاد اکونت برای
              <br />
              دسترسی به مطالب
              <FaUser className="text-[#03C0C1] mt-1 ml-2" />
            </div>
            <div className="flex text-right absolute bottom-32 -left-20 bg-[#FBFBFB] p-2 rounded-2xl rounded-br-none border shadow-md">
              اپلیکیشن موبایل برای
              <br />
              اندروید و IOS
              <CiMobile3 className="text-[#03C0C1] mt-1 ml-2" />
            </div>
            <div className="flex absolute bottom-60 -right-36 bg-[#FBFBFB] p-2 rounded-xl rounded-bl-none border shadow-md">
              محیط امن و بستری وسیع برای
              <br />
              جستجوی آسان و مطمئن
              <LuLockKeyhole className="text-[#03C0C1] mt-1 ml-2" />
            </div>
          </div>
          {/* نوار پایینی */}
          <div className="w-[900px] h-0 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <div className="relative  mx-auto text-center h-28 border-t-[20px] border-t-[#03C0C1] rounded-lg z-10 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


