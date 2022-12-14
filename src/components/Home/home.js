import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

// import Carousel from "react-bootstrap/Carousel";
import bg from "../../assets/images/bg.svg";
import img1 from "../../assets/images/1.png";
import chain from "../../assets/images/chain.png";
import img2 from "../../assets/images/3.png";
import img3 from "../../assets/images/4.png";
import img4 from "../../assets/images/7.png";
import img5 from "../../assets/images/8.png";
import img6 from "../../assets/images/9.png";
import img7 from "../../assets/images/11.gif";
import img88 from "../../assets/images/14.png";
import img99 from "../../assets/images/15.png";
import img10 from "../../assets/images/17.png";
import img11 from "../../assets/images/19.png";

import gif1 from "../../assets/images/1.gif";
import gif2 from "../../assets/images/2.gif";
import logo from "../../assets/images/logo2.svg";
import img8 from "../../assets/images/8.png";
import img9 from "../../assets/images/mimg.PNG";

import Colection from "../collections/colection";
import TraderNo from "../traderNumbers/traderNo";
import SliderBackground from "../../assets/sliderBackgroung.svg";
import Logo_rotating from "../../assets/logo_rotating.gif";
import TradingProtocl from "../../layout/tradingProtocol/Index";
import axios from "axios";
import WanttoKnowmore from "../NavMoreDropowns/WanttoKnowmore";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <Container fluid className="home_container p-0 ">
      <section className="home_banner">
        {/* <div
          className="Bubble position-relative inline-flex align-items-center justify-content-center rounded-full overflow-hidden"
          style={{ width: "100px", height: "100px", animationDelay: "1s"}}
        >
          <div
            className="absolute top-0 flex items-center justify-start w-full h-full transition-all"
            style={{ transform: "translateX(0px)", willChange: "transform" }}
          >
            <img
              src={img1}
              className="h-auto z-0 rounded-circle"
              style={{ width: "100px" }}
            />
          </div> 
          <img
            src={bg}
            className="absolute top-0 left-0 w-full h-auto mix-blend-hard-light z-50"
          />
        </div>*/}

        <div className="center_text text-center ">
          <h1
            className="text-white header-heading "
            style={{ fontWeight: "bold" }}
          >
            Swap Your Digital Assets More Secure, More Social
          </h1>
          <button
            className="rounded-pill create-trade border-0 p-3 mt-4 text-primary "
            style={{ fontWeight: "bold" }}
            type="button"
          >
            Create Trade
          </button>
          {/* <div className="slider6  behind">
            <img
              className="d-block w-100 rounded-circle "
              src={img6}
              alt="Second slide"
            />
          </div> */}
        </div>

        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            top: "8%",
            left: "4%",
            width: { xs: "7%" },
            height: { xs: "7%" },
            display: { xs: "block" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img1}
            alt="Second slide"
          />
        </Box>
        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            top: "35%",
            left: "-5%",
            width: { xs: "14%", md: "20%", lg: "16%", xl: "14%" },
            height: { xs: "14%", md: "20%", lg: "16%", xl: "14%" },
            display: { xs: "none", lg: "block" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img2}
            alt="Second slide"
          />
        </Box>

        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            bottom: "16%",
            left: "1%",
            width: { xs: "10%" },
            height: { xs: "10%" },
            display: { xs: "block" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img3}
            alt="Second slide"
          />
        </Box>

        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            top: { xs: "7%", lg: "7", xl: "7%" },
            left: { xs: "25%", lg: "30", xl: "25%" },
            width: { xs: "10%", xl: "10%", lg: "12%" },
            height: { xs: "10%", xl: "10%", lg: "12%" },
            display: { xs: "none", lg: "block" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img4}
            alt="Second slide"
          />
        </Box>

        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            top: "45%",
            left: "13%",
            width: { xs: "14%" },
            height: { xs: "14%" },
            display: { xl: "block", xs: "none" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img5}
            alt="Second slide"
          />
        </Box>

        <Box
          zIndex="1"
          sx={{
            position: "absolute",

            position: "absolute",
            top: { xs: "70%", sm: "65%", md: "70%", lg: "60%", xl: "55%" },
            left: { xs: "80%", sm: "70%", md: "55%", lg: "25", xl: "33%" },
            width: { xs: "10%", sm: "14%", md: "14%", xl: "10%", lg: "12%" },
            height: { xs: "10%", sm: "14%", md: "14%", xl: "10%", lg: "12%" },

            display: { xs: "block" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img6}
            alt="Second slide"
          />
        </Box>

        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            // top: "4%",
            // right: "20%",
            // width: { xs: "17%" },
            // height: { xs: "17%" },
            top: { xs: "4%", md: "4%", lg: "4%", xl: "0%" },
            right: { xs: "10%", md: "5%", lg: "5%", xl: "15%" },
            width: { xs: "25%", md: "25%", xl: "18%", lg: "20%" },
            height: { xs: "25%", md: "25%", xl: "18%", lg: "20%" },

            display: { xs: "block" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img7}
            alt="Second slide"
          />
        </Box>

        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            // top: "68%",
            // right: "16%",
            // width: { xs: "15%" },
            // height: { xs: "15%" },

            top: { xs: "68%", lg: "72", xl: "60%" },
            right: { xs: "16%", lg: "5%", xl: "16%" },
            width: { xs: "15%", xl: "15%", lg: "15%" },
            height: { xs: "15%", xl: "15%", lg: "15%" },

            display: { xs: "none", lg: "block" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img88}
            alt="Second slide"
          />
        </Box>

        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: { xl: "7%" },
            height: { xl: "7%" },
            display: { xl: "block", xs: "none" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img99}
            alt="Second slide"
          />
        </Box>

        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            top: "40%",
            right: "2%",
            width: { xl: "9%" },
            height: { xl: "9%" },
            display: { xl: "block", xs: "none" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img3}
            alt="Second slide"
          />
        </Box>
        <Box
          zIndex="1"
          sx={{
            position: "absolute",
            top: "65%",
            right: "-2%",
            width: { xl: "14%" },
            height: { xl: "14%" },
            display: { xl: "block", xs: "none" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img11}
            alt="Second slide"
          />
        </Box>

        {/* <Box
          zIndex="-1"
          sx={{
            position: "absolute",
            top: "8%",
            left: "4%",
            width: { xs: "5%" },
            height: { xs: "5%" },
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            className="d-block w-100 rounded-circle "
            src={img1}
            alt="Second slide"
          />
        </Box> */}

        {/* <div className="slider2 ">
          <img
            className="d-block w-100 rounded-circle"
            src={gif1}
            alt="Second slide"
          />
        </div>
        <div className="slider3">
          <img
            className="d-block w-100 rounded-circle"
            src={img3}
            alt="Second slide"
          />
        </div>
        <div className="slider4 ">
          <img
            className="d-block w-100 rounded-circle"
            src={gif1}
            alt="Second slide"
          />
        </div> */}
        {/* <div className="slider4">
        <img
          className="d-block w-100 rounded-circle"
          src={gif1}
          alt="Second slide"
        />
        </div> */}
        {/* <div className="slider5">
          <img
            className="d-block w-100 rounded-circle"
            src={img5}
            alt="Second slide"
          />
        </div>

        <div className="slider7">
          <img
            className="d-block w-100 rounded-circle"
            src={gif2}
            alt="Second slide"
          />
        </div>
        <div className="slider8">
          <img
            className="d-block w-100 rounded-circle"
            src={img3}
            alt="Second slide"
          />
        </div>
        <div className="slider9">
          <img
            className="d-block w-100 rounded-circle"
            src={img2}
            alt="Second slide"
          />
        </div>
        <div className="slider10">
          <img
            className="d-block w-100 rounded-circle"
            src={gif1}
            alt="Second slide"
          />
        </div>
        <div className="slider11">
          <img
            className="d-block w-100 rounded-circle"
            src={img3}
            alt="Second slide"
          />
        </div>
        <div className="slider12">
          <img
            className="d-block w-100 rounded-circle"
            src={gif1}
            alt="Second slide"
          />
        </div> */}
      </section>
      {/* -------------------------------- */}
      <section className="home_section2 ">
        <Box>
          <h2 className="home_section2_heading text-center ">
            Trade NFTs & Crypto Like a Boss
          </h2>

          <Row className="mt-n1 justify-content-center align-items-center">
            <Col lg={4} md={3} sm={4} xs={4} className="text-center">
              <div className="home_section2_gif">
                <img
                  width="70%"
                  className="rounded-circle images"
                  src={gif2}
                  alt=""
                />
              </div>
            </Col>
            <Col lg={3} md={3} sm={4} xs={4}>
              <div className="home_section2_gif_div text-center d-flex flex-column align-items-center justify-content-center">
                <img width="15%" src={logo} alt="" />
                <p
                  style={{
                    color: "#3e39e6",
                    fontFamily: "Rubik",
                    fontSize: ".75rem",
                    fontWeight: "bold",
                    marginBottom: "-40px",
                    zIndex: 1,
                  }}
                >
                  NFT Trader Protocol
                </p>
                <img
                  className="home_section2_gif1 mt-n5"
                  width="140%"
                  style={{ zIndex: -1, marginTop: "-40px" }}
                  src={chain}
                  alt=""
                />
              </div>
            </Col>
            <Col lg={4} md={3} sm={4} xs={4} className="text-center">
              <div className="home_section2_gif1">
                <img
                  width="70%"
                  className="rounded-circle images"
                  src={gif1}
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <p
            className="text-center downheading mt-5  mt-md-0"
            style={{ marginTop: "-20px", fontSize: "1.2vw" }}
          >
            Our protocol is totally on-chain, data is totally accessible.
          </p>
        </Box>
      </section>
      {/* ---------------------------- */}

      <section className="home_section3">
        <Row className="justify-content-center m-0">
          <Col lg={7} className="mb-2">
            <div
              className="p-sm-1 p-md-5"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <h3
                style={{
                  color: "#3e39e6",
                  fontSize: "1.675rem",
                  fontWeight: "600",
                  textAlign: "start",
                  marginBottom: "20px",
                  paddingLeft: "10px",
                }}
              >
                Top 5 Collections
              </h3>

              <Colection />
            </div>
          </Col>
          <Col lg={5}>
            <div className="p-sm-3 p-md-5">
              <h3
                style={{
                  color: "#3e39e6",
                  fontSize: "1.675rem",
                  fontWeight: "600",
                  textAlign: "start",
                  marginBottom: "20px",
                  marginLeft: "10px",
                }}
              >
                NFT Trader Numbers
              </h3>
              <div>
                <TraderNo />
              </div>
            </div>
          </Col>
        </Row>
        <div
          className="d-flex justify-content-center align-items-center gap-2"
          style={{ marginTop: "90px" }}
        >
          <a className="text-decoration-none link-primary" href="">
            Check our volume data on Dune Analytics
          </a>
          <img width="25px" src={img8} alt="" />
        </div>
      </section>
      {/* -------------------------- */}
      {/* marquee tag section  */}
      <section className="mt-5 mb-1">
        <div className="news position-relative ">
          <marquee className="news-content ">
            <img style={{ marginLeft: "-300px" }} src={img9} alt="" />
            <img style={{ marginLeft: "30px" }} src={img9} alt="" />
            <img style={{ marginLeft: "30px" }} src={img9} alt="" />
            <img style={{ marginLeft: "30px" }} src={img9} alt="" />
            <img style={{ marginLeft: "30px" }} src={img9} alt="" />
            <img style={{ marginLeft: "30px" }} src={img9} alt="" />
          </marquee>
          <div className="title  text-center text-white ">
            <h5 className="font-bold" style={{ fontWeight: "bold" }}>
              Share Trades With Your Community
            </h5>
            <p>Access & configure a trading bot for your own Discord.</p>
            <h6 style={{ fontWeight: "bold" }}>Read More</h6>
          </div>
        </div>
      </section>
      {/* ---------------------- */}
      <section className="home_section4">
        {/* <Row className="justify-content-center m-0">
          <Col xs={12} lg={5} md={12}className="text-center text-lg-start">
            <div className="mb-5">
              <p className="fw-bold" style={{ color: "#071b6f" }}>
                Fresh Pair Of Eyes Helping Prevent Scams
              </p>
              <h1 className="fw-bold" style={{ color: "#3e39e6" }}>
                Take comfort with trading on our protocol
              </h1>
              <p>
                NFT Trader offers that extra protective layer to help users
                certify if an NFT collection has been verified or not.
              </p>
            </div>
            <Button
              style={{
                borderRadius: "30px",
                backgroundColor: "#0628b7",
                padding: "13px 30px 13px 30px ",
                fontSize: "16px",
              }}
              variant="primary"
              size="lg"
              active
            >
              Discover How
            </Button>
          </Col>

          <Col xs={12} lg={5} md={12}  className="text-center">
            <div className="mascotte_div position-relative">
              <div
                className=""
                style={{ position: "absolute", top: "-30%", left: "10%" }}
              >
                <img width="90px" src={verified} />
              </div>
              <div
                className=" text-white py-2 ps-4 pe-4"
                style={{
                  position: "absolute",
                  top: "-8%",
                  left: "65.5%",
                  backgroundColor: "#0a1b62",
                  borderRadius: "30px",
                }}
              >
                verified
              </div>
              
            </div>
          </Col>
        </Row> */}
        <TradingProtocl />
      </section>
      {/* ----------------------------- */}

      {/* <section className="home_section5">
        <Row style={{minHeight:"100vh"}}>
          <Col xs={12} lg={5}  className="d-flex justify-content-center align-items-center">
          <Container fluid className="home_container">
          
          <div className="news position-relative">
            
            <marquee className="news-content">
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
            </marquee>
          </div>
         
        </Container>
          </Col>
          <Col xs={12} lg={5} className="d-flex ps-3 justify-content-center align-items-center">
           <div className="">
           <div className="mb-5 text-white">
              <h1 className="fw-bold">Check What Others Have Traded</h1>
              <p>Review, Compare, Evaluate Past Deals</p>
            </div>
            <div className="">
              <Button
                style={{
                  borderRadius: "30px",
                  backgroundColor: "white",
                  color: "blue",
                  padding: "13px 30px 13px 30px ",
                  fontSize: "16px",
                  marginRight:"10px"
                }}
                variant="primary"
                size="lg"
                active
              >
                View Global Trade History
              </Button>
              <Button
                style={{
                  borderRadius: "30px",
                  backgroundColor: "white",
                  color: "blue",
                  padding: "13px 30px 13px 30px ",
                  fontSize: "16px",
                }}
                variant="primary"
                size="lg"
                active
              >
                Create Your Trade
              </Button>
            </div>
           </div>
          </Col>
        </Row>
      </section> */}

      {/* others trade */}
      <section className="others_trade">
        <div className="blue_section">
          <div className="blueColunm1 ">
            {/* <marquee
              className="news-content"
              scrollamount="10"
              direction={window.innerWidth > "900" ? "up" : "left"}
            >
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
              <img src={img9} alt="" />
            </marquee> */}
            <marquee
              className="news-content"
              scrollamount="20"
              direction={window.innerWidth > "900" ? "up" : "left"}
            >
              {" "}
              <img src={gif1} className="sliderimg rounded-circle " />{" "}
              <img src={gif1} className="sliderimg rounded-circle " />{" "}
              <img src={gif1} className="sliderimg rounded-circle " />{" "}
              <img src={gif1} className="sliderimg rounded-circle " />{" "}
              <img src={gif1} className="sliderimg rounded-circle " />{" "}
              <img src={gif1} className="sliderimg rounded-circle " />{" "}
              <img src={gif1} className="sliderimg rounded-circle " />{" "}
              <img src={gif1} className="sliderimg rounded-circle " />
            </marquee>
            {/* <div className="marquee">
          <img src={SliderBackground} className="sliderimg"/>
          <img src={SliderBackground} className="sliderimg"/>
          <img src={SliderBackground} className="sliderimg"/>
          <img src={SliderBackground} className="sliderimg"/>
        </div> */}
          </div>
          <div className="blueColunm2">
            <h1 className="trade-heading">Check What Others Have Traded</h1>
            <p className="trade-para">Review, Compare, Evaluate Past Deals</p>
            <div className="trade-buttons trade-butt">
              <button className="trade-history-btn">
                View global trade history
              </button>
              <button className="yout-trade-btn">Craete your trade</button>
            </div>{" "}
          </div>
        </div>
        <div className="container">
          <div className="yellow-section">
            <div className="yellow-cl1">
              <img src={Logo_rotating} className="logoRotate" />
              <h3 className="cl1-heading" style={{ fontWeight: "bold" }}>
                Build your application with our open technology
              </h3>
            </div>
            <div className="yellow-cl2">
              <p className="cl2 para">
                Looking to build your own interoperable NFT trading market? Feel
                free to use our SDK and apply it in the development process of
                your own DApps and protocols.
              </p>
              <button className="cl2-button rounded-pill">Discover SDK</button>
            </div>
          </div>
        </div>
      </section>

      {/* Know more Section */}
      {/* <section className="knowMore">
        <h3 style={{ color: '#00008B',fontWeight:"bold", }} className=" text-center mt-5  ">Want To Know More?</h3>
        <div className="container">
          <div className="card-warpper">
            <div className="card1">
              <img src={Guide} alt="guide" className="crd1-icon" />
              <div>
                <h1 className="card1-heaing">How To Trade</h1>
                <p className="card1-para">Learn How To Create Your Deals</p>
              </div>
              <button className="card1-button rounded-pill">Read More</button>
            </div>
            <div className="card1">
              <img src={Guide} alt="guide" className="crd1-icon" />
              <div>
                <h1 className="card1-heaing">Join Us On Discount</h1>
                <p className="card1-para">Come Join The Best NFt Community</p>
              </div>
              <button className="card1-button rounded-pill">Join US</button>
            </div>
            <div className="card1">
              <img src={Guide} alt="guide" className="crd1-icon" />
              <div>
                <h1 className="card1-heaing">FAQs</h1>
                <p className="card1-para">Find Answer To Your Questions</p>
              </div>
              <button className="card1-button rounded-pill">Read More</button>
            </div>
          </div>
        </div>
      </section> */}
      <WanttoKnowmore />

      {/* Connect Wallet Modal */}
    </Container>
  );
};

export default Home;
