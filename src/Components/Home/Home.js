import React from 'react';
import Banner from '../Banner/Banner';
import BottomBanner from '../Bottom-Banner/BottomBanner';
import Footer from '../Footer/Footer';

import FormPage from '../FormPage/FormPage';
import Navbar from '../Navbar';

import Sdgbottom from '../SDG-Bottom/Sdgbottom';

import Sdg from '../SDG/Sdg';
import SubBanner from '../SubBanner/SubBanner';

const Home = () => {
    return (
        <>
           
           <Banner/> 
           <SubBanner/>
           <Sdg/>
           <BottomBanner/>
           <Sdgbottom/>
           <FormPage/>
           <Footer/>

        
          
        </>
    );
};

export default Home;