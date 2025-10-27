import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white antialiased">
      <Navbar />
      <Hero3D />
      <main>
        <Projects />
        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Engineering philosophy</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">I build UIs like systems: modular, accessible, and resilient. My approach emphasizes component-driven architecture, predictable state management, measurable performance, and DX that scales with teams.</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                <li>• Clear separation of concerns and type-safe boundaries</li>
                <li>• Motion as a first-class citizen for user delight</li>
                <li>• Progressive enhancement and accessibility</li>
                <li>• Rigorous attention to performance budgets</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-neutral-600 dark:text-neutral-400">Experience</dt>
                  <dd className="text-3xl font-extrabold">8+ yrs</dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-600 dark:text-neutral-400">Performance score</dt>
                  <dd className="text-3xl font-extrabold">99+</dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-600 dark:text-neutral-400">Components shipped</dt>
                  <dd className="text-3xl font-extrabold">300+</dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-600 dark:text-neutral-400">Projects led</dt>
                  <dd className="text-3xl font-extrabold">25</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
