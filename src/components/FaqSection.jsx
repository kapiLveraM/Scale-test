import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import faqDwonShadow from "../assets/img/png/Faq_dwon_shadow.png";
import faqMobileImg from "../assets/img/webp/FaqMobileImg.webp";
import faqMobileImg2 from "../assets/img/webp/FaqMobileImg2.webp";
const FaqSection = () => {
  return (
    <>
      <div  className="pt-5 position-relative" id="faqs">
        <div className="fsq_shadow"></div>
        <div className="container custom_container pt-sm-4 pt-lg-5 mt-xl-4">
          <div className="d-flex flex-column-reverse flex-lg-row ">
            <div className="col-12 col-lg-6 mt-3 mt-sm-5 mt-lg-0 position-relative">
              <img
              
                className="faq_mobile_img  w-100 d-none d-lg-flex"
                src={faqMobileImg}
                alt="faq-mobile-image"
              />
              <img
                className=" w-100 d-lg-none"
                src={faqMobileImg2}
                alt="faq-mobile-image2"
              />
            </div>
            <div className="col-12 col-lg-6 ">
              <div>
                <h2 className="fw_medium font-xl text-black">FAQs</h2>
                <div className=" position-relative max_height_accordian">
                  <div
                    className="accordion  max_height_accordian scrollbar-style"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button fw-normal font-sm text-black"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is SCal Mobile?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body fw-normal font-xs text-black opacity_07 ">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How long has SCal Mobile been in business?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body fw-normal font-xs text-black opacity_07 ">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Where does SCal Mobile operate?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body fw-normal font-xs text-black opacity_07 ">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          What products does SCal Mobile offer?
                        </button>
                      </h2>
                      <div
                        id="collapsefour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body fw-normal font-xs text-black opacity_07 ">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefive"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          How do I place an order with SCal Mobile?
                        </button>
                      </h2>
                      <div
                        id="collapsefive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body fw-normal font-xs text-black opacity_07 ">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsesix"
                          aria-expanded="false"
                          aria-controls="collapsesix"
                        >
                          How often is inventory updated?
                        </button>
                      </h2>
                      <div
                        id="collapsesix"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body fw-normal font-xs text-black opacity_07 ">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
