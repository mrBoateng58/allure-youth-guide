import Link from "next/link";
import React from "react";

export default function WorkGuide() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-brand-primary">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Allure Work Guide
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-brand-secondary">
            Empowering workers through comprehensive support, resources, and development across key areas.
          </p>
        </div>
      </section>

      {/* 2. THE FOUR KEY AREAS GRID (2x2) */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-main">Areas of Support</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We provide the necessary tools and advocacy to ensure workers not only succeed in their current roles but thrive in their overall lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Career Advancement */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary text-brand-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Career Advancement</h3>
              <p className="text-gray-600 leading-relaxed">
                Improving productivity and job performance through continuous learning and strategic skill building.
              </p>
            </div>

            {/* Financial Empowerment */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary text-brand-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Financial Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                Building multiple income sources beyond pension to ensure long-term financial stability and wealth generation.
              </p>
            </div>

            {/* Labour Rights */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary text-brand-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Labour Rights</h3>
              <p className="text-gray-600 leading-relaxed">
                Educating workers on their legal rights, opportunities, and workplace benefits to ensure fair treatment.
              </p>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary text-brand-primary group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Health & Wellness</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting mental and physical well-being and promoting a healthy work-life balance for sustained success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA SECTION */}
      <section className="py-20 bg-brand-secondary/30 border-t border-brand-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-main mb-6">Take Control of Your Career Path</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the Allure Work Guide program today to access our network of professionals, specialized training, and wellness resources.
          </p>
          <Link href="/get-involved" className="inline-block bg-brand-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
            Join the Work Program
          </Link>
        </div>
      </section>

    </div>
  );
}