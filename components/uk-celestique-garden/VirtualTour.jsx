'use client'
import React from 'react'
import Image from 'next/image'
import { virtualTourImage } from '../../lib/uk-celestique-garden/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const VirtualTour = ({ setIsOpen }) => {
  return (
    <section
      className="relative w-full overflow-hidden cursor-pointer h-[clamp(300px,45vh,80vh)] lg:h-[480px]"
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
      onClick={() => setIsOpen(true)}
      data-aos="fade-up"
    >
      <Image
        src={virtualTourImage}
        alt="UK Celestique Garden Virtual Tour"
        fill
        className="object-cover"
        quality={100}
      />

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.25)',
      }} />

      {/* Center Content */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 5, gap: '24px'
      }}>
        {/* Play Button */}
        <div style={{
          width: 'clamp(80px, 10vw, 110px)',
          height: 'clamp(80px, 10vw, 110px)',
          background: '#111111',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '4px solid #8B6A34',
          boxShadow: '0 0 40px rgba(0,0,0,0.4)',
          transition: 'all 0.4s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.background = '#8B6A34'; e.currentTarget.querySelector('svg').setAttribute('fill', '#ffffff') }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#8B6A34'; e.currentTarget.style.background = '#111111'; e.currentTarget.querySelector('svg').setAttribute('fill', '#ffffff') }}
        >
          <svg width="45" height="45" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Text */}
        <h2 style={{
          fontFamily: F_JOST,
          fontWeight: '800',
          fontSize: 'clamp(20px, 3vw, 28px)',
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          textShadow: '0 2px 15px rgba(0,0,0,0.6)',
          margin: 0
        }}>
          VIRTUAL TOUR
        </h2>
      </div>
    </section>
  )
}

export default VirtualTour
