import React, {useState, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";

import GameCard from "./GameCard";
import {Grid} from "@mui/material";
import "../App.css";
import {mlbData} from "./Data-Handling/TestData";
// import { mlbData } from "./Data-Handling/TestDataMLBOnly";

// soccer_usa_mls   basketball_wnba
export default function BetCardGrid({sport, games}) {
    const [gameData, setGameData] = useState([]);
    const [userId, setUserId] = useState("");
    const {user, isAuthenticated, isLoading} = useAuth0();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            setUserId(user.sub);
            // console.log(userId);
        }
    }, [isLoading]);

    let api_url;
    if (games === "upcoming") {
        api_url = `${process.env.REACT_APP_BACKEND_API_URL}/games/upcoming`;
    } else if (games === "scores") {
        api_url = `${process.env.REACT_APP_SPORTS_API}/${sport}/${games}/?apiKey=${process.env.REACT_APP_SPORTS_API_KEY}`;
    }

    useEffect(() => {
        // document.title = `MLB | YouBetcha`;
        const fetchData = async () => {
            const response = await fetch(api_url);
            const resData = await response.json();
            // console.log("resData", resData);
            if (resData) {
                setGameData(resData);
            } else {
                setGameData("Not found");
            }
        };
        fetchData();
    }, []);

    return (
        <Grid
            container
            spacing={4}
            justify="center"
            justifyContent="space-around"
            className="bettingGridItem"
            sx={{marginTop: "-100px"}}
        >
            {/* {gameData.slice(0, 8).map((game, i) => ( */}
            {gameData.map((game, i) => (
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
                    style={{textAlign: "center"}}
                    key={game.game_id}
                >
                    <GameCard
                        gameData={game}
                        userId={userId}
                        sport={sport}
                        key={game.game_id}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
