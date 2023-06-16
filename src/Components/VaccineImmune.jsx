import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import VaccinesTwoToneIcon from '@mui/icons-material/VaccinesTwoTone';
import { useNavigate } from 'react-router-dom';

export default function VaccineImmune() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/vaccine");
  }

  return (
    <div className='container text-center'>
      <Card onClick={handleClick} sx={{ maxWidth: 600 }} className='m-1 border-rounded'>
        <CardContent sx={{padding: 8}} className='card-primary txt-primary'>
          <VaccinesTwoToneIcon sx={{fontSize: 80}} className='mb-4'/>
          <Typography gutterBottom variant="h4" component="div" sx={{marginBottom: 5}}>
            Vaccination & Immunization
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
