import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import user from '../Images/user.png';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import DashSummary from '../Components/Dashboard/DashSummary';
import RecentOrders from '../Components/Dashboard/RecentOrders';
import CategorySales from '../Components/Dashboard/CategorySales';
import BestSellers from '../Components/Dashboard/BestSellers';
import SalesbyLoc from '../Components/Dashboard/SalesbyLoc';


function Dashboard() {
  const [date, setDate] = useState(dayjs('2022-04-17'));
  const orderLoc = [
    { location: 'Mumbai', progress: 48 },
    { location: 'Gujrat', progress: 74 },
    { location: 'West Bengal', progress: 31 },
    { location: 'Delhi', progress: 60 },
    { location: 'Kolkata', progress: 66 },
  ]
  const categorySales = [
    { id: 0, value: 45, label: 'Fashion' },
    { id: 1, value: 35, label: 'Grocery' },
    { id: 2, value: 20, label: 'Furniture' },
  ];
  return (
    <Box padding={'1rem'} width={'100%'}>
      <div className='w-100 flex flex-row justify-between'>
        <div className='flex flex-row'>
          <div style={{ borderRadius: '50%', marginRight: '10px' }}> <img src={user} alt="" /> </div>
          <div>
            <Typography variant='h6' align='left'> Hello, Anna </Typography>
            <Typography variant='subtitle1' sx={{ color: '#777777' }} align='left' gutterBottom> Here's what happening to your business today </Typography>
          </div>
        </div>
        <div className='flex flex-row'>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker value={date} onChange={(newValue) => setDate(newValue)} />
            </LocalizationProvider>
          </div>
          <div>
            <Button sx={{
              backgroundColor: 'rgba(63, 129, 224, 0.5) !important',
              borderRadius: '5px',
              color: 'rgba(23, 70, 162, 1) !important'
            }} variant='contained'>+ Add Product</Button></div>
        </div>
      </div>
      <DashSummary />
      <Grid sx={{ marginTop: '1rem' }} container spacing={2}>
        <Grid xs={8}><RecentOrders /></Grid>
        <Grid xs={4}> <SalesbyLoc orders={orderLoc} /> </Grid>
      </Grid>
      <Grid sx={{ marginTop: '1rem' }} container spacing={2}>
        <Grid xs={5}><CategorySales data={categorySales} /></Grid>
        <Grid xs={7}><BestSellers /></Grid>
      </Grid>

    </Box>
  )
}

export default Dashboard
