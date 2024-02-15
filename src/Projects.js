import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Akumi and the Forbidden Language',
      description: 'A 2D Isometric Role Playing Android Game genre that will easily lead newbies and interested individuals through the game—educating people on how to code by having them play the game and read the story with instructions so they can completely understand the game mechanics.',
      imageUrl: '/images/akumiTitle.png',
      link: 'github.com',
      linkSource: 'https://drive.google.com/file/d/1EAfCtlXkL-0-JWxXTEf0CvFS2ggWlCXF/view?usp=sharing',
      icons:'fa-brands fa-unity ',
    },
    {
      title: 'Schedule-Generator',
      description: 'Schedule-Generator is a project developed by Accenture Training Academy in collaboration with STI Global City. It allows you to create schedules for professors, rooms, and other entities.',
      imageUrl: '/images/schedule-generator.png',
      link: '#BrokenLink',
      linkSource: 'https://github.com/MisoS0up/Schedule-Generator',
    },
    {
      title: 'Pendora',
      description: 'A Sample E-commerce website that sells Jewelries. It is a project developed by Accenture Bootcamp',
      imageUrl: '/images/misosoup.png',
      link : '#project',
      linkSource: 'https://pendora-mvc.azurewebsites.net/',
    },
    {
      title: 'NBI Clearance System',
      description: 'A Sample NBI Clearance System that allows you to register and apply for NBI Clearance. It is a project developed by Accenture Bootcamp',
      imageUrl: '/images/misosoup.png',
      link : '#project',
      linkSource: 'https://nbi-mvc.azurewebsites.net/',
    },
    
  ];

  return (
    <div className="Projects-contents flex flex-col items-center justify-start min-h-screen mt-20 " id='project'>
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-500 mt-20">Projects</h1>
        <h1 className="text-4sm font-bold mb-4 text-gray-600">Projects made by me! </h1>
        {projects.map((project, index) => (
             <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 mt-20">
             <div className="flex flex-col md:flex-row">
               <div className="w-full md:w-51 h-48">
                 <img className="w-full h-full object-cover transition duration-500 hover:scale-125" src={project.imageUrl} alt="Card" />
               </div>
               <div className="flex flex-col justify-between p-4">
                 <div>
                   <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                   <p className="text-gray-600 flex-grow">{project.description}</p>
                 </div>
                 <div className='text-3xl md:text-4xl pl-28'>
         
                  <i class={project.icons} aria-hidden="true"> </i>
               
                  </div>
                 
                 <div className="flex mt-4">
                   <a href={project.link} className=" text-gray-00 font-bold py-2 px-4 rounded hover:text-blue-600 transition duration-300 ease-in-out mr-2">
                     Code <i className="fa fa-github" aria-hidden="true"></i>
                   </a>
                   <a href={project.linkSource} className="text-gray-800 font-bold  py-2 px-4 rounded hover:text-blue-600 transition duration-300 ease-in-out">
                     External Link <i className="fa fa-external-link" aria-hidden="true"></i>
                   </a>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default Projects;