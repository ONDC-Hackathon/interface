import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'

function AddDetailedInfo() {
    const [options, setOptions] = useState([])
    const [selectedOptions, setSelectedOptions] = useState({})
    const [inputValues, setInputValues] = useState({})

    const fetchOptions = async () => {
        // api call
        const data = [
            'Material Composition',
            'Care instructions',
            'Seasonality',
            'Country of Origin',
            'Fabrics',
            'Texture',
            'Sustainability info',
            'Styling suggestions',
            'Occasion suitability',
        ]
        setOptions(data)
        const initialSelectedOptions = {}
        data.forEach((option) => {
            initialSelectedOptions[option] = false
        })
        setSelectedOptions(initialSelectedOptions)
    }

    useEffect(() => {
        fetchOptions()
    }, [])

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target
        setSelectedOptions({ ...selectedOptions, [name]: checked })

        if (!checked) {
            setInputValues({ ...inputValues, [name]: '' })
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setInputValues({ ...inputValues, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form submitted', inputValues)
    }

    return (
        <Grid container style={{ minHeight: '100vh' }} spacing={4}>
            <Grid item xs={8}>
                <Box sx={{ width: '100%' }}>
                    <Card className="shadow-none bg-white" style={{ marginBottom: '30px', borderRadius: '0px' }}>
                        <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                            <Typography className="font-bold text-left py-4" variant="h6" component="h6">
                                More Info
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                {options.map((option) =>
                                    selectedOptions[option] ? (
                                        <TextField
                                            key={option}
                                            label={option}
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            value={inputValues[option]}
                                            onChange={handleInputChange}
                                        />
                                    ) : null,
                                )}
                            </form>
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
                                {`Enhance your product listing by providing clear and comprehensive details.
                                \n\nAdd these recommended parameters based on your product's category and subcategory to make your listing stand out:`}
                            </Typography>
                            <FormGroup>
                                {options.map((option) => (
                                    <FormControlLabel
                                        key={option}
                                        control={
                                            <Checkbox
                                                checked={selectedOptions[option]}
                                                onChange={handleCheckboxChange}
                                                name={option}
                                            />
                                        }
                                        label={option}
                                    />
                                ))}
                            </FormGroup>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AddDetailedInfo
