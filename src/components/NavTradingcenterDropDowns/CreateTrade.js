import { Box, Typography } from "@mui/material";
import React from "react";

const CreateTrade = ({ elem }) => {
  return (
    <Box display="flex" width="100%" justifyContent="center">
      <Box
        display="flex"
        width="70%"
        p={2}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Typography variant="h1" fontSize="35px" marginBottom={2} color="blue">
          <h3 style={{ fontWeight: "bold", fontSize: "50px" }}>{elem.id}</h3>
        </Typography>
        <Box marginLeft={5} display="flex" flexDirection="column">
          <Typography
            variant="body"
            fontWeight="bold"
            color="blue"
            fontSize="20px"
          >
            {elem.headline}
          </Typography>
          <Typography variant="body1" mt={2}>
            {elem.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateTrade;
