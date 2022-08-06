import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// import TeamSelectRadio from "./TeamSelectRadio";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import UserContext from "../context/UserContext";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function PlaceBetModal({gameData, userId}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [radioValue, setRadioValue] = useState(gameData.game_home_team);
    const [betAmount, setBetAmount] = useState();
    const navigate = useNavigate();
    const {userBalance, setUserBalance} = useContext(UserContext);

    // const [inputBet, setInputBet] = useState(0);

    const handleChange = (event) => {
        setRadioValue(event.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        //console.log("I was clicked!", betAmount);

        //     router.post("/new", async (req, res) => {
        // try {
        //     const {bet_team, bet_amount, user_id, game_id} = req.body;

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: userId,
                bet_amount: betAmount,
                bet_team: radioValue,
                game_id: gameData.game_id,
            }),
        };
        //console.log(requestOptions);
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_API_URL}/bets/new`,
            requestOptions
        );
        const data = await response.json();
        //console.log("POST BET", data);
        if (data?.amount) setUserBalance(data.amount.toFixed(2));
        navigate("/profile");
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Bet the moneyline
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* Inserted TeamSelectRadio here*/}
                    <form>
                        <FormControl>
                            {userBalance !== -1 && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Typography>
                                        Current Balance: ${userBalance}
                                    </Typography>
                                </Box>
                            )}
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                Select a team to bet on
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={radioValue}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value={gameData.game_home_team}
                                    control={<Radio />}
                                    label={`${gameData.game_home_team} (${gameData.game_home_moneyline})`}
                                />
                                <FormControlLabel
                                    value={gameData.game_away_team}
                                    control={<Radio />}
                                    label={`${gameData.game_away_team} (${gameData.game_away_moneyline})`}
                                />
                            </RadioGroup>
                        </FormControl>

                        <Stack spacing={2} direction="row">
                            <TextField
                                id="outlined-number"
                                label="Enter your bet"
                                type="number"
                                onChange={(e) => {
                                    setBetAmount(e.target.value);
                                }}
                                InputLabelProps={{
                                    step: 10,
                                    shrink: true,
                                }}
                            />
                            <Button
                                variant="contained"
                                onClick={handleFormSubmit}
                            >
                                Place Bet
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => setOpen(false)}
                            >
                                Go Back
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
