import React from 'react';
import imgs1 from '../../assets/9397253.png'
import imgs2 from '../../assets/3d-background-with-white-cubes.jpg'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${imgs2})`,backgroundSize:'cover', }}>
          
<div className="hero min-h-screen " >
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">

    <img src={imgs1} className='  md:max-w-5xl'   />
  
  

   <div>
<h1 className=' text-md font-extrabold  ' >FLUENTWORLD</h1>
  <h4 className=' text-md md:text-5xl font-bold py-2'>UNLOCK THE POWER OF LANGUAGE WITH FLUENTWORLD</h4>
  <p className='text-sm md:text-md'>
Welcome to FluentWorld, where language mastery opens doors to a world of limitless communication possibilities! Immerse yourself in an enriching journey that transcends linguistic barriers and propels you towards confident and articulate expression.
At FluentWorld, we believe in unlocking your language potential through a dynamic and engaging learning experience. Whether you aspire to enhance your conversational skills, delve into cultural nuances, or embark on a professional language journey, we have tailored programs to cater to your unique aspirations.</p>

    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;