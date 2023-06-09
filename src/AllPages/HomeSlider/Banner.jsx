import React from 'react';
import Slider from './Slider/Slider';

const Banner = () => {
    return (
        <div>
<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='w-8/12'>
            <Slider></Slider>

    </div>
    <div>
      <h1 className="text-4xl font-bold uppercase leading-snug">Unlock the Power of Language with <span className='text-white bg-gray-950'>FluentWorld</span></h1>
      <p className="py-6">Unlock Your Language Potential at FluentWorld: Learn, Connect, and <br /> Speak with Confidence!.Welcome to FluentWorld: Unlock Your Language Potential and <br /> Explore a World of Communication. </p>
      <button className="btn  btn-neutral ">Explore now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;