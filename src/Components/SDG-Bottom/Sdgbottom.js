import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Sdgbottom.css'
import map from '../../Assets/SDG/map.png'
import sd1 from '../../Assets/SDG/s1.png'
import sd2 from '../../Assets/SDG/s2.png'
import sd3 from '../../Assets/SDG/s3.png'
import sd4 from '../../Assets/SDG/s4.png'



const Sdgbottom = () => {
    return (
        <Container>
<div className='customb'>
<Grid className='mt-5 pt-5 mb-5 pb-5' container spacing={2}>
        <Grid item lg={6}  md={6} sm={12} xs={12}>
          <div className='custom-sdgbottom'>

          <h3 style={{color: '#008000', fontWeight:'bold'}} >The BetterFarms Ecosystem</h3>  
          <p>By working with farmers, we make sure farming is <br /> scientifically  made more efficient.</p>
          <p>And then we bring those products to the market.</p>  
          <h5>We’re implementing data-driven farming and<br />procurement across some of the most needed<br />verticals –</h5> 


         <ul>
            <li>Dairy milk</li>
            <li>Fattening cattle</li>
            <li> Mangoes</li>
            <li>Sea fish</li>
         </ul>


              
        </div>  
        </Grid>
        <Grid item lg={6}  md={6} sm={12} xs={12}>
        <img className='img-fluid ' src={map} alt="" srcset="" />
            
        </Grid>
       
        </Grid>
      <div className='mt-5 mb-5'>
      <div className='text-center'>
            <h2 className='mt-5' style={{color: '#008000', fontWeight:'bold'}} >We are driven by a vision for sustainability</h2>
            </div>

        <Grid className='gridsdgimg mt-5 mb-5 ' container spacing={2}>

            <Grid lg={3}  md={4} sm={6} xs={12}>
                
            <img src={sd1} alt="" srcset="" />
            </Grid>
            <Grid lg={3}  md={4} sm={6} xs={12}>
            <img src={sd2} alt="" srcset="" />  
            </Grid>
            <Grid lg={3}  md={4} sm={6} xs={12}>
            <img src={sd3} alt="" srcset="" />  
            </Grid>
            <Grid lg={3}  md={4} sm={6} xs={12}>
            <img src={sd4} alt="" srcset="" />  
            </Grid>
            </Grid>
      </div>
</div>
        </Container>
    );
};

export default Sdgbottom;