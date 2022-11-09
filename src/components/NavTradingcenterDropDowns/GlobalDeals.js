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
    <div container className="globle">
      <Grid container direction="column">
        <Grid item xs={12}>
          <div className="top_main">
            <div className="top_m">
              <div className="top-b">


                <Typography variant="h1" fontSize="45px" marginBottom={2}>
                  <h3 className="top_h3" >
                    Global Deals
                  </h3>
                  <p className="top_p">Check what deals other Traders have made</p>


                </Typography>
                <div className="top-btn">
                  <Button
                    onClick={handleOpen}
                    className="bg-white rounded-pill  nav-btn  "
                    style={{
                      color: "#0000FF",
                      width: "150px",
                      height: "50px",
                      fontFamily: "museomoderno",
                    }}
                  >
                    Create Trade
                  </Button
                  >

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <TradeBox />
                  </Modal>
                </div>


              </div>

            </div>
          </div>
        </Grid>
        <Grid item xs={12} pt={2} lg={{ margin: "auto ", width: "100%", marginY: "30px !important" }}>
          <div className="mid-m">
            <div className="mid-l">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "5px",
                  borderBottomWidth:"2px"
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="primary"
                  indicatorColor="primary"
                  aria-label="secondary tabs example"
                  
                >
                  <Tab style={{borderBottomWidth:"2px"}} value="one" label="All" />
                </Tabs>
              </Box>

            </div>
            <div className="mid-r">
              <TextField
                className="sea"
                placeholder="Search"

                sx={{

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

            </div>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          padding="30px"
        >
          <img
            width="250px"
            height="150px"
            style={{ marginBottom: "20px" }}
            src={logo3}
            alt=""
          />
          <Typography
            color="#202A44"
            variant="body"
            fontWeight="600"
            fontSize="1.876rem"
            mt={2}
          >
            Connect Your Wallet First
          </Typography>
          <Typography variant="body" pb={3}>
            Please, connect your wallet if you want to browse this page
          </Typography>
        </Grid>
      </Grid>
    </div >
  );
};

export default GlobalDeals;
