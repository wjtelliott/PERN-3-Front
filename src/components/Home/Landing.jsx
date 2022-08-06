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
                <img
                    src="https://miro.medium.com/max/1400/0*X-QprUmCHQzN1few.jpg"
                    style={{width: "75%", height: "auto"}}
                ></img>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h1"
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
                    data-aos-delay="300"
                >
                    <BetCardGrid sport="baseball_mlb" games="upcoming" />
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    my: 3,
                }}
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div
                    style={{
                        margin: "auto",
                        position: "relative",
                        width: "75%",
                        height: 0,
                        paddingTop: "56.2500%",
                        paddingBottom: "48px",
                        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                        marginTop: "1.6em",
                        marginBottom: "0.9em",
                        overflow: "hidden",
                        borderRadius: "8px",
                        willChange: "transform",
                    }}
                >
                    <iframe
                        loading="lazy"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            border: "none",
                            padding: 0,
                            margin: "auto",
                        }}
                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFIhRsMzY8&#x2F;view?embed"
                        allowfullscreen="allowfullscreen"
                        allow="fullscreen"
                    ></iframe>
                </div>
            </Box>
        </div>
    );
};

export default LandingPage;
