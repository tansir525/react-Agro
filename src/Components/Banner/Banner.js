import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import banner from '../../Assets/banner-image-1-1.png'
import './Banner.css'

const Banner = () => {
    return (
        
          <Container>

        <Row className=' d-flex justify-content-around align-items-center'>
        <Col lg={5}  md={5} sm={12} xs={12} >
        <div>
            
            <h1 className='custom-h1' > <span style={{color: 'green'}}>AGRO</span><span style={{color: '#063340'}}>VERSE</span></h1>
            <h5>Best Quality of food Products</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis hic dolor nihil vitae provident <br />, necessitatibus a odio beatae cupiditate id eos ducimus dolores asperiores quidem nemo distinctio saepe ullam? Pariatur?</p>
       
        </div>
        <Button variant="success" size="lg">
        Explore Us
    </Button>
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
        
    );
};

export default Banner;