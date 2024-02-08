import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

const imagePrompts = [
    'Upload product front view',
    'Upload product back view',
    'Upload product side view',
    'Upload product in use',
    'Upload product packaging',
    'Upload any additional image',
]

function AddImages() {
    const [images, setImages] = useState([])

    const handleImageChange = (event, index) => {
        const file = event.target.files[0]
        if (file) {
            const updatedImages = [...images]
            updatedImages[index] = {
                ...updatedImages[index],
                url: URL.createObjectURL(file),
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
            updatedImages[index] = { url: '', description: '' }
        }
        setImages(updatedImages)
    }

    const handleRemoveImage = (index) => {
        const updatedImages = [...images]
        updatedImages.splice(index, 1)
        setImages(updatedImages)
    }

    return (
        <Grid container style={{ minHeight: '100vh' }} spacing={4}>
            <Grid item xs={8}>
                <Box sx={{ width: '100%' }}>
                    <Card className="shadow-none bg-white mb-8 rounded-none">
                        <CardContent className="p-12 rounded-lg">
                            <Typography className="font-bold text-left py-4" variant="h6" component="h6">
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
                    <Card className="shadow-none bg-white" style={{ marginBottom: '30px', borderRadius: '0px' }}>
                        <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                            <Typography className="font-bold text-left py-4" variant="h6" component="h6">
                                Instructions
                            </Typography>
                            <Typography className="text-left py-4" variant="body1">
                                {`Upload a minimum of six high-quality images for each product listing.
Include images from various angles to provide a comprehensive view of the product.
Ensure images are well-lit, clear, and of high resolution for optimal presentation.
Showcase the product in use, its packaging, and any special features or accessories.
Maintain consistency in background, lighting, and styling for a professional appearance.
Avoid over-editing or misleading enhancements that may misrepresent the product.
High-quality images increase buyer interest and improve sales potential.

Note: Products with six or more high-quality images are more likely to attract buyers and result in successful sales. Please adhere to these guidelines to optimize your product listings.`}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AddImages