'use client'

import { useId, useMemo } from 'react'

type ServiceLeadFormCardProps = {
  title?: string
  description?: string
  serviceLabel?: string
  submitLabel?: string
  services?: string[]
  defaultService?: string
}

export default function ServiceLeadFormCard({
  title = 'Request a callback',
  description = 'Share your details and we will contact you with clear next steps.',
  serviceLabel = 'Service',
  submitLabel = 'Send request',
  services,
  defaultService,
}: ServiceLeadFormCardProps) {
  const uid = useId()
  const nameId = `lead-name-${uid}`
  const phoneId = `lead-phone-${uid}`
  const emailId = `lead-email-${uid}`
  const serviceId = `lead-service-${uid}`

  const serviceOptions = useMemo(() => {
    const cleaned = (services ?? []).map((s) => s.trim()).filter(Boolean)
    return Array.from(new Set(cleaned))
  }, [services])

  return (
    <div className="rounded-[2rem] bg-white border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="relative px-7 py-7 md:px-8 md:py-8 bg-[#00223E] text-white">
        <div className="absolute inset-0 opacity-70" aria-hidden="true">
          <div className="absolute -top-16 -right-16 h-[220px] w-[220px] rounded-full bg-primary/35 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative">
          <div className="text-[11px] font-bold tracking-[0.25em] text-white/70 uppercase">
            Quick inquiry
          </div>
          <h3 className="mt-3 text-[20px] md:text-[22px] font-bold tracking-tight leading-snug">
            {title}
          </h3>
          <p className="mt-2 text-[13.5px] md:text-[14px] text-white/80 leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>

      <form className="p-7 md:p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-[13px] font-semibold text-gray-700 mb-1" htmlFor={nameId}>
              Name
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl bg-lightGrey border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1" htmlFor={phoneId}>
              Phone
            </label>
            <input
              id={phoneId}
              name="phone"
              type="tel"
              placeholder="+971 50 123 4567"
              className="w-full rounded-xl bg-lightGrey border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1" htmlFor={emailId}>
              Email
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-xl bg-lightGrey border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1" htmlFor={serviceId}>
            {serviceLabel}
          </label>
          <select
            id={serviceId}
            name="service"
            defaultValue={defaultService ?? (serviceOptions[0] ?? '')}
            className="w-full rounded-xl bg-lightGrey border border-gray-200 px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
            required
          >
            {serviceOptions.length ? (
              serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))
            ) : (
              <option value="">Select a service</option>
            )}
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-2 rounded-full bg-primary text-white font-bold py-3.5 text-[14px] tracking-wide hover:bg-blue-800 transition-colors shadow-[0_20px_50px_rgba(0,102,166,0.28)]"
        >
          {submitLabel}
        </button>

        <div className="text-[12.5px] text-gray-500 leading-relaxed font-medium">
          By submitting, you agree to be contacted regarding your inquiry.
        </div>
      </form>
    </div>
  )
}
