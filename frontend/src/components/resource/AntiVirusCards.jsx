// frontend/src/components/ResourceSection.jsx
import ResourceCard from './ResourceCard';
import avastLogo from "../../assets/images/avast.jpg";
import aviraLogo from "../../assets/images/avira.png";
import bitdefenderLogo from "../../assets/images/bitdefender.png";
import msdefenderLogo from "../../assets/images/msdefender.webp";
import Navbar from '../common/Navbar';


const resourceData = [
  {
    name: "Avast",
    website: "https://www.avast.com",
    logo: avastLogo,
    rating: "4.7",
    features: [
    "محافظت پیوسته از سیستم در برابر تهدیداتی مانند ویروس‌ها، جاسوس‌افزارها و روت‌کیت‌ها",
    "شناسایی برنامه‌های ناخواسته و تهدیدات از طریق موتور اسکن هوشمند",
    "محافظت از سیستم در برابر هکرها و نفوذهای غیرمجاز با کنترل ترافیک شبکه",
    " فیلتر کردن ایمیل‌های مخرب و هرزنامه‌ها",
    "اسکن شبکه وای‌فای برای شناسایی آسیب‌پذیری‌ها",
    "محافظت از رمزهای عبور در مرورگرهای مختلف",
    "اجرای فایل‌ها در محیط ایزوله و امن برای جلوگیری از آسیب به سیستم اصلی"
    ],
    link: "https://www.avast.com/download-thank-you?product=FAV-ONLINE-HP&locale=en-in&direct=1",
  },
  {
    name: "Avira",
    website: "https://www.avira.com",
    logo: aviraLogo,
    rating: "4.5",
    features: [
      "شناسایی و مسدودسازی تهدیدات به محض ورود به سیستم",
      "محافظت در برابر وب‌سایت‌های مخرب و امن کردن فعالیت‌های آنلاین مانند خرید و بانکداری اینترنتی",
      "اسکن تمام ایمیل‌ها و پیوست‌های آن‌ها برای شناسایی بدافزارها",
      "استفاده از یادگیری عمیق برای محافظت در برابر حملات ناشناخته",
      "جلوگیری از تغییر یا غیرفعال شدن آنتی‌ویروس توسط بدافزارها",
      "بازیابی آسیب‌های وارد شده به فایل‌ها ناشی از بدافزارها",
    
    ],
    link: "https://www.avira.com/?srsltid=AfmBOooWiBpY_LfDVp7Sl_X2xFBaboZaMPKFXIbkZ5_qkka1AcJS8SbV",
  },
  {
    name: "Bitdefender",
    website: "https://www.bitdefender.com",
    logo: bitdefenderLogo,
    rating: "4.8",
    features: [
      "شامل حفاظت پیشرفته در برابر باج‌افزار، ویروس‌ها، جاسوس‌افزارها و تهدیدات آنلاین",
      "شامل مرورگر امن برای تراکنش‌های بانکی و خرید آنلاین، محافظت در برابر لینک‌های مخرب و فیشینگ",
      "بررسی امنیت شبکه وای‌فای برای جلوگیری از اتصال به شبکه‌های ناامن",
      "مسدود کردن ردیاب‌هایی که اطلاعات شما را جمع‌آوری می‌کنند",
      "ذخیره و مدیریت امن رمزهای عبور و اطلاعات حساس دیگر",
      "جلوگیری از تهدیدات در لینک‌های ارسالی از طریق شبکه‌های اجتماعی",
      "ابزاری برای پاک کردن امن فایل‌ها به طوری که قابل بازیابی نباشند",

    ],
    link: "https://www.bitdefender.com",
  },
  {
    name: "Microsoft Defender",
    website: "https://www.microsoft.com/",
    logo: msdefenderLogo,
    rating: "4.4",
    features: [
      "به‌طور مداوم فعالیت‌های سیستم را برای شناسایی تهدیدات بدافزارها، ویروس‌ها و تروجان‌ها نظارت می‌کند",
      "امکان اسکن سریع، کامل، و زمان‌بندی‌شده را برای اطمینان از پاک‌سازی سیستم فراهم می‌کند",
      "از دستگاه شما در برابر حملات فیشینگ و وب‌سایت‌های مخرب محافظت می‌کند",
      "به صورت خودکار از دسترسی شما به وب‌سایت‌های مخرب جلوگیری می‌کند",
      "به‌طور مداوم برای ارائه بهترین حفاظت به‌روزرسانی می‌شود",
      "گزینه‌هایی برای کنترل والدین جهت محافظت از کودکان شما نیز دارد",
      "به عنوان یک ابزار امنیتی داخلی در ویندوز تعبیه شده و به خوبی با آن یکپارچه است"
     
    ],
    link: "https://apps.microsoft.com/detail/9p6pmztm93lr?hl=en-US&gl=US",
  },
 
];

const ResourceSection = () => {
  return (
    <section className="bg-gray-50 py-40 px-4 sm:px-8">
      <div className="top-6 px-6 w-full z-50 fixed">
        <Navbar/>
      </div>
      <div className="max-w-6xl mx-auto text-right mr-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          انتی‌ویروس‌ها
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          مجموعه‌ای از سریع‌ترین، برترین، و امن‌ترین انتی‌ویروس‌های موجود در دنیای تکنولوجی جهت استفاده‌ای ایمن و آسان برای شما جمع‌آوری گردیده است
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
