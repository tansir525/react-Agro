import { Grid } from '@mui/material';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import logomini from '../../Assets/logo icon.png'

const FormPage = () => {
    return (
        <Container>
              <div className='subbanner text-left mb-5 mt-4'>
            <h1> <img className='sub-logo mb-2' src={logomini} alt="" srcset="" /> Contact Us</h1>
            
        </div>

<div className='m-5 p-5'>
<Grid container spacing={2}>
  <Grid item lg={6}  md={6} sm={12} xs={12}>

  <Form>
  <Form.Group className="mb-3">
    <Form.Label>Full Name</Form.Label>
    <Form.Control placeholder="Enter name"  />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>



 
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>
    
  </Grid>
  <Grid className='p-4 mt-3' item lg={6}  md={6} sm={12} xs={12}>

   <h2 style={{color: '#0A3340', fontWeight:'bold'}} className='text-center mb-5 mx-4'>WE CARE ABOUT YOUR THOUGHT</h2>
   <p className='text-center'> lot 2770-C, Jalan Industri 12, Kampung Baru Sungai Buloh, 47000 Sungai Buloh, Selangor </p>
  </Grid>
</Grid>

</div>

        </Container>
    );
};

export default FormPage;