import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <Grid container bgcolor="#2001C9">
        <Grid item xl={2} lg={1}></Grid>

        <Grid
          item
          overflow="hidden"
          display="flex"
          justifyContent="center"
          alignItems="center"
          xs={12}
          lg={10}
          xl={8}
          sx={{
            height: { xs: 464, md: 768 },
          }}
        >
          <Box
            bgcolor="black"
            borderRadius="50%"
            position="relal"
            sx={{
              width: {
                xs: "200%",
                sm: "130%",
                md: "110%",
                lg: "100%",
                xl: "90%",
              },
              height: {
                xs: "200%",
                sm: "130%",
                md: "110%",
                lg: "100%",
                xl: "80%",
              },
            }}
          >
            <h1>helo</h1>
          </Box>
        </Grid>

        <Grid item xl={2} lg={1}></Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
