import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Cloud, Database, Shield, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Careers: React.FC = () => {
  const positions = [
    {
      title: 'Senior Cloud Architect',
      department: 'Cloud Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      icon: <Cloud className="h-6 w-6" />,
      description: 'Lead and architect cloud solutions for enterprise clients using AWS and Azure.',
      requirements: [
        'AWS Professional certification',
        '8+ years of cloud architecture experience',
        'Experience with multi-cloud environments',
        'Strong leadership skills'
      ]
    },
    {
      title: 'AI Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote',
      type: 'Full-time',
      icon: <Terminal className="h-6 w-6" />,
      description: 'Develop and implement AI solutions for chatbots and automation systems.',
      requirements: [
        'Masters in Computer Science or related field',
        '5+ years of AI/ML experience',
        'Experience with NLP and LLMs',
        'Python expertise'
      ]
    },
    {
      title: 'DevOps Specialist',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      icon: <Code className="h-6 w-6" />,
      description: 'Implement and maintain CI/CD pipelines and infrastructure automation.',
      requirements: [
        'Strong DevOps experience',
        'Kubernetes expertise',
        'Infrastructure as Code experience',
        'Monitoring and logging systems'
      ]
    },
    {
      title: 'Security Engineer',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      icon: <Shield className="h-6 w-6" />,
      description: 'Ensure security of cloud infrastructure and implement security best practices.',
      requirements: [
        'Security certifications (CISSP, etc.)',
        '5+ years of security experience',
        'Cloud security expertise',
        'Incident response experience'
      ]
    },
    {
      title: 'Database Architect',
      department: 'Data Infrastructure',
      location: 'Seattle, WA',
      type: 'Full-time',
      icon: <Database className="h-6 w-6" />,
      description: 'Design and optimize database systems for large-scale applications.',
      requirements: [
        'Advanced SQL expertise',
        'NoSQL database experience',
        'Performance optimization',
        'Data modeling'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Help shape the future of AI and cloud technology. We're looking for passionate individuals who want to make a difference.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    {position.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {position.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {position.department}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{position.type}</span>
                    <span className="mx-2">•</span>
                    <span>{position.location}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {position.description}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};