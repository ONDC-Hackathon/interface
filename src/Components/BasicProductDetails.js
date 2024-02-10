import React from 'react'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function BasicProductDetails(props) {
  const { StyledBox, product } = props
  const { categories } = useSelector((state) => state.category)
  const { subCategories } = useSelector((state) => state.subCategory)
  const { variants } = useSelector((state) => state.variant)

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <Typography align="left" variant="h3" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="subtitle1" align="left" gutterBottom>
          Brand: {product.brand}
        </Typography>
        <Typography align="left" variant="subtitle1" gutterBottom>
          Manufacturer: {product.manufacturer}
        </Typography>
        <Typography align="left" variant="subtitle1" gutterBottom>
          Category: {categories.find(category => category.id === product.category).title}
        </Typography>
        <Typography align="left" variant="subtitle1" gutterBottom>
          Sub-Category: {subCategories.find(sub_category => sub_category.id === product.sub_category).title}
        </Typography>
        {product.variant && <Typography align="left" variant="subtitle1" gutterBottom>
          Variant: {variants.find(variant => variant.id === product.variant).title}
        </Typography>}
        <Typography align="left" variant="subtitle1" gutterBottom>
          Created on: {new Date(product.created_at).toLocaleTimeString([], {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <StyledBox>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Price{' '}
              <LocalOfferIcon
                sx={{
                  transform: 'rotate(90deg)',
                  marginLeft: '1.5rem',
                  color: '#3f81e0',
                }}
              />{' '}
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
              INR {product.price} {' '}
            </Typography>
          </StyledBox>
        </Grid>
        <Grid xs={3}>
          <StyledBox>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Discount{' '}
              <LocalOfferIcon
                sx={{
                  transform: 'rotate(90deg)',
                  marginLeft: '1.5rem',
                  color: '#3f81e0',
                }}
              />{' '}
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
              {product.discount} %{' '}
            </Typography>
          </StyledBox>
        </Grid>
        <Grid xs={3}>
          <StyledBox>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Stock{' '}
              <LocalOfferIcon
                sx={{
                  transform: 'rotate(90deg)',
                  marginLeft: '1.5rem',
                  color: '#3f81e0',
                }}
              />{' '}
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
              {product.available_stock}{' '}
            </Typography>
          </StyledBox>
        </Grid>
        <Grid xs={3}>
          <StyledBox>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Tax{' '}
              <LocalOfferIcon
                sx={{
                  transform: 'rotate(90deg)',
                  marginLeft: '1.5rem',
                  color: '#3f81e0',
                }}
              />{' '}
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
              {product.tax} %{' '}
            </Typography>
          </StyledBox>
        </Grid>
      </Grid>
    </>
  )
}

export default BasicProductDetails
