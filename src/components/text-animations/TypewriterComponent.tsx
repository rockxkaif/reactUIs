import React from 'react';
import Typewriter from 'typewriter-effect';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const TypewriterComponent: React.FC = () => {
  const installCode = `npm install typewriter-effect`;
  
  const importCode = `import Typewriter from 'typewriter-effect';`;
  
  const usageCode = `import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterExample = () => {
  return (
    <div className="text-2xl font-bold">
      <Typewriter
        options={{
          strings: ['Hello World!', 'Welcome to ReactUI', 'Typewriter Effect'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterExample;`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen space-bg">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-text-light mb-2">Typewriter Animation</h1>
            <p className="text-text-light/70 mb-8">A typewriter effect animation for your text.</p>
            
            <div className="glass rounded-lg p-4 md:p-8 mb-8 flex items-center justify-center">
              <div className="text-2xl font-bold text-text-light">
                <Typewriter
                  options={{
                    strings: ['Hello World!', 'Welcome to ReactUI', 'Typewriter Effect'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Installation</h2>
                <CodeBlock code={installCode} language="bash" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Import</h2>
                <CodeBlock code={importCode} language="javascript" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Usage</h2>
                <CodeBlock code={usageCode} language="jsx" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Props</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-glass-dark backdrop-blur-sm">
                        <th className="border border-glass-border px-4 py-2 text-left text-text-light">Prop</th>
                        <th className="border border-glass-border px-4 py-2 text-left text-text-light">Type</th>
                        <th className="border border-glass-border px-4 py-2 text-left text-text-light">Default</th>
                        <th className="border border-glass-border px-4 py-2 text-left text-text-light">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">options</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Object</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">-</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Configuration options for the typewriter</td>
                      </tr>
                      <tr>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">onInit</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Function</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">-</td>
                        <td className="border border-glass-border px-4 py-2 text-text-light/80">Callback function when typewriter is initialized</td>
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

export default TypewriterComponent;