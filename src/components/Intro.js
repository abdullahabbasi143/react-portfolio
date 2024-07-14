import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLaravel, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Intro() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:mr-2">
          <h1 className="text-black text-4xl font-bold md:text-5xl mb-4 md:mb-5">
            Hii Abdullah!
          </h1>
          <p className="text-black text-lg md:text-xl">
            I am a Junior Web Developer with one year of experience in both front-end and back-end technologies. Over the past year, I have worked on various projects, gaining hands-on experience in building and maintaining websites and web applications.
          </p>
          <div className="mt-4">
            <p className="text-black text-lg md:text-xl mb-4">Technologies I work with:</p>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faHtml5} size="3x" className="text-orange-600" />
              <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-blue-500" />
              <FontAwesomeIcon icon={faReact} size="3x" className="text-blue-500" />
              <FontAwesomeIcon icon={faLaravel} size="3x" className="text-red-500" />
              <FontAwesomeIcon icon={faCode} size="3x" className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 md:mt-0 md:ml-4">
          <div className="w-70 h-72 md:w-80 md:h-80 overflow-hidden">
            <img src="/images/Profie.png" alt="Profile" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;