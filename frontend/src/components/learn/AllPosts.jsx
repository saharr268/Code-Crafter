import React from "react";

// all six images
import digitalSafety from "../../assets/images/digital-safety.png";
import privacyPolicy1 from "../../assets/images/privacy.png";
import phishing from "../../assets/images/phishing.png";
import privacyPolicy2 from "../../assets/images/privacy.png";
import financialScam from "../../assets/images/phishing.png";
import privacyPolicy3 from "../../assets/images/privacy.png";


const posts = [
  { id: 1, title: "اهمیت امنیت در دنیای دیجیتال", image: digitalSafety },
  { id: 2, title: "حریم خصوصی در فضای مجازی", image: privacyPolicy1 },
  { id: 3, title: "فیشینگ و سوءاستفاده‌ی مالی", image: phishing },
  { id: 4, title: "حریم خصوصی در فضای مجازی", image: privacyPolicy2 },
  { id: 5, title: "فیشینگ و سوءاستفاده‌ی مالی", image: financialScam },
  { id: 6, title: "حریم خصوصی در فضای مجازی", image: privacyPolicy3 },
];

const AllPosts = () => {
  return (
    <section className="w-full bg-white py-10 px-6 sm:px-10 md:px-20 lg:px-32">
      {/* Page Title */}
      <h2 className="text-xl font-semibold text-right mb-12">همه‌ی مطالب</h2>

      {/* Responsive Grid */}
      <div className="-mx-1 sm:-mx-2 md:-mx-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-16 justify-items-center">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col items-center text-right">
            {/* Card */}
            <div className="bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-96 h-72 flex justify-center items-center p-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-56 h-56 object-contain"
              />
            </div>

            {/* Title (outside the card) */}
            <p className="mt-5 text-gray-800 text-sm md:text-base font-medium pr-2 text-center md:text-right">
              {post.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllPosts;
