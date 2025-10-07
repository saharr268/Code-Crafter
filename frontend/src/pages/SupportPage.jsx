import React from 'react'
import Navbar from '../components/common/Navbar'
import Faq from '../helpers/Faq'
import Footer from '../components/common/Footer'
import OfflineTips from '../helpers/OfflineTips'
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
