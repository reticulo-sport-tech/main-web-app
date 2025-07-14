import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Eye, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Calendar,
  Activity
} from 'lucide-react';

const ExpertAnalysis = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const analysisServices = [
    {
      icon: BarChart3,
      title: 'Performance Data Analysis',
      description: 'Comprehensive analysis of performance metrics, statistics, and data patterns to identify strengths and areas for improvement.',
      benefits: ['Statistical analysis', 'Performance metrics', 'Data visualization', 'Trend identification']
    },
    {
      icon: Target,
      title: 'Strength & Weakness Assessment',
      description: 'Detailed evaluation of athletic capabilities to pinpoint specific strengths and weaknesses.',
      benefits: ['Skill assessment', 'Capability mapping', 'Improvement areas', 'Strength optimization']
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Continuous monitoring of athletic development with milestone-based progress evaluation.',
      benefits: ['Progress monitoring', 'Milestone tracking', 'Development curves', 'Goal alignment']
    },
    {
      icon: Eye,
      title: 'Video Analysis',
      description: 'Frame-by-frame video analysis to understand technique, form, and tactical decisions.',
      benefits: ['Technique analysis', 'Form evaluation', 'Tactical review', 'Movement patterns']
    },
    {
      icon: Brain,
      title: 'Strategic Planning',
      description: 'Development of personalized training and competition strategies based on comprehensive analysis.',
      benefits: ['Training strategies', 'Competition planning', 'Tactical development', 'Performance optimization']
    },
    {
      icon: Award,
      title: 'Future Problem Solving',
      description: 'Proactive identification of potential challenges and development of solutions before they become issues.',
      benefits: ['Risk assessment', 'Problem prevention', 'Solution development', 'Contingency planning']
    }
  ];

  const reticuloMasters = [
    {
      name: 'Dr. James Patterson',
      specialization: 'Sports Data Science',
      experience: '15 years',
      expertise: ['Statistical Analysis', 'Performance Metrics', 'Data Visualization', 'Predictive Analytics'],
      achievements: ['PhD in Sports Science', 'Olympic Team Analyst', '200+ Athletes Analyzed'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Maria Rodriguez',
      specialization: 'Tactical Analysis',
      experience: '12 years',
      expertise: ['Game Analysis', 'Tactical Strategy', 'Opposition Research', 'Performance Psychology'],
      achievements: ['Former National Coach', 'Tactical Specialist', 'International Experience'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b613fb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Robert Kim',
      specialization: 'Technical Analysis',
      experience: '18 years',
      expertise: ['Biomechanics', 'Technique Optimization', 'Movement Analysis', 'Injury Prevention'],
      achievements: ['Biomechanics Expert', 'Technical Consultant', 'Research Publications'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const sessionTypes = [
    {
      type: 'Individual Analysis',
      duration: '2 hours',
      price: '₹4,999',
      description: 'One-on-one analysis session with a Reticulo Master',
      features: [
        'Comprehensive performance review',
        'Detailed strengths & weaknesses analysis',
        'Personalized improvement plan',
        'Video analysis (if applicable)',
        'Written report with recommendations'
      ]
    },
    {
      type: 'Team Analysis',
      duration: '3 hours',
      price: '₹12,999',
      description: 'Team-wide analysis session for coaches and multiple athletes',
      features: [
        'Team performance evaluation',
        'Individual player analysis',
        'Team dynamics assessment',
        'Strategic recommendations',
        'Comprehensive team report',
        'Follow-up consultation'
      ]
    },
    {
      type: 'Ongoing Support',
      duration: 'Monthly',
      price: '₹8,999',
      description: 'Monthly analysis sessions with continuous support',
      features: [
        'Monthly analysis sessions',
        'Progress tracking',
        'Continuous optimization',
        'Priority booking',
        'Direct communication access',
        'Quarterly comprehensive reports'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Coach Lisa Anderson',
      sport: 'Tennis',
      content: 'The expert analysis from Reticulo Master transformed how we approach training. The insights were incredibly detailed and actionable.',
      rating: 5,
      organization: 'Elite Tennis Academy'
    },
    {
      name: 'Alex Kumar',
      sport: 'Basketball',
      content: 'The strength and weakness analysis helped me focus on specific areas. I saw immediate improvement in my game.',
      rating: 5,
      organization: 'State Basketball Team'
    },
    {
      name: 'Emma Thompson',
      sport: 'Swimming',
      content: 'The technical analysis of my stroke technique was eye-opening. The recommendations led to significant performance gains.',
      rating: 5,
      organization: 'National Swimming Squad'
    }
  ];

  const analysisProcess = [
    {
      step: 1,
      title: 'Data Collection',
      description: 'Gathering comprehensive performance data, videos, and statistics',
      icon: BarChart3
    },
    {
      step: 2,
      title: 'Expert Analysis',
      description: 'Detailed analysis by Reticulo Master with specialized expertise',
      icon: Brain
    },
    {
      step: 3,
      title: 'Insights Generation',
      description: 'Identifying key insights, patterns, and improvement opportunities',
      icon: Eye
    },
    {
      step: 4,
      title: 'Solution Development',
      description: 'Creating specific, actionable recommendations and strategies',
      icon: Target
    },
    {
      step: 5,
      title: 'Implementation Support',
      description: 'Guidance on implementing recommendations and tracking progress',
      icon: TrendingUp
    }
  ];

  return (
    <>
      <Helmet>
        <title>Expert Analysis Sessions - Reticulo Master Insights | Reticulo</title>
        <meta name="description" content="Get expert analysis from Reticulo Masters. Professional insights on performance, strengths, weaknesses, and strategic recommendations for athletic excellence." />
        <meta name="keywords" content="expert analysis, sports analysis, reticulo master, performance analysis, strength weakness assessment" />
        <meta property="og:title" content="Expert Analysis Sessions - Reticulo Master Insights" />
        <meta property="og:description" content="Professional sports analysis sessions with expert insights and strategic recommendations." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1561640900-21f344dfb058" />
        <link rel="canonical" href="https://reticulo.in/services/expert-analysis" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1561640900-21f344dfb058')`,
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
              <span className="block">Expert Analysis</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sessions
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Get professional insights from Reticulo Masters who specialize in understanding 
              data, statistics, and sports performance to unlock your potential.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Book Analysis Session
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

      {/* Analysis Services Section */}
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
              Comprehensive Analysis Services
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our expert analysis covers all aspects of athletic performance with deep insights and actionable recommendations.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {analysisServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
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

      {/* Reticulo Masters Section */}
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
              Meet Our Reticulo Masters
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our experts combine deep sports knowledge with advanced analytics to provide unparalleled insights.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {reticuloMasters.map((master, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={master.image}
                    alt={master.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{master.name}</h3>
                  <p className="text-purple-600 font-semibold mb-2">{master.specialization}</p>
                  <p className="text-gray-600 mb-4">{master.experience} experience</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {master.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {master.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center gap-2">
                          <Award size={14} className="text-purple-600" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analysis Process Section */}
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
              Our Analysis Process
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A systematic approach to understanding your performance and providing actionable insights.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-8"
          >
            {analysisProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-8 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon size={24} className="text-purple-600" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Session Types & Pricing */}
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
              Session Types & Pricing
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Choose the analysis session that best fits your needs and goals.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {sessionTypes.map((session, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{session.type}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-purple-600">{session.price}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{session.duration}</p>
                  <p className="text-sm text-gray-500">{session.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {session.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
                >
                  Book Session
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Success Stories
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Hear from athletes and coaches who have benefited from our expert analysis sessions.
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
                  <p className="text-sm text-purple-600 font-medium">{testimonial.organization}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
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
              Ready for Expert Analysis?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Unlock your potential with professional insights from our Reticulo Masters. Book your analysis session today.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
              >
                Book Analysis Session
              </motion.button>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ExpertAnalysis;