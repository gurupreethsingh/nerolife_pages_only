import React from "react";
import one from "../website_assets/images/one.jpg";
import "./Outlets.css";

const Outlets = () => {
  return (
    <div>
      <div className="outletparent d-flex flex-wrap">
        <div className="outletleft d-flex align-items-center justify-content-center">
          <div>
            <h1 className="me-5 text-light fw-bold fs-3">SPOTS TO EXPLORE</h1>
          </div>
        </div>

        <div className="outletright">
          <img src={one} alt="some outlet" />
        </div>
      </div>
    </div>
  );
};

export default Outlets;
