import React from 'react';
import Banner from '../HomeSlider/Banner';
import About from '../About/About';
import TopInstructor from './TopInstructor/TopInstructor';
import FeatureClasses from './FeatureClasses/FeatureClasses';
import Our from '../Our/Our';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureClasses></FeatureClasses>
            <About></About>
            <Our></Our>
            <TopInstructor></TopInstructor>
        </div>
    );
};
export default Home;