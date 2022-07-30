import React from "react";
import GameCard from "./GameCard";
import { Grid } from "@mui/material";
import "../App.css";
import { mlbData } from "./Data-Handling/TestData";
// import { mlbData } from "./Data-Handling/TestDataMLBOnly";
export default function BetCardGrid() {
  return (
    <Grid
      container
      spacing={4}
      justify="center"
      justifyContent="space-around"
      className="bettingGridItem"
    >
      {mlbData.slice(0, 8).map((game, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          xl={3}
          sx={{
            justifyContent: "center",
            display: "flex",
            justifySelf: "center",
          }}
          style={{ textAlign: "center" }}
        >
          <GameCard gameData={game} />
        </Grid>
      ))}
    </Grid>
  );
}
