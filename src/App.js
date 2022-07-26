//import logo from "./logo.svg";
import "./App.css";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";

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
            hello world!
        </ThemeProvider>
    );
}

export default App;
