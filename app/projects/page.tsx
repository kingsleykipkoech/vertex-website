"use client";

import { useState } from "react";

const PROJECTS = [
    {
        id: "P-01",
        title: "NeuroLink Core",
        description: "High-bandwidth BCI interface prototype leveraging decentralized microservices.",
        tech: ["WebSockets", "Rust", "Next.js"],
        status: "Active",
    },
    {
        id: "P-02",
        title: "Synthetic Atmosphere",
        description: "Generative audio-visual environments that respond to biometric input data.",
        tech: ["Three.js", "WebGL", "Tone.js"],
        status: "Beta",
    },
    {
        id: "P-03",
        title: "Quantum Ledger",
        description: "Post-quantum cryptographic database implementation for secure archival.",
        tech: ["PostgreSQL", "Go", "Cryptography"],
        status: "Archived",
    },
    {
        id: "P-04",
        title: "Neon City Routing",
        description: "AI-driven algorithmic navigation system for optimizing delivery meshes.",
        tech: ["Python", "TensorFlow", "React"],
        status: "Active",
    },
];

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <div className="min-h-[calc(100vh-80px)] relative overflow-hidden bg-bg-color px-6 py-12">
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <header className="mb-16 border-l-4 border-neon-blue pl-6">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">
                        Showcase Directory
                    </h1>
                    <p className="text-neon-purple font-mono uppercase tracking-widest text-sm">
            // Accessing active modules...
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((p) => (
                        <div
                            key={p.id}
                            className={`relative bg-cyber-dark border group p-8 transition-all duration-500 overflow-hidden
                ${hoveredProject === p.id ? 'border-neon-blue shadow-[0_0_30px_rgba(0,240,255,0.2)]' : 'border-cyber'}
              `}
                            onMouseEnter={() => setHoveredProject(p.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent h-full w-full -translate-y-full group-hover:animate-[scanline_2s_linear_infinite]"></div>

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <span className={`font-mono text-sm transition-colors duration-300 ${hoveredProject === p.id ? 'text-neon-blue' : 'text-gray-500'}`}>
                                    [{p.id}]
                                </span>
                                <span className="bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-gray-400 border border-white/10">
                                    {p.status}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-neon-blue transition-colors duration-300">
                                {p.title}
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 relative z-10">
                                {p.description}
                            </p>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {p.tech.map(t => (
                                    <span key={t} className="text-xs font-mono text-neon-purple/70 border border-neon-purple/30 px-2 py-1 bg-neon-purple/10">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
        </div>
    );
}
