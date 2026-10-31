'use client'
import React from 'react'
import Image from 'next/image'
import { overviewImage } from '../../lib/spre-villa-plots-khapoli/images'

const Overview = ({ setIsOpen }) => {
  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[390px] md:h-[430px] lg:h-[440px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About SPRE Villa Plots" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <div className="w-12 h-1 bg-[#003792] rounded-full mb-3" />
              <span className="text-[#003792] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
                NATURE &amp; WELLNESS RETREAT
              </span>
              <h2 className="text-[#0c2340] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-4 tracking-tight">
                Project Overview
              </h2>

              <div className="mb-6 space-y-3.5 border-l-[3px] border-[#003792] pl-4 sm:pl-5">
                <p className="text-[#334155] text-[15px] leading-[1.8] text-left m-0">
                  <strong className="text-[#0c2340]">SPRE</strong> brings its legacy of creating thoughtfully planned spaces to <strong className="text-[#0c2340]">Khopoli</strong>, an emerging destination for wellness, nature and long-term living. This premium plotted community offers the opportunity to own your land and create a retreat that is uniquely yours, surrounded by an expansive natural setting.
                </p>
                <p className="text-[#334155] text-[15px] leading-[1.8] text-left m-0">
                  The development spans <strong className="text-[#0c2340]">900 acres of Shapoorji Pallonji-owned land</strong>, with <strong className="text-[#0c2340]">380 acres planned as forest</strong> and <strong className="text-[#0c2340]">520 acres envisioned</strong> for residential plots, future villas, wellness and fitness spaces, tracks and other lifestyle experiences. The development is further complemented by approximately <strong className="text-[#0c2340]">2,000 acres of government forest</strong> in its surroundings.
                </p>
              </div>

              {/* ── Project Stats Grid ── */}
              <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-[#EEF4FC] border border-[#D1E1F5]">
                <div>
                  <div className="text-[22px] sm:text-[26px] font-black text-[#003792] tracking-tight">900 Acres</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-[#556882] uppercase tracking-wider mt-0.5">SHAPOORJI PALLONJI LAND</div>
                </div>
                <div className="border-l border-[#D1E1F5] pl-4">
                  <div className="text-[22px] sm:text-[26px] font-black text-[#003792] tracking-tight">380 Acres</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-[#556882] uppercase tracking-wider mt-0.5">PLANNED FOREST</div>
                </div>
                <div className="border-t border-[#D1E1F5] pt-3">
                  <div className="text-[22px] sm:text-[26px] font-black text-[#003792] tracking-tight">520 Acres</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-[#556882] uppercase tracking-wider mt-0.5">COMMUNITY PLANNED</div>
                </div>
                <div className="border-t border-l border-[#D1E1F5] pt-3 pl-4">
                  <div className="text-[22px] sm:text-[26px] font-black text-[#003792] tracking-tight">2,000+ Acres</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-[#556882] uppercase tracking-wider mt-0.5">GOVT FOREST SURROUNDINGS</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
