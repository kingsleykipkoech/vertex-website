const POSTS = [
    {
        id: "LOG-045",
        title: "The Architecture of Tomorrow",
        date: "2026.10.14",
        excerpt: "Exploring paradigms beyond standard MVC. How Vertex handles real-time sync across distributed neural interfaces.",
        readTime: "8 MIN",
    },
    {
        id: "LOG-044",
        title: "Neon and Noise: The Aesthetic Philosophy",
        date: "2026.09.28",
        excerpt: "Why we abandoned flat design for a digital-native, brutalist-inspired interactive environment.",
        readTime: "5 MIN",
    },
    {
        id: "LOG-043",
        title: "Optimizing the React Render Cycle",
        date: "2026.09.12",
        excerpt: "Technical deep-dive into managing complex canvas animations within functional components without dropping frames.",
        readTime: "12 MIN",
    },
];

export default function Blog() {
    return (
        <div className="min-h-[calc(100vh-80px)] relative overflow-hidden bg-bg-color px-6 py-12">
            <div className="max-w-4xl mx-auto relative z-10">

                <header className="mb-20 text-center">
                    <div className="inline-block border border-neon-purple px-4 py-2 bg-neon-purple/10 text-neon-purple text-xs font-mono mb-6 uppercase tracking-[0.2em]">
                        Transmission Log
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        The Edge
                    </h1>
                </header>

                <div className="flex flex-col gap-8 w-full">
                    {POSTS.map((post) => (
                        <article
                            key={post.id}
                            className="group relative border-l border-cyber hover:border-neon-purple pl-6 py-4 transition-colors duration-300"
                        >
                            {/* Highlight Dot */}
                            <div className="absolute top-6 -left-[5px] w-2 h-2 rounded-full bg-cyber group-hover:bg-neon-purple group-hover:shadow-[0_0_10px_#B026FF] transition-all duration-300"></div>

                            <header className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-2">
                                <div className="flex items-center gap-4">
                                    <span className="text-neon-blue font-mono text-sm tracking-widest bg-neon-blue/10 px-2 py-0.5 border border-neon-blue/20">
                                        {post.id}
                                    </span>
                                    <span className="text-gray-500 font-mono text-xs">
                                        {post.date}
                                    </span>
                                </div>
                                <span className="text-gray-600 font-mono text-xs tracking-widest">
                                    READ_TIME: {post.readTime}
                                </span>
                            </header>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-neon-purple transition-colors duration-300">
                                <a href="#" className="hover:underline decoration-neon-purple decoration-2 underline-offset-4">
                                    {post.title}
                                </a>
                            </h2>

                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                                {post.excerpt}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
