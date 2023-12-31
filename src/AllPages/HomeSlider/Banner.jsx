import React from 'react';
import imgs1 from '../../assets/9397253.png'
import imgs2 from '../../assets/3d-background-with-white-cubes.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='relative' style={{ backgroundImage: `url(${imgs2})`, backgroundSize: 'cover' }}>

      <div className="hero min-h-screen backdrop-blur-sm" >
        <div className='absolute  left-1 top-20 backdrop-blur-xl blur-3xl glass'>
          <img src={imgs1} className=' backdrop-blur-3xl glass w-80' />
        </div>
        <div className="hero-content flex-col-reverse lg:flex-row-reverse text-black">
          <img src={imgs1} className='  md:max-w-5xl' />
          <div>
            <h1 className=' text-md font-extrabold  ' >FLUENTWORLD</h1>
            <h4 className=' text-md md:text-5xl font-bold py-2'>UNLOCK THE POWER OF LANGUAGE WITH FLUENTWORLD</h4>
            <p className='text-sm md:text-md'>
              Welcome to FluentWorld, where language mastery opens doors to a world of limitless communication possibilities! Immerse yourself in an enriching journey that transcends linguistic barriers and propels you towards confident and articulate expression.
              At FluentWorld, we believe in unlocking your language potential through a dynamic and engaging learning experience. Whether you aspire to enhance your conversational skills, delve into cultural nuances, or embark on a professional language journey, we have tailored programs to cater to your unique aspirations.</p>
            <Link to={'/Classes'}>
              <button className='btn transition duration-300 ease-in-out transform bg-gradient-to-tr from-[#3952f5]  to-[#fc4778] my-5 btn-md w-52 hover:from-[#fc4778] hover:to-[#3952f5]   border-0  text-white' >Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;