import React from 'react';
import Banner from '../HomeSlider/Banner';
import About from '../About/About';
import TopInstructor from './TopInstructor/TopInstructor';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <TopInstructor></TopInstructor>
        </div>
    );
};

export default Home;