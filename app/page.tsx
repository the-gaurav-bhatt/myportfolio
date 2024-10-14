"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Briefcase,
  User,
  Cpu,
  Send,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [themeIndex, setThemeIndex] = useState(0);
  const [showThemes, setShowThemes] = useState(false);
  const experiences = [
    {
      title: "Backend Intern",
      company: "NepseTrading",
      period: "Jan 2024 - July 2024",
      description: [
        "Contributed to backend development supporting 48,000 registered users",
        "Enhanced security with JWT-based authentication and RBAC",
        "Built real-time stock price alert system using Socket.io",
      ],
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Nepalaya Bazar",
      period: "Oct 2023 - Jan 2024",
      description: [
        "Architected marketplace using React.js and Next.js",
        "Designed and optimized API endpoints with Node.js and Express.js",
        "Improved performance using Next.js SSR",
      ],
    },
  ];

  const projects = [
    {
      name: "A+ Pathshala",
      description: "Headless API for course management and content delivery.",
      skills: ["TypeScript", "MongoDB", "Express", "Next.js", "AWS S3"],
      summary:
        "Built a comprehensive e-learning platform with video streaming capabilities and a custom CMS.",
      image: "/image.png",
      liveLink: "https://aplus-pathshala.com",
    },
    {
      name: "Ticketing-App",
      description:
        "Microservices-based ticketing system with custom npm packages.",
      skills: ["Node.js", "TypeScript", "Docker", "Microservices"],
      summary:
        "Engineered a scalable ticketing system with services for authentication, product management, and order processing.",
      image: "/api.png",
      liveLink: "https://ticketing-app-demo.com",
    },
    {
      name: "MicroGraph-Backend-System",
      description: "Microservices architecture with GraphQL gateway.",
      skills: ["Node.js", "Express", "GraphQL", "RabbitMQ"],
      summary:
        "Developed a robust backend system with independent services for User, Product, and Order management.",
      image: "/micrograph.png",
      liveLink: "https://micrograph-demo.com",
    },
    {
      name: "Bidding Engine",
      description: "Real-time collaborative bidding platform.",
      skills: ["Node.js", "Socket.io", "MongoDB", "Next.js"],
      summary:
        "Created a dynamic bidding platform allowing real-time collaboration and live leaderboards.",
      image: "/bidding.png",
      liveLink: "https://bidding-engine-demo.com",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "C++", "Python", "Java"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "HTML", "CSS", "Tailwind"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "GraphQL", "Socket.io"],
    },
    { category: "Databases", items: ["MongoDB", "MySQL"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
  ];

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      let currentSection = "home";
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".theme-selector")) {
        setShowThemes(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const themes = [
    {
      name: "Dark Blue to Black",
      classes: "bg-gradient-to-br from-blue-900 via-gray-900 to-black",
    },
    {
      name: "Teal to Blue",
      classes: "bg-gradient-to-br from-teal-700 via-blue-800 to-gray-900",
    },
    {
      name: "Gray to Black",
      classes: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    },
    {
      name: "Green to Blue",
      classes: "bg-gradient-to-br from-green-700 via-blue-800 to-indigo-900",
    },
    {
      name: "Navy to Purple",
      classes: "bg-gradient-to-br from-navy-800 via-purple-800 to-black",
    },
  ];
  return (
    <div className={`min-h-screen ${themes[themeIndex].classes} text-white`}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white bg-opacity-10 p-4">
        <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-2 md:space-y-0">
          {["home", "about", "experience", "projects", "skills", "contact"].map(
            (section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${
                    activeSection === section ? "text-yellow-300" : "text-white"
                  } hover:text-yellow-200 transition-colors`}
                >
                  {section}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
      {/* Theme Selector */}
      <div className="fixed top-4 right-4 md:top-20 md:right-20 z-50 theme-selector">
        <div className="relative inline-block text-left">
          <button
            className="flex items-center px-4 py-2 bg-gray-800 bg-opacity-70 text-white rounded hover:bg-gray-700 focus:outline-none"
            onClick={() => setShowThemes(!showThemes)}
          >
            Select Theme
          </button>
          {showThemes && (
            <div className="mt-2 origin-bottom-right absolute right-0 w-40 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {themes.map((theme, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setThemeIndex(index);
                      setShowThemes(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      themeIndex === index
                        ? "bg-gray-700 text-blue-400"
                        : "text-white"
                    } hover:bg-gray-700 hover:text-blue-300`}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center p-4 md:p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center container mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Gaurav Datt Bhatt</h1>
          <p className="text-xl md:text-2xl">
            Full Stack Engineer | Problem Solver | Innovator
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-yellow-300"
            >
              <Mail />
            </a>
            <a href="tel:+918431521694" className="hover:text-yellow-300">
              <Phone />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto backdrop-blur-lg bg-white bg-opacity-10 p-6 md:p-8 rounded-xl shadow-lg space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <User className="mr-2" /> About Me
          </h2>
          <p className="text-base md:text-lg">
            I'm a passionate Full Stack Engineer currently pursuing my
            Bachelor's degree at NMIT college in Bengaluru. With a strong
            foundation in computer science and hands-on experience in modern
            technologies, I specialize in developing scalable and responsive web
            applications using TypeScript, React, Node.js, and Python.
          </p>
          <p className="text-base md:text-lg">
            My journey in tech has led me to work on diverse projects, from
            e-learning platforms to real-time bidding systems. I'm constantly
            seeking new challenges and opportunities to expand my skillset and
            contribute to innovative solutions.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto backdrop-blur-lg bg-white bg-opacity-10 p-6 md:p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-2" /> Experience
          </h2>
          <div className="relative space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-stretch space-x-0 md:space-x-4 space-y-4 md:space-y-0"
              >
                <div className="flex md:flex-col items-center">
                  <div className="rounded-full h-8 w-8 bg-yellow-500 text-white flex items-center justify-center font-bold z-10">
                    {index + 1}
                  </div>
                  {
                    <div className="w-0.5 bg-yellow-500 flex-grow my-2 hidden md:block"></div>
                  }
                </div>
                <div className="backdrop-blur-md bg-white bg-opacity-5 p-4 rounded-lg flex-grow space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400">{exp.company}</p>
                  <p className="text-sm text-gray-300">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto backdrop-blur-lg bg-white bg-opacity-10 p-6 md:p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <Code className="mr-2" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white bg-opacity-5 p-6 rounded-lg flex flex-col space-y-4"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-lg md:text-xl font-semibold">
                  {project.name}
                </h3>
                <p className="text-sm">{project.description}</p>
                <p className="text-sm">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center bg-yellow-400 text-gray-800 py-2 rounded hover:bg-yellow-300 transition-colors"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto backdrop-blur-lg bg-white bg-opacity-10 p-6 md:p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <Cpu className="mr-2" /> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white bg-opacity-5 p-4 rounded-lg space-y-4"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto backdrop-blur-lg bg-white bg-opacity-10 p-6 md:p-8 rounded-xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <Send className="mr-2" /> Contact Me
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-white bg-opacity-20 placeholder-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-white bg-opacity-20 placeholder-gray-300"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded bg-white bg-opacity-20 placeholder-gray-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 py-2 rounded hover:bg-yellow-300 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
