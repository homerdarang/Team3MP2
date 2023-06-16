import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Typography } from '@mui/material';


export default function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  const handleFNameValue = (evt) => {
    setFname(evt.target.value);
  }

  const handleLNameValue = (evt) => {
    setLname(evt.target.value);
  }

  const handleEmailValue = (evt) => {
    setEmail(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (fname.trim() === '' || lname.trim() === '' || email.trim() === '') {
      setErrorMsg("Inputs field cannot be empty!");
    } else if (!email.includes("@gmail.com")) {
      setErrorMsg("Please provide a gmail address only.")
    } else {
      setErrorMsg("Message sent!");
    }
    

    // if(evt.target.fname.value === '' || evt.target.lname.value === ''){
    //   return alert("not possible.")
    // } else if (!email.includes("@gmail")) {
    //   return alert("pls include @gmail.com")
    // } else {
    //   return alert('')
    // }
  }

 

  

  return (
    <Container className='container d-flex'>
      <Box onSubmit={(evt) => handleSubmit(evt)}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' },
        }}
        // noValidate
        // autoComplete="off"
        // className='m-auto'

      >
        <Typography variant='h4' className='txt-primary d-block text-center mt-4 mb-2 fw-5'>
          Send us a Message!
        </Typography>

        <Grid container spacing={1} className='container d-flex'>
          <div className='d-flex.flex-column mt-1 text-center'>
            <Grid item xl={4} lg={4} md={4} sm={5} xs={5} className='container mt-2'>
              <TextField
                id="filled-textarea"
                label="First Name"
                placeholder="Juan"
                multiline
                name='fname'
                value={fname}
                onChange={handleFNameValue}
                sx={{
                  background: '#f6f6f6',
                  opacity: '.6',
                }}
                // variant="filled"
              />
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={5} xs={5} className='container mt-1'>
              <TextField
                id="filled-textarea"
                label="Last Name"
                placeholder="Dela Crux"
                multiline
                name='lname'
                value={lname}
                onChange={handleLNameValue}
                sx={{
                  background: '#f6f6f6',
                  opacity: '.6',
                }}
                // variant="filled"
                
              />
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={5} xs={5} className='container mt-1'>
              <TextField
                id="filled-textarea"
                label="Email"
                placeholder="youremail@email.com"
                multiline
                name='email'
                value={email}
                onChange={handleEmailValue}
                sx={{
                  background: '#f6f6f6',
                  opacity: '.6',
                }}
                // variant="filled"
                
              />
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={5} xs={5} className='container mt-1'>
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
            </Grid>

            {errorMsg && <div className='error'>{errorMsg}</div>}
            <Button type='submit' className='btn btn-primary d-block m-auto border-rounded txt-plain fw-5 fs-md mt-3'>Send Message</Button>
          </div>
        </Grid>
      </Box>
    </Container>
    
  );
}

