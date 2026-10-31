'use client'
import React from 'react'

const highlights = [
  {
    step: '01',
    title: '900 Acres of Shapoorji Pallonji-Owned Land',
    description: 'An expansive master development crafted with an enduring legacy of trust and thoughtful planning.',
    icon: 'fa-solid fa-mountain-sun'
  },
  {
    step: '02',
    title: '380 Acres of Forest',
    description: 'Generous forest expanses preserved to offer an authentic nature retreat and pristine air quality.',
    icon: 'fa-solid fa-tree'
  },
  {
    step: '03',
    title: '520 Acres Planned for Community Development',
    description: 'Dedicated zones for residential villa plots, future villas, wellness centres, recreation and lifestyle tracks.',
    icon: 'fa-solid fa-map-location-dot'
  },
  {
    step: '04',
    title: 'Approximately 2,000 Acres of Government Forest Nearby',
    description: 'Flanked by thousands of acres of protected natural green reserve ensuring enduring serenity and views.',
    icon: 'fa-solid fa-compass'
  },
  {
    step: '05',
    title: 'Premium Residential Plots from ₹80 Lakhs*',
    description: 'Attractive new launch price point offering unprecedented capital appreciation and long-term value.',
    icon: 'fa-solid fa-hand-holding-dollar'
  },
  {
    step: '06',
    title: 'Plot Sizes Up to 19,800 Sq. Ft. / 2,200 Sq. Yards',
    description: 'Wide variety of plot typologies providing absolute flexibility to build your dream private villa retreat.',
    icon: 'fa-solid fa-ruler-combined'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#EEF4FC' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <div className="w-12 h-1 bg-[#003792] rounded-full mx-auto mb-3" />
          <span className="text-[#003792] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#0c2340] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Key Highlights
          </h2>
        </div>

        {/* 6 Cards: 3 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              className="group relative bg-white rounded-[20px] p-7 border border-[#D1E1F5] shadow-[0_6px_25px_rgba(0,55,146,0.04)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(0,55,146,0.12)] hover:border-[#003792]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Step badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-[14px] bg-[#EEF4FC] text-[#003792] group-hover:bg-[#003792] group-hover:text-white flex items-center justify-center text-[22px] transition-all duration-300 shadow-sm flex-shrink-0 group-hover:scale-105">
                    <i className={item.icon}></i>
                  </div>
                  <span className="text-[13px] font-black text-[#003792] bg-[#EEF4FC] px-3 py-1 rounded-full">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-[#0c2340] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#003792] transition-colors duration-200 mb-2.5">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[#4A5568] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#003792]/25 group-hover:bg-[#003792] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
