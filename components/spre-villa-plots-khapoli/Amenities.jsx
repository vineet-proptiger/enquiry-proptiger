'use client'
import React from 'react'

const amenities = [
  {
    title: 'Well-Equipped Clubhouse',
    subtitle: 'State-of-the-art clubhouse for social & recreational gatherings',
    icon: 'fa-solid fa-house-chimney',
  },
  {
    title: 'Swimming Pool',
    subtitle: 'Resort-style pool with expansive lounging deck',
    icon: 'fa-solid fa-person-swimming',
  },
  {
    title: 'Modern Gym & Fitness',
    subtitle: 'Fully-equipped modern gymnasium & fitness studio',
    icon: 'fa-solid fa-dumbbell',
  },
  {
    title: 'Dedicated Yoga Spaces',
    subtitle: 'Peaceful, serene zones for yoga, meditation & wellness',
    icon: 'fa-solid fa-spa',
  },
  {
    title: 'Pet Park',
    subtitle: 'Specially designed green play park for pets',
    icon: 'fa-solid fa-dog',
  },
  {
    title: 'Multipurpose Hall',
    subtitle: 'Spacious celebration hall for private & community events',
    icon: 'fa-solid fa-people-roof',
  },
  {
    title: 'Kids Play Area',
    subtitle: 'Safe, vibrant outdoor recreational zone for children',
    icon: 'fa-solid fa-child-reaching',
  },
  {
    title: 'Tennis Court & Jogging Track',
    subtitle: 'Outdoor tennis court, landscaped jogging track & 24/7 CCTV',
    icon: 'fa-solid fa-person-running',
  },
]

const Amenities = () => {
  return (
    <section id="amenities" className="w-full py-12 md:py-16 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1280px' }}>

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
            WORLD CLASS AMENITIES
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Lifestyle That Complements Your Vision of Luxury
          </h2>
        </div>

        {/* 4x2 Clean Cards Grid (No Images, Exact Reference Design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {amenities.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={((index % 4) * 60).toString()}
                className="group relative bg-white rounded-[22px] p-7 border border-[#ececec] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[#8B6A34]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]"
              >
                {/* Center Content */}
                <div className="flex flex-col items-center w-full">
                  {/* Round Icon Badge */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] mb-5 transition-all duration-300 group-hover:scale-108 bg-[#F4EFE6] text-[#8B6A34] group-hover:bg-[#111111] group-hover:text-white shadow-sm font-bold">
                    <i className={item.icon}></i>
                  </div>

                  {/* Amenity Title */}
                  <h3 className="font-bold text-[17px] sm:text-[18px] mb-2 leading-snug transition-colors duration-200 text-[#111111] group-hover:text-[#8B6A34]">
                    {item.title}
                  </h3>

                  {/* Amenity Subtitle */}
                  <p className="text-[#6c757d] text-[13px] sm:text-[13.5px] leading-relaxed m-0 font-medium max-w-[230px]">
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
