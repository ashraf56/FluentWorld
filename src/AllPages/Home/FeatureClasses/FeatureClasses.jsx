import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import CardClasses from '../../Classes/CardClasses';
import { Link } from 'react-router-dom';

const FeatureClasses = () => {
  let [featureclass] = useClasses()
  return (
    <div className='mt-10'>
      <h1 className='text-5xl font-bold text-center uppercase py-3 bg-clip-text text-transparent  bg-gradient-to-bl from-[#3952f5]  to-[#fc4778] ' >Top Classes</h1>
      <p className='text-center px-16'>Discover our handpicked selection of top-rated courses. Unlock new skills, gain expertise, and enhance your knowledge with our carefully curated featured courses. Explore what's trending and start your learning journey today</p>
      <div className='grid mx-auto md:grid-cols-2 lg:grid-cols-3 items-center justify-center place-items-center gap-2 px-10  mt-24'>
        {featureclass.length === 0 ? (
          <div className="col-span-3 flex justify-center items-center h-full">
            <div className="w-max">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          </div>
        )
          : (featureclass.slice(0, 3).map(ac =>
            <CardClasses ac={ac} key={ac._id} ></CardClasses>
          ))
        }</div>
     <div className='text-center my-5'>
     <Link to={'/Classes'}>
        <button className='btn transition duration-300 ease-in-out transform bg-gradient-to-tr from-[#3952f5]  to-[#fc4778] my-5 btn-md w-52 hover:from-[#fc4778] hover:to-[#3952f5]   border-0  text-white' >View All</button>
      </Link>
     </div>
    </div>
  );
};
export default FeatureClasses;