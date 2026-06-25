"use client";

import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to close the menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="text-brand-primary font-bold text-2xl tracking-tighter">
            A<span className="text-brand-accent">Y</span>G
          </div>
          <div className="flex flex-col">
            <span className="text-text-main font-bold leading-tight">Allure Youth Guide</span>
            <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">Est. 2024 - Ghana</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-text-main">
          <Link href="/" className="hover:text-brand-primary transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-brand-primary transition-colors">ABOUT US</Link>
          
          {/* Pillars Dropdown */}
          <div className="relative group cursor-pointer hover:text-brand-primary transition-colors py-8">
            OUR PILLARS ▾
            <div className="absolute top-full mt-[-10px] left-0 w-48 bg-white shadow-xl border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 transform translate-y-2 group-hover:translate-y-0">
              <Link href="/pillars/students" className="px-4 py-3 hover:bg-brand-secondary hover:text-brand-primary text-text-main transition-colors text-sm font-semibold">Students Guide</Link>
              <Link href="/pillars/graduates" className="px-4 py-3 hover:bg-brand-secondary hover:text-brand-primary text-text-main transition-colors text-sm font-semibold">Graduates Guide</Link>
              <Link href="/pillars/work" className="px-4 py-3 hover:bg-brand-secondary hover:text-brand-primary text-text-main transition-colors text-sm font-semibold">Work Guide</Link>
              <Link href="/pillars/entrepreneur" className="px-4 py-3 hover:bg-brand-secondary hover:text-brand-primary text-text-main transition-colors text-sm font-semibold">Entrepreneur Guide</Link>
            </div>
          </div>

          <Link href="/news" className="hover:text-brand-primary transition-colors">NEWS/IMPACT</Link>
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden md:block">
          <Link href="/get-involved" className="bg-brand-primary text-white px-6 py-2.5 rounded-md font-semibold hover:bg-brand-primary/90 hover:shadow-md transition-all text-sm">
            Get Involved
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-text-main hover:text-brand-primary transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            // X (Close) Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-text-main">
          <Link href="/" onClick={closeMenu} className="hover:text-brand-primary block py-2">HOME</Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-brand-primary block py-2">ABOUT US</Link>
          
          {/* Mobile Pillars Section */}
          <div className="py-2 border-y border-gray-50">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 block">Our Pillars</span>
            <div className="flex flex-col space-y-3 pl-4">
              <Link href="/pillars/students" onClick={closeMenu} className="hover:text-brand-primary">Students Guide</Link>
              <Link href="/pillars/graduates" onClick={closeMenu} className="hover:text-brand-primary">Graduates Guide</Link>
              <Link href="/pillars/work" onClick={closeMenu} className="hover:text-brand-primary">Work Guide</Link>
              <Link href="/pillars/entrepreneur" onClick={closeMenu} className="hover:text-brand-primary">Entrepreneur Guide</Link>
            </div>
          </div>

          <Link href="/news" onClick={closeMenu} className="hover:text-brand-primary block py-2">NEWS/IMPACT</Link>
          
          <Link 
            href="/get-involved" 
            onClick={closeMenu} 
            className="bg-brand-primary text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all mt-4"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </header>
  );
}