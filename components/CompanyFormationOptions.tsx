'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import FadeIn from './FadeIn'

type OptionKey = 'mainland' | 'freezone' | 'offshore' | 'branch'

type FormationOption = {
  key: OptionKey
  label: string
  kicker: string
  idealFor: string
  timeline: string
  highlights: string[]
  considerations: string[]
}

const options: FormationOption[] = [
  {
    key: 'mainland',
    label: 'Mainland',
    kicker: 'Operate across the UAE',
    idealFor: 'Companies that need broad operational flexibility, local market access, or multiple client types.',
    timeline: 'Typically 7-15 working days (depends on activity and approvals).',
    highlights: [
      'Flexible office and hiring options (subject to regulations)',
      'Suitable for many trading and professional activities',
      'Clear path for ongoing corporate services and amendments',
    ],
    considerations: [
      'Requirements vary by activity and authority',
      'Approvals and document checks can affect timelines',
    ],
  },
  {
    key: 'freezone',
    label: 'Freezone',
    kicker: 'Fast setup, structured packages',
    idealFor: 'Founders who want straightforward setup packages and a clear authority-led process.',
    timeline: 'Typically 5-12 working days (varies by freezone and documents).',
    highlights: [
      'Good for many services, trading, and digital-first businesses',
      'Transparent package options (license, visa allocation, office)',
      'Predictable formation steps with authority coordination',
    ],
    considerations: [
      'Each freezone has its own rules and activity scope',
      'Banking and operational needs should be planned early',
    ],
  },
  {
    key: 'offshore',
    label: 'Offshore',
    kicker: 'Holding and structuring',
    idealFor: 'Ownership structures, asset holding, and scenarios where operations are not required locally.',
    timeline: 'Typically 7-20 working days (depends on authority and KYC).',
    highlights: [
      'Often used for holding, investments, and international structuring',
      'Streamlined compliance and documentation with clear KYC',
      'Practical for specific use cases when aligned with goals',
    ],
    considerations: [
      'Not suitable for all operating models',
      'Use-case fit and compliance checks are essential',
    ],
  },
  {
    key: 'branch',
    label: 'Branch',
    kicker: 'Extend an existing company',
    idealFor: 'Foreign or local companies that want a UAE presence under the parent entity structure.',
    timeline: 'Typically 10-25 working days (parent documents and approvals impact timing).',
    highlights: [
      'Operate under the parent company name and structure',
      'Good for expansion when the parent is established',
      'Clear scope for registrations, amendments, and renewals',
    ],
    considerations: [
      'Parent documentation must be complete and attested as required',
      'Authority approvals may be activity-specific',
    ],
  },
]

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

export default function CompanyFormationOptions() {
  const [active, setActive] = useState<OptionKey>('freezone')

  const activeOption = useMemo(
    () => options.find((o) => o.key === active) ?? options[0],
    [active]
  )

  return (
    <section className="py-20 md:py-28 bg-[#F9FAFB] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-[360px] w-[360px] rounded-full bg-[#00223E]/10 blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
          <FadeIn>
            <div>
              <div className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                Formation options
              </div>
              <h2 className="mt-5 text-[28px] md:text-[36px] lg:text-[42px] font-medium text-[#2d3748] leading-[1.25] tracking-tight">
                Choose the right route for your activity, timeline, and budget.
              </h2>
              <p className="mt-5 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[70ch]">
                We help you compare the practical trade-offs between mainland, freezone, offshore, and branch setups. The goal is a compliant structure that fits how you plan to operate.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Clear recommendation',
                    text: 'We map your activity and constraints to a realistic option and checklist.',
                  },
                  {
                    title: 'Structured documentation',
                    text: 'We keep submissions clean and reduce back-and-forth with authorities.',
                  },
                  {
                    title: 'End-to-end coordination',
                    text: 'Follow-ups, approvals, and handover managed with practical timelines.',
                  },
                  {
                    title: 'Ongoing support',
                    text: 'Renewals, amendments, and corporate services when you need them.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white border border-gray-100 px-5 py-5 shadow-sm"
                  >
                    <div className="text-[14.5px] font-bold text-gray-900 tracking-tight">
                      {item.title}
                    </div>
                    <div className="mt-2 text-[13.5px] font-medium text-gray-600 leading-relaxed">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-[2rem] bg-white border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center justify-between gap-6 flex-wrap">
                  <div className="min-w-0">
                    <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                      Quick comparison
                    </div>
                    <div className="mt-3 text-[16px] md:text-[18px] font-bold text-gray-900 tracking-tight">
                      Tap an option to see details
                    </div>
                  </div>

                  <div
                    className="w-full sm:w-auto min-w-0 flex items-center gap-2 rounded-full bg-[#F3F6FA] border border-gray-100 p-1 overflow-x-auto max-w-full"
                    role="tablist"
                    aria-label="Company formation options"
                  >
                    {options.map((o) => {
                      const isActive = o.key === active
                      return (
                        <button
                          key={o.key}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setActive(o.key)}
                          className={
                            'shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-all ' +
                            (isActive
                              ? 'bg-primary text-white shadow-[0_10px_30px_rgba(0,102,166,0.25)]'
                              : 'text-gray-700 hover:text-gray-900 hover:bg-white')
                          }
                        >
                          {o.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <motion.div
                  key={activeOption.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="rounded-[1.75rem] bg-[#00223E] text-white p-7 md:p-8 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-70">
                      <div className="absolute -top-24 -right-24 h-[260px] w-[260px] rounded-full bg-primary/30 blur-3xl" />
                      <div className="absolute -bottom-28 -left-24 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />
                    </div>

                    <div className="relative">
                      <div className="flex items-start justify-between gap-6 flex-wrap min-w-0">
                        <div className="min-w-0">
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-2 text-[12px] font-semibold tracking-wide text-white/90 backdrop-blur">
                            {activeOption.kicker}
                          </div>
                          <h3 className="mt-5 text-[24px] md:text-[28px] font-bold tracking-tight leading-[1.15]">
                            {activeOption.label} company setup
                          </h3>
                        </div>

                        <div className="w-full sm:w-auto sm:shrink-0 rounded-2xl bg-white/10 border border-white/15 px-4 py-3">
                          <div className="text-[11px] font-bold tracking-[0.25em] text-white/70 uppercase">
                            Timeline
                          </div>
                          <div className="mt-2 text-[13.5px] font-semibold text-white/90 leading-snug sm:max-w-[18rem] break-words">
                            {activeOption.timeline}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
                          <div className="flex items-center gap-3 text-white/90">
                            <span className="w-9 h-9 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                              <CheckIcon />
                            </span>
                            <div className="text-[13px] font-bold tracking-[0.2em] uppercase">
                              Ideal for
                            </div>
                          </div>
                          <p className="mt-4 text-[14px] text-white/85 leading-relaxed font-medium break-words">
                            {activeOption.idealFor}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
                          <div className="flex items-center gap-3 text-white/90">
                            <span className="w-9 h-9 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                              <InfoIcon />
                            </span>
                            <div className="text-[13px] font-bold tracking-[0.2em] uppercase">
                              Things to know
                            </div>
                          </div>
                          <div className="mt-4 space-y-2">
                            {activeOption.considerations.map((c) => (
                              <div
                                key={c}
                                className="text-[13.5px] font-semibold text-white/85 leading-snug break-words"
                              >
                                {c}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="rounded-[1.75rem] bg-[#F9FAFB] border border-gray-100 p-6 md:p-7">
                      <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                        Key benefits
                      </div>
                      <div className="mt-4 space-y-2">
                        {activeOption.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-3">
                            <span className="mt-[2px] w-9 h-9 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                              <CheckIcon />
                            </span>
                            <div className="text-[14px] font-semibold text-gray-800 leading-snug">
                              {h}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] bg-white border border-gray-100 p-6 md:p-7 shadow-sm">
                      <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                        Included with Al Bastaki
                      </div>
                      <div className="mt-4 grid grid-cols-1 gap-2">
                        {[
                          'Option evaluation and checklist',
                          'Document preparation and reviews',
                          'Submission coordination and follow-ups',
                          'Approval tracking and final handover',
                        ].map((x) => (
                          <div
                            key={x}
                            className="rounded-2xl bg-lightGrey border border-gray-100 px-5 py-4 text-[13.5px] font-semibold text-gray-700"
                          >
                            {x}
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 text-[12.5px] text-gray-500 font-medium leading-relaxed">
                        Timelines vary by activity, authority, and completeness of documentation.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
