import React from 'react'
import contactImg from "../assets/img/png/contactus-img.png"
// import React, { useState } from "react";
import ArrowSelect from "../assets/img/png/Vector.png"

const ContactUs = () => {


  return (
    <>
      <div
        className="pt-5 mt-md-4 pt-lg-0 pt-xl-5 mt-lg-0 mt-xl-5 position-relative contact_us_margin"
        id="ContactUs"
      >
        <div className="contact_img_shadow"></div>
        <div className="container custom_container pb-lg-5 pt-5  py-xl-0">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="fw_medium text-black font-xl mb-0">Contact Us</h2>
            <p className="fw-normal font-sm text_gradient mb-0 pt-2">
              <i>Join Our Family Of Partners</i>
            </p>
            <p className="mb-0 fw-normal font-xs text-black opacity_07 pt-2 mt-1 contact_para text-center ">
              Want to access unique products at unbeatable prices? Be one of the
              first to get their hands on the market’s ultimate smartphones? If
              you have already nodded positively, this is your sign to partner
              with us and enter our ever-growing community of loyal members!
            </p>
            <p className="mb-0 fw-normal font-xs text-black opacity_07 pt-1 contact_para text-center px-xl-2">
              Being a SCal Mobile partner means you get solutions tailored to
              your business needs and access our daily and weekly inventory
              lists with numerous smartphone opportunities at the most
              competitive prices. We constantly update our catalogs to help you
              unlock the best deals in the secondary smartphone industry!{" "}
              <span className="fw-bold">
                {" "}
                So, are you ready to earn more for less?{" "}
              </span>{" "}
              Fill out the contact form below, and we will take care of the
              rest.
            </p>
          </div>
          <div className="d-flex flex-column-reverse flex-lg-row pt-md-4 mt-5 ">
            <div className="col-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
              <form action="" onsubmit="handleSubmit(event)">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <label className="fw-normal font-xs text-black opacity_07">
                      First Name*
                    </label>
                    <input
                      required
                      type="text"
                      id="name_input"
                      className="contact_us_input w-100 w-normal mt-2 font-xs text-black opacity_07  input_padding"
                    />
                  </div>
                  <div className="col-12 col-sm-6 pt-3 pt-sm-0">
                    <label className="fw-normal font-xs text-black opacity_07 d-block mb-1 mb-md-2">
                      Last Name*
                      <input
                        required
                        type="text"
                        id="lastName_input"
                        className="contact_us_input w-100 w-normal mt-2 font-xs text-black opacity_07 input_padding"
                      />
                    </label>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-12 col-sm-6 ">
                    <label className="fw-normal font-xs text-black opacity_07 d-block mb-1 mb-md-2">
                      Company Name*
                      <input
                        required
                        type="text"
                        id="company_input"
                        className="contact_us_input w-100 w-normal mt-2 font-xs text-black opacity_07 input_padding"
                      />
                    </label>
                  </div>
                  <div className="col-12 col-sm-6 pt-3 pt-sm-0">
                    <label className="fw-normal font-xs text-black opacity_07 d-block mb-1 mb-md-2">
                      Phone Number*
                      <input
                        required
                        type="number"
                        id="phone_input"
                        className="contact_us_input w-100 w-normal mt-2 font-xs text-black opacity_07 input_padding"
                      />
                    </label>
                  </div>
                </div>
                <div className="row align-items-center pt-3">
                  <div className="col-12 col-sm-6 ">
                    <label className="fw-normal font-xs text-black opacity_07 d-block mb-2">
                      Email*
                      <input
                        required
                        type="email"
                        id="email_input"
                        className="contact_us_input w-100 w-normal font-xs mt-2 text-black opacity_07 input_padding "
                      />
                    </label>
                  </div>
                  <div className="col-12 col-sm-6 overflow-hidden">
                    <label
                      for="cars"
                      className="fw-normal font-xs text-black opacity_07 d-block mb-1"
                    >
                      Company Type*
                    </label>
                    <div className=" position-relative">
                      <select
                        name="B2B"
                        id="B2B"
                        className="contact_us_input w-100 w-normal font-xs  text-black opacity_07 input_padding crsal_pointer_on"
                      >
                        <option value="B2B">B2B</option>
                        <option value="B2B">B3B</option>
                        <option value="B2B">B4B</option>
                        <option value="B2B">B5B</option>
                      </select>

                      <img
                        src={ArrowSelect}
                        alt="ArrowSelect"
                        className=" position-absolute Arrow_select opacity_07"
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pt-3">
                  <div className="col-12 ">
                    <label className="fw-normal font-xs text-black opacity_07 d-block mb-2">
                      Buyers
                      <div className=" position-relative">
                        <select
                          name="B2B"
                          id="B2B"
                          className="contact_us_input w-100 w-normal font-xs mt-2 text-black opacity_07 input_padding crsal_pointer_on"
                        >
                          <option value="B2B"></option>
                          <option value="B2B">B2B</option>
                          <option value="B2B">B3B</option>
                          <option value="B2B">B4B</option>
                        </select>

                        <img
                          src={ArrowSelect}
                          alt="ArrowSelect"
                          className=" position-absolute Arrow_select opacity_07"
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="row py-3 mb-1">
                  <div className="col-12">
                    <h3 className="fw-normal font-xs text-black opacity_07 mb-2">
                      Message
                    </h3>
                    <textarea
                      required
                      name="comment"
                      id="massage_input"
                      className="w-100 contact_us_textarea w-normal font-xs text-black opacity_07 input_padding"
                    ></textarea>
                  </div>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <button
                    id="send_message"
                    type="submit"
                    className="common_btn mt-md-4"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-12 col-lg-6 ">
              <div className=" text-center">
                <img
                  className="contact_us_mobile_img w-100"
                  src={contactImg}
                  alt="mobile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs