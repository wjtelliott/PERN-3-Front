//import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import AuthenticationButton from "./components/AuthenticationButton";
import GameCard from "./components/GameCard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/Home/Landing";
import ProfilePage from "./components/Profile/ProfilePage";

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
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                </Routes>
            </Router>
            
            
            {/*
            <AuthenticationButton />
            hello world!
            <GameCard sx={{display: "inline-block"}} /> */}
        </ThemeProvider>
    );
}

export default App;
