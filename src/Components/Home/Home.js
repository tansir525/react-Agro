import React from 'react';
import Banner from '../Banner/Banner';
import BottomBanner from '../Bottom-Banner/BottomBanner';
import Footer from '../Footer/Footer';
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
           <BottomBanner/>
           <Footer/>
        </>
    );
};

export default Home;