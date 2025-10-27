import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl text-neutral-900 dark:text-white">
          <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">Flames</span>
          .Portfolio
        </a>
        <div className="flex items-center gap-3">
          <a href="#projects" className="hidden sm:inline-flex text-sm px-3 py-1.5 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">Projects</a>
          <a href="#about" className="hidden sm:inline-flex text-sm px-3 py-1.5 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">About</a>
          <a href="#contact" className="hidden sm:inline-flex text-sm px-3 py-1.5 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">Contact</a>
          <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-1" />
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition"><Github size={18} /></a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition"><Linkedin size={18} /></a>
          <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition"><Mail size={18} /></a>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-1 p-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
