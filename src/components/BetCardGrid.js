import React from "react";
import GameCard from "./GameCard";
import { Grid } from "@mui/material";
import "../App.css";
import { mlbData } from "./Data-Handling/TestData";
export default function BetCardGrid() {
  return (
    <Grid container spacing={4} justify="center" className="bettingGridItem">
      {mlbData.slice(0, 9).map((game) => (
        <Grid item xs={12} sm={4} md={3} xl={3}>
          <GameCard gameData={game} />
        </Grid>
      ))}
    </Grid>
  );
}
