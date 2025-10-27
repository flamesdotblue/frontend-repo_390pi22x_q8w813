import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket, ShieldCheck, Zap } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
            <Rocket size={14} className="text-indigo-500" />
            Senior Frontend Engineer
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Crafting delightful, scalable interfaces with precision
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base md:text-lg">
            A performance-driven portfolio showcasing modular architecture, advanced motion, real-time interactivity, and seamless theming — engineered for user delight and maintainability.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
              Get in touch
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
            <Feature icon={<Zap size={16} />} title="Blazing performance" caption="99+ Lighthouse" />
            <Feature icon={<ShieldCheck size={16} />} title="Accessible by default" caption="WCAG minded" />
            <Feature icon={<Rocket size={16} />} title="Motion-first" caption="Subtle & purposeful" />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
}

function Feature({ icon, title, caption }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-2">
      <div className="text-indigo-500 mt-0.5">{icon}</div>
      <div>
        <div className="text-sm font-medium text-neutral-900 dark:text-white">{title}</div>
        <div className="text-xs text-neutral-600 dark:text-neutral-300">{caption}</div>
      </div>
    </div>
  );
}
