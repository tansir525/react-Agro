import React from 'react';
import Banner from '../Banner/Banner';
import BottomBanner from '../Bottom-Banner/BottomBanner';

import FormPage from '../FormPage/FormPage';

import Sdg from '../SDG/Sdg';
import SubBanner from '../SubBanner/SubBanner';

const Home = () => {
    return (
        <>
          
           <Banner/> 
           <SubBanner/>
           <Sdg/>
           <BottomBanner/>
           <FormPage/>
          
        </>
    );
};

export default Home;