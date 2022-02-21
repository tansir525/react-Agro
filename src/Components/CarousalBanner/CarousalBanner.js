import React from 'react';
import './CarousalBanner.css'
import video from '../../Assets/untitled1_NcZPLZT9.mp4'

const CarousalBanner = () => {
    return (
        <div className='customCarosal'>
            <video autoPlay loop muted className='cusvideobackground'
            style={{
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                height: '90%',
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