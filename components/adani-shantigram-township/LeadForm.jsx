'use client'
import React, { useState } from 'react'
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../../lib/adani-shantigram-township/config'
import { buildTrackingFields, isTestMode } from '../../lib/adani-shantigram-township/formMeta'

const LeadForm = ({ formName = 'Hero Form', btnText = 'Submit Now', theme = 'dark' }) => {
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
    const testModeActive = isTestMode()

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
        setSuccess(true)
        if (typeof window !== 'undefined') {
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

  const textColor = theme === 'light' ? '#1f2937' : '#ffffff';
  const mutedTextColor = theme === 'light' ? '#4b5563' : 'rgba(255, 255, 255, 0.7)';

  if (success) return (
    <div className="text-center py-6">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-green-100 shadow-[0_4px_16px_rgba(34,197,94,0.3)]">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h4 className="text-xl font-bold mb-2" style={{ color: textColor }}>Thank You!</h4>
      <p className="text-sm font-medium" style={{ color: '#00a4e4' }}>Our team will contact you shortly.</p>
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
        className={`lead-form-input ${theme === 'light' ? 'border-gray-300' : ''}`}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email (Optional)"
        value={formData.email}
        onChange={handleChange}
        className={`lead-form-input ${theme === 'light' ? 'border-gray-300' : ''}`}
      />
      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone Number*"
        maxLength={10}
        value={formData.phone}
        onChange={handleChange}
        className={`lead-form-input ${theme === 'light' ? 'border-gray-300' : ''}`}
      />

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="lead-form-btn !text-white font-extrabold"
        style={{ color: '#ffffff' }}
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
          style={{ accentColor: '#00a4e4', width: '16px', height: '16px' }}
        />
        <label
          htmlFor="consentCheck"
          className="cursor-pointer"
          style={{
            fontSize: '11.5px',
            color: mutedTextColor,
            lineHeight: 1.55,
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          }}
        >
          I agree to receive updates as per the{' '}
          <a
            href="/adani-shantigram-township/privacy-policy"
            target="_blank"
            style={{ color: textColor, fontWeight: 700, textDecoration: 'underline' }}
          >
            privacy policy
          </a>{' '}
        </label>
      </div>
    </form>
  )
}

export default LeadForm
