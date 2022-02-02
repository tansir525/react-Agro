import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../Assets/logo icon.png'
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
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <h3 className='pb-3'>Lorem Ipsum</h3>
                
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <h6>lorem ipsum ipsum ipsum </h6>
                <h6>lorem ipsum ipsum ipsum </h6>
                <h6>lorem ipsum ipsum ipsum </h6>
                <h6>lorem ipsum ipsum ipsum </h6>
                <h6>lorem ipsum ipsum ipsum </h6>
                </Grid>
                <Grid item xs={6}>
                <p>nested check</p> 
                <p>nested check</p> 
                <p>nested check</p> 
                <p>nested check</p> 
                
                </Grid>
                </Grid>

                
            </Grid>
            <Grid item xs={6}>
               <h3 className='pb-3'>Lorem Ipsum </h3> 
               <Grid container spacing={2}>
                <Grid item xs={6}>
                <h6>llorem ipsum ipsum</h6>
                <h6>llorem ipsum ipsum</h6>
                <h6>llorem ipsum ipsum</h6>
                <h6>llorem ipsum ipsum</h6>
                <h6>llorem ipsum ipsum</h6>
                </Grid>
                <Grid item xs={6}>
                <p>nested check</p> 
                <p>nested check</p> 
                <p>nested check</p> 
                <p>nested check</p> 
                </Grid>
                </Grid>
            </Grid>
          
            </Grid>

           <div className='text-center mx-auto  p-5'>
           <button className=' btn btn-success'>Explore more</button>
           </div>


         

        </Container>

        </div>
    );
};

export default BottomBanner;