import React, { useState } from 'react'
import { Typography, List, ListItemButton } from '@mui/material'

function ColorandSize(props) {
  const { StyledBox, colors, size } = props
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  return (
    <>
      <StyledBox>
        <Typography variant="h6" align="left" gutterBottom>
          {' '}
          Color:{' '}
        </Typography>
        <List className="flex flex-row justify-evenly">
          {colors.map((color, index) => (
            <ListItemButton
              sx={{
                '& .Mui-selected': {
                  color: 'black',
                },
              }}
              selected={index == selectedColor}
              onClick={() => setSelectedColor(index)}
            >
              <div>
                <img
                  src={color.img}
                  alt={`color${index}`}
                  style={{ maxWidth: '100%' }}
                />
                <Typography
                  align="left"
                  component="div"
                  sx={{ marginTop: '0.5rem' }}
                  className="flex flex-row items-center"
                  variant="subtitle1"
                  gutterBottom
                >
                  {' '}
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: color.code,
                      marginRight: '10px',
                    }}
                  ></div>{' '}
                  {color.color}
                </Typography>
              </div>
            </ListItemButton>
          ))}
        </List>
      </StyledBox>
      <StyledBox>
        <Typography variant="h6" align="left" gutterBottom>
          {' '}
          Size:{' '}
        </Typography>
        <List className="flex flex-row justify-evenly">
          {size.map((size, index) => (
            <ListItemButton
              selected={index == selectedSize}
              onClick={() => setSelectedSize(index)}
            >
              <Typography
                align="left"
                component="div"
                sx={{
                  marginTop: '0.5rem',
                  backgroundColor: '#F6F6F6',
                  padding: '5px 10px',
                }}
                className="flex flex-row items-center"
                variant="subtitle1"
                gutterBottom
              >
                {size}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </StyledBox>
    </>
  )
}

export default ColorandSize
