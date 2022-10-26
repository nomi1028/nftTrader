import React from "react";
import youmadeit from "../../assets/youmadeit.svg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="60%" height="500px" marginTop={-5}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5q2HlcFoDtM"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Box>
        <Typography
          variant="13"
          fontSize="15px"
          width="70%"
          p={10}
          color="blue"
        >
          <h1 style={{ fontSize: "40px" }}>
            Are you creating or closing a deal? Select an option.
          </h1>
        </Typography>
      </Grid>
      <Grid item xs={12}>
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

      <Grid
        item
        xs={12}
        bgcolor="#2D00F7"
        p={10}
        display="flex"
        justifyContent="space-around"
      >
        <Typography
          variant="body"
          fontWeight="bold"
          color="white"
          fontSize="20px"
        >
          Connect with other NFT Traders in our discord channel
        </Typography>
        <Button
          className="bg-white rounded-pill  nav-btn  "
          style={{ color: "#0000FF", height: "40px", padding: "5px" }}
        >
          Join Discord
        </Button>
      </Grid>
      <Grid
        xs={12}
        bgcolor="#E5E7EB"
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={10}
      >
        <Box
          width="65%"
          height="250px"
          bgcolor="#FFFFFF"
          borderRadius="15px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant="body"
            fontWeight="bold"
            color="blue"
            fontSize="20px"
            mt={5}
          >
            Important Things To Know Before Using NFT Trader
          </Typography>
          <Typography
            variant="body1"
            paddingLeft={10}
            paddingRight={10}
            paddingTop={3}
          >
            Only ONE Trader/Initiator, creates the trade for both parties'
            involved in the deal. The other Trader/Counterparty is the ONE who
            closes the deal. This particular flow of trading provides security
            layers in order to help prevent the act of fraudulent activities.
          </Typography>
        </Box>
      </Grid>

      <Grid item container xs={12} bgcolor="#2D00F7">
        <Grid item p={10} xs={6}>
          <Typography
            variant="body"
            fontWeight="bold"
            color="white"
            fontSize="20px"
          >
            Our Smart Contracts
          </Typography>
        </Grid>
        <Grid item p={5} xs={6} display="flex" flexDirection="column">
          <Box
            width="100%"
            display="flex"
            p={5}
            sx={{ borderBottom: 1, borderColor: "black" }}
          >
            <Typography color="yellow">
              <FiberManualRecordIcon />
            </Typography>
            <Box
              color="white"
              display="flex"
              flexDirection="column"
              marginLeft={2}
            >
              <Typography
                variant="body"
                fontWeight="bold"
                color="white"
                fontSize="20px"
              >
                Ethereum Contract Address
              </Typography>
              <Typography
                width="80%"
                variant="body"
                fontSize="12px"
                marginTop={1}
              >
                https://etherscan.io/address/0x657E383EdB9A7407E468acBCc9Fe4C9730c7C275#code
              </Typography>
            </Box>
            <Divider></Divider>
          </Box>
          <Box width="100%" display="flex" p={5}>
            <Typography color="yellow">
              <FiberManualRecordIcon />
            </Typography>
            <Box
              color="white"
              display="flex"
              flexDirection="column"
              marginLeft={2}
            >
              <Typography
                variant="body"
                fontWeight="bold"
                color="white"
                fontSize="20px"
              >
                Polygon Contract Address
              </Typography>
              <Typography
                width="80%"
                variant="body"
                fontSize="12px"
                marginTop={1}
              >
                https://polygonscan.com/address/0x4ee6e8885b684a3de405a3dca83b8823a5acf216#code
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid item>
        <WanttoKnowmore />
      </Grid>
    </Grid>
  );
};

export default HowtoTrade;
