'use client'
import React, { useState } from 'react'
import { Map, Building2, Building, Trees, Waves, MapPin } from 'lucide-react'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const highlightIconProps = { size: 26, strokeWidth: 1.5 }

const highlights = [
  { text: '3 High-Rise Towers (52 Floors)',        icon: <Building2 {...highlightIconProps} />      },
  { text: '5.5 Acres Gated Community',             icon: <Map {...highlightIconProps} />            },
  { text: '1,000+ Thoughtfully Planned Homes',     icon: <Building {...highlightIconProps} />       },
  { text: '90,000 SFT Luxury Wellness Clubhouse',  icon: <Waves {...highlightIconProps} />          },
  { text: 'Effortless Everyday Architecture',      icon: <Trees {...highlightIconProps} />          },
  { text: 'Strategic Location in Hyderabad',       icon: <MapPin {...highlightIconProps} />         },
]

const HighlightCard = ({ item, idx }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-aos="fade-up"
      data-aos-delay={idx * 60}
      style={{
        background: '#fff',
        border: '1px solid var(--color-teal-light)',
        borderTop: '5px solid var(--color-teal)',
        borderRadius: '14px',
        padding: '28px 16px 20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', cursor: 'default',
        transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hovered ? '0 10px 32px rgba(184,149,106,0.15)' : '0 4px 15px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        position: 'relative', overflow: 'hidden', height: '100%',
      }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60px', height: '5px',
        background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))',
        borderRadius: '0 0 10px 10px',
      }} />

      <div style={{
        width: '62px', height: '62px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '14px',
        background: hovered ? 'var(--color-teal)' : 'var(--color-teal-bg)',
        border: `2px solid ${hovered ? 'var(--color-teal)' : 'var(--color-teal-light)'}`,
        color: hovered ? '#fff' : 'var(--color-teal)',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 0 20px rgba(184,149,106,0.3)' : 'none',
      }}>
        {item.icon}
      </div>

      <p style={{
        fontFamily: F_SANS, fontSize: '13px', lineHeight: 1.6,
        color: 'var(--color-teal)', fontWeight: '600', margin: 0,
        transition: 'color 0.28s ease', textAlign: 'center',
      }}>
        {item.text}
      </p>
    </div>
  )
}

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" style={{ padding: '56px 0', background: '#ffffff', borderBottom: '1px solid #f0f0f0' }}>
    <div className="container mx-auto px-4 md:px-8">

      <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
        <span style={{
          display: 'inline-block', padding: '4px 16px',
          background: 'var(--color-teal-bg)', borderRadius: '50px',
          fontSize: '11px', fontWeight: '700', color: 'var(--color-teal)',
          fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
          border: '1px solid var(--color-teal-light)', marginBottom: '10px',
        }}>Hyderabad — Project Excellence</span>
        <h2 style={{ fontFamily: F_JOST, fontWeight: '800', fontSize: '26px', color: '#111827', margin: 0, letterSpacing: '-0.01em' }}>
          Highlights Gallery:{' '}
          <span style={{ color: 'var(--color-teal)' }}>Raghava Halo</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <span style={{ display: 'block', width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', borderRadius: '2px' }} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {highlights.map((item, idx) => (
          <HighlightCard key={idx} item={item} idx={idx} setIsOpen={setIsOpen} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '36px' }} data-aos="fade-up">
        <button onClick={() => setIsOpen(true)} className="btn-teal" style={{ padding: '13px 44px', letterSpacing: '0.08em' }}>
          Enquire Now
        </button>
      </div>

    </div>
  </section>
)

export default Highlights
