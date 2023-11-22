import React from "react";
import Slider from "react-slick";
import { ServicesData } from "./common/Helper";

const Services = () => {
  const ServiceSlider = {
    dots: false,
    arrows: true,
    infinite: true,
    loop: true,
    autoPlay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (  
    <div className=" mt-2 mt-sm-5">
      <div id="services" className="Services_bg">
        <div className="container custom_container text-center">
          <h2 className="sub_heading text-white">Services</h2>
          <p className="sub_para text-white services_para mx-auto mb-0 opacity_07">
            We sell products, but we are a service-based company. We’ll work
            with you to personalize solutions to your specific requirements.
            Below are some of our commonly requested services.
          </p>
          <div className=" mt-5 pt-2">
            <Slider {...ServiceSlider}>
              {ServicesData.map((ServiceCard) => {
                return (
                  <div key={ServiceCard.id}>
                    <div className="Services_card d-flex justify-content-center align-items-center mx-1 mx-lg-3">
                      <div className="text-center">
                        <div className=" d-flex justify-content-center">
                          <div className=" position-relative">
                            <img
                              width={91}
                              height={91}
                              src={ServiceCard.cardImg}
                              alt="crad-icon"
                            />
                            <div className="Services_icons_shadow position-absolute"></div>
                          </div>
                        </div>

                        <i className="fw-normal font-xs text-white  d-inline-block opacity_07 mt-4">
                          {ServiceCard.heading}
                        </i>

                        <h3 className="font-sm fw-bold text-white mb-3">
                          {ServiceCard.heading_2}
                        </h3>
                        <p className="sub_para mb-0 text-white opacity_07 Services_card_para">
                          {ServiceCard.para}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
