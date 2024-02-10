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
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getAttributes } from '../Redux/services/attribute.service'
import { addProductAttribute } from '../Redux/services/product.service'
import { setAlert } from '../Redux/features/alert.slice'

function AddDetailedInfo({ steps, activeStep, setActiveStep, handleNext }) {
  const dispatch = useDispatch()
  const { edit, product } = useSelector((state) => state.product)

  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState({})
  const [inputValues, setInputValues] = useState({})

  const fetchOptions = async () => {
    const res = await dispatch(
      getAttributes({
        category: product.category,
        sub_category: product.sub_category,
        variant: product.variant,
      }),
    )
    const data = res.payload.data
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
    const { value, checked } = event.target
    setSelectedOptions({ ...selectedOptions, [value]: checked })

    if (!checked) {
      setInputValues((current) => {
        const { [value]: _, ...rest } = current
        return rest
      })
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputValues({ ...inputValues, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await dispatch(
      addProductAttribute({ product_id: product.id, attributes: inputValues }),
    )
    if (response.meta.requestStatus == 'rejected') {
      dispatch(
        setAlert({
          type: 'error',
          message: response.error.message,
        }),
      )
    } else {
      handleNext(event)
    }
  }

  return (
    <>
      <Grid container sx={{ minHeight: '100vh', padding: '20px' }} spacing={4}>
        <Grid item xs={8}>
          <Box sx={{ width: '100%' }}>
            <Card
              className="shadow-none bg-white"
              style={{ marginBottom: '30px', borderRadius: '0px' }}
            >
              <CardContent style={{ padding: '3rem', borderRadius: '10px' }}>
                <Typography
                  className="font-bold text-left py-4"
                  variant="h6"
                  component="h6"
                >
                  More Info
                </Typography>
                <form onSubmit={handleSubmit}>
                  {options.length !== 0 &&
                    options.map((option) =>
                      selectedOptions[option.id] ? (
                        <TextField
                          key={option.id}
                          label={option.title}
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          name={option.id}
                          value={inputValues[option.id]}
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
            <Card
              className="shadow-none bg-white"
              style={{ marginBottom: '30px', borderRadius: '0px' }}
            >
              <CardContent
                style={{ padding: '0rem 1rem 1rem 1rem', borderRadius: '10px' }}
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
                <Typography
                  className="text-left py-4"
                  sx={{
                    color: '#777777',
                    fontSize: '16px',
                  }}
                  variant="body1"
                >
                  Enhance your product listing by providing clear and
                  comprehensive details.
                </Typography>
                <Typography
                  align="left"
                  paragraph={true}
                  sx={{
                    fontSize: '16px',
                  }}
                >
                  Add these recommended parameters based on your product's
                  category and subcategory to make your listing stand out:
                </Typography>
                <Box
                  sx={{
                    padding: '1rem',
                    border: '2px solid #dddddd',
                  }}
                >
                  <FormGroup>
                    {options.length !== 0 &&
                      options.map((option) => (
                        <FormControlLabel
                          key={option.id}
                          sx={{
                            '& .MuiFormControlLabel-label': {
                              fontSize: '16px',
                            },
                          }}
                          control={
                            <Checkbox
                              checked={selectedOptions[option.id]}
                              onChange={handleCheckboxChange}
                              name={option.title}
                              color="secondary"
                              value={option.id}
                            />
                          }
                          label={option.title}
                        />
                      ))}
                  </FormGroup>
                </Box>
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

export default AddDetailedInfo
