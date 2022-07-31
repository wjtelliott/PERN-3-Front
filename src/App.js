import "./App.css";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./components/Home/Landing";
import ProfilePage from "./components/Profile/ProfilePage";
import MLBPage from "./components/LeaguePages/MLB";
import ConfirmProfilePage from "./components/Profile/ProfileConfirm";
import Navbar from "./components/Shared/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
    //change up the MUI theme
    const theme = createTheme({
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
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*
             * Do we want the react-router here or in the index.js?
             */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/profile" element={<Profile />} />
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
