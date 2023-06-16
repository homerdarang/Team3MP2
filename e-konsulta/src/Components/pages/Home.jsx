import React from 'react'
// import Navbar from './Navbar'
import { Box, Typography } from '@mui/material'
// import Routing from '../Routing'
// import Banner from '../Banner'

function Home() {
  return (
    <div>
      <Box className ='homesec backg txt-plain text-center'>
        {/* <Typography className='title-main'>
          Welcome To
        </Typography> */}
        <Typography className='mini-title'>
          E-Konsulta &#8478;
        </Typography>
          {/* <img src="./images/e-Kunsulta.png" alt="icon" /> */}
        <Typography className='fw-7 px-4' variant='h6' >
          Your Health, Your Convenience: Expert Care Just a Click Away!
        </Typography>
        
      </Box>
    </div>
    
  )
}

export default Home