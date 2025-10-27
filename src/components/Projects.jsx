import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, SortAsc } from 'lucide-react';

const PROJECTS = [
  {
    id: 'p1',
    title: 'Design System Kit',
    description: 'A scalable, token-driven UI system with theming and accessibility baked-in.',
    tags: ['React', 'TypeScript', 'Design System'],
    link: '#',
    year: 2024,
  },
  {
    id: 'p2',
    title: 'Realtime Dashboard',
    description: 'Streaming analytics with virtualized lists and 60fps animations.',
    tags: ['React', 'WebSockets', 'Framer Motion'],
    link: '#',
    year: 2023,
  },
  {
    id: 'p3',
    title: 'Portfolio Engine',
    description: 'SEO-optimized static rendering with smart hydration for interactive sections.',
    tags: ['Performance', 'SEO', 'SSR'],
    link: '#',
    year: 2022,
  },
  {
    id: 'p4',
    title: '3D Playground',
    description: 'Interactive 3D experiments integrated with motion and gestures.',
    tags: ['3D', 'Spline', 'Framer Motion'],
    link: '#',
    year: 2024,
  },
];

const TAGS = Array.from(new Set(PROJECTS.flatMap(p => p.tags)));

export default function Projects() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('All');
  const [sort, setSort] = useState('Newest');

  const filtered = useMemo(() => {
    const pre = PROJECTS.filter(p => {
      const matchesTag = selected === 'All' || p.tags.includes(selected);
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });

    if (sort === 'A-Z') return [...pre].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'Z-A') return [...pre].sort((a, b) => b.title.localeCompare(a.title));
    // Newest default
    return [...pre].sort((a, b) => b.year - a.year);
  }, [query, selected, sort]);

  return (
    <section id="projects" className="relative py-20 border-t border-black/5 dark:border-white/10 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Selected Work</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">Explore production-grade projects with real-time filtering, sorting, and smooth transitions for a refined browsing experience.</p>
            <p className="sr-only" aria-live="polite">{filtered.length} project(s) shown</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search projects..."
                aria-label="Search projects"
                className="w-64 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
              />
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              <SortAsc size={16} />
              <span className="sr-only">Sort projects</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-md px-2 py-2 text-sm"
              >
                <option>Newest</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelected('All')}
            className={`text-xs px-3 py-1.5 rounded-full border transition ${selected === 'All' ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}
          >
            All
          </button>
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setSelected(tag)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${selected === tag ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.a
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-xl border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-neutral-900 hover:shadow-xl/20 hover:shadow-black/10 transition focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:translate-x-0.5 transition-transform">{p.title}</h3>
                    <ExternalLink size={16} className="text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition" />
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-neutral-200 border border-black/10 dark:border-white/10">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-neutral-500">{p.year}</div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
