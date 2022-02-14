import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <>
          <div className='motherbannerabout'>
          <div className='aboutbanner'>
                <h1 className='centeredabout'>“A good farmer is nothing <br /> more nor  less than a handy <br />  man with a sense of humus.”</h1>
            </div>
          </div>
        <Container className='customAbout'>
          
            <h1>ABOUT US</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus odio autem itaque, cum nihil ipsam accusamus suscipit fuga, nisi maxime quidem. Cumque veritatis molestiae eum tenetur reiciendis consequatur nemo facilis?</p>
        </Container>
        </>
    );
};

export default About;