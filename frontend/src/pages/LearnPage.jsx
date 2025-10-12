import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"
import AllPosts from "../components/learn/AllPosts"
import MostVisitedPost from "../components/learn/MostVisitedPost"


const LearnPage = () => {
  return (
    <div>
      
      <MostVisitedPost/>
      <AllPosts />
      <Footer/>
    </div>
  )
}

export default LearnPage
