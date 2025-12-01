import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Type, Square, Layout, Menu, X } from 'lucide-react';

interface CategoryProps {
  title: string;
  icon: React.ReactNode;
  items: { name: string; path: string }[];
  isOpen: boolean;
  toggleOpen: () => void;
  currentPath: string;
}

const Category: React.FC<CategoryProps> = ({ 
  title, 
  icon, 
  items, 
  isOpen, 
  toggleOpen,
  currentPath
}) => {
  const isActive = items.some(item => currentPath.includes(item.path));
  
  return (
    <div className="mb-4">
      <div 
        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${
          isActive 
            ? 'bg-glass-light backdrop-blur-sm text-accent-1 border border-glass-border shadow-md' 
            : 'hover:bg-glass-light/50 hover:text-accent-1'
        }`}
        onClick={toggleOpen}
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </div>
      
      {isOpen && (
        <div className="mt-2 ml-6 space-y-1">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`block p-2 rounded-lg text-sm transition-all ${
                currentPath === item.path
                  ? 'bg-glass-light backdrop-blur-sm text-accent-1 border border-glass-border shadow-sm'
                  : 'text-text-light/70 hover:bg-glass-light/50 hover:text-accent-1'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [openCategories, setOpenCategories] = React.useState<Record<string, boolean>>({
    'text-animations': true,
    'cards': true,
    'backgrounds': true
  });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const textAnimations = [
    { name: 'Typewriter', path: '/text-animations/typewriter' },
    { name: 'Fade In', path: '/text-animations/fade-in' },
    { name: 'Glitch', path: '/text-animations/glitch' },
    { name: 'Wave', path: '/text-animations/wave' },
    { name: 'Gradient', path: '/text-animations/gradient' }
  ];

  const cards = [
    { name: 'Basic Card', path: '/cards/basic' },
    { name: 'Hover Card', path: '/cards/hover' },
    { name: 'Glass Card', path: '/cards/glass' }
  ];

  const backgrounds = [
    { name: 'Particles', path: '/backgrounds/particles' },
    { name: 'Gradient', path: '/backgrounds/gradient' }
  ];

  const sidebarContent = (
    <div className="py-8 px-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-text-light mb-2">Components</h2>
        <p className="text-text-light/70 text-sm">Browse all available components</p>
      </div>
      
      <nav>
        <Category
          title="Text Animations"
          icon={<Type size={18} />}
          items={textAnimations}
          isOpen={openCategories['text-animations']}
          toggleOpen={() => toggleCategory('text-animations')}
          currentPath={location.pathname}
        />
        
        <Category
          title="Cards"
          icon={<Square size={18} />}
          items={cards}
          isOpen={openCategories['cards']}
          toggleOpen={() => toggleCategory('cards')}
          currentPath={location.pathname}
        />
        
        <Category
          title="Backgrounds"
          icon={<Layout size={18} />}
          items={backgrounds}
          isOpen={openCategories['backgrounds']}
          toggleOpen={() => toggleCategory('backgrounds')}
          currentPath={location.pathname}
        />
      </nav>
      
      <div className="mt-12 p-4 rounded-lg bg-glass-light backdrop-blur-sm border border-glass-border shadow-md">
        <h3 className="text-text-light font-medium mb-2">Need help?</h3>
        <p className="text-text-light/70 text-sm mb-3">Check out our documentation or join our community.</p>
        <a 
          href="https://github.com/rockxkaif/reactUI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-accent-1 hover:text-accent-2 flex items-center transition-colors"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );

  // Mobile sidebar toggle button
  const mobileToggle = (
    <button 
      className="md:hidden fixed bottom-4 right-4 z-50 bg-gradient-to-r from-accent-1 to-accent-2 text-text-dark p-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-accent-1/50 transition-all"
      onClick={toggleMobileSidebar}
      aria-label="Toggle sidebar"
    >
      {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="w-64 h-screen sticky top-0 bg-glass-light backdrop-blur-md border-r border-glass-border overflow-y-auto hidden md:block shadow-lg">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar */}
      {isMobile && (
        <>
          {mobileToggle}
          <div 
            className={`fixed inset-0 bg-glass-dark backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
              isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={(e) => e.target === e.currentTarget && setIsMobileSidebarOpen(false)}
          >
            <div className="w-64 h-full overflow-y-auto bg-glass-light border-r border-glass-border shadow-xl" onClick={(e) => e.stopPropagation()}>
              {sidebarContent}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;