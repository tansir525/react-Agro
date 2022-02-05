import { CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Container} from 'react-bootstrap';
import './SubBanner.css'
import harb from '../../Assets/subbanner/harvest 1.svg'
import agri from '../../Assets/subbanner/agriculture 1.svg'
import logomini from '../../Assets/logo icon.png'
import lightning from '../../Assets/subbanner/lightning-electric-energy 1.svg'
import tractor from '../../Assets/subbanner/tractor 1.svg'
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
        <div className='subbanner text-left mb-5'>
            <h1> <img className='sub-logo mb-2' src={logomini} alt="" srcset="" /> Environmental Consciousness</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro iste aperiam ut quod, ipsa sit quasi quae a eligendi quisquam repellat dolor tenetur et repudiandae voluptatem laborum similique doloribus blanditiis!</p>
        </div>
        <div className='mb-5'>
    <Grid container spacing={3}>
   
  <Grid item lg={3}  md={4} sm={12} xs={12}>
    <Item>
    <CardActionArea>
    <img className='py-2' src={harb} alt="" srcset="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles,
          </Typography>
        </CardContent>
      </CardActionArea>

    </Item>
  </Grid>
  <Grid item lg={3}  md={4} sm={12} xs={12}>
    <Item>
    <CardActionArea>
    <img className='py-2' src={agri} alt="" srcset="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles,
          </Typography>
        </CardContent>
      </CardActionArea>

    </Item>
  </Grid>
  <Grid item lg={3}  md={4} sm={12} xs={12}>
    <Item>
    <CardActionArea>
    <img className='py-2' src={lightning} alt="lightning" srcset="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles,
          </Typography>
        </CardContent>
      </CardActionArea>
    </Item>
  </Grid>
  <Grid item lg={3}  md={4} sm={12} xs={12}>
    <Item>
    <CardActionArea>
        <img className='py-2' src={tractor} alt="tractor" srcset="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles,
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