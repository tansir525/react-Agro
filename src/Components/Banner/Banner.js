
import { motion } from 'framer-motion';
import React from 'react';
import {  Col, Container, Image, Row } from 'react-bootstrap';
import banner from '../../Assets/banner-image-1-1.png'
import CustomButton from '../styles/Button.style';
import './Banner.css'



const Banner = () => {
    return (
        <>
       <Container>
           

        <Row className=' d-flex justify-content-around align-items-center mt-4'>
        <Col lg={5}  md={5} sm={12} xs={12} >
        <div>
            
            <motion.h1 animate={{ y: -6 , x: 6}}
                       transition={{ duration: 1 }}
                       className='custom-h1' > <span style={{color: '#008000', letterSpacing: '5px'}}>AGRO</span><span style={{color: '#063340'}}>VERSE</span></motion.h1>
            <h5 style={{color: '#0A3340', fontWeight:'bold'}}>Best Quality of food Products</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis hic dolor nihil vitae provident <br />, necessitatibus a odio beatae cupiditate id eos ducimus dolores asperiores quidem nemo distinctio saepe ullam? Pariatur?</p>
       
        </div>
       <CustomButton>Explore us</CustomButton>



        </Col>


    <Col  lg={7}  md={7} sm={12} xs={12}>
    <Image fluid
      alt="banner"
      src={banner}
      layout="intrinsic"
      width={710}
      height={650}
    />    
        </Col>
        </Row>      
    
        </Container> 

        </>
    );
};

export default Banner;