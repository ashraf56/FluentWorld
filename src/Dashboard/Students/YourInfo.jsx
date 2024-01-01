import React from 'react';
import useCartClass from '../../Hooks/useCartClass';
import useUser from '../../Hooks/useUser';
const YourInfo = () => {
  let [userinfo] = useUser()
  let [cartClass] = useCartClass()
 
   return (
    <div className=' '>
     { !userinfo ? 'loading':
     
     <div className='max-w-full hero-content  grid grid-cols-1 '>
        {
          userinfo.map(({ _id, name, role, email, photoURL }) => (

            
              <div key={_id}>
                <div className="alert w-full  shadow-lg" >
                  <div>
                    <div className="avatar ">
                      <div className="w-16 justify-center lg:justify-start ">
                        <img src={photoURL} className='rounded-full' />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Welcome to Dashboard</h3>
                    <div className="text-xs"> <span className='text-green-600 font-bold'>{role}</span></div>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  <div className="card card-side max-w-full bg-base-300 mt-3 shadow-xl">
                    <div className="card-body ">
                      <h2 className="card-title">{name}</h2>
                      <p> {email}</p>
                      <p>Total Selected Class : <span className='ps-2 font-bold text-amber-800'>{cartClass.length}</span></p>
                      <p>Your ID: <span className='ps-2 font-bold text-amber-800'>{_id}</span></p>
                    </div>
                  </div>
                  <div className="card max-w-full bg-base-300 mt-3 shadow-xl">
                    <div className="card-body items-center justify-center  text-center">
                      <h2 className="card-title text-6xl">{cartClass.length}</h2>
                      <p>Total Enrolled Classes</p>
                    </div>
                  </div>
                </div>


               
                 </div>  ))
        }
      </div>}
    </div>
  );
};
export default YourInfo;