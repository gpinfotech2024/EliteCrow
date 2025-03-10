import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Bot, DollarSign, Zap, Shield, BarChart } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="h-12 w-12 text-blue-600" />,
      title: 'AWS Customization',
      description: 'Custom AWS solutions tailored to your business needs. We help you leverage the full power of AWS services while ensuring optimal performance and security.',
      features: [
        'Infrastructure as Code (IaC)',
        'Serverless Architecture',
        'Microservices Implementation',
        'AWS Service Integration'
      ]
    },
    {
      icon: <Bot className="h-12 w-12 text-blue-600" />,
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI solutions that enhance customer support and automate routine tasks. Our chatbots learn and adapt to your business needs.',
      features: [
        'Natural Language Processing',
        'Multi-platform Integration',
        'Custom Training Models',
        '24/7 Automated Support'
      ]
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      title: 'Cloud Cost Optimization',
      description: 'Optimize your cloud spending without compromising performance. Our experts analyze your infrastructure and implement cost-saving strategies.',
      features: [
        'Cost Analysis & Monitoring',
        'Resource Optimization',
        'Reserved Instance Planning',
        'Automated Scaling Solutions'
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: 'Performance Optimization',
      description: 'Maximize your cloud infrastructure performance with our expert optimization services. We ensure your applications run at peak efficiency.',
      features: [
        'Load Balancing',
        'Cache Optimization',
        'Database Tuning',
        'Network Performance'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Security & Compliance',
      description: 'Protect your cloud infrastructure with our comprehensive security solutions. We ensure your systems meet industry standards and compliance requirements.',
      features: [
        'Security Audits',
        'Compliance Management',
        'Threat Detection',
        'Data Protection'
      ]
    },
    {
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      title: 'Analytics & Monitoring',
      description: 'Gain valuable insights from your cloud infrastructure with our advanced analytics and monitoring solutions.',
      features: [
        'Real-time Monitoring',
        'Custom Dashboards',
        'Predictive Analytics',
        'Performance Metrics'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive cloud and AI solutions tailored to your business needs. We help you leverage cutting-edge technology to drive growth and efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700 dark:text-gray-200"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};