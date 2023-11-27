import React from 'react'
import RoadmaImg1 from "../assets/img/webp/roadmap-img1.webp"
import RoadmaImg2 from "../assets/img/webp/roadmap-img2.webp"
import RoadmaImg3 from "../assets/img/webp/roadmap-img3.webp"
const Roadmap = () => {
  return (
    <>
      <div id="choose-us" className="roadmap_bg  position-relative">
        <div className="container custom_container ">
          <div className="mb-lg-5 text-center ">
            <h2 className="fw_medium font-xl text-white position-relative z_20">
              Why Choose Us?
            </h2>
            <p className="sub_para opacity_07 text-white  pe-md-1 p">
              Here are a few good reasons to make SCal Mobile your top choice
            </p>
          </div>
          <div className="row justify-content-end align-items-center justify-content-md-center gap-lg-5 position-relative roadmap_line z_20 three_hero_section_height">
            <div className="col-10 col-md-6 col-lg-5 d-none d-md-block">
              <img
                className="w-100 roadmap_img1"
                width="403px"
                height="328px"
                src={RoadmaImg1}
                alt="roadmap-img-1"
              />
            </div>
            <div className="col-10 col-md-6 col-lg-5 ">
              <div className="roadmap-box p-md-3 position-relative">
                <h3 className=" fw_medium font-lg text-white mb-sm-3 pt-1  pe-md-1 position-relative roadmap_circle_right">
                  We Know What We Do
                </h3>
                <p className="sub_para opacity_07 text-white mb-2 pe-md-1">
                  We’ve been there and done this. Actually, we have been doing
                  this for over a decade, pouring all resources into sourcing
                  the best products for you at the most competitive prices in
                  the market.
                </p>
              </div>
            </div>
            <div className="col-10 col-md-6 col-lg-5 d-md-none">
              <img className="w-100" src={RoadmaImg1} alt="roadmap-img-1" />
            </div>
            <div className="col-10 col-md-6 col-lg-5  mt-5 mt-lg-0">
              <div className="roadmap-box p-md-3 text-start position-relative">
                <h3 className=" fw_medium font-lg text-white mb-3 pt-1 ps-1 roadmap_circle_left position-relative">
                  It’s All About What Adds Value For You
                </h3>
                <p className="sub_para opacity_07 text-white mb-2 ps-1">
                  Since our inception, SCal has strived to bring uncompromising
                  quality and value to all our clients. Whether you’re a
                  retailer, carrier, distributor, repair shop or consumer, we
                  tailor our products and services to your specific
                  requirements, offering boutique-level service at scale. The
                  biggest proof of our performance? Our strong, growing base of
                  happy customers.
                </p>
              </div>
            </div>
            <div className="col-10 col-md-6 col-lg-5 d-flex justify-content-center">
              <img
                className="w-100 roadmap_img2 "
                width="358px"
                height="347px"
                src={RoadmaImg2}
                alt="roadmap-img-2"
              />
            </div>
            <div className="col-10 col-md-6 col-lg-5 d-none d-md-block">
              <img
                className="w-100 roadmap_img3"
                width="469px"
                height="364px"
                src={RoadmaImg3}
                alt="roadmap-img-3"
              />
            </div>
            <div className="col-10 col-md-6  col-lg-5  mt-5 mt-lg-0">
              <div className="roadmap-box p-md-3">
                <h3 className=" fw_medium font-lg text-white mb-3 pt-1 pe-md-1 roadmap_circle_right position-relative">
                  However Far Away, We Will Always Serve You
                </h3>
                <p className="sub_para opacity_07 text-white mb-2 pe-md-1">
                  Whether on a tropical island in Asia or a European metropolis,
                  we deliver products and services with zero hassle. We take
                  great pride in our ability to serve every business or
                  individual from across the globe. 
                </p>
              </div>
            </div>
            <div className="col-10 col-md-6 col-lg-5 d-md-none">
              <img className="w-100" src={RoadmaImg3} alt="roadmap-img-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap