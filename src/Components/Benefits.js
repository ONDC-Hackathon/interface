import React from 'react'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

function Benefits(props) {
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
}

export default Benefits
