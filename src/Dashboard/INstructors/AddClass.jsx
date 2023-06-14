import React, { useContext } from 'react';
import { AuthService } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

import useAxiosSecure from '../../Hooks/useAxiosSecure';


const img_token = import.meta.env.VITE_IMAGE_TOKEN;

const AddClass = () => {
    let {user}=useContext(AuthService)
    let [AxiosGuard]=useAxiosSecure()

    let hosting_Url=`https://api.imgbb.com/1/upload?key=${img_token}`;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        let fromdata= new FormData();
        fromdata.append('image',data.image[0])


        fetch(hosting_Url,{
            method:"POST",
            body: fromdata
        })
        .then(res=>res.json())
        .then(imgres=>{
if(imgres.success){
  let imgUrl=imgres.data.display_url;
  let {cname,email,name,price,seat}=data
  let newclass={cname, email, name, price:parseFloat(price), seat:parseFloat(seat), image:imgUrl ,status:'pending' ,enrolledstudent: 0 }
  AxiosGuard.post('/classes' , newclass)
  .then(data =>{

  })
}
reset()
       console.log(imgres);
        })
    }

    return (
        <div>
        
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold pb-5">ADD A CLASS</h1>
   
    </div>
    <div className="card  w-full shadow-2xl bg-base-100">
        <form   onSubmit={handleSubmit(onSubmit)}>
      <div  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true})}defaultValue={user?.email} readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" {...register("name", { required: true})}defaultValue={user?.displayName} readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seat</span>
          </label>
          <input type="number" placeholder="Seat" {...register("seat", { required: true})}className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ClassName</span>
          </label>
          <input type="text" placeholder="ClassName" {...register("cname", { required: true})}className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ClassImage</span>
          </label>
          <input type="file" {...register("image", { required: true})}className="file-input file-input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price"{...register("price", { required: true})} className="input input-bordered"  />
        </div>
       
       
        <div className="form-control mt-6">
          <button className="btn btn-neutral  w-full">Add</button>
        </div>
      </div></form>
    </div>
  </div>
</div>

        </div>
    );
};

export default AddClass;