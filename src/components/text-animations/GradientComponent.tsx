import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const GradientComponent: React.FC = () => {
  const cssCode = `/* Add this to your CSS file */
.gradient-text {
  background: linear-gradient(
    to right,
    #6d28d9,
    #8b5cf6,
    #10b981,
    #f59e0b,
    #6d28d9
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradient 3s linear infinite;
}

@keyframes gradient {
  to {
    background-position: 200% center;
  }
}`;
  
  const usageCode = `import React from 'react';
import './gradient.css';

const GradientExample = () => {
  return (
    <h1 className="gradient-text text-4xl font-bold">
      Gradient Text
    </h1>
  );
};

export default GradientExample;`;

  return (
    <div className="flex min-h-screen space-bg">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-text-light mb-2">Gradient Text Animation</h1>
            <p className="text-text-light/70 mb-8">A colorful animated gradient text effect.</p>
            
            <div className="glass rounded-lg p-8 mb-8 flex items-center justify-center">
              <h1 className="gradient-text text-4xl font-bold">
                Gradient Text
              </h1>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">CSS</h2>
                <CodeBlock code={cssCode} language="css" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Usage</h2>
                <CodeBlock code={usageCode} language="jsx" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-text-light mb-4">How It Works</h2>
                <div className="glass rounded-lg p-6 text-text-light/80">
                  <p className="mb-4">
                    The gradient text effect uses CSS background gradients with text-clipping.
                  </p>
                  <p className="mb-4">
                    A linear gradient with multiple color stops is applied as the background.
                  </p>
                  <p className="mb-4">
                    The text color is set to transparent, and background-clip is set to text, which makes the background only visible through the text.
                  </p>
                  <p>
                    An animation shifts the background position, creating the moving gradient effect.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Customization</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-glass-dark backdrop-blur-sm">
                        <th className="border border-glass-border px-4 py-2 text-left text-text-light">Property</th>
                        <th className="border border-glass-border px-4 py-2 text-left text-text-light">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">background</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Change the gradient colors</td>
                      </tr>
                      <tr>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">background-size</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Adjust the width of the gradient</td>
                      </tr>
                      <tr>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">animation-duration</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Change the speed of the gradient animation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GradientComponent;