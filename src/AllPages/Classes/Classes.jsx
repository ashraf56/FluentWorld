import React from 'react';
import CardClasses from './CardClasses';
import useClasses from '../../Hooks/useClasses';
const Classes = () => {
  let [approveclass] = useClasses()
  return (
    <div >
      <h1 className='text-5xl font-bold text-center uppercase pt-8' >All Classes</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-12 gap-3 2xl:grid-cols-4 my-24'>
        {approveclass.length === 0 ? (
          <div className="col-span-3 flex justify-center items-center h-full">
            <div className="w-max">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          </div>
        )
          : (approveclass.map(ac =>
            <CardClasses ac={ac} key={ac._id} ></CardClasses>
          ))
        }</div>
    </div>
  );
};
export default Classes;