import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Home/Landing";
import ProfilePage from "./components/Profile/ProfilePage";
import MLBPage from "./components/LeaguePages/MLB";
import ConfirmProfilePage from "./components/Profile/ProfileConfirm";
import Navbar from "./components/Shared/Navbar";
import { ApiUrls } from "./context/APIContext";

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
    });

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ApiUrls.Provider
				value={{
					getUserBalanceUrl: (userId) => {
						return (
							(process.env.REACT_APP_USER_BALANCE_URL ??
								"http://localhost:3001/user/balance/") + userId
						);
					},
					getUserBetsUrl: (userId) => {
						return (
							(process.env.REACT_APP_USER_BETS_URL ??
								"http://localhost:3001/user/profile/") + userId
						);
					},
				}}
			>
				<Router>
					<Navbar />
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
			</ApiUrls.Provider>
		</ThemeProvider>
	);
}

export default App;
