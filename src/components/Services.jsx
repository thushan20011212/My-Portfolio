import React from 'react';
import { Code, Smartphone, Palette, Settings2 } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and modern websites using the latest technologies like React, Node.js, and modern CSS frameworks.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization'],
    },
    {
      icon: Smartphone,
      title: 'Responsive Design / Creative Design',
      description: 'Creating websites that work perfectly on all devices, from mobile phones to desktop computers with pixel-perfect precision.',
      features: ['Mobile-First Approach', 'Cross-Browser Compatibility', 'Interactive Prototypes'],
    },
    {
      icon: Settings2,
      title: 'Ongoing Maintenance & Premium Support',
      description: 'Launching your website or app is just the beginning. To stay ahead, you need a reliable tech partner to ensure everything runs smoothly — every single day.',
      features: ['Bug Fixing & Error Handling', 'Performance Optimization', 'Security Updates & Patches'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I offer a comprehensive range of web development services to help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};