import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Paper, Typography } from '@mui/material';

function RecentOrders() {
    const columns = [
        { field: 'id', headerName: 'Order id', width: 130 },
        { field: 'product', headerName: 'Product', width: 260 },
        { field: 'amount', headerName: 'Amount', width: 130 },
        { field: 'quantity', headerName: 'Quantity', type: 'number', width: 130 },
        {
            field: 'status', headerName: 'Status', type: 'number', width: 130, renderCell: (params) => {
                if (params.value === 'Delivered') {
                    return (<Typography variant='p' sx={{ color: 'green' }}>Delivered</Typography>)
                } else if (params.value === 'Pending') {
                    return (<Typography variant='p' sx={{ color: '#3F81E0' }}>Pending</Typography>)
                } else {
                    return (<Typography variant='p' sx={{ color: 'red' }}>Cancelled</Typography>)
                }
            }
        },
    ];
    const rows = [
        { id: '#718821', product: 'Nike Shoes', amount: '$2779', quantity: '1', status: 'Delivered' },
        { id: '#718822', product: 'Nike Shoes', amount: '$2779', quantity: '1', status: 'Pending' },
        { id: '#718823', product: 'Nike Shoes', amount: '$2779', quantity: '1', status: 'Cancelled' },
        { id: '#718824', product: 'Nike Shoes', amount: '$2779', quantity: '1', status: 'Delivered' },
        { id: '#718825', product: 'Nike Shoes', amount: '$2779', quantity: '1', status: 'Cancelled' },
        { id: '#718826', product: 'Nike Shoes', amount: '$2779', quantity: '1', status: 'Delivered' },
        { id: '#718827', product: 'Nike Shoes', amount: '$2779', quantity: '1', status: 'Pending' },

    ];
    return (
        <Paper elevation={0} sx={{ padding: '1rem', borderRadius: '10px' }} width={'100%'}>
            <Typography variant='h6' align='left' sx={{ marginBottom: '1rem', fontWeight: '900' }}> Recent Orders </Typography>
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

export default RecentOrders