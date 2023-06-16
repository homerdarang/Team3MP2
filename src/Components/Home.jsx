import React from 'react'
import Navbar from './Navbar'
import { Box, Typography } from '@mui/material'

function Home() {
  return (
    <Box className ='homesec backg'>
        <Navbar />
      <Typography variant='h4' align='center' style={{color: '#272932'}} paddingBottom='20px'>
        Welcome To
        </Typography>  

        <img src="e-Kunsulta.png" alt="icon" />
        <Typography variant='h6' align='center' paddingTop='20px'>
        Your Health, Your Convenience: Expert Care Just a Click Away!
        </Typography>
        
      
    </Box>
  )
}

export default Home