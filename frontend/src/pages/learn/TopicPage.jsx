import { useParams } from "react-router-dom";
import { IoIosVideocam } from "react-icons/io";
import { BiSolidFilePdf } from "react-icons/bi";
import { useGetLessonById, useLessonData } from "../../services/hooks/lessons";
import { urlImageHandler } from "../../helpers/utils/images";
import Navbar from "../../components/common/Navbar";
import { PAGE_SIZE } from "../../helpers/constant/statics";
import { filter } from "lodash";
import { useGetQuizByLessonId } from "../../services/hooks/quizzes";
import { CustomShimmer } from "../../components/controllers/CustomShimmer";

const TopicPage = () => {
  const { id: currentId } = useParams();
  const { data: getLessonData } = useGetLessonById(
    currentId ? +currentId : currentId
  );
  const { content, title, video_url } = getLessonData?.data ?? {};

  const { data: lessons } = useLessonData(1, PAGE_SIZE, undefined);

  const lessonData = filter(
    [lessons?.data[11], lessons?.data[8]],
    (lesson) => lesson !== undefined
  );

  const getVideoId = (url = "") => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v");
  };
  const videoId = video_url && getVideoId(video_url ?? "");

  const { data: quizzes } = useGetQuizByLessonId(currentId);
  const quizId = quizzes?.data?.id ?? 0;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-16">
      <Navbar />
      <div
        className="max-w-7xl mt-32  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
        style={{ direction: "ltr" }}
      >
        <aside
          className="bg-[#F5F5F5] rounded-2xl p-6 order-1 lg:order-1 h-fit lg:sticky top-32 self-start"
          style={{ direction: "rtl" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">پیشنهاد صدا</h3>
          <div className="flex flex-col gap-5 mt-6 ">
            {lessonData?.map(({ id, thumbnail_url, title }) => (
              <div
                key={id}
                className="flex items-center justify-between gap-x-3 rounded-2xl"
              >
                <img
                  src={urlImageHandler(thumbnail_url)}
                  alt={title}
                  className="w-48 h-24 rounded-xl object-contain bg-accent-deep"
                />
                <h3 className="text-gray-800 font-medium text-base text-right w-1/2 leading-relaxed">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </aside>

        <main
          className="lg:col-span-2 bg-white rounded-2xl px-1 order-2 lg:order-2"
          style={{ direction: "rtl" }}
        >
          <div className="mb-8">
            <div className="rounded-2xl overflow-hidden aspect-video mb-4">
              {videoId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <CustomShimmer className="w-full h-full" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{title} </h2>
            <div className="w-full mb-6" style={{ direction: "ltr" }}>
              <div className="w-full gap-3 flex justify-end">
                <a
                  href="#"
                  className="flex items-center border-solid gap-2 border border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  دانلود فایل
                  <BiSolidFilePdf className="text-lg" />
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 border-solid border border-purple-600 text-purple-600 hover:text-white hover:bg-purple-500 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  دانلود ویدیو
                  <IoIosVideocam className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="font-yekan text-text-body markdown"
            style={{
              lineHeight: "28px",
              fontSize: "18px",
            }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </main>
      </div>

      <div
        style={{ direction: "rtl" }}
        className="max-w-7xl mx-auto mt-12 mb-6"
      >
        <div
          className="rounded-2xl px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between
                     bg-gradient-to-r from-[#00C6B3] via-[#06A6E8] to-[#7C4DFF] text-white shadow-lg"
        >
          <div className="mb-4 md:mb-0 text-center md:text-right">
            <p className="text-lg font-semibold">
              برای شرکت در کوییز مرتبط با این تاپیک آماده‌ای؟
            </p>
            <p className="text-sm opacity-90 mt-1">
              سوالات کوتاه و آموزنده برای محک زدن دانش شما — آماده‌اید شروع
              کنید؟
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
            <a
              href={`/practice/quiz/${quizId}`}
              className="inline-flex items-center gap-3 bg-white text-[#0f766e] hover:bg-white/90 px-6 py-3 rounded-full font-semibold transition-shadow shadow-md"
            >
              شروع کوییز
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
