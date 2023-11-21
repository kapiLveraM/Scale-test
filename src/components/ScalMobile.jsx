import React from 'react'
import ScalMobileImg from "../assets/img/webp/scal-img.webp"
const ScalMobile = () => {
  return (
    <>
      <div
        id="partners"
        class="mt-xl-5 mt-md-5 mt-sm-5  mt-5 pt-sm-4 pt-xl-1 pt-md-5 "
      >
        <div class="container about_custom_container">
          <div class="row align-items-center">
            <div
              class="col-xl-6 ps-xl-0 custom_padding_left  position-relative custom_text_maxW text-center
          text-xl-start mx-auto"
            >
              <span class="blue_line d-xl-block d-none "></span>
              <h2 class="font-lg fw_medium custom_light_black mb-0 custom_heading_lh opacity70 ">
                Doing Things The SCal Mobile Way
              </h2>
              <div>
                <p class="font-sm fw-normal custom_light_black mb-0 pt-md-3 pt-2 mt-sm-1 mt-md-0  custom_lh opacity70">
                  Efficiency, reliability, and customer satisfaction are at the
                  root of everything we do. Our team always goes the extra mile,
                  offering a wide range of exceptional services and top-notch
                  products.
                </p>
                <p class="font-sm fw-normal custom_light_black mb-0 pt-2 custom_lh opacity70">
                  We are committed to responding to the fast-growing market
                  demand while sustaining our quality levels and ethics.
                </p>
              </div>
            </div>
            <div class="col-xl-6  d-flex justify-content-center mt-md-4 mt-4 about_mobile_image_padding_left mt-xl-0">
              <div class="position-relative">
                <img
                  width="266px"
                  height="439px"
                  class="about_phone1_custom_class w-100"
                  src={ScalMobileImg}
                  alt="phone_img1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScalMobile