import React from "react";
import BetCardGrid from "../BetCardGrid";
import {CardMedia} from "@mui/material";

export default function WNBAPage() {
    document.title = "WNBA | YouBetcha";
    return (
        <>
            <CardMedia
                component="img"
                height="450"
                image="https://about.att.com/ecms/dam/snr/2020/March2020/StoryLevelBanner/02.29.2020_WNBA_opt-4_STORY_LEVEL_BANNER_1600x483_2.jpg"
                alt="WNBA Banner"
            />
            <BetCardGrid sport="basketball_wnba" games="upcoming" />
        </>
    );
}
