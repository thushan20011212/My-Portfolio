import React from 'react';
import { GraduationCap, Briefcase, Users, Clock } from 'lucide-react';

export const About = () => {
  const badges = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Following NDT IT Course at Institute of Technology,University of Moratuwa',
      link: 'https://itum.mrt.ac.lk/',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: '1 Year in Web Development',
    },
    {
      icon: Users,
      title: 'Freelance',
      description: 'Available for Projects',
    },
    {
      icon: Clock,
      title: 'Availability',
      description: 'Part-time',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn more about my background, skills, and what drives my passion for web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="public\IMG_7465.JPG"
                alt="About Me"
                className="w-80 h-80 rounded-full object-cover shadow-4xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Full Stack Web Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm a passionate full stack developer with expertise in modern web technologies. 
              I love creating beautiful, responsive, and user-friendly websites that provide 
              exceptional user experiences. My journey in web development started 1 years ago, 
              and I've been constantly learning and evolving with the latest technologies. And also
              I'm working with machine learning and AI technologies to build intelligent applications.
              It will be my future path as soom as possible
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Email:</span>
                <p className="text-gray-600 dark:text-gray-400">havinduhettiarachchi2001@gmail.com</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Phone:</span>
                <p className="text-gray-600 dark:text-gray-400">+94 71 5445 403</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Location:</span>
                <p className="text-gray-600 dark:text-gray-400">Walasmulla , Sri Lanaka</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Languages:</span>
                <p className="text-gray-600 dark:text-gray-400">English, Sinhala</p>
              </div>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {badge.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {badge.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};