import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Home from './Banner';

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
        <Typography variant="h5" className='txt-primary pb-2 pt-4 mini-title text-center'>
                Urgent care and Services
        </Typography>
        
        <Grid container spacing={2} >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Item>
                    <Typography className='bg-color-warning py-1 fs-lg fw-6 border-semi-rounded px-2'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        <Typography className='fs-sm px-3 fw-2'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Typography>
                    <Typography className='bg-color-warning px-3 py-1'>
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
                </Item>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className='mt-1'>
                    <Item>
                        <Typography className='bg-color-warning py-1 fs-md fw-6 border-semi-rounded px-2'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            <Typography className='fs-sm px-2 pt-1 fw-2'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                            <Typography className='fs-sm fw-2'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                        </Typography>
                        <Typography className='bg-color-warning px-2 py-1'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Porro commodi earum et eveniet, omnis, enim ab voluptates
                            alias fuga maiores atque voluptatem? enim ab voluptates
                            orro commodi earum et eveniet, omnis, enim ab voluptates
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Grid>
        {/* include footer here */}
        <Home />
    </div>
  );
}