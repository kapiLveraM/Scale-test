import React from 'react'

import ContactUs from './ContactUs'
import FaqSection from './FaqSection'

const FaqAndContactUs = () => {
  return (
    <div  className=' position-relative'>
        <div className="Faq_and_contactUs_shadow"></div>
      <FaqSection/>
      <ContactUs/>
    </div>
  )
}
export default FaqAndContactUs
