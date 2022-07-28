import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const GameCard = () => {
  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardContent>
        <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2}>
          <Box gridColumn="span 2">
            team svg
          </Box>
          <Box gridColumn="span 2">
            start Time
          </Box>
          <Box gridColumn="span 2">
            team svg
          </Box>
          <Box gridColumn="span 2">
            team short Name
            team odds
          </Box>
          <Box gridColumn="span 2">
            <CardActions sx={{ display: 'inline-block' }}>
              <Button size="small">Bet</Button>
            </CardActions>
          </Box>
          <Box gridColumn="span 2">
            team short Name
            team odds
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default GameCard;