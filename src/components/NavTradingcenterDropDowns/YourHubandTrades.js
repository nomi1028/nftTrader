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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./TradeStyle.css";
import { SearchOutlined } from "@mui/icons-material";

import logo2 from "../../assets/images/nftlogo.svg";

const YourHubandTrades = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h1" fontSize="45px" marginBottom={2}>
              <h3 style={{ fontWeight: "bold", fontSize: "50px" }}>
                Your Hub & Trades
              </h3>
            </Typography>
            <Button
              className="bg-white rounded-pill  nav-btn  "
              style={{
                color: "#0000FF",
                width: "150px",
                height: "50px",
                fontFamily: "museomoderno",
              }}
            >
              Create Trade
            </Button>
          </Box>
          <Typography variant="body1" fontSize="15px">
            This is your personal Trade hub page. Here you can conveniently
            create deals, cancel them and update your Trader counterparty.
          </Typography>
        </Box>
      </Grid>
      <Grid item pt={2} marginTop="10px" container>
        <Grid item xs={8}>
          <Box
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="All" />
              <Tab value="two" label="Closed" />
              <Tab value="three" label="Canceled" />
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <TextField
            className="inputRounded"
            placeholder="Search"
            sx={{
              width: "80%",

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
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding="50px"
      >
        <img width="250px" height="150px" p={2} src={logo2} alt="" />
        <Typography
          color="#202A44"
          variant="body"
          fontWeight="bold"
          fontSize="25px"
          mt={2}
        >
          Connect Your Wallet First
        </Typography>
        <Typography variant="body">
          Please, connect your wallet if you want to browse this page
        </Typography>
      </Grid>
    </Grid>
  );
};

export default YourHubandTrades;
