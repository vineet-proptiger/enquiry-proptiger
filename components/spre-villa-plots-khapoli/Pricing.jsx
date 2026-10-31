'use client'
import React from 'react'

const pricingData = [
  {
    type: 'Residential Plot',
    area: '1,750 Sq. Ft. / 194 Sq. Yards',
    price: '₹80 Lakhs Onwards*',
    desc: 'Thoughtfully planned residential plot offering optimal space for a custom nature retreat.',
  },
  {
    type: 'Residential Plot',
    area: '4,500 Sq. Ft. / 500 Sq. Yards',
    price: 'Get Quote',
    desc: 'Generously sized villa plot enveloped by greenery and wellness spaces.',
  },
  {
    type: 'Residential Plot',
    area: '19,800 Sq. Ft. / 2,200 Sq. Yards',
    price: 'Get Quote',
    desc: 'Expansive premium estate plot designed for bespoke luxury living in nature.',
  },
]

const Pricing = ({ setIsOpen }) => {
  return (
    <section id="pricing" className="w-full py-10 md:py-14 font-poppins overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-10" data-aos="fade-up">
          <div className="w-12 h-1 bg-[#003792] rounded-full mx-auto mb-3" />
          <span className="text-[#003792] font-bold text-[13px] sm:text-[14px] tracking-[2px] uppercase mb-2.5 block">
            PRICE LIST
          </span>
          <h2 className="text-[#0c2340] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Plot Price List
          </h2>
        </div>

        {/* ── MOBILE / SMALL DEVICE CARDS (Visible below md breakpoint) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden max-w-lg mx-auto w-full">
          {pricingData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
              className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#D1E1F5] shadow-[0_8px_30px_rgba(0,55,146,0.06)] relative overflow-hidden flex flex-col justify-between"
              style={{ borderTop: '4px solid #003792' }}
            >
              <div>
                {/* Top Header: Unit Type */}
                <div className="pb-4 border-b border-[#f1f5f9] mb-4">
                  <h3 className="text-[#0c2340] font-black text-[18px] sm:text-[20px] m-0">
                    {item.type}
                  </h3>
                </div>

                {/* Specs: Area */}
                <div className="mb-4 bg-[#EEF4FC] px-3.5 py-2.5 rounded-xl border border-[#D1E1F5] flex flex-col min-[340px]:flex-row min-[340px]:items-center justify-between gap-1">
                  <span className="text-[#556882] text-[11.5px] sm:text-xs font-bold uppercase tracking-wider">Plot Area</span>
                  <strong className="text-[#0c2340] text-[13.5px] sm:text-[14px] font-extrabold">
                    {item.area}
                  </strong>
                </div>

                {/* Estimated Price Block */}
                <div className="mb-4">
                  <span className="text-[11.5px] text-[#003792] font-bold uppercase tracking-wider block mb-1">
                    PRICE
                  </span>
                  <div className="text-[#003792] font-black text-[22px] tracking-tight">
                    {item.price}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="w-full py-3.5 rounded-[50px] font-extrabold text-[15px] transition-all duration-300 shadow-md active:scale-[0.98] cursor-pointer text-white"
                style={{
                  background: '#003792',
                  border: '2px solid #003792',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#002766';
                  e.currentTarget.style.borderColor = '#002766';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#003792';
                  e.currentTarget.style.borderColor = '#003792';
                }}
              >
                Get Full Price Sheet
              </button>
            </div>
          ))}
        </div>

        {/* ── DESKTOP TABLE (Visible on md and above) ── */}
        <div className="hidden md:block bg-white rounded-[20px] shadow-[0_10px_35px_rgba(0,55,146,0.05)] overflow-hidden border border-[#D1E1F5]" data-aos="fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#EEF4FC] text-[#556882] border-b border-[#D1E1F5]">
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-left whitespace-nowrap">Configuration</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Area</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Price</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#222222] divide-y divide-[#E2E8F0]">
              {pricingData.map((item, index) => (
                <tr key={index} className="hover:bg-[#EEF4FC]/50 transition-colors duration-200">
                  <td className="py-5 px-4 lg:px-6 font-extrabold text-[16.5px] text-[#0c2340] text-left whitespace-nowrap">{item.type}</td>
                  <td className="py-5 px-4 lg:px-6 text-[15px] font-semibold text-[#495057] text-center whitespace-nowrap">{item.area}</td>
                  <td className="py-5 px-4 lg:px-6 font-black text-[17px] text-[#003792] text-center whitespace-nowrap">{item.price}</td>
                  <td className="py-5 px-4 lg:px-6 text-center whitespace-nowrap">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] font-extrabold text-[13.5px] transition-all duration-300 shadow-md cursor-pointer text-white"
                      style={{
                        background: '#003792',
                        border: '2px solid #003792',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#002766';
                        e.currentTarget.style.borderColor = '#002766';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#003792';
                        e.currentTarget.style.borderColor = '#003792';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Get Quote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default Pricing
