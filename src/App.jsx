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
    github: 'https://github.com/Sanidhya-Sehgal/nexus_cart',
    live: 'https://nexus-cart-theta.vercel.app/',
    image: '/nexus_cart_final.png'
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
    github: 'https://github.com/Sanidhya-Sehgal/hospital-manager',
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-background font-mono text-terminal-text p-6 crt-container relative overflow-hidden">
        <div className="grid-bg opacity-20" />
        <div className="crt-overlay" />
        
        <div className="max-w-xl w-full relative z-10">
          <div className="mb-8 border-l-4 border-pixel-pink pl-6 py-2">
            <h1 className="text-3xl font-pixel pixel-text-shadow leading-tight">SANIDHYA_OS <span className="text-pixel-pink">v3.4.0</span></h1>
            <div className="text-[10px] opacity-40 uppercase tracking-[0.3em]">Kernel: Build_2026_MAY_07</div>
          </div>

          <div className="space-y-3 mb-10">
            {bootSequence.slice(0, bootStep + 1).map((line, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-[10px] opacity-30 mt-1">0x00{i}A</span>
                <div className={`${i === bootStep ? 'text-pixel-pink' : 'text-terminal-text opacity-70'} text-sm`}>
                  {i === bootStep ? (
                    <div className="flex items-center gap-2">
                      <span className="animate-pulse">_</span>
                      <Typewriter text={line.toUpperCase()} delay={20} />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-[10px]">[ OK ]</span>
                      <span>{line.toUpperCase()}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-pixel opacity-50 uppercase tracking-widest">
              <span>Loading_Modules</span>
              <span>{Math.min(100, Math.round((bootStep / bootSequence.length) * 100))}%</span>
            </div>
            <div className="w-full h-4 border-2 border-terminal-border p-0.5 bg-black/50">
              <div 
                className="h-full bg-terminal-text transition-all duration-500 shadow-[0_0_10px_cyan]"
                style={{ width: `${(bootStep / bootSequence.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mt-12 text-[9px] opacity-20 font-mono text-center uppercase tracking-[0.5em]">
            Authorized Access Only // JNU_NCR_SECTOR_7
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-mono text-terminal-text p-4 md:p-8 relative crt-container">
      <div className="grid-bg" />
      <div className="scanline" />
      <div className="crt-overlay" />

      {/* Header Info */}
      <header className="flex flex-col md:flex-row justify-between items-start mb-8 border-b-2 border-terminal-border pb-6 relative z-10">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
            <div className="text-[10px] font-pixel tracking-widest text-green-500">SYSTEM_STATUS: OPERATIONAL</div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter pixel-text-shadow font-pixel">
            SANIDHYA SEHGAL <span className="text-terminal-dim">//</span> <span className="text-pixel-pink">PIXEL_SYSTEMS</span>
          </h1>
          <div className="text-[10px] opacity-40 mt-1 font-pixel">V3.4.0 // ARCH: X64_SYSTEM_BUILDER</div>
        </div>
        <div className="text-right flex flex-col items-end gap-1">
          <div className="text-[10px] opacity-50 font-pixel uppercase tracking-widest">NETWORK_ID: JNU_NODE_01</div>
          <div className="text-sm font-pixel text-pixel-pink">{new Date().toLocaleTimeString()}</div>
          <div className="flex gap-1 mt-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`w-4 h-1 ${i < 4 ? 'bg-terminal-text' : 'bg-terminal-dim'}`} />
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-220px)] relative z-10">
        {/* Navigation Sidebar */}
        <nav className="lg:col-span-2 flex flex-col gap-3">
          <div className="text-[10px] mb-2 opacity-30 font-pixel uppercase">Navigation</div>
          {['SYSTEMS', 'ARCHITECTURE', 'LOGS', 'CONNECT'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left terminal-btn group relative overflow-hidden ${activeTab === tab ? 'bg-terminal-text text-background shadow-neon scale-[1.05] z-10' : ''}`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className={activeTab === tab ? 'animate-bounce' : 'group-hover:translate-x-1 transition-transform'}>
                  {activeTab === tab ? '■' : '□'}
                </span>
                {tab}
              </span>
            </button>
          ))}
          <div className="mt-8">
            <div className="text-[10px] mb-2 opacity-30 font-pixel uppercase">Documentation</div>
            <a href="/resume.pdf" download className="text-left terminal-btn border-terminal-dim text-terminal-dim hover:text-pixel-pink hover:border-pixel-pink">
              [ GET_RESUME ]
            </a>
          </div>
        </nav>

        {/* Main Interface Content */}
        <div className="lg:col-span-10 terminal-panel p-0 flex flex-col overflow-hidden">
          <div className="os-window-header">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 bg-pixel-pink/30 border border-pixel-pink/50" />
              <span>MAIN_FRAME // {activeTab}</span>
            </div>
            <div className="opacity-40">0x{activeTab.charCodeAt(0).toString(16)}FF</div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
            {activeTab === 'SYSTEMS' && (
              <div className="flex flex-col gap-8">
                <div className="mb-6 relative">
                  <h2 className="text-3xl font-bold mb-4 font-pixel leading-tight">
                    BUILDING SYSTEMS THAT <br/>
                    <span className="text-pixel-pink animate-pulse">STAY IN SYNC.</span>
                  </h2>
                  <p className="text-terminal-dim text-sm max-w-2xl leading-relaxed font-mono italic">
                    {">"} Specialized in high-performance data pipelines and autonomous AI orchestration. 
                    Approaching code as biological system architecture where equilibrium is the ultimate goal.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SYSTEMS.map(sys => (
                    <button 
                      key={sys.id}
                      onClick={() => setSelectedSystem(sys)}
                      className="group flex flex-col p-5 border-2 border-terminal-border hover:border-terminal-text hover:bg-terminal-text/5 transition-all relative overflow-hidden text-left"
                    >
                      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                        <span className="font-pixel text-4xl">{sys.id}</span>
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 border-2 border-terminal-text flex items-center justify-center font-pixel text-xs">
                          {sys.id}
                        </div>
                        <span className="text-xl font-bold font-pixel tracking-tighter group-hover:text-pixel-pink transition-colors">{sys.name}</span>
                      </div>
                      <div className="flex flex-col gap-1 mb-4">
                        <span className="text-[10px] opacity-40 uppercase font-pixel tracking-widest">Type</span>
                        <span className="text-xs font-mono">{sys.type}</span>
                      </div>
                      <div className="mt-auto flex justify-between items-center">
                        <div className="status-tag">{sys.status}</div>
                        <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity font-pixel text-pixel-pink">[ INSPECT ]</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ARCHITECTURE' && (
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="text-xl font-pixel mb-6 flex items-center gap-3">
                    <span className="text-pixel-pink">#</span> MODULE_STACK_INITIALIZED
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {MODULES.map(mod => (
                      <div key={mod} className="p-4 border-2 border-terminal-border flex flex-col gap-2 bg-black hover:border-terminal-text transition-colors group">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-pixel group-hover:text-pixel-pink transition-colors">{mod}</span>
                          <div className="w-1.5 h-1.5 bg-terminal-text shadow-[0_0_5px_cyan]" />
                        </div>
                        <div className="w-full h-1 bg-terminal-border overflow-hidden">
                          <div className="h-full bg-terminal-text/50 w-[80%]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 border-2 border-dashed border-terminal-border bg-terminal-text/5 relative">
                  <div className="absolute -top-3 left-6 px-3 bg-pixel-card text-[10px] font-pixel text-pixel-pink uppercase">Research_Focus</div>
                  <div className="text-sm leading-relaxed font-mono">
                    <span className="text-terminal-text font-bold">CURRENT_INVESTIGATION:</span> Multi-agent orchestration for distributed data processing.
                    Interests include Web3 architecture, UAV flight control dynamics, and LLM-driven automation pipelines.
                    <br/><br/>
                    <span className="opacity-50 italic">// System is currently optimizing for sub-second latency in autonomous decision loops.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'LOGS' && (
              <div className="flex flex-col gap-8">
                <h2 className="text-xl font-pixel mb-4 flex items-center gap-3">
                  <span className="text-pixel-pink">#</span> SYSTEM_DEPLOYMENT_HISTORY
                </h2>
                <div className="flex flex-col">
                  {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 border-2 border-terminal-text bg-black group-hover:bg-pixel-pink transition-colors" />
                        {i !== EXPERIENCE.length - 1 && <div className="w-0.5 flex-1 bg-terminal-border" />}
                      </div>
                      <div className="pb-12 group-hover:translate-x-2 transition-transform">
                        <div className="text-pixel-pink font-pixel text-sm mb-1">{exp.year}</div>
                        <div className="text-lg font-bold font-pixel tracking-tighter uppercase">{exp.role}</div>
                        <div className="text-sm opacity-60 mb-2">{exp.org}</div>
                        <div className="status-tag border-terminal-dim text-terminal-dim group-hover:border-pixel-pink group-hover:text-pixel-pink">STATUS: {exp.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'CONNECT' && (
              <div className="flex flex-col items-center justify-center h-full gap-12 text-center py-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-pixel-pink/20 blur-2xl animate-pulse" />
                  <h2 className="text-4xl md:text-5xl font-pixel tracking-[0.2em] uppercase relative z-10 pixel-text-shadow">
                    ESTABLISH<br/><span className="text-pixel-pink">HANDSHAKE</span>
                  </h2>
                </div>
                
                <div className="flex flex-col gap-4 w-full max-w-md">
                  {[
                    { label: 'EMAIL', value: 'sanidh76soe@jnu.ac.in', href: 'mailto:sanidh76soe@jnu.ac.in' },
                    { label: 'GITHUB', value: '@Sanidhya-Sehgal', href: 'https://github.com/Sanidhya-Sehgal' },
                    { label: 'LINKEDIN', value: '@sanidhyasehgal', href: 'https://linkedin.com/in/sanidhyasehgal' }
                  ].map(link => (
                    <a 
                      key={link.label}
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="terminal-btn flex justify-between items-center py-5 px-6 group"
                    >
                      <span className="font-pixel text-xs">{link.label}</span>
                      <span className="text-xs font-mono opacity-60 group-hover:opacity-100 group-hover:text-pixel-pink">{link.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* System Inspector (Detail View) */}
      {selectedSystem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/95 backdrop-blur-sm">
          <div className="terminal-panel max-w-6xl w-full h-[90vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] border-4 border-terminal-text">
            <div className="os-window-header bg-terminal-text text-background">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-background" />
                <span className="font-pixel">SYSTEM_INSPECTOR // {selectedSystem.name}</span>
              </div>
              <button 
                onClick={() => setSelectedSystem(null)}
                className="hover:bg-pixel-pink hover:text-white px-2 transition-colors font-pixel"
              >
                [X] CLOSE
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 custom-scrollbar">
              <div className="flex flex-col gap-10">
                <div className="relative">
                  <div className="text-[10px] text-pixel-pink font-pixel mb-2 tracking-[0.3em]">PROJECT_ENTITY_0{selectedSystem.id}</div>
                  <h3 className="text-4xl font-bold uppercase font-pixel tracking-tighter pixel-text-shadow">{selectedSystem.name}</h3>
                  <div className="mt-4 flex gap-2">
                    <div className="status-tag border-pixel-pink text-pixel-pink">{selectedSystem.type}</div>
                    <div className="status-tag">STATUS: {selectedSystem.status}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  {[
                    { label: 'PROBLEM_STATEMENT', content: selectedSystem.problem },
                    { label: 'SYSTEM_FLOW', content: selectedSystem.flow, mono: true },
                    { label: 'ARCHITECTURE', content: selectedSystem.architecture },
                    { label: 'OUTPUT_VALIDATION', content: selectedSystem.output }
                  ].map(sec => (
                    <section key={sec.label} className="border-l-2 border-terminal-border pl-6 hover:border-pixel-pink transition-colors">
                      <div className="text-[10px] text-terminal-dim font-pixel uppercase mb-3 tracking-widest">{sec.label}</div>
                      <div className={`text-sm leading-relaxed ${sec.mono ? 'font-mono bg-terminal-text/5 p-4 border border-terminal-border' : 'opacity-80'}`}>
                        {sec.content}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8">
                  <a href={selectedSystem.github} target="_blank" className="terminal-btn flex-1 py-4 bg-terminal-text text-background font-pixel">
                    VIEW_SOURCE_CODE
                  </a>
                  <a href={selectedSystem.live} target="_blank" rel="noopener noreferrer" className="terminal-btn flex-1 py-4 font-pixel text-pixel-pink border-pixel-pink">
                    LIVE_SYSTEM_LINK
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {selectedSystem.image ? (
                  <div className="flex flex-col gap-3">
                    <div className="relative border-4 border-terminal-border bg-black group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                      <div className="absolute top-4 left-4 z-20 font-pixel text-[10px] bg-black/80 px-2 py-1 border border-terminal-text">
                        REAL_TIME_PREVIEW
                      </div>
                      <img 
                        src={selectedSystem.image} 
                        alt={selectedSystem.name} 
                        className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 pixelated scale-105 group-hover:scale-100" 
                      />
                      <div className="absolute bottom-4 right-4 z-20 font-pixel text-[10px] text-pixel-pink animate-pulse">
                        [ SCROLL_TO_ZOOM ]
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-1 font-pixel text-[8px] opacity-40 uppercase tracking-[0.2em]">
                      <span>Check_Sum: PASS</span>
                      <span>Asset_Sync: Verified</span>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video border-4 border-dashed border-terminal-border flex flex-col items-center justify-center bg-black/50 text-[10px] font-pixel text-terminal-dim">
                    <div className="text-4xl mb-4">?</div>
                    [ NO_VISUAL_FEEDBACK_AVAILABLE ]
                  </div>
                )}
                
                <div className="p-6 bg-black border-2 border-terminal-border font-mono text-[11px] leading-tight text-terminal-dim">
                  <div className="text-terminal-text mb-2">SYSTEM_LOG_DUMP:</div>
                  <div className="opacity-80">
                    {">"} Initializing secure link... OK<br/>
                    {">"} Pulling remote assets... DONE<br/>
                    {">"} Mapping architecture... SUCCESS<br/>
                    {">"} Verifying deployment integrity... 100%<br/>
                    {">"} System is stable and ready for inspection.
                  </div>
                  <div className="mt-4 flex gap-1">
                    <div className="w-2 h-2 bg-terminal-text animate-pulse" />
                    <div className="w-2 h-2 bg-terminal-text/50" />
                    <div className="w-2 h-2 bg-terminal-text/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 w-full p-4 flex justify-between items-center text-[8px] md:text-[10px] opacity-40 pointer-events-none font-pixel uppercase tracking-[0.4em] z-50 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-pixel-pink" />
          <span>Sanidhya Sehgal // Port_Interface_v3.4.0</span>
        </div>
        <div className="hidden md:block">EST_TIME: {new Date().getFullYear()}_SESSION // NODE: JNU_NCR_01</div>
        <div className="text-terminal-text">SECURE_HANDSHAKE: ACTIVE</div>
      </footer>
    </div>
  );
};

export default App;
