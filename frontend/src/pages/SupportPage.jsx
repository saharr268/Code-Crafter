import Faq from '../helpers/Faq'
import Footer from '../components/common/Footer'
import OfflineTips from '../helpers/OfflineTips'
import ChatBox from "../helpers/ChatBox";
import AnswerQuestions from '../helpers/AnswerQuestions'

const SupportPage = () => {
  return (
    <div>
      <Faq />
      <OfflineTips />
      <AnswerQuestions/>
      <Footer/>
    </div>
  );
}

export default SupportPage
