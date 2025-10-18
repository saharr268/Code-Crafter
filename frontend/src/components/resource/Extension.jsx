// frontend/src/components/ResourceSection.jsx
import ResourceCard from './ResourceCard';
import googletranslateLogo from "../../assets/images/google-translate.png";
import lastpassLogo from "../../assets/images/lastpass.webp";
import adblockLogo from "../../assets/images/adblock.png";
import googlekeepLogo from "../../assets/images/googlekeep.png";
import ublockLogo from "../../assets/images/ublock.png";
import Navbar from '../common/Navbar';


const resourceData = [
  {
    name: "Google Translate",
    website: "https://translate.google.com",
    logo: googletranslateLogo,
    rating: "4.2",
    features: [
      "افزونه به طور خودکار زبان صفحه‌ای که در حال بازدید آن هستید را تشخیص می‌دهد و اگر با زبان مرورگر شما متفاوت باشد، آن را ترجمه می‌کند",
      "می‌توانید با انتخاب یک جمله یا پاراگراف، ترجمه آن را در یک پنجره پاپ‌آپ مشاهده کنید",
      "از بیش از ۱۳۰ زبان مختلف پشتیبانی می‌کند و این امکان را به کاربران می‌دهد تا متون را به زبان‌های متعددی ترجمه کنند",
      "برای سرعت بخشیدن به روند ترجمه وب‌سایت‌ها و متون آنلاین طراحی شده است",
      "با افزودن یک دکمه ساده به نوار ابزار مرورگر، دسترسی به ابزار ترجمه را آسان می‌کند",
    ],
    link: "https://chromewebstore.google.com/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=en",
  },
  {
    name: "LastPass",
    website: "https://www.lastpass.com",
    logo: lastpassLogo,
    rating: "4.3",
    features: [
      "ایجاد رمزهای عبور قوی و منحصر به فرد برای هر حساب و ذخیره‌سازی متمرکز آن‌ها",
      "پر کردن خودکار اطلاعات ورود به وب‌سایت‌ها و فرم‌های شخصی",
      "استفاده از رمزهای عبور قوی، احراز هویت چند مرحله‌ای و ذخیره‌سازی امن در خزانه آنلاین",
      "دسترسی به اطلاعات از طریق مرورگرهای مختلف مانند کروم، فایرفاکس، مایکروسافت اج و سافاری",
      "همگام‌سازی داده‌ها در میان کامپیوترها و دستگاه‌های مختلف",
      "امکان اشتراک‌گذاری امن اطلاعات و رمزهای عبور با دیگران",
      "پشتیبانی از زبان‌های مختلف از جمله انگلیسی، فارسی، آلمانی و اسپانیایی",
    ],
    link: "https://chromewebstore.google.com/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd",
  },
  {
    name: "AdBlock Plus",
    website: "https://www.adblockplus.org",
    logo: adblockLogo,
    rating: "4.4",
    features: [
    "تبلیغات مزاحم در صفحات وب، از جمله بنرها، پنجره‌های پاپ‌آپ و تبلیغات ویدیویی را مسدود می‌کند",
    "ردیابی کاربران در وب‌سایت‌ها را مسدود می‌کند و از جمع‌آوری اطلاعات توسط شرکت‌های تبلیغاتی جلوگیری می‌کند",
    "از دسترسی به وب‌سایت‌هایی که حاوی بدافزار یا تبلیغات مخرب هستند، جلوگیری می‌کند",
    "کاربران می‌توانند لیست‌های سفارشی خود را برای فیلتر کردن محتوا ایجاد کنند و سایت‌های مورد نظرشان را به لیست سفید اضافه نمایند",
    "با مسدود کردن تبلیغات، مصرف پهنای باند اینترنت را کاهش می‌دهد و سرعت بارگذاری صفحات را بهبود می‌بخشد",

    ],
    link: "https://chromewebstore.google.com/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb",
  },
  {
    name: "Google Keep",
    website: "https://keep.google.com",
    logo: googlekeepLogo,
    rating: "4.0",
    features: [
      "یادداشت‌های شما به‌طور خودکار در تمام دستگاه‌هایتان همگام‌سازی می‌شوند",
      "صدا ضبط کنید و کیپ آن را به متن تبدیل می‌کند تا بعداً بتوانید آن را پیدا کنید",
      "یادداشت‌هایتان را با دیگران به اشتراک بگذارید و به‌صورت هم‌زمان روی آن‌ها کار کنید",
      "از رنگ‌ها و برچسب‌ها برای سازماندهی و دسته‌بندی یادداشت‌ها استفاده کنید",
      "به سرعت هر چیزی را که ذخیره کرده‌اید با جستجو پیدا کنید",
      "از یادداشت‌ها، اسناد و کارت‌های ویزیت عکس بگیرید و آنها را ذخیره کنید",
      "یادآوری‌ها را بر اساس زمان یا مکانی که به آنجا می‌رسید، تنظیم کنید",
    ],
    link: "https://chromewebstore.google.com/detail/google-keep-chrome-extens/lpcaedmchfhocbbapmcbpinfpgnhiddi?hl=en",
  },
  {
    name: "UBlock Origin",
    website: "https://www.ublockorigin.com",
    logo: ublockLogo,
    rating: "4.8",
    features: [
      "به طور موثر تبلیغات را حذف کرده و از باز شدن سایت‌های مزاحم جلوگیری می‌کند",
      "با مسدود کردن عناصر اضافی، به صرفه‌جویی در مصرف اینترنت کمک می‌کند",
      "امکاناتی مانند مشاهده یک سایت بدون بارگذاری فایل‌های ناخواسته از آن را فراهم می‌کند",
      "پشتیبانی از بیش از ۵۰ زبان مختلف",
      "قابلیت فعال و غیرفعال کردن لیست‌های فیلترهای مختلف را فراهم می‌کند",
      "می‌توانید اسکریپت‌ها را به صورت موقت یا دائم مسدود کنید",
      "یوبلاک اوریجین داده‌های کاربران را نمی‌فروشد و در برنامه‌های لیست سفید تبلیغات شرکت نمی‌کند"
      
    ],
    link: "https://chromewebstore.google.com/detail/ublock/epcnnfbjfcgphgdmggkamkmgojdagdnn?hl=en",
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
          Browser Extensions
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          مجموعه‌ای از مفیدترین و مطمئن‌ترین اکستنشن‌ها برای مرورگرهای شما جهت استفاده‌ای ایمن و آسان جمع‌آوری گردیده است
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
