import React, { useRef, useEffect, useState } from 'react';

// Fade-in animation utility class
const fadeInClass = 'animate-fadein';

// Optionally, add this to your Tailwind config:
// theme: { extend: { keyframes: { fadein: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } }, animation: { fadein: 'fadein 0.7s ease' } } }

const sectionIds = [
  'home',
  'skills',
  'experience',
  'education',
  'projects',
  'contact',
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="font-bold text-blue-700 text-xl tracking-wide">Kumber Sai Kumar</div>
        <div className="hidden md:flex gap-8">
          {sectionIds.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className="font-medium transition px-2 py-1 rounded text-blue-700 hover:text-blue-900 scroll-smooth"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [imageError, setImageError] = useState(true); // Start with error state to avoid showing dotted image

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          {!imageError ? (
            <div className="relative animate-scale-in">
              <img 
                src="/profile.jpg" 
                alt="Kumber Sai Kumar - Software Engineer" 
                className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-profile border-4 border-white ring-4 ring-blue-100 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                onError={() => setImageError(true)}
                loading="eager"
                style={{ 
                  imageRendering: 'crisp-edges',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
              <div className="absolute inset-0 rounded-full bg-profile-gradient opacity-30"></div>
            </div>
          ) : (
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-profile border-4 border-white ring-4 ring-blue-100 animate-scale-in relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-80"></div>
              <div className="relative z-10 text-white text-6xl font-bold">KS</div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white to-transparent opacity-20"></div>
            </div>
          )}
        </div>
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">Hi, I'm <span className="text-blue-600">Kumber Sai Kumar</span></h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">Full-Stack Software Engineer</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto md:mx-0">Building robust, scalable banking and enterprise solutions with a passion for clean code and modern tech.</p>
          <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start mb-6">
            <a href="/Resume/Resume.pdf" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition" download>Download Resume</a>
            <a href="#projects" className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">View Projects</a>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="mailto:ksai6342@gmail.com" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fas fa-envelope"></i></a>
            <a href="https://linkedin.com/in/KumberSaiKumar" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/KumberSaiKumar" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Technical Expertise</h2>
          <p className="text-gray-500">Comprehensive skill set across enterprise development stack</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend */}
          <div className="bg-blue-50 rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-blue-700 flex items-center mb-4"><i className="fas fa-server mr-2"></i>Backend Development</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><i className="fab fa-java text-yellow-700 mr-2"></i>Java & Java 8</li>
              <li className="flex items-center"><i className="fas fa-leaf text-green-600 mr-2"></i>Spring Boot</li>
              <li className="flex items-center"><i className="fas fa-database text-amber-700 mr-2"></i>Hibernate</li>
              <li className="flex items-center"><i className="fas fa-cube text-pink-600 mr-2"></i>NestJS</li>
            </ul>
          </div>
          {/* Frontend */}
          <div className="bg-blue-50 rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-blue-700 flex items-center mb-4"><i className="fas fa-desktop mr-2"></i>Frontend Development</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><i className="fab fa-react text-cyan-400 mr-2"></i>ReactJS</li>
              <li className="flex items-center"><i className="fab fa-js text-yellow-400 mr-2"></i>JavaScript</li>
              <li className="flex items-center"><i className="fab fa-js text-blue-500 mr-2"></i>TypeScript</li>
              <li className="flex items-center"><i className="fas fa-layer-group text-blue-700 mr-2"></i>Material UI</li>
            </ul>
          </div>
          {/* Database & Cloud */}
          <div className="bg-blue-50 rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-blue-700 flex items-center mb-4"><i className="fas fa-cloud mr-2"></i>Database & Cloud</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><i className="fas fa-database text-blue-800 mr-2"></i>MySQL</li>
              <li className="flex items-center"><i className="fas fa-database text-green-600 mr-2"></i>MongoDB</li>
              <li className="flex items-center"><i className="fab fa-microsoft text-blue-500 mr-2"></i>Azure Platform</li>
              <li className="flex items-center"><i className="fab fa-docker text-blue-400 mr-2"></i>Docker & CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Professional Experience</h2>
          <p className="text-gray-500">Award-winning career in banking technology and enterprise development</p>
        </div>
        <div className="relative border-l-4 border-blue-200 pl-8">
          {/* Software Engineer Level-2 */}
          <div className="mb-12 relative">
            <span className="absolute -left-5 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></span>
            <div className="bg-blue-50 rounded-xl shadow p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-blue-700 flex items-center"><i className="fas fa-laptop-code mr-2"></i>Software Engineer Level-2</h3>
                <span className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-medium mt-2 md:mt-0">July 2023 - Present</span>
              </div>
              <h4 className="text-blue-500 font-semibold mb-2 flex items-center"><i className="fas fa-building mr-2"></i>Hexaware Technologies</h4>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
                <li>Engineered high-volume batch processing module handling trade insertions with optimized 100-record commit intervals</li>
                <li>Architected robust recovery mechanism reducing manual intervention by 90% for system failures</li>
                <li>Designed Direct Trade Clearing (DTC) logic implementing complex business rules and validation checks</li>
                <li>Created end-of-day synchronization jobs maintaining 100% data consistency across distributed systems</li>
                <li>Built broker eligibility validation system ensuring regulatory compliance for FRB-eligible brokers</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Java</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Spring Boot</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Hibernate</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">MySQL</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Batch Processing</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">REST APIs</span>
              </div>
            </div>
          </div>
          {/* Associate Software Engineer */}
          <div className="mb-12 relative">
            <span className="absolute -left-5 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></span>
            <div className="bg-blue-50 rounded-xl shadow p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-blue-700 flex items-center"><i className="fas fa-code mr-2"></i>Associate Software Engineer</h3>
                <span className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-medium mt-2 md:mt-0">March 2022 - July 2023</span>
              </div>
              <h4 className="text-blue-500 font-semibold mb-2 flex items-center"><i className="fas fa-building mr-2"></i>Hexaware Technologies</h4>
              <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
                <li>Architected scalable web application implementing full-stack solution using modern frameworks</li>
                <li>Automated development workflow using NestJS and Yeoman Generator, reducing development time by 60%</li>
                <li>Designed comprehensive frontend and REST APIs enhancing user experience across the platform</li>
                <li>Implemented secure authentication mechanisms using NestJS and React for robust access control</li>
                <li>Built dynamic CRUD operations for Micro Reference Architectures (MRAs) using ReactJS with TypeScript</li>
                <li>Configured CI/CD pipelines for all MRAs ensuring seamless deployment and continuous integration</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">NestJS</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">ReactJS</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">TypeScript</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">OpenAPI</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">CI/CD</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Certifications & Recognition</h2>
          <p className="text-gray-500">Professional certifications and outstanding achievements</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Azure Fundamentals */}
          <div className="bg-blue-50 rounded-xl shadow p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-2xl mb-4 mx-auto"><i className="fas fa-cloud"></i></div>
            <h3 className="text-lg font-semibold text-blue-700 mb-1">Azure Fundamentals AZ-900</h3>
            <h4 className="text-blue-500 font-medium mb-1">Microsoft Azure Certification</h4>
            <p className="text-gray-500 text-sm mb-1">Microsoft</p>
            <p className="text-gray-400 text-xs mb-2">Certified</p>
            <p className="text-gray-600 text-sm">Comprehensive understanding of Azure cloud services, architecture, and best practices for cloud deployment and management in enterprise environments.</p>
          </div>
          {/* Rockstar of the Month */}
          <div className="bg-yellow-50 rounded-xl shadow p-6 border-l-4 border-yellow-400">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-white text-2xl mb-4 mx-auto"><i className="fas fa-trophy"></i></div>
            <h3 className="text-lg font-semibold text-yellow-700 mb-1">Rockstar of the Month</h3>
            <h4 className="text-yellow-600 font-medium mb-1">Outstanding Performance Award</h4>
            <p className="text-gray-500 text-sm mb-1">Hexaware Technologies</p>
            <p className="text-gray-400 text-xs mb-2">2023-2024</p>
            <p className="text-gray-600 text-sm">Recognized for delivering high-quality functionality within strict deadlines, ensuring minimal cosmetic changes after client testing, and successfully meeting all sprint objectives.</p>
          </div>
          {/* Pinnacle Award */}
          <div className="bg-blue-50 rounded-xl shadow p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-2xl mb-4 mx-auto"><i className="fas fa-award"></i></div>
            <h3 className="text-lg font-semibold text-blue-700 mb-1">Pinnacle Award</h3>
            <h4 className="text-blue-500 font-medium mb-1">Excellence in Teamwork & Delivery</h4>
            <p className="text-gray-500 text-sm mb-1">Hexaware Technologies</p>
            <p className="text-gray-400 text-xs mb-2">2023-2024</p>
            <p className="text-gray-600 text-sm">Outstanding contributions, dedication, and teamwork in delivering key business initiatives with exceptional quality and client satisfaction.</p>
          </div>
          {/* Oracle Certified Foundations Associate */}
          <div className="bg-amber-50 rounded-xl shadow p-6 border-l-4 border-amber-700">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-700 text-white text-2xl mb-4 mx-auto"><i className="fas fa-certificate"></i></div>
            <h3 className="text-lg font-semibold text-amber-800 mb-1">Oracle Certified Foundations Associate</h3>
            <h4 className="text-amber-700 font-medium mb-1">Java Programming Certification</h4>
            <p className="text-gray-500 text-sm mb-1">Oracle Corporation</p>
            <p className="text-gray-400 text-xs mb-2">Certified</p>
            <p className="text-gray-600 text-sm">Foundational expertise in Java programming concepts, object-oriented programming principles, and enterprise application development best practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Featured Projects</h2>
          <p className="text-gray-500">Enterprise-level banking and platform development projects</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Trade Processing System */}
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col">
            <div className="flex items-center justify-center h-32 mb-4 bg-gradient-to-br from-blue-600 to-yellow-400 rounded-lg">
              <i className="fas fa-university text-white text-4xl opacity-80"></i>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Trade Processing System</h3>
            <p className="text-gray-600 mb-3">High-volume banking trade processing platform with batch processing, recovery mechanisms, and regulatory compliance for financial operations.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Java</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Spring Boot</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">MySQL</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Batch Processing</span>
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xl" title="Enterprise Project"><i className="fas fa-building"></i></a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xl" title="Banking Domain"><i className="fas fa-chart-line"></i></a>
            </div>
          </div>
          {/* OEG Rapidx Platform */}
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col">
            <div className="flex items-center justify-center h-32 mb-4 bg-gradient-to-br from-blue-600 to-yellow-400 rounded-lg">
              <i className="fas fa-cogs text-white text-4xl opacity-80"></i>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">OEG Rapidx Platform</h3>
            <p className="text-gray-600 mb-3">Enterprise Software Development Experience Platform with automated code generation, authentication systems, and CI/CD integration.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">NestJS</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">ReactJS</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">TypeScript</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">OpenAPI</span>
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xl" title="Platform Engineering"><i className="fas fa-tools"></i></a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xl" title="Full Stack"><i className="fas fa-layer-group"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Get In Touch</h2>
          <p className="text-gray-500">Let's discuss banking technology opportunities and enterprise development projects</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl"><i className="fas fa-envelope"></i></div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-0">Email</h4>
                <p className="text-gray-600 mb-0">ksai6342@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl"><i className="fab fa-linkedin"></i></div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-0">LinkedIn</h4>
                <p className="text-gray-600 mb-0">linkedin.com/in/KumberSaiKumar</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl"><i className="fab fa-github"></i></div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-0">GitHub</h4>
                <p className="text-gray-600 mb-0">github.com/KumberSaiKumar</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-0">Location</h4>
                <p className="text-gray-600 mb-0">Hyderabad, India</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="mailto:ksai6342@gmail.com" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fas fa-envelope"></i></a>
              <a href="https://linkedin.com/in/KumberSaiKumar" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/KumberSaiKumar" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-github"></i></a>
            </div>
          </div>
          {/* Contact Form */}
          <form className="flex-1 bg-blue-50 rounded-xl shadow p-8 space-y-6 w-full max-w-md" onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block font-semibold text-blue-700 mb-1">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-blue-700 mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold text-blue-700 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-2">
        <p className="text-sm">&copy; 2024 Kumber Sai Kumar. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:ksai6342@gmail.com" className="hover:text-blue-300 text-xl"><i className="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/in/KumberSaiKumar" className="hover:text-blue-300 text-xl"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/KumberSaiKumar" className="hover:text-blue-300 text-xl"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visibleId = activeSection;
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleId = entry.target.id;
          }
        });
        setActiveSection(visibleId);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );
    sectionIds.forEach(id => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-16 space-y-16">
        <div
          id="home"
          ref={el => (sectionRefs.current['home'] = el)}
          className={`min-h-screen flex items-center justify-center transition-opacity duration-500 ${activeSection === 'home' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <Hero />
        </div>
        <div
          id="skills"
          ref={el => (sectionRefs.current['skills'] = el)}
          className={`min-h-screen flex items-center justify-center transition-opacity duration-500 ${activeSection === 'skills' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <Skills />
        </div>
        <div
          id="experience"
          ref={el => (sectionRefs.current['experience'] = el)}
          className={`min-h-screen flex items-center justify-center transition-opacity duration-500 ${activeSection === 'experience' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <Experience />
        </div>
        <div
          id="education"
          ref={el => (sectionRefs.current['education'] = el)}
          className={`min-h-screen flex items-center justify-center transition-opacity duration-500 ${activeSection === 'education' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <Education />
        </div>
        <div
          id="projects"
          ref={el => (sectionRefs.current['projects'] = el)}
          className={`min-h-screen flex items-center justify-center transition-opacity duration-500 ${activeSection === 'projects' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <Projects />
        </div>
        <div
          id="contact"
          ref={el => (sectionRefs.current['contact'] = el)}
          className={`min-h-screen flex items-center justify-center transition-opacity duration-500 ${activeSection === 'contact' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
