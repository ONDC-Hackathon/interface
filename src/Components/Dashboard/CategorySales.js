import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'
import piebg from '../../Images/Dashboard/piebg.png'

function CategorySales(props) {
  const { data } = props
  return (
    <Paper
      elevation={0}
      sx={{ padding: '1rem', borderRadius: '10px' }}
      width={'100%'}
    >
      <Typography
        variant="h6"
        align="left"
        sx={{ marginBottom: '1rem', fontWeight: '900' }}
      >
        {' '}
        Category wise sales{' '}
      </Typography>
      <PieChart
        series={[
          {
            data: data,
            innerRadius: 80,
            outerRadius: 100,
            cornerRadius: 5,
            cx: 150,
            cy: 150,
          },
        ]}
        width={450}
        height={300}
      />
    </Paper>
  )
}

export default CategorySales
