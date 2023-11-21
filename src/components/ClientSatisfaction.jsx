import React from 'react'
import ClientSatisfactionImg from "../assets/img/webp/client-satisfaction-img.webp"
const ClientSatisfaction = () => {
  return (
    <>
     <div
    className="mt-5 mb-xl-5 mb-md-5 mb-sm-5 mb-5 pb-sm-4 pb-md-5 pt-md-5 pb-xl-5 pt-xl-4 mt-sm-5 pt-sm-4 mt- position-relative">
    <div className="shadow_position1"></div>
    <div className="mb-xl-5">
      <div className="container about_custom_container">
        <div className="row pb-xl-5 mb-xl-5 flex-column-reverse flex-xl-row align-items-center pt-xl-2">
          <div className="col-xl-6 mt-md-4 mt-4 mt-xl-0 d-flex justify-content-center about_mobile_image_padding_right">
            <div className="position-relative">
              <img width="298px" height="372px" className=" w-100"
                src={ClientSatisfactionImg } alt="client-satisfaction"/>
            </div>
          </div>
          <div className="col-xl-6 ps-xl-0  custom_padding_left position-relative custom_text_maxW
            text-center text-xl-start mx-auto">
            <span className="blue_line d-xl-block d-none " ></span>
            <h2 className="font-lg fw_medium custom_light_black mb-0 custom_heading_lh opacity70">We Stand By Our Core
              Values
              Of
              Integrity & Client
              Satisfaction</h2>
            <div >
              <p className="font-sm fw-normal custom_light_black mb-0 pt-md-3 pt-2 mt-sm-1 mt-md-0  custom_lh opacity70">
                Everything we do stems from
                our
                desire to reach
                higher and higher levels of quality and efficiency. As a group of passionate dreamers and proactive
                doers,
                we leave nothing to chance when it comes to our products. Our smartphones undergo numerous quality
                checks
                by
                our experts to ensure they tick all the right boxes before they reach you. This` commitment has earned
                us
                the
                respect and trust of customers all over the world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shadow"></div>
  </div>
    </>
  )
}

export default ClientSatisfaction