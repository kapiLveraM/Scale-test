import React from 'react'
import {ProductData} from "./common/Helper"
const Products = () => {
  return (
    <>
      <div
        id="products"
        className="container custom_container text-center mb-5 pb-lg-5 position-relative"
      >
        <div className="products_shadow"></div>
        <h2 className="sub_heading  mb-5 pb-md-4">Products</h2>
        <div className="row  justify-content-center pt-xl-5">
          {ProductData.map((about) => {
            return (
              <div key={about.id} className="col-sm-9 col-md-6 col-xl-4">
                <div className="Products_card d-flex flex-column justify-content-center mb-5 mb-xl-0">
                  <img
                    src={about.cardImg}
                    alt="cardImg"
                    height={116}
                    width={111}
                    className=" mx-auto"
                  />
                  <p className="font-base color_sky_blue common_lh mt-3 mb-0">
                    <i>{about.heading}</i>
                  </p>
                  <h4 className=" font-sm card_heading_lh text-black mt-2 mb-0">
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
