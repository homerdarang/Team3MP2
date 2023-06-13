import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import { useNavigate } from 'react-router-dom';



export default function Cards() {

  // useNavigate from react-router-dom
  const navigate = useNavigate();
  
  // event handler onclick
  const handleClick = () =>{
    // console.log('click here');
    navigate('/urgent-service');
  }

  return (
    <div className='container text-center'>
      <Card onClick={handleClick} sx={{ maxWidth: 600 }} className='m-1 border-rounded'>
        <CardContent sx={{padding: 8}} className='card-primary txt-primary'>
          <HealingTwoToneIcon sx={{fontSize: 80}} className='mb-4'/>
          <Typography gutterBottom variant="h4" component="div" sx={{marginBottom: 5}}>
            Urgent care & Services
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
