import React from 'react';
import Navbar from '../Navbar';
import GameCard from '../GameCard';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Typography
                    variant="h2"
                    align='center'
                    sx={{
                        margin: 3,
                        display: {xs: "none", md: "flex"},
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    YouBetcha!
                </Typography>
            </Box>

            <Link to='/profile'>Test view profile page link</Link>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >


                {/* 
                
                    Not sure what we want to prioritize on the home page.
                    
                */}

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        width: 1/2
                    }}
                >
                    Games to bet on
                    <GameCard sx={{margin: 3, display: "inline-block"}} />
                    <GameCard sx={{margin: 3, display: "inline-block"}} />
                    <GameCard sx={{margin: 3, display: "inline-block"}} />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        width: 1/2
                    }}
                >
                    Leaderboards?
                    <GameCard sx={{margin: 3, display: "inline-block"}} />
                    <GameCard sx={{margin: 3, display: "inline-block"}} />
                    <GameCard sx={{margin: 3, display: "inline-block"}} />
                </Box>
            </Box>
            
            
        </div>
        
    );
};

export default LandingPage;