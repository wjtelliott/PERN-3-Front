import React, {useEffect, useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BetTab from "./ProfileBetTabs";
import {useAuth0} from "@auth0/auth0-react";
import BetHistoryCardGallery from "./BetHistoryCardGallery";

export default function ProfileBets() {
    const [value, setValue] = useState(0);

    const [userBets, setUserBets] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    const {user, isAuthenticated, isLoading} = useAuth0();

    useEffect(() => {
        setIsMobile(window.innerWidth < 800);
    }, [window.innerWidth]);

    useEffect(() => {
        (async () => {
            if (isLoading || !isAuthenticated) return;
            const url =
                (process.env.REACT_APP_GET_USER_BETS_URL ??
                    `http://localhost:3001/bets/profile/`) + user.sub;
            const response = await fetch(url);
            const resData = await response.json();
            setUserBets(resData);
        })();
    }, [isLoading]);

    if (!isAuthenticated) return null;

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `bet-tab-${index}`,
            "aria-controls": `bet-tabpanel-${index}`,
        };
    }

    // This could be refactored to be more DRY
    const currentUserGames = userBets.filter((game) => !game.game_is_completed);

    const previousUserGames = userBets.filter((game) => game.game_is_completed);

    const previousUserGamesLost = previousUserGames.filter(
        (game) => !game.bet_success
    );

    const previousUserGamesWon = previousUserGames.filter(
        (game) => game.bet_success
    );

    return (
        <Box sx={{width: "100%"}}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    justifyContent: "center",
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="profile bet tabs"
                    sx={{
                        px: 2,
                        d: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Tab label="Current Bets" {...a11yProps(0)} />
                    <Tab
                        sx={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "inline-flex",
                            },
                        }}
                        label="Bet History"
                        {...a11yProps(1)}
                    />
                    <Tab
                        label={(!isMobile ? "Previous " : "") + "Bets Won"}
                        {...a11yProps(2)}
                    />
                    <Tab
                        label={(!isMobile ? "Previous " : "") + "Bets Lost"}
                        {...a11yProps(3)}
                    />
                </Tabs>
            </Box>
            <BetTab value={value} index={0}>
                <BetHistoryCardGallery bets={currentUserGames} />
            </BetTab>
            <BetTab value={value} index={1}>
                <BetHistoryCardGallery bets={previousUserGames} />
            </BetTab>
            <BetTab value={value} index={2}>
                <BetHistoryCardGallery bets={previousUserGamesWon} />
            </BetTab>
            <BetTab value={value} index={3}>
                <BetHistoryCardGallery bets={previousUserGamesLost} />
            </BetTab>
        </Box>
    );
}
