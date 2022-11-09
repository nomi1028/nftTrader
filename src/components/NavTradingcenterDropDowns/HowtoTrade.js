import React from "react";
import youmadeit from "../../assets/youmadeit.svg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import dsrd from "../../assets/dsrd.svg";
import bgimg from "../../assets/images/bgimg.PNG";
import "./style.css"
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import "./TradeStyle.css";
import { SearchOutlined } from "@mui/icons-material";
import BasicTabs from "./HowtoTradeTab";
import WanttoKnowmore from "../NavMoreDropowns/WanttoKnowmore";
import { useState } from "react";

const HowtoTrade = () => {
  const [status, setStatus] = useState(true);
  const handler = () => {
    setStatus(false);
  };

  return (
    <Grid container direction="column">
      <Grid item xs={12}    >
        <div className="top_mai">
        <div className="top_m">
       
          <Typography>
            <h3  className="top_h2">
              How To Trade
            </h3>
          </Typography>
          <Typography variant="body1" fontSize="15px">
            <p className="top_p2">Instructions for each party involved in a deal</p>
          </Typography>
       
        </div>
        </div>
      </Grid>

        <div className="trade-t">
          
        <Box
        className="trade-m"
          
        >
          {/* <iframe
           
            height="100%"
            src="https://www.youtube.com/embed/5q2HlcFoDtM"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          /> */}

          {status ? (
            <img
            className="i-1"
              sx={{
                width:"100%",
                height: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              src={bgimg}
              alt="Live from space album cover"
              allow="autoplay; encrypted-media"
              onClick={handler}
            />
          ) : (
            <CardMedia
              component="iframe"
              sx={{  height: "100%" ,width:"100%"}}
              src="https://www.youtube.com/embed/5q2HlcFoDtM"
              alt="Live from space album cover"
              allow="autoplay; encrypted-media"
            />
          )}
        </Box>
        
        

       

      

        <Typography
          variant="h1"
          fontSize="15px"
          width="80%"
          p={10}
          color="#03045E"
        >
          <h1
            style={{ fontSize: "40px", fontWeight: "600", textAlign: "center" }}
          >
            Are you creating or closing a deal? Select an option
          </h1>
        </Typography>
        
     
      <Grid item xs={12} style={{ marginLeft: "140px", marginRight: "180px" }} >
        <BasicTabs />
        
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        m={10}
      >
        <img src={youmadeit} alt="img" />
        <Typography variant="h1" fontSize="15px" mt={2} color="blue">
          <h1 style={{ fontSize: "18px" }}>
            Congrats On Your Part Of The Deal
          </h1>
        </Typography>
      </Grid>
      </div>
     
        <div  className="htd-c">
          <div>
        <Typography
          variant="body"
          fontWeight="bold"
          color="white"
          fontSize="20px"
        >
          Connect with other NFT Traders in our discord channel
        </Typography>
        </div>
        <div className="htd_cb">
        <Button
          className="bg-white rounded-pill  nav-btn  "
          style={{
            color: "#0000FF",
            width: "180px",
            height: "50px",
            fontFamily: "museomoderno",
            // fontWeight: "1000"
            fontSize: "0.875rem",
          }}
          endIcon={<img width="16px" height="16px" src={dsrd} />}
        >
          Join Discord
        </Button>
        </div>
        </div>
      
        <div className="tra-c">
         <div className="tra-c1">

        
      <div className="tra-c2">
        
            <Typography
              variant="body"
              fontWeight="600"
              color="rgb(45,0,247)"
              fontSize="1.25rem"
              mt={5}
              mb={4}
              paddingLeft={10}
              paddingRight={10}
            >
              Important Things To Know Before Using NFT Trader
            </Typography>
            <Typography
              variant="body1"
              paddingLeft={10}
              paddingRight={10}
              paddingTop={3}
              paddingBottom={3}
            >
              Only ONE Trader/Initiator, creates the trade for both parties'
              involved in the deal. The other Trader/Counterparty is the ONE who
              closes the deal. This particular flow of trading provides security
              layers in order to help prevent the act of fraudulent activities.
            </Typography>
         
          </div> 
          </div> 
        </div>
      

      
        <div container className="trade-bm">
          <div className="trade-bm-l">
       
          <h5
            className="trade-bm-lt"
        
          
           
           


          >
            Our Smart Contracts
          </h5>
 
        </div>
        <div className="trade-bm-r">
        
         
          <Box
            className="trade-bm-rt1"
            
            
          >
            <Typography color="yellow" >
              <FiberManualRecordIcon />
            </Typography>
            
            <Box
              color="white"
              
            paddingLeft={3}
            >
              <h5 className="tp1"> 
                Ethereum Contract Address
                </h5>
             
                
              
                
           
                <p className="tp">
               0x657E383EdB9A7407E468acBCc9Fe4C9730c7C275#code
                </p>
            
            </Box>
           
          </Box>
         
          <Box  className="trade-bm-rt2">
            <Typography color="yellow">
              <FiberManualRecordIcon />
            </Typography>
            <Box
              color="white"
             paddingLeft={3}
              marginLeft={0}
            >
                 <h5 className="tp1"> 
                Polygon Contract Address
             </h5>
             
             <p className="tp">
               0x4ee6e8885b684a3de405a3dca83b8823a
             </p>
            </Box>
          </Box>
          
        </div>
        </div>
    
      <Grid item sx={12} width="100%">
        <WanttoKnowmore />
      </Grid>
     
    </Grid>
   
  );
};

export default HowtoTrade;
