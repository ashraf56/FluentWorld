import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthService } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  let [err,seterr]=useState('');
let {user,RandonUser,updateUser}=useContext(AuthService)
  const { register, formState: { errors }, handleSubmit ,reset ,watch } = useForm();
  const onSubmit = data => {
console.log(data);
seterr('')
RandonUser(data.email,data.password)
.then((userCredential) => {

  const user = userCredential.user;
 updateUser(data.displayName , data.photoURL)
 .then(() => {
  let info={name:data.name , email:data.email , photoURL:data.photoURL}
            fetch('http://localhost:3000/alluser',{
              method:"POST"
              ,headers:{
                'content-type': 'application/json'
              },
              body:JSON.stringify(info)
            })
            .then(r=> r.json()).then(data=> {
              if (data.insertedId) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'user Created',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
})
console.log(user);
seterr('')

})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
 seterr(errorMessage)
});

reset()

  }


    return (
        <div>
            <div className="hero    min-h-screen bg-base">
  <div className="hero-content w-2/5 ">
   
    <div className="card  w-full  shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" {...register("displayName")} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email",{required: true})  }className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="url" placeholder="Url" {...register("photoURL")  } className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" {...register("password",{required:true,  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ , minLength:6 }) 
          
        } 
          className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm password" {...register("cpassword",{required: true , validate: (value) =>
            value === watch("password") || "The passwords do not match" }) } className="input input-bordered" />
          <label className="label">
          <a className="label-text-alt link link-hover">
           Already  have an account?
             <Link to='/login' >Log in now</Link>
            </a>          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
     {errors.password?.type === 'pattern' && <p className='text-red-700 text-sm'>Special latter or Capital latter missed</p>}
     {errors.password?.type === 'minLength' && <p className='text-red-700 text-sm'>Password Length should be  more than 6 </p>}
     {errors.cpassword && <span className='text-red-700 text-sm' >{errors.cpassword?.message}</span>}  
        </div>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;