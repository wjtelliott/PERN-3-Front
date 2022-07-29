import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PlaceBetModal from "./PlaceBetModal";
import "../App.css";

const GameCard = (props) => {
  const [teamData, setTeamData] = useState({
    home_team: "",
    away_team: "",
    home_team_logo: "",
    away_team_logo: "",
    commence_time: "",
  });
  return (
    <Card sx={{ maxWidth: 375 }} className="gameCard">
      <CardContent>
        <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2}>
          <Box gridColumn="span 2">team svg</Box>
          <Box gridColumn="span 2">start Time</Box>
          <Box gridColumn="span 2">team svg</Box>
          <Box gridColumn="span 2">team short Name team odds</Box>
          <Box gridColumn="span 2">
            <CardActions sx={{ display: "inline-block" }}>
              <PlaceBetModal />
            </CardActions>
          </Box>
          <Box gridColumn="span 2">team short Name team odds</Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GameCard;
