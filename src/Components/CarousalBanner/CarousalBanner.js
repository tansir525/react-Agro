import React from 'react';
import './CarousalBanner.css'
import video from '../../Assets/The Farmer_1.MOV'

const CarousalBanner = () => {
    return (
        <div className='customCarosal'>
            <video autoPlay loop muted className='cusvideobackground'
            style={{
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%',
                zIndex: '-1',
                
                // opacity: '0.6'
            }} >
            
            <source src={video} type='video/mp4'/>
            </video>
            
        </div>
    );
};

export default CarousalBanner;