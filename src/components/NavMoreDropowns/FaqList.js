import {
  Box,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import "./style.css";
import { SearchOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const FaqList = ({ elem }) => {
  const [qopen, setqopen] = useState(false);

  console.log(elem);

  return (
    <>
      <Divider variant="middle" />
      <Box
        pt={2}
        pb={2}
        width="100%"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Divider variant="middle" />
        <Box width="85%" flexDirection="column">
          <Box
            alignSelf="center"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h1" fontWeight="bold" color="blue">
              <p style={{ fontSize: "20px", fontWeight: "lighter" }}>
                {elem.question}
              </p>
            </Typography>
            {qopen ? (
              <IconButton onClick={() => setqopen(!qopen)}>
                <RemoveIcon fontSize="large" />
              </IconButton>
            ) : (
              <IconButton onClick={() => setqopen(!qopen)}>
                <AddIcon fontSize="large" />
              </IconButton>
            )}
          </Box>
          {qopen ? <Typography variant="body">{elem.answer}</Typography> : null}
        </Box>
      </Box>
    </>

    // <div>
    //   {data.map((elem) => {
    //     const { qid, qq, qans } = elem;
    //     <Faqpage key={qid} question={qq} answer={qans} />;
    //   })}
    // </div>
  );
};

export default FaqList;
