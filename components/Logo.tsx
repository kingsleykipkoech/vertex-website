import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-1 font-bold text-2xl tracking-tighter cursor-default">
      <span className="relative inline-block">
        <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse">V</span>
        <span className="absolute inset-0 text-cyan-500 blur-[2px] opacity-50">V</span>
      </span>
      <span className="text-white">ertex</span>
    </div>
  );
};

export default Logo;
