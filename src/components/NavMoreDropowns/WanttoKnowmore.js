import { Box, Typography } from "@mui/material";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Guide from "../../assets/guide.svg";

const WanttoKnowmore = () => {
  return (
    <section className="knowMore">
      <h3
        style={{ color: "#00008B", fontWeight: "bold" }}
        className=" text-center mt-5  "
      >
        Want To Know More?
      </h3>
      <div className="container">
        <div className="card-warpper">
          <div className="card1">
            <img src={Guide} alt="guide" className="crd1-icon" />
            <div>
              <h1 className="card1-heaing">How To Trade</h1>
              <p className="card1-para">Learn How To Create Your Deals</p>
            </div>
            <button className="card1-button rounded-pill rounded-pill-hov">
              Read More
            </button>
          </div>
          <div className="card1">
            <img src={Guide} alt="guide" className="crd1-icon" />
            <div>
              <h1 className="card1-heaing">Join Us On Discount</h1>
              <p className="card1-para">Come Join The Best NFt Community</p>
            </div>
            <button className="card1-button rounded-pill rounded-pill-hov">
              Join US
            </button>
          </div>
          <div className="card1">
            <img src={Guide} alt="guide" className="crd1-icon" />
            <div>
              <h1 className="card1-heaing">FAQs</h1>
              <p className="card1-para">Find Answer To Your Questions</p>
            </div>
            <button className="card1-button rounded-pill rounded-pill-hov">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WanttoKnowmore;
