import React from 'react';
import Banner from '../Banner/Banner';
import BottomBanner from '../Bottom-Banner/BottomBanner';
import CarousalBanner from '../CarousalBanner/CarousalBanner';
import Environment from '../Environment/Environment';


import FormPage from '../FormPage/FormPage';
import Navbar from '../Navbar';


import Sdgbottom from '../SDG-Bottom/Sdgbottom';

import Sdg from '../SDG/Sdg';
import SubBanner from '../SubBanner/SubBanner';

const Home = () => {
    return (
        <>
           
           <Navbar/>        
           <CarousalBanner/>
           <Banner/> 
           <SubBanner/>
           <Sdg/>
           <BottomBanner/>
           <Sdgbottom/>
           <Environment/>
           <FormPage/>
           

        
          
        </>
    );
};

export default Home;