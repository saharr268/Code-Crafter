// frontend/src/components/ResourceSection.jsx
import ResourceCard from './ResourceCard';
import expressvpnLogo from './assets/image/expressvpn.png';
import nordvpnLogo from './assets/image/nordvpn.png';
import clearvpnLogo from './assets/image/clearvpn.webp';
import hotspotLogo from './assets/image/hotspot.webp';
import protonLogo from './assets/image/protonvpn.png';

const resourceData = [
  {
    name: "ExpressVPN",
    website: "https://www.expressvpn.com",
    logo: expressvpnLogo,
    rating: "9.8",
    features: [
      "راه‌اندازی فوری و استفاده بسیار آسان",
      "سازگار با Netflix و Amazon Prime Video",
      "پشتیبانی از چندین دستگاه به طور هم‌زمان",
      "سرعت بسیار بالا و مناسب برای استریمینگ",
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
      "امنیت بسیار بالا",
      "یکی از بهترین گزینه‌ها برای حفظ حریم خصوصی",
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
      "پشتیبانی از پلتفرم‌های مختلف",
      "امنیت بسیار بالا",
      "گزینه‌ای مناسب برای کاربران روزمره",
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
      "امنیت سطح بالا",
      "پشتیبانی از Multihop",
      "رابط کاربری مدرن و ساده",
    ],
    link: "https://www.protonvpn.com",
  },
];

const ResourceSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          وی‌پی‌ان برای انواع کامپیوتر و موبایل
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          مجموعه‌ای از بهترین و مطمئن‌ترین ابزارهای تکنولوژی جهت استفاده‌ای امن و با کیفیت برای شما جمع‌آوری گردیده است.
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
