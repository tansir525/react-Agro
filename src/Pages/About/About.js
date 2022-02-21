import { Grid } from '@mui/material';
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
          
            
      <Grid className='customabout' container spacing={0}>
                <Grid className='abouttitle' item xs={6}>
                   <h1>About Us</h1> 
                </Grid>
                <Grid item xs={6}>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, pariatur et aspernatur aliquam iste non quidem delectus rerum ad deserunt, sunt ipsum repudiandae aliquid animi?</p>
                </Grid>
               
               
    </Grid>



           
        </Container>
        </>
    );
};

export default About;