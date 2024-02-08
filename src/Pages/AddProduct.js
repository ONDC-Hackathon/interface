import React, { useState, useCallback } from 'react'
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  styled,
  Typography,
} from '@mui/material'

import AddBasicInfo from '../Components/AddBasicInfo'
import AddDetailedInfo from '../Components/AddDetailedInfo'
import AddImages from '../Components/AddImages'
import AddCompliances from '../Components/AddCompliances'
import Review from '../Components/Review'

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: 'green',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: 'green',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
}))

const SaveNextBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.green
}))

const steps = [
  'Basic Product Information',
  'Detailed Specification',
  'Product Images',
  'Compliances & Certification',
  'Review',
]

const ActiveTab = ({ activeStep }) => {
  switch (activeStep) {
    case 0:
      return <AddBasicInfo />
    case 1:
      return <AddDetailedInfo />
    case 2:
      return <AddImages />
    case 3:
      return <AddCompliances />
    case 4:
      return <Review />
    default:
      return <AddBasicInfo />
  }
}

function AddProduct() {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState({})

  const handleNext = useCallback(() => {
    setCompletedSteps((prev) => ({ ...prev, [activeStep]: true }))
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }, [activeStep])

  const handleStep = useCallback(
    (index) => () => {
      if (index <= Object.keys(completedSteps).length) {
        setActiveStep(index)
      }
    },
    [completedSteps],
  )

  return (
    <div className="flex flex-col p-2">
      <Typography variant="h4" component="h1" className="mb-4">
        Add Product
      </Typography>
      <div className="mb-6">
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => (
            <Step
              key={label}
              completed={completedSteps[index]}
              onClick={handleStep(index)}
            >
              <StepLabel
                StepIconProps={{
                  completed: completedSteps[index],
                  active: activeStep === index,
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <ActiveTab activeStep={activeStep} />
      <div className="flex justify-end space-x-4">
        {activeStep !== steps.length - 1 && (
          <Button variant="outlined" sx={{
            borderRadius: '15px',
            fontWeight: '900',
            borderWidth: '2px'
          }} color="success">
            Save
          </Button>
        )}
        <Button variant="contained" color="success" sx={{
          color: 'white !important',
          borderRadius: '15px',
          fontWeight: '900'
        }} onClick={handleNext}>
          {activeStep !== steps.length - 1 ? 'Save & Next' : 'Submit'}
        </Button>
      </div>
    </div>
  )
}

export default AddProduct
