import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Paper, Typography } from '@mui/material'

function BestSellers() {
  const columns = [
    { field: 'product', headerName: 'Product', width: 260 },
    { field: 'amount', headerName: 'Amount', width: 90 },
    { field: 'sales', headerName: 'Sales', type: 'number', width: 90 },
    { field: 'stock', headerName: 'Stock', width: 130 },
    { field: 'ratings', headerName: 'Ratings', width: 130 },
  ]
  const rows = [
    {
      id: '1',
      product: 'Bentwood Chair',
      amount: '$2779',
      sales: '899',
      stock: '89K',
      ratings: '5.0',
    },
    {
      id: '2',
      product: 'Bentwood Chair',
      amount: '$2779',
      sales: '899',
      stock: '89K',
      ratings: '5.0',
    },
    {
      id: '3',
      product: 'Bentwood Chair',
      amount: '$2779',
      sales: '899',
      stock: '89K',
      ratings: '5.0',
    },
    {
      id: '4',
      product: 'Bentwood Chair',
      amount: '$2779',
      sales: '899',
      stock: '89K',
      ratings: '5.0',
    },
  ]
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
        Recent Orders{' '}
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Paper>
  )
}

export default BestSellers
