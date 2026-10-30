'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { logoImages } from '../../lib/uk-celestique-garden/images'

const navLinks = [
  { name: 'OVERVIEW',    href: '#overview', active: true },
  { name: 'HIGHLIGHTS',  href: '#highlights' },
  { name: 'GALLERY',     href: '#gallery' },
  { name: 'PRICE LIST',  href: '#pricing' },
  { name: 'AMENITIES',   href: '#amenities' },
  { name: 'LOCATION',    href: '#location' },
]

// Pre-fetch section code on hover
const prefetchSection = (href) => {
  switch (href) {
    case '#highlights':
      import('./Highlights')
      break
    case '#gallery':
      import('./Gallery')
      break
    case '#pricing':
      import('./Pricing')
      break
    case '#amenities':
      import('./Amenities')
      break
    case '#location':
      import('./Location')
      break
    case '#masterplan':
      import('./MasterPlan')
      break
    default:
      break
  }
}

const Navbar = ({ setIsOpen, onPrefetchModal }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out py-1.5 md:py-2 ${
        isScrolled ? 'translate-y-0' : 'translate-y-0'
      }`}
      style={{
        background: '#ffffff',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif'
      }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="flex items-center justify-between h-[55px] md:h-[68px] lg:h-[72px]">

          {/* Logo (Left Side) */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src={logoImages.main}
              alt="UK Celestique Garden"
              className="h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Nav Links (Center/Right) */}
          <div className="hidden lg:flex items-center justify-center gap-3.5 xl:gap-6 2xl:gap-8 flex-1 ml-2 xl:ml-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] xl:text-[14.5px]"
                style={{
                  fontWeight: link.active ? '700' : '600',
                  color: link.active ? '#111111' : '#2d3748',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={e => {
                  if (!link.active) e.target.style.color = '#8B6A34'
                  prefetchSection(link.href)
                }}
                onMouseLeave={e => {
                  if (!link.active) e.target.style.color = '#2d3748'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Button — Desktop (Right Side) */}
          <div className="hidden lg:flex items-center shrink-0 ml-4">
            <button
              onClick={() => setIsOpen(true)}
              onMouseEnter={() => onPrefetchModal?.()}
              onTouchStart={() => onPrefetchModal?.()}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] font-extrabold text-[15px] transition-all duration-300 whitespace-nowrap shadow-md cursor-pointer"
              style={{
                background: '#111111',
                color: '#ffffff',
                border: '2px solid #111111',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#8B6A34';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#8B6A34';
                e.currentTarget.style.transform = 'translateY(-1px)';
                onPrefetchModal?.();
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#111111';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#111111';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile hamburger - Hidden on Desktop (lg) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: '#2d3748', padding: '4px', background: 'none', border: 'none' }}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={32} strokeWidth={2} /> : <Menu size={32} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid rgba(0,0,0,0.05)',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif'
        }}>
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              onTouchStart={() => prefetchSection(link.href)}
              style={{
                display: 'block',
                padding: '14px 24px',
                fontSize: '15px',
                fontWeight: link.active ? '700' : '600',
                color: link.active ? '#111111' : '#2d3748',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.02)'
                prefetchSection(link.href)
              }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ padding: '16px 24px' }}>
            <button
              onClick={() => { setIsOpen(true); setMobileOpen(false) }}
              onTouchStart={() => onPrefetchModal?.()}
              className="w-full py-3.5 px-4 rounded-[50px] font-extrabold text-[15px] transition-all duration-300 shadow-md cursor-pointer"
              style={{ background: '#111111', color: '#ffffff', border: '2px solid #111111' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#8B6A34';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#8B6A34';
                onPrefetchModal?.();
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#111111';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#111111';
              }}
            >
              Book Site Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
