'use client'
import React from 'react'

const amenities = [
  {
    title: 'Wellness District',
    subtitle: 'Curated spaces for holistic health, mindfulness and restorative living.',
    icon: 'fa-solid fa-heart-pulse',
  },
  {
    title: '25,000 Sq. Ft. Retreat Centre',
    subtitle: 'A community wellness sanctuary with spa, movement studios and healing therapies.',
    icon: 'fa-solid fa-spa',
  },
  {
    title: 'Sports Zones',
    subtitle: 'Active recreation courts, trails and multi-sport amenities for all ages.',
    icon: 'fa-solid fa-bullseye',
  },
  {
    title: 'Education Spaces',
    subtitle: 'Dedicated learning environments integrated within the community.',
    icon: 'fa-solid fa-graduation-cap',
  },
  {
    title: 'Residential Plots',
    subtitle: 'Generous plot sizes for custom homes within a curated natural setting.',
    icon: 'fa-solid fa-map-location-dot',
  },
  {
    title: 'Private Hamlets',
    subtitle: 'Exclusive villa clusters set apart within the larger forest masterplan.',
    icon: 'fa-solid fa-tree-city',
  },
  {
    title: 'Row Houses',
    subtitle: 'Architecturally considered row homes blending privacy with community.',
    icon: 'fa-solid fa-house-chimney-window',
  },
  {
    title: 'Nature Trails & Waterways',
    subtitle: 'Experience genuine waterfalls, river and stream systems, and the natural landscape of Khopoli.',
    icon: 'fa-solid fa-water',
  },
]

const Amenities = () => {
  return (
    <section id="amenities" className="w-full py-12 md:py-16 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1280px' }}>

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto" data-aos="fade-up">
          <div className="w-12 h-1 bg-[#003792] rounded-full mx-auto mb-3" />
          <span className="text-[#003792] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
            FEATURES &amp; AMENITIES
          </span>
          <h2 className="text-[#0c2340] text-[22px] sm:text-[26px] md:text-[32px] font-extrabold m-0 leading-tight mb-3">
            Features &amp; Amenities
          </h2>
          <p className="text-[#556882] text-[14px] sm:text-[15px] leading-relaxed m-0 font-medium">
            A thoughtfully planned community where wellness, nature, recreation and everyday living come together in a natural setting.
          </p>
        </div>

        {/* 4x2 Clean Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {amenities.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={((index % 4) * 60).toString()}
                className="group relative bg-[#EEF4FC] rounded-[22px] p-7 border border-[#D1E1F5] shadow-[0_4px_20px_rgba(0,55,146,0.03)] hover:shadow-[0_12px_32px_rgba(0,55,146,0.12)] hover:border-[#003792]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]"
              >
                {/* Center Content */}
                <div className="flex flex-col items-center w-full">
                  {/* Round Icon Badge */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] mb-5 transition-all duration-300 group-hover:scale-105 bg-white text-[#003792] group-hover:bg-[#003792] group-hover:text-white shadow-sm font-bold">
                    <i className={item.icon}></i>
                  </div>

                  {/* Amenity Title */}
                  <h3 className="font-bold text-[17px] sm:text-[18px] mb-2 leading-snug transition-colors duration-200 text-[#0c2340] group-hover:text-[#003792]">
                    {item.title}
                  </h3>

                  {/* Amenity Subtitle */}
                  <p className="text-[#556882] text-[13px] sm:text-[13.5px] leading-relaxed m-0 font-medium max-w-[240px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Amenities
