'use client'
import React from 'react'

const highlights = [
  {
    title: 'Lush Aarey Greens Views',
    description: 'Residences with private decks overlooking the lush and dense Aarey landscape.',
    icon: 'fa-solid fa-tree'
  },
  {
    title: 'Reputed Developer — UK Realty',
    description: '12+ years of real estate excellence, trusted by thousands of homebuyers for quality, innovation & transparency.',
    icon: 'fa-solid fa-building-circle-check'
  },
  {
    title: 'Spacious 1, 2 & 3 BHK Residences',
    description: 'Thoughtfully curated 1 BHK, 2 BHK and 3 BHK luxury residences with private viewing decks.',
    icon: 'fa-solid fa-house-chimney'
  },
  {
    title: 'Planned on Vaastu-Shastra',
    description: 'Designed in accordance with Vaastu-Shastra principles for harmony and peace.',
    icon: 'fa-solid fa-compass'
  },
  {
    title: 'Assortment of Elite Amenities',
    description: 'Clubhouse, gym, landscaped garden, yoga zone, sports court, kids & senior citizen areas.',
    icon: 'fa-solid fa-person-swimming'
  },
  {
    title: 'Prime Goregaon East Connectivity',
    description: 'Seamless access to Western Express Highway, metro, railway station and top corporate hubs.',
    icon: 'fa-solid fa-chart-line'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#F9F8F3' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            What Makes UK Celestique Garden Stand Apart
          </h2>
        </div>

        {/* Grid Container (3 Cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 50).toString()}
              className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#EAE6DF] hover:border-[#8B6A34]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(139,106,52,0.12)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] text-[#111111] group-hover:bg-[#111111] group-hover:text-[#8B6A34] flex items-center justify-center text-xl mb-5 transition-colors duration-300">
                  <i className={item.icon}></i>
                </div>

                {/* Title */}
                <h3 className="text-[#111111] font-black text-lg sm:text-[19px] mb-2.5 group-hover:text-[#8B6A34] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4A5568] text-[13.5px] sm:text-[14px] leading-relaxed m-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
