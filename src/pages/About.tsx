import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Mission',
      description: 'To empower businesses with innovative AI and cloud solutions that drive growth and efficiency.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Team',
      description: 'Expert developers and cloud architects with decades of combined experience in AI and cloud technologies.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality and maintaining the highest standards in every project.'
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to provide cutting-edge solutions.'
    }
  ];
  const partners = [
    { name: 'Amazon Web Services', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Google Cloud', logo: 'https://techstory.in/wp-content/uploads/2016/09/Google-cloud.jpg' },
    { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
    { name: 'IBM Cloud', logo: 'https://logowik.com/content/uploads/images/ibm-cloud657.logowik.com.webp' },
    { name: 'Oracle Cloud', logo: 'https://abjcloudsolutions.com/wp-content/uploads/2024/10/OCI-img.png' },
    { name: 'Salesforce AI', logo: 'https://mitto.ch/wp-content/uploads/2024/01/salesforce@2x-8-1.png' },
    { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
    { name: 'NVIDIA AI', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
    { name: 'Tencent Cloud', logo: 'https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/5bd9164f6e73.png' },
    { name: 'Alibaba Cloud', logo: 'https://img.theweek.in/content/dam/week/news/sci-tech/images/2018/5/1/alibaba-china.jpg' }
  ];
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
{/* Hero Section */}
<section className="relative py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        About EliteCrows
      </h1>
      <p className="text-md font-normal text-gray-600 dark:text-gray-300 max-w-6xl mx-auto text-justify leading-relaxed">
        EliteCrows is a cutting-edge technology company specializing in AI-driven automation,  
        cloud computing, and enterprise software solutions. We empower businesses by delivering  
        intelligent, scalable, and efficient digital solutions that drive growth and innovation.  
        Our expertise spans AI-powered SaaS, DevOps, blockchain, data analytics, and enterprise-grade  
        application development. With a mission to simplify digital transformation, we help startups  
        and enterprises leverage emerging technologies to stay ahead in a competitive market. At  
        EliteCrows, we believe in building future-ready solutions that enhance business efficiency,  
        streamline operations, and unlock new opportunities for success.
      </p>
    </motion.div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose EliteCrows?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our team consists of certified AWS professionals and AI specialists with years of industry experience.'
              },
              {
                title: 'Proven Track Record',
                description: 'Successfully delivered over 100+ cloud and AI projects for businesses across various industries.'
              },
              {
                title: 'Custom Solutions',
                description: 'We create tailored solutions that perfectly match your business requirements and goals.'
              },
              {
                title: 'Ongoing Support',
                description: '24/7 support and maintenance to ensure your systems run smoothly and efficiently.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* Partnership & Collaboration Section */}
            <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Partnerships & Collaborations
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <img src={partner.logo} alt={partner.name} className="h-16 w-auto mb-2" />
                <p className="text-gray-900 dark:text-white text-sm font-semibold">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};