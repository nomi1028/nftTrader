import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img9 from "../../assets/images/9.png";
import logo from "../../assets/images/logo.svg";
import logo2 from "../../assets/images/nftlogo.svg";

import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import "./style.css";
import { Stack } from "@mui/system";
import WanttoKnowmore from "./WanttoKnowmore";

const AboutUs = () => {
  return (
    <Grid container direction="column">
      <Grid
        bgcolor="yellow"
        width="100%"
        direction="column"
        alignItems="center"
        item
        marginBottom={2}
        color="white"
      >
        <Box
          width="100%"
          height="100%"
          bgcolor="blue"
          direction="column"
          alignItems="center"
          p={10}
          color="white"
          borderRadius=" 0px 0px 200px 0px "
        >
          <Typography variant="h1" fontSize="45px" marginBottom={2}>
            <h3 style={{ fontWeight: "bold", fontSize: "50px" }}>About Us</h3>
          </Typography>
          <Typography variant="body1" fontSize="15px">
            Our Vission and who we are
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <Box p={10}>
          <Typography variant="body1" fontSize="15px" p={2}>
            NFT Trader was founded with a simple mission: provide a safe
            platform and community for the trading of digital assets in the Web3
            space.
          </Typography>
          <Typography
            variant="body1"
            fontSize="15px"
            p={2}
            sx={{ opacity: 0.9 }}
          >
            It has not been an easy journey since launch by no means but we have
            been fortunate with the opportunity to learn something new each day.
            Because of how fast this space is moving we have continued to build
            a more robust protocol by adjusting to the waves of the crypto
            industry and more importantly listening to our users.
          </Typography>
          <Typography
            variant="body1"
            fontSize="15px"
            p={2}
            sx={{ opacity: 0.9 }}
          >
            With the great support we have been given we are impelled now more
            than ever to support the Web3 space in what way we can and build
            something that will offer a safe haven and community driven platform
            for owners of all forms of digital assets!
          </Typography>
        </Box>
        <div
          className="news position-relative "
          style={{
            background: "#00008B",
          }}
        >
          <marquee className="news-content">
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box>
                <img width="100px" height="70px" src={logo2} alt="" />
                <ChatBubbleOutlineIcon
                  sx={{ color: "yellow", fontSize: "70px" }}
                />
              </Box>
              <Box>
                <img width="100px" height="70px" src={logo2} alt="" />
                <ChatBubbleOutlineIcon
                  sx={{ color: "yellow", fontSize: "70px" }}
                />
              </Box>
              <Box>
                <img width="100px" height="70px" src={logo2} alt="" />
                <ChatBubbleOutlineIcon
                  sx={{ color: "yellow", fontSize: "70px" }}
                />
              </Box>
              <Box>
                <img width="100px" height="70px" src={logo2} alt="" />
                <ChatBubbleOutlineIcon
                  sx={{ color: "yellow", fontSize: "70px" }}
                />
              </Box>
            </Box>
          </marquee>
        </div>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} direction="column">
          <Typography
            variant="h4"
            fontWeight="bold"
            color="blue"
            pt={10}
            pb={8}
          >
            <h3 style={{ fontWeight: "bold", fontSize: "35px" }}>
              {" "}
              Created with passion by
            </h3>
          </Typography>
          <Box p={4} sx={{ display: "flex" }}>
            <img width="100px" height="70px" src={logo2} alt="" />
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              marginLeft={4}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  color="blue"
                  variant="body"
                  fontWeight="bold"
                  fontSize="18px"
                >
                  John Pak
                </Typography>
                <Typography variant="body">
                  Co-founder Business & Operations
                </Typography>
              </Box>

              <Typography variant="body" marginBottom={4} marginTop={4}>
                An entrepreneur and founder one of the top blockchain gaming
                media sites, Blockchaingamer.net launched late in 2017 when the
                industry was just sprouting. This was also the stepping stone
                for his venture deeper into non-fungible tokens, adeptly
                establishing many key networks and partnerships throughout this
                nascent space.
              </Typography>
              <Box sx={{ display: "flex" }} color="blue" marginLeft={2}>
                <TwitterIcon />
                <LinkedInIcon />
                <FacebookIcon />
              </Box>
            </Box>
          </Box>
          <Box p={4} sx={{ display: "flex" }}>
            <img width="100px" height="70px" src={logo2} alt="" />
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              marginLeft={4}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  color="blue"
                  variant="body"
                  fontWeight="bold"
                  fontSize="18px"
                >
                  Bruckzr
                </Typography>
                <Typography variant="body">
                  Co-founder Solidity & AWS Developer
                </Typography>
              </Box>

              <Typography variant="body" marginBottom={4} marginTop={4}>
                He’s involved in Crypto ecosystem since 2016/2017 and also the
                beginning of the NFT ecosystem. He believes so much in those new
                opportunities that NFTs could bring to the whole ecosystem: from
                gaming, to a different kind of DAO but also art, high valuable
                assets connected to real world items and so on.
              </Typography>
              <Box sx={{ display: "flex" }} color="blue" marginLeft={2}>
                <TwitterIcon />
              </Box>
            </Box>
          </Box>
          <Box p={4} sx={{ display: "flex" }}>
            <img width="100px" height="70px" src={logo2} alt="" />
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              marginLeft={4}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  color="blue"
                  variant="body"
                  fontWeight="bold"
                  fontSize="18px"
                >
                  Mattia Migliore
                </Typography>
                <Typography variant="body">
                  Co-founder Full Stack Dev & UX/UI
                </Typography>
              </Box>

              <Typography variant="body" marginBottom={4} marginTop={4}>
                He’s a technology entusiast and a full stack developer from
                2012. He worked in a timekeeper company around the world
                partecipating as TOC member during many sport events. He loves
                graphics and UX design and believes in the power of Blockchain
                and all advantages that this technology could brings in our
                society.
              </Typography>
              <Box sx={{ display: "flex" }} color="blue" marginLeft={2}>
                <TwitterIcon />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid item height="100vh" bgcolor="blue" color="white">
        <Typography
          variant="h4"
          fontWeight="bold"
          pt={10}
          width="100%"
          textAlign="center"
        >
          <h2 style={{ fontWeight: "bold" }}>Our Partners</h2>
        </Typography>
        <Box
          p={10}
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>{" "}
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>{" "}
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>{" "}
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>{" "}
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>{" "}
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>{" "}
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>{" "}
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>{" "}
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>{" "}
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>
        </Box>
      </Grid>
      <Grid item bgcolor="#000080" justifyContent="center">
        <Box
          p={10}
          color="white"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>
          <Typography width="25%" p={2} display="flex">
            <AccountBalanceIcon />
            <h5>MoonPay</h5>
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="blue"
          pt={10}
          pb={8}
        >
          <h2 style={{ fontWeight: "bold" }}>Upcoming Blueprints</h2>
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box width="30%" sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="blue"
              marginRight={4}
            >
              2022
            </Typography>
          </Box>

          <Box
            width="70%"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <h6 style={{ color: "blue" }}>Feb / Apr</h6>
              <Box marginLeft={4}>
                <ul>
                  <li>Platform upgrade with new UX and UI</li>
                  <li>New core v3.0</li>
                  <li>Alpha SDK</li>
                  <li>Smart contract audit</li>
                  <li>Platform fee update</li>
                </ul>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <h6 style={{ color: "blue" }}>May</h6>
              <Box marginLeft={8}>
                <ul>
                  <li>Beta SDK</li>
                </ul>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <h6 style={{ color: "blue" }}>jun / july</h6>
              <Box marginLeft={4}>
                <ul>
                  <li>Public Deal Feature</li>
                  <li>Chain Integration</li>
                </ul>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <h6 style={{ color: "blue" }}>aug / dec</h6>
              <Box marginLeft={4}>
                <ul>
                  <li>Integrated Chat</li>
                  <li>ERC20 Token</li>
                  <li>Integration with other chain</li>
                  <li>Advertises Revenue Stream</li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} bgcolor="blue">
        <Box
          p={10}
          width="100%"
          color="white"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontWeight: "bold" }}>Interested in our project?</h2>

          <Typography variant="body1">
            We're looking for involving in the team a DAO expert. If you're
            interested to join the team we'll happy to talk with you.
          </Typography>
          <button className="card1-button2 rounded-pill">Email Us!</button>
        </Box>
      </Grid>
      <Grid xs={12} item>
        <WanttoKnowmore />
      </Grid>
    </Grid>
  );
};

export default AboutUs;
