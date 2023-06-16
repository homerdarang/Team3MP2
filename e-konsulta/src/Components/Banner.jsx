import React from 'react'
import UrgentServices from './UrgentServices';
import BabyHealthMonitoring from './BabyHealthMonitoring';
import VaccineImmune from './VaccineImmune';
import { Box, Grid } from '@mui/material';
import BodyServices from '../main/BodyServices';
import VisionMission from './VisionMission';
import Footer from './Footer';
import Home from './pages/Home';


export default function Banner() {
  return (
    <div>
      <Home />
      <BodyServices />
      <Box className='container d-flex mt-4'>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <UrgentServices />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <BabyHealthMonitoring />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <VaccineImmune />
            </Grid>
          </Grid>
          
      </Box>
      <VisionMission />
      <Footer />
    </div>
  )
}
