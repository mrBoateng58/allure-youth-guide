import Link from "next/link";
import React from "react";

export default function StudentsGuide() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-brand-primary">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Allure Students Guide
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-brand-secondary">
            A non-governmental organization empowering students to discover their strengths, talents, and career paths through connections, programs, and guidance.
          </p>
        </div>
      </section>

      {/* 2. CORE FOCUS AREAS (3-Column Grid) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-main">Discover Your Path</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Career Guidance */}
            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:border-brand-primary transition-colors hover:shadow-md">
              <div className="w-14 h-14 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Career Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Helping students choose the right path based on strengths and academic level.
              </p>
            </div>

            {/* Talent Management */}
            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:border-brand-primary transition-colors hover:shadow-md">
              <div className="w-14 h-14 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Talent Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Nurturing spoken word, visual arts, performing arts, writing, and entrepreneurship.
              </p>
            </div>

            {/* STEM */}
            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:border-brand-primary transition-colors hover:shadow-md">
              <div className="w-14 h-14 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">STEM</h3>
              <p className="text-gray-600 leading-relaxed">
                Encouraging students in science, technology, engineering, and mathematics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH (Timeline Section) */}
      <section className="py-24 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side text */}
            <div>
              <h2 className="text-4xl font-bold text-text-main mb-6">Students Guide: Approach</h2>
              <p className="text-lg text-gray-600 mb-8">
                We take a structured, three-step approach to ensure every student has the tools, connections, and support needed to thrive in their chosen field.
              </p>
              <Link href="/get-involved" className="inline-block bg-brand-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
                Join the Program
              </Link>
            </div>

            {/* Right side staggered list */}
            <div className="flex flex-col gap-6">
              
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-accent flex gap-6 items-start">
                <div className="text-4xl font-bold text-brand-primary">1</div>
                <div>
                  <h4 className="text-xl font-bold text-text-main mb-2">Programs & Activities</h4>
                  <p className="text-gray-600">Workshops, training sessions, and events to develop skills and talents.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-accent flex gap-6 items-start md:ml-8">
                <div className="text-4xl font-bold text-brand-primary">2</div>
                <div>
                  <h4 className="text-xl font-bold text-text-main mb-2">Networking & Collaboration</h4>
                  <p className="text-gray-600">Connecting students with industry professionals and organizations.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-accent flex gap-6 items-start md:ml-16">
                <div className="text-4xl font-bold text-brand-primary">3</div>
                <div>
                  <h4 className="text-xl font-bold text-text-main mb-2">Mentorship & Guidance</h4>
                  <p className="text-gray-600">Personalized support to navigate educational and career paths.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}