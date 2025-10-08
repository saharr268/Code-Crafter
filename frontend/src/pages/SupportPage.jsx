import Faq from '../helpers/Faq'
import Footer from '../components/common/Footer'
import OfflineTips from '../helpers/OfflineTips'
import AnswerQuestions from '../helpers/AnswerQuestions'
import MessageBox from '../helpers/MessageBox'

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
