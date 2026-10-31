'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { masterplanImages } from '../../lib/spre-villa-plots-khapoli/images'

const MasterPlan = ({ setIsOpen }) => {
  const [activeTab, setActiveTab] = useState('master')

  return (
    <section id="masterplan" className="w-full py-10 md:py-14 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1240px' }}>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
          <div className="w-12 h-1 bg-[#003792] rounded-full mx-auto mb-3" />
          <span className="text-[#003792] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            MASTER PLAN &amp; PLOT LAYOUTS
          </span>
          <h2 className="text-[#0c2340] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Planned Around Light, Nature &amp; Views
          </h2>
        </div>

        {/* Interactive Switch Buttons */}
        <div className="flex items-center justify-center mb-10" data-aos="fade-up">
          <div className="inline-flex p-1.5 rounded-full bg-[#EEF4FC] border border-[#D1E1F5] shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('master')}
              className={`flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full text-[13.5px] sm:text-[14.5px] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'master'
                  ? 'bg-[#003792] text-white font-extrabold shadow-md'
                  : 'text-[#0c2340] hover:text-[#003792]'
              }`}
            >
              <i className="fa-solid fa-map-location-dot text-xs" />
              <span>Master Plan</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('floor')}
              className={`flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full text-[13.5px] sm:text-[14.5px] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'floor'
                  ? 'bg-[#003792] text-white font-extrabold shadow-md'
                  : 'text-[#0c2340] hover:text-[#003792]'
              }`}
            >
              <i className="fa-solid fa-layer-group text-xs" />
              <span>Plot Layouts</span>
            </button>
          </div>
        </div>

        {/* ── TAB CONTENT: MASTER PLAN ── */}
        {activeTab === 'master' && (
          <div className="max-w-[920px] mx-auto" data-aos="fade-up">
            <div
              className="bg-white rounded-[24px] shadow-[0_10px_35px_rgba(0,55,146,0.06)] border border-[#D1E1F5] overflow-hidden group cursor-pointer"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-gray-50 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
                <Image
                  src={masterplanImages.masterPlan}
                  alt="SPRE Villa Plots Master Plan"
                  fill
                  className="object-contain filter blur-[6px] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
                <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center gap-2.5 transition-colors group-hover:bg-black/35">
                  <div className="w-12 h-12 rounded-full bg-white text-[#003792] flex items-center justify-center text-lg shadow-lg">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <span className="bg-white text-[#0c2340] px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 group-hover:bg-[#003792] group-hover:text-white transition-colors">
                    <i className="fa-solid fa-file-arrow-down text-[#003792] group-hover:text-white" />
                    Click to Unlock High-Res Master Plan
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB CONTENT: PLOT LAYOUTS (3 Cards matching pricing) ── */}
        {activeTab === 'floor' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto w-full" data-aos="fade-up">
            
            {masterplanImages.floorPlans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(0,55,146,0.05)] overflow-hidden border border-[#D1E1F5] cursor-pointer hover:shadow-[0_16px_40px_rgba(0,55,146,0.12)] hover:border-[#003792]/50 transition-all duration-300 group flex flex-col justify-between"
                onClick={() => setIsOpen && setIsOpen(true)}
              >
                <div className="relative w-full aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center border-b border-[#D1E1F5] overflow-hidden">
                  <Image
                    src={plan.src || plan.img}
                    alt={plan.label + ' Plot Layout'}
                    fill
                    className="object-contain filter blur-[6px] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center gap-2 transition-colors group-hover:bg-black/30">
                    <div className="w-10 h-10 rounded-full bg-white text-[#003792] flex items-center justify-center text-sm shadow-md">
                      <i className="fa-solid fa-lock" />
                    </div>
                    <span className="bg-white text-[#0c2340] px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 group-hover:bg-[#003792] group-hover:text-white transition-colors">
                      <i className="fa-solid fa-eye text-[#003792] group-hover:text-white" />
                      Unlock Plot Layout
                    </span>
                  </div>
                </div>
                <div className="py-5 px-4 text-center">
                  <h4 className="text-[#0c2340] font-extrabold text-[19px] sm:text-[20px] m-0">
                    {plan.label}
                  </h4>
                  <p className="text-[#556882] text-[13.5px] font-semibold mt-1 m-0">
                    Area: {plan.size}
                  </p>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  )
}

export default MasterPlan
