import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Paper } from '@mui/material'
import prodimg from '../Images/product1.png'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

import img1 from '../Images/Product/1/img1.png'
import img2 from '../Images/Product/1/img2.png'
import img3 from '../Images/Product/1/img3.png'
import img4 from '../Images/Product/1/img4.png'
import color1 from '../Images/Product/1/col1.png'
import color2 from '../Images/Product/1/col2.png'
import color3 from '../Images/Product/1/col3.png'
import styled from '@emotion/styled'
import ProductDetails from '../Components/ProductDetails'
import ProductImages from '../Components/ProductImages'
import BasicProductDetails from '../Components/BasicProductDetails'
import ColorandSize from '../Components/ColorandSize'
import ProductDescFeatures from '../Components/ProductDescFeatures'

function Product() {
  const { id } = useParams()
  const StyledBox = styled(Box)(() => ({
    border: '2px dashed #aaaaaa',
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '2.5rem',
  }))
  const mainImg = [prodimg, prodimg, prodimg, prodimg]
  const images = [img1, img2, img3, img4]
  const colors = [
    {
      color: 'Navy Blue',
      img: color1,
      code: '#262C49',
    },
    {
      color: 'Royal Blue',
      img: color2,
      code: '#1D6599',
    },
    {
      color: 'Grey',
      img: color3,
      code: '#4C4849',
    },
  ]
  const size = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK', '11 UK', '12 UK']

  const features = [
    'Sole: Rubber',
    'Sole: Rubber',
    'Sole: Rubber',
    'Sole: Rubber',
    'Sole: Rubber',
    'Sole: Rubber',
  ]

  const services = [
    '10 day returs(Restrictions)',
    '10 day returs(Restrictions)',
    '10 day returs(Restrictions)',
  ]

  const productDetails = [
    { name: 'Category', value: 'Shoes' },
    { name: 'Brand', value: 'Adidas' },
    { name: 'Category', value: 'Shoes' },
    { name: 'Category', value: 'Shoes' },
    { name: 'Category', value: 'Shoes' },
    { name: 'Category', value: 'Shoes' },
    { name: 'Category', value: 'Shoes' },
    { name: 'Category', value: 'Shoes' },
  ]
  return (
    <Box padding="2rem" width="100%">
      <Paper elevation={0} sx={{ width: '100%', padding: '2rem' }}>
        <Grid container spacing={1}>
          <Grid xs={5}>
            <ProductImages mainImg={mainImg} images={images} />
          </Grid>
          <Grid xs={7}>
            <BasicProductDetails StyledBox={StyledBox} />
            <ColorandSize StyledBox={StyledBox} colors={colors} size={size} />
            <ProductDescFeatures
              StyledBox={StyledBox}
              features={features}
              services={services}
            />
            <ProductDetails
              StyledBox={StyledBox}
              productDetails={productDetails}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Product
