'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { overviewImage } from '../../lib/adani-shantigram-township/images';

export default function OverviewSection({ setIsOpen }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      id="overview" 
      className="w-full py-14 md:py-20 lg:py-24 bg-white border-b border-slate-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1280px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px] gap-10 lg:gap-0">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[520px] h-[320px] sm:h-[400px] md:h-[460px] lg:h-[490px] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.09)] border border-slate-100">
              <Image 
                src="/adani-shantigram-township/images/home/overview.webp" 
                alt="About Adani Shantigram Township" 
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 50vw" 
              />
              <div 
                className="absolute" 
                style={{ 
                  right: '8px', 
                  bottom: '50%', 
                  transform: 'translateY(50%) rotate(-90deg)', 
                  transformOrigin: 'center right' 
                }}
              >
                <span 
                  className="text-[#e0e0e0] text-[10px] sm:text-[11px] tracking-widest uppercase font-semibold" 
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
                >
                  Artistic Impression
                </span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12 xl:pl-16">
            <div className="section-heading text-left">
              <span className="text-[#0082b5] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2.5 block">
                By Adani Realty
              </span>
              <h2 className="text-[#111111] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-4">
                Shantigram: Where &apos;The Good Life&apos; Begins
              </h2>

              <div className="mb-6 pr-0 lg:pr-4">
                <div className={`text-[#6c757d] text-sm sm:text-base leading-[1.8] text-justify ${!isExpanded ? 'line-clamp-4 sm:line-clamp-5 overflow-hidden' : ''}`}>
                  <p className="m-0">
                    Shantigram, a visionary township by Adani Realty, is strategically nestled between Gujarat&apos;s twin cities - Ahmedabad and Gandhinagar - spanning 600 acres along the prestigious SG Highway. As &apos;one of Gujarat&apos;s largest integrated townships&apos;, it sets a new benchmark in Indian urban development, offering a thoughtfully planned environment that promotes a vibrant, inclusive, and future-ready lifestyle. More than just a promise, Shantigram embodies &apos;The Good Life&apos; with thousands of families already calling it home, making it a thriving example of visionary planning brought to life.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#0082b5] font-semibold text-xs sm:text-sm mt-2 hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  <span className="font-bold underline">{isExpanded ? 'read less' : 'read more'}</span>
                  <svg 
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Key Specs Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-5 mb-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#0082b5]">
                    <i className="fa-solid fa-circle-check text-base sm:text-lg"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-xs sm:text-sm mb-0.5 leading-snug">Land Parcel</h5>
                    <p className="text-[#6c757d] text-[11px] sm:text-xs m-0 leading-normal">600 Acres Township</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#0082b5]">
                    <i className="fa-solid fa-circle-check text-base sm:text-lg"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-xs sm:text-sm mb-0.5 leading-snug">Status</h5>
                    <p className="text-[#6c757d] text-[11px] sm:text-xs m-0 leading-normal">Under Construction / Near Possession</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#0082b5]">
                    <i className="fa-solid fa-circle-check text-base sm:text-lg"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-xs sm:text-sm mb-0.5 leading-snug">Configuration</h5>
                    <p className="text-[#6c757d] text-[11px] sm:text-xs m-0 leading-normal">3, 4, 5 &amp; 6 BHK Residences</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#0082b5]">
                    <i className="fa-solid fa-circle-check text-base sm:text-lg"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-xs sm:text-sm mb-0.5 leading-snug">Township Amenities</h5>
                    <p className="text-[#6c757d] text-[11px] sm:text-xs m-0 leading-normal">Golf Course, Belvedere Club</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {setIsOpen && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#00a4e4] hover:bg-[#0082b5] text-white px-5 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#00a4e4]/20 cursor-pointer"
                  >
                    <span>Download Brochure</span>
                    <i className="fa-solid fa-file-arrow-down text-xs"></i>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
