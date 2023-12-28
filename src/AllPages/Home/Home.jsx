import React from 'react';
import Banner from '../HomeSlider/Banner';
import About from '../About/About';
import TopInstructor from './TopInstructor/TopInstructor';
import FeatureClasses from './FeatureClasses/FeatureClasses';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureClasses></FeatureClasses>
            <About></About>
            <TopInstructor></TopInstructor>
        </div>
    );
};
export default Home;