// ═══════════════════════════════════════════════════════════════
//  SUBMIT LEAD API ROUTE — Next.js
//  PHP submit-lead.php ka exact replacement
//  POST /api/submit-lead
// ═══════════════════════════════════════════════════════════════

import * as lnt     from '../../../lib/lnt-island-cove-mahim/config'
import * as optima  from '../../../lib/optima-rajarhat/config'
import * as shriram from '../../../lib/shriram-codename-pudhiya/config'
import * as raghava from '../../../lib/raghava/config'
import * as cocoa from '../../../lib/cocoa-county-sector-88a-gurgaon/config'
import * as adani from '../../../lib/adani-shantigram-township/config'
import * as ukCelestique from '../../../lib/uk-celestique-garden/config'
import * as spreVilla from '../../../lib/spre-villa-plots-khapoli/config'
import * as formCfg from '../../../lib/form/config'

const PROJECTS = {
  [lnt.PROJECT_ID]:     lnt,
  [optima.PROJECT_ID]:  optima,
  [shriram.PROJECT_ID]: shriram,
  [raghava.PROJECT_ID]: raghava,
  [cocoa.PROJECT_ID]: cocoa,
  [adani.PROJECT_ID]: adani,
  [ukCelestique.PROJECT_ID]: ukCelestique,
  [spreVilla.PROJECT_ID]: spreVilla,
}

const FALLBACK_SHEET_WEBHOOK = formCfg.SHEET_WEBHOOK
const FALLBACK_PROPTIGER_URL = formCfg.PROPTIGER_URL

const COUNTRY_ID_BY_ISO = {
  in: '1',   // India
  ae: '2',   // UAE
  us: '3',   // USA
  gb: '4',   // UK
  sg: '5',   // Singapore
  au: '6',   // Australia
  ca: '7',   // Canada
  sa: '8',   // Saudi Arabia
  kw: '9',   // Kuwait
  qa: '10',  // Qatar
  om: '11',  // Oman
  bh: '12',  // Bahrain
  my: '13',  // Malaysia
  de: '14',  // Germany
  nz: '15',  // New Zealand
  za: '16',  // South Africa
  fr: '17',  // France
  hk: '18',  // Hong Kong
  id: '19',  // Indonesia
  ie: '20',  // Ireland
  it: '21',  // Italy
  jp: '22',  // Japan
  ke: '23',  // Kenya
  nl: '24',  // Netherlands
  ng: '25',  // Nigeria
  ph: '26',  // Philippines
  ru: '27',  // Russia
  es: '28',  // Spain
  lk: '29',  // Sri Lanka
  se: '30',  // Sweden
  ch: '31',  // Switzerland
  th: '32',  // Thailand
}

const COUNTRY_ID_BY_DIAL_CODE = {
  '+91': '1',   // India
  '+971': '2',  // UAE
  '+1': '3',    // USA / Canada
  '+44': '4',   // UK
  '+65': '5',   // Singapore
  '+61': '6',   // Australia
  '+966': '8',  // Saudi Arabia
  '+965': '9',  // Kuwait
  '+974': '10', // Qatar
  '+968': '11', // Oman
  '+973': '12', // Bahrain
  '+60': '13',  // Malaysia
  '+49': '14',  // Germany
  '+64': '15',  // New Zealand
  '+27': '16',  // South Africa
  '+33': '17',  // France
  '+852': '18', // Hong Kong
  '+62': '19',  // Indonesia
  '+353': '20', // Ireland
  '+39': '21',  // Italy
  '+81': '22',  // Japan
  '+254': '23', // Kenya
  '+31': '24',  // Netherlands
  '+234': '25', // Nigeria
  '+63': '26',  // Philippines
  '+7': '27',   // Russia
  '+34': '28',  // Spain
  '+94': '29',  // Sri Lanka
  '+46': '30',  // Sweden
  '+41': '31',  // Switzerland
  '+66': '32',  // Thailand
}
/* ────────────────────────────────────────────────────────────── */

function clean(v) {
  return (v ?? '').toString().trim().replace(/<[^>]*>/g, '')
}

function getUserIP(request) {
  const loopback = new Set(['::1', '127.0.0.1', '::ffff:127.0.0.1'])
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const ip = forwarded.split(',')[0].trim()
    if (ip && !loopback.has(ip)) return ip
  }
  const realIp = request.headers.get('x-real-ip')
  if (realIp && !loopback.has(realIp)) return realIp
  return ''
}

export async function POST(request) {
  try {
    /* ── Parse form data ── */
    const formData = await request.formData()
    const get = (key) => clean(formData.get(key) || '')

    /* ── Honeypot check ── */
    if (get('website') !== '') {
      return Response.json({ status: false })
    }

    /* ── Required fields ── */
    const rawCountryCode = get('country_code')
    const countryCode = rawCountryCode ? (rawCountryCode.startsWith('+') ? rawCountryCode : `+${rawCountryCode}`) : '+91'
    const countryIso = get('country_iso').toLowerCase()

    let phone = get('phone').replace(/\D/g, '')
    // For Indian (+91) numbers, preserve standard 10-digit format
    if (countryCode === '+91') {
      if (phone.length > 10) phone = phone.slice(-10)
    }
    if (phone.length > 0 && phone.length < 6) {
      return Response.json({ status: false, msg: 'Invalid phone number' })
    }
    const email = get('email')

    if (phone === '' && email === '') {
      return Response.json({ status: false })
    }

    const projectId = get('projectId')
    if (projectId === '') {
      return Response.json({ status: false })
    }

    const countryId = COUNTRY_ID_BY_ISO[countryIso] || COUNTRY_ID_BY_DIAL_CODE[countryCode] || '1'

    /* ── User data ── */
    const fullName = get('fullname')
    const projectName = get('projectName')
    const nameParts = fullName.trim().split(/\s+/)
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    /* ── Tracking ── */
    const utmSource = get('utm_source') || 'Microsite'
    const utmMedium = get('utm_medium') || 'organic'
    const utmCampaign = get('utm_campaign')
    const utmTerm = get('utm_term')
    const utmContent = get('utm_content')
    const campaignName = get('campaign_name')

    const gclid = get('gclid')
    const gbraid = get('gbraid')
    const wbraid = get('wbraid')

    const landingPage = get('SourceURL') || get('landing_page')
    const userIP = getUserIP(request) || get('ip_address')

    const comments = get('comments')

    /* ── Project config (lookup from registry) ── */
    const projectConfig  = PROJECTS[projectId] || {}
    const cityId         = projectConfig.CITY_ID       || ''
    const citySlug       = projectConfig.CITY_SLUG      || get('city') || ''
    const sheetWebhook   = projectConfig.SHEET_WEBHOOK  || FALLBACK_SHEET_WEBHOOK
    const PROPTIGER_URL  = projectConfig.PROPTIGER_URL  || FALLBACK_PROPTIGER_URL

    /* ── 1. Google Sheet ── */
    const sheetPayload = new URLSearchParams({
      secret: get('secret'),

      ProjectID: projectId,
      ProjectName: projectName,

      FullName: `${firstName} ${lastName}`.trim(),
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Mobile: `${countryCode}${phone}`,
      Comments: comments,

      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_term: utmTerm,
      utm_content: utmContent,

      gclid,
      gbraid,
      wbraid,

      SourceURL: landingPage,
      landing_page: landingPage,

      Device: get('device'),
      Referrer: get('referrer'),
      IpAddress: userIP,
      FormName: get('form_name'),
      ProjectCity: get('city'),
      sheet_name: get('sheet_name'),
    })

    fetch(sheetWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: sheetPayload.toString(),
    })
      .then(r => console.log('[Sheet] status:', r.status))
      .catch(e => console.error('[Sheet] error:', e.message))

    /* ── 2. Proptiger CRM ── */
    const ptUrl = `${PROPTIGER_URL}?utm_source=${encodeURIComponent(utmSource)}&utm_medium=${encodeURIComponent(utmMedium)}&utm_campaign=${encodeURIComponent(utmCampaign)}&utm_term=${encodeURIComponent(utmTerm)}&utm_content=${encodeURIComponent(utmContent)}&gclid=${encodeURIComponent(gclid)}&gbraid=${encodeURIComponent(gbraid)}&wbraid=${encodeURIComponent(wbraid)}&campaign_name=${encodeURIComponent(campaignName)}&sourceDomain=Microsite`

    const ptPayload = {
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone: `${countryCode}${phone}`,
      countryId: countryId,
      source: utmSource,

      projectId,
      projectName,

      cityId: cityId,
      cityName: citySlug,

      gaMedium: utmMedium,
      campaign: utmCampaign,
      addgroup: get('adgroup_name'),

      utm_term: utmTerm,
      utm_content: utmContent,

      gclid,
      gbraid,
      wbraid,

      query: comments || 'Please arrange a callback',
      device: get('device'),
      userIP,

      sendOtp: false,
      isTemp: false,
    }

    const ptBodyStr = JSON.stringify(ptPayload)
    console.log('[CRM] payload:', ptBodyStr)

    let ptStatus = null
    let ptBody = null
    try {
      const ptRes = await fetch(ptUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'Microsite',
        },
        body: ptBodyStr,
      })
      ptStatus = ptRes.status
      ptBody = await ptRes.text()
      console.log('[CRM] status:', ptStatus, '| body:', ptBody)
    } catch (e) {
      console.error('[CRM] fetch error:', e.message)
    }

    return Response.json({
      status: true,
      crm: ptStatus,
    })

  } catch (err) {
    console.error('submit-lead error:', err)
    return Response.json({ status: false, msg: 'Server error' }, { status: 500 })
  }
}



