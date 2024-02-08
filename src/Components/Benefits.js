import React from 'react'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

function Benefits(props) {
<<<<<<< HEAD
    return (
        <Grid style={{ width: 'max-content' }} className="text-left text-white" container spacing={2}>
            <Grid className="" xs={2}>
                {' '}
                <img src={props.icon} alt="" />{' '}
            </Grid>
            <Grid xs={10}>
                <h1 className="font-extrabold">{props.heading}</h1>
                <p style={{ fontSize: '0.7rem' }}>{props.desc}</p>
            </Grid>
        </Grid>
    )
=======
  return (
    <div style={{width: 'max-content', marginBottom: '20px'}} className='text-left text-white flex flex-row gap-3'>  
          <div className='flex items-center' xs={2}> <img style={{ }} src={props.icon} alt="" /> </div>
          <div>
            <h1 className='font-extrabold'>{props.heading}</h1>
            <p style={{fontSize:'0.7rem'}}>{props.desc}</p>
          </div>
    </div>
  )
>>>>>>> origin/main
}

export default Benefits
