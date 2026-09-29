'use client'
import React, { useEffect, useRef } from 'react'
// import Image from 'next/image'
import { X } from 'lucide-react'
import LeadForm from './LeadForm'
// import { popupImage } from '../../lib/cocoa-county-sector-88a-gurgaon/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const EnquireModal = ({ isOpen, setIsOpen }) => {
  const autoTriggered = useRef(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (autoTriggered.current) return
    if (typeof window !== 'undefined' && localStorage.getItem('_lsub_done') === '1') return
    const initial = setTimeout(() => {
      autoTriggered.current = true
      setIsOpen(true)
      intervalRef.current = setInterval(() => setIsOpen(true), 30000)
    }, 15000)
    return () => {
      clearTimeout(initial)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [setIsOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[92vw] sm:w-[440px] h-auto rounded-3xl flex flex-col justify-center items-center p-8 mx-auto"
        style={{
          background: 'radial-gradient(135% 135% at 50% 20%, #412011 0%, #2A160C 60%, #180C06 100%)',
          border: '2px solid #B88A44',
          boxShadow: '0 0 50px rgba(184, 138, 68, 0.45), 0 20px 45px rgba(0, 0, 0, 0.8)',
          animation: 'slideInRight 0.45s cubic-bezier(0.22,1,0.36,1) forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-[320px] flex flex-col justify-center items-center">
          <div className="text-center mb-5 flex flex-col items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 text-[#412011] hover:text-[#B88A44] hover:scale-110 transition-all flex items-center justify-center shadow-lg"
              style={{ 
                width: '30px', 
                height: '30px', 
                borderRadius: '50%', 
                background: '#ffffff',
                border: '1px solid rgba(184, 138, 68, 0.6)'
              }}
              aria-label="Close"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
            <h3 className="text-xl sm:text-2xl font-bold tracking-wider mb-2 uppercase text-white" style={{ fontFamily: F_JOST }}>
              Enquire Now
            </h3>
            <div className="w-10 h-[2px] bg-[#B88A44] rounded-full mx-auto mb-2"></div>
            <p className="text-white/80 text-[13px]" style={{ fontFamily: F_SANS }}>
              Please enter your details to know more
            </p>
            
            {/* Priority EOI Highlight Box - commented out for now
            <div className="w-full mt-4 mb-2 p-3 rounded-xl flex flex-col items-center justify-center border border-red-500/60 bg-red-800/40 backdrop-blur-sm shadow-[0_4px_15px_rgba(220,38,38,0.25)]">
              <style>{`
                @keyframes popupBlink {
                  0%, 75% { opacity: 1; text-shadow: 0 0 8px rgba(255,255,255,0.4); }
                  76%, 100% { opacity: 0; text-shadow: none; }
                }
              `}</style>
              <div className="text-white font-semibold text-[13px] tracking-wide mb-2 text-center px-2" style={{ fontFamily: F_JOST, lineHeight: '1.4' }}>
                <span className="text-[15px] mr-1.5">💳</span>Priority Allotment EOI Amount
              </div>
              <div className="flex flex-col items-center gap-1.5 w-full">
                <span className="text-[#B88A44] font-bold text-[16px] tracking-wider" style={{ fontFamily: F_JOST }}>
                  <span className="text-white/90 font-normal text-[12px] tracking-normal mr-1">2 & 4 BHK:</span> <span style={{ animation: 'popupBlink 1.4s infinite' }}>₹3 Lakhs*</span>
                </span>
                <span className="text-[#B88A44] font-bold text-[16px] tracking-wider" style={{ fontFamily: F_JOST }}>
                  <span className="text-white/90 font-normal text-[12px] tracking-normal mr-1">Jodi Residences:</span> <span style={{ animation: 'popupBlink 1.4s infinite' }}>₹5 Lakhs*</span>
                </span>
              </div>
            </div>
            */}

          </div>
          <LeadForm formName="Popup Modal" btnText="SUBMIT" isTransparent={true} />
        </div>
      </div>
    </div>
  )
}

export default EnquireModal
