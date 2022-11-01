import React from "react";
import Style from "./Style";
import Verified from "../../assets/images/verified.svg";
const Index = () => {
  return (
    <Style>
      <div className="container">
        <div className="wrapper take-comfort">
          <div className="colunm1 xs-col-6 sm-col-6 md-col-6">
            <div className="colunm1-wrapper">
              <h5 className="small-heading">
                Fresh Pair Of Eyes Helping Prevent Scams
              </h5>
              <h2 className="large-heading">
                Take comfort with trading on our protocol
              </h2>
              <p className="paragraph">
                NFT Trader offers that extra protective layer to help users
                certify if an NFT collection has been verified or not.
              </p>
              <button className="button">Discover How</button>
            </div>
          </div>
          <div className="colunm2 ">
            <div className="colunm2-wrapper col-xs-6">
              <div className="mascotte">
                <button className="btn">verified</button>
                <div className="icon">
                  <img src={Verified} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default Index;
