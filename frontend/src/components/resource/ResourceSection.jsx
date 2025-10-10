// frontend/src/components/ResourceSection.jsx
import ResourceCard from './ResourceCard';
import expressvpnLogo from "../../assets/image/expressvpn.png";
import nordvpnLogo from "../../assets/image/nordvpn.png";
import clearvpnLogo from "../../assets/image/clearvpn.webp";
import hotspotLogo from "../../assets/image/hotspot.webp";
import protonLogo from "../../assets/image/protonvpn.png";


const resourceData = [
  {
    name: "ExpressVPN",
    website: "https://www.expressvpn.com",
    logo: expressvpnLogo,
    rating: "9.8",
    features: [
      "راه‌اندازی فوری و استفاده بسیار آسان",
      "سازگار با Netflix، Amazon Prime Video، Hulu، HBO",
      "هویت کاربر کاملاً پنهان است",
      "سرعت بالا و مناسب برای استریمینگ و استفاده بدون وقفه",
      "رمزگذاری بسیار امن",
      "تعداد سرورهای گسترده",
      "پیشنهاد برای: افرادی که به سرعت و عملکرد بالا اهمیت می‌دهند",
    ],
    link: "https://www.expressvpn.com",
  },
  {
    name: "NordVPN",
    website: "https://www.nordvpn.com",
    logo: nordvpnLogo,
    rating: "9.8",
    features: [
      "اتصالات Multihop و Tor",
      "شبکه‌ی سرور گسترده",
      "آسان برای راه‌اندازی و آسان برای استفاده",
      "امنیت بسیار بالا",
      "رمزگذاری پیشرفته",
      "سرعت مناسب",
      "یکی از بهترین گزینه‌ها برای حفظ حریم خصوصی و عبور از محدودیت‌ها",
    ],
    link: "https://www.nordvpn.com",
  },
  {
    name: "ClearVPN",
    website: "https://www.clearvpn.com",
    logo: clearvpnLogo,
    rating: "9.8",
    features: [
      "راه‌اندازی آسان برای کاربران جدید",
      "رابط کاربری ساده و جذاب",
      "سرعت بالا و بدون تاخیر",
      "پشتیبانی عالی از کاربران",
      "محافظت از حریم خصوصی، قابلیت تغییر موقعیت جغرافیایی",
      "این برنامه از تورنت پشتیبانی می‌کند پس می‌توانید به راحتی هر محتوایی را دانلود کنید",


    ],
    link: "https://www.clearvpn.com",
  },
  {
    name: "Hotspot Shield",
    website: "https://www.hotspotshield.com",
    logo: hotspotLogo,
    rating: "9.8",
    features: [
      "اتصالات سریع و پایدار",
      "توانایی پنهان کردن کاربران از وب سایت‌های برجسته با کمک فناوری تونل مجازی",
      "پشتیبانی از پلتفرم‌های مختلف",
      "امنیت بسیار بالا",
      "حذف تمام رکوردها پس از پایان جستجو و استفاده",
      "گزینه‌ای مناسب برای کاربران روزمره",
      "نسخه رایگان با ۵۰۰ مگابایت ترافیک روزانه",
    ],
    link: "https://www.hotspotshield.com",
  },
  {
    name: "ProtonVPN",
    website: "https://www.protonvpn.com",
    logo: protonLogo,
    rating: "9.8",
    features: [
      "سرورهای پیشرفته",
      "صد درصد رایگان، حفاظت از حریم خصوصی",
      "امنیت سطح بالا و بدون تبلیغات",
      "یکی از قدرتمندترین VPN برای رایانه‌های شخصی ویندوز",
      "پشتیبانی از Multihop",
      "رابط کاربری مدرن و ساده",
      "هیچ فعالیت نگهداری داده توسط این ارائه‌دهنده خدمات VPN وجود ندارد",
    ],
    link: "https://www.protonvpn.com",
  },
];

const ResourceSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-right mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          وی‌پی‌ان برای انواع کامپیوتر و موبایل
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          مجموعه‌ای از سریع‌ترین و مطمئن‌ترین وی‌پی‌ان‌های موجود جهت استفاده‌ای ایمن و آسان برای شما جمع‌آوری گردیده است
        </p>
      </div>

      <div className="space-y-6">
        {resourceData.map((vpn, index) => (
          <ResourceCard key={index} {...vpn} />
        ))}
      </div>
    </section>
  );
};

export default ResourceSection;
