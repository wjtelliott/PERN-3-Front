import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import {MlbTeamPics} from "../Shared/MlbTeamPicDict";
import {Typography} from "@mui/material";

const BetHistoryCard = ({gameData}) => {
    // Change this to actual colors later
    const cardColor = gameData.game_is_completed
        ? ["red", "secondary.dark"][+gameData.bet_success]
        : "gray";

    const getWinningTeamMoneyLine = () => {
        if (!gameData.game_is_completed) return;
        if (
            gameData.bet_success &&
            gameData.game_away_team === gameData.bet_team
        )
            return gameData.game_away_moneyline;
        return gameData.game_home_moneyline;
    };

    const getBetHistoryDollarAmount = () => {
        if (!gameData.game_is_completed) return;
        if (gameData.bet_success)
            return gameData.bet_amount * getWinningTeamMoneyLine();
        return gameData.bet_amount;
    };

    const teamBetStyle = {
        border: "3px dashed orange",
        borderRadius: "20px",
        padding: "5px",
    };

    return (
        <Card
            sx={{
                mx: 3,
                my: 2,
                minWidth: 400,
                height: "auto",
                backgroundColor: cardColor,
            }}
        >
            <CardContent>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(6, 1fr)"
                    gap={2}
                >
                    <Box sx={{justifySelf: "center"}} gridColumn="span 2">
                        {" "}
                        <img
                            src={MlbTeamPics[gameData.game_home_team]}
                            alt={gameData.game_home_team}
                            height={
                                gameData.bet_team === gameData.game_home_team
                                    ? "60px"
                                    : "50px"
                            }
                            style={
                                gameData.bet_team === gameData.game_home_team
                                    ? teamBetStyle
                                    : null
                            }
                        />
                        <br />
                        <Typography variant="h6">
                            {gameData.game_home_moneyline}
                        </Typography>
                    </Box>

                    <Box
                        sx={{alignSelf: "center", justifySelf: "center"}}
                        gridColumn="span 2"
                    >
                        VS
                    </Box>

                    <Box sx={{justifySelf: "center"}} gridColumn="span 2">
                        <img
                            src={MlbTeamPics[gameData.game_away_team]}
                            alt={gameData.game_away_team}
                            height={
                                gameData.bet_team === gameData.game_away_team
                                    ? "60px"
                                    : "50px"
                            }
                            style={
                                gameData.bet_team === gameData.game_away_team
                                    ? teamBetStyle
                                    : null
                            }
                        />
                        <br />
                        <Typography variant="h6">
                            {gameData.game_away_moneyline}
                        </Typography>
                    </Box>
                </Box>
                {gameData.game_is_completed && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            justifySelf: "center",
                            flexWrap: "nowrap",
                        }}
                    >
                        <p>
                            You {["lost", "won"][+gameData.bet_success]}:&nbsp;$
                            {getBetHistoryDollarAmount()?.toFixed(2) ?? "ERR"}.
                        </p>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default BetHistoryCard;
