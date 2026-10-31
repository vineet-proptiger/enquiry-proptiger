'use client'
import React from 'react'

const locationList = [
  {
    title: 'Mumbai-Pune Expressway',
    desc: 'Direct signal-free connectivity connecting Mumbai, Navi Mumbai & Pune',
    time: '05 MINS',
    icon: 'fa-solid fa-road',
  },
  {
    title: 'Old Mumbai-Pune Highway (NH 48)',
    desc: 'Major national highway corridor with rapid access to regional hubs',
    time: '08 MINS',
    icon: 'fa-solid fa-route',
  },
  {
    title: 'Khopoli Railway Station',
    desc: 'Suburban Central Railway terminus connecting directly to CSMT & Kalyan',
    time: '10 MINS',
    icon: 'fa-solid fa-train',
  },
  {
    title: 'Adlabs Imagicaa',
    desc: 'India’s premier international-standard theme, water & snow entertainment park',
    time: '15 MINS',
    icon: 'fa-solid fa-masks-theater',
  },
  {
    title: 'Lonavala & Khandala',
    desc: 'Iconic Western Ghats hill-station getaways right in your neighborhood',
    time: '20 MINS',
    icon: 'fa-solid fa-mountain',
  },
  {
    title: 'Navi Mumbai International Airport (NMIA)',
    desc: 'Upcoming global aerotropolis and aviation gateway for MMR',
    time: '40 MINS',
    icon: 'fa-solid fa-plane-departure',
  },
  {
    title: 'Atal Setu (MTHL)',
    desc: 'Fast sea-link travel to South Mumbai, Sewri and BKC business centers',
    time: '50 MINS',
    icon: 'fa-solid fa-bridge',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[850px] mx-auto mb-8 md:mb-10" data-aos="fade-up">
          <div className="w-12 h-1 bg-[#003792] rounded-full mx-auto mb-3" />
          <span className="text-[#003792] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#0c2340] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Nature Retreat That Keeps You Connected
          </h2>
        </div>

        {/* ── 2-Column Grid: Left List (7 Cards) / Right Map (Equal Height) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 7 Location Points */}
          <div className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#EEF4FC] border border-[#D1E1F5] hover:border-[#003792]/60 rounded-[12px] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,55,146,0.03)] hover:shadow-[0_4px_16px_rgba(0,55,146,0.12)] transition-all duration-200"
              >
                {/* Left side: Icon & Title + Context */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EEF4FC] group-hover:bg-[#003792] text-[#003792] group-hover:text-white flex items-center justify-center text-[13px] sm:text-[14px] shrink-0 transition-colors duration-200">
                    <i className={`${item.icon} text-[#003792] group-hover:text-white transition-colors duration-200`}></i>
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <span className="text-[#0c2340] group-hover:text-[#003792] font-bold text-[13px] sm:text-[14px] transition-colors duration-200 leading-snug truncate">
                      {item.title}
                    </span>
                    <span className="text-[#556882] text-[11px] sm:text-[11.5px] transition-colors duration-200 leading-tight truncate">
                      {item.desc}
                    </span>
                  </div>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#EEF4FC] group-hover:bg-[#003792] text-[#003792] group-hover:text-white font-bold text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed (Equal Height) */}
          <div 
            className="relative w-full h-full min-h-[340px] lg:min-h-0 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,55,146,0.08)] border border-[#D1E1F5] bg-gray-100 flex"
            data-aos="fade-left"
          >
            <iframe
              src="https://maps.google.com/maps?q=Khopoli,+Maharashtra&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="SPRE Villa Plots, Khopoli Location Map"
              className="w-full h-full block flex-1"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
