import React, { useContext } from 'react';
import useADmin from '../../Hooks/useADmin';
import useInstructor from '../../Hooks/useInstructor';
import { AuthService } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCloudDownloadAlt, FaDollarSign, FaSortNumericUp, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CardClasses = ({ac}) => {
    let[isadmin]=useADmin()
    let [isInstructor]=useInstructor()
    let {user}=useContext(AuthService)
    let navigate=useNavigate()
    let  location = useLocation();

let {image,email,name,seat,cname,price, enrolledstudent}=ac
    let selectitem=classes=>{

        if (user && user.email) {
      let addtoCartClass={ user_id:user.uid, class_id:ac._id , image, name , cname, email:user.email, seat ,price   }
          fetch('https://fluent-world-server.vercel.app/cartClass',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(addtoCartClass)
          })
          .then(rs=>rs.json())
          .then(data=>{
            console.log(data);
            if (data.message === 'already exist') {
              Swal.fire({
                position: 'bottom-end',
                icon: 'warning',
                title: 'You Already Added This Class',
                text: 'The class you are trying to add has already been added to the cart.',
                showConfirmButton: false,
                timer: 1500
              });
            } 
          else if (data.insertedId ) {
              Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                title: 'Added to cart',
                showConfirmButton: false,
                timer: 1500
              })
            }
          
          })
       
      } else {
        Swal.fire({
          title: 'Please login to Buy the Classes',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
      }

    return (
        <div>
            <div className="card max-w-full lg:max-w-sm  h-full bg-base-100 shadow-xl">
  <figure>      
        <img src={image}  className="rounded-xl h-60" />
</figure>
  <div className="card-body">
    <h2 className="card-title ">
     {cname}
    </h2><div className="badge badge-neutral lg:text-xs"><p> Available seat: {seat}</p>    </div>
    <p className="card-title"> Instructor Name: {name}</p> 
          <p> Instructor-Email: {email}</p>
          
      

    <div className="card-actions justify-start pb-5">
      <div className="badge badge-outline"> <FaDollarSign/>{price}</div> 
      <div className="badge badge-outline "> <FaUserShield/> <span className='ps-2'>{enrolledstudent}</span>
      </div> 
    </div>
{ isadmin || isInstructor || seat === 0 ? <button className='btn ' disabled  >Select now</button>: <button className='btn btn-outline ' onClick={()=> selectitem(ac)}  >Select now</button>}

  </div>
</div>
        </div>
    );
};

export default CardClasses;