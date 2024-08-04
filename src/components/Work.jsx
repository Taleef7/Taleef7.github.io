/* eslint-disable react/prop-types */
// src/components/Work.jsx

// import React from 'react';
import timelineElements from '../assets/timelineElements';
import schoolIcon from '../assets/school.svg';
import workIcon from '../assets/work.svg';

// Define the WorkCard component within the same file
const WorkCard = ({ element, isLeft }) => {
  // const color = `bg-${element.color}-500`;

  return (
    <div className={`flex ${isLeft ? 'flex-row-reverse' : ''} items-center w-full mb-12 relative`}>
      {/* Card Content */}
      <div className="w-full sm:w-6/12 m-1 p-4">
        <div className="group relative bg-white shadow-lg rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="p-4">
            <div className="flex items-center mb-2">
              <img
                src={element.icon === 'school' ? schoolIcon : workIcon}
                alt="icon"
                className="w-10 p-1 rounded-lg"
              />
              <div className="ml-2 text-xl font-bold text-secondary">{element.title}</div>
            </div>
            <div className="text-gray-400 mb-4">{element.location}</div>
            <p className="text-background mb-4">{element.description}</p>
            <div className="flex flex-wrap mb-4">
              {element.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-background rounded-lg px-2 py-1 text-xs m-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              className={`bg-secondary text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`} href={element.link} target="_blank" rel="noopener noreferrer"
            >
              {element.buttonText}
            </a>
          </div>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="hidden sm:flex sm:w-1/16 items-center justify-center relative">
        <div className="bg-gray-400 h-full w-0.5 absolute left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Date */}
      <div className={`w-full sm:w-5/12 p-4 text-center sm:text-${isLeft ? 'right' : 'left'} flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
        <div
          className="inline-block bg-white px-4 py-1 rounded-lg text-background"
          style={{
            marginLeft: isLeft ? '0.5rem' : '0', // Adjust spacing for left dates
            marginRight: isLeft ? '0' : '0.5rem' // Adjust spacing for right dates
          }}
        >
          {element.date}
        </div>
      </div>
    </div>
  );
};

// Work component rendering the WorkCard
export default function Work() {
  return (  
    <section id='work'>
      <div className="flex flex-col justify-center items-center bg-background text-white text-base pb-8 sm:text-lg">
        <h2 className="text-4xl font-bold text-gray-200 text-center mb-8 mt-8">Experience</h2>
        <div className="relative w-full sm:w-3/4 lg:w-2/3">
          <div className="absolute w-0.5 h-full bg-gray-400 left-1/2 transform -translate-x-1/2"></div>
          {timelineElements.map((element, index) => (
            <WorkCard key={element.id} element={element} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
