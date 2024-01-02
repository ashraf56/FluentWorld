import React, { useContext } from 'react';
import CardClasses from './CardClasses';
import useClasses from '../../Hooks/useClasses';
import { AuthService } from '../../AuthProvider/AuthProvider';
import Search from './Search';
const Classes = () => {
  let [approveclass, isLoading] = useClasses()
  let { search } = useContext(AuthService)

  let flterClass = ((m) => {
    const lowerCaseSearch = search.toLowerCase();
    return (
      (!search ||
        m.cname.toLowerCase().includes(lowerCaseSearch))
    );
  })

  const filterClasses = approveclass.filter(flterClass)
  return (
    <div className='min-h-screen' >
      <h1 className='text-5xl font-bold text-center uppercase pt-8' >All Classes</h1>
      <div className='text-center'>
        <Search></Search>
      </div>
      {isLoading && approveclass.length === 0 ? (
        <div className="col-span-3 flex justify-center items-center h-full">
          <div className="w-max">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      ) : filterClasses.length > 0 ? <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-12 gap-3 2xl:grid-cols-4 my-24'>
        {
          filterClasses.map(ac =>
            <CardClasses ac={ac} key={ac._id}  ></CardClasses>)
        }

      </div> :
        <div className="col-span-3 flex justify-center items-center h-full">
          <div className="w-max">
            <h2 className='uppercase font-bold'>NO classes available</h2>
          </div>
        </div>
      }

    </div>
  );
};
export default Classes;