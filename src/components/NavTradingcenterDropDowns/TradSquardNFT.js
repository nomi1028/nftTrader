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

const TradSquardNFT = () => {
  return (
    <Grid container>
      <Grid
        item
        p={5}
        mt={5}
        xs={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          borderRadius="10px"
          p={5}
          bgcolor="gray"
          height="500px"
          width="50%"
        ></Box>
      </Grid>
      <Grid item mt={5} xs={6} p={5} display="flex" flexDirection="column">
        <Typography
          variant="h1"
          fontSize="30px"
          marginBottom={2}
          color="#000080"
        >
          <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
            Bypass Platform Trading Fee
          </h3>
        </Typography>
        <Typography variant="body1" fontSize="15px" color="#000080" mb={10}>
          Mint your own Trade Squad NFT, keep it in your connected trading
          wallet and don’t pay our platform trading fee
        </Typography>
        <Divider />

        <a
          style={{ marginTop: "20px" }}
          className="text-decoration-none link-primary"
          href=""
        >
          Minting is only available in the Ethereum Mainnet
        </a>
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
