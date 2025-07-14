"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  DollarSign,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Play,
  ClipboardList, // For Center & Batch Mgmt, Performance Reports
  UserCheck, // For Associate & Assistant Coach Mgmt
  Smartphone, // For App & WhatsApp Updates
  QrCode, // For QR Attendance
  Receipt, // For Fee Payments & Payouts, WhatsApp Support & Invoicing
  TrendingUp, // For Player Progress Timeline
  Trophy, // For Tournament Coordination
} from "lucide-react";
import MainLayout from "../../../components/MainLayout";

const Radlo = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const features = [
    {
      icon: ClipboardList,
      title: "Center & Batch Management",
      description:
        "Efficiently manage your academy centers and organize players into batches for structured training.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: UserCheck,
      title: "Associate & Assistant Coach Management",
      description:
        "Assign and manage your coaching staff, track their schedules, and optimize their roles.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "App & WhatsApp Updates",
      description:
        "Keep players and parents informed with real-time updates and notifications via app and WhatsApp.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: QrCode,
      title: "QR Attendance",
      description:
        "Simplify attendance tracking with quick and easy QR code scanning for players.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Receipt,
      title: "Fee Payments & Payouts",
      description:
        "Handle all fee collections and payouts seamlessly with integrated financial management tools.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Users,
      title: "WhatsApp Support & Invoicing",
      description:
        "Provide direct support and manage invoicing efficiently through WhatsApp integration.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: BarChart3,
      title: "Performance Reports",
      description:
        "Generate detailed performance reports for players, helping to identify strengths and areas for improvement.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Player Progress Timeline",
      description:
        "Visualize and track individual player progress over time with comprehensive timelines.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Trophy,
      title: "Tournament Coordination",
      description:
        "Organize and manage tournaments with ease, from registration to scheduling and results.",
      color: "from-red-500 to-pink-500",
    },
  ];

  const benefits = [
    "Complete academy management in one platform",
    "Automated attendance tracking and reporting",
    "Parent communication and engagement tools",
    "Performance analytics and progress tracking",
    "Integrated payment processing",
    "Mobile app for coaches and players",
    "Customizable training programs",
    "Multi-sport support and flexibility",
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="text-white"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                <div className="flex items-center h-16">
                  {/* Assuming Radlo-Logo.png is in the public directory */}
                  <img
                    src="/Radlo-Logo.png"
                    alt="Reticulo Logo"
                    className="w-16 h-16 rounded-md"
                  />
                  <span className="m-4">Radlo</span>
                </div>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl mb-8"
              >
                Complete academy and player management ecosystem designed to
                streamline operations and enhance performance.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2"
                >
                  <Play size={20} />
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Assuming Radlo-Arch.jpg is in the public directory */}
              <img
                src="/Radlo-Arch.jpg"
                alt="Radlo Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
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
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Powerful Features
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Everything you need to manage your sports academy efficiently and
              effectively.
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
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Radlo?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Academy Management"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
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
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
              Ready to Transform Your Academy?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Join hundreds of sports academies already using Radlo to
              streamline operations and improve player development.
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
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Radlo;