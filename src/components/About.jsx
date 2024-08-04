// src/components/About.jsx
// import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
// import '../styles/About.css'; // Import the CSS file for transition styles

const About = () => {
  const isVisible = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className={`snap-section bg-background text-white py-16 fade-in ${isVisible ? 'fade-in-visible' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-bold">About</h1>
        </header>

        <div className="flex flex-col md:flex-row items-center">
          {/* Photo */}
          <div className="md:w-1/2 mb-8 md:mb-8">
            <img
              src="../../Public/photo.jpg" // Replace with the path to your photo
              alt="Taleef Tamsal"
              className="w-full h-auto rounded-full shadow-lg"
            />
          </div>

          {/* Text Bubble */}
          <div className="md:w-1/2 md:ml-4 p-6 relative bg-white text-secondary rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p>
              Hello! I&apos;m Taleef Tamsal, a dedicated and ambitious software engineer studying Masters in Computer Science from Purdue University Fort Wayne (PFW). I graduated in June 2024 with a Bachelor of Science in Computer Science from the Lahore University of Management Sciences (LUMS), where I not only honed my technical skills but also cultivated a deep appreciation for innovative problem-solving and cutting-edge technology.
            </p>
            <br />
            <p>
            I am particularly passionate about leveraging machine learning and data analytics for real-world applications. Additionally, I have explored the intersection of blockchain and healthcare through a smart contract-based patient consent management system. My approach to software development is characterized by meticulous attention to detail, a commitment to collaborative teamwork, and an unwavering drive for innovation. 
            </p>
            {/* Resume Download Button */}
            <a
              href="../../Public/resume.pdf" // Replace with the path to your CV/Resume
              download
              className="mt-6 inline-block hover:text-white bg-secondary focus:bg-blue-800 text-background py-2 px-4 rounded-lg shadow hover:bg-secondary-dark transition-transform transform hover:scale-105 hover:-translate-y-1 duration-200"
            >
              Download CV/Resume
            </a>
            {/* Text bubble arrow */}
            <div className="absolute top-0 left-0 transform rotate-90 -translate-y-3 translate-x-10 w-0 h-0 border-t-8 border-r-8 border-b-8 border-t-transparent border-b-transparent border-r-secondary md:top-1/2 md:-translate-y-1/2 md:transform-none md:border-l-8 md:border-r-0 md:border-l-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
