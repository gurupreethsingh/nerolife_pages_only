import React from "react";
import "./Pubs.css";
import one from "../website_assets/images/one.jpg";

const Pubs = () => {
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
      <h1 className="text-light fw-bold fs-1 text-right">PUBS</h1>
    </div>
  );
};

export default Pubs;
