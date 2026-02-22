import React from 'react';
import Link from 'next/link';
import { Inter, Manrope, Instrument_Serif, Cabin } from 'next/font/google';
import HeroGraph from './HeroGraph';
import PremiumNavBar from './PremiumNavBar';

const inter = Inter({ subsets: ['latin'], weight: ['500'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600'] });
const instrument = Instrument_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });
const cabin = Cabin({ subsets: ['latin'], weight: ['500'] });

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
                    bottom: 0,
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
                <PremiumNavBar />

                {/* Hero Content */}
                <div className="flex flex-col items-center text-center w-full" style={{ maxWidth: '871px', marginTop: '162px' }}>

                    <div className="flex flex-col items-center" style={{ gap: '10px' }}>
                        <h1 className={`text-white ${inter.className}`} style={{ fontSize: '76px', fontWeight: 500, letterSpacing: '-2px', lineHeight: 1.15, margin: 0 }}>
                            Securing digital frontiers.
                        </h1>
                        <h1 className={`text-white ${instrument.className}`} style={{ fontSize: '76px', letterSpacing: '-2px', lineHeight: 1.15, margin: 0 }}>
                            For Nairobi's SMEs.
                        </h1>
                        <p className={`text-[#f6f7f9] opacity-90 ${manrope.className}`} style={{ fontSize: '18px', lineHeight: '26px', fontWeight: 400, maxWidth: '613px', margin: 0, marginTop: '10px' }}>
                            A 6-node intelligent aggregate advocating for digital security and literacy. Protecting local enterprises through advanced threat research and policy advocacy.
                        </p>
                    </div>

                    <div className="flex flex-row items-center" style={{ gap: '22px', marginTop: '24px' }}>
                        <Link href="/projects" className={`bg-[#7b39fc] text-white rounded-[10px] no-underline ${cabin.className}`}
                            style={{ padding: '14px 24px', fontSize: '16px', lineHeight: 1.7, fontWeight: 500 }}>
                            Explore Nodes
                        </Link>
                        <Link href="/blog" className={`bg-[#2b2344] text-[#f6f7f9] rounded-[10px] border border-transparent no-underline ${cabin.className}`}
                            style={{ padding: '14px 24px', fontSize: '16px', lineHeight: 1.7, fontWeight: 500 }}>
                            System Status
                        </Link>
                    </div>
                </div>

                {/* Dashboard Image (Replaced with HeroGraph) */}
                <div className="w-full flex justify-center" style={{ marginTop: '80px', paddingBottom: '40px' }}>
                    <div className="rounded-[24px] relative overflow-hidden"
                        style={{
                            width: '100%',
                            maxWidth: 'min(1163px, 90vw)',
                            backdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1.5px solid rgba(255, 255, 255, 0.1)',
                            padding: '22.5px'
                        }}>
                        <div className="relative w-full aspect-video rounded-[8px] overflow-hidden bg-black/20">
                            <HeroGraph />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
