import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Typewriter from 'typewriter-effect';

const HomePage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-black space-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-bg py-20 md:py-32 relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Light beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="light-beam absolute -left-20 top-0"></div>
          <div className="light-beam absolute right-1/4 top-1/4" style={{ animationDelay: '-2s' }}></div>
          <div className="light-beam absolute left-1/3 top-1/2" style={{ animationDelay: '-4s' }}></div>
        </div>

        {/* Glowing orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute h-32 w-32 bg-accent-1/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute h-40 w-40 bg-accent-2/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse delay-1000"></div>
          <div className="absolute h-24 w-24 bg-accent-1/20 rounded-full blur-3xl top-1/3 right-1/3 animate-pulse delay-2000"></div>
          
          {/* Additional glow points */}
          <div className="glow-point top-1/4 left-1/3"></div>
          <div className="glow-point bottom-1/3 right-1/4" style={{ animationDelay: '-2s' }}></div>
          <div className="glow-point top-1/2 right-1/3" style={{ animationDelay: '-3s' }}></div>
        </motion.div>

        {/* Content */}
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6 relative"
            >
              <motion.div variants={fadeIn} className="relative">
                <span className="inline-block px-3 py-1 bg-glass-light text-accent-1 text-sm font-medium rounded-full mb-4 backdrop-blur-sm border border-glass-border">
                  React UI Components
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-6xl font-bold text-text-light mb-6 glow-text"
              >
                <span className="relative">Beautiful React Components for{' '}</span>
                <span className=" bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2 text-gradient">
                  <Typewriter
                    options={{
                      strings: ['Developers', 'Designers', 'Creators', 'Everyone'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-text-light/80 text-lg md:text-xl mb-8 backdrop-blur-sm bg-glass-light rounded-lg p-4 relative border border-glass-border"
              >
                A collection of modern, responsive React components with stunning animations and effects. 
                Ready to use in your next project.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row justify-center gap-4 relative"
              >
                <Link 
                  to="/components" 
                  className="px-6 py-3 bg-gradient-to-r from-accent-1 to-accent-2 text-text-dark font-medium rounded-lg hover:shadow-lg hover:shadow-accent-1/50 transition-all duration-300 flex items-center justify-center"
                >
                  Explore All Components <ArrowRight size={18} className="ml-2" />
                </Link>
                <a 
                  href="https://github.com/rockxkaif/reactUI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-glass-light backdrop-blur-sm text-text-light font-medium rounded-lg hover:bg-glass-light/80 hover:border-accent-1 border border-glass-border transition-all duration-300 flex items-center justify-center"
                >
                  View on GitHub <Star size={18} className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-light mb-4">Featured Components</h2>
            <p className="text-text-light/70 max-w-2xl mx-auto">
              Explore our most popular components with beautiful animations and effects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Text Animation Card */}
            <motion.div 
              className="card group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 h-40 flex items-center justify-center bg-gradient-to-br from-accent-2/20 to-glass-dark border-b border-glass-border">
                <h3 className="gradient-text text-2xl font-bold">
                  Gradient Text
                </h3>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-light mb-2">Gradient Text</h3>
                <p className="text-text-light/70 text-sm mb-4">
                  A colorful animated gradient text effect that cycles through multiple colors.
                </p>
                <Link 
                  to="/text-animations/gradient" 
                  className="inline-flex items-center text-sm text-accent-1 hover:text-accent-2 transition-colors"
                >
                  View Component <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            {/* Glass Card */}
            <motion.div 
              className="card group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 h-40 flex items-center justify-center bg-gradient-to-br from-accent-1/20 to-glass-dark border-b border-glass-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-1/20 to-accent-2/20"></div>
                <div className="glass-strong relative p-4 rounded-lg">
                  <h3 className="text-text-light font-semibold">Glass Card</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-light mb-2">Glass Card</h3>
                <p className="text-text-light/70 text-sm mb-4">
                  A modern frosted glass effect card using CSS backdrop-filter.
                </p>
                <Link 
                  to="/cards/glass" 
                  className="inline-flex items-center text-sm text-accent-1 hover:text-accent-2 transition-colors"
                >
                  View Component <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            {/* Particles Background */}
            <motion.div 
              className="card group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 h-40 flex items-center justify-center bg-gradient-to-br from-glass-dark to-glass-light border-b border-glass-border relative overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute h-2 w-2 bg-accent-1 rounded-full" style={{ top: '20%', left: '30%' }}></div>
                  <div className="absolute h-2 w-2 bg-accent-2 rounded-full" style={{ top: '60%', left: '70%' }}></div>
                  <div className="absolute h-1 w-1 bg-accent-1 rounded-full" style={{ top: '40%', left: '50%' }}></div>
                  <div className="absolute h-1 w-1 bg-accent-2 rounded-full" style={{ top: '70%', left: '20%' }}></div>
                  <div className="absolute h-1 w-20 bg-accent-2/20 rounded-full" style={{ top: '30%', left: '40%' }}></div>
                  <div className="absolute h-1 w-12 bg-accent-1/20 rounded-full" style={{ top: '50%', left: '20%' }}></div>
                </div>
                <h3 className="text-text-light font-semibold relative z-10">Particles</h3>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-light mb-2">Particles Background</h3>
                <p className="text-text-light/70 text-sm mb-4">
                  An interactive particle network background using HTML Canvas.
                </p>
                <Link 
                  to="/backgrounds/particles" 
                  className="inline-flex items-center text-sm text-accent-1 hover:text-accent-2 transition-colors"
                >
                  View Component <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/components" 
              className="inline-flex items-center px-6 py-3 bg-glass-light backdrop-blur-sm text-text-light font-medium rounded-lg hover:bg-glass-light/80 hover:border-accent-1 border border-glass-border transition-all duration-300"
            >
              View All Components <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-glass-light text-accent-1 text-sm font-medium rounded-full mb-4 border border-glass-border">
              Why Choose ReactUI
            </span>
            <h2 className="text-3xl font-bold text-text-light mb-4">Built for Modern React Applications</h2>
            <p className="text-text-light/70 max-w-2xl mx-auto">
              Our components are designed with the latest React features and best practices in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-lg p-6">
              <div className="w-12 h-12 bg-glass-light rounded-lg flex items-center justify-center mb-4 border border-glass-border">
                <Sparkles className="text-accent-1" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-text-light mb-2">Modern & Beautiful</h3>
              <p className="text-text-light/70">
                Sleek, modern designs with attention to detail and beautiful animations.
              </p>
            </div>
            
            <div className="glass rounded-lg p-6">
              <div className="w-12 h-12 bg-glass-light rounded-lg flex items-center justify-center mb-4 border border-glass-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-1">
                  <path d="M12 2H2v10h10V2z"></path>
                  <path d="M12 12H2v10h10V12z"></path>
                  <path d="M22 2h-10v20h10V2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-light mb-2">Responsive & Accessible</h3>
              <p className="text-text-light/70">
                Components that work on all devices and follow accessibility best practices.
              </p>
            </div>
            
            <div className="glass rounded-lg p-6">
              <div className="w-12 h-12 bg-glass-light rounded-lg flex items-center justify-center mb-4 border border-glass-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-1">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-light mb-2">Easy to Customize</h3>
              <p className="text-text-light/70">
                Simple to integrate and customize to match your project's design system.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 glass rounded-lg mx-4 mb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-light mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-text-light/80 mb-8">
              Start using ReactUI components in your project today and create stunning user interfaces.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/components" 
                className="px-6 py-3 bg-gradient-to-r from-accent-1 to-accent-2 text-text-dark font-medium rounded-lg hover:shadow-lg hover:shadow-accent-1/50 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                to="/showcase" 
                className="px-6 py-3 bg-glass-light backdrop-blur-sm text-text-light font-medium rounded-lg hover:bg-glass-light/80 hover:border-accent-1 border border-glass-border transition-all duration-300"
              >
                View Showcase
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;