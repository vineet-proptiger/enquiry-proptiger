'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PHONE_NUMBER, PHONE_DISPLAY } from '../../lib/adani-shantigram-township/config';
import { logoImages } from '../../lib/adani-shantigram-township/images';

export default function HomeNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close drawer on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'OVERVIEW', href: '#overview' },
    { name: 'OUR PROJECTS', href: '#projects' },
    { name: 'MASTER & FLOOR PLAN', href: '#masterplan' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left Corner Logo */}
            <Link href="#top" className="flex items-center shrink-0 py-1 sm:py-2">
              <img
                src={logoImages.main}
                alt="Adani Realty"
                className="h-11 sm:h-14 md:h-16 w-auto object-contain transition-all"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-bold tracking-wider text-slate-700 hover:text-[#00a4e4] uppercase transition-colors duration-200 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Actions: Call Button & Mobile Hamburger Toggle */}
            <div className="flex items-center gap-3">
              {/* Call Now Button (Tablet & Desktop) */}
              <div className="hidden sm:flex items-center">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2.5 bg-[#00a4e4] hover:bg-[#008fce] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-[15px] font-bold tracking-wide transition-all shadow-md shadow-[#00a4e4]/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </div>

              {/* Mobile Hamburger Toggle Button (Matching Screenshot) */}
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="relative z-50 flex flex-col items-center justify-center w-11 h-11 rounded-2xl bg-[#f0f9ff] border border-[#dbeafe] text-[#00a4e4] shadow-sm hover:bg-[#e0f2fe] active:scale-95 transition-all cursor-pointer focus:outline-none"
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? (
                    // X Close Icon
                    <div className="relative w-5 h-5 flex items-center justify-center">
                      <span className="absolute w-5 h-[2.5px] rounded-full bg-[#00a4e4] rotate-45 transition-transform duration-200" />
                      <span className="absolute w-5 h-[2.5px] rounded-full bg-[#00a4e4] -rotate-45 transition-transform duration-200" />
                    </div>
                  ) : (
                    // 3 Cyan Rounded Horizontal Bars (Exact Screenshot Match)
                    <div className="flex flex-col items-center justify-center gap-[4.5px] w-5">
                      <span className="w-5 h-[2.5px] rounded-full bg-[#00a4e4] transition-all" />
                      <span className="w-5 h-[2.5px] rounded-full bg-[#00a4e4] transition-all" />
                      <span className="w-5 h-[2.5px] rounded-full bg-[#00a4e4] transition-all" />
                    </div>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1] lg:hidden animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Dropdown Card */}
            <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-2 shadow-2xl relative z-10 transition-all duration-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-[14px] font-bold text-slate-700 hover:text-[#00a4e4] hover:bg-[#f0f9ff] uppercase tracking-wider transition-all border border-transparent hover:border-[#dbeafe]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2.5 w-full bg-[#00a4e4] hover:bg-[#008fce] text-white py-3.5 rounded-xl text-[15px] font-bold tracking-wide shadow-md shadow-[#00a4e4]/30"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Spacer so content does not hide behind fixed header */}
      <div className="h-16 sm:h-20 w-full shrink-0" aria-hidden="true" />
    </>
  );
}
