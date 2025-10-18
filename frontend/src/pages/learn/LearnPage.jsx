import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import AllPosts from "../../components/learn/AllPosts";
import MostVisitedPost from "../../components/learn/MostVisitedPost";
import { PAGE_SIZE } from "../../helpers/constant/statics";
import { useLessonData } from "../../services/hooks/lessons";

const LearnPage = () => {
  const { data: getLessonData, isPending } = useLessonData(
    1,
    PAGE_SIZE,
    undefined
  );

  const data = getLessonData?.data ?? [];
  console.log("🚀 ~ LearnPage ~ data:", data);

  const recommendedLesson = data[2]; //! RECHECK HERE

  return (
    <div>
      <MostVisitedPost data={recommendedLesson} isLoading={isPending} />
      <AllPosts data={data} isLoading={isPending} />
      <Footer />
    </div>
  );
};

export default LearnPage;
