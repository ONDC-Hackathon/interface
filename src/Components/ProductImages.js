import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';

function ProductImages(props) {
    const [currImg, setCurrImg] = useState(0);
    const { images, mainImg } = props;
    return (
        <>
            <Grid sx={{ marginBottom: '4rem' }} container>
                <Grid sx={{ display: 'flex', alignItems: 'center' }} xs={1}>
                    <IconButton onClick={() => {
                        if (currImg > 0) {
                            setCurrImg(currImg - 1);
                        } else {
                            setCurrImg(images.length - 1);
                        }
                    }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                </Grid>

                <Grid xs={10} ><img src={mainImg[currImg]} alt='product' style={{ width: '100%' }} /> </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center' }} xs={1}>
                    <IconButton onClick={() => {
                        setCurrImg((currImg + 1) % images.length);
                    }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <div className="flex flex-row justify-evenly">
                {console.log("Here")}
                {images.map((img, index) => (
                    <IconButton disableRipple key={index} onClick={() => setCurrImg(index)}>
                        <img src={img} alt='product' style={{ maxWidth: '100%' }} />
                    </IconButton>
                ))}
            </div>
        </>
    )
}

export default ProductImages