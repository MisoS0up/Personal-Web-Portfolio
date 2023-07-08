import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/programmer.json';

const About = () => {
  return (
    <div className="About-contents flex items-center justify-center min-screen mb-20" style={{ height: '50vh' }} id='about'>
      <div className="max-w-3xl mx-auto px-7">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mr-10 mb-6 md:mb-0">
            <div style={{ width: '300px', height: '300px' }}>
              <Lottie animationData={animationData} />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4 text-blue-500">About Me</h1>
            <p className="text-lg text-gray-600 text-justify">
              Hi there! I'm <b>Dan Joshua Naing</b>, a fresh graduate of BSIT from STI Global City. I have a strong foundation in C#, Java, Game Development, HTML, CSS, React, Tailwind, and SQL. I am constantly learning and seeking new challenges to enhance my skills and contribute to innovative projects. Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
