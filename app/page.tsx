import Logo from '@/components/Logo';
import { Users, BookOpen, ChevronRight, Github, Twitter, Linkedin } from 'lucide-react';

export default function Home() {
  const team = [
    { name: 'Alex Chen', role: 'Lead Developer', bio: 'Specializing in distributed systems and neural networks.' },
    { name: 'Sarah Miller', role: 'UI/UX Designer', bio: 'Crafting immersive digital experiences with a focus on human-centric design.' },
    { name: 'Jordan Rivera', role: 'Full Stack Engineer', bio: 'Building scalable architectures and seamless user interfaces.' },
    { name: 'Taylor Swift', role: 'Project Manager', bio: 'Ensuring deadlines are met and communication flows smoothly across all channels.' },
  ];

  const posts = [
    { title: 'Inception of Vertex', date: 'Feb 12, 2026', excerpt: 'Defining our mission and initial architectural blueprints.' },
    { title: 'The Cyberpunk Aesthetic', date: 'Feb 14, 2026', excerpt: 'How we chose our visual identity to match our technical ambitions.' },
    { title: 'Milestone 1 Reached', date: 'Feb 16, 2026', excerpt: 'Successfully completed our first core module deployment.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-30"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
            <a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          </div>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(8,145,178,0.4)]">
            Connect
          </button>
        </div>
      </nav>

      <main className="relative pt-32 px-6">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto text-center mb-32">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
            VERSION 1.0.0 // INITIAL_PROTOTYPE
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Next Generation <br /> Collaboration.
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
            Vertex is a multidisciplinary team pushing the boundaries of digital interaction and system efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#team" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
              Meet the Team
            </a>
            <a href="#blog" className="px-8 py-3 bg-black border border-white/20 font-bold rounded-full hover:bg-white/5 transition-colors">
              Latest Updates
            </a>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="max-w-7xl mx-auto mb-32">
          <div className="flex items-center gap-3 mb-12">
            <Users className="text-cyan-400 w-6 h-6" />
            <h2 className="text-3xl font-bold tracking-tight">The Core Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="cyber-card p-6 rounded-2xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl mb-6 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400 transition-all shadow-inner">
                  <span className="text-2xl font-bold text-cyan-400 opacity-60">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-mono mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex gap-4 text-gray-500">
                  <Github className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                  <Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                  <Linkedin className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="max-w-7xl mx-auto pb-32">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <BookOpen className="text-cyan-400 w-6 h-6" />
              <h2 className="text-3xl font-bold tracking-tight">Project Journal</h2>
            </div>
            <button className="text-sm text-cyan-400 font-mono hover:underline flex items-center gap-2">
              VIEW_ALL <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl mb-6 border border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <time className="text-xs font-mono text-gray-500 mb-2 block">{post.date}</time>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo />
          <p className="text-gray-500 text-sm">
            © 2026 Vertex Collaborative. All systems operational.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
