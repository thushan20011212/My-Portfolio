import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export const Me = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">
              Havindu Hettiarachchi
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I'm full stack web developer with skills in javascript(Raect.js , Node.js) , java(springboot) , MongoDB  and modern web technologies. 
              I have been working in this field for almost 1 year and all projects are completed successfully.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5" />
                <span>havinduhettiarachchi2001@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+94 71 5445 403</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="https://github.com/thushan20011212"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/havindu-hettiarachchi-244b02295/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Hire Me
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="IMG_7465.JPG"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};