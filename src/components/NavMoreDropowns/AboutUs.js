import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import aboutcrs from "../../assets/images/aboutcrs.PNG";
import john from "../../assets/images/john.jpeg";
import logo2 from "../../assets/images/nftlogo.svg";
import a from "../../assets/images/partners/1.svg";
import b from "../../assets/images/partners/2.svg";
import c from "../../assets/images/partners/3.svg";
import d from "../../assets/images/partners/4.svg";
import e from "../../assets/images/partners/5.svg";
import f from "../../assets/images/partners/6.svg";
import g from "../../assets/images/partners/7.svg";
import h from "../../assets/images/partners/8.svg";
import i from "../../assets/images/partners/9.png";
import j from "../../assets/images/partners/10.png";
import k from "../../assets/images/partners/11.svg";

import b1 from "../../assets/images/partners/b1.svg";
import b2 from "../../assets/images/partners/b2.svg";
import b3 from "../../assets/images/partners/b3.svg";
import b4 from "../../assets/images/partners/b4.svg";

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

      
       <div  className="ab-main">
        <div className="ab-main1">
          <Typography variant="body1" fontSize="15px"  pb={3}>
            NFT Trader was founded with a simple mission: provide a safe
            platform and community for the trading of digital assets in the Web3
            space.
          </Typography>
          <Typography
            variant="body1"
            fontSize="15px"
          pb={3}
            sx={{ opacity: 0.9  ,}}
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
           
            sx={{ opacity: 0.9 }}
          >
            With the great support we have been given we are impelled now more
            than ever to support the Web3 space in what way we can and build
            something that will offer a safe haven and community driven platform
            for owners of all forms of digital assets!
          </Typography>
          </div>
        </div>
      
      <div
          className="news position-relative "
          style={{
            background: "#2D00F7",
            width:"100%"         }}
        >
          <marquee direction="right" className="news-content">
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              {/* <Box>
                <img width="100px" height="70px" src={logo2} alt="" />
                <ChatBubbleOutlineIcon
                  sx={{ color: "yellow", fontSize: "70px" }}
                >
                  <Typography variant="body" color="white">
                    helo bubble
                  </Typography>
                </ChatBubbleOutlineIcon>
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
              </Box> */}
              <img src={aboutcrs} alt="" />
              <img src={aboutcrs} alt="" />
              <img src={aboutcrs} alt="" />
            </Box>
          </marquee>
        </div>
      <Grid item xs={12} container>
        
        <Grid item xs={12}  direction="column">
          <Typography
            variant="h4"
            fontWeight="bold"
            color="blue"
            pt={10}
            pb={8}
            pl={2}
            pr={2}

          >
            <h3 style={{ textAlign:"center", fontWeight: "bold", fontSize: "35px" }}>
              {" "}
              Created with passion by
            </h3>
          </Typography>
          <Box p={4}  sx={{ display: "flex" }}>
            {/* <img width="100px" height="70px" src={john} alt="" /> */}
            <Avatar src={john} alt="" sx={{ width: 85, height: 85 }} />
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
             paddingLeft={3}
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
              <Box sx={{ display: "flex" }} color="blue" gap={4} marginLeft={2}>
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
                He???s involved in Crypto ecosystem since 2016/2017 and also the
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
                He???s a technology entusiast and a full stack developer from
                2012. He worked in a timekeeper company around the world
                partecipating as TOC member during many sport events. He loves
                graphics and UX design and believes in the power of Blockchain
                and all advantages that this technology could brings in our
                society.
              </Typography>
              <Box sx={{ display: "flex" }} gap={4} color="blue" marginLeft={2}>
                <TwitterIcon />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid item width="100%" height="100%" bgcolor="blue" color="white">
      <Grid item>
        <Typography
          variant="h4"
          fontWeight="bold"
          pt={10}
          width="100%"
          textAlign="center"
        >
          <h2 style={{ fontWeight: "bold" }}>Our Partners</h2>
        </Typography>
        </Grid>
      <Grid container xs={12} width="100%" height="100%" alignItems="center" pl={10} pr={10} rowSpacing={8} mt={7} mb={8}>
   
          
          <Grid item xs={12} sm={6}  md={3} display="flex" justifyContent="center">
            <img height="50%" width="50%" src={a} alt="img1" />
            </Grid>
          <Grid item  xs={12} sm={6}  md={3} display="flex" justifyContent="center">
          
            <img height="50%" width="50%" src={b} alt="img1" />
            </Grid>
          <Grid item xs={12} sm={6}  md={3} display="flex" justifyContent="center">
          
            <img height="50%" width="50%" src={c} alt="img1" />
            </Grid>
          <Grid item  xs={12} sm={3}  md={2} display="flex" justifyContent="center">
          
            <img height="50%" width="50%" src={d} alt="img1" />
            </Grid>
          <Grid item  xs={12} sm={6}  md={3} display="flex" justifyContent="center">
         
            <img height="50%" width="50%" src={e} alt="img1" />
          
            </Grid>
          <Grid item xs={12} sm={6}  md={3} display="flex" justifyContent="center">
          
            <img height="50%" width="50%" src={f} alt="img1" />
            </Grid>
          <Grid item  xs={12} sm={6}  md={3} display="flex" justifyContent="center">
          
            <img height="50%" width="50%" src={g} alt="img1" />
            </Grid>
          <Grid item  xs={12} sm={6}  md={3} display="flex" justifyContent="center">
         
            <img height="50%" width="50%" src={h} alt="img1" />
            </Grid>
          <Grid item  xs={12} sm={6}  md={3} display="flex" justifyContent="center">
          
            <img height="50%" width="50%" src={i} alt="img1" />
            </Grid>
          <Grid item  xs={12} sm={6}  md={3} display="flex" justifyContent="center">

            <img height="50%" width="50%" src={j} alt="img1" />
            </Grid>
          <Grid item  xs={12} sm={6}  md={3} display="flex" justifyContent="center">

            <img height="50%" width="50%" src={k} alt="img1" />
         
          </Grid>
          </Grid>
      </Grid>
      <Grid container xs={12} width="100%" bgcolor="#000080" alignItems="center" p={9}>
     
        
          <Grid item xs={12} sm={3} >
          <Typography  color="white" p={2} display="flex" justifyContent="center" >
            <h4>Trusted By</h4>
          </Typography>
          </Grid>
          <Grid item xs={6} sm={2} display="flex" justifyContent="center">
          <img
            height="50"
            width="100px"
            src={b1}
            alt="img1"
          
          />
          </Grid>
          <Grid item xs={6} sm={2} display="flex" justifyContent="center">
          <img
            height="50"
            width="100px"
            src={b2}
            alt="img1"
            
          />
          </Grid>
          <Grid item xs={6} sm={2} display="flex" justifyContent="center">
          <img
            height="50"
            width="100px"
            src={b3}
            alt="img1"
          
          />
          </Grid>
          <Grid item xs={6} sm={2} display="flex" justifyContent="center">
          <img
            height="50"
            width="100px"
            src={b4}
            alt="img1"
           
          />
          
       </Grid>
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

      <Grid item xs={12} width="100%" bgcolor="blue">
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
      <Grid xs={12} item width="100%">
        <WanttoKnowmore />
      </Grid>
    </Grid>
  );
};

export default AboutUs;
