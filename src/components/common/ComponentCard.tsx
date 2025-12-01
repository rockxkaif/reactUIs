import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ComponentCardProps {
  title: string;
  description: string;
  path: string;
  preview: React.ReactNode;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ title, description, path, preview }) => {
  return (
    <div className="card group overflow-hidden h-full">
      <div className="p-4 h-40 flex items-center justify-center bg-gradient-to-br from-glass-dark to-glass-light border-b border-glass-border">
        {preview}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text-light mb-2">{title}</h3>
        <p className="text-text-light/70 text-sm mb-4">{description}</p>
        <Link 
          to={path} 
          className="inline-flex items-center text-sm text-accent-1 hover:text-accent-2 transition-colors"
        >
          View Component <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ComponentCard;