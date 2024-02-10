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
  backgroundColor: theme.palette.common.green,
}))

const steps = [
  'Basic Product Information',
  'Detailed Specification',
  'Product Images',
  'Compliances & Certification',
  'Review',
]

const ActiveTab = ({ steps, activeStep, setActiveStep, handleNext }) => {
  switch (activeStep) {
    case 0:
      return (
        <AddBasicInfo
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
        />
      )
    case 1:
      return (
        <AddDetailedInfo
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
        />
      )
    case 2:
      return (
        <AddImages
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
        />
      )
    case 3:
      return (
        <AddCompliances
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
        />
      )
    case 4:
      return (
        <Review
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
        />
      )
    default:
      return (
        <AddBasicInfo
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
        />
      )
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
      <ActiveTab
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        handleNext={handleNext}
      />
    </div>
  )
}

export default AddProduct
