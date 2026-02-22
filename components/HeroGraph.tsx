"use client";

import { useEffect, useRef, useState } from "react";

type Member = {
    id: number;
    name: string;
    role: string;
    bio: string;
    x: number; // relative position 0-100%
    y: number; // relative position 0-100%
};

const TEAM_MEMBERS: Member[] = [
    { id: 1, name: "Kingsley Kipkoech", role: "Security Architect", bio: "Designing resilient systems to protect SMEs from emerging threats.", x: 20, y: 30 },
    { id: 2, name: "Kayitare Anakin Libery", role: "Systems Engineer", bio: "Implementing robust infrastructure for secure digital literacy.", x: 80, y: 25 },
    { id: 3, name: "Kelvin Munene Nyagah", role: "Data Analyst", bio: "Analyzing threat vectors and interpreting cybersecurity incidents.", x: 50, y: 15 },
    { id: 4, name: "Kabi Kabi Jean Paul II", role: "Policy Advocate", bio: "Bridging the gap between technology and business compliance.", x: 15, y: 70 },
    { id: 5, name: "Kethia Keza", role: "UI/UX & Education", bio: "Crafting intuitive tools to boost digital literacy for local businesses.", x: 85, y: 75 },
    { id: 6, name: "Mpaka Sano Lemuel", role: "Threat Researcher", bio: "Monitoring the frontline against phishing and ransomware attacks.", x: 50, y: 85 },
];

export default function HeroGraph() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeNode, setActiveNode] = useState<Member | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Ambient floating variables
        let time = 0;

        const render = () => {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connecting lines
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0, 240, 255, 0.2)"; // Dim neon blue
            ctx.lineWidth = 1;

            // Draw random network connections logic
            for (let i = 0; i < TEAM_MEMBERS.length; i++) {
                for (let j = i + 1; j < TEAM_MEMBERS.length; j++) {
                    const m1 = TEAM_MEMBERS[i];
                    const m2 = TEAM_MEMBERS[j];

                    // Small floating displacement
                    const dx1 = Math.sin(time + m1.id) * 10;
                    const dy1 = Math.cos(time + m1.id) * 10;
                    const dx2 = Math.sin(time + m2.id) * 10;
                    const dy2 = Math.cos(time + m2.id) * 10;

                    const x1 = (m1.x / 100) * canvas.width + dx1;
                    const y1 = (m1.y / 100) * canvas.height + dy1;
                    const x2 = (m2.x / 100) * canvas.width + dx2;
                    const y2 = (m2.y / 100) * canvas.height + dy2;

                    // Connect nodes if they are within a certain distance or just connect all for complex web
                    const dist = Math.hypot(x2 - x1, y2 - y1);
                    if (dist < canvas.width * 0.6) {
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                    }
                }
            }
            ctx.stroke();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative w-full h-[600px]" ref={containerRef}>
            {/* Background Canvas for Lines */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* DOM Nodes for interactivity */}
            {TEAM_MEMBERS.map((member) => (
                <button
                    key={member.id}
                    className={`absolute w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 
            ${activeNode?.id === member.id
                            ? 'bg-neon-purple shadow-[0_0_20px_#B026FF] scale-150 border-2 border-white'
                            : 'bg-neon-blue shadow-[0_0_10px_#00F0FF] hover:scale-125 hover:bg-white'}
          `}
                    style={{
                        left: `${member.x}%`,
                        top: `${member.y}%`,
                        // CSS trick to mimic the canvas float slightly (or rely on absolute px via React State, but CSS is smoother)
                        animation: `float-${member.id} 4s ease-in-out infinite alternate`
                    }}
                    onClick={() => setActiveNode(activeNode?.id === member.id ? null : member)}
                    aria-label={`View ${member.name}'s profile`}
                />
            ))}

            {/* Info Panel Overlay */}
            {activeNode && (
                <div
                    className="absolute bottom-10 right-10 w-80 bg-cyber-dark border-cyber border p-6 rounded-lg backdrop-blur-md animate-in fade-in slide-in-from-bottom-10 shadow-[0_0_30px_rgba(0,240,255,0.1)] z-20"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple"></div>
                    <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wider">{activeNode.name}</h3>
                    <p className="text-neon-blue text-sm uppercase tracking-widest mb-4">{activeNode.role}</p>
                    <div className="h-px w-full bg-cyber-border mb-4"></div>
                    <p className="text-gray-300 font-light text-sm leading-relaxed">
                        {activeNode.bio}
                    </p>

                    <button
                        onClick={() => setActiveNode(null)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                </div>
            )}

            {/* Inject custom keyframes for node floating to match canvas roughly */}
            <style jsx>{`
        ${TEAM_MEMBERS.map((m) => `
          @keyframes float-${m.id} {
            0% { transform: translate(-50%, -50%) translate(0, 0); }
            100% { transform: translate(-50%, -50%) translate(${Math.sin(m.id) * 10}px, ${Math.cos(m.id) * 10}px); }
          }
        `).join('\n')}
      `}</style>
        </div>
    );
}
