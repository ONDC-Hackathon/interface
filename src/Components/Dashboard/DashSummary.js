import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';


function DashSummary() {
    return (
        <Grid container spacing={3}>
            <Grid xs={4}>
                <Paper sx={{ borderRadius: '1rem' }}>
                    <Box padding={'2rem'} sx={{ borderRadius: '1rem' }}>
                        <Typography variant='subtitle1' component='div' align='left' sx={{ marginBottom: '1rem' }}> Total Orders </Typography>
                        <Typography variant='h4' className='flex flex-row justify-between items-end' component='div' align='left'> 36,778  <Typography sx={{ fontSize: '14px', color: 'green' }} variant='p' component='span'>+5.21% <NorthEastIcon /></Typography></Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid xs={4}>
                <Paper sx={{ borderRadius: '1rem' }}>
                    <Box padding={'2rem'} sx={{ borderRadius: '1rem' }}>
                        <Typography variant='subtitle1' component='div' align='left' sx={{ marginBottom: '1rem' }}> Total Earnings </Typography>
                        <Typography variant='h4' className='flex flex-row justify-between items-end' component='div' align='left'> $ 96,778  <Typography sx={{ fontSize: '14px', color: 'red' }} variant='p' component='span'>-3.89% <SouthWestIcon /></Typography></Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid xs={4}>
                <Paper sx={{ borderRadius: '1rem' }}>
                    <Box padding={'2rem'} sx={{ borderRadius: '1rem' }}>
                        <Typography variant='subtitle1' component='div' align='left' sx={{ marginBottom: '1rem' }}> New Customers </Typography>
                        <Typography variant='h4' className='flex flex-row justify-between items-end' component='div' align='left'> 36,778  <Typography sx={{ fontSize: '14px', color: 'green' }} variant='p' component='span'>+11.1% <NorthEastIcon /></Typography></Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default DashSummary