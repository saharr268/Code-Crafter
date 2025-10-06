import React from 'react'
import { FaQq } from 'react-icons/fa'
import Navbar from '../components/common/Navbar'
import Faq from '../helpers/Faq'
import OfflineTips from '../helpers/OfflineTips'
import Footer from '../components/common/Footer'
import MessageBox from '../helpers/MessageBox'
import FAQSection from '../helpers/FAQSection'

const SupportPage = () => {
  return (
    <div>
      <Navbar />
      <Faq />
      <OfflineTips />
      <MessageBox />
      <FAQSection/>
      <Footer/>
    </div>
  );
}

export default SupportPage
