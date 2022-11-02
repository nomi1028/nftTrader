import {
  Box,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { data } from "./FaqData";

import "./style.css";
import { SearchOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import FaqList from "./FaqList";

const Faqpage = () => {
  const [qopen, setqopen] = useState(false);

  console.log(data);

  const openquestion = () => {
    setqopen(true);
  };
  const closequestion = () => {
    setqopen(false);
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
        <Box width="75%" margin="auto" sx={{ display: "flex", justifyContent: "center" }}>
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
      <Grid width="70%" margin="auto" item pt={5} xs={12}>
        {data.map((elem) => {
          return <FaqList elem={elem} />;
        })}
      </Grid>
    </Grid>
  );
};

export default Faqpage;
