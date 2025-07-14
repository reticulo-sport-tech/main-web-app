import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Target, 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Heart,
  Lightbulb
} from 'lucide-react';

const MentorshipSupport = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const mentorshipAreas = [
    {
      icon: Target,
      title: 'Career Pathway Planning',
      description: 'Comprehensive guidance on creating a structured pathway to sports success with clear milestones.',
      benefits: ['Goal setting', 'Milestone tracking', 'Career planning', 'Success metrics']
    },
    {
      icon: BookOpen,
      title: 'Academic-Sports Balance',
      description: 'Expert advice on maintaining academic excellence while pursuing athletic goals.',
      benefits: ['Time management', 'Academic support', 'Schedule optimization', 'Performance balance']
    },
    {
      icon: TrendingUp,
      title: 'Performance Enhancement',
      description: 'Personalized strategies to improve athletic performance through mental and physical training.',
      benefits: ['Mental conditioning', 'Physical training', 'Performance analysis', 'Skill development']
    },
    {
      icon: Calendar,
      title: 'Training Schedule Design',
      description: 'Custom training schedules designed to optimize performance while preventing burnout.',
      benefits: ['Custom schedules', 'Recovery planning', 'Periodization', 'Progress tracking']
    },
    {
      icon: Award,
      title: 'Competition Preparation',
      description: 'Comprehensive preparation strategies for tournaments and competitive events.',
      benefits: ['Competition strategy', 'Mental preparation', 'Performance optimization', 'Stress management']
    },
    {
      icon: Heart,
      title: 'Mental Health Support',
      description: 'Focus on mental well-being and psychological support for athletic performance.',
      benefits: ['Stress management', 'Confidence building', 'Mental resilience', 'Emotional support']
    }
  ];

  const mentorshipProcess = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of current skill level, goals, and challenges.',
      icon: Users
    },
    {
      step: 2,
      title: 'Goal Setting',
      description: 'Setting clear, achievable short-term and long-term objectives.',
      icon: Target
    },
    {
      step: 3,
      title: 'Pathway Design',
      description: 'Creating a personalized roadmap with milestone-based progress tracking.',
      icon: BookOpen
    },
    {
      step: 4,
      title: 'Implementation',
      description: 'Executing the plan with regular check-ins and adjustments.',
      icon: TrendingUp
    },
    {
      step: 5,
      title: 'Progress Monitoring',
      description: 'Continuous tracking and optimization of performance and progress.',
      icon: Calendar
    },
    {
      step: 6,
      title: 'Success Achievement',
      description: 'Celebrating achievements and setting new challenges for continued growth.',
      icon: Award
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      sport: 'Tennis',
      content: 'The mentorship program helped me balance my studies with tennis training. I improved my ranking while maintaining my GPA!',
      rating: 5,
      achievement: 'State Champion'
    },
    {
      name: 'Maria Garcia',
      sport: 'Swimming',
      content: 'My mentor guided me through the mental challenges of competitive swimming. The support was invaluable.',
      rating: 5,
      achievement: 'National Qualifier'
    },
    {
      name: 'David Chen',
      sport: 'Basketball',
      content: 'The structured pathway and milestone tracking kept me focused on my goals. I secured a college scholarship!',
      rating: 5,
      achievement: 'College Scholarship'
    }
  ];

  const mentorProfiles = [
    {
      name: 'Sarah Williams',
      specialization: 'Tennis & Mental Performance',
      experience: '12 years',
      achievements: ['Former Pro Player', 'Sports Psychology Certified', '100+ Athletes Mentored'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b613fb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Michael Rodriguez',
      specialization: 'Multi-Sport Performance',
      experience: '15 years',
      achievements: ['Olympic Coach', 'Performance Analyst', 'International Experience'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Emma Thompson',
      specialization: 'Swimming & Endurance Sports',
      experience: '10 years',
      achievements: ['Former National Champion', 'Youth Development Expert', 'Academic Integration Specialist'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mentorship Support - Personalized Athletic Development | Reticulo</title>
        <meta name="description" content="Get personalized mentorship support for athletic development. Expert guidance on career pathways, academic balance, and performance enhancement." />
        <meta name="keywords" content="sports mentorship, athletic development, career guidance, academic balance, performance coaching" />
        <meta property="og:title" content="Mentorship Support - Personalized Athletic Development" />
        <meta property="og:description" content="Expert mentorship services for athletes seeking structured guidance and support." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1593696326140-3ad13224e54b" />
        <link rel="canonical" href="https://reticulo.in/services/mentorship" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1593696326140-3ad13224e54b')`,
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block">Mentorship</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Support
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Step-by-step guidance for athletic success with personalized mentorship, 
              balanced academic support, and milestone-based progress tracking.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mentorship Areas Section */}
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
              Comprehensive Mentorship Areas
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our mentorship program covers all aspects of athletic development and personal growth.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mentorshipAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Mentorship Process
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A structured approach to athletic development with clear milestones and measurable progress.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="relative"
          >
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full hidden md:block" />

            <div className="space-y-16">
              {mentorshipProcess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 md:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Process Dot */}
                  <div className="hidden md:block w-8 h-8 bg-white border-4 border-blue-600 rounded-full shadow-lg flex items-center justify-center">
                    <step.icon size={16} className="text-blue-600" />
                  </div>
                  
                  <div className="flex-1 md:px-8" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mentor Profiles Section */}
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
              Meet Our Expert Mentors
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Learn from experienced professionals who have guided hundreds of athletes to success.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {mentorProfiles.map((mentor, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{mentor.specialization}</p>
                  <p className="text-gray-600 mb-4">{mentor.experience} experience</p>
                  <ul className="space-y-2">
                    {mentor.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center gap-2">
                        <Award size={16} className="text-blue-600" />
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Success Stories
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Hear from athletes who have transformed their careers through our mentorship program.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.sport}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.achievement}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
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
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Take the first step towards achieving your athletic goals with personalized mentorship support.
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
                Book Consultation
              </motion.button>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MentorshipSupport;