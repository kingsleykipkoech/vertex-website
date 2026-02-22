import React from 'react';
import { Inter, Manrope, Instrument_Serif, Cabin } from 'next/font/google';
import { ChevronDown } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], weight: ['500'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600'] });
const instrument = Instrument_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });
const cabin = Cabin({ subsets: ['latin'], weight: ['500'] });

const LogoIpsum = () => (
    <svg width="134" height="25" viewBox="0 0 134 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0911 12.0326L16.2082 17.9155L14.7371 16.4444L17.6777 13.5038L0 13.5038L0 11.4243L17.6416 11.4243L14.7371 8.51978L16.2082 7.0487L22.0911 12.9316C22.3389 13.1794 22.3389 13.5813 22.0911 13.8291L16.2082 19.712L14.7371 18.2409L22.0911 10.8863Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12.4431 0.778175L24.8861 13.2212L12.4431 25.6642L0 13.2212L12.4431 0.778175ZM12.4431 3.71934L21.9449 13.2212L12.4431 22.723L2.94121 13.2212L12.4431 3.71934Z" fill="white" />
        <text x="32" y="19" fill="white" font-family="sans-serif" font-weight="bold" font-size="16">LOGOIPSUM</text>
    </svg>
);

export default function HeroSection() {
    return (
        <section className="relative w-full bg-[#000000] overflow-hidden min-h-screen flex flex-col items-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute object-cover"
                style={{
                    width: '120%',
                    height: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    objectPosition: 'bottom center',
                    zIndex: 0,
                    bottom: 0, // anchoring to bottom
                }}
            >
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260215_121759_424f8e9c-d8bd-4974-9567-52709dfb6842.mp4" type="video/mp4" />
            </video>

            {/* Blurred Background Element */}
            <div
                className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[#000000]"
                style={{
                    top: '215px',
                    width: '801px',
                    height: '384px',
                    filter: 'blur(77.5px)',
                    zIndex: 1,
                }}
            />

            {/* Main Content Container (z-index: 2) */}
            <div className="relative z-[2] w-full flex flex-col items-center">
                {/* Navbar */}
                <header className="w-full max-w-[1440px] mx-auto flex flex-row items-center justify-between"
                    style={{ padding: '16px 120px', height: '102px' }}>

                    <div className="flex flex-row items-center" style={{ gap: '80px' }}>
                        <LogoIpsum />

                        <nav className="flex flex-row items-center" style={{ gap: '10px' }}>
                            <a href="#" className={`text-white decoration-none flex items-center ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                                Home
                            </a>
                            <a href="#" className={`text-white decoration-none flex items-center ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                                Services
                                <ChevronDown className="text-white" style={{ marginLeft: '3px', width: '24px', height: '24px' }} />
                            </a>
                            <a href="#" className={`text-white decoration-none flex items-center ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                                Reviews
                            </a>
                            <a href="#" className={`text-white decoration-none flex items-center ${manrope.className}`} style={{ padding: '4px 10px', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                                Contact us
                            </a>
                        </nav>
                    </div>

                    <div className="flex flex-row items-center" style={{ gap: '12px' }}>
                        <button className={`bg-white text-[#171717] rounded-[8px] border border-[#d4d4d4] ${manrope.className}`}
                            style={{ padding: '8px 16px', fontSize: '14px', lineHeight: '22px', fontWeight: 600 }}>
                            Sign In
                        </button>
                        <button className={`bg-[#7b39fc] text-[#fafafa] rounded-[8px] ${manrope.className}`}
                            style={{ padding: '8px 16px', fontSize: '14px', lineHeight: '22px', fontWeight: 600, boxShadow: '0px 4px 16px rgba(23,23,23,0.04)' }}>
                            Get Started
                        </button>
                    </div>
                </header>

                {/* Hero Content */}
                <div className="flex flex-col items-center text-center w-full" style={{ maxWidth: '871px', marginTop: '162px' }}>

                    <div className="flex flex-col items-center" style={{ gap: '10px' }}>
                        <h1 className={`text-white ${inter.className}`} style={{ fontSize: '76px', fontWeight: 500, letterSpacing: '-2px', lineHeight: 1.15, margin: 0 }}>
                            Automate repetitive.
                        </h1>
                        <h1 className={`text-white ${instrument.className}`} style={{ fontSize: '76px', letterSpacing: '-2px', lineHeight: 1.15, margin: 0 }}>
                            Focus on growth.
                        </h1>
                        <p className={`text-[#f6f7f9] opacity-90 ${manrope.className}`} style={{ fontSize: '18px', lineHeight: '26px', fontWeight: 400, maxWidth: '613px', margin: 0, marginTop: '10px' }}>
                            The next-generation AI agent platform that handles lead generation, customer support, and data entry while you build.
                        </p>
                    </div>

                    <div className="flex flex-row items-center" style={{ gap: '22px', marginTop: '24px' }}>
                        <button className={`bg-[#7b39fc] text-white rounded-[10px] ${cabin.className}`}
                            style={{ padding: '14px 24px', fontSize: '16px', lineHeight: 1.7, fontWeight: 500 }}>
                            Get Started Free
                        </button>
                        <button className={`bg-[#2b2344] text-[#f6f7f9] rounded-[10px] border border-transparent ${cabin.className}`}
                            style={{ padding: '14px 24px', fontSize: '16px', lineHeight: 1.7, fontWeight: 500 }}>
                            Watch 2min Demo
                        </button>
                    </div>
                </div>

                {/* Dashboard Image */}
                <div className="w-full flex justify-center" style={{ marginTop: '80px', paddingBottom: '40px' }}>
                    <div className="rounded-[24px]"
                        style={{
                            width: '100%',
                            maxWidth: 'min(1163px, 90vw)',
                            backdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1.5px solid rgba(255, 255, 255, 0.1)',
                            padding: '22.5px'
                        }}>
                        <img
                            src="/images/dashboard.png"
                            alt="Dashboard Preview"
                            className="w-full h-auto object-cover rounded-[8px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
