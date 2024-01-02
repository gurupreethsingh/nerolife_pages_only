import React from "react";
import one from "../website_assets/images/one.jpg";
import "./Restocafes.css";

const Restocafes = () => {
  return (
    <div>
      <h1 className="text-center text-light fw-bold fs-5 mb-5">OUTLET</h1>
      <div className="outletclubsparent d-flex flex-wrap">
        <div className="outletclubsleft text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" />
            <h1 className="text-light text-center fw-bold">PAVILLION</h1>
            <p className="text-light text-center fw-bold">lorem</p>
          </div>
        </div>

        <div className="outletclubscenter text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" />
            <h1 className="text-light text-center fw-bold">PAVILLION</h1>
            <p className="text-light text-center fw-bold">lorem</p>
          </div>
        </div>

        <div className="outletclubsright text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" />
            <h1 className="text-light text-center fw-bold">PAVILLION</h1>
            <p className="text-light text-center fw-bold">lorem</p>
          </div>
        </div>
      </div>
      <h1 className="text-light fw-bold fs-1">RESTOCAFES</h1>
    </div>
  );
};

export default Restocafes;
