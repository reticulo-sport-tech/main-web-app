import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Video, 
  Target, 
  BarChart3, 
  Eye, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  TrendingUp,
  Activity
} from 'lucide-react';

const StudioAI = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const features = [
    {
      icon: Video,
      title: 'Video Analysis',
      description: 'Advanced AI-powered video analysis that tracks movements, patterns, and performance metrics in real-time.',
      benefits: ['Real-time tracking', 'Movement analysis', 'Performance metrics', 'Automated insights']
    },
    {
      icon: Target,
      title: 'Pose Detection',
      description: 'Sophisticated pose detection technology that analyzes body positioning and technique accuracy.',
      benefits: ['Accurate pose tracking', 'Technique analysis', 'Form correction', 'Progress monitoring']
    },
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Pure AI agents that understand sports context and provide intelligent coaching recommendations.',
      benefits: ['Intelligent coaching', 'Context-aware analysis', 'Personalized feedback', 'Learning algorithms']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard with detailed insights into athletic performance trends.',
      benefits: ['Performance tracking', 'Trend analysis', 'Custom reports', 'Data visualization']
    },
    {
      icon: Eye,
      title: 'Shot Analysis',
      description: 'Detailed analysis of shots, actions, and game situations with frame-by-frame breakdown.',
      benefits: ['Shot tracking', 'Action analysis', 'Game situations', 'Frame-by-frame review']
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get instant feedback on performance with AI-driven recommendations for improvement.',
      benefits: ['Instant analysis', 'Real-time feedback', 'Improvement suggestions', 'Performance alerts']
    }
  ];

  const useCases = [
    {
      sport: 'Tennis',
      icon: Target,
      description: 'Analyze serve technique, shot placement, and movement patterns on court.',
      metrics: ['Serve accuracy', 'Shot power', 'Court coverage', 'Swing analysis']
    },
    {
      sport: 'Basketball',
      icon: Activity,
      description: 'Track shooting form, defensive positioning, and team coordination.',
      metrics: ['Shooting form', 'Defensive stance', 'Team coordination', 'Movement efficiency']
    },
    {
      sport: 'Swimming',
      icon: TrendingUp,
      description: 'Monitor stroke technique, breathing patterns, and lap performance.',
      metrics: ['Stroke efficiency', 'Breathing rhythm', 'Lap times', 'Turn technique']
    },
    {
      sport: 'Football',
      icon: Brain,
      description: 'Analyze passing accuracy, running patterns, and tactical positioning.',
      metrics: ['Pass accuracy', 'Running patterns', 'Tactical awareness', 'Field positioning']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Sports Scientist',
      content: 'Studio AI has revolutionized how we analyze athlete performance. The AI insights are incredibly accurate and actionable.',
      rating: 5,
      organization: 'Olympic Training Center'
    },
    {
      name: 'Coach Roberto Silva',
      role: 'Tennis Coach',
      content: 'The video analysis capabilities are game-changing. We can now identify technique issues that were previously invisible.',
      rating: 5,
      organization: 'Elite Tennis Academy'
    },
    {
      name: 'Maria Chen',
      role: 'Swimming Coach',
      content: 'Studio AI helps us optimize stroke technique with precision we never had before. Our swimmers are improving rapidly.',
      rating: 5,
      organization: 'AquaFit Training Center'
    }
  ];

  const technicalSpecs = [
    {
      category: 'AI Capabilities',
      features: ['Deep Learning Models', 'Computer Vision', 'Pattern Recognition', 'Predictive Analytics']
    },
    {
      category: 'Video Processing',
      features: ['4K Resolution Support', 'Real-time Processing', 'Multi-angle Analysis', 'Frame-by-frame Breakdown']
    },
    {
      category: 'Supported Sports',
      features: ['Tennis', 'Basketball', 'Swimming', 'Football', 'Track & Field', 'More Sports Coming']
    },
    {
      category: 'Integration',
      features: ['Cloud Storage', 'API Access', 'Third-party Apps', 'Export Options']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Studio AI - Advanced Sports Video Analysis Platform | Reticulo</title>
        <meta name="description" content="Studio AI provides AI-powered sports video analysis with pose detection, performance tracking, and intelligent coaching insights for athletes and coaches." />
        <meta name="keywords" content="AI sports analysis, video analysis, pose detection, performance tracking, sports AI, coaching technology" />
        <meta property="og:title" content="Studio AI - Advanced Sports Video Analysis Platform" />
        <meta property="og:description" content="Revolutionary AI-powered sports analysis platform for coaches and athletes." />
        <meta property="og:image" content="https://images.pexels.com/photos/7544430/pexels-photo-7544430.jpeg" />
        <link rel="canonical" href="https://reticulo.in/products/studio-ai" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Studio AI",
            "description": "AI-powered sports video analysis platform",
            "brand": {
              "@type": "Brand",
              "name": "Reticulo"
            },
            "category": "Sports Technology Software"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/7544430/pexels-photo-7544430.jpeg')`,
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
              <span className="block">Studio AI</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Sports Analysis
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Transform your sports performance with cutting-edge AI technology that analyzes 
              video input, tracks movements, and provides intelligent coaching insights.
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
                Start Analysis
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all flex items-center gap-2"
              >
                <Play size={20} />
                Watch Demo
              </motion.button>
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
              Advanced AI Capabilities
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Harness the power of artificial intelligence to unlock insights that were previously impossible to detect.
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Use Cases Section */}
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
              Multi-Sport Analysis
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Studio AI adapts to various sports, providing specialized analysis for each discipline.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{useCase.sport}</h3>
                </div>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
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
              Technical Specifications
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Built with cutting-edge technology to deliver superior performance and accuracy.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-purple-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Trusted by Sports Professionals
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              See how Studio AI is transforming sports analysis for coaches and athletes worldwide.
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
              Ready to Revolutionize Your Analysis?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Join the future of sports analysis with Studio AI. Unlock insights that will transform your performance.
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
                Start Free Trial
              </motion.button>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all"
              >
                Request Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default StudioAI;