import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import prodimg from '../Images/product1.png';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../Images/Product/1/img1.png';
import img2 from '../Images/Product/1/img2.png';
import img3 from '../Images/Product/1/img3.png';
import img4 from '../Images/Product/1/img4.png';
import color1 from '../Images/Product/1/col1.png';
import color2 from '../Images/Product/1/col2.png';
import color3 from '../Images/Product/1/col3.png';
import styled from '@emotion/styled';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';



function Product() {
  const { id } = useParams();
  const StyledBox = styled(Box)(() => ({
    border: '2px dashed #aaaaaa',
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '2.5rem',
  }));

  const images = [img1, img2, img3, img4];
  const colors = [{
    color: 'Navy Blue',
    img: color1,
    code: '#262C49'
  }, {
    color: 'Royal Blue',
    img: color2,
    code: '#1D6599'
  }, {
    color: 'Grey',
    img: color3,
    code: '#4C4849'
  }];
  console.log(images)
  return (
    <Box padding='2rem' width='100%'>
      <Paper elevation={0} sx={{ width: '100%', padding: '2rem' }}>
        <Grid container spacing={1}>
          <Grid xs={5}>
            <Grid sx={{ marginBottom: '4rem' }} container>
              <Grid sx={{ display: 'flex', alignItems: 'center' }} xs={1}>
                <IconButton>
                  <ArrowBackIosNewIcon />
                </IconButton>
              </Grid>

              <Grid xs={10} ><img src={prodimg} alt='product' style={{ width: '100%' }} /> </Grid>
              <Grid sx={{ display: 'flex', alignItems: 'center' }} xs={1}>
                <IconButton>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Grid>
            </Grid>
            <div className="flex flex-row justify-evenly">
              {console.log("Here")}
              {images.map((img, index) => (
                <img src={img} alt='product' style={{ maxWidth: '100%' }} />
              ))}
            </div>
          </Grid>
          <Grid xs={7}>
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
            <Grid container spacing={2}>
              <Grid xs={3}>
                <StyledBox>
                  <Typography variant='subtitle1' align='left' gutterBottom>Price <LocalOfferIcon sx={{ transform: 'rotate(90deg)', marginLeft: '2rem', color: '#3f81e0' }} /> </Typography>
                  <Typography variant='subtitle1' align='left' gutterBottom>$ 1600 </Typography>
                </StyledBox>
              </Grid>
              <Grid xs={3}>
                <StyledBox>
                  <Typography variant='subtitle1' align='left' gutterBottom>Orders <LocalOfferIcon sx={{ transform: 'rotate(90deg)', marginLeft: '2rem', color: '#3f81e0' }} /> </Typography>
                  <Typography variant='subtitle1' align='left' gutterBottom>$ 1600 </Typography>
                </StyledBox>
              </Grid>
              <Grid xs={3}>
                <StyledBox>
                  <Typography variant='subtitle1' align='left' gutterBottom>Stock <LocalOfferIcon sx={{ transform: 'rotate(90deg)', marginLeft: '2rem', color: '#3f81e0' }} /> </Typography>
                  <Typography variant='subtitle1' align='left' gutterBottom>$ 1600 </Typography>
                </StyledBox>
              </Grid>
              <Grid xs={3}>
                <StyledBox>
                  <Typography variant='subtitle1' align='left' gutterBottom>Revenue <LocalOfferIcon sx={{ transform: 'rotate(90deg)', marginLeft: '2rem', color: '#3f81e0' }} /> </Typography>
                  <Typography variant='subtitle1' align='left' gutterBottom>$ 1600 </Typography>
                </StyledBox>
              </Grid>
            </Grid>
            <StyledBox>
              <Typography variant='h6' align='left' gutterBottom> Color: </Typography>
              <div className='flex flex-row justify-evenly'>
                {colors.map((color, index) => (
                  <div>
                    < img src={color.img} alt={`color${index}`} style={{ maxWidth: '100%' }} />
                    <Typography align='left' component='div' sx={{ marginTop: '0.5rem' }} className='flex flex-row items-center' variant="subtitle1" gutterBottom> <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color.code, marginRight: '10px' }}></div> {color.color}</Typography>
                  </div>
                ))}
              </div>
            </StyledBox>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Product
