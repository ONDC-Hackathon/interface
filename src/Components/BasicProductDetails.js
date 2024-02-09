import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Typography } from '@mui/material';

function BasicProductDetails(props) {
    const { StyledBox } = props;
    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                <Typography align='left' variant='h3' gutterBottom>
                    Adidas Mens Restound M Running Shoe
                </Typography>
                <Typography variant='subtitle1' align='left' gutterBottom>
                    Product id: 229FR1
                </Typography>
                <Typography align='left' variant="subtitle1" gutterBottom>
                    Seller: Adidas
                </Typography>
                <Typography align='left' variant="subtitle1" gutterBottom>
                    Published on: 10 March 2022
                </Typography>
            </div>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <StyledBox>
                        <Typography variant='subtitle1' align='left' gutterBottom>Price <LocalOfferIcon sx={{ transform: 'rotate(90deg)', marginLeft: '1.5rem', color: '#3f81e0' }} /> </Typography>
                        <Typography variant='subtitle1' align='left' gutterBottom>$ 1600 </Typography>
                    </StyledBox>
                </Grid>
                <Grid xs={3}>
                    <StyledBox>
                        <Typography variant='subtitle1' align='left' gutterBottom>Orders <LocalOfferIcon sx={{ transform: 'rotate(90deg)', marginLeft: '1.5rem', color: '#3f81e0' }} /> </Typography>
                        <Typography variant='subtitle1' align='left' gutterBottom>$ 1600 </Typography>
                    </StyledBox>
                </Grid>
                <Grid xs={3}>
                    <StyledBox>
                        <Typography variant='subtitle1' align='left' gutterBottom>Stock <LocalOfferIcon sx={{ transform: 'rotate(90deg)', marginLeft: '1.5rem', color: '#3f81e0' }} /> </Typography>
                        <Typography variant='subtitle1' align='left' gutterBottom>$ 1600 </Typography>
                    </StyledBox>
                </Grid>
                <Grid xs={3}>
                    <StyledBox>
                        <Typography variant='subtitle1' align='left' gutterBottom>Revenue <LocalOfferIcon sx={{ transform: 'rotate(90deg)', marginLeft: '1.5rem', color: '#3f81e0' }} /> </Typography>
                        <Typography variant='subtitle1' align='left' gutterBottom>$ 1600 </Typography>
                    </StyledBox>
                </Grid>
            </Grid>
        </>
    )
}

export default BasicProductDetails