import {Box, Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import BetHistoryCard from "./BetHistoryCard";
import {useAuth0} from "@auth0/auth0-react";

const BetHistoryCardGallery = ({betType}) => {
    const [userBets, setUserBets] = useState([]);
    const [amountLoaded, setAmountLoaded] = useState(0);
    const [loadMoreVisible, setLoadMoreVisible] = useState(true);
    const [loadMoreToggle, setLoadMoreToggle] = useState(false);
    const {user, isLoading, isAuthenticated} = useAuth0();

    useEffect(() => {
        (async () => {
            if (isLoading || !isAuthenticated || userBets.length > 0) return;
            const amountToLoad = 10;
            const url =
                (process.env.REACT_APP_BACKEND_API_URL ??
                    `http://localhost:3001`) +
                `/bets/profile/${user.sub}/${amountLoaded}/${amountToLoad}/${betType}`;
            const response = await fetch(url);
            const resData = await response.json();
            setAmountLoaded(amountLoaded + resData.length);
            //if (resData.length < 10) setLoadMoreVisible(false);
            console.log(resData);
            setUserBets([...userBets, resData]);
        })();
    }, [isLoading]);

    useEffect(() => {
        (async () => {
            if (isLoading || !isAuthenticated) return;
            const amountToLoad = 10;
            const url =
                (process.env.REACT_APP_BACKEND_API_URL ??
                    `http://localhost:3001`) +
                `/bets/profile/${user.sub}/${amountLoaded}/${amountToLoad}/${betType}`;
            const response = await fetch(url);
            const resData = await response.json();
            setAmountLoaded(amountLoaded + resData.length);
            if (resData.length < 10) setLoadMoreVisible(false);
            setUserBets([...userBets, ...resData]);
        })();
    }, [loadMoreToggle]);

    const formattedUserBets = userBets.map((bet, index) => (
        <BetHistoryCard key={`betHistoryCard${index}`} gameData={bet} />
    ));

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {formattedUserBets}
            </Box>

            {loadMoreVisible && (
                <Button onClick={() => setLoadMoreToggle(!loadMoreToggle)}>
                    Load More
                </Button>
            )}
        </Box>
    );
};

export default BetHistoryCardGallery;
