import React from 'react'
import { Table, TableBody, TableCell, TableRow } from '@mui/material'

function ProductDetails(props) {
  const { StyledBox, productDetails } = props
  return (
    <StyledBox>
      <Table>
        <TableBody>
          {productDetails.map((detail, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {detail.name}
              </TableCell>
              <TableCell align="left">{detail.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledBox>
  )
}

export default ProductDetails
