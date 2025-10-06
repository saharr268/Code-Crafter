import AboutSection from "../components/home/AboutSection";
import BannerSection from "../components/home/BannerSection";
import CardSection from "../components/CardSection";
import Testimonials from "../components/Testimonials";
import MostViewedSection from "../components/home/MostViewedSection";
import { FaComments, FaFolder, FaQuestionCircle, FaBook } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <AboutSection />
      
    
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    صدا چگونه به شما کمک می‌کند؟
                  </h2>
            
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CardSection
                       icon={<FaComments className="w-6 h-6" />}
                      title="چت‌بات مجهز به تکنولوژی هوش مصنوعی"
                      description="معرفی بهترین منابع موجود در دنیای تکنولوژی جهت بالا بردن سطح امنیت شما."
                    />
                    <CardSection
                       icon={<FaFolder className="w-6 h-6" />}
                      title="منابع قابل اطمینان برای استفاده ایمن"
                      description="معرفی بهترین منابع موجود در دنیای تکنولوژی جهت بالا بردن سطح امنیت شما."
                    />
                    <CardSection
                       icon={<FaQuestionCircle className="w-6 h-6" />}
                      title="کوئیزهای مرتبط با مطالب و تست‌های کمکی"
                      description="سوالات جذاب و آموزنده، جهت محک زدن یادگیری و سطح اطلاعات."
                    />
                    <CardSection
                      icon={<FaBook className="w-6 h-6" />}
                      title="آموزش مطالب صحیح و کاربردی"
                      description="مجموعه‌ی جامع و مفید از ضروری‌ترین مطالب امنیت در فضای دیجیتال و تکنولوژی."
                    />
                  </div>
                </section>

      
      <Testimonials />
       

      <BannerSection />
      <MostViewedSection/>
    </div>
  )
}

export default Home;
