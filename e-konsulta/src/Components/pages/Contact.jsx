import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

export default function MultilineTextFields() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setFname(evt.target.fname.value)
    setLname(evt.target.lname.value)

    if (evt.target.fname.value === '') {
      return alert("cannot be empty.");
    } else {
      return alert("good!");
    }
    
  }
  

  return (
    <Box onSubmit={(evt) => handleSubmit(evt)}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant='h4' className='txt-primary text-center mt-4 mb-2 fw-5'>
        Send us a Message!
      </Typography>
      <div className='container d-flex.flex-column mt-1 text-center'>
        <TextField
          id="filled-textarea"
          label="First Name"
          placeholder="Juan"
          multiline
          name='fname'
          sx={{
            background: '#f6f6f6',
            opacity: '.6',
          }}
          // variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Last Name"
          placeholder="Dela Crux"
          multiline
          name='lname'
          sx={{
            background: '#f6f6f6',
            opacity: '.6',
          }}
          // variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="I would like to send a message."
          sx={{
            background: '#f6f6f6',
            opacity: '.6',
          }}
          // variant="filled"
        />
        <Button type='submit' className='btn btn-primary d-block m-auto border-rounded txt-plain fw-5 fs-md mt-3'>Send Message</Button>
      </div>
      
    </Box>
  );
}