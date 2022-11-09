import React from "react";

import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import "./TradeStyle.css";
import { SearchOutlined } from "@mui/icons-material";
import WanttoKnowmore from "../NavMoreDropowns/WanttoKnowmore";
import bgs from "../../assets/images/bgs.svg";
import opensea from "../../assets/opensea.svg";
import lightimg from "../../assets/images/lightimg.svg";

const TradSquardNFT = () => {
  return (
    <Grid container >
   <Grid item xs={12}>
        <div className="top-m">
       <div className="top-main">
        
            <h5 className="top-h" >
              Mint a TradeSquad NFT
            </h5>
         
          </div>
        
        </div>
        </Grid>
      
        <div className="trade-mid">
    
    <div className="trade-mid-l">
    <img className="trade-img" src={lightimg} alt="nothing" />
    </div>
    
      <div className="trade-mid-r">
      {/* <Grid item mt={5} xs={7} p={5} sx={{textAlign:"start",  margin:"auto " }} display="flex" flexDirection="column"> */}
        
        <Typography
          variant="h1"
          fontSize="28px"
          marginBottom={2}
          color="#03045E"
        >
          <h3
          className="trade-mid-rh1"
         
          >
            Bypass Platform Trading Fee
          </h3>
        </Typography>
        <Typography
          variant="body"
          
          color="#03045E"
          
         
          
        >
        <p className="trade-mid-rp">
          Mint your own Trade Squad NFT, keep it in your connected trading
          wallet and don’t pay our platform trading fee
          </p>
        </Typography>
        
        <Divider  className="divider"/>
      

        <span
        className="trade-mid-re"
         
        >
          {" "}
          Minting is only available in the Ethereum Mainnet
        </span>
        
      {/* </Grid> */}
      </div>
         </div>
     
        <div className="t-b">
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            color="white"
            variant="h1"
            fontSize="30px"
            marginBottom={2}
            textAlign="center"
          >
            <h3 className="t-bh">
              Trade Squad NFTs will support the NFT Trader community and whole
              ecosystem!
            </h3>
          </Typography>
          <Typography color="white" >
            <p className="t-bp">
            Trade Squads are a utility token which at first will offer owners a
            full discount of the platform trading fee when securing trades on
            the platform. The purpose of this token is not to be aesthetic but
            award unique bonuses and advantages for users within this ecosystem.
            Our target will be to add these future utilities into our Trade
            Squads NFTs over time. To keep updated and in the loop please follow
            us on Twitter and read our Medium.
            </p>
          </Typography>
          <Typography color="white"  variant="body1"  fontWeight="300" fontFamily="Rubik,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;" fontSize="15px" mb={10} pl={2} pr={2}>
          To keep updated and in the loop please follow us on Twitter and read our Medium.
          </Typography>
          <Button
            endIcon={<img width="48px" height="30px" src={opensea} alt="" />}
            className="bg-white rounded-pill w-65 p-3 nav-btn  "
           
            id="t-btn"
          >
            Trad Squar which already been minted
          </Button>
        </Box>
        </div>
     
      <Grid item xs={12} >
        <WanttoKnowmore />
      </Grid>
    </Grid>
  );
};

export default TradSquardNFT;
