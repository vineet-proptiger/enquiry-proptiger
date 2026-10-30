'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at UK Celestique Garden?',
    answer: (
      <>
        UK Celestique Garden offers thoughtfully designed <strong className="font-semibold text-[#111111]">1 BHK, 2 BHK and 3 BHK luxury residences</strong> featuring private viewing decks overlooking the lush and dense Aarey landscape, planned according to Vaastu-Shastra principles (Sizes available on request).
      </>
    ),
  },
  {
    question: 'What is the starting price of UK Celestique Garden?',
    answer: (
      <>
        The starting price is <strong className="font-semibold text-[#111111]">₹ 1.05 Cr* Onwards</strong>. Exclusive new launch benefits and special early-bird payment plans are available upon registration of interest.
      </>
    ),
  },
  {
    question: 'Who is the developer of UK Celestique Garden?',
    answer:
      'UK Celestique Garden is developed by UK Realty, one of Mumbai’s most trusted real estate developers known for superior construction quality, timely delivery, and landmark residential addresses.',
  },
  {
    question: 'Where exactly is UK Celestique Garden located?',
    answer: (
      <>
        The project is strategically located at <strong className="font-semibold text-[#111111]">Goregaon East, Mumbai</strong>, offering direct proximity to the Western Express Highway, Aarey Metro Station, Goregaon Railway Station, Oberoi Mall, and Nesco IT Park while enjoying serene Aarey greens.
      </>
    ),
  },
  {
    question: 'What amenities are provided at UK Celestique Garden?',
    answer:
      'Residents will enjoy an assortment of elite lifestyle amenities including a lavish clubhouse, modern gymnasium, landscaped garden, yoga zone, kids’ play area, indoor games area, multipurpose sports court, senior citizens’ area, and multi-tier security.',
  },
  {
    question: 'What is the RERA registration number and status of the project?',
    answer:
      'The project is currently in the New Launch phase. The official MahaRERA registration number is P51800077345.',
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="max-w-[950px] mx-auto flex flex-col gap-3.5 sm:gap-4" data-aos="fade-up">
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div
                key={index}
                className="rounded-[16px] overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen ? '1px solid #8B6A34' : '1px solid #EAE6DF',
                  background: isOpen ? '#FAF8F5' : '#ffffff',
                  boxShadow: isOpen ? '0 10px 25px rgba(139, 106, 52, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                }}
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 px-5 sm:py-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[14.5px] sm:text-[16px] md:text-[17px] font-bold leading-snug transition-colors ${
                      isOpen ? 'text-[#8B6A34]' : 'text-[#111111]'
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Icon Circle */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
                    style={{
                      background: isOpen ? '#8B6A34' : '#F4EFE6',
                      color: isOpen ? '#ffffff' : '#111111',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <i className="fa-solid fa-chevron-down text-xs" />
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-[13.5px] sm:text-[14.5px] text-[#4A5568] leading-relaxed border-t border-[#EAE6DF]/60 mt-1">
                      {item.answer}
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
