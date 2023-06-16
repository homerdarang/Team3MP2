import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import MedicalServicesTwoToneIcon from '@mui/icons-material/MedicalServicesTwoTone';
import { useNavigate } from 'react-router-dom';

export default function BabyHealthMonitoring() {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate("/health-monitoring");
  }

  return (
    <div className='container d-flex text-center'>
      <Card onClick={handleClick} sx={{ maxWidth: 600 }} className='m-1 border-rounded'>
        <CardContent sx={{padding: 8}} className='card-primary txt-primary'>
          <MedicalServicesTwoToneIcon sx={{fontSize: 80}} className='mb-4'/>
          <Typography gutterBottom variant="h4" component="div" sx={{marginBottom: 5}}>
            Baby's Health Monitoring
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
