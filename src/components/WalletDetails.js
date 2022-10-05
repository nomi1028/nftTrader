import React from "react";
import { Container, Image } from "react-bootstrap";
// import { Icon } from '@iconify/react';

const WalletDetails = ({ wallet }) => {
  return (
    <div>
      <Container fluid className="wallet-details-box">
        <div className="wallet-bar">
          <ul>
            <li>All</li>
            <li>Closed</li>
            <li>Canceled</li>
          </ul>
        </div>
        <div className="wallet-search">
          <input
            type="text"
            placeholder="Search"
            style={{ fontWeight: "600" }}
          />
          {/* <Icon className='search-icon' icon="fe:search" color="#2d00f7" width="30" height="30" /> */}
        </div>
      </Container>
      <Container
        fluid
        className="d-flex flex-column align-items-center pb-5 gap-5 wallet-details-bottom"
      >
        <Image src="/sad_logo.svg"></Image>
        <div className="text-center">
          <p style={{ fontWeight: "600", fontSize: "1.875rem" }}>
            {wallet ? "No Result" : "Connect Your Wallet First"}
          </p>
          <p style={{ fontWeight: "300", fontSize: "1rem" }}>
            {wallet
              ? "Please Try Again"
              : "Please, connect your wallet if you want to browse this page"}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default WalletDetails;
