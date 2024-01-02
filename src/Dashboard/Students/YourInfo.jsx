import React from 'react';
import useCartClass from '../../Hooks/useCartClass';
import useUser from '../../Hooks/useUser';
const YourInfo = () => {
  let [userinfo] = useUser()
  let [cartClass] = useCartClass()
  console.log(userinfo);
  return (
    <div className=' '>
      {userinfo.length === 0 ? <div className='w-full text-center hero-content'>
        <span className="loading loading-ring loading-md"></span>
      </div> :

        <div className='max-w-full hero-content  grid grid-cols-1 '>
          {
            userinfo.map(({ _id, name, role, email, photoURL }) => (


              <div key={_id}>
                <div className="alert w-full  shadow-lg " >
                  <div>
                    <h3 className="font-bold">Welcome to Dashboard</h3>
                    <div className="text-xs"> <span className='text-green-600 font-bold'>{role}</span></div>
                  </div>
                </div>
                <div className="card bg-base-200 shadow-xl mt-5">
                  <figure><img src={photoURL} alt="d" className='rounded-t-full w-80 ring-4 ring-zinc-900 max-w-full mt-5 object-contain' /></figure>
                  <div className="card-body justify-center text-center">
                    <h2 className=" font-extrabold text-3xl text-center uppercase">{name}</h2>
                    <div>
                      <p className='font-bold'>{email}</p>
                      <p className='font-bold'>{role}</p>
                    </div>

                  </div>
                </div>



              </div>))
          }
        </div>}
    </div>
  );
};
export default YourInfo;