'use client'
import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { SECRET_KEY, API_ENDPOINT } from '../../lib/form/config'
import { buildTrackingFields } from '../../lib/formMeta'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const LeadForm = ({ formName = 'Hero Form', btnText = 'Submit Details' }) => {
  const [formData, setFormData] = useState({ projectId: '', projectName: '', sheetName: '', fullname: '', email: '' })
  const [phone, setPhone] = useState('91')
  const [dialCode, setDialCode] = useState('91')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!success) return
    const t = setTimeout(() => {
      setSuccess(false)
      setFormData({ projectId: '', projectName: '', sheetName: '', fullname: '', email: '' })
      setPhone('91')
      setDialCode('91')
    }, 4000)
    return () => clearTimeout(t)
  }, [success])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const localNumber = phone.slice(dialCode.length)
    if (!localNumber || localNumber.length < 6) {
      setError('Please enter a valid mobile number.')
      return
    }
    setError('')
    setLoading(true)
    const tracking = buildTrackingFields()
    const payload = new FormData()
    payload.append('fullname', formData.fullname)
    payload.append('email', formData.email)
    payload.append('phone', phone.slice(dialCode.length))
    payload.append('country_code', `+${dialCode}`)
    payload.append('projectId', formData.projectId)
    payload.append('projectName', formData.projectName)
    payload.append('form_name', formName)
    payload.append('sheet_name', formData.sheetName)
    payload.append('city', formData.sheetName)
    payload.append('secret', SECRET_KEY)
    Object.entries(tracking).forEach(([k, v]) => payload.append(k, v))
    try {
      const res = await fetch(API_ENDPOINT, { method: 'POST', body: payload })
      const data = await res.json()
      if (data.status) {
        setSuccess(true)
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || []
          const nameParts = formData.fullname.trim().split(' ')
          window.dataLayer.push({
            event: 'lead_submit_success',
            form_name: formName,
            user_data: {
              email: formData.email.trim() || undefined,
              phone: `+${phone}`,
              first_name: nameParts[0] || '',
              last_name: nameParts.slice(1).join(' ') || '',
            },
          })
        }
      } else {
        setError(data.msg || 'Submission failed. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) return (
    <div className="text-center py-6">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#E7EEF6' }}>
        <svg className="w-8 h-8" style={{ color: '#0A2F5C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: F_SANS }}>Thank You!</h4>
      <p className="text-gray-500 text-sm" style={{ fontFamily: F_SANS }}>Our team will contact you shortly.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <input type="text" name="projectId" required placeholder="Project ID" value={formData.projectId} onChange={handleChange}
        style={{ fontFamily: F_SANS, width: '100%', padding: '10px 14px', border: '1.5px solid #e5e7eb', borderRadius: '8px', outline: 'none', fontSize: '14px', marginBottom: '10px' }} />
      <input type="text" name="projectName" required placeholder="Project Name" value={formData.projectName} onChange={handleChange}
        style={{ fontFamily: F_SANS, width: '100%', padding: '10px 14px', border: '1.5px solid #e5e7eb', borderRadius: '8px', outline: 'none', fontSize: '14px', marginBottom: '10px' }} />
      <input type="text" name="sheetName" required placeholder="City Name (Sheet Name)" value={formData.sheetName} onChange={handleChange}
        style={{ fontFamily: F_SANS, width: '100%', padding: '10px 14px', border: '1.5px solid #e5e7eb', borderRadius: '8px', outline: 'none', fontSize: '14px', marginBottom: '10px' }} />
      <input type="text" name="fullname" required placeholder="Enter full name" value={formData.fullname} onChange={handleChange}
        style={{ fontFamily: F_SANS, width: '100%', padding: '10px 14px', border: '1.5px solid #e5e7eb', borderRadius: '8px', outline: 'none', fontSize: '14px', marginBottom: '10px' }} />
      <input type="email" name="email" placeholder="Email Id (optional)" value={formData.email} onChange={handleChange}
        style={{ fontFamily: F_SANS, width: '100%', padding: '10px 14px', border: '1.5px solid #e5e7eb', borderRadius: '8px', outline: 'none', fontSize: '14px', marginBottom: '10px' }} />

      <div className="mb-3">
        <PhoneInput
          country={'in'}
          value={phone}
          onChange={(value, data) => { setPhone(value); setDialCode(data.dialCode) }}
          placeholder="Enter mobile number"
          inputStyle={{ width: '100%', fontFamily: F_SANS, height: '42px', borderColor: '#d1d5db', borderRadius: '6px' }}
          buttonStyle={{ borderColor: '#d1d5db', borderRadius: '6px 0 0 6px', background: '#f9fafb' }}
          dropdownStyle={{ fontFamily: F_SANS }}
          enableSearch
          searchPlaceholder="Search country..."
        />
      </div>

      {error && <p className="text-red-500 text-xs mt-1" style={{ fontFamily: F_SANS }}>{error}</p>}

      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: '16px', width: '100%', padding: '13px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '8px', background: '#12447F', color: '#fff',
          border: '2px solid #12447F', borderRadius: '50px', fontFamily: F_JOST,
          fontWeight: '700', fontSize: '14px', letterSpacing: '0.04em', cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1, textTransform: 'uppercase',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        {loading ? 'Submitting...' : btnText}
      </button>
    </form>
  )
}

export default LeadForm
