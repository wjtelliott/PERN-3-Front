import {Box} from "@mui/material";
import React from "react";
import BetHistoryCard from "./BetHistoryCard";

const BetHistoryCardGallery = ({bets}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
            }}
        >
            {bets.map((bet, index) => (
                <BetHistoryCard key={`betHistoryCard${index}`} gameData={bet} />
            ))}
        </Box>
    );
};

export default BetHistoryCardGallery;
