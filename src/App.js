//import logo from "./logo.svg";
import "./App.css";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import Navbar from "./components/Navbar";
import AuthenticationButton from "./components/AuthenticationButton";
import { Auth0Provider } from "@auth0/auth0-react";
import GameCard from "./components/GameCard"

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
        },
        // typography: {
        //     fontSize: 14,
        //     fontFamily: "nudista-web, sans-serif",
        // },
        shape: {
            borderRadius: 10,
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
            <Navbar />
            <AuthenticationButton />
                hello world!
            <GameCard sx={{ display: 'inline-block' }} />
        </ThemeProvider>
    );

}

export default App;
