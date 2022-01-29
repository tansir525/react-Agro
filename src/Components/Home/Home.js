import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Sdg from '../SDG/Sdg';
import SubBanner from '../SubBanner/SubBanner';

const Home = () => {
    return (
        <>
           <Header/>
           <Banner/> 
           <SubBanner/>
           <Sdg/>
        </>
    );
};

export default Home;