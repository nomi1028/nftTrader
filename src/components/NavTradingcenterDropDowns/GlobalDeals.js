import React from "react";
import Modal from "@mui/material/Modal";
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
import logo3 from "../../assets/images/logo3.svg";
import TradeBox from "./TradeBox";

const GlobalDeals = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                Global Deals
              </h3>
            </Typography>
            <Button
              onClick={handleOpen}
              className="bg-white rounded-pill  nav-btn  "
              style={{
                color: "#0000FF",
                width: "150px",
                height: "50px",
                fontFamily: "museomoderno",
                // fontSize: "0.875rem",
              }}
            >
              Create Trade
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <TradeBox />
            </Modal>
          </Box>
          <Typography variant="body1" fontSize="15px">
            Check what deals other Traders have made
          </Typography>
        </Box>
      </Grid>
      <Grid item pt={2} container marginTop={4}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: "60%",
              display: "flex",
              marginLeft: "250px",
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
              <Tab  value="one" label="All" />
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className="inputRounded"
            placeholder="Search"
            sx={{
              width: "35%",
             marginLeft: "250px",
              marginBottom: "15px",

              [`& fieldset`]: {
                borderRadius: "25px",
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton style={{ color: "blue" }}>
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
        <img
          width="250px"
          height="150px"
          style={{ marginTop: "20px", marginBottom: "20px" }}
          src={logo3}
          alt=""
        />
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

export default GlobalDeals;
