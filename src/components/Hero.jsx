import React from "react";
import heroSideShadow from "../assets/img/webp/hero_side_shadow.webp";
import heroSectionImg from "../assets/img/webp/hero_section_img.webp";
import heroCenterRadishColor from "../assets/img/svg/hero-center-radishcolor.svg";
import navShadow from "../assets/img/webp/nav_shadow.webp";

import Header from "./Header";
const Hero = () => {
  return (
    <>
      <div className="">
        <Header />
        <div id="home" className="py-5 position-relative hero_preant d-flex justify-content-center align-items-center">
          <div className="position-absolute nav_shadow">
            <img src={navShadow} alt="navShadow" />
          </div>
          <img
            className="position-absolute start-0 hero_side_shadow index_minus_1"
            src={heroSideShadow}
            alt="shadow"
          />
          <div className="container custom_container text-center mb-xl-5 pb-sm-4 pb-lg-5">
            <div className=" mx-auto">
              <h1 className="font-xl text-black pt-md-4 pb-sm-1 w-100 hero_content_heading mx-auto">
                High-End Service &
                <span className="color_sky_blue"> Smartphones </span>
                -Without the High Price Tag
              </h1>
              <p className="font-xs text-black opacity_07 mb-0 mb-md-4 max_paragraph_hero mx-auto">
                We believe every client, regardless of their size or role in the
                industry, deserves to benefit from our low prices and high
                quality. Whether you’re a retailer, carrier, distributor, repair
                shop or consumer, we are here to serve you! 
              </p>
            </div>

            <div className="hero_img mx-auto position-relative">
              <img
                className="w-100 mb-xl-4"
                src={heroSectionImg}
                alt="group-mobile"
              />
              <img
                className="w-75 position-absolute hero_center_image_set"
                src={heroCenterRadishColor}
                alt="group-mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
