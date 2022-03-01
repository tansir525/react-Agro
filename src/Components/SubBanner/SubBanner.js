import { CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Container} from 'react-bootstrap';
import './SubBanner.css'
import Dairy from '../../Assets/subbanner/heads-black-white-holstein-cows-feeding-grass-stable-holland.jpg'
import manufacture from '../../Assets/subbanner/food.png'
import logomini from '../../Assets/logo icon.png'
import lightning from '../../Assets/subbanner/Agri-Export.jpg'
import tractor from '../../Assets/subbanner/wheat-holiday.png'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const SubBanner = () => {
    return (
        <div className='bg'>
        <Container>
        <div className='subbanner text-left mb-5 mt-5'>
            <h1> <img className='sub-logo mb-2 mt-5' src={logomini} alt="" srcset="" /> Industries and sectors</h1>
          
        </div>
        <div className='mb-5'>
    <Grid container spacing={3}>
   
  <Grid item lg={3}  md={4} sm={12} xs={12}>
    <Item>
    <CardActionArea>
    <img style={{width: '250px', height: '209px' }}  src={Dairy} alt="" srcset="" />
  
     
      <CardContent>
          <Typography className='typoicon' variant="h5" component="div">
            DAIRY
          </Typography>
          
        </CardContent>
        </CardActionArea>

    </Item>
  </Grid>
  <Grid item lg={3}  md={4} sm={12} xs={12}>
    <Item>
    <CardActionArea>
    <img style={{width: '250px', height: '209px' }} src={manufacture} alt="" srcset="" />
    <CardContent>
          <Typography className='typoicon' variant="h5" component="div">
           MANUFACTURING
          </Typography>
          
        </CardContent>
      </CardActionArea>

    </Item>
  </Grid>
  <Grid item lg={3}  md={4} sm={12} xs={12}>
    <Item>
    <CardActionArea>
    <img style={{width: '250px', height: '209px' }}  src={lightning} alt="lightning" srcset="" />
    <CardContent>
          <Typography className='typoicon' variant="h5" component="div">
           EXPORT
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Item>
  </Grid>
  <Grid item lg={3}  md={4} sm={12} xs={12}>
    <Item>
    <CardActionArea>
        <img style={{width: '250px', height: '209px' }}  src={tractor} alt="tractor" srcset="" />
        <CardContent>
          <Typography className='typoicon' variant="h5" component="div">
          FARMING
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Item>
  </Grid>
  
</Grid>


        </div>
        </Container>
        </div>
    );
};

export default SubBanner;