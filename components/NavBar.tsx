import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-dark border-b border-cyber px-6 py-4 flex justify-between items-center text-sm md:text-base">
            <div className="font-bold tracking-widest text-neon-blue text-xl">
                <Link href="/">
                    V E R T E X
                </Link>
            </div>

            <div className="flex gap-6 uppercase tracking-wider font-light">
                <Link href="/projects" className="hover:text-neon-purple transition-colors duration-300">
                    Projects
                </Link>
                <Link href="/blog" className="hover:text-neon-purple transition-colors duration-300">
                    The Edge
                </Link>
                <Link href="/contact" className="hover:animate-pulse text-neon-blue transition-colors duration-300">
                    Connect
                </Link>
            </div>
        </nav>
    );
}
