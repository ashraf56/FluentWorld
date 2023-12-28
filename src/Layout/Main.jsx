import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../AllPages/Header/Header';
import Footer from '../AllPages/Footer/Footer';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};
export default Main;