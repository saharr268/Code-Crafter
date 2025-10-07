import Faq from '../helpers/Faq'
import Footer from '../components/common/Footer'
import OfflineTips from '../helpers/OfflineTips'
import ChatBox from "../helpers/ChatBox";

const SupportPage = () => {
  return (
    <div>
      <Faq />
      <OfflineTips />
      <ChatBox/>
      <Footer/>
    </div>
  );
}

export default SupportPage
