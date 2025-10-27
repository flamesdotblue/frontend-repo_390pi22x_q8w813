import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 dark:border-white/10 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Let’s build something exceptional</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Open to senior frontend roles, consulting, and high-impact collaborations.</p>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"><Github size={18} /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"><Linkedin size={18} /></a>
            <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"><Mail size={18} /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Flames. Built with a performance-first mindset.</div>
      </div>
    </footer>
  );
}
