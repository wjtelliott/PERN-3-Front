import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PlaceBetModal from "./PlaceBetModal";
import "../App.css";
// import { testData } from "./Data-Handling/TestData";

const GameCard = (props) => {
  const [gameData, setGameData] = useState(props.gameData);
  const [teamOdds, setHomeOdds] = useState(
    gameData.bookmakers[0].markets[0].outcomes
  );
  
  return (
    <Card sx={{ maxWidth: 400, height: 300 }}>
      <CardContent>
        <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2}>
          <Box gridColumn="span 2">{gameData.home_team}</Box>
          <Box gridColumn="span 2">VS</Box>
          <Box gridColumn="span 2">{gameData.away_team}</Box>
          {/* <Box gridColumn="span 2">{"home logo"}</Box>
          <Box gridColumn="span 2">{"away logo"}</Box> */}
          {/* <Box gridColumn="span 2">team short Name team odds</Box> */}
          <Box gridColumn="span 2">{teamOdds[1].price}</Box>

          <Box gridColumn="span 2">
            <CardActions sx={{ display: "inline-block" }}>
              <PlaceBetModal />
            </CardActions>
          </Box>
          <Box gridColumn="span 2">{teamOdds[0].price}</Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GameCard;
