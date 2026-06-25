import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-text-main text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
          <h3 className="font-bold text-xl text-brand-secondary">Allure Youth Guide</h3>
          <p className="text-gray-400 text-sm">
            Empowering Young Ghanaians - a non-profit revolutionizing lives to unlock potential, foster sustainable development, and create a brighter future for all.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-brand-accent">Quick Links</h4>
          <Link href="/" className="text-gray-400 hover:text-white text-sm">Home</Link>
          <Link href="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link>
          <Link href="/news" className="text-gray-400 hover:text-white text-sm">News & Impact</Link>
        </div>

        {/* Pillars Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-brand-accent">Our Pillars</h4>
          <Link href="/pillars/students" className="text-gray-400 hover:text-white text-sm">Students Guide</Link>
          <Link href="/pillars/graduates" className="text-gray-400 hover:text-white text-sm">Graduates Guide</Link>
          <Link href="/pillars/work" className="text-gray-400 hover:text-white text-sm">Work Guide</Link>
          <Link href="/pillars/entrepreneur" className="text-gray-400 hover:text-white text-sm">Entrepreneur Guide</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-brand-accent">Contact Info</h4>
          <p className="text-gray-400 text-sm">Ghana</p>
          <p className="text-gray-400 text-sm">hello@allureyouthguide.org</p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm flex justify-between items-center">
        <p>EST. 2024</p>
        <p>&copy; {new Date().getFullYear()} Allure Youth Guide. All rights reserved.</p>
      </div>
    </footer>
  );
}