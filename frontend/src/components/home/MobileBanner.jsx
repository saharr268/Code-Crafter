import React from 'react';
import bannerBg from '../../assets/images/banner-bg.png';
import mobileBanner from '../../assets/images/mobile-banner.png';
import googlePlay from '../../assets/images/google-play.png';
import appStore from '../../assets/images/app-store.png';


const MobileBanner = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div
        className="max-w-[70rem] mx-auto flex flex-col md:flex-row items-center justify-between rounded-3xl bg-cover bg-center p-8 md:p-12"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        {/* Left side: Mobile image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={mobileBanner}
            alt="Mobile App"
            className="w-64 h-auto"
          />
        </div>

        {/* Right side: Text and buttons */}
        <div className="w-full md:w-1/2 text-right text-gray-800">
          <h2 className="text-4xl font-bold mb-2 leading-relaxed">
           برای دسترسی آسان و سریع،
            اپلیکیشن موبایل صدا را دانلود کنید 
          </h2>
          
          <div className="flex justify-end items-center gap-4">
  <img
    src={googlePlay}
    alt="Google Play"
    className="object-contain"
    style={{ height: "7.8rem", width: "auto" }} 
  />
  <img
    src={appStore}
    alt="App Store"
    className="object-contain"
    style={{ height: "7rem", width: "auto" }}
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default MobileBanner;