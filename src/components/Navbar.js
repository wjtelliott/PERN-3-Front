import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link } from 'react-router-dom';

// There is more than likely a better way to make this DRY
// The .map functions below will now make the links text === .text
// and the link will redirect to .linkTo
//todo the styling on this needs to be made dynamic. currently does textdecor none and color white
const pages = [
    {
        text: 'MLB',
        linkTo: 'mlb'
    },
    {
        text: 'Soccer',
        linkTo: 'soccer'
    },
    {
        text: 'Other Games',
        linkTo: 'other'
    }
];
const settings = [
    {
        text: 'Profile',
        linkTo: 'profile'
    },
    {
        text: 'Bets',
        linkTo: 'bets'
    },
    {
        text: 'Friends',
        linkTo: 'friends'
    },
    {
        text: 'Groups',
        linkTo: 'groups'
    }
];

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MonetizationOnIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              // fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            YouBetcha
          </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: "block", md: "none"},
                            }}
                        >
                            {pages.map(({text: page, linkTo}) => (
                                <Link
                                    key={page}
                                    to={`/${linkTo}`}
                                    //todo: dynamic styling????
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}
                                >
                                    <MenuItem
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: "flex", md: "none"}, mr: 1}} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: "flex", md: "none"},
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        YouBetcha
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        {pages.map(({text: page, linkTo}) => (
                            <Link
                                key={page}
                                to={`/${linkTo}`}
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: "white", display: "block"}}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    {isAuthenticated ? (
                        <Box sx={{flexGrow: 0}}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    // display: {xs: "flex"},
                                    // flexGrow: 1,
                                    // fontFamily: "monospace",
                                    fontWeight: 700,
                                    // letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                $755
                            </Typography>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{p: 0}}
                                >
                                    <Avatar alt="Ryan Rasmussen" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: "45px"}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map(({text: setting, linkTo}) => (
                                    <Link
                                        key={setting}
                                        to={`${linkTo}`}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white'
                                        }}
                                    >
                                        <MenuItem
                                            onClick={handleCloseUserMenu}
                                        >
                                            <Typography textAlign="center">
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                                <MenuItem
                                    key="logout"
                                    onClick={() =>
                                        logout({
                                            returnTo: window.location.origin,
                                        })
                                    }
                                >
                                    <Typography textAlign="center">
                                        Logout
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    ) : (
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                // display: {xs: "flex"},
                                // flexGrow: 1,
                                // fontFamily: "monospace",
                                fontWeight: 700,
                                // letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                            onClick={() => loginWithRedirect()}
                        >
                            Login
                        </Typography>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
