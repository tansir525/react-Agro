import { Grid } from '@mui/material';
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import logo from '../../Assets/logo icon.png'
import pic from '../../Assets/c1.jpg'
import pic2 from '../../Assets/c3.jpg'
import pic3 from '../../Assets/c4.jpg'
import CustomButton from '../styles/Button.style';
import { BsCheckLg } from "react-icons/bs";

import './BottomBanner.css'
import { IconContext } from 'react-icons';

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
            <Grid className='text-center d-flex justify-content-end align-items-center text-justify ' item lg={6}  md={6} sm={12} xs={12}>
                <div>
                <h3 style={{fontWeight:'bold', color: '#008000'}} className='pb-3'>Farmer training</h3>
                {/* <h5 style={{fontWeight:'bold'}} >Farming is a science.</h5> */}
                <p>From the absolute basics to building a business, we’ve got it all covered in our extensively curated farming masterclasses.</p>
                <h5>

<IconContext.Provider
      value={{ color: '#008000', size: '15px', marginright: '15px' }}
    >
      <div>
      
      
            <p> <BsCheckLg/>  Traceable supply chain</p>
             <p><BsCheckLg/>  Sustainable farming methods</p>
             <p><BsCheckLg/>  Quality-checked and assured</p>

             
           


      </div>
    </IconContext.Provider>

              
                </h5>
                </div>
                <div> </div>
            
            </Grid>
            <Grid item lg={6}  md={6} sm={12} xs={12}>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded cus-img-caro"
                src={pic}
                alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded cus-img-caro"
                src={pic2}
                alt="Second slide"
                />

            
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded cus-img-caro"
                src={pic3}
                alt="Third slide"
                />

             
            </Carousel.Item>
            </Carousel>
             
            </Grid>
          
            </Grid>

           <div className=' d-flex justify-content-center  p-5'>
           <CustomButton> View More</CustomButton>
           </div>


         

        </Container>

        </div>
    );
};

export default BottomBanner;