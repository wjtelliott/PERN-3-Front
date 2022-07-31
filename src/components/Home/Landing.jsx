import React, { useEffect } from "react";
import Navbar from "../Shared/Navbar";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import BetCardGrid from "../BetCardGrid";

const LandingPage = () => {

  // If we want to use AOS, we will have to have this line in all pages that use it
  useEffect(()=>{eval(`AOS.init()`)},[]);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            margin: 3,
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          YouBetcha!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: '90%'
          }}
          data-aos='fade-up'
        >
          Games to bet on
          <BetCardGrid />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: '90%'
          }}
          data-aos='fade-up'
        >
          Games to lose on:
          <BetCardGrid />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: '90%'
          }}
          data-aos='fade-up'
        >
          Games games games
          <BetCardGrid />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: '90%'
          }}
          data-aos='fade-up'
        >
          Some more games
          <BetCardGrid />
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
