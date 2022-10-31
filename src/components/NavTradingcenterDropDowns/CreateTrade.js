import { Box, Typography } from "@mui/material";
import React from "react";

const CreateTrade = ({ elem }) => {
  return (
    <Box display="flex" width="100%" justifyContent="center">
      <Box
        display="flex"
        width="75%"
        p={4}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Typography variant="h1" fontSize="35px" marginBottom={2} color="blue">
          <h3 style={{ fontWeight: "600", fontSize: "50px" }}>{elem.id}</h3>
        </Typography>
        <Box marginLeft={5} display="flex" flexDirection="column">
          <Typography
            variant="body"
            fontWeight="600"
            color="blue"
            fontSize="20px"
          >
            {elem.headline}
          </Typography>
          <Typography variant="body" mt={2}>
            {elem.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateTrade;
