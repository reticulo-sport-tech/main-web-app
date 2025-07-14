import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    products: [
      { name: 'Radlo', path: '/products/radlo', desc: 'Academy & Player Management' },
      { name: 'Studio AI', path: '/products/studio-ai', desc: 'AI-powered Sports Analysis' },
      { name: 'Eventlo', path: '/products/eventlo', desc: 'Event Management Platform' }
    ],
    services: [
      { name: 'Mentorship Support', path: '/services/mentorship', desc: 'Personal Guidance' },
      { name: 'Expert Analysis', path: '/services/expert-analysis', desc: 'Reticulo Master Sessions' }
    ]
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Reticulo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                location.pathname === '/' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    {navItems.products.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    {navItems.services.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                location.pathname === '/about' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                location.pathname === '/contact' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Contact
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4">
                <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
                
                <div>
                  <button 
                    onClick={() => toggleDropdown('products')}
                    className="flex items-center justify-between w-full py-2 text-gray-700"
                  >
                    Products
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'products' && (
                    <div className="ml-4 mt-2 space-y-2">
                      {navItems.products.map((item, index) => (
                        <Link key={index} to={item.path} className="block py-1 text-gray-600 hover:text-blue-600">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button 
                    onClick={() => toggleDropdown('services')}
                    className="flex items-center justify-between w-full py-2 text-gray-700"
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="ml-4 mt-2 space-y-2">
                      {navItems.services.map((item, index) => (
                        <Link key={index} to={item.path} className="block py-1 text-gray-600 hover:text-blue-600">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
                <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-full font-medium">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;