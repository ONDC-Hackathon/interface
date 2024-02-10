import React from 'react'
import { Table, TableBody, TableCell, TableRow } from '@mui/material'

function ProductDetails(props) {
  const { StyledBox, details } = props
  return (
    <StyledBox>
      <Table>
        <TableBody>
          {details.map((detail, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {detail.title}
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
