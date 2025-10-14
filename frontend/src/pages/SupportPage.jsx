import Faq from '../components/support/Faq'
import Footer from '../components/common/Footer'
import OfflineTips from '../components/support/OfflineTips'
import AnswerQuestions from '../components/support/AnswerQuestions'
import MessageBox from '../components/support/ChatBox'

const SupportPage = () => {
  return (
    <div>
      <Faq />
      <OfflineTips />
      <MessageBox/>
      <AnswerQuestions/>
      <Footer/>
    </div>
  );
}

export default SupportPage
