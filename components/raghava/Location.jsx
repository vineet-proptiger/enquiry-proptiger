import React from 'react'
import { Trees, BookOpen, Trophy, Building, Building2, HeartPulse, MapPin } from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationItems = [
  { name: 'University of Hyderabad (HCU)', subtext: 'Green campus & landmark', time: '5 min', icon: <Trees size={20} /> },
  { name: 'CHIREC International School', subtext: 'K-12 Education', time: '8 min', icon: <BookOpen size={20} /> },
  { name: 'AMB Cinemas & Mall', subtext: 'Entertainment & Retail', time: '10 min', icon: <Trophy size={20} /> },
  { name: 'ISB Hyderabad', subtext: 'Business School', time: '12 min', icon: <Building size={20} /> },
  { name: 'Financial District', subtext: 'IT & Business Hub', time: '15 min', icon: <Building2 size={20} /> },
  { name: 'Continental & Care Hospitals', subtext: 'Healthcare', time: '15 min', icon: <HeartPulse size={20} /> },
  { name: 'HITEC City', subtext: 'IT Hub', time: '20 min', icon: <MapPin size={20} /> },
];

const Location = () => {
  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-teal-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-teal)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-teal-light)', marginBottom: '10px',
          }}>Strategic Corridor — Hyderabad</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Location{' '}
            <span style={{ color: 'var(--color-teal)' }}>Advantages</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Flat Location List */}
          <div className="w-full lg:w-[46%]" data-aos="fade-right">
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              padding: '8px 24px',
            }}>
              {locationItems.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px 0',
                  borderBottom: idx < locationItems.length - 1 ? '1px solid #f0f2f5' : 'none',
                  gap: '12px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                      background: 'var(--color-teal-bg)',
                      border: '1px solid var(--color-teal-light)',
                      color: 'var(--color-teal)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{
                        fontFamily: F_JOST, fontWeight: '700', fontSize: '15px',
                        color: '#111827', margin: 0, lineHeight: 1.3,
                      }}>
                        {item.name}
                      </p>
                      <p style={{
                        fontFamily: F_SANS, fontSize: '12.5px', color: '#6b7280',
                        margin: '3px 0 0', lineHeight: 1.4,
                      }}>
                        {item.subtext}
                      </p>
                    </div>
                  </div>

                  <div style={{ flexShrink: 0, textAlign: 'right' }}>
                    <span style={{
                      fontFamily: F_JOST, fontWeight: '800', fontSize: '15px',
                      color: 'var(--color-teal)', display: 'block',
                    }}>
                      {item.time}
                    </span>
                    <span style={{
                      display: 'inline-block', width: '36px', height: '3px',
                      background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))',
                      borderRadius: '2px', marginTop: '4px',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(74,140,152,0.15)',
              border: '2px solid var(--color-teal)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', zIndex: 10,
              }} />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.762294015958!2d78.3456635419729!3d17.46540183374019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cae10e6943%3A0xa1b01360010defe7!2sRaghava%20Halo%20Kondapur!5e0!3m2!1sen!2sin!4v1785489790503!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-teal)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Raghava Halo — Kondapur, Hyderabad
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
