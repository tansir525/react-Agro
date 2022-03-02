import React from 'react';
import './Environment.css'
import devider from '../../Assets/Environment/enviroment-intro-1-illustration.png'
import { Container } from 'react-bootstrap';

const Environment = () => {
    return (
        <div className='environmentbg'>
            <Container>
            <img className='img-fluid' src={devider} alt="" srcset="" />
             <div className='text-center mb-2 pb-3'>
            <h2 style={{color: '#008000', fontWeight:'bold'}} className='mt-5'>We are driven by a vision for sustainability</h2>
            </div>
            <p className='text-center '>
“Our Sustainability and National Contribution Report 2020 tells the story of how we as a Group serve to fulfil our responsibilities to contribute more Environmental, Social and Governance (ESG) value, in a historic year that saw the world as we know it irrevocably changed.”</p>
</Container>   
        </div>
    );
};

export default Environment;