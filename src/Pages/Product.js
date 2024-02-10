import React, { useState, useEffect } from 'react'
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
import { getProduct } from '../Redux/services/product.service'
import { useDispatch } from 'react-redux'
import ProductScores from '../Components/ProductScores'

function Product() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const StyledBox = styled(Box)(() => ({
    border: '2px dashed #aaaaaa',
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '2.5rem',
  }))

  const [product, setProduct] = useState(null)
  const [details, setDetails] = useState(null)
  const [images, setImages] = useState(null)

  const fetchData = async (id) => {
    const res = await dispatch(getProduct({ id }))
    const data = res.payload.data.data
    setProduct(data['basics'])
    setDetails(data['details'])
    setImages(data['basics']['images'])
  }

  useEffect(() => {
    fetchData(id)
  }, [])

  return (
    <Box padding="2rem" width="100%">
      <Paper elevation={0} sx={{ width: '100%', padding: '2rem' }}>
        <Grid container spacing={1}>
          <Grid xs={5}>
            {images && <ProductImages images={images} />}
            {product && <ProductScores product={product} />}
          </Grid>
          <Grid xs={7}>
            {product && (
              <BasicProductDetails StyledBox={StyledBox} product={product} />
            )}
            {product && (
              <ProductDescFeatures
                StyledBox={StyledBox}
                description={product.about}
              />
            )}
            {details && (
              <ProductDetails StyledBox={StyledBox} details={details} />
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Product
