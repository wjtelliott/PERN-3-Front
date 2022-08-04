import React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const NavBarPage = ({pages, isMedia, handleCloseNavMenu}) => {
    return pages.map(({text: page, linkTo}) => (
        <Link
            key={page}
            to={`/${linkTo}`}
            style={{
                textDecoration: "none",
                color: "inherit",
            }}
        >
            {isMedia ? ( // is this being shown on a media device? phone etc?
                // If it is, we need to use Menu item here
                <MenuItem>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ) : (
                //Otherwise basic button will be fine
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: "white", display: "block"}}
                >
                    {page}
                </Button>
            )}
        </Link>
    ));
};

export default NavBarPage;
