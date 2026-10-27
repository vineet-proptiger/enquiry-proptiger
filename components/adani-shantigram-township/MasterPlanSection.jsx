'use client';

import React, { useState } from 'react';

const floorPlans = [
  {
    id: 1,
    title: '3 BHK',
    size: 'Size: On Request',
    img: '/adani-shantigram-township/masterplan/2bhk.webp',
    alt: '3 BHK Floor Plan',
  },
  {
    id: 2,
    title: '4 BHK',
    size: 'Size: On Request',
    img: '/adani-shantigram-township/masterplan/3bhk.webp',
    alt: '4 BHK Floor Plan',
  },
  {
    id: 3,
    title: '5 BHK',
    size: 'Size: On Request',
    img: '/adani-shantigram-township/masterplan/4.5bhk.webp',
    alt: '5 BHK Floor Plan',
  },
  {
    id: 4,
    title: '6 BHK',
    size: 'Size: On Request',
    img: '/adani-shantigram-township/masterplan/4.5bhk.webp',
    alt: '6 BHK Floor Plan',
  },
];

export default function MasterPlanSection({ setIsOpen }) {
  const [activeTab, setActiveTab] = useState('master');

  return (
    <section 
      id="masterplan" 
      className="w-full py-16 sm:py-20 md:py-24 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#00a4e4] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-2 block">
            MASTER PLAN &amp; FLOOR PLANS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 m-0 leading-tight tracking-tight">
            Planned Around Light &amp; Views
          </h2>
        </div>

        {/* Interactive Switch Buttons */}
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-inner max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab('master')}
              className={`flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === 'master'
                  ? 'bg-[#00a4e4] text-white shadow-md shadow-[#00a4e4]/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
              </svg>
              <span>Master Plan</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('floor')}
              className={`flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === 'floor'
                  ? 'bg-[#00a4e4] text-white shadow-md shadow-[#00a4e4]/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9.01l-9-7-9 7 1.63 1.27L12 16z" />
              </svg>
              <span>Floor Plans</span>
            </button>
          </div>
        </div>

        {/* ── TAB CONTENT: MASTER PLAN (Matching 4th SS) ── */}
        {activeTab === 'master' && (
          <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
            <div
              className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[320px] sm:min-h-[440px] bg-slate-50 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
                <img
                  src="/adani-shantigram-township/masterplan/masterplan.webp"
                  alt="Adani Shantigram Township Master Plan"
                  className="w-full h-full object-contain filter blur-[5px] transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />
                
                {/* Overlay with Lock and Unlock CTA */}
                <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px] flex flex-col items-center justify-center gap-3 transition-colors group-hover:bg-black/35 px-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#00a4e4] flex items-center justify-center shadow-xl">
                    <svg className="w-5 h-5 text-[#00a4e4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                  <span className="bg-white text-slate-900 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-xl flex items-center gap-2 group-hover:bg-[#00a4e4] group-hover:text-white transition-all duration-200 max-w-[94%] text-center">
                    <svg className="w-4 h-4 text-[#00a4e4] group-hover:text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Click to Unlock High-Res Master Plan</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB CONTENT: FLOOR PLANS (Matching 5th SS: 4 cards in 1 row) ── */}
        {activeTab === 'floor' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto animate-in fade-in duration-300">
            {floorPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/80 cursor-pointer hover:shadow-xl hover:border-[#00a4e4]/50 transition-all duration-300 group flex flex-col justify-between"
                onClick={() => setIsOpen && setIsOpen(true)}
              >
                {/* Image Container with Blur & Centered Lock Overlay */}
                <div className="relative w-full h-[220px] sm:h-[240px] bg-slate-50 p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <img
                    src={plan.img}
                    alt={plan.alt}
                    className="w-full h-full object-contain filter blur-[5px] transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center gap-2 transition-colors group-hover:bg-black/30">
                    <div className="w-9 h-9 rounded-full bg-white text-[#00a4e4] flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-[#00a4e4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                    <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 group-hover:bg-[#00a4e4] group-hover:text-white transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#00a4e4] group-hover:text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Unlock Floor Plan</span>
                    </span>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="py-4 px-4 text-center">
                  <h4 className="text-slate-900 font-extrabold text-base sm:text-lg m-0">
                    {plan.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1 m-0">
                    {plan.size}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
