import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/programmer.json';

const About = () => {
  return (
    <div class="About-contents">
        <div className=" flex items-center justify-center min-screen mb-20" style={{ height: '50vh' }} id='about'>
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
            <div className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <h2 className="m-16 mt-16 pt-20 text-4xl font-bold text-blue-500">
      Tech Stack
    </h2>

    <div className="grid items-center gap-6 grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto">
      <div className="mb-12 md:mb-0">
        <img src="./images/cSharpicon.png"
          className="px-6 dark:brightness-150 md:px-12 grayscale" alt="C# - logo" />
      </div>

      <div className="mb-12 md:mb-0">
        <img src="./images/react.png"
          className="px-6 dark:brightness-150 md:px-12 grayscale" alt="react - logo" />
      </div>

      <div className="mb-12 md:mb-0">
        <img src="./images/tailwind.png"
          className="px-6 dark:brightness-150 md:px-12 grayscale" alt="Tailwind - logo" />
      </div>

      <div className="mb-12 md:mb-0">
        <img src="./images/unity.png"
          className="px-6 dark:brightness-150 md:px-12 grayscale" alt="unity - logo" />
      </div>

      <div className="mb-12 md:mb-0 hidden md:block">
     
      </div>
      
      <div className="mb-12 md:mb-0">
        <img src="./images/html.png"
          className="px-6 dark:brightness-150 md:px-12 grayscale mb-20" alt="html - logo" />
      </div>
      
      <div className="mb-12 md:mb-0 ">
        <img src="./images/css.png"
          className="px-6 dark:brightness-150 md:px-12 grayscale mb-20" alt="Css - logo" />
      </div>

      <div className="mb-12 md:mb-0 hidden md:block" >
       
      </div>
    </div>
  </section>
</div>
            </div>
   
   
  );
};

export default About;
