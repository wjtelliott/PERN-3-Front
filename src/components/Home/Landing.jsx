import React, {useEffect} from "react";
import {Typography} from "@mui/material";
import {Box} from "@mui/system";
import BetCardGrid from "../BetCardGrid";

const LandingPage = () => {
    document.title = `Home | YouBetcha`;

    // If we want to use AOS, we will have to have this line in all pages that use it
    useEffect(() => {
        eval(`AOS.init()`);
    }, []);

    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        margin: 3,
                        display: {xs: "none", md: "flex"},
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    YouBetcha!
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    my: 3,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        width: "90%",
                    }}
                    data-aos="fade-up"
                >
                    <BetCardGrid sport="baseball_mlb" games="upcoming" />
                </Box>
            </Box>
        </div>
    );
};

export default LandingPage;
