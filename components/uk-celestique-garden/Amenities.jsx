'use client'
import React from 'react'

const amenities = [
  {
    title: 'Lavish Clubhouse',
    subtitle: 'Elite clubhouse designed for social gatherings & leisure retreat',
    icon: 'fa-solid fa-house-chimney',
  },
  {
    title: 'Modern Gymnasium',
    subtitle: 'Fully-equipped modern gymnasium with high-end fitness equipment',
    icon: 'fa-solid fa-dumbbell',
  },
  {
    title: 'Landscaped Garden',
    subtitle: 'Lush greenery and serene landscaped garden for peaceful strolls',
    icon: 'fa-solid fa-seedling',
  },
  {
    title: 'Dedicated Yoga Zone',
    subtitle: 'Tranquil open-air & indoor deck curated for yoga and meditation',
    icon: 'fa-solid fa-spa',
  },
  {
    title: 'Kids’ Play Area',
    subtitle: 'Safe, vibrant outdoor recreational zone designed for children',
    icon: 'fa-solid fa-child-reaching',
  },
  {
    title: 'Indoor Games Area',
    subtitle: 'Active space featuring table tennis, carrom, chess and board games',
    icon: 'fa-solid fa-chess-knight',
  },
  {
    title: 'Multipurpose Court',
    subtitle: 'Versatile sports court for badminton, basketball and athletics',
    icon: 'fa-solid fa-basketball',
  },
  {
    title: 'Senior Citizens’ Area',
    subtitle: 'Peaceful, shaded seating plaza created specially for elders',
    icon: 'fa-solid fa-person-cane',
  },
]

const Amenities = () => {
  return (
    <section id="amenities" className="w-full py-12 md:py-16 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1280px' }}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LIFESTYLE RETREAT
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Assortment of Elite Amenities
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 font-normal max-w-xl mx-auto">
            Thoughtfully curated amenities designed to offer an irresistible daily retreat for every family member.
          </p>
        </div>

        {/* ── 8 ICONIC PILL CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {amenities.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 40).toString()}
              className="bg-white hover:bg-[#F9F8F3] border border-[#EAE6DF] hover:border-[#8B6A34]/60 rounded-[18px] p-5 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(139,106,52,0.12)] transition-all duration-300 group"
            >
              <div>
                {/* Icon Wrap */}
                <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] group-hover:bg-[#111111] text-[#111111] group-hover:text-[#8B6A34] flex items-center justify-center text-xl mb-4 transition-colors duration-300">
                  <i className={item.icon}></i>
                </div>

                {/* Title */}
                <h3 className="text-[#111111] font-bold text-[16px] mb-1.5 group-hover:text-[#8B6A34] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-500 text-xs leading-relaxed m-0">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Amenities
