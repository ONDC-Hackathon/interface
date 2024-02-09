// ProductCard.js
import React from 'react'
import { Card, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const ProductCard = ({ product, onDelete, onEdit, onClick }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: 'center',
                boxShadow: 'none',
                marginY: '5px',
                padding: '10px',
                '&:hover': { backgroundColor: '#f5f5f5' },
            }}
        >
            <Box sx={{ flex: 3, marginRight: '10px', textAlign: 'start' }} onClick={onClick}>
                <Typography variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Category: {product.category}
                </Typography>
            </Box>
            <Box sx={{ flex: 1, marginRight: '10px', textAlign: 'start' }}>
                <Typography variant="subtitle1">₹ {product.price}</Typography>
            </Box>
            <Box sx={{ flex: 1, marginRight: '10px', textAlign: 'start' }}>
                <Typography variant="subtitle1">{product.stock}</Typography>
            </Box>
            <Box sx={{ flex: 1, marginRight: '10px', textAlign: 'start' }}>
                <Typography variant="subtitle1">{product.orders}</Typography>
            </Box>
            <Box sx={{ flex: 1, marginRight: '10px', textAlign: 'start' }}>
                <Typography variant="subtitle1">{new Date(product.publishedOn).toLocaleDateString()}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {new Date(product.publishedOn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
                <IconButton
                    aria-label="more"
                    id={`button-${product.id}`}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    size="large"
                    edge="end"
                    sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id={`menu-list-grow`}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={onEdit}>Edit</MenuItem>
                    <MenuItem onClick={onDelete}>Delete</MenuItem>
                    <MenuItem onClick={handleClose}>Cancel</MenuItem>
                </Menu>
            </Box>
        </Card>
    )
}

export default ProductCard