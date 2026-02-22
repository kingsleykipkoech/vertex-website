"use client";

export default function Contact() {
    return (
        <div className="min-h-[calc(100vh-80px)] relative bg-bg-color flex flex-col items-center justify-center px-4 py-12">

            {/* Immersive overlay background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-bg-color to-bg-color pointer-events-none"></div>

            <div className="w-full max-w-2xl relative z-10 z-[1] bg-cyber-dark border border-cyber p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)]">

                {/* Reticle Accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-neon-purple/50"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-neon-purple/50"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-neon-purple/50"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-neon-purple/50"></div>

                <header className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white mb-2 font-mono">
                        Connect to the Network
                    </h1>
                    <p className="text-neon-blue font-mono text-sm tracking-widest">
            // SECURE COMM-LINK ESTABLISHED //
                    </p>
                </header>

                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="identifier" className="text-gray-400 font-mono text-xs uppercase tracking-widest">Client Identifier (Name)</label>
                        <input
                            type="text"
                            id="identifier"
                            className="bg-black/50 border border-cyber focus:border-neon-blue text-white p-3 font-mono text-sm outline-none transition-colors w-full focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                            placeholder="Enter ID..."
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="signal_channel" className="text-gray-400 font-mono text-xs uppercase tracking-widest">Signal Channel (Email)</label>
                        <input
                            type="email"
                            id="signal_channel"
                            className="bg-black/50 border border-cyber focus:border-neon-purple text-white p-3 font-mono text-sm outline-none transition-colors w-full focus:shadow-[0_0_15px_rgba(176,38,255,0.2)]"
                            placeholder="sys@domain.net"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="payload" className="text-gray-400 font-mono text-xs uppercase tracking-widest">Data Payload (Message)</label>
                        <textarea
                            id="payload"
                            rows={5}
                            className="bg-black/50 border border-cyber focus:border-neon-blue text-white p-3 font-mono text-sm outline-none transition-colors w-full resize-none focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                            placeholder="Transmit message..."
                        ></textarea>
                    </div>

                    <button
                        type="button"
                        className="group relative w-full overflow-hidden bg-white/5 border border-neon-blue text-neon-blue hover:text-bg-color font-bold uppercase tracking-widest py-4 mt-4 transition-colors duration-300"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                            Transmit Data
                        </span>
                        {/* Animated hover fill */}
                        <div className="absolute inset-0 bg-neon-blue translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
                    </button>
                </form>

                {/* Fake Terminal Output at bottom */}
                <div className="mt-10 p-4 bg-black/80 border border-white/5 font-mono text-xs text-green-500/70 h-24 overflow-hidden relative">
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-12 pointer-events-none"></div>
                    <p>&gt; System monitoring active...</p>
                    <p>&gt; Encryption protocols: RSA-2048 [OK]</p>
                    <p className="animate-pulse">&gt; Waiting for transmission input...</p>
                </div>

            </div>
        </div>
    );
}
