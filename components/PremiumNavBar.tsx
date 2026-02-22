"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import { ChevronDown } from 'lucide-react';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600'] });

const TEAM_NODES = [
    { name: "Kingsley (Security)", link: "/projects#node-1" },
    { name: "Kayitare (Systems)", link: "/projects#node-2" },
    { name: "Kelvin (Data)", link: "/projects#node-3" },
    { name: "Kabi (Policy)", link: "/projects#node-4" },
    { name: "Kethia (UI/UX)", link: "/projects#node-5" },
    { name: "Lemuel (Research)", link: "/projects#node-6" },
];

const Logo = () => (
    <Link href="/" className="flex items-center gap-1 font-bold text-2xl tracking-tighter cursor-default no-underline">
        <span className="relative inline-block">
            <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse">V</span>
            <span className="absolute inset-0 text-cyan-500 blur-[2px] opacity-50">V</span>
        </span>
        <span className="text-white">ERTEX</span>
    </Link>
);

export default function PremiumNavBar() {
    const [isNodesOpen, setIsNodesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-[1440px] flex flex-row items-center justify-between px-[120px] h-[102px] pointer-events-auto">
                <div className="flex flex-row items-center" style={{ gap: '80px' }}>
                    <Logo />

                    <nav className="flex flex-row items-center" style={{ gap: '10px' }}>
                        <Link href="/" className={`text-white no-underline flex items-center hover:opacity-80 transition-opacity ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                            Home
                        </Link>

                        <div
                            className="relative group"
                            onMouseEnter={() => setIsNodesOpen(true)}
                            onMouseLeave={() => setIsNodesOpen(false)}
                        >
                            <Link href="/projects" className={`text-white no-underline flex items-center hover:opacity-80 transition-opacity ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                                Nodes
                                <ChevronDown className={`ml-[3px] w-4 h-4 transition-transform duration-300 ${isNodesOpen ? 'rotate-180' : ''}`} />
                            </Link>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 mt-2 w-48 bg-black/90 border border-white/10 rounded-lg overflow-hidden backdrop-blur-xl transition-all duration-300 ${isNodesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                {TEAM_NODES.map((node, i) => (
                                    <Link
                                        key={i}
                                        href={node.link}
                                        className={`block px-4 py-2 text-xs text-white/70 hover:text-white hover:bg-white/5 no-underline border-b border-white/5 last:border-0 ${manrope.className}`}
                                    >
                                        {node.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/blog" className={`text-white no-underline flex items-center hover:opacity-80 transition-opacity ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                            Mission
                        </Link>
                        <Link href="/contact" className={`text-white no-underline flex items-center hover:opacity-80 transition-opacity ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                            Connect
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-row items-center" style={{ gap: '12px' }}>
                    <Link href="/contact" className={`bg-white text-[#171717] rounded-[8px] border border-[#d4d4d4] cursor-pointer no-underline ${manrope.className}`}
                        style={{ padding: '8px 16px', fontSize: '14px', lineHeight: '22px', fontWeight: 600 }}>
                        Sign In
                    </Link>
                    <Link href="/contact" className={`bg-[#7b39fc] text-[#fafafa] rounded-[8px] cursor-pointer no-underline ${manrope.className}`}
                        style={{ padding: '8px 16px', fontSize: '14px', lineHeight: '22px', fontWeight: 600, boxShadow: '0px 4px 16px rgba(23,23,23,0.04)' }}>
                        Join Network
                    </Link>
                </div>
            </div>
        </header>
    );
}
