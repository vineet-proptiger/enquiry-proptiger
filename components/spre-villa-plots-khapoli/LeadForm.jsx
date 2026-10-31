'use client'
import React, { useState } from 'react'
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../../lib/spre-villa-plots-khapoli/config'
import { buildTrackingFields } from '../../lib/spre-villa-plots-khapoli/formMeta'

const LeadForm = ({ formName = 'Hero Form', btnText = 'Submit Now' }) => {
  const [formData, setFormData] = useState({ fullname: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: name === 'phone' ? value.replace(/\D/g, '') : value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.phone.length !== 10) { setError('Please enter a valid 10-digit mobile number.'); return }
    if (!/^[6-9]\d{9}$/.test(formData.phone)) { setError('Phone number must start with 6, 7, 8, or 9'); return }
    setError(''); setLoading(true)
    const tracking = buildTrackingFields()
    
    // --- GCLID-SPECIFIC BROWSER LIMIT (Max 3 submissions per GCLID / 30 days) ---
    let currentCount = 0;
    let safeGclid = '';
    
    if (tracking.gclid) {
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

    const payload = new FormData()
    payload.append('fullname', formData.fullname)
    payload.append('email', formData.email)
    payload.append('phone', formData.phone)
    payload.append('projectId', PROJECT_ID)
    payload.append('projectName', PROJECT_NAME)
    payload.append('form_name', formName)
    payload.append('sheet_name', SHEET_NAME)
    payload.append('secret', SECRET_KEY)
    payload.append('city', CITY_DISPLAY)
    Object.entries(tracking).forEach(([k, v]) => payload.append(k, v))
    try {
      const res = await fetch(API_ENDPOINT, { method: 'POST', body: payload })
      const data = await res.json()
      if (data.status) {
        if (tracking.gclid) {
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
        setSuccess(true)
        if (typeof window !== 'undefined') {
          localStorage.setItem('_lsub_done', '1')
          window.dataLayer = window.dataLayer || []
          const nameParts = formData.fullname.trim().split(' ')
          window.dataLayer.push({
            event: 'lead_submit_success', form_name: formName,
            user_data: {
              email: formData.email.trim() || undefined, phone: `+91${formData.phone}`,
              first_name: nameParts[0] || '', last_name: nameParts.slice(1).join(' ') || ''
            }
          })
        }
      } else { setError(data.msg || 'Submission failed. Please try again.') }
    } catch { setError('Network error. Please check your connection and try again.') }
    finally { setLoading(false) }
  }

  if (success) return (
    <div className="text-center py-6">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#EEF4FC] border-2 border-[#003792]">
        <svg className="w-8 h-8 text-[#003792]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h4 className="text-xl font-bold text-[#0c2340] mb-2">Thank You!</h4>
      <p className="text-neutral-500 text-sm font-medium">Our team will contact you shortly.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <input
        type="text"
        name="fullname"
        required
        placeholder="Full Name*"
        value={formData.fullname}
        onChange={handleChange}
        className="lead-form-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email (Optional)"
        value={formData.email}
        onChange={handleChange}
        className="lead-form-input"
      />
      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone Number*"
        maxLength={10}
        value={formData.phone}
        onChange={handleChange}
        className="lead-form-input"
      />

      {error && <p className="text-red-400 text-sm mb-3 font-medium">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="lead-form-btn shadow-[0_4px_20px_rgba(0,55,146,0.35)]"
      >
        {loading ? 'Submitting...' : btnText}
      </button>

      <div className="flex items-start gap-2.5 mt-4">
        <input
          type="checkbox"
          id="consentCheck"
          required
          defaultChecked
          className="mt-1 shrink-0 cursor-pointer"
          style={{ accentColor: '#003792', width: '16px', height: '16px' }}
        />
        <label
          htmlFor="consentCheck"
          className="cursor-pointer"
          style={{
            fontSize: '11.5px',
            color: '#64748B',
            lineHeight: 1.55,
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          }}
        >
          I agree to receive updates as per the{' '}
          <a
            href="/spre-villa-plots-khapoli/privacy-policy"
            target="_blank"
            style={{ color: '#003792', fontWeight: 700, textDecoration: 'underline' }}
          >
            privacy policy
          </a>{' '}
        </label>
      </div>
    </form>
  )
}

export default LeadForm
