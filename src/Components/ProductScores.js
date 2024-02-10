import React from 'react'
import { Typography, List, ListItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

function ProductScores(props) {
    const { StyledBox, product } = props
    return (
        <>
            <Typography variant="h6" align="left" gutterBottom>
                Scores
            </Typography>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <StyledBox style={{ marginBottom: "0.5rem" }}>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Compliance
                        </Typography>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            {product.compliance_score}
                        </Typography>
                    </StyledBox>
                </Grid>
                <Grid xs={6}>
                    <StyledBox style={{ marginBottom: "0.5rem" }}>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Completeness
                        </Typography>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            {product.completeness_score}
                        </Typography>
                    </StyledBox>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <StyledBox style={{ marginBottom: "0.5rem" }}>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Correctness
                        </Typography>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            {product.correctness_score}
                        </Typography>
                    </StyledBox>
                </Grid>
                <Grid xs={6}>
                    <StyledBox style={{ marginBottom: "0.5rem" }}>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Catalogue
                        </Typography>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            {product.catalogue_score}
                        </Typography>
                    </StyledBox>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductScores
