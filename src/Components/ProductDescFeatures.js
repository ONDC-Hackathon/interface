import React from 'react'
import { Typography, List, ListItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

function ProductDescFeatures(props) {
  const { StyledBox, description } = props
  return (
    <>
      <StyledBox>
        <Typography variant="h6" align="left" gutterBottom>
          Description
        </Typography>
        <Typography align="left" variant="subtitle1" gutterBottom>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Typography>
      </StyledBox>
    </>
  )
}

export default ProductDescFeatures
