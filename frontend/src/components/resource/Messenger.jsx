// frontend/src/components/ResourceSection.jsx
import ResourceCard from "./ResourceCard";
import whatsappLogo from "../../assets/images/whatsapp.png";
import telegramLogo from "../../assets/images/telegram.webp";
import wechatLogo from "../../assets/images/wechat.png";
import messengerLogo from "../../assets/images/messenger.png";
import signalLogo from "../../assets/images/signal.png";
import discordLogo from "../../assets/images/discord.png";
import Navbar from "../common/Navbar";
import { AnimationSlideIn } from "../common/Animations";

const resourceData = [
  {
    name: "Whatsapp",
    website: "https://www.whatsapp.com/",
    logo: whatsappLogo,
    rating: "4.7",
    features: [
      "ارسال پیام‌های متنی، صوتی، تصویری، و فایل‌های چندرسانه‌ای مانند عکس و ویدئ",
      "برقراری تماس صوتی و تصویری با دیگر کاربران",
      " ایجاد گروه‌های چت با چندین نفر و عضویت در کانال‌ها برای پیگیری موضوعات مورد علاقه",
      " به اشتراک‌گذاری عکس، ویدئو و یادداشت صوتی روزمره با مخاطبان",
      " امکان قفل‌گذاری چت‌ها با رمز عبور، اثر انگشت یا تشخیص چهره برای حفظ حریم خصوصی",
    ],
    link: "https://www.whatsapp.com/",
  },
  {
    name: "Telegram",
    website: "https://www.telegram.org/",
    logo: telegramLogo,
    rating: "4.7",
    features: [
      "ارسال و دریافت انواع پیام‌ها، عکس، ویدئو",
      "برقراری تماس صوتی و تصویری امن و باکیفیت",
      "ایجاد گروه‌های چت با تعداد اعضای نامحدود و کانال‌های عمومی یا خصوصی برای انتشار مطالب",
      "امنیت بسیار بالا",
      "ایجاد گفتگوهایی که پیام‌هایشان به صورت خودکار حذف می‌شوند و قابل ذخیره‌سازی نیستند",
      "اشتراک‌گذاری انواع فایل‌ها با حجم بالا",
      "تنظیمات دقیق برای مدیریت تماس‌ها، حریم خصوصی و کنترل دسترسی به موقعیت مکانی و رسانه‌های دریافتی",
      "پین کردن چت‌ها، بی‌صدا کردن مخاطبین و گروه‌ها، و امکان ذخیره‌سازی پیام‌های مهم برای دسترسی آسان‌تر",
    ],
    link: "https://www.telegram.org/",
  },
  {
    name: "Wechat",
    website: "https://www.wechat.com/",
    logo: wechatLogo,
    rating: "4.0",
    features: [
      " ارسال پیام‌های متنی، صوتی و تصویری در چت‌های فردی و گروهی",
      " برقراری تماس‌های صوتی و تصویری با کیفیت بالا، هم به‌صورت فردی و هم گروهی",
      "امکان ترجمه پیام‌ها و مطالب لحظات به زبان‌های مختلف",
      "به اشتراک گذاشتن موقعیت مکانی لحظه‌ای با دوستان",
      "پیدا کردن و اضافه کردن کاربران دیگر در نزدیکی شما",
      " انتقال پول به دوستان و خانواده",
      "انجام پرداخت‌های آنلاین و حضوری از طریق اسکن بارکد در فروشگاه‌ها، رستوران‌ها و سایر مکان‌ها.",
    ],
    link: "https://www.wechat.com/",
  },
  {
    name: "Facebook Messenger",
    website: "https://www.messenger.com/",
    logo: messengerLogo,
    rating: "4.5",
    features: [
      "امکان ارسال پیام‌های متنی به دوستان فیس‌بوک و مخاطبین تلفن",
      "ارسال و دریافت عکس‌ها و ویدیوهای باکیفیت",
      "ارسال فایل‌های بزرگ با فرمت‌های مختلف تا حجم 100 مگابایت",
      "امکان ویرایش پیام‌ها تا 15 دقیقه پس از ارسال یا حذف کامل آن‌ها",
      "امکان استفاده از چندین حساب کاربری در یک برنامه",
      "امکان شروع چت‌های رمزگذاری‌شده که محتوای آن تنها برای شما و گیرنده قابل مشاهده است",
      "تنظیماتی برای مدیریت اینکه چه کسانی می‌توانند با شما تماس بگیرند و پیام‌های آن‌ها چگونه نمایش داده شود",
    ],
    link: "https://www.messenger.com/",
  },
  {
    name: "Signal",
    website: "https://www.signal.org/",
    logo: signalLogo,
    rating: "4.6",
    features: [
      "ارسال پیام‌های متنی، صوتی، عکس، ویدئو، گیف و فایل با رمزگذاری سرتاسری انجام می‌شود",
      "امکان برقراری تماس‌های صوتی و تصویری فردی و گروهی امن با پشتیبانی تا ۴۰ نفر وجود دارد.",
      "پیام‌ها می‌توانند به صورت خودکار پس از مدت زمان مشخصی حذف شوند",
      "می‌توان قابلیت جلوگیری از گرفتن اسکرین‌شات از پیام‌ها را فعال کرد",
      "امکان قفل کردن برنامه با اثر انگشت، تشخیص چهره یا رمز عبور و مخفی کردن اعلانات در صفحه اصلی وجود دارد",
      "تمامی ارتباطات در سیگنال با رمزگذاری قوی و از طریق پروتکل متن‌باز سیگنال انجام می‌شود تا حریم خصوصی کاربران حفظ شود",
    ],
    link: "https://www.signal.org/",
  },

  {
    name: "Discord",
    website: "https://www.discord.com/",
    logo: discordLogo,
    rating: "4.5",
    features: [
      "امکان چت متنی، تماس صوتی و تصویری",
      "ایجاد و پیوستن به فضاهای آنلاین با نام «سرور» برای گروه‌های مختلف",
      "امکان دسته‌بندی کانال‌ها برای موضوعات مختلف در هر سرور",
      "امکانات برای حفظ حریم خصوصی و امنیت، از جمله ابزارهای مدیریت و تشخیص خودکار سواستفاده",
      "امکان شخصی‌سازی سرورها برای نیازهای منحصر به فرد هر جامعه",
      "قابلیت جستجو و یافتن سرورهای جدید بر اساس دسته‌بندی‌های مختلف",
    ],
    link: "https://www.discord.com/",
  },
];

const ResourceSection = () => {
  return (
    <section className="bg-gray-50 py-40 px-4 sm:px-8">
      <div className="top-6 px-6 w-full z-50 fixed">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto text-right mr-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          اپلیکیشن‌های پیام‌رسانی
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          مجموعه‌ای از سریع‌ترین و مطمئن‌ترین اپلیکیشن‌های پیام‌رسانی و ارنباطی
          موجود جهت استفاده‌ای ایمن و آسان برای شما جمع‌آوری گردیده است
        </p>
      </div>

      <div className="space-y-6">
        {resourceData.map((vpn, index) => (
          <AnimationSlideIn direction="left">
            <ResourceCard key={index} {...vpn} />
          </AnimationSlideIn>
        ))}
      </div>
    </section>
  );
};

export default ResourceSection;
