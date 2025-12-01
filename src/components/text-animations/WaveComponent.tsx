import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const WaveComponent: React.FC = () => {
  const cssCode = `/* Add this to your CSS file */
.wave-text span {
  display: inline-block;
  animation-name: wave;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.wave-text span:nth-child(1) { animation-delay: 0.0s; }
.wave-text span:nth-child(2) { animation-delay: 0.1s; }
.wave-text span:nth-child(3) { animation-delay: 0.2s; }
.wave-text span:nth-child(4) { animation-delay: 0.3s; }
.wave-text span:nth-child(5) { animation-delay: 0.4s; }
.wave-text span:nth-child(6) { animation-delay: 0.5s; }
.wave-text span:nth-child(7) { animation-delay: 0.6s; }
.wave-text span:nth-child(8) { animation-delay: 0.7s; }
.wave-text span:nth-child(9) { animation-delay: 0.8s; }
.wave-text span:nth-child(10) { animation-delay: 0.9s; }

@keyframes wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}`;
  
  const usageCode = `import React from 'react';
import './wave.css';

const WaveExample = () => {
  const text = "Wave Text";
  
  return (
    <h1 className="wave-text text-2xl font-bold">
      {text.split('').map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </h1>
  );
};

export default WaveExample;`;

  const text = "Wave Text";

  return (
    <div className="flex min-h-screen space-bg">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-text-light mb-2">Wave Text Animation</h1>
            <p className="text-text-light/70 mb-8">A playful wave animation for text characters.</p>
            
            <div className="glass rounded-lg p-8 mb-8 flex items-center justify-center">
              <h1 className="wave-text text-3xl font-bold text-text-light">
                {text.split('').map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
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
                    The wave animation works by splitting the text into individual characters using JavaScript.
                  </p>
                  <p className="mb-4">
                    Each character is wrapped in a span element and given a staggered animation delay.
                  </p>
                  <p className="mb-4">
                    The animation moves each character up and down in a wave-like pattern.
                  </p>
                  <p>
                    By setting different animation delays for each character, the wave effect is created.
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
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">animation-duration</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Change the speed of the wave animation</td>
                      </tr>
                      <tr>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">animation-delay</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Adjust the stagger between characters</td>
                      </tr>
                      <tr>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">transform</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Change the height of the wave by adjusting translateY value</td>
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

export default WaveComponent;