import {  Grid } from '@mui/material';
import React from 'react';
import logo from '../../Assets/Footer/flogo.png'
import './Footer.css'
import { BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";
import { IconContext } from 'react-icons';

const Footer = () => {
    return (
        <div className='footerBackgeound footer'>
            

<Grid className='p-5' container spacing={2}>
  <Grid item xs={6} md={8}>

  <Grid container spacing={2}>
  <Grid item xs={6} md={4}>
  <img 
        src={logo}
        width="70%"
        height="60%"
        className="d-inline-block align-top img-fluid"
        alt="React Bootstrap logo"
 />

 
    
  </Grid>
  <Grid item xs={6} md={4}>
  <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolore.</p>
  </Grid>
  <Grid item xs={6} md={4}>
  <p className='text-white'> <li>
      lorem ipsum</li>
      <li>
          lorem ipsum</li>
          <li>
              lorem ipsum</li>
              </p>
  </Grid>
 
</Grid>


    
  </Grid>
  <Grid item xs={6} md={4} >
  <h5 className='text-white text-center'>Follow us</h5>
  <br />
 

  <IconContext.Provider
 value={{ color: 'white', size: '30px' }}
      
    >
        <div className='d-flex justify-content-around mx-3'>
        <span><BsFacebook/> </span> <span><BsInstagram/></span><span><BsYoutube/></span>
        </div>
   


  </IconContext.Provider>

  </Grid>
 
</Grid>

       
        </div>
    );
};

export default Footer;