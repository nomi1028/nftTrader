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

const HowtoTrade = () => {
  return (
    <Grid container direction="column">
      <Grid item bgcolor="yellow">
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
            <h3 style={{ fontWeight: "bold", fontSize: "50px" }}>FAQ</h3>
          </Typography>
          <Typography variant="body1" fontSize="15px">
            Here you can find the answers about the common questions related to
            NFT Trader platform
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} pt={2}>
        <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            className="inputRounded"
            placeholder="Search FAQ"
            sx={{
              width: "90%",
              marginTop: "15px",
              marginBottom: "15px",

              [`& fieldset`]: {
                borderRadius: "25px",
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HowtoTrade;
