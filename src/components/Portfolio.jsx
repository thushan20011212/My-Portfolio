import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Social Media Web Site',
      description: 'A full-stack Social media consumer review web site with integrated ml models. Features include user authentication, payment integration for premium users and admin dashboard.',
      image: 'buddyboss-online-community-builder.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Stripe'],
      liveUrl: 'https://raw.githubusercontent.com/nz-m/SocialEcho/main/resources/UI-community.png',
      githubUrl: 'https://github.com/thushan20011212/SocialEcho?tab=readme-ov-file',
    },
    {
      id: 2,
      title: 'Conference Management System',
      description: 'A collaborative conference management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'original-da9744b9d678601b9743999db23dc364.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS' , 'Tailwind CSS'],
      liveUrl: '',
      githubUrl: 'https://github.com/thushan20011212/conferecne',
    },
    {
      id: 3,
      title: 'Weather Web Site',
      description: 'A responsive weather application that provides current weather conditions, forecasts, and interactive maps using weather APIs.',
      image: 'Weather forecast website.png',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      liveUrl: 'https://raw.githubusercontent.com/titanilham/Weather-WebSite/refs/heads/main/preview.png',
      githubUrl: 'https://github.com/thushan20011212/Weather-WebSite',
    },
    /*{
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark/light mode toggle.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Lucide Icons'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },*/
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedProject(project.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                  >
                    ✕
                  </button>
                </div>
                <img
                  src={projects.find(p => p.id === selectedProject)?.image}
                  alt="Project"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={projects.find(p => p.id === selectedProject)?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={projects.find(p => p.id === selectedProject)?.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};