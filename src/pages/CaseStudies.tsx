import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      description: 'Implemented an intelligent chatbot system that reduced customer response time by 80% and handled 60% of routine inquiries automatically.',
      image: 'https://us.v-cdn.net/cdn-cgi/image/fit=scale-down,width=1600/https://us.v-cdn.net/6036147/uploads/G7NETX2PGYWO/ai-powered-customer-service-enhancing-the-user-experience.jpg',
      results: [
        '80% reduction in response time',
        '60% automation of inquiries',
        '40% cost reduction in customer service',
        '95% customer satisfaction rate'
      ]
    },
    {
      title: 'Cloud Infrastructure Optimization',
      company: 'Global Retail Inc.',
      description: 'Optimized AWS infrastructure resulting in 45% cost savings while improving application performance and scalability.',
      image: 'https://media.licdn.com/dms/image/D4D12AQFu6b8DY2gzlw/article-cover_image-shrink_720_1280/0/1708104045681?e=2147483647&v=beta&t=2_FxJZyDfQC_Zl1oGSckEK_yCU13e9wFAske1TOD6SI',
      results: [
        '45% reduction in cloud costs',
        '99.99% uptime achieved',
        '2x improvement in application performance',
        'Enhanced security compliance'
      ]
    },
    {
      title: 'Enterprise AI Integration',
      company: 'FinTech Solutions',
      description: 'Developed and implemented AI-powered fraud detection system, reducing fraudulent transactions by 90%.',
      image: 'https://media.istockphoto.com/id/1480239160/photo/an-analyst-uses-a-computer-and-dashboard-for-data-business-analysis-and-data-management.jpg?s=612x612&w=0&k=20&c=Zng3q0-BD8rEl0r6ZYZY0fbt2AWO9q_gC8lSrwCIgdk=',
      results: [
        '90% reduction in fraud cases',
        '$2M saved in potential losses',
        'Real-time threat detection',
        'Improved customer trust'
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
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with AI and cloud solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-64 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    {study.company}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                    {study.title}
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {study.description}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Results:
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};