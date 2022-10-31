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

const TradSquardNFT = () => {
  return (
    <Grid container>
      <Grid item xs={12} bgcolor="yellow">
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
          <Typography variant="h1" fontSize="42px" marginBottom={2}>
            <h3 style={{ fontWeight: "600", fontSize: "48px" }}>
              Mint a TradeSquad NFT
            </h3>
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        p={5}
        mt={5}
        xs={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box bgcolor="#F3F4F6" height="500px" width="60%">
          <img src={bgs} alt="nothing" />
        </Box>
      </Grid>
      <Grid item mt={5} xs={7} p={5} display="flex" flexDirection="column">
        <Typography
          variant="h1"
          fontSize="28px"
          marginBottom={2}
          color="#03045E"
        >
          <h3
            style={{
              fontWeight: "600",
              fontSize: "40px",
            }}
          >
            Bypass Platform Trading Fee
          </h3>
        </Typography>
        <Typography
          variant="body"
          fontSize="15px"
          color="#03045E"
          mb={10}
          fontWeight="700"
        >
          Mint your own Trade Squad NFT, keep it in your connected trading
          wallet and don’t pay our platform trading fee
        </Typography>
        <Divider />

        <span
          style={{
            marginTop: "80px",
            alignSelf: "center",
            textAlign: "center",
            color: "#2D00F7",
          }}
        >
          {" "}
          Minting is only available in the Ethereum Mainnet
        </span>
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        p={15}
        justifyContent="center"
        bgcolor="blue"
      >
        <Box
          width="60%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            color="white"
            variant="h1"
            fontSize="30px"
            marginBottom={2}
          >
            <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Trade Squad NFTs will support the NFT Trader community and whole
              ecosystem!
            </h3>
          </Typography>
          <Typography color="white" variant="body1" fontSize="15px" mb={10}>
            Trade Squads are a utility token which at first will offer owners a
            full discount of the platform trading fee when securing trades on
            the platform. The purpose of this token is not to be aesthetic but
            award unique bonuses and advantages for users within this ecosystem.
            Our target will be to add these future utilities into our Trade
            Squads NFTs over time. To keep updated and in the loop please follow
            us on Twitter and read our Medium.
          </Typography>
          <Button
            endIcon={<img width="50px" height="30px" src={opensea} alt="" />}
            className="bg-white rounded-pill w-75 p-3 nav-btn  "
            style={{ color: "#0000FF", padding: "5px" }}
          >
            Trad Squar which already been minted
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <WanttoKnowmore />
      </Grid>
    </Grid>
  );
};

export default TradSquardNFT;
