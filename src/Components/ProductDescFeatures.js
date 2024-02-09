import React from 'react';
import { Typography, List, ListItem } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


function ProductDescFeatures(props) {
    const { StyledBox, features, services } = props;
    return (
        <>
            <StyledBox>
                <Typography variant='h6' align='left' gutterBottom> Description: </Typography>
                <Typography align='left' variant="subtitle1" gutterBottom>
                    Midsole:- Core Instant Step In Comfort Long Lasting Reponsive Cushionig And Super Plush Feel.
                    Outsole :- The Rubber Outsole With Perfect Grip And Durability.
                </Typography>
            </StyledBox>
            <Grid container spacing={2}>
                <Grid xs={5}>
                    <StyledBox>
                        <Typography variant='h6' align='left' gutterBottom> Features: </Typography>
                        <List sx={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
                            {features.map((feature, index) => (
                                <ListItem key={index} sx={{ display: 'list-item' }}>{feature}</ListItem>
                            ))}
                        </List>
                    </StyledBox>
                </Grid>
                <Grid xs={7}>
                    <StyledBox>
                        <Typography variant='h6' align='left' gutterBottom> Services: </Typography>
                        <List sx={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
                            {services.map((service, index) => (
                                <ListItem key={index} sx={{ display: 'list-item' }}>{service}</ListItem>
                            ))}
                        </List>
                    </StyledBox>
                </Grid>
            </Grid>
            <StyledBox>
                <Typography variant='h6' align='left' gutterBottom> Special Offers and Product Promotions: </Typography>
                <Typography align='left' variant="subtitle1" gutterBottom>
                    <List sx={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            No cost EMI available on select cards. Please check 'EMI options' above for more details.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            Get GST invoice and save up to 28% on business purchases.
                        </ListItem>
                    </List>
                </Typography>
            </StyledBox>
        </>
    )
}

export default ProductDescFeatures