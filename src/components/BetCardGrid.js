import React from "react";
import GameCard from "./GameCard";
import { Grid } from "@mui/material";
import "../App.css";
import { testData } from "./TestData";

// const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default function BetCardGrid() {
  let MLBOnly = testData.filter(
    (object) => object.sport_key === "baseball_mlb"
  );
  console.log(MLBOnly);
  return (
    <Grid container spacing={4} justify="center" className="bettingGridItem">
      <Grid item xs={12} sm={4} md={3} xl={3}>
        <GameCard />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={3}>
        <GameCard />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={3}>
        <GameCard />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={3}>
        <GameCard />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={3}>
        <GameCard />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={3}>
        <GameCard />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={3}>
        <GameCard />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={3}>
        <GameCard />
      </Grid>

      {/* let gridItems = testData.slice(0,12).map((item) => {
        return (
                <Grid item xs={12} sm={4} md={4} xl={3}>
        <GameCard />
      </Grid>
        )
      }) */}
    </Grid>
  );
}
