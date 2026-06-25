"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants for the staggered card effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Empowering <br/>
              <span className="text-brand-primary">Young Ghanaians</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              A non-profit revolutionizing lives to unlock potential, foster sustainable development, and create a brighter future for all.
            </p>
            <div className="flex gap-4">
              <Link href="/about" className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-semibold transition-all">
                Learn More
              </Link>
              <Link href="/get-involved" className="bg-brand-accent hover:bg-opacity-90 text-text-main px-8 py-3 rounded-md font-semibold transition-all">
                Donate Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR MISSION & FOCUS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-text-main mb-16"
          >
            Our Mission & Focus
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {/* Civic Engagement */}
            <motion.div variants={itemVariants} className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Civic Engagement</h3>
              <p className="text-gray-600">Amplifying young voices and promoting youth participation.</p>
            </motion.div>

            {/* Entrepreneurship */}
            <motion.div variants={itemVariants} className="flex flex-col items-center p-6 border-t md:border-t-0 md:border-l border-gray-100">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Entrepreneurship</h3>
              <p className="text-gray-600">Igniting entrepreneurial spirit and developing business skills.</p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="flex flex-col items-center p-6 border-t md:border-t-0 md:border-l border-gray-100">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-gray-600">Enhancing access to quality education and skills training.</p>
            </motion.div>

            {/* Leadership */}
            <motion.div variants={itemVariants} className="flex flex-col items-center p-6 border-t md:border-t-0 md:border-l border-gray-100">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Leadership</h3>
              <p className="text-gray-600">Cultivating leaders who inspire and drive positive change.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. ONE VISION, FOUR PILLARS SECTION */}
      <section className="py-24 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-text-main mb-4">One Vision, Four Pillars</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Together, AYG's four programs form a complete ecosystem - from student to worker, graduate to entrepreneur - empowering every young Ghanaian at every stage of life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/pillars/students" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="h-48 bg-brand-secondary rounded-lg mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Students" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">Students Guide</h3>
              <p className="text-sm text-gray-600">Discover your strengths, talents, and career paths.</p>
            </Link>

            <Link href="/pillars/graduates" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="h-48 bg-brand-secondary rounded-lg mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Graduates" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">Graduates Guide</h3>
              <p className="text-sm text-gray-600">Bridging the gap between academia and industry.</p>
            </Link>

            <Link href="/pillars/work" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="h-48 bg-brand-secondary rounded-lg mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">Work Guide</h3>
              <p className="text-sm text-gray-600">Empowering workers across six key areas of support.</p>
            </Link>

            <Link href="/pillars/entrepreneur" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 group border border-gray-100">
              <div className="h-48 bg-brand-secondary rounded-lg mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop" alt="Entrepreneur" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">Entrepreneur Guide</h3>
              <p className="text-sm text-gray-600">Strategy, branding, and collaboration to scale.</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}