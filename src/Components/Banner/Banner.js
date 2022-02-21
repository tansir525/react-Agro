import React from 'react';
import {  Col, Container, Image, Row } from 'react-bootstrap';
import banner from '../../Assets/banner-image-1-1.png'

import GlassCard from '../GlassCard/GlassCard';
import CustomButton from '../styles/Button.style';
import './Banner.css'



const Banner = () => {
    return (
        <>
       <Container className='mt-5'>
        <Row className=' d-flex justify-content-around align-items-center mt-5'>
        <Col lg={5}  md={5} sm={12} xs={12} >
        <div className='cusbannartext'>
            
            <h1 className='custom-h1' > <span style={{color: '#008000', letterSpacing: '5px'}}>AGRO</span><span style={{color: 'white'}}>VERSE</span></h1>
            <h5 style={{color: 'white', fontWeight:'bold'}}>Best Quality of food Products</h5>
            <p className='text-white'> necessitatibus a odio beatae cupiditate id eos ducimus dolores asperiores quidem nemo distinctio saepe ullam? Pariatur?</p>
       
            <CustomButton>Explore us</CustomButton>
        </div>
       



        </Col>


    <Col  lg={7}  md={7} sm={12} xs={12}>
    {/* <Image className='bannerimg' fluid
      alt="banner"
      src={banner}
      layout="intrinsic"
      width={710}
      height={650}
    />     */}
    
    <GlassCard/>
        </Col>
        </Row>      
    
        </Container> 

        </>
    );
};

export default Banner;