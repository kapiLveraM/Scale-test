import React from 'react'
import goalImg from "../assets/img/webp/goal-img.png";
const SingleGoal = () => {
  return (
    <>
      <div
        id="why-choose-us"
        className="mt-md-5 mt-sm-5 mt-5 pt-md-5 pt-sm-4 pt-xl-5 position-relative"
      >
        <div className="shadow_position2"></div>
        <div className="container  about_custom_container">
          <div className="row justify-content-between flex-column-reverse flex-xl-row align-items-center pt-xl-2">
            <div className="col-xl-5 mt-md-4 mt-4 mt-xl-0 d-flex justify-content-center">
              <div className="position-relative">
                <img
                  width="346px"
                  height="418px"
                  className="about_phone_custom_class "
                  src={goalImg}
                  alt="phone_img"
                />
              
              </div>
            </div>

            <div
              className="col-xl-6 ps-xl-0  custom_padding_left position-relative custom_text_maxW
          text-center text-xl-start mx-auto me-xl-0 "
            >
              <span className="blue_line d-xl-block d-none"></span>
              <h2 className="font-lg fw_medium custom_light_black mb-0 custom_heading_lh opacity_07">
                We Started With A Single Goal: To Become The Trusted Source For
                All Things Smartphone In The International Re-Commerce World
              </h2>
              <div>
                <p className="font-sm fw-normal custom_light_black mb-0 pt-md-3 pt-2 mt-sm-1 mt-md-0 custom_lh opacity_07">
                  Our adventure started in 2010 when we founded SCal Mobile, a
                  tech solutions company focused on smartphones. It didn’t take
                  us long to understand the US borders could not fit us, and
                  what started as a small US-based business has since evolved
                  into an international industry leader, operating in the
                  Americas, Europe, Asia and the Middle East.{" "}
                </p>
                <p className="font-sm fw-normal custom_light_black mb-0 pt-2 custom_lh opacity_07">
                  From our inception, we have devoted our business to providing
                  clients with premium devices and services that change the
                  norms in the smartphone re-commerce industry, moving into a
                  new, more efficient era.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleGoal