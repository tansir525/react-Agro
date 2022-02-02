import { Grid } from '@mui/material';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const FormPage = () => {
    return (
        <Container>

<div className='m-5 p-5'>
<Grid container spacing={2}>
  <Grid item xs={6}>

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
  <Grid item xs={6}>
  <h1 className='text-center'>Contact Us</h1> 
   <h2 className='text-center'>We care about your thought</h2>
  </Grid>
</Grid>

</div>

        </Container>
    );
};

export default FormPage;