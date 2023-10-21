import React from 'react';

const About = () => {
  let img= 'https://anschool.net/en/common/img/ikebukuro/slide02.jpg'
    return (
        <div>
            <div className="hero w-full  min-h-screen " style={{backgroundImage:`url(${img})` , backgroundAttachment:'fixed',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    
    <div className="">
      <h1 className="mb-5 text-5xl text-white text-center font-bold uppercase">About us</h1>
      <h1 className="mb-5 text-white  text-2xl text-center font-bold uppercase">Building Bridges through Language Learning</h1>

      <div className='max-w-5xl mx-auto'>
        <p className="mb-5 text-center text-white  ">At FluentWorld, we believe that language learning is an empowering journey that opens doors to new opportunities, bridges cultural gaps, and enriches lives. With a passion for languages and a commitment to excellence, we are dedicated to helping individuals of all ages and backgrounds unlock their language potential.
        Our experienced team of language instructors brings expertise and enthusiasm to every class, providing a dynamic and engaging learning experience. We offer a wide range of language courses tailored to meet the needs and goals of our diverse student community. Whether you're a beginner or an advanced learner, we provide a supportive and immersive environment that nurtures your language skills.
        At FluentWorld, we embrace a communicative and interactive approach to language learning. Our curriculum focuses not only on grammar and vocabulary but also on developing practical language skills for real-world contexts. We believe that language learning goes beyond textbooks, and that's why we offer cultural immersion programs, conversation practice sessions, and opportunities for language exchanges to enhance your linguistic and cultural understanding.

We are dedicated to providing personalized attention and guidance to our students. We understand that each learner is unique, and we tailor our courses to cater to individual learning styles and goals. Our supportive community of language enthusiasts fosters an environment of collaboration and growth, encouraging you to take risks and embrace the joy of language learning.

Join us at FluentWorld and embark on a transformative language journey. Let us be your trusted partner in acquiring fluency, expanding your horizons, and embracing the world of languages. Together, let's unlock your language potential and embark on a lifelong love affair with languages
        </p>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default About;