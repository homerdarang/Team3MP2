import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper) (({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(.5),
  textAlign: 'center',
  border: 'none',
  boxShadow: 'none',
  margin: 'none',
  color: theme.palette.text.secondary,
}));



export default function CareServices() {
  return (
    <div className="mt-2">
        {/* include navbar here */}
        <Typography variant="h5" className='txt-primary pb-2 pt-4 subtitle text-center'>
                Urgent care and Services
        </Typography>
        
        <Grid container spacing={.5} >
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Item>
                    <Typography variant="h5" className='text-left txt-primary mx-4 mt-1 mb-2'>
                        Illnesses and injuries treated
                    </Typography>
                    <Typography className='text-left txt-mute mx-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                        Porro commodi earum et eveniet, omnis, enim ab voluptates
                        alias fuga maiores atque voluptatem? Illo ipsa ex optio
                        quisquam, tenetur provident nesciunt.
                    </Typography>
                    <Typography className='mx-4 my-2 txt-mute'>
                        <hr />
                    </Typography>
                    <Typography className='text-left txt-mute mx-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Porro commodi earum et eveniet
                    </Typography>
                    <Typography className='txt-primary fs-md text-left mx-4 my-1'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                    </Typography>
                    <Typography className='text-left txt-mute fs-sm mx-4'>
                        *Porro commodi earum et eveniet, omnis, enim ab voluptates
                    </Typography>
                </Item>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <Item>
                    <Typography className='bg-color-warning pt-1 pb-2 border-semi-rounded'>
                        kjbsdfivubsfudv
                    </Typography>
                </Item>
            </Grid>
        </Grid>
        {/* include footer here */}
    </div>
  );
}