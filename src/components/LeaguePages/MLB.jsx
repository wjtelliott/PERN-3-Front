import React from "react";
import BetCardGrid from "../BetCardGrid";
import {CardMedia} from "@mui/material";

const MLBPage = () => {
    document.title = "MLB | YouBetcha";
    return (
        <>
            <CardMedia
                component="img"
                height="450"
                image="https://a.espncdn.com/photo/2022/0603/r1020894_1296x518_5-2.jpg"
                alt="MLB Banner"
            />
            {/* <img
                src="https://a.espncdn.com/photo/2022/0603/r1020894_1296x518_5-2.jpg"
                className="HeroImg"
                alt="MLB Player"
                width="100%"
            /> */}
            <BetCardGrid sport="baseball_mlb" games="upcoming" />
        </>
    );
};

export default MLBPage;
