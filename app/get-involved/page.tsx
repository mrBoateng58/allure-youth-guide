import React from "react";

export default function GetInvolved() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-brand-primary">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-brand-secondary">
            Whether you want to join a program, become a mentor, or partner with us, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. CONTACT & FORM SECTION */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-text-main mb-6">Let's Connect</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Allure Youth Guide is dedicated to unlocking the potential of young Ghanaians. Reach out to us for general inquiries, partnership opportunities, or to learn more about our four core pillars.
              </p>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-primary shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-main mb-1">Headquarters</h4>
                    <p className="text-gray-600">Ghana (EST. 2024)</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-primary shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-main mb-1">Email Us</h4>
                    <p className="text-gray-600">hello@allureyouthguide.org</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-primary shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-text-main mb-1">Call Us</h4>
                    <p className="text-gray-600">+233 (0) 555 123 456</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-text-main mb-6">Send us a Message</h3>
              <form className="space-y-6">
                
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-text-main mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors" placeholder="john@example.com" />
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-text-main mb-2">I am interested in...</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-gray-600 bg-white">
                    <option>Joining the Students Guide</option>
                    <option>Joining the Graduates Guide</option>
                    <option>Joining the Work Guide</option>
                    <option>Joining the Entrepreneur Guide</option>
                    <option>Becoming a Mentor or Partner</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-text-main mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors" placeholder="How can we help you?"></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all">
                  Submit Application
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}