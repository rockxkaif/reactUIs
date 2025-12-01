import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-glass-light backdrop-blur-md border-t border-glass-border py-12 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-accent-1" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-1 to-accent-2">
                ReactUI
              </span>
            </Link>
            <p className="text-text-light/70 text-sm">
              Beautiful, modern React components for your next project. Open source and free to use.
            </p>
          </div>
          
          <div>
            <h3 className="text-text-light font-semibold mb-4">Components</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/text-animations" className="text-text-light/70 hover:text-accent-1 transition-colors text-sm">
                  Text Animations
                </Link>
              </li>
              <li>
                <Link to="/cards" className="text-text-light/70 hover:text-accent-1 transition-colors text-sm">
                  Cards
                </Link>
              </li>
              <li>
                <Link to="/backgrounds" className="text-text-light/70 hover:text-accent-1 transition-colors text-sm">
                  Backgrounds
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-text-light font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/showcase" className="text-text-light/70 hover:text-accent-1 transition-colors text-sm">
                  Showcase
                </Link>
              </li>
              <li>
                <a href="https://github.com/rockxkaif/reactUI" target="_blank" rel="noopener noreferrer" className="text-text-light/70 hover:text-accent-1 transition-colors text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-text-light/70 hover:text-accent-1 transition-colors text-sm">
                  Contributing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-text-light font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/rockxkaif/reactUI" target="_blank" rel="noopener noreferrer" className="text-text-light/70 hover:text-accent-1 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:kaifakhtar121@gmail.com" className="text-text-light/70 hover:text-accent-1 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-light/60 text-sm">
            © {new Date().getFullYear()} ReactUI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-text-light/60 hover:text-accent-1 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-text-light/60 hover:text-accent-1 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;