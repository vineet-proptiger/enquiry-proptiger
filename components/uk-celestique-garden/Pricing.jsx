'use client'
import React from 'react'

const pricingData = [
  {
    type: '1 BHK Residences',
    area: 'On Request',
    price: '₹ 1.05 Cr* Onwards',
    desc: 'Thoughtfully designed 1 BHK luxury residences with private decks overlooking the lush and dense Aarey landscape.',
  },
  {
    type: '2 BHK Residences',
    area: 'On Request',
    price: 'Price On Request',
    desc: 'Spacious 2 BHK luxury residences planned with Vaastu-Shastra principles, private deck, and panoramic nature views.',
  },
  {
    type: '3 BHK Residences',
    area: 'On Request',
    price: 'Price On Request',
    desc: 'Exclusive 3 BHK / Jodi residences with expansive living spaces, private viewing decks, and unobstructed Aarey green views.',
  },
]

const Pricing = ({ setIsOpen }) => {
  return (
    <section id="pricing" className="w-full py-10 md:py-14 font-poppins overflow-hidden" style={{ background: '#F9F8F3' }}>
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-10" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2px] uppercase mb-2.5 block">
            PRICE LIST
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Apartment Configurations &amp; Exclusive Launch Pricing
          </h2>
        </div>

        {/* ── MOBILE / SMALL DEVICE CARDS (Visible below md breakpoint) ── */}
        <div className="flex flex-col gap-6 md:hidden max-w-lg mx-auto w-full">
          {pricingData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
              className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#EAE6DF] shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-between"
              style={{ borderTop: '4px solid #111111' }}
            >
              <div>
                {/* Top Header: Unit Type */}
                <div className="pb-4 border-b border-[#f1f5f9] mb-4">
                  <h3 className="text-[#111111] font-black text-[18px] sm:text-[20px] m-0">
                    {item.type}
                  </h3>
                </div>

                {/* Specs: Size */}
                <div className="mb-4 bg-[#F4EFE6] px-3.5 py-2.5 rounded-xl border border-[#EAE6DF] flex flex-col min-[340px]:flex-row min-[340px]:items-center justify-between gap-1">
                  <span className="text-gray-600 text-[11.5px] sm:text-xs font-bold uppercase tracking-wider">Size</span>
                  <strong className="text-[#111111] text-[13.5px] sm:text-[14px] font-extrabold">
                    {item.area === 'On Request' ? item.area : `${item.area} Sq.Ft.`}
                  </strong>
                </div>

                {/* Estimated Price Block */}
                <div className="mb-4">
                  <span className="text-[11.5px] text-[#8B6A34] font-bold uppercase tracking-wider block mb-1">
                    PRICE
                  </span>
                  <div className="text-[#111111] font-black text-[24px] tracking-tight">
                    {item.price}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="w-full py-3.5 rounded-[50px] font-extrabold text-[15px] transition-all duration-300 shadow-md active:scale-[0.98] cursor-pointer"
                style={{
                  background: '#111111',
                  color: '#ffffff',
                  border: '2px solid #111111',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#8B6A34';
                  e.currentTarget.style.borderColor = '#8B6A34';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#111111';
                  e.currentTarget.style.borderColor = '#111111';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                Get Full Price Sheet
              </button>
            </div>
          ))}
        </div>

        {/* ── DESKTOP TABLE (Visible on md and above) ── */}
        <div className="hidden md:block bg-white rounded-[16px] shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-x-auto border border-[#EAE6DF]" data-aos="fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#111111] text-white">
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-left whitespace-nowrap">Typology</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Size</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Price</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#222222] divide-y divide-[#f0f0f0]">
              {pricingData.map((item, index) => (
                <tr key={index} className="hover:bg-[#F9F8F3] transition-colors duration-200">
                  <td className="py-5 px-4 lg:px-6 font-extrabold text-[16.5px] text-[#111111] text-left whitespace-nowrap">{item.type}</td>
                  <td className="py-5 px-4 lg:px-6 text-[15px] font-semibold text-[#495057] text-center whitespace-nowrap">{item.area === 'On Request' ? item.area : `${item.area} Sq.Ft.`}</td>
                  <td className="py-5 px-4 lg:px-6 font-black text-[17px] text-[#111111] text-center whitespace-nowrap">{item.price}</td>
                  <td className="py-5 px-4 lg:px-6 text-center whitespace-nowrap">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] font-extrabold text-[13.5px] transition-all duration-300 shadow-md cursor-pointer"
                      style={{
                        background: '#111111',
                        color: '#ffffff',
                        border: '2px solid #111111',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#8B6A34';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#8B6A34';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#111111';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#111111';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Get Full Price Sheet
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
