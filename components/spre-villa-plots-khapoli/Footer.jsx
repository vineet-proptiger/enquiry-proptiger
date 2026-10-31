'use client'
import React from 'react'
import Link from 'next/link'
import { PHONE_NUMBER, PHONE_DISPLAY, RERA_NO } from '../../lib/spre-villa-plots-khapoli/config'

const Footer = ({ setIsOpen }) => (
  <footer style={{ background: '#00132b', color: '#ffffff', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }} className="py-14 sm:py-16 px-4 sm:px-6 md:px-10 border-t border-white/10">
    <div className="max-w-[1150px] mx-auto flex flex-col items-center text-center">

      {/* ── SECTION 8: Headline ── */}
      <h2 
        data-aos="fade-up"
        className="text-white font-extrabold text-[22px] sm:text-[26px] md:text-[30px] leading-tight mb-3"
      >
        Book Your Home at Special Launch Prices
      </h2>

      {/* ── SECTION 8: Subheadline ── */}
      <p 
        data-aos="fade-up" data-aos-delay="50"
        className="text-[#d1d5db] font-medium text-[14px] sm:text-[16px] md:text-[17px] max-w-3xl leading-relaxed mb-8"
      >
        Exclusive Residential Plots | Khopoli, Mumbai 3.0 | New Launch
      </p>

      {/* ── SECTION 8: CTA Buttons ── */}
      <div 
        data-aos="fade-up" data-aos-delay="100"
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
      >
        <button
          type="button"
          onClick={() => setIsOpen && setIsOpen(true)}
          className="px-6 sm:px-8 py-3 rounded-full font-extrabold text-[14px] sm:text-[15px] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: '#003792',
            color: '#ffffff',
            border: '2px solid #003792',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#002766';
            e.currentTarget.style.borderColor = '#002766';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#003792';
            e.currentTarget.style.borderColor = '#003792';
          }}
        >
          Enquire Now
        </button>

        <button
          type="button"
          onClick={() => setIsOpen && setIsOpen(true)}
          className="px-6 sm:px-8 py-3 rounded-full font-extrabold text-[14px] sm:text-[15px] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: 'transparent',
            color: '#ffffff',
            border: '2px solid #003792',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#003792';
            e.currentTarget.style.borderColor = '#003792';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = '#003792';
          }}
        >
          Download Brochure
        </button>

        <button
          type="button"
          onClick={() => setIsOpen && setIsOpen(true)}
          className="px-6 sm:px-8 py-3 rounded-full font-extrabold text-[14px] sm:text-[15px] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: 'transparent',
            color: '#ffffff',
            border: '2px solid #003792',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#003792';
            e.currentTarget.style.borderColor = '#003792';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = '#003792';
          }}
        >
          Schedule Site Visit
        </button>
      </div>

      {/* ── SECTION 8: Contact Details with Calling Contact ── */}
      <div 
        data-aos="fade-up" data-aos-delay="150"
        className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/[0.06] border border-white/15 px-6 py-3 rounded-full mb-10 text-[14px] sm:text-[15px]"
      >
        <span className="flex items-center gap-1.5 text-neutral-300">
          <i className="fa-solid fa-location-dot text-[#60A5FA]"></i>
          Khopoli, Mumbai 3.0
        </span>
        <span className="text-white/20 hidden sm:inline">|</span>
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="flex items-center gap-1.5 text-white hover:text-[#60A5FA] font-bold transition-colors duration-200"
        >
          <i className="fa-solid fa-phone text-[#60A5FA]"></i>
          {PHONE_DISPLAY}
        </a>
      </div>

      {/* ── 2nd SS Content: RERA Number Box ── */}
      <div 
        data-aos="fade-up" data-aos-delay="200"
        className="inline-flex flex-wrap items-center justify-center bg-white/[0.05] border border-white/15 rounded-[8px] py-3 px-6 sm:px-8 shadow-inner mb-6 transition-all hover:border-white/30"
      >
        <span className="text-neutral-400 text-[14px] sm:text-[15px] mr-2">
          RERA No :
        </span>
        <span className="text-white font-bold text-[14px] sm:text-[15.5px] tracking-wide">
          {RERA_NO}
        </span>
      </div>

      {/* ── 2nd SS Content: Full Width Horizontal Divider ── */}
      <div className="w-full border-t border-white/10 my-8" />

      {/* ── 2nd SS Content: Privacy Policy (Right-Aligned) ── */}
      <div className="w-full flex justify-end text-[13.5px] sm:text-[14px] mb-4">
        <Link
          href="/spre-villa-plots-khapoli/privacy-policy"
          prefetch={false}
          className="text-[#60A5FA] hover:underline font-medium transition-colors duration-200"
        >
          Privacy Policy
        </Link>
      </div>

      {/* ── 2nd SS Content: Detailed Legal Disclaimer ── */}
      <p className="w-full text-left text-neutral-400 text-[12px] leading-[1.75] m-0">
        <strong className="text-[#60A5FA]">Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>

    </div>
  </footer>
)

export default Footer
