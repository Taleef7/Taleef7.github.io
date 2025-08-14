import { 
    FaReact, FaNodeJs, FaDocker, FaGit, FaAws, FaLinux, FaQuestionCircle, FaTools, FaGithub 
  } from "react-icons/fa"
  import { 
    SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiGraphql, SiExpress, 
    SiPython, SiDjango, SiPostgresql, SiMongodb, SiNginx, 
    SiPostman, SiFigma, SiJest, SiVercel 
  } from "react-icons/si"
  import useIntersectionObserver from '../hooks/useIntersectionObserver'
  
  const skillIcons = {
    "React": FaReact,
    "Next.js": SiNextdotjs,
    "TypeScript": SiTypescript,
    "TailwindCSS": SiTailwindcss,
    "Redux": SiRedux,
    "GraphQL": SiGraphql,
  
    "Node.js": FaNodeJs,
    "Express": SiExpress,
    "Python": SiPython,
    "Django": SiDjango,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
  
    "Docker": FaDocker,
    "AWS": FaAws,
    "CI/CD": FaTools, // Or pick another icon you prefer
    "Git": FaGit,
    "Linux": FaLinux,
    "Nginx": SiNginx,
  
    "Postman": SiPostman,
    "Figma": SiFigma,
    "Jest": SiJest,
    "GitHub": FaGithub,
    "Vercel": SiVercel,
  }
  
  // Example data
  const technologies = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
    },
    {
      category: "Tools",
      skills: ["Postman", "Figma", "Jest", "GitHub", "Vercel"],
    },
  ]
  
  export default function TechStack() {
    const [isVisible, elementRef] = useIntersectionObserver({ threshold: 0.1 })

    return (
      <section id="tech-stack" className="py-16 bg-black text-white">
        <div ref={elementRef} className={`container mx-auto px-4 text-center fade-in ${isVisible ? 'fade-in-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Tech Stack</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {technologies.map((tech) => (
              <div 
                key={tech.category}
                className="p-6 bg-neutral-800 rounded-lg shadow hover:shadow-xl transition-shadow text-center"
              >
                <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
                
                {/* Grid for icons (up to 5 per row) */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
                  {tech.skills.map((skill) => {
                    const IconComponent = skillIcons[skill] || FaQuestionCircle
                    return (
                      <span
                        key={skill}
                        title={skill} // Shows a tooltip with the skill name on hover
                        className="flex items-center justify-center 
                                   w-20 h-20 rounded-full 
                                   bg-background/90 text-white 
                                   ring-1 ring-inset ring-white/70 
                                   hover:bg-secondary transition-colors 
                                   cursor-pointer"
                      >
                        <IconComponent className="w-12 h-12" />
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  