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

const TEAM_MEMBERS = [
    { id: 1, name: "Kingsley Kipkoech", role: "Security Architect", bio: "Designing resilient systems to protect SMEs from emerging threats." },
    { id: 2, name: "Kayitare Anakin Libery", role: "Systems Engineer", bio: "Implementing robust infrastructure for secure digital literacy." },
    { id: 3, name: "Kelvin Munene Nyagah", role: "Data Analyst", bio: "Analyzing threat vectors and interpreting cybersecurity incidents." },
    { id: 4, name: "Kabi Kabi Jean Paul II", role: "Policy Advocate", bio: "Bridging the gap between technology and business compliance." },
    { id: 5, name: "Kethia Keza", role: "UI/UX & Education", bio: "Crafting intuitive tools to boost digital literacy for local businesses." },
    { id: 6, name: "Mpaka Sano Lemuel", role: "Threat Researcher", bio: "Monitoring the frontline against phishing and ransomware attacks." },
];

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <div className="min-h-screen relative bg-bg-color flex flex-col items-center px-4 pt-[120px] pb-12">
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <header className="mb-16 border-l-4 border-neon-blue pl-6">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">
                        Active Modules
                    </h1>
                    <p className="text-neon-purple font-mono uppercase tracking-widest text-sm">
                        // System Intelligence Showcase //
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {PROJECTS.map((p) => (
                        <div
                            key={p.id}
                            className={`relative bg-black/40 border group p-8 transition-all duration-500 overflow-hidden rounded-xl
                ${hoveredProject === p.id ? 'border-neon-blue' : 'border-white/10'}
              `}
                            onMouseEnter={() => setHoveredProject(p.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <h2 className="text-2xl font-bold text-white mb-3">{p.title}</h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">{p.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {p.tech.map(t => (
                                    <span key={t} className="text-[10px] font-mono text-neon-blue border border-neon-blue/30 px-2 py-1 bg-neon-blue/5 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <header className="mb-16 border-l-4 border-neon-purple pl-6">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">
                        The Node Network
                    </h1>
                    <p className="text-neon-blue font-mono uppercase tracking-widest text-sm">
                        // Expert Aggregate Personnel //
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TEAM_MEMBERS.map((member) => (
                        <div key={member.id} id={`node-${member.id}`} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
                            <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-neon-purple text-xs uppercase tracking-widest mb-4">{member.role}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
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
