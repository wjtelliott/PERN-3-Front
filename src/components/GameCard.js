import * as React from "react";
import {useState, useEffect} from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PlaceBetModal from "./PlaceBetModal";
import "../App.css";
import {MlbTeamPics} from "./Shared/MlbTeamPicDict";
// import { testData } from "./Data-Handling/TestData";

const GameCard = (props) => {
    const [gameData, setGameData] = useState(props.gameData);
    // console.log(gameData.bookmakers[0].markets[0].outcomes);
    const [homeOdds, setHomeOdds] = useState(
        gameData.bookmakers[0].markets[0].outcomes
    );
    // console.log(MlbPics);
    console.log(homeOdds);
    return (
        <Card
            sx={{maxWidth: 400, height: 300, backgroundColor: "success.light"}}
        >
            <CardContent>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(6, 1fr)"
                    gap={2}
                    // sx={{backgroundColor: "success.main"}}
                >
                    <Box gridColumn="span 2">{gameData.home_team}</Box>
                    <img
                        src={MlbTeamPics[gameData.home_team]}
                        alt={gameData.home_team}
                        height="50px"
                    />
                    <Box gridColumn="span 2">VS</Box>
                    <Box gridColumn="span 2">{gameData.away_team}</Box>
                    <img
                        src={MlbTeamPics[gameData.away_team]}
                        alt={gameData.away_team}
                        height="50px"
                    />
                    {/* <Box gridColumn="span 2">{"home logo"}</Box>
          <Box gridColumn="span 2">{"away logo"}</Box> */}
                    {/* <Box gridColumn="span 2">team short Name team odds</Box> */}
                    <Box gridColumn="span 2"></Box>

                    <Box gridColumn="span 2">
                        <CardActions sx={{display: "inline-block"}}>
                            <PlaceBetModal />
                        </CardActions>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default GameCard;
