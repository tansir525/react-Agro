
import {  Grid } from '@mui/material';
import React from 'react';
import {  Container } from 'react-bootstrap';


import num1 from '../../Assets/SDG/Group 396.svg'
import num2 from '../../Assets/SDG/Group 377.svg'
import num3 from '../../Assets/SDG/Group 378.svg'
import num4 from '../../Assets/SDG/Group 379.svg'
import num5 from '../../Assets/SDG/Group 380.svg'




const Sdg = () => {
    return (
        <div className='Subbanner-root pb-5'>
        <Container>
          <div className='subbanner text-center mb-5'>
            <h1 className='mb-5'>Our Values</h1>
           
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro iste aperiam ut quod, ipsa sit quasi quae a eligendi quisquam repellat dolor tenetur et repudiandae voluptatem laborum similique doloribus blanditiis!</p>
        </div>
        <div>

        <Grid container spacing={5}>
  <Grid item lg={6}  md={6} sm={12} xs={12}>
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
  <Grid item lg={6}  md={6} sm={12} xs={12}>
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
  <Grid item lg={6}  md={6} sm={12} xs={12}>
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
  <Grid item lg={6}  md={6} sm={12} xs={12}>
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
  <Grid item lg={6}  md={6} sm={12} xs={12}>
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

        {/* <div   className='text-center mt-4' >
        <Button variant="success" size="lg">
        View More
    </Button> 
        </div> */}

        
        </Container>
        </div>
    );
};

export default Sdg;