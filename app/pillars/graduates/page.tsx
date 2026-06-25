import Link from "next/link";
import React from "react";

export default function GraduatesGuide() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-text-main">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-secondary">
            Allure Graduates Guide
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Bridging the gap between academia and industry. We equip recent graduates with the essential tools, strategies, and connections to launch successful careers.
          </p>
        </div>
      </section>

      {/* 2. CORE FEATURES ROW */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Job Placement */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Job Placement</h3>
              <p className="text-gray-600">Connecting talented graduates with premier entry-level opportunities across various industries.</p>
            </div>

            {/* Career Planning */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Career Planning</h3>
              <p className="text-gray-600">Developing robust, long-term career strategies tailored to individual strengths and market demands.</p>
            </div>

            {/* Life Planning */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Life Planning</h3>
              <p className="text-gray-600">Equipping graduates with essential life skills, financial literacy, and personal management tools.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROGRAMS GRID (2x2) */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-text-main mb-4">Our Graduate Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl">Tailored initiatives designed to maximize your potential in the professional world.</p>
            </div>
            <Link href="/get-involved" className="bg-brand-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all shrink-0">
              Apply Now
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-primary">
              <h4 className="text-2xl font-bold text-text-main mb-3">Career Development</h4>
              <p className="text-gray-600">Resume building workshops, interview preparation, and professional etiquette training to help you stand out to employers.</p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-accent">
              <h4 className="text-2xl font-bold text-text-main mb-3">Skill Development</h4>
              <p className="text-gray-600">Short courses and certifications in high-demand areas like digital literacy, project management, and communication.</p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-accent">
              <h4 className="text-2xl font-bold text-text-main mb-3">Entrepreneurship Readiness</h4>
              <p className="text-gray-600">For graduates looking to build their own path: startup incubation, business planning workshops, and funding guidance.</p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-primary">
              <h4 className="text-2xl font-bold text-text-main mb-3">Personal Development</h4>
              <p className="text-gray-600">Confidence building, goal setting, and 1-on-1 mentorship programs to ensure well-rounded professional growth.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}