// import React from 'react';
// import resumePreview from '../../src/assets/preview.png'; // Assuming this path for now, make sure it is correct

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-300 text-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Resume</h2>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <ul>
            <li className="mb-4">
              <h4 className="text-xl font-bold">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-600">University Name, Graduation Year</p>
              <p className="text-gray-600">GPA: 3.8/4.0</p>
            </li>
            {/* <!-- Add more education items here --> */}
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <ul>
            <li className="mb-4">
              <h4 className="text-xl font-bold">Certification Name</h4>
              <p className="text-gray-600">Issuing Organization, Issue Date</p>
            </li>
            {/* <!-- Add more certification items here --> */}
          </ul>
        </div>
        <div className="text-center">
            {/* <img src={resumePreview} alt="Resume Preview" className="mx-auto mb-6 shadow-lg rounded-lg w-68 h-32" /> */}
          <a href="path/to/your/resume.pdf" download className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
