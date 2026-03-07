'use client'

import { useId, useMemo, useState } from 'react'

type ServiceLeadFormCardProps = {
  title?: string
  description?: string
  serviceLabel?: string
  submitLabel?: string
  services?: string[]
  defaultService?: string
  compact?: boolean
}

export default function ServiceLeadFormCard({
  title = 'Request a callback',
  description = 'Share your details and we will get back to you with clear next steps.',
  serviceLabel = 'Service',
  submitLabel = 'Send Request',
  services,
  defaultService,
  compact = false,
}: ServiceLeadFormCardProps) {
  const uid = useId()
  const nameId = `lead-name-${uid}`
  const phoneId = `lead-phone-${uid}`
  const emailId = `lead-email-${uid}`
  const serviceId = `lead-service-${uid}`

  const [submitted, setSubmitted] = useState(false)

  const serviceOptions = useMemo(() => {
    const cleaned = (services ?? []).map((s) => s.trim()).filter(Boolean)
    return Array.from(new Set(cleaned))
  }, [services])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  /* ── shared input class ── */
  const inputCls = `w-full rounded-xl bg-[#F7F9FC] border border-gray-200 px-3.5 ${compact ? 'py-2.5' : 'py-3'} text-[13.5px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#00223E]/40 focus:bg-white transition-all`

  return (
    <div className="rounded-[1.75rem] bg-white border border-gray-100 shadow-[0_24px_70px_rgba(0,0,0,0.08)] overflow-hidden">

      {/* ── Dark header ── */}
      <div className={`relative ${compact ? 'px-5 py-5' : 'px-7 py-7 md:px-8 md:py-8'} bg-[#00223E] text-white overflow-hidden`}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-12 -right-12 h-[160px] w-[160px] rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-12 h-[180px] w-[180px] rounded-full bg-white/8 blur-3xl" />
        </div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-px w-5 bg-white/40" />
            <span className="text-[10px] font-bold tracking-[0.22em] text-white/55 uppercase">Quick Inquiry</span>
          </div>
          <h3 className={`font-bold tracking-tight leading-snug ${compact ? 'text-[16px]' : 'text-[18px] md:text-[20px]'}`}>
            {title}
          </h3>
          {!compact && (
            <p className="mt-1.5 text-[12.5px] text-white/70 leading-relaxed font-medium">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* ── Form body ── */}
      {submitted ? (
        <div className={`${compact ? 'p-5' : 'p-6 md:p-8'} flex flex-col items-center justify-center text-center gap-3`}>
          <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <div>
            <div className="text-[15px] font-bold text-gray-900">Request sent!</div>
            <p className="mt-1 text-[12.5px] text-gray-500 font-medium">We&apos;ll be in touch shortly.</p>
          </div>
        </div>
      ) : (
        <form
          className={`${compact ? 'p-4' : 'p-6 md:p-8'} space-y-3`}
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Name */}
          <div>
            <label className="block text-[11.5px] font-bold text-gray-500 mb-1 tracking-wide uppercase" htmlFor={nameId}>
              Full Name
            </label>
            <input id={nameId} name="name" type="text" placeholder="Your full name" className={inputCls} required />
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11.5px] font-bold text-gray-500 mb-1 tracking-wide uppercase" htmlFor={phoneId}>
                Mobile
              </label>
              <input id={phoneId} name="phone" type="tel" placeholder="+971 50 000 0000" className={inputCls} required />
            </div>
            <div>
              <label className="block text-[11.5px] font-bold text-gray-500 mb-1 tracking-wide uppercase" htmlFor={emailId}>
                Email
              </label>
              <input id={emailId} name="email" type="email" placeholder="name@company.com" className={inputCls} required />
            </div>
          </div>

          {/* Service dropdown */}
          <div>
            <label className="block text-[11.5px] font-bold text-gray-500 mb-1 tracking-wide uppercase" htmlFor={serviceId}>
              {serviceLabel}
            </label>
            <div className="relative">
              <select
                id={serviceId}
                name="service"
                defaultValue={defaultService ?? ''}
                className={`${inputCls} appearance-none pr-9`}
                required
              >
                <option value="" disabled>Select a service…</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full rounded-full bg-[#00223E] text-white font-bold ${compact ? 'py-2.5 text-[13px]' : 'py-3.5 text-[14px]'} tracking-wide hover:bg-[#003560] active:scale-[0.98] transition-all shadow-[0_12px_32px_rgba(0,34,62,0.18)]`}
          >
            {submitLabel}
          </button>

          <p className="text-center text-[11px] text-gray-400 font-medium">
            By submitting, you agree to be contacted.
          </p>
        </form>
      )}
    </div>
  )
}
