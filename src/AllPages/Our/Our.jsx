import React from 'react';
import imgs1 from '../../assets/milad-fakurian-58Z17lnVS4U-unsplash.jpg'
import { Link } from 'react-router-dom';
const Our = () => {

  return (
    <div className='relative'>

      <div className="hero p-5 backdrop-blur-sm" >

        <div className="hero-content flex-col lg:flex-row  ">
          <div className='w-full lg:w-3/6 max-w-full '>
            <img src={imgs1} className=' max-w-full object-contain shadow-2xl  rounded-2xl ' />
          </div>
          <div className=' w-full lg:w-3/6'>
            <h1 className=' text-base lg:text-3xl  font-extrabold   bg-clip-text text-transparent  bg-gradient-to-r from-[#3952f5]  to-[#fc4778] uppercase' >Why From us?</h1>
            <h4 className=' text-md  font-bold pt-2'>Discover Courses</h4>
            <p className='text-sm md:text-md'>
              Find New Courses: Explore our extensive catalog of courses covering a wide range of subjects. Filter courses based on your interests, level, or specific skills you want to acquire. <br />
              Top Picks: Discover the most popular and highly-rated courses among our users. These top picks are curated to ensure a quality learning experience</p>
            <h4 className=' text-md  font-bold '>Manage Your Courses</h4>
            <p className='text-sm md:text-md'>My Courses: Easily access and manage the courses you're enrolled in. Track your progress, view upcoming assignments, and stay organized in one place. <br />
              Instructor Tools: If you're an instructor, use the instructor tools to create and manage your courses. , update content, and interact with your students seamlessly.</p>
            <h4 className=' text-md  font-bold '>Special Features</h4>
            <p className='text-sm md:text-md'>Collaborative Learning: Engage with your peers through collaborative learning features. Join study groups, participate in forums, and share your knowledge within the community. <br />
              Skill Assessments: Test your knowledge with skill assessments related to your courses. Get feedback on your performance and identify areas for improvement.</p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;