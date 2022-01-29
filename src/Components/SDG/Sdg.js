
import {  Grid } from '@mui/material';
import React from 'react';
import {  Container, Button } from 'react-bootstrap';
import logomini from '../../Assets/logo icon.png'

import num1 from '../../Assets/SDG/Group 396.svg'
import num2 from '../../Assets/SDG/Group 377.svg'
import num3 from '../../Assets/SDG/Group 378.svg'
import num4 from '../../Assets/SDG/Group 379.svg'
import num5 from '../../Assets/SDG/Group 380.svg'




const Sdg = () => {
    return (
        <div className='Subbanner-root'>
        <Container>
          <div className='subbanner text-left mb-5'>
            <h1> <img className='sub-logo mb-2' src={logomini} alt="" srcset="" /> Our Objective</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro iste aperiam ut quod, ipsa sit quasi quae a eligendi quisquam repellat dolor tenetur et repudiandae voluptatem laborum similique doloribus blanditiis!</p>
        </div>
        <div>

        <Grid container spacing={5}>
  <Grid item xs={6}>
<div className='d-flex p-2'>
    <div>
<img src={num1} alt="" srcset="" />
    </div>
    <div  className='ps-2'>
        <h1>Lorem ipsum </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores dolores minima. Voluptatibus, saepe dicta non odit iure consectetur. Incidunt?</p>
    
    </div>
</div>
  </Grid>
  <Grid item xs={6}>
  <div className='d-flex p-2'>
    <div>
<img src={num2} alt="" srcset="" />
    </div>
    <div className='ps-3'>
        <h1>Lorem ipsum </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores dolores minima. Voluptatibus, saepe dicta non odit iure consectetur. Incidunt?</p>
    
    </div>
</div>

  </Grid>
  <Grid item xs={6}>
  <div className='d-flex p-2'>
    <div>
<img src={num3} alt="" srcset="" />
    </div>
    <div  className='ps-2'>
        <h1>Lorem ipsum </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores dolores minima. Voluptatibus, saepe dicta non odit iure consectetur. Incidunt?</p>
    
    </div>
</div>
  </Grid>
  <Grid item xs={6}>
  <div className='d-flex p-2'>
    <div>
<img src={num4} alt="" srcset="" />
    </div>
    <div  className='ps-2'>
        <h1>Lorem ipsum </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores dolores minima. Voluptatibus, saepe dicta non odit iure consectetur. Incidunt?</p>
    
    </div>
</div>
  </Grid>
  <Grid item xs={6}>
  <div className='d-flex p-2'>
    <div>
<img src={num5} alt="" srcset="" />
    </div>
    <div  className='ps-2'>
        <h1>Lorem ipsum </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores dolores minima. Voluptatibus, saepe dicta non odit iure consectetur. Incidunt?</p>
    
    </div>
</div>
  </Grid>
</Grid>
        </div > 

        <div   className='text-center mt-4' >
        <Button variant="success" size="lg">
        View More
    </Button> 
        </div>

        
        </Container>
        </div>
    );
};

export default Sdg;