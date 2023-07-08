import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/hi.json';

const Home = () => {
  return (
    <div className="Home-contents flex flex-col items-center justify-center min-h-screen " id='home'>
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="text-center md:text-left md:mr-8">
            <h1 className="text-5xl font-bold text-gray-700">
              Welcome to My Portfolio <span role="img" aria-label="Waving Emoji">👋</span>
            </h1>
            <p className="mt-4 text-gray-600">
              I am <i>Dan Joshua Naing</i>, a passionate developer showcasing my skills and projects. <i>Based in Manila, Philippines</i> 
            </p>
            <p className="mt-4">
  <a href="https://github.com/MisoS0up" target="_blank" rel="noopener noreferrer" className="mr-4">
    <i className="fab fa-github-square text-3xl md:text-4xl" aria-hidden="true"></i>
  </a>
  <a href="https://www.linkedin.com/in/dan-joshua-naing-39870a266/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin text-3xl md:text-4xl" aria-hidden="true"></i>
  </a>
</p>

          </div>
          <div className="ml-auto">
            <div style={{ width: '400px', height: '400px' }}>
              <Lottie animationData={animationData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
