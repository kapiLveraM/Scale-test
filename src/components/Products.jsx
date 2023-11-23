import React from 'react'
import {ProductData} from "./common/Helper"
const Products = () => {
  return (
    <>
      <div
        id="products"
        className="container custom_container text-center mt-5 mt-lg-0 mb-4 mb-sm-5 pb-xl-5 position-relative"
      >
        <div className="products_shadow"></div>
        <h2 className="sub_heading  mb-4 pb-md-4">Products</h2>
        <div className="row  justify-content-center pt-xl-5">
          {ProductData.map((about) => {
            return (
              <div key={about.id} className="col-sm-9 col-md-6 col-xl-4">
                <div className="Products_card d-flex flex-column justify-content-center mb-5 mb-xl-0">
                  <div className=" position-relative">
                    <img
                      src={about.cardImg}
                      alt="cardImg"
                      height={91}
                      width={91}
                      className=" mx-auto"
                    />
                    <div className="Products_card_img_shadow"></div>
                  </div>
                  <p className="font-base color_sky_blue common_lh mt-5 pt-3 mb-0">
                    <i>{about.heading}</i>
                  </p>
                  <h4 className=" fw-normal font-sm card_heading_lh text-black mt-2 mb-0">
                    {about.heading_2}
                  </h4>
                  <p className="sub_para mt-3 mb-0 Product_card_para">
                    {about.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products
