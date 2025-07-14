import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Target, Heart, Zap, Globe } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every solution we deliver.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for sports drives everything we do.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries with cutting-edge technology.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Making a positive difference in the sports community worldwide.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Former Olympic athlete turned tech entrepreneur with a passion for sports excellence.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'AI expert with 15+ years of experience in sports analytics and machine learning.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b613fb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Product',
      bio: 'Sports coach and product designer dedicated to creating user-centric solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Reticulo was established with a vision to revolutionize sports technology.'
    },
    {
      year: '2020',
      title: 'First Product Launch',
      description: 'Launched Radlo, our academy management platform.'
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Introduced Studio AI for advanced sports analytics.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to serve clients across 25+ countries.'
    },
    {
      year: '2023',
      title: 'Eventlo Launch',
      description: 'Launched comprehensive event management platform.'
    },
    {
      year: '2024',
      title: '10,000+ Users',
      description: 'Reached milestone of serving over 10,000 active users.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Reticulo - Our Story & Mission</title>
        <meta name="description" content="Learn about Reticulo's mission to revolutionize sports technology. Meet our team and discover how we're empowering athletes worldwide." />
        <meta name="keywords" content="about reticulo, sports technology company, team, mission, vision, sports innovation" />
        <meta property="og:title" content="About Reticulo - Our Story & Mission" />
        <meta property="og:description" content="Discover how Reticulo is transforming sports through innovative technology solutions." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1592399579116-b73728f02a7d" />
        <link rel="canonical" href="https://reticulo.in/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1592399579116-b73728f02a7d')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              About Reticulo
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              We're passionate about transforming sports through innovative technology solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Mission
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              At Reticulo, we believe that every athlete deserves access to the best tools and insights to reach their full potential. 
              Our mission is to democratize sports technology, making advanced analytics, management tools, and expert guidance 
              accessible to athletes, coaches, and organizations at every level.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Holistic Development</h3>
              <p className="text-gray-600 mb-4">
                We focus on holistic athlete development, balancing performance enhancement with personal growth. 
                Our solutions address not just technical skills but also mental resilience, strategic thinking, and long-term career planning.
              </p>
              <p className="text-gray-600">
                Through our integrated platform, we bridge the gap between technology and human expertise, 
                creating a comprehensive ecosystem for sports excellence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1593696326140-3ad13224e54b"
                alt="Sports Technology"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Values
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The principles that guide everything we do at Reticulo.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The passionate individuals behind Reticulo's innovative solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Journey
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Key milestones in our journey to revolutionize sports technology.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 md:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg" />
                  
                  <div className="flex-1 md:px-8" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-white"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Join Our Mission
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Be part of the revolution in sports technology. Together, we can create a future where every athlete has the tools to excel.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;