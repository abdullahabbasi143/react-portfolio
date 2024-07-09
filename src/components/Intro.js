import React from 'react';


function Intro() {
  return (
<div className="h-screen w-full">
      <div className="container mx-auto px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row  items-center justify-center h-full ">
          <div className="flex flex-col items-center justify-center  md:mr-2">
            <h1 className="text-black text-4xl font-bold md:text-5xl mb-4 md:mb-5 text-center md:text-left">
              Hii  Abdullah !
            </h1>
            <p className="text-black text-lg  md:text-xl text-center md:text-left">
            I am a Junior Web Developer with one year of experience in both front-end and back-end technologies. Over the past year, I have worked on various projects, gaining hands-on experience in building and maintaining websites and web applications.
            </p>
          </div>
          <div className="rounded-full w-full max-w-xs md:max-w-md overflow-hidden  mt-6 md:mt-0 md:ml-4">
            <img src="/images/Profie.png" alt="Profile" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );

  


}

export default Intro