/* eslint-disable react/prop-types */
// src/components/Projects.jsx

// import React from 'react';

// Sample project data
const projectData = [
  {
    image: '/Project1.png', // Replace with your project image path
    title: 'Employee Attendance and Leave Management System',
    description: 'Created an efficient system for tracking employee attendance and leave, addressing the need for automation and accuracy',
    techLogos: [
      '/mongodb.png', // Replace with your technology logo paths
      '/expressjs.png',
      '/react.png',
      '/nodejs.png',
    ],
    githubLink: 'https://github.com/Haris-Asghar/CS-360-Project', // Replace with your GitHub repo link
  },
  {
    image: '/Project2.png',
    title: 'Authorship Attribution using Twitter Data',
    description: 'Authorship attribution of thousands of tweets from influential twitter handles, using a variety of models in the process',
    techLogos: [
      '/pandas.png',
      '/numpy.png',
    ],
    githubLink: 'https://github.com/Taleef7/Authorship-Attribution',
  },
  // Add more projects as needed
];

// src/components/Projects.jsx
// import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
// import '../styles/Projects.css'; // Import the CSS file for transition styles

const ProjectCard = ({ image, title, description, techLogos, githubLink }) => {
  return (
    <div className="group relative bg-white shadow-lg rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl fade-in">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-3xl" />
        <div className="absolute top-0 right-0 m-2">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <svg
              className="w-7 h-7 text-slate-500 hover:text-secondary transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.165c-3.338.725-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.998.107-.775.42-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.311.467-2.382 1.235-3.222-.124-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.398 3.005-.403 1.021.005 2.048.137 3.006.403 2.292-1.552 3.299-1.23 3.299-1.23.653 1.653.242 2.876.118 3.18.77.84 1.234 1.911 1.234 3.222 0 4.609-2.803 5.624-5.475 5.921.431.372.816 1.103.816 2.222v3.293c0 .32.193.694.801.576C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-background mb-4">{description}</p>
        <div className="flex space-x-2">
          {techLogos.map((logo, index) => (
            <img key={index} src={logo} alt="Tech logo" className="w-8 h-8" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const isVisible = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className={`bg-light text-secondary py-16 fade-in ${isVisible ? 'fade-in-visible' : ''}`}>
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
          {/* <p className="text-lg mt-4">Some of my recent work</p> */}
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              techLogos={project.techLogos}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
