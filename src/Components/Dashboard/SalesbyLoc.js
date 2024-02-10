import React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { Box, Paper, Typography } from '@mui/material'

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          sx={{
            backgroundColor: '#f6f6f6',
            height: '10px',
            borderRadius: '5px',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#9abdef',
              borderRadius: '5px',
            },
          }}
          variant="determinate"
          {...props}
        />
      </Box>
    </Box>
  )
}

function SalesbyLoc(props) {
  const { orders } = props
  return (
    <Paper elevation={0} sx={{ padding: '1rem', borderRadius: '10px' }}>
      <Typography
        variant="h6"
        align="left"
        sx={{ marginBottom: '1rem', fontWeight: '900' }}
      >
        {' '}
        Sales by Location
      </Typography>
      {orders.map((order, index) => (
        <Box sx={{ marginBottom: '1rem' }}>
          <div className="flex flex-row justify-between">
            <Typography
              variant="subtitle1"
              align="left"
              key={index}
              gutterBottom
            >
              {' '}
              {order.location}{' '}
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              key={index}
              gutterBottom
            >
              {' '}
              {order.progress + '%'}{' '}
            </Typography>
          </div>
          <LinearProgressWithLabel value={order.progress} />
        </Box>
      ))}
    </Paper>
  )
}

export default SalesbyLoc
