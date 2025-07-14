import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Users, 
  CreditCard, 
  MessageSquare, 
  FileText, 
  Trophy,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  BarChart3
} from 'lucide-react';

const Eventlo = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const features = [
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Comprehensive event planning and management tools for sports tournaments and competitions.',
      benefits: ['Event scheduling', 'Venue management', 'Resource allocation', 'Timeline tracking']
    },
    {
      icon: Users,
      title: 'Registration System',
      description: 'Streamlined registration process with customizable forms and participant management.',
      benefits: ['Custom registration forms', 'Participant tracking', 'Team management', 'Automated confirmations']
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment processing with multiple payment options and automated invoicing.',
      benefits: ['Multiple payment methods', 'Secure transactions', 'Automated invoicing', 'Refund management']
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Integration',
      description: 'Seamless WhatsApp integration for instant communication with participants and organizers.',
      benefits: ['Instant notifications', 'Group messaging', 'Event updates', 'Support chat']
    },
    {
      icon: FileText,
      title: 'Administrative Support',
      description: 'Complete administrative support including documentation and compliance management.',
      benefits: ['Document management', 'Compliance tracking', 'Report generation', 'Audit trails']
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting to track event performance and participant engagement.',
      benefits: ['Event analytics', 'Participant insights', 'Revenue tracking', 'Performance metrics']
    }
  ];

  const eventTypes = [
    {
      type: 'Tennis Tournaments',
      icon: Trophy,
      description: 'Professional tennis tournament management with bracket systems and live scoring.',
      features: ['Bracket management', 'Live scoring', 'Player rankings', 'Court scheduling']
    },
    {
      type: 'Basketball Leagues',
      icon: Users,
      description: 'Complete basketball league management with team coordination and statistics.',
      features: ['Team management', 'Game scheduling', 'Statistics tracking', 'League standings']
    },
    {
      type: 'Swimming Meets',
      icon: Clock,
      description: 'Swimming competition management with timing systems and heat management.',
      features: ['Heat management', 'Timing integration', 'Performance tracking', 'Record keeping']
    },
    {
      type: 'Multi-Sport Events',
      icon: Shield,
      description: 'Large-scale multi-sport event coordination with comprehensive management tools.',
      features: ['Multi-sport coordination', 'Venue management', 'Logistics planning', 'Staff coordination']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Tournament Director',
      content: 'Eventlo has streamlined our tournament organization process. The WhatsApp integration keeps everyone connected effortlessly.',
      rating: 5,
      organization: 'State Tennis Association'
    },
    {
      name: 'Michael Thompson',
      role: 'League Administrator',
      content: 'The payment processing and registration system has eliminated all our administrative headaches. Highly recommended!',
      rating: 5,
      organization: 'City Basketball League'
    },
    {
      name: 'Sarah Kim',
      role: 'Event Coordinator',
      content: 'Managing multi-sport events has never been easier. The analytics help us improve every event we organize.',
      rating: 5,
      organization: 'Regional Sports Council'
    }
  ];

  const pricingPlans = [
    {
      name: 'Single Event',
      price: '₹2,999',
      period: 'per event',
      description: 'Perfect for individual tournaments and competitions',
      features: [
        'Event management',
        'Registration system',
        'Payment processing',
        'WhatsApp support',
        'Basic analytics',
        'Email support'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Multi-Event',
      price: '₹7,999',
      period: 'per month',
      description: 'Ideal for organizations with multiple events',
      features: [
        'Unlimited events',
        'Advanced registration',
        'Payment processing',
        'WhatsApp integration',
        'Advanced analytics',
        'Priority support',
        'Custom branding'
      ],
      color: 'from-purple-600 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Multi-Event',
        'Custom integrations',
        'Dedicated support',
        'API access',
        'Advanced reporting',
        'Custom development',
        'Training & onboarding'
      ],
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Eventlo - Complete Sports Event Management Platform | Reticulo</title>
        <meta name="description" content="Eventlo provides comprehensive sports event management with registration, payment processing, WhatsApp integration, and analytics for tournaments and competitions." />
        <meta name="keywords" content="sports event management, tournament management, event registration, payment processing, sports tournaments" />
        <meta property="og:title" content="Eventlo - Complete Sports Event Management Platform" />
        <meta property="og:description" content="Streamline your sports event management with comprehensive tools and WhatsApp integration." />
        <meta property="og:image" content="https://images.pexels.com/photos/7544432/pexels-photo-7544432.jpeg" />
        <link rel="canonical" href="https://reticulo.in/products/eventlo" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Eventlo",
            "description": "Complete sports event management platform",
            "brand": {
              "@type": "Brand",
              "name": "Reticulo"
            },
            "category": "Event Management Software"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/7544432/pexels-photo-7544432.jpeg')`,
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
              <span className="block">Eventlo</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Complete Event Management
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Streamline your sports event management with comprehensive tools for registration, 
              payments, communication, and analytics all in one platform.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Start Planning Event
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
              Comprehensive Event Solutions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Everything you need to plan, execute, and manage successful sports events.
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Event Types Section */}
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
              Multi-Sport Event Support
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Eventlo adapts to various sports and event types, providing specialized tools for each.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {eventTypes.map((eventType, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <eventType.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{eventType.type}</h3>
                </div>
                <p className="text-gray-600 mb-6">{eventType.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {eventType.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Flexible Pricing Plans
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Choose the perfect plan for your event management needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden ${plan.popular ? 'ring-2 ring-purple-600' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </motion.button>
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
              Trusted by Event Organizers
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              See how Eventlo is transforming event management for organizations worldwide.
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
                  <p className="text-sm text-green-600 font-medium">{testimonial.organization}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
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
              Ready to Plan Your Next Event?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Join thousands of successful event organizers who trust Eventlo to manage their sports events.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
              >
                Start Planning
              </motion.button>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all"
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

export default Eventlo;