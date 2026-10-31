'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at SPRE Villa Plots?',
    answer: (
      <>
        SPRE Villa Plots offers exclusive premium <strong className="font-semibold text-[#111111]">residential plots</strong> ranging from 1,750 Sq. Ft. (194 Sq. Yards), 4,500 Sq. Ft. (500 Sq. Yards) up to 19,800 Sq. Ft. (2,200 Sq. Yards), designed across an expansive 900-acre master community.
      </>
    ),
  },
  {
    question: 'What is the starting price of SPRE Villa Plots?',
    answer: (
      <>
        The starting price is <strong className="font-semibold text-[#0c2340]">₹80 Lakhs Onwards*</strong> for 1,750 Sq. Ft. residential plots. Exclusive new launch benefits and detailed cost sheets are available upon enquiry for priority registrations.
      </>
    ),
  },
  {
    question: 'Who is the developer of SPRE Villa Plots?',
    answer:
      'SPRE Villa Plots is developed by Shapoorji Pallonji Real Estate (SPRE), backed by a 150+ year legacy of trust, architectural excellence, and customer satisfaction.',
  },
  {
    question: 'Where exactly is SPRE Villa Plots located?',
    answer: (
      <>
        The project is ideally situated at <strong className="font-semibold text-[#111111]">Khopoli, Mumbai 3.0</strong>, surrounded by 380 acres of planned forest and approximately 2,000 acres of government forest nearby, with direct signal-free access to the Mumbai-Pune Expressway and upcoming Navi Mumbai International Airport.
      </>
    ),
  },
  {
    question: 'What features & amenities are provided at SPRE Villa Plots?',
    answer:
      'The community includes a 25,000 Sq. Ft. Retreat Centre, Wellness District, active sports zones, educational spaces, private hamlets, nature trails, waterfalls, river & stream waterways, and 24/7 security.',
  },
  {
    question: 'What is the current status of the project?',
    answer:
      'The project is currently in the New Launch phase. Contact our dedicated sales desk for site visits, e-brochure, and priority booking allotments.',
  },
]

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <div className="w-12 h-1 bg-[#003792] rounded-full mx-auto mb-3" />
          <span className="text-[#003792] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#0c2340] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#D1E1F5] rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,55,146,0.03)] divide-y divide-[#D1E1F5]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#EEF4FC] text-[#003792] font-bold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#EEF4FC]/40'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180 text-[#003792]' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#D1E1F5]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
