import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Box, SvgIcon, Typography} from "@mui/material";
import {ReactComponent as LoadingSvg} from "../../assets/loading.svg";
import {Link, useNavigate} from "react-router-dom";

const ConfirmProfilePage = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();
    const navigate = useNavigate();
    const [tooLong, setTooLong] = useState(false);

    useEffect(() => {
        if (isLoading) return;

        // if a user comes to this page without being authenticated or having data, redirect to home page
        if (!user || !isAuthenticated) {
            window.location.href = "/";
            return;
        }

        const sendUserData = async () => {
            const url = `${process.env.REACT_APP_BACKEND_API_URL}/users/newuser`;
            const payload = {
                ...user,
                // If we want more user data sent to the back-end, we can add that here
            };

            await fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            // window.location.href = window.location.origin;
            navigate("/");
        };

        sendUserData();
    }, [isLoading]);

    useEffect(() => {
        setTimeout(() => setTooLong(!tooLong), 5000);
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
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h5"
                    align="center"
                    sx={{
                        margin: 3,
                        display: {xs: "none", md: "flex"},
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Please wait while we redirect you
                </Typography>
            </Box>

            <SvgIcon
                component={LoadingSvg}
                viewBox="17 17 64 64"
                color="black"
                sx={{width: "20vw", height: "auto", borderRadius: "50%"}}
            />

            {tooLong && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            margin: 3,
                            display: {xs: "none", md: "flex"},
                            fontWeight: 500,
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Click
                        <Link
                            to="/"
                            style={{textDecoration: "none", color: "green"}}
                        >
                            &nbsp;here&nbsp;
                        </Link>
                        if this takes more than 5 seconds
                    </Typography>
                </Box>
            )}
        </div>
    );
};

export default ConfirmProfilePage;
