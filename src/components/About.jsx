import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function About() {
  const [isVisible, elementRef] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      id="about"
      className="snap-section bg-black text-white py-10"
    >
      <div ref={elementRef} className={`container mx-auto px-4 fade-in ${isVisible ? 'fade-in-visible' : ''}`}>
        {/* Section Heading */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">About</h1>
        </header>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src="/photo.jpg" // Replace with your actual photo path
              alt="Taleef Tamsal"
              className="w-128 h-128 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Text & Socials */}
          <div className="md:w-2/3">
            {/* <h2 className="text-2xl font-bold mb-4"></h2> */}
            <p className="mb-4 leading-relaxed">
              I'm a Computer Science Master's student at Purdue, and I love creating practical and useful software, especially applications that make everyday life easier. I enjoy taking ideas from concept to reality—whether that’s creating a full-stack web platform or engineering an enterprise AI search engine.
            </p>
            <p className="mb-4 leading-relaxed">
              My current focus is on Natural Language Processing, and for my thesis, I'm exploring the efficiency-robustness tradeoff in PEFT-tuned large language models. I'm excited to find a full-time Software Engineering role before I graduate in May 2026 to join a team that's passionate about technology, innovation, and growth. Please feel free to reach out!
            </p>

            {/* Resume Download Button */}
            <a
              href="/Taleef's_Resume.pdf" // Replace with your actual resume path
              download
              className="inline-block bg-white text-black py-2 px-4 rounded-lg shadow
                         hover:bg-secondary transition-colors duration-300"
            >
              Download CV/Resume
            </a>

            {/* Social Icons Row */}
            <div className="flex space-x-4 mt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ttamsal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size="1.5em" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Taleef7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub size="1.5em" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/taleef.tamsal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                <FaFacebook size="1.5em" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/taleeftamsal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <FaInstagram size="1.5em" />
              </a>

              {/* Email */}
              <a
                href="mailto:taleeftamsal@hotmail.com"
                className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
              >
                <FaEnvelope size="1.5em" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
