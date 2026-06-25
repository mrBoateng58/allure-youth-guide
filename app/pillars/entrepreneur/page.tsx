import Link from "next/link";
import React from "react";

export default function EntrepreneurGuide() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-text-main">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-accent">
            Allure Entrepreneur Guide
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Supporting entrepreneurs in taking their businesses to the next level through strategy, branding, and collaboration.
          </p>
        </div>
      </section>

      {/* 2. SUPPORT AREAS (4-Column Grid) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-brand-secondary">
              <h3 className="text-xl font-bold text-brand-primary mb-3">Growth Strategies</h3>
              <p className="text-gray-600">Effective plans for business expansion.</p>
            </div>

            <div className="p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-brand-secondary">
              <h3 className="text-xl font-bold text-brand-primary mb-3">Brand Promotion</h3>
              <p className="text-gray-600">Reaching new customers and markets.</p>
            </div>

            <div className="p-6 border-b-2 md:border-b-0 lg:border-r-2 border-brand-secondary">
              <h3 className="text-xl font-bold text-brand-primary mb-3">HR Management</h3>
              <p className="text-gray-600">Managing workforce and fostering positive culture.</p>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-3">Networking</h3>
              <p className="text-gray-600">Connecting with business leaders and innovators.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CURRICULUM ROADMAP */}
      <section className="py-24 bg-background-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-main mb-4">Entrepreneur Guide: Curriculum</h2>
            <p className="text-lg text-gray-600">A comprehensive curriculum designed to take entrepreneurs from idea to scale.</p>
          </div>

          <div className="relative border-l-4 border-brand-secondary ml-6 md:ml-12 space-y-12 pb-8">
            
            {/* Phase 1 */}
            <div className="relative pl-10 md:pl-16 group">
              <div className="absolute -left-[22px] top-1 w-10 h-10 bg-brand-primary rounded-full border-4 border-white flex items-center justify-center text-white font-bold group-hover:scale-125 transition-transform duration-300 shadow-md">
                1
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group-hover:border-brand-primary group-hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-text-main mb-2">Entrepreneurship 101</h3>
                <p className="text-gray-600 text-lg">Business planning fundamentals</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative pl-10 md:pl-16 group">
              <div className="absolute -left-[22px] top-1 w-10 h-10 bg-brand-primary rounded-full border-4 border-white flex items-center justify-center text-white font-bold group-hover:scale-125 transition-transform duration-300 shadow-md">
                2
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group-hover:border-brand-primary group-hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-text-main mb-2">Business Growth</h3>
                <p className="text-gray-600 text-lg">Marketing and sales strategies</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative pl-10 md:pl-16 group">
              <div className="absolute -left-[22px] top-1 w-10 h-10 bg-brand-primary rounded-full border-4 border-white flex items-center justify-center text-white font-bold group-hover:scale-125 transition-transform duration-300 shadow-md">
                3
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group-hover:border-brand-primary group-hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-text-main mb-2">Leadership & Management</h3>
                <p className="text-gray-600 text-lg">Team building and time management</p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative pl-10 md:pl-16 group">
              <div className="absolute -left-[22px] top-1 w-10 h-10 bg-brand-primary rounded-full border-4 border-white flex items-center justify-center text-white font-bold group-hover:scale-125 transition-transform duration-300 shadow-md">
                4
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group-hover:border-brand-primary group-hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-text-main mb-2">Innovation & Technology</h3>
                <p className="text-gray-600 text-lg">Digital transformation practices</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ACCELERATOR PROGRAMS */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Beyond the Curriculum</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mentorship */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-white text-center">
              <div className="w-16 h-16 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 text-brand-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-brand-accent">Mentorship Programs</h4>
              <p className="text-gray-100">Paired with experienced mentors for ongoing guidance.</p>
            </div>

            {/* Networking Events */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-white text-center">
              <div className="w-16 h-16 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 text-brand-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-brand-accent">Networking Events</h4>
              <p className="text-gray-100">Connect with entrepreneurs, investors, and industry experts.</p>
            </div>

            {/* Pitch Competitions */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-white text-center">
              <div className="w-16 h-16 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 text-brand-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-brand-accent">Pitch Competitions</h4>
              <p className="text-gray-100">Pitch ideas for feedback and funding opportunities.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}