import React from 'react';
import './GlassCard.css'
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from 'react-icons';

const GlassCard = () => {
    return (
        <div className='exportcontainer'>
            <div className="container">
      <div className="card">
        <div className="contentbef"></div>
        <div className="content">
          <h3 style={{color: 'white', fontWeight: 'bolder'}}>Eco-Friendly Farming</h3>
          <br />
          <p>
          <IconContext.Provider
      value={{ color: '#008000', size: '15px', marginright: '15px' }}
    >
            <ul> <BsCheckLg/>  Organic agriculture</ul>
            <ul> <BsCheckLg/> Crop Rotation and Polyculture</ul>
            <ul><BsCheckLg/> Renewable Energy Resources</ul>
            <ul><BsCheckLg/> Tillage Management</ul>
            <ul><BsCheckLg/> Agroforestry</ul>
            </IconContext.Provider>
          </p>
         
        </div>
      </div>
    </div>
        </div>
    );
};

export default GlassCard;