import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../Assets/logo icon.png'
import CustomButton from '../styles/Button.style';
import './BottomBanner.css'

const BottomBanner = () => {
    return (
        <div  className='custombottombannerbackground'>

        <Container>

            

            <div className='subbanner text-left mb-5 '>
            <h1  className='pt-5'> <img className='sub-logo mb-2' src={logo} alt="" srcset="" /> Lorem Ipsum</h1>
            </div>
            <div className="customBottomBanner mb-5 d-flex align-items-center">
 
               <div className='ms-5'>
               <h3>Lorem Ipsum</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ratione laborum quae perferendis ducimus at ut dolorum <br />  obcaecati suscipit odio neque.</p>
                </div>

                
            </div>
            <div className='cusbottom'>
                <h4 style={{color: '#008000', fontWeight:'bold'}} className='text-center'> Introducing Project BetterFarms</h4>
                <p style={{color: '#0A3340'}} className='text-center'>Where we work with the farmers to ensure maximum output efficiency in the farms and help them place their products in a traceable marketplace directly to stores and consumers.</p>
            </div>
            <Grid container spacing={2}>
            <Grid item lg={6}  md={6} sm={12} xs={12}>
                <h3 style={{fontWeight:'bold'}} className='pb-3 '>Farmer training</h3>
                <p style={{fontWeight:'bold'}} >Farming is a science.</p>
                <p>From the absolute basics to building a business, we’ve got it all covered in our extensively curated farming masterclasses.</p>
                
             
                
            </Grid>
            <Grid item lg={6}  md={6} sm={12} xs={12}>
               <h3 className='pb-3 text-center'>Lorem Ipsum </h3> 
             
            </Grid>
          
            </Grid>

           <div className='text-center mx-auto  p-5'>
           <CustomButton> View More</CustomButton>
           </div>


         

        </Container>

        </div>
    );
};

export default BottomBanner;