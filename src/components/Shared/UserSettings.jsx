import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from 'react-router-dom';

const UserSettings = ({
    loggedIn, loginWithRedirect, logout,
    settings, userPicture, userId,
    handleCloseUserMenu, handleOpenUserMenu, anchorElUser
}) => {



    const [ userBalance, setUserBalance ] = useState('Loading Balance...');

    useEffect(()=>{
        const getData = async () => {
            const url = `http://localhost:3001/user/balance/${userId}`
            const response = await fetch(url);
            const resData = await response.json();
            return resData;
        }

        getData()
            .then(balance => {
                setUserBalance('$' + (balance?.amount ?? 'undef'));
            })
            .catch(err => {
                setUserBalance('ERR')
            });
    },[]);

    return loggedIn ? (
        <Box sx={{flexGrow: 0}}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
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
                {`${userBalance}`}
            </Typography>
            <Tooltip title="Open settings">
                <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{p: 0}}
                >
                    <Avatar
                        src={userPicture || 'http://http.cat/418/'}
                        alt="Ryan Rasmussen"
                    />
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
    )
};

export default UserSettings;