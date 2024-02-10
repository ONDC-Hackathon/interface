import React from 'react'
import { Button } from '@mui/material'

function Review({ steps, activeStep, setActiveStep, handleNext }) {
  return (
    <>
      <div>Review</div>
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
    </>
    
  )
}

export default Review
