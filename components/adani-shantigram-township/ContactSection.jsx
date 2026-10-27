'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../../lib/adani-shantigram-township/config';
import { buildTrackingFields, isTestMode } from '../../lib/adani-shantigram-township/formMeta';

export default function ContactSection() {
  const [formData, setFormData] = useState({ fullname: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'phone' ? value.replace(/\D/g, '') : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setError('Enter valid 10-digit number');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError('Phone number must start with 6, 7, 8, or 9');
      return;
    }

    setError('');
    setLoading(true);

    const tracking = buildTrackingFields();
    const testModeActive = isTestMode();

    // --- GCLID-SPECIFIC BROWSER LIMIT (Bypassed if test/debug mode) ---
    let currentCount = 0;
    let safeGclid = '';
    
    if (tracking.gclid && !testModeActive) {
      safeGclid = tracking.gclid;
      const cookieRegex = new RegExp(`(?:^|; )lead_trk_${PROJECT_ID}_${safeGclid}=([^;]*)`);
      const cookieMatch = document.cookie.match(cookieRegex);
      const cookieCount = cookieMatch ? parseInt(cookieMatch[1], 10) : 0;
      
      let lsCount = 0;
      const lsKey = `lead_trk_data_${PROJECT_ID}`;
      const lsDataStr = localStorage.getItem(lsKey);
      
      if (lsDataStr) {
        try {
          const lsData = JSON.parse(lsDataStr);
          const gclidRecord = lsData[tracking.gclid];
          
          if (gclidRecord) {
            if (Date.now() - gclidRecord.firstSeen < 2592000000) {
              lsCount = gclidRecord.count || 0;
            } else {
              delete lsData[tracking.gclid];
              localStorage.setItem(lsKey, JSON.stringify(lsData));
            }
          }
        } catch (e) {}
      }
      
      currentCount = Math.max(cookieCount, lsCount);
      
      if (currentCount >= 3) {
        setSuccess(true);
        setLoading(false);
        return;
      }
    }

    const payload = new FormData();
    payload.append('fullname', formData.fullname);
    payload.append('phone', formData.phone);
    payload.append('email', formData.email || '');
    payload.append('projectId', PROJECT_ID);
    payload.append('projectName', PROJECT_NAME);
    payload.append('form_name', 'Home Contact Section Form');
    payload.append('sheet_name', SHEET_NAME);
    payload.append('secret', SECRET_KEY);
    payload.append('city', CITY_DISPLAY);
    Object.entries(tracking).forEach(([k, v]) => payload.append(k, v));

    try {
      const res = await fetch(API_ENDPOINT, { method: 'POST', body: payload });
      const data = await res.json();
      if (data.status) {
        if (tracking.gclid && !testModeActive) {
          const newCount = currentCount + 1;
          if (typeof document !== 'undefined') document.cookie = `lead_trk_${PROJECT_ID}_${safeGclid}=${newCount}; max-age=2592000; path=/`;
          
          if (typeof localStorage !== 'undefined') {
            const lsKey = `lead_trk_data_${PROJECT_ID}`;
            let lsData = {};
            try {
              const existing = localStorage.getItem(lsKey);
              if (existing) lsData = JSON.parse(existing);
            } catch(e) {}
            
            lsData[tracking.gclid] = {
              count: newCount,
              firstSeen: (lsData[tracking.gclid] && lsData[tracking.gclid].firstSeen) ? lsData[tracking.gclid].firstSeen : Date.now()
            };
            try { localStorage.setItem(lsKey, JSON.stringify(lsData)); } catch(e) {}
          }
        }
        setSuccess(true);
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];
          const nameParts = formData.fullname.trim().split(' ');
          window.dataLayer.push({
            event: 'lead_submit_success',
            form_name: 'Home Contact Section Form',
            user_data: {
              email: formData.email.trim() || undefined,
              phone: `+91${formData.phone}`,
              first_name: nameParts[0] || '',
              last_name: nameParts.slice(1).join(' ') || '',
            },
          });
        }
      } else {
        setError(data.msg || 'Something went wrong.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image: vibrant pool & architecture with light subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/adani-shantigram-township/images/home/contact.png"
          alt="Adani Shantigram Luxury Living"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle natural tint to keep background bright & vibrant */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: GET IN TOUCH (Light Frosted Glass Card) */}
          <div className="h-full bg-black/20 backdrop-blur-md border border-white/30 rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-12 shadow-2xl text-left text-white flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-wider uppercase leading-tight mb-4 drop-shadow-md">
              GET IN TOUCH
            </h2>

            {/* Accent separator line with center dot */}
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <div className="w-14 h-[2px] bg-white/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#00a4e4] shadow-sm" />
              <div className="w-14 h-[2px] bg-white/50" />
            </div>

            <p className="text-white text-sm sm:text-base leading-relaxed max-w-lg font-medium drop-shadow-sm">
              Let&apos;s connect and bring your ideas to life. Reach out today for expert guidance, quick responses, and solutions tailored perfectly to your needs.
            </p>
          </div>

          {/* Right Column: Standalone Form Card (Matching Translucent Glass) */}
          <div className="w-full h-full flex flex-col">
            <div className="h-full flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/30">
              
              {/* Brand Cyan Theme Header */}
              <div className="bg-[#00a4e4] p-4 sm:p-5 text-left border-b border-white/20">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1">
                  Book Site Visit Today
                </h3>
                <p className="text-white/95 text-[11px] sm:text-xs font-medium">
                  Register now to get the best deal &amp; book your site visit
                </p>
              </div>

              {/* Translucent Frosted Glass Form Body */}
              <div className="bg-black/20 backdrop-blur-md p-5 sm:p-7 flex-1 flex flex-col justify-center">
                {success ? (
                  <div className="py-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#00a4e4]/20 border border-[#00a4e4] flex items-center justify-center mx-auto mb-3 text-[#00a4e4]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">Thank You!</h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Our property advisor will get in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1.5">
                        FULL NAME <span className="text-[#00a4e4]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        required
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full bg-white text-slate-800 placeholder-slate-400 text-sm rounded-md px-4 py-3 border border-white focus:outline-none focus:ring-2 focus:ring-[#00a4e4] shadow-sm font-medium"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1.5">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Id (optional)"
                        className="w-full bg-white text-slate-800 placeholder-slate-400 text-sm rounded-md px-4 py-3 border border-white focus:outline-none focus:ring-2 focus:ring-[#00a4e4] shadow-sm font-medium"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1.5">
                        MOBILE NUMBER <span className="text-[#00a4e4]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full bg-white text-slate-800 placeholder-slate-400 text-sm rounded-md px-4 py-3 border border-white focus:outline-none focus:ring-2 focus:ring-[#00a4e4] shadow-sm font-medium"
                      />
                    </div>

                    {error && (
                      <p className="text-red-300 text-xs bg-red-900/60 p-2 rounded border border-red-500">
                        {error}
                      </p>
                    )}

                    {/* Checkbox Consent */}
                    <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        required
                        defaultChecked
                        className="mt-1 w-4 h-4 rounded text-[#00a4e4] focus:ring-[#00a4e4] border-gray-300 accent-[#00a4e4] shrink-0"
                      />
                      <span className="text-[11px] text-white/85 leading-snug">
                        I authorize the developer &amp; its representatives to contact me via Email / SMS / WhatsApp / Call.
                      </span>
                    </label>

                    {/* Submit Button with Airplane Icon */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 bg-[#00a4e4] hover:bg-[#008fce] text-white font-extrabold py-3.5 px-6 rounded-md text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl shadow-[#00a4e4]/30 hover:shadow-[#00a4e4]/50 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                    >
                      <i className="fa-solid fa-paper-plane text-xs"></i>
                      <span>{loading ? 'SUBMITTING...' : 'SUBMIT DETAILS'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
