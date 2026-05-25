'use client'
import LeadForm from '../../components/form/LeadForm'

export default function FormPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-start justify-center p-4 pt-10">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-jost), Montserrat, sans-serif', color: '#12447F' }}>
          Enquire Now
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <span style={{ display: 'block', width: '36px', height: '3px', background: '#12447F', borderRadius: '2px' }} />
        </div>
        <LeadForm formName="Main Form" btnText="Submit Details" />
      </div>
    </main>
  )
}
