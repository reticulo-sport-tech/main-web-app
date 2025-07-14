import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Radlo from './pages/products/Radlo';
import StudioAI from './pages/products/StudioAI';
import Eventlo from './pages/products/Eventlo';
import MentorshipSupport from './pages/services/MentorshipSupport';
import ExpertAnalysis from './pages/services/ExpertAnalysis';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Header />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/radlo" element={<Radlo />} />
                <Route path="/products/studio-ai" element={<StudioAI />} />
                <Route path="/products/eventlo" element={<Eventlo />} />
                <Route path="/services/mentorship" element={<MentorshipSupport />} />
                <Route path="/services/expert-analysis" element={<ExpertAnalysis />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;