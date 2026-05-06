import React, { useState, useEffect } from 'react';

const SYSTEMS = [
  {
    id: '01',
    name: 'NexusCart',
    type: 'AI Middleware Pipeline',
    status: 'ACTIVE',
    problem: 'Shopify to WordPress data fragmentation.',
    flow: 'Shopify → Webhooks → Llama 3 (Groq) → WP REST API',
    architecture: 'High-performance middleware utilizing Groq for real-time SEO content generation and media pipeline synchronization.',
    output: 'Fully automated Shopify listings synchronized to WordPress blogs with high-res assets.',
    github: 'https://github.com/Sanidhya-Sehgal',
    live: 'https://nexus-cart-theta.vercel.app/',
    image: '/nexus_new.png'
  },
  {
    id: '02',
    name: 'Deep Research Agent',
    type: 'Autonomous Research System',
    status: 'ONLINE',
    problem: 'Manual sourcing of deep technical data.',
    flow: 'Search → Analysis → Synthesis → Report',
    architecture: 'Dual-mode AI agent (Agno + Groq) with autonomous web search capabilities.',
    output: 'Comprehensive research reports with live web citations.',
    github: 'https://github.com/Sanidhya-Sehgal/deep-researcher-agent',
    live: 'https://deep-research-system.streamlit.app/',

    image: '/deep_research.png'
  },
  {
    id: '03',
    name: 'HMS Central',
    type: 'Clinical Management System',
    status: 'ONLINE',
    problem: 'Inefficient paper-based record retrieval.',
    flow: 'Patient Input → PHP Processing → MySQL Cluster → UI Feedback',
    architecture: 'Full-stack relational database system managing multi-role access (Doctor/Patient/Admin) and automated billing.',
    output: 'Secured clinical data environment with sub-second record retrieval performance.',
    github: 'https://github.com/Sanidhya-Sehgal',
    live: 'https://hospital-manager-nine.vercel.app/',
    image: '/hms.png'
  }
];

const EXPERIENCE = [
  { year: '2025', role: 'Web Dev Exec', org: 'Placement Cell, JNU', status: 'ACTIVE' },
  { year: '2024', role: 'VP', org: 'Drone Club, JNU', status: 'ACTIVE' },
  { year: '2023', role: 'Lead', org: 'Blockchain GDG', status: 'COMPLETED' },
  { year: '2023', role: 'VP', org: 'Bandish (Music Club)', status: 'COMPLETED' }
];

const MODULES = ['React', 'Node.js', 'PHP', 'Python', 'Groq API', 'Supabase', 'Figma', 'MySQL'];

const Typewriter = ({ text, delay = 50, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <span className="typing-cursor">{currentText}</span>;
};

const App = () => {
  const [booting, setBooting] = useState(true);
  const [bootStep, setBootStep] = useState(0);
  const [activeTab, setActiveTab] = useState('SYSTEMS');
  const [selectedSystem, setSelectedSystem] = useState(null);

  const bootSequence = [
    'initializing portfolio...',
    'loading system kernels...',
    'fetching remote modules...',
    'security handshake complete.',
    'ready.'
  ];

  useEffect(() => {
    if (bootStep < bootSequence.length) {
      const timer = setTimeout(() => setBootStep(prev => prev + 1), 800);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setBooting(false), 500);
    }
  }, [bootStep]);

  if (booting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background font-mono text-terminal-text p-6">
        <div className="max-w-md w-full">
          {bootSequence.slice(0, bootStep + 1).map((line, i) => (
            <div key={i} className="mb-2 opacity-80">
              <span className="mr-2 opacity-50">[{i}]</span>
              {i === bootStep ? <Typewriter text={line} delay={30} /> : line}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-mono text-terminal-text p-4 md:p-8 relative">
      <div className="grid-bg" />
      <div className="scanline" />

      {/* Header Info */}
      <header className="flex flex-col md:flex-row justify-between items-start mb-12 border-b border-terminal-border pb-6">
        <div className="mb-4 md:mb-0">
          <div className="text-xs opacity-50 mb-1">SYSTEM_OPERATOR</div>
          <div className="text-xl font-bold tracking-tighter">SANIDHYA SEHGAL // BUILDING_SYNCHRONIZED_SYSTEMS</div>
        </div>
        <div className="text-right">
          <div className="text-xs opacity-50 mb-1">LOCAL_TIME</div>
          <div className="text-sm uppercase">{new Date().toLocaleTimeString()}</div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-250px)]">
        {/* Navigation Sidebar */}
        <nav className="lg:col-span-2 flex flex-col gap-4">
          {['SYSTEMS', 'ARCHITECTURE', 'LOGS', 'CONNECT'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left terminal-btn ${activeTab === tab ? 'bg-terminal-text text-background' : ''}`}
            >
              {'>'} {tab}
            </button>
          ))}
          <a href="/resume.pdf" download className="text-left terminal-btn mt-4 text-terminal-dim border-terminal-dim hover:text-white hover:border-white">
            [ DOWNLOAD_RESUME ]
          </a>
        </nav>

        {/* Main Interface Content */}
        <div className="lg:col-span-10 terminal-panel p-6 overflow-y-auto">
          {activeTab === 'SYSTEMS' && (
            <div className="flex flex-col gap-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">I build systems that <span className="animate-pulse">stay in sync.</span></h2>
                <p className="text-terminal-dim text-sm max-w-2xl leading-relaxed">
                  Fascinated by high-performance data pipelines and autonomous agents. 
                  Approaching code as system architecture where every module must maintain equilibrium.
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                {SYSTEMS.map(sys => (
                  <button 
                    key={sys.id}
                    onClick={() => setSelectedSystem(sys)}
                    className="group flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-terminal-border hover:bg-terminal-text/5 transition-all"
                  >
                    <div className="flex gap-4 items-center">
                      <span className="text-terminal-dim text-xs">[{sys.id}]</span>
                      <span className="text-lg font-bold group-hover:translate-x-2 transition-transform">{sys.name}</span>
                    </div>
                    <div className="flex gap-6 mt-2 md:mt-0">
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] opacity-50 uppercase">Type</span>
                        <span className="text-xs">{sys.type}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] opacity-50 uppercase">Status</span>
                        <span className={`text-xs ${sys.status === 'ACTIVE' ? 'text-green-400' : 'text-terminal-dim'}`}>{sys.status}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ARCHITECTURE' && (
            <div className="flex flex-col gap-12">
              <h2 className="text-xl font-bold border-l-4 border-terminal-text pl-4">MODULES_LOADED</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {MODULES.map(mod => (
                  <div key={mod} className="p-3 border border-terminal-border flex justify-between items-center bg-terminal-text/5">
                    <span className="text-sm font-bold">{mod}</span>
                    <div className="w-2 h-2 rounded-full bg-terminal-text shadow-[0_0_8px_cyan]" />
                  </div>
                ))}
              </div>
              <div className="p-6 border border-terminal-border border-dashed opacity-50">
                <div className="text-xs mb-4 uppercase tracking-[0.2em]">Research_Focus</div>
                <div className="text-sm leading-relaxed">
                  Currently investigating autonomous multi-agent orchestration for distributed data processing.
                  Interests include Web3 architecture, UAV flight control dynamics, and LLM-driven automation pipelines.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'LOGS' && (
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold mb-4">SYSTEM_HISTORY_LOG</h2>
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="flex gap-6 p-4 border-l border-terminal-border relative">
                  <div className="absolute left-[-1px] top-0 h-4 w-1 bg-terminal-text" />
                  <div className="text-terminal-dim text-sm mt-1">[{exp.year}]</div>
                  <div>
                    <div className="font-bold">{exp.role} @ {exp.org}</div>
                    <div className="text-xs opacity-50 mt-1 uppercase">Process_Status: {exp.status}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'CONNECT' && (
            <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
              <h2 className="text-2xl font-bold tracking-widest uppercase">Initiate Handshake</h2>
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <a href="mailto:sanidh76soe@jnu.ac.in" className="terminal-btn flex justify-between items-center py-4">
                  <span>EMAIL</span>
                  <span>sanidh76soe@jnu.ac.in</span>
                </a>
                <a href="https://github.com/Sanidhya-Sehgal" target="_blank" className="terminal-btn flex justify-between items-center py-4">
                  <span>GITHUB</span>
                  <span>@Sanidhya-Sehgal</span>
                </a>
                <a href="https://linkedin.com/in/sanidhyasehgal" target="_blank" className="terminal-btn flex justify-between items-center py-4">
                  <span>LINKEDIN</span>
                  <span>@sanidhyasehgal</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* System Inspector (Detail View) */}
      {selectedSystem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/95 backdrop-blur-md">
          <div className="terminal-panel max-w-5xl w-full h-full overflow-hidden flex flex-col">
            <div className="p-4 border-b border-terminal-border flex justify-between items-center bg-terminal-text/5">
              <span className="text-xs font-bold uppercase tracking-widest">System_Inspector // ID_{selectedSystem.id}</span>
              <button 
                onClick={() => setSelectedSystem(null)}
                className="hover:text-white text-terminal-dim transition-colors"
              >
                [ CLOSE_PANEL ]
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 uppercase">{selectedSystem.name}</h3>
                  <div className="status-tag inline-block">{selectedSystem.type}</div>
                </div>

                <div className="flex flex-col gap-6">
                  <section>
                    <div className="text-[10px] text-terminal-dim uppercase mb-2">{">>"} Problem</div>
                    <p className="text-sm leading-relaxed">{selectedSystem.problem}</p>
                  </section>
                  
                  <section>
                    <div className="text-[10px] text-terminal-dim uppercase mb-2">{">>"} System_Flow</div>
                    <div className="p-3 bg-terminal-text/5 border border-terminal-border text-xs font-mono">
                      {selectedSystem.flow}
                    </div>
                  </section>

                  <section>
                    <div className="text-[10px] text-terminal-dim uppercase mb-2">{">>"} Architecture</div>
                    <p className="text-sm leading-relaxed opacity-80">{selectedSystem.architecture}</p>
                  </section>

                  <section>
                    <div className="text-[10px] text-terminal-dim uppercase mb-2">{">>"} Output</div>
                    <p className="text-sm leading-relaxed opacity-80">{selectedSystem.output}</p>
                  </section>
                </div>

                <div className="flex gap-4 mt-auto pt-6">
                  <a href={selectedSystem.github} target="_blank" className="terminal-btn flex-1 text-center py-2 bg-terminal-text text-background">VIEW_SOURCE</a>
                  <a href={selectedSystem.live} className="terminal-btn flex-1 text-center py-2">LIVE_SYSTEM</a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {selectedSystem.image ? (
                  <div className="flex flex-col gap-2">
                    <div className="system-frame group">
                      <div className="system-header">
                        <div className="flex gap-1.5">
                          <div className="system-header-dot bg-red-400" />
                          <div className="system-header-dot bg-yellow-400" />
                          <div className="system-header-dot bg-green-400" />
                        </div>
                        <span>SYSTEM_VIEW // {selectedSystem.name}</span>
                        <div className="opacity-50">V3.0.4</div>
                      </div>
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={selectedSystem.image} 
                          alt={selectedSystem.name} 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 image-glow" 
                        />
                        <div className="scanline-effect" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[9px] uppercase tracking-wider opacity-40">Data_Integrity: Verified</span>
                      <span className="text-[9px] uppercase tracking-wider opacity-40 text-pixel-accent">Encrypted_Link: Active</span>
                    </div>
                  </div>
                ) : (
                  <div className="border-[3px] border-pixel-border p-12 flex flex-col items-center justify-center bg-pixel-card text-xs text-terminal-dim text-center shadow-pixel">
                    <div className="mb-4 opacity-20">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    [ NO_VISUAL_DATA_AVAILABLE ]
                  </div>
                )}
                <div className="text-[10px] text-terminal-dim font-mono leading-tight">
                  LOGS_DUMP:<br/>
                  {">"} initialized system architecture v1.0.4<br/>
                  {">"} testing data integrity... PASS<br/>
                  {">"} checking dependencies... LOADED<br/>
                  {">"} ready for deployment.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 w-full p-4 flex justify-between items-center text-[10px] opacity-30 pointer-events-none uppercase tracking-[0.3em]">
        <div>Sanidhya Sehgal // Port_Interface_v3.0</div>
        <div className="hidden md:block">Connected_via_JNU_Network // Secure_Handshake</div>
        <div>2026_EST</div>
      </footer>
    </div>
  );
};

export default App;
