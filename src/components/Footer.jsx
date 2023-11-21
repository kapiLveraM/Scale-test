import React from 'react'
import logo from "../assets/img/svg/FooterLogo.svg";
import FooterShade from "../assets/img/svg/footer-shade.svg"
const Footer = () => {
  return (
    <>
  <div className="footer_bg position-relative">
    <div className="container custom_container py-5">
      <div className="row justify-content-between py-md-4 py-xl-3">
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <img className="footer-logo-img" src={logo} alt="footer-logo-image" />
          <p className="font-xs text-white fw-normal opacity_07 pt-2 mt-1 mt-lg-0 pt-lg-4 mb-0 mw_303">SCal Mobile is a U.S.
            tech
            solutions
            company that
            specializes in
            consumer
            electronics.</p>
        </div>
        <div className="col-12 col-md-6 col-lg-5 col-xl-4 mt-3 mt-md-0">
          <div className="d-flex justify-content-between">
            <div className="col-4">
              <ul className="ps-0 mb-0">
                <li><a href="#" className="text-decoration-none text-white fw-normal font-sm ">Links</a></li>
                <li className="pt-2 mt-1"><a href="#about-us"
                    className="text-decoration-none text-white fw-normal font-xs opacity_07 footer_link_hover">About Us</a>
                </li>
                <li className="pt-2 mt-1"><a href="#services"
                    className="text-decoration-none text-white fw-normal font-xs opacity_07 footer_link_hover">Services</a>
                </li>
                <li className="pt-2 mt-1"><a href="#products"
                    className="text-decoration-none text-white fw-normal font-xs opacity_07 footer_link_hover">Products</a>
                </li>
                <li className="pt-2 mt-1"><a href="#partners"
                    className="text-decoration-none text-white fw-normal font-xs opacity_07 footer_link_hover">Partners</a>
                </li>
                <li className="pt-2 mt-1"><a href="#faqs"
                    className="text-decoration-none text-white fw-normal font-xs opacity_07 footer_link_hover">FAQs</a></li>
              </ul>
            </div>
            <div className="col-lg-9">
              <ul className="ps-0 mb-0">
                <li><a href="#" className="text-decoration-none text-white fw-normal font-sm">Legal</a></li>
                <li className="pt-2 mt-1"><a href="#"
                    className="text-white fw-normal font-xs opacity_07 text-decoration-none footer_link_hover">Vendor Code
                    of
                    Conduct
                  </a></li>
                <li><a href="#" className="text-white fw-normal font-xs opacity_07 text-decoration-none footer_link_hover">
                    Data Sanitization Policy
                  </a></li>
                <li>
                  <a href="#"
                    className="text-white fw-normal font-xs opacity_07 text-decoration-none footer_link_hover">Downstream
                    Recycling
                    Policy
                  </a>
                </li>
                <li><a href="#" className="text-white fw-normal font-xs opacity_07 text-decoration-none footer_link_hover">
                    Environmental and Social Impact
                  </a>
                </li>
                <li><a href="#" className="text-white fw-normal font-xs opacity_07 text-decoration-none footer_link_hover">
                    QEH&S Policy
                  </a></li>
                <li>
                  <a href="#" className="text-white fw-normal font-xs opacity_07 text-decoration-none footer_link_hover">
                    Universal Waste Policy</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-1 border_top">
      <p className="fw-normal font-xs text-white opacity_07 text-center mb-0 py-3">Copyright © <span
          id="current-year"></span> SCalMobile
      </p>
    </div>
  </div>
    </>
  )
}

export default Footer