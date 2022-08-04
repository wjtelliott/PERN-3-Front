import "./App.css";
import React, {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./components/Home/Landing";
import ProfilePage from "./components/Profile/ProfilePage";
import MLBPage from "./components/LeaguePages/MLB";
import ConfirmProfilePage from "./components/Profile/ProfileConfirm";
import Navbar from "./components/Shared/Navbar";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        console.log(darkMode);
    };

    //change up the MUI theme
    const darkTheme = {
        palette: {
            mode: "dark",
            primary: {
                main: "#274c77",
            },
            secondary: {
                main: "#0dab44",
            },
            // background: {
            //     default: "#222222",
            // },
        },
        shape: {
            borderRadius: 15,
        },
        components: {
            // Name of the component
            MuiButtonBase: {
                defaultProps: {
                    // The props to change the default for.
                    disableRipple: true, // No more ripple, on the whole application 💣!
                    style: {
                        textTransform: "none",
                        // color: "white",
                        // borderRadius: 20,
                    },
                },
            },
            MuiTab: {
                defaultProps: {
                    style: {
                        color: "white",
                        textTransform: "none",
                    },
                },
            },
        },
    };
    const lightTheme = {
        palette: {
            mode: "light",
            primary: {
                main: "#274c77",
            },
            secondary: {
                main: "#0dab44",
            },
            // background: {
            //     default: "#222222",
            // },
        },
        shape: {
            borderRadius: 15,
        },
        components: {
            // Name of the component
            MuiButtonBase: {
                defaultProps: {
                    // The props to change the default for.
                    disableRipple: true, // No more ripple, on the whole application 💣!
                    style: {
                        textTransform: "none",
                        // color: "white",
                        // borderRadius: 20,
                    },
                },
            },
            MuiTab: {
                defaultProps: {
                    style: {
                        color: "black",
                        textTransform: "none",
                    },
                },
            },
        },
    };
    const appliedTheme = createTheme(darkMode ? darkTheme : lightTheme);

    return (
        <ThemeProvider theme={appliedTheme}>
            <CssBaseline />
            {/*
             * Do we want the react-router here or in the index.js?
             */}
            <Router>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route
                        path="/profile/confirm"
                        element={<ConfirmProfilePage />}
                    />
                    <Route path="/mlb" element={<MLBPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
