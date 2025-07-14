import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Calendar, 
  CreditCard, 
  ClipboardList, 
  Bell, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Download,
  Smartphone
} from 'lucide-react';

const Radlo = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const features = [
    {
      icon: Users,
      title: 'Academy Management',
      description: 'Comprehensive management of sports academies with center organization, batch management, and structural oversight.',
      benefits: ['Multi-center management', 'Batch organization', 'Staff management', 'Resource allocation']
    },
    {
      icon: Calendar,
      title: 'Tournament Tracking',
      description: 'Keep track of all tournaments with real-time notifications for new events and schedule changes.',
      benefits: ['Real-time notifications', 'Tournament calendar', 'Registration management', 'Results tracking']
    },
    {
      icon: CreditCard,
      title: 'Automated Fees',
      description: 'Seamless fee collection with automated invoicing and multiple payment options including UPI, cards, and EMI.',
      benefits: ['Automated invoicing', 'Multiple payment methods', 'EMI options', 'Payment tracking']
    },
    {
      icon: ClipboardList,
      title: 'Attendance System',
      description: 'Detailed attendance tracking with comprehensive reports and analytics for better insights.',
      benefits: ['Automated tracking', 'Detailed reports', 'Analytics dashboard', 'Parent notifications']
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'WhatsApp integration for instant updates on tournaments, notices, and important announcements.',
      benefits: ['WhatsApp integration', 'Instant notifications', 'Custom alerts', 'Multi-channel communication']
    },
    {
      icon: BarChart3,
      title: 'Monthly Insights',
      description: 'Comprehensive analytics and insights to track progress and performance metrics.',
      benefits: ['Performance analytics', 'Progress tracking', 'Custom reports', 'Data visualization']
    }
  ];

  const testimonials = [
    {
      name: 'Coach Amanda Silva',
      role: 'Tennis Academy Director',
      content: 'Radlo has revolutionized how we manage our academy. The automated fee collection alone saves us 20 hours per week!',
      rating: 5,
      academy: 'Elite Tennis Academy'
    },
    {
      name: 'David Kumar',
      role: 'Swimming Coach',
      content: 'The attendance tracking and parent notifications have improved our communication tremendously. Highly recommended!',
      rating: 5,
      academy: 'AquaFit Swimming Center'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Basketball Coach',
      content: 'Tournament tracking keeps us organized and our players never miss important events. Game-changing platform!',
      rating: 5,
      academy: 'Hoops Academy'
    }
  ];

  const pricingFeatures = [
    'Academy Management',
    'Tournament Tracking',
    'Automated Fee Collection',
    'Attendance System',
    'WhatsApp Integration',
    'Monthly Analytics',
    'Multi-Payment Support',
    'Custom Reports',
    '24/7 Support'
  ];

  return (
    <>
      <Helmet>
        <title>Radlo - Complete Sports Academy Management Platform | Reticulo</title>
        <meta name="description" content="Radlo is your all-in-one sports academy management solution. Manage academies, track attendance, automate fees, and get insights. Starting at ₹100/month." />
        <meta name="keywords" content="sports academy management, radlo, attendance tracking, fee management, tournament tracking, academy software" />
        <meta property="og:title" content="Radlo - Complete Sports Academy Management Platform" />
        <meta property="og:description" content="Streamline your sports academy operations with Radlo's comprehensive management platform." />
        <meta property="og:image" content="https://images.pexels.com/photos/7544433/pexels-photo-7544433.jpeg" />
        <link rel="canonical" href="https://reticulo.in/products/radlo" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Radlo",
            "description": "Complete sports academy management platform",
            "brand": {
              "@type": "Brand",
              "name": "Reticulo"
            },
            "offers": {
              "@type": "Offer",
              "price": "100",
              "priceCurrency": "INR"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/7544433/pexels-photo-7544433.jpeg')`,
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
              <span className="block">Radlo</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your All-in-One Sports Academy Ecosystem
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Streamline academy operations, automate fee collection, track attendance, 
              and empower coaches with comprehensive management tools.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Request Demo
              </motion.button>
            </motion.div>

            {/* App Store Badges */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Download size={20} />
                <span className="text-sm">Available on App Store</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Smartphone size={20} />
                <span className="text-sm">Get it on Google Play</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Comprehensive Features
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Everything you need to manage your sports academy efficiently and effectively.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
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

      {/* Pricing Section */}
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
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Get started with our affordable pricing that grows with your academy.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-lg mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Radlo Pro</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-gray-900">₹100</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Perfect for growing academies</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pricingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
              >
                Start Free Trial
              </motion.button>
            </div>
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
              Trusted by Coaches Worldwide
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              See what academy directors and coaches are saying about Radlo.
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
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.academy}</p>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Your Academy?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Join thousands of successful academies using Radlo to streamline operations and enhance performance.
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
                Start Free Trial
              </motion.button>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Contact Sales
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Radlo;