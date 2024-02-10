import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import { List, ListItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addProductImage } from '../Redux/services/product.service'
import { setAlert } from '../Redux/features/alert.slice'

const imagePrompts = [
  'Front view',
  'Back view',
  'Side view',
  'In use',
  'Package/Label',
  'Additional',
]

function AddImages({ steps, activeStep, setActiveStep, handleNext }) {
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.product)

  const [images, setImages] = useState([])

  const handleImageChange = (event, index) => {
    const file = event.target.files[0]
    if (file) {
      const updatedImages = [...images]
      updatedImages[index] = {
        ...updatedImages[index],
        file: file,
        url: URL.createObjectURL(file),
        alternate_text: imagePrompts[index],
      }
      setImages(updatedImages)
    }
  }

  const handleDescriptionChange = (event, index) => {
    const updatedImages = [...images]
    updatedImages[index] = {
      ...updatedImages[index],
      description: event.target.value,
    }
    setImages(updatedImages)
  }

  const handleAddImageClick = (index) => {
    const updatedImages = [...images]
    if (!updatedImages[index]) {
      updatedImages[index] = { file: '', description: '', alternate_text: '' }
    }
    setImages(updatedImages)
  }

  const handleRemoveImage = (index) => {
    const updatedImages = [...images]
    updatedImages.splice(index, 1)
    setImages(updatedImages)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await dispatch(addProductImage({ product_id: product.id, images }))
    console.log(response)
    handleNext(event)
  }

  return (
    <>
      <Grid container style={{ minHeight: '100vh' }} spacing={4}>
        <Grid item xs={8}>
          <Box sx={{ width: '100%' }}>
            <Card className="shadow-none bg-white mb-8 rounded-none">
              <CardContent className="p-12 rounded-lg">
                <Typography
                  className="font-bold text-left py-4"
                  variant="h6"
                  component="h6"
                >
                  Product Images
                </Typography>
                <Box className="flex flex-wrap gap-4">
                  {imagePrompts.map((prompt, index) => (
                    <Box key={index} className="w-1/4 p-1 border flex flex-col">
                      <Typography variant="body2" className="text-center my-2">
                        {prompt}
                      </Typography>
                      {images[index] && images[index].url ? (
                        <Box className="flex flex-col items-center">
                          <img
                            src={images[index].url}
                            alt={`Product ${index + 1}`}
                            className="w-full h-auto mb-2"
                          />
                          <TextField
                            label="Describe this image"
                            variant="outlined"
                            value={images[index].description}
                            onChange={(e) => handleDescriptionChange(e, index)}
                            size="small"
                            className="mb-2"
                          />
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleRemoveImage(index)}
                          >
                            Remove
                          </Button>
                        </Box>
                      ) : (
                        <Button
                          variant="outlined"
                          startIcon={<AddIcon />}
                          component="label"
                          onClick={() => handleAddImageClick(index)}
                        >
                          Add Image
                          <input
                            hidden
                            accept="image/*"
                            type="file"
                            onChange={(e) => handleImageChange(e, index)}
                          />
                        </Button>
                      )}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ width: '100%' }}>
            <Card
              className="shadow-none bg-white"
              style={{ marginBottom: '30px', borderRadius: '0px' }}
            >
              <CardContent
                style={{
                  padding: '3rem',
                  borderRadius: '10px',
                  paddingTop: '0',
                }}
              >
                <Typography
                  className="font-bold text-left py-4"
                  variant="h6"
                  component="h6"
                  sx={{
                    color: '#11419E',
                  }}
                >
                  Instructions
                </Typography>
                <Typography className="py-4" align="justify" variant="p">
                  <List sx={{ listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item', fontSize: '15px' }}>
                      Upload a minimum of six high-quality images for each
                      product listing.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', fontSize: '15px' }}>
                      Include images from various angles to provide a
                      comprehensive view of the product.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', fontSize: '15px' }}>
                      Ensure images are well-lit, clear, and of high resolution
                      for optimal presentation.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', fontSize: '15px' }}>
                      Showcase the product in use, its packaging, and any
                      special features or accessories.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', fontSize: '15px' }}>
                      Maintain consistency in background, lighting, and styling
                      for a professional appearance.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', fontSize: '15px' }}>
                      Avoid over-editing or misleading enhancements that may
                      misrepresent the product.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', fontSize: '15px' }}>
                      High-quality images increase buyer interest and improve
                      sales potential.
                    </ListItem>
                  </List>
                </Typography>
                <Typography
                  align="left"
                  variant="h6"
                  sx={{ fontSize: '14px', textAlign: 'left', color: '#4BB543' }}
                >
                  <span style={{ color: 'black' }}>Note:</span> Products with
                  six or more high-quality images are more likely to attract
                  buyers and result in successful sales. Please adhere to these
                  guidelines to optimize your product listings.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <div className="flex justify-end space-x-4">
        <Button
          variant="contained"
          color="success"
          sx={{
            color: 'white !important',
            borderRadius: '15px',
            fontWeight: '900',
          }}
          onClick={(e) => handleSubmit(e)}
        >
          {activeStep !== steps.length - 1 ? 'Save & Next' : 'Submit'}
        </Button>
      </div>
    </>
  )
}

export default AddImages
