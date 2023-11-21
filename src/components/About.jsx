import React from "react";
import mapImg from "../assets/img/webp/map_image.webp";
const About = () => {
  return (
    <>
      <div
        className="pt-md-5 mt-sm-5 mt-5 mt-md-5 pt-sm-4 position-relative"
        id="about-us"
      >
        <div className="shadow_position"></div>
        <div className="container about_custom_container">
          <div className="about_content_box text-center mx-auto mt-xl-5 pt-xl-2">
            <p className="mb-0 font-md fw-normal text-black opacity90">
              About Us
            </p>
            <h2 className="mb-0 font-xl fw_medium custom_line_hight custom_letter_spacing text-black mt-1 mb-2 pb-1">
              Redefining the{" "}
              <span className=" color_sky_blue"> Smartphone </span>
              <br />
              <span className=" color_sky_blue"> Re-Commerce </span> Industry
              Since 2010
            </h2>
            <p className="mb-0 font-xs fw-normal text-black opacity90">
              Serving Serving customers across the Americas, Europe, Asia, and
              the Middle East
            </p>
          </div>
          <div className="map_img">
            <img
              className="w-100 mt-lg-5 pt-xl-2 mt-4 about_custom_hight"
              src={mapImg}
              alt="map_image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
