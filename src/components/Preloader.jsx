import React from "react";
import pagelogo from "../assets/img/svg/logo.svg";

const PreLoader = () => {
  return (
    <>
      <div className="loading bg-black d-flex justify-content-center align-items-center">
        <div>
          <img className="loading_svg" src={pagelogo} alt="pagelogo" />
        </div>
      </div>
    </>
  );
};

export default PreLoader;
