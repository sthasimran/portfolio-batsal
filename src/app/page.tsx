'use client';

import Sidebar from '@/components/Sidebar';
import Home from '@/components/Home';
import About from '@/components/About';
import Works from '@/components/Works';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <div className="relative">
      <Sidebar />
      
      <main className="md:ml-40">
        <Home />
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  );
}