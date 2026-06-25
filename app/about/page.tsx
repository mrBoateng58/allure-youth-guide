import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-text-main">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-secondary">
            Our Story & Mission
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Discover the journey of Allure Youth Guide and the dedicated team unlocking potential in young Ghanaians.
          </p>
        </div>
      </section>

      {/* 2. CORE MISSION & VISION */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center">
            
            {/* Mission */}
            <div>
              <div className="w-16 h-16 mx-auto bg-brand-secondary rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h2 className="text-3xl font-bold text-text-main mb-4">The Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empowering Young Ghanaians - a non-profit revolutionizing lives to unlock potential, foster sustainable development, and create a brighter future for all.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="w-16 h-16 mx-auto bg-brand-secondary rounded-full flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h2 className="text-3xl font-bold text-text-main mb-4">The Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the premier guidance system and support network for Ghanaian youth across all stages of development, from student to entrepreneur.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE BELIEVE (Values Grid) */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-main">What We Believe</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Empowerment */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 mx-auto bg-brand-primary text-white rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Empowerment</h3>
              <p className="text-gray-600 text-sm">Youth rising and taking proactive roles in their communities.</p>
            </div>

            {/* Connection */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 mx-auto bg-brand-primary text-white rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Connection</h3>
              <p className="text-gray-600 text-sm">Igniting a networked support system for Ghanaian youth.</p>
            </div>

            {/* Opportunity */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 mx-auto bg-brand-primary text-white rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Opportunity</h3>
              <p className="text-gray-600 text-sm">Enhancing access to branching roads and engaging leadership.</p>
            </div>

            {/* Sustainability */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 mx-auto bg-brand-primary text-white rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">Sustainability</h3>
              <p className="text-gray-600 text-sm">Recycling resources and guiding communities toward lasting development.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MEET THE TEAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-main mb-4">Meet the People Behind the Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of leaders, mentors, and program directors are dedicated to seeing every young Ghanaian succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-brand-secondary group-hover:border-brand-primary transition-colors">
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=2070&auto=format&fit=crop" alt="Founder Placeholder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-text-main">Ama Addo</h3>
              <p className="text-brand-accent font-semibold mb-2">Founder & Visionary</p>
              <p className="text-sm text-gray-500 px-4">Dedicated to unlocking potential in young Ghanaians across all stages of life.</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-brand-secondary group-hover:border-brand-primary transition-colors">
                <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop" alt="Program Director Placeholder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-text-main">Kwame Appiah</h3>
              <p className="text-brand-accent font-semibold mb-2">Program Director</p>
              <p className="text-sm text-gray-500 px-4">Oversees the curriculum and execution of the four core ecosystem pillars.</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-brand-secondary group-hover:border-brand-primary transition-colors">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Mentorship Lead Placeholder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-text-main">Serwaa Boakye</h3>
              <p className="text-brand-accent font-semibold mb-2">Mentorship Lead</p>
              <p className="text-sm text-gray-500 px-4">Connects students and graduates with industry leaders for ongoing guidance.</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-brand-secondary group-hover:border-brand-primary transition-colors">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Entrepreneurship Lead Placeholder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-text-main">Ekow Mensah</h3>
              <p className="text-brand-accent font-semibold mb-2">Entrepreneurship Lead</p>
              <p className="text-sm text-gray-500 px-4">Guides start-up incubation, business planning workshops, and funding strategies.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MILESTONE BANNER */}
      <section className="py-16 bg-brand-primary text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-2">EST. 2024</h2>
          <p className="text-brand-secondary text-lg">Established in Ghana with "One Vision, Four Pillars".</p>
        </div>
      </section>

    </div>
  );
}