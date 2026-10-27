'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeNavbar from '../../components/adani-shantigram-township/Navbar';
import OverviewSection from '../../components/adani-shantigram-township/OverviewSection';
import ContactSection from '../../components/adani-shantigram-township/ContactSection';
import FooterSection from '../../components/adani-shantigram-township/FooterSection';
import MasterPlanSection from '../../components/adani-shantigram-township/MasterPlanSection';
import EnquireModal from '../../components/adani-shantigram-township/EnquireModal';
import LeadForm from '../../components/adani-shantigram-township/LeadForm';
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../../lib/adani-shantigram-township/config';


const projects = [
  {
    id: 1,
    title: 'Adani Belrosa',
    slug: 'adani-belrosa',
    location: 'Shantigram - AHMEDABAD',
    configuration: '4, 5 & 6 BHK',
    landParcel: '1.82 Acres',
    size: '1,967–2,054 Sq. Ft.',
    possessionIn: '4 Years',
    bookingAmount: '₹21 Lacs*',
    rera: 'PR/GJ/GANDHINAGAR/GANDHINAGAR/Ahmedabad Urban Development Authority/RAA15538/180725/310530',
    price: '5.01 Cr*',
    status: 'UNDER CONSTRUCTION',
    image: '/adani-shantigram-township/images/home/banner2.webp'
  },
  {
    id: 2,
    title: 'Adani Amora',
    slug: 'adani-amora',
    location: 'Shantigram - AHMEDABAD',
    configuration: '3 BHK',
    landParcel: '1 Acres',
    size: '1,967–2,054 Sq. Ft.',
    possessionIn: '4 Years',
    bookingAmount: '₹5.25 Lacs*',
    rera: 'MAA16481/190226/301129',
    price: '1.30 Cr*',
    status: 'NEW LAUNCH',
    image: '/adani-shantigram-township/images/home/banner1.webp'
  },
  {
    id: 3,
    title: 'Adani Embrace',
    slug: 'adani-embrace',
    location: 'Shantigram - AHMEDABAD',
    configuration: '3 BHK',
    landParcel: '5 Towers (14 Floors)',
    size: '1,966–2,164 Sq. Ft.',
    possessionIn: '18 Months',
    bookingAmount: '₹5.25 Lacs*',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA12526/251023',
    price: '1.42 Cr*',
    status: 'UNDER CONSTRUCTION',
    image: '/adani-shantigram-township/images/home/banner3.webp'
  },
  {
    id: 4,
    title: 'Adani Ambrosia',
    slug: 'adani-ambrosia',
    location: 'Shantigram - AHMEDABAD',
    configuration: '4 BHK',
    landParcel: '2.45 Acres',
    size: '3,211–3,707 Sq. Ft.',
    possessionIn: 'Sep-26',
    bookingAmount: '₹5.25 Lacs*',
    rera: 'PR/GJ/GANDHINAGAR/GANDHINAGAR/AUDA/RAA10833/201022',
    price: '2.45 Cr*',
    status: 'UNDER CONSTRUCTION',
    image: '/adani-shantigram-township/images/home/banner4.webp'
  },
  {
    id: 5,
    title: 'Shivalik Greenfield',
    slug: 'shivalik-greenfield',
    location: 'Shantigram - AHMEDABAD',
    configuration: '3 & 4 BHK',
    landParcel: '2.14 Acres',
    size: '2653 - 4548 Sqft',
    possessionIn: '2028',
    bookingAmount: '25%',
    rera: 'RAA14879',
    price: '1.83 Cr*',
    status: 'NEW LAUNCH',
    image: '/adani-shantigram-township/images/home/banner6.webp'
  },
  {
    id: 6,
    title: 'Shilp Skyline',
    slug: 'shilp-skyline',
    location: 'Shantigram - AHMEDABAD',
    configuration: '4 BHK',
    landParcel: '2.5 Acres',
    size: '3071 - 3071 Sqft',
    possessionIn: '2027',
    bookingAmount: '5%',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedaba',
    price: '2.23 Cr*',
    status: 'NEW LAUNCH',
    image: '/adani-shantigram-township/images/home/banner7.webp'
  },
  /*
  {
    id: 7,
    title: 'Adani Augusta',
    slug: 'adani-augusta',
    location: 'Tragad - AHMEDABAD',
    configuration: '3 BHK',
    landParcel: '0.81 Acres',
    size: '1382 - 1382 Sqft',
    possessionIn: '2026',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA12662/161123',
    price: '1.3 Cr',
    status: 'UNDER CONSTRUCTION',
    image: '/home/banner5.webp'
  },
  */
  /*
  {
    id: 8,
    title: 'Adani Amaris',
    slug: 'adani-amaris',
    location: 'Gota - AHMEDABAD',
    type: '4 BHK, 5 BHK',
    landArea: '3.94 Acres',
    size: '2026 - 4292 Sqft',
    totalUnits: '192',
    possession: '2028',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedabad Municipal Corporation/RAA15836/150925/310729',
    price: '2.67 Cr',
    status: 'UNDER CONSTRUCTION',
    image: '/home/banner8.webp'
  }
  */
];

export default function MainHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main id="top" className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* Top Header Navbar with Left Logo & Navigation Links */}
      <HomeNavbar />

      {/* Hero Section */}
      <section id="hero" className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[680px] flex items-center justify-center py-16 sm:py-20 md:py-24">
        {/* Background Image with Cinematic Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/adani-shantigram-township/images/home/home.webp"
            alt="Adani Shantigram Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/25"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 mt-4 sm:mt-6 md:mt-0">
          
          {/* Left Content */}
          <div className="text-left max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#00a4e4]/20 border border-[#00a4e4]/40 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-full mb-3.5 sm:mb-4 max-w-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00a4e4] animate-pulse shrink-0"></span>
              <span className="text-[#33b8eb] text-[10.5px] sm:text-xs md:text-[13px] font-bold uppercase tracking-wider leading-tight">
                Gujarat&apos;s Largest Integrated Township • SG Highway
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.18] mb-3.5 sm:mb-4 drop-shadow-md">
              Welcome to Adani <br className="hidden sm:inline" />
              <span className="text-[#33b8eb]">Shantigram</span> Projects
            </h1>

            {/* Subtitle */}
            <p className="text-white/85 text-sm sm:text-base md:text-[17px] leading-relaxed mb-6 max-w-xl font-normal drop-shadow-sm">
              Experience &apos;The Good Life&apos; across 600 acres of green sanctuary featuring a 9-hole golf course, the elite Belvedere Club, and resort-style luxury residences from ₹1.30 Cr*.
            </p>

            {/* Call & WhatsApp Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-7">
              <a href={`tel:${PHONE_NUMBER}`} className="flex-1 sm:flex-initial min-w-[150px] inline-flex items-center justify-center gap-2 bg-[#00a4e4] hover:bg-[#008fce] text-white px-5 sm:px-6 py-3 rounded-xl text-sm sm:text-base font-bold transition-all shadow-lg shadow-[#00a4e4]/30 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
                <i className="fa-solid fa-phone-volume text-base shrink-0"></i>
                {PHONE_DISPLAY}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20am%20interested%20in%20Adani%20Shantigram%20Projects.`} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial min-w-[150px] inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 sm:px-6 py-3 rounded-xl text-sm sm:text-base font-bold transition-all shadow-lg shadow-[#25D366]/25 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
                <i className="fa-brands fa-whatsapp text-lg shrink-0"></i>
                +91 9560582493
              </a>
            </div>

            {/* Key Township Highlights Strip (3 Pillars) */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-4 pt-4 sm:pt-5 border-t border-white/15 max-w-xl">
              <div className="flex flex-col">
                <span className="text-white font-black text-sm sm:text-base md:text-lg tracking-tight">600 Acres</span>
                <span className="text-white/70 text-[10.5px] sm:text-xs">Mega Township</span>
              </div>
              <div className="flex flex-col border-x border-white/15 px-1 sm:px-4">
                <span className="text-white font-black text-sm sm:text-base md:text-lg tracking-tight">9-Hole Golf</span>
                <span className="text-white/70 text-[10.5px] sm:text-xs">Belvedere Club</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#38bdf8] font-black text-[18px] sm:text-xl md:text-2xl tracking-tight blink-price whitespace-nowrap">
                  ₹ 1.30 Cr*
                </span>
                <span className="text-white/70 text-[10.5px] sm:text-xs">Starting Price</span>
              </div>
            </div>
          </div>

          {/* Right Content - Form Card */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#00a4e4] p-6 sm:p-7">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 m-0">Book Site Visit</h3>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Instant Offer
                </span>
              </div>
              <p className="text-slate-500 text-xs m-0">
                ⚡ Get Instant Cost Sheet &amp; Floor Plans on WhatsApp
              </p>
            </div>
            <LeadForm formName="Home Page Banner Form" btnText="BOOK A SITE VISIT" theme="light" />
          </div>
          
        </div>
      </section>

      {/* 2nd Section: Dedicated Overview matching adani slug */}
      <OverviewSection setIsOpen={setIsModalOpen} />

      {/* Projects Section - 1 line me 2 cards */}
      <section id="projects" className="py-16 sm:py-20 md:py-24 w-full flex flex-col items-center px-4 sm:px-6">
        <div className="w-full max-w-6xl text-center mb-10 sm:mb-14">
          <span className="text-[#00a4e4] text-xs sm:text-sm font-bold uppercase tracking-[0.22em] block mb-2">
            Signature Developments
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Exclusive Premium Projects
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore handpicked ultra-luxury residences designed for the Good Life.
          </p>
        </div>
      
        {/* 1 Line me 2 Cards: grid-cols-1 md:grid-cols-2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {projects.map((project) => (
          /* Commented slug navigation - Opens Enquire Popup instead */
          /* <Link href={`/${project.slug}`} key={project.id}> */
          <div 
            key={project.id} 
            onClick={() => setIsModalOpen(true)}
            className="group flex flex-col h-full bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all duration-300 border border-slate-100 hover:-translate-y-1 cursor-pointer"
          >
            
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-200 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider text-white shadow-md ${
                  project.status === 'NEW LAUNCH' ? 'bg-[#5c2483]/90' : 'bg-[#0f172a]/80'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-7 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 group-hover:text-[#00a4e4] transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium mb-4 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#d31168]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {project.location}
              </p>

              {/* Specs Grid - Option 1: Modern Soft-Tile Blocks */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-4">
                {/* Configuration */}
                <div className="bg-slate-50/90 border border-slate-200/70 rounded-xl p-2.5 sm:p-3 hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-1.5 mb-1">
                    <i className="fa-solid fa-bed text-[#00a4e4] text-[11px] shrink-0"></i>
                    <span className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Configuration</span>
                  </div>
                  <p className="text-slate-900 font-bold text-xs sm:text-[13.5px] truncate" title={project.configuration}>
                    {project.configuration}
                  </p>
                </div>

                {/* Land Parcel */}
                <div className="bg-slate-50/90 border border-slate-200/70 rounded-xl p-2.5 sm:p-3 hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-1.5 mb-1">
                    <i className="fa-solid fa-layer-group text-[#00a4e4] text-[11px] shrink-0"></i>
                    <span className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Land Parcel</span>
                  </div>
                  <p className="text-slate-900 font-bold text-xs sm:text-[13.5px] truncate" title={project.landParcel}>
                    {project.landParcel}
                  </p>
                </div>

                {/* Size */}
                <div className="bg-slate-50/90 border border-slate-200/70 rounded-xl p-2.5 sm:p-3 hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-1.5 mb-1">
                    <i className="fa-solid fa-maximize text-[#00a4e4] text-[11px] shrink-0"></i>
                    <span className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Size</span>
                  </div>
                  <p className="text-slate-900 font-bold text-xs sm:text-[13.5px] truncate" title={project.size}>
                    {project.size}
                  </p>
                </div>

                {/* Possession In */}
                <div className="bg-slate-50/90 border border-slate-200/70 rounded-xl p-2.5 sm:p-3 hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-1.5 mb-1">
                    <i className="fa-solid fa-calendar-check text-[#00a4e4] text-[11px] shrink-0"></i>
                    <span className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Possession In</span>
                  </div>
                  <p className="text-slate-900 font-bold text-xs sm:text-[13.5px] truncate" title={project.possessionIn}>
                    {project.possessionIn}
                  </p>
                </div>

                {/* Booking Amount (if any) */}
                {project.bookingAmount && (
                  <div className="col-span-2 bg-emerald-50/80 border border-emerald-200/70 rounded-xl px-3 py-2 flex items-center justify-between">
                    <span className="text-emerald-800 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <i className="fa-solid fa-circle-check text-emerald-600"></i> Booking Amount
                    </span>
                    <span className="text-emerald-950 font-bold text-xs sm:text-sm">{project.bookingAmount}</span>
                  </div>
                )}
              </div>

              {/* RERA Number - Verified Official Badge Style */}
              {project.rera && (
                <div className="mb-5 bg-gradient-to-r from-slate-50 via-slate-50 to-blue-50/30 border border-slate-200/80 rounded-xl p-2.5 sm:p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <i className="fa-solid fa-shield-halved text-[#00a4e4] text-xs"></i>
                    <span className="text-slate-600 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider">RERA Registered</span>
                  </div>
                  <p className="text-slate-700 font-mono text-[10.5px] sm:text-[11px] leading-relaxed break-all font-medium">
                    {project.rera}
                  </p>
                </div>
              )}

              {/* Footer - Price & CTA */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-auto">
                <div>
                  <p className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-0.5">Starting From</p>
                  <p className="text-[#00a4e4] text-lg sm:text-xl md:text-2xl font-black tracking-tight">₹ {project.price}</p>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#1e293b] group-hover:bg-[#00a4e4] text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md group-hover:shadow-[#00a4e4]/30">
                  <span>Explore</span>
                  <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-0.5 transition-transform"></i>
                </div>
              </div>
            </div>
          </div>
          /* </Link> */
        ))}

        </div>
      </section>

      {/* Master Plan & Floor Plan Section (interactive tabs) */}
      <MasterPlanSection setIsOpen={setIsModalOpen} />

      {/* Contact Us Section (matches screenshot 2) */}
      <ContactSection />

      {/* Footer Section (matches screenshot 1 with theme color) */}
      <FooterSection />

      {/* Interactive Enquire Modal */}
      <EnquireModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      {/* Mobile sticky bottom bar (Call Us, Enquire Now, WhatsApp) */}
      <div className="sticky-bottom-bar">
        <a
          id="mobile-call"
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 flex flex-col items-center justify-center py-2.5 px-1"
          style={{ background: '#1a1a1a', borderRight: '1px solid #333' }}
        >
          <div className="phone-icon-wrap flex items-center justify-center">
            <svg width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
          </div>
          <span className="text-[11px] sm:text-[12px] font-bold text-white mt-1 leading-none">Call Us</span>
        </a>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex-1 flex flex-col items-center justify-center py-2.5 px-1 cursor-pointer"
          style={{ background: '#00a4e4', borderRight: '1px solid #0082b5' }}
        >
          <div className="enquire-icon-wrap flex items-center justify-center">
            <svg width="22" height="22" fill="none" stroke="#ffffff" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <span className="text-[11px] sm:text-[12px] font-bold text-white mt-1 leading-none uppercase">Enquire</span>
        </button>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20am%20interested%20in%20Adani%20Shantigram%20Projects.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2.5 px-1"
          style={{ background: '#25D366' }}
        >
          <div className="whatsapp-icon-wrap flex items-center justify-center">
            <svg width="22" height="22" fill="#ffffff" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <span className="text-[11px] sm:text-[12px] font-bold text-white mt-1 leading-none">WhatsApp</span>
        </a>
      </div>

      <div className="h-16 lg:hidden" />
    </main>
  );
}
