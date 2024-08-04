import { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Valid email is required';
      valid = false;
    }

    if (!formData.message) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section id='contact'>
      <div className="bg-light text-white py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-0.75 text-secondary" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded-md bg-background border border-gray-600 focus:border-secondary focus:outline-secondary"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-0.75 text-secondary" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded-md bg-background border border-gray-600 focus:border-secondary focus:outline-secondary"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-0.75 text-secondary" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 rounded-md bg-background border border-gray-600 focus:border-secondary focus:outline-secondary"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full p-2 text-background bg-secondary rounded-md font-medium hover:bg-blue-800 hover:text-white focus:outline-none transition duration-300"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mt-16 mb-4 text-secondary">Connect with me</h3>
              <div className="flex justify-center space-x-4">
                
                <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-blue-500 transition duration-300">
                  <FaLinkedin size="2em" />
                </a>
                <a href="https://github.com/Taleef7" className="text-gray-400 hover:text-black transition duration-300">
                  <FaGithub size="2em" />
                </a>
                <a href="https://www.facebook.com/taleef.tamsal/" className="text-gray-400 hover:text-blue-700 transition duration-300">
                  <FaFacebook size="2em" />
                </a>
                <a href="https://www.instagram.com/taleeftamsal/" className="text-gray-400 hover:text-pink-400 transition duration-300">
                  <FaInstagram size="2em" />
                </a>
                <a href="mailto:taleeftamsal@hotmail.com" className="text-gray-400 hover:text-blue-500 transition duration-300">
                  <FaEnvelope size="2em" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
