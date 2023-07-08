import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit ametsdfjalksjdal, consectetur adipiscing elit.',
      imageUrl: '/images/misosoup.png',
      link: 'https://example.com/project1',
      linkSource: 'github.com',
    },
    {
      title: 'Project 2',
      description: 'Duis ac pulvinar turpis. Vivamus maximus volutpat mi eget semper.',
      imageUrl: '/images/misosoup.png',
      link: 'https://example.com/project2',
      linkSource: 'github.com',
    },
    {
      title: 'Project 3',
      description: 'Suspendisse dignissim metus et urna vulputate, ac dignissim felis dapibus.',
      imageUrl: '/images/misosoup.png',
      link: 'https://example.com/project3',
      linkSource: 'github.com',
    },
    
  ];

  return (
    <div className="Projects-contents flex flex-col items-center justify-start min-h-screen mt-20" id='project'>
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-500 mt-20">Projects</h1>
        <h1 className="text-4sm font-bold mb-4 text-gray-600">Projects made by me! </h1>
        {projects.map((project, index) => (
             <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 mt-20">
             <div className="flex flex-col md:flex-row">
               <div className="w-full md:w-48 h-48">
                 <img className="w-full h-full object-cover" src={project.imageUrl} alt="Card" />
               </div>
               <div className="flex flex-col justify-between p-4">
                 <div>
                   <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                   <p className="text-gray-600 flex-grow">{project.description}</p>
                 </div>
                 <div className="flex mt-4">
                   <a href={project.link} className=" text-gray-800 font-bold py-2 px-4 rounded hover:text-blue-600 transition duration-300 ease-in-out mr-2">
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