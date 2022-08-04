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
import {Typography} from "@mui/material";
// import { testData } from "./Data-Handling/TestData";

const GameCard = ({gameData, userId}) => {
    // const [gameData, setGameData] = useState(props.gameData);
    // // console.log(gameData.game_bookmakers[0].markets[0].outcomes);
    // const [homeOdds, setHomeOdds] = useState(
    //     gameData.game_bookmakers[0].markets[0].outcomes
    // );
    // // console.log(MlbPics);
    // console.log(homeOdds);
    // console.log("Game", gameData);
    return (
        <Card
            sx={{maxWidth: 400, height: 300, backgroundColor: "secondary.dark"}}
        >
            <CardContent>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(6, 1fr)"
                    gap={2}
                    // sx={{backgroundColor: "success.main"}}
                >
                    <Box gridColumn="span 2">
                        {" "}
                        <img
                            src={MlbTeamPics[gameData.game_home_team]}
                            alt={gameData.game_home_team}
                            height="50px"
                        />
                        <br />
                        {gameData.game_home_team}
                        <Typography variant="h6">
                            {gameData.game_home_moneyline}
                        </Typography>
                    </Box>

                    <Box gridColumn="span 2">VS</Box>
                    <Box gridColumn="span 2">
                        <img
                            src={MlbTeamPics[gameData.game_away_team]}
                            alt={gameData.game_away_team}
                            height="50px"
                        />
                        <br />
                        {gameData.game_away_team}
                        <Typography variant="h6">
                            {gameData.game_away_moneyline}
                        </Typography>
                    </Box>

                    <Box gridColumn="span 2"></Box>

                    <Box gridColumn="span 2">
                        <CardActions sx={{display: "inline-block"}}>
                            <PlaceBetModal
                                gameData={gameData}
                                userId={userId}
                                key={gameData.game_id}
                            />
                        </CardActions>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default GameCard;
