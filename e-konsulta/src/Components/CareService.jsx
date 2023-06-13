import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <div className="container mt-2">
        {/* include navbar here */}
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                    <Item>
                        king kong
                    </Item>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Item>
                        is here
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </div>
  );
}