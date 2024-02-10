import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../Redux/services/product.service'

function AddBasicInfo({ steps, activeStep, setActiveStep, handleNext }) {
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.category)
  const { subCategories } = useSelector((state) => state.subCategory)
  const { variants } = useSelector((state) => state.variant)
  const [subCategoryList, setSubCategoryList] = useState([])
  const [variantList, setVariantList] = useState([])

  const [product, setProduct] = useState({
    title: '',
    brand: '',
    price: '',
    discount: '',
    category: '',
    sub_category: '',
    variant: '',
    available_stock: '',
    tax: '',
    about: '',
    manufacturer: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await dispatch(addProduct(product))
    console.log('res: ', res.payload.data)
  }

  const handleChange = (e, param) => {
    setProduct({ ...product, [param]: e.target.value })
    if (param === 'category') {
      const data = subCategories.filter(
        (subCategory) => subCategory.category === e.target.value,
      )
      setSubCategoryList(data)
    }
    if (param === 'sub_category') {
      const data = variants.filter(
        (variant) => variant.sub_category === e.target.value,
      )
      setVariantList(data)
    }
  }

  return (
    <>
      <Grid sx={{ minHeight: '100vh', padding: '20px' }} container spacing={4}>
        <Grid xs={8}>
          <Box className="" sx={{ width: '100%' }}>
            <Card
              className="shadow-none bg-white"
              style={{ marginBottom: '30px', borderRadius: '0px' }}
            >
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
                      Product About
                    </label>
                    <ReactQuill
                      id="productDescription"
                      theme="snow"
                      value={product.about}
                      onChange={(e) =>
                        handleChange({ target: { value: e } }, 'about')
                      }
                    />
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card
              className="shadow-none bg-white"
              style={{ marginBottom: '30px', borderRadius: '0px' }}
            >
              <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                <Typography
                  className="font-bold text-left py-4"
                  variant="h6"
                  component="h6"
                >
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
                    label="Price"
                    variant="outlined"
                    fullWidth
                    value={product.price}
                    onChange={(e) => handleChange(e, 'price')}
                  />
                  <TextField
                    label="Discount"
                    variant="outlined"
                    fullWidth
                    value={product.discount}
                    onChange={(e) => handleChange(e, 'discount')}
                  />
                  <TextField
                    label="Tax"
                    variant="outlined"
                    fullWidth
                    value={product.tax}
                    onChange={(e) => handleChange(e, 'tax')}
                  />
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box
            className="rounded-3xl"
            style={{ left: '60%', top: '50%' }}
            sx={{ width: '100%' }}
          >
            <Card
              className="shadow-none bg-white"
              style={{ marginBottom: '30px', borderRadius: '0px' }}
            >
              <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                <Typography
                  className="font-bold text-left py-4"
                  variant="h6"
                  component="h6"
                >
                  Category
                </Typography>
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <FormControl sx={{ marginBottom: '10px' }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                      value={product.category}
                      label="Category"
                      onChange={(e) => handleChange(e, 'category')}
                    >
                      {categories.length !== 0 &&
                        categories.map((category) => (
                          <MenuItem value={category.id}>
                            {category.title}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ marginBottom: '10px' }}>
                    <InputLabel>Sub Category</InputLabel>
                    <Select
                      value={product.sub_category}
                      label="Sub Category"
                      onChange={(e) => handleChange(e, 'sub_category')}
                    >
                      {subCategoryList.length !== 0 &&
                        subCategoryList.map((subCategory) => (
                          <MenuItem value={subCategory.id}>
                            {subCategory.title}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ marginBottom: '10px' }}>
                    <InputLabel>Variant</InputLabel>
                    <Select
                      value={product.variant}
                      label="Variant"
                      onChange={(e) => handleChange(e, 'variant')}
                    >
                      {variantList.length !== 0 &&
                        variantList.map((variant) => (
                          <MenuItem value={variant.id}>
                            {variant.title}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </form>
              </CardContent>
            </Card>
            <Card
              className="shadow-none bg-white"
              style={{ marginBottom: '30px', borderRadius: '0px' }}
            >
              <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                <Typography
                  className="font-bold text-left py-4"
                  variant="h6"
                  component="h6"
                >
                  Stock Information
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Available Stock"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={product.available_stock}
                    onChange={(e) => handleChange(e, 'available_stock')}
                  />
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <div className="flex justify-end space-x-4">
        {activeStep !== steps.length - 1 && (
          <Button
            variant="outlined"
            sx={{
              borderRadius: '15px',
              fontWeight: '900',
              borderWidth: '2px',
            }}
            color="success"
            onClick={handleSubmit}
          >
            Save
          </Button>
        )}
        <Button
          variant="contained"
          color="success"
          sx={{
            color: 'white !important',
            borderRadius: '15px',
            fontWeight: '900',
          }}
          onClick={(e) => {
            handleSubmit(e)
            handleNext(e)
          }}
        >
          {activeStep !== steps.length - 1 ? 'Save & Next' : 'Submit'}
        </Button>
      </div>
    </>
  )
}

export default AddBasicInfo
