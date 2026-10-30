'use client'
import React from 'react'
import Image from 'next/image'
import { overviewImage } from '../../lib/uk-celestique-garden/images'

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
                 alt="About UK Celestique Garden" 
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
              <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
                LUXURY LIVING
              </span>
              <h2 className="text-[#111111] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-4 tracking-tight">
                Project Overview
              </h2>

              <div className="mb-6">
                <p className="text-[#4A5568] text-[15px] leading-[1.8] text-left m-0">
                  UK Realty is launching UK Celestique Gardens—a premium residential development in Goregaon East, Mumbai. This landmark tower will feature thoughtfully designed 1 BHK, 2 BHK and 3 BHK residences with private decks overlooking the lush and dense Aarey landscape. This iconic curation of spacious homes has been planned according to Vaastu-Shastra principles for a happy, harmonious life for its residents. Moreover, an assortment of elite amenities such as a clubhouse, gymnasium, landscaped garden, yoga zone, kids’ play area, indoor games area, multipurpose court, and senior citizens’ area will make it an irresistible retreat.
                </p>
              </div>

              {/* ── Project Stats Grid ── */}
              <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                <div>
                  <div className="text-[22px] sm:text-[26px] font-black text-[#111111] tracking-tight">1 Acre</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">LAND PARCEL</div>
                </div>
                <div className="border-l border-[#EAE6DF] pl-4">
                  <div className="text-[22px] sm:text-[26px] font-black text-[#111111] tracking-tight">G+39 Floors</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">FLOORS</div>
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
