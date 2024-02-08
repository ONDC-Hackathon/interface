import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function AddBasicInfo() {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        manufacturer: '',
        brand: '',
        originalPrice: '',
        discount: '',
        category: 'Electronics',
        subCategory: 'Watch',
        variant: 'Smart Watch',
        stock: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form submitted')
    }

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    return (
        <Grid style={{ minHeight: '100vh' }} container spacing={4}>
            <Grid xs={8}>
                <Box className="" sx={{ width: '100%' }}>
                    <Card className="shadow-none bg-white" style={{ marginBottom: '30px', borderRadius: '0px' }}>
                        <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Product Title"
                                    variant="outlined"
                                    fullWidth
                                    value={product.title}
                                    onChange={(e) => handleChange(e, 'title')}
                                />
                                <div>
                                    <label
                                        htmlFor="productDescription"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Product Description
                                    </label>
                                    <ReactQuill
                                        id="productDescription"
                                        theme="snow"
                                        value={product.description}
                                        onChange={(content) => setProduct({ ...product, description: content })}
                                    />
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                    <Card className="shadow-none bg-white" style={{ marginBottom: '30px', borderRadius: '0px' }}>
                        <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                            <Typography className="font-bold text-left py-4" variant="h6" component="h6">
                                General Information
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Manufacturer Name"
                                    variant="outlined"
                                    fullWidth
                                    value={product.manufacturer}
                                    onChange={(e) => handleChange(e, 'manufacturer')}
                                />
                                <TextField
                                    label="Brand"
                                    variant="outlined"
                                    fullWidth
                                    value={product.brand}
                                    onChange={(e) => handleChange(e, 'brand')}
                                />
                                <TextField
                                    label="Original Price"
                                    variant="outlined"
                                    fullWidth
                                    value={product.originalPrice}
                                    onChange={(e) => handleChange(e, 'originalPrice')}
                                />
                                <TextField
                                    label="Discounts/Offers"
                                    variant="outlined"
                                    fullWidth
                                    value={product.discount}
                                    onChange={(e) => handleChange(e, 'discount')}
                                />
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid xs={4}>
                <Box className="rounded-3xl" style={{ left: '60%', top: '50%' }} sx={{ width: '100%' }}>
                    <Card className="shadow-none bg-white" style={{ marginBottom: '30px', borderRadius: '0px' }}>
                        <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                            <Typography className="font-bold text-left py-4" variant="h6" component="h6">
                                Category
                            </Typography>
                            <form onSubmit={handleSubmit} className="flex flex-col">
                                <FormControl>
                                    <InputLabel>Category</InputLabel>
                                    <Select
                                        value={product.category}
                                        label="Category"
                                        onChange={(e) => handleChange(e, 'category')}
                                    >
                                        <MenuItem value="Electronics">Electronics</MenuItem>
                                        {/* Add other categories here */}
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <InputLabel>Sub Category</InputLabel>
                                    <Select
                                        value={product.subCategory}
                                        label="Sub Category"
                                        onChange={(e) => handleChange(e, 'subCategory')}
                                    >
                                        <MenuItem value="Watch">Watch</MenuItem>
                                        {/* Add other sub-categories here */}
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <InputLabel>Variant</InputLabel>
                                    <Select
                                        value={product.variant}
                                        label="Variant"
                                        onChange={(e) => handleChange(e, 'variant')}
                                    >
                                        <MenuItem value="Smart Watch">Smart Watch</MenuItem>
                                        {/* Add other variants here */}
                                    </Select>
                                </FormControl>
                            </form>
                        </CardContent>
                    </Card>
                    <Card className="shadow-none bg-white" style={{ marginBottom: '30px', borderRadius: '0px' }}>
                        <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                            <Typography className="font-bold text-left py-4" variant="h6" component="h6">
                                Stock Information
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Available Stock"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={product.stock}
                                    onChange={(e) => handleChange(e, 'stock')}
                                />
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AddBasicInfo
