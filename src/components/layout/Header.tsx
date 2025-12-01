import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-glass-light backdrop-blur-md border-b border-glass-border shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-accent-1" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-1 to-accent-2">
            ReactUI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'text-accent-1' : 'text-text-light hover:text-accent-1'}`}
          >
            Home
          </Link>
          <Link 
            to="/components" 
            className={`nav-link ${location.pathname.includes('/components') ? 'text-accent-1' : 'text-text-light hover:text-accent-1'}`}
          >
            Components
          </Link>
          <Link 
            to="/showcase" 
            className={`nav-link ${location.pathname.includes('/showcase') ? 'text-accent-1' : 'text-text-light hover:text-accent-1'}`}
          >
            Showcase
          </Link>
          <a 
            href="https://github.com/rockxkaif/reactUI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-accent-1 to-accent-2 text-text-dark rounded-lg hover:shadow-lg hover:shadow-accent-1/50 transition-all duration-300 font-medium"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-light hover:text-accent-1 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-glass-dark backdrop-blur-md border-t border-glass-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'text-accent-1' : 'text-text-light hover:text-accent-1'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/components" 
              className={`nav-link ${location.pathname.includes('/components') ? 'text-accent-1' : 'text-text-light hover:text-accent-1'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            <Link 
              to="/showcase" 
              className={`nav-link ${location.pathname.includes('/showcase') ? 'text-accent-1' : 'text-text-light hover:text-accent-1'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Showcase
            </Link>
            <a 
              href="https://github.com/rockxkaif/reactUI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-accent-1 to-accent-2 text-text-dark rounded-lg hover:shadow-lg hover:shadow-accent-1/50 transition-all duration-300 inline-block font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;