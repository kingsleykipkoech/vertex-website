"use client";

import React from 'react';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import { ChevronDown } from 'lucide-react';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600'] });

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
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-[1440px] flex flex-row items-center justify-between px-[120px] h-[102px] pointer-events-auto">
                <div className="flex flex-row items-center" style={{ gap: '80px' }}>
                    <Logo />

                    <nav className="flex flex-row items-center" style={{ gap: '10px' }}>
                        <Link href="/" className={`text-white no-underline flex items-center ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                            Home
                        </Link>
                        <Link href="/projects" className={`text-white no-underline flex items-center ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                            Nodes
                            <ChevronDown className="text-white" style={{ marginLeft: '3px', width: '24px', height: '24px' }} />
                        </Link>
                        <Link href="/blog" className={`text-white no-underline flex items-center ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                            Mission
                        </Link>
                        <Link href="/contact" className={`text-white no-underline flex items-center ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                            Connect
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-row items-center" style={{ gap: '12px' }}>
                    <button className={`bg-white text-[#171717] rounded-[8px] border border-[#d4d4d4] cursor-pointer ${manrope.className}`}
                        style={{ padding: '8px 16px', fontSize: '14px', lineHeight: '22px', fontWeight: 600 }}>
                        Sign In
                    </button>
                    <button className={`bg-[#7b39fc] text-[#fafafa] rounded-[8px] cursor-pointer ${manrope.className}`}
                        style={{ padding: '8px 16px', fontSize: '14px', lineHeight: '22px', fontWeight: 600, boxShadow: '0px 4px 16px rgba(23,23,23,0.04)' }}>
                        Join Network
                    </button>
                </div>
            </div>
        </header>
    );
}
