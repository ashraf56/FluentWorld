import React from 'react';
import img from '../assets/Dark analytics-pana.png'
const DashBoardHome = () => {
    return (
        <div className='justify-center'>

<h1 className='text-5xl font-bold text-center uppercase pt-10' > <span>Welcome to Dashboard</span></h1>
            <img src={img} className='w-3/6 mx-auto'/>
        </div>
    );
};

export default DashBoardHome;