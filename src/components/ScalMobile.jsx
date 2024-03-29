import React from 'react'
import scalMobileImg from "../assets/img/webp/scal-img.webp";
const ScalMobile = () => {
  return (
    <>
      <div
        id="partners"
        className="mt-xl-5 mt-md-5 mt-sm-5  mt-4 pt-xl-1"
      >
        <div className="container about_custom_container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 ps-xl-0 custom_padding_left  position-relative custom_text_maxW text-center
          text-xl-start mx-auto"
            >
              <span className="blue_line d-xl-block d-none "></span>
              <h2 className="font-lg fw_medium custom_light_black mb-0 custom_heading_lh opacity_07 ">
                Doing Things The SCal Mobile Way
              </h2>
              <div>
                <p className="font-sm fw-normal custom_light_black mb-0 pt-md-3 pt-2 mt-sm-1 mt-md-0  custom_lh opacity_07">
                  Efficiency, reliability, and customer satisfaction are at the
                  root of everything we do. Our team always goes the extra mile,
                  offering a wide range of exceptional services and top-notch
                  products.
                </p>
                <p className="font-sm fw-normal custom_light_black mb-0 pt-2 custom_lh opacity_07">
                  We are committed to responding to the fast-growing market
                  demand while sustaining our quality levels and ethics.
                </p>
              </div>
            </div>
            <div className="col-xl-6  d-flex justify-content-center mt-md-4 mt-4 about_mobile_image_padding_left mt-xl-0">
              <div className="position-relative">
                <img
                  width="266px"
                  height="439px"
                  className="about_phone1_custom_class w-100"
                  src={scalMobileImg}
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