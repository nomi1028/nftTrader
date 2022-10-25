import React from "react";

import {
  Box,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import "./TradeStyle.css";
import { SearchOutlined } from "@mui/icons-material";

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
        <Typography variant="h1" fontSize="30px" marginBottom={2}>
          <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
            Bypass Platform Trading Fee
          </h3>
        </Typography>
        <Typography variant="body1" fontSize="15px" mb={10}>
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
        flexDirection="column"
        p={15}
        alignItems="center"
        bgcolor="blue"
      >
        <Typography color="white" variant="h1" fontSize="30px" marginBottom={2}>
          <h3 style={{ fontWeight: "bold", fontSize: "30px" }}>
            Trade Squad NFTs will support the NFT Trader community and whole
            ecosystem!
          </h3>
        </Typography>
        <Typography color="white" variant="body1" fontSize="15px" mb={10}>
          Trade Squads are a utility token which at first will offer owners a
          full discount of the platform trading fee when securing trades on the
          platform. The purpose of this token is not to be aesthetic but award
          unique bonuses and advantages for users within this ecosystem. Our
          target will be to add these future utilities into our Trade Squads
          NFTs over time. To keep updated and in the loop please follow us on
          Twitter and read our Medium.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TradSquardNFT;
