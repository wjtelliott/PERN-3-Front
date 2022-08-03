import React, {useState} from "react";
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

export default function PlaceBetModal({gameData}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [radioValue, setRadioValue] = useState(gameData.game_home_team);

    const handleChange = (event) => {
        setRadioValue(event.target.value);
    };

    const [betAmount, setBetAmount] = useState();

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

                    <FormControl>
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
                        <Button variant="contained">Place Bet</Button>
                        <Button
                            variant="outlined"
                            onClick={() => setOpen(false)}
                        >
                            Go Back
                        </Button>
                        <TextField
                            id="outlined-number"
                            label="Enter your bet"
                            type="number"
                            InputLabelProps={{
                                step: 10,
                                shrink: true,
                            }}
                        />
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
