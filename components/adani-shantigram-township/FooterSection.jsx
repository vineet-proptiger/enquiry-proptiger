'use client';

import React from 'react';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <>
      {/* About Adani Realty Block - Clean White Background */}
      <section className="w-full bg-white border-t border-slate-200 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2.5px] bg-[#00a4e4]" />
            <span className="text-[#00a4e4] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              About Developer
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Adani Realty
          </h2>

          <div className="text-slate-600 text-sm sm:text-base leading-[1.85] space-y-4 text-justify font-normal">
            <p>
              Adani Realty is the real estate arm of one of India&apos;s leading infrastructure and development entities – Adani Group. With resolute commitments to &apos;Nation Building&apos; and &apos;Growth with Goodness&apos;, we are developing real estate projects in the most promising destinations, integrating design aesthetics with cutting-edge construction technology. We have developed close to 33 Mn. Sq. Ft. and approximately 144 Mn. Sq. Ft. of real estate space is under development, including residential, commercial, and social club projects across Ahmedabad, Mumbai, Pune and Gurugram.
            </p>
            <p>
              Within a decade, Adani Realty has achieved exponential growth in the residential and commercial sectors. We have helped numerous families find their dream houses where they are happily residing. We have also created state-of-the-art commercial spaces with futuristic setups for companies to work, feel empowered and flourish. We have some of the most sought-after award-winning commercial and retail spaces which promise craftsmanship and superior design by Adani Realty.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer Footer - Dark Theme matching Screenshot 1 */}
      <footer className="w-full bg-[#0a0a0a] text-white border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Privacy Policy Link - Right-Aligned */}
          <div className="flex justify-end mb-4">
            <Link
              href="/adani-shantigram-township/privacy-policy"
              className="text-[#00a4e4] hover:text-[#38bdf8] hover:underline font-semibold text-xs sm:text-sm tracking-wide transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Disclaimer Text */}
          <p className="text-white/90 text-xs sm:text-[13px] leading-[1.8] text-left">
            <strong className="text-[#00a4e4] font-bold">Disclaimer:</strong>{' '}
            This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
          </p>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-white/80 text-xs gap-3">
            <p>© {new Date().getFullYear()} Adani Shantigram. All rights reserved.</p>
            <p className="text-white/70">Authorized Channel Partner / Information Portal</p>
          </div>
        </div>
      </footer>
    </>
  );
}
