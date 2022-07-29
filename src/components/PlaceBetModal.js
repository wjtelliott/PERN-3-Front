import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import TeamSelectRadio from "./TeamSelectRadio";
import { useState } from "react";

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

export default function PlaceBetModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [betAmount, setBetAmount] = useState();

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <TeamSelectRadio />

          <Stack spacing={2} direction="row">
            <Button variant="contained">Place Bet</Button>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Go Back
            </Button>
            <TextField
              id="outlined-number"
              label="Enter your bet"
              type="number"
              step="10"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
