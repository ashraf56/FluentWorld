import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye ,FaRegEyeSlash} from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AuthService } from '../../AuthProvider/AuthProvider';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
let {Login}=useContext(AuthService)
  const { register, formState: { errors }, handleSubmit ,reset ,watch } = useForm();
  const onSubmit = data => {
console.log(data);
Login(data.email,data.password)
.then((userCredential) => {
  const user = userCredential.user;
console.log(user);
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});
}

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" {...register("email")}className="input input-bordered" />
        </div>
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="input-group">
          <input type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password")}
          />
          <span className='bg-white border ' onClick={togglePasswordVisibility}>
        {showPassword ?  <FaRegEyeSlash/>:<FaRegEye/>}
      </span> 
      </div>

          <label className="label">
           <a className="label-text-alt link link-hover">
            Don't have an account?
             <Link to='/signup' >Sign up now</Link>
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;