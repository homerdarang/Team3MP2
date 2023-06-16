import React from 'react'
import UrgentServices from '../UrgentServices';
import BabyHealthMonitoring from '../BabyHealthMonitoring';
import VaccineImmune from '../VaccineImmune';
import { Box, Grid } from '@mui/material';
import BodyServices from '../../main/BodyServices';

export default function Home() {
  return (
    <div>
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
    </div>
  )
}
