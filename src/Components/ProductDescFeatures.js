import React from 'react';
import { Typography, List, ListItem } from '@mui/material';

function ProductDescFeatures(props) {
    const { StyledBox } = props;
    return (
        <>
            <StyledBox>
                <Typography variant='h6' align='left' gutterBottom> Description: </Typography>
                <Typography align='left' variant="subtitle1" gutterBottom>
                    Midsole:- Core Instant Step In Comfort Long Lasting Reponsive Cushionig And Super Plush Feel.
                    Outsole :- The Rubber Outsole With Perfect Grip And Durability.
                </Typography>
            </StyledBox>
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