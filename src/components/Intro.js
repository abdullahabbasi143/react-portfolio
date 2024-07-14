import React from 'react';


function Intro() {
  return (

    <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col md:mr-2">
            <h1 className="text-black text-4xl font-bold md:text-5xl mb-4 md:mb-5 ">
              Hii  Abdullah !
            </h1>
            <p className="text-black text-lg  md:text-xl ">
            I am a Junior Web Developer with one year of experience in both front-end and back-end technologies. Over the past year, I have worked on various projects, gaining hands-on experience in building and maintaining websites and web applications.
            </p>
          </div>
          <div className="flex justify-center items-center mt-6 md:mt-0 md:ml-4">
  <div className="rounded-full w-70 h-72 md:w-80 md:h-80 overflow-hidden">
    <img src="/images/portfolio-react.jfif" alt="Profile" className="w-full h-full " />
  </div>
</div>
        </div>
      </div>
 
  );

}

export default Intro
