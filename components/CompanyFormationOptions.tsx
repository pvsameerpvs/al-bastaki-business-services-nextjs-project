'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
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
  tag: string
}

const options: FormationOption[] = [
  {
    key: 'mainland',
    label: 'Mainland',
    kicker: 'Operate across the UAE market',
    tag: 'Most flexible',
    idealFor:
      'Companies that need broad operational flexibility, UAE market access, or the ability to serve multiple client types.',
    timeline: 'Typically 7–15 working days',
    highlights: [
      'Flexible office and hiring options, subject to regulations',
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
    label: 'Free Zone',
    kicker: 'Fast setup, structured packages',
    tag: 'Most popular',
    idealFor:
      'Founders and international teams that want straightforward setup packages and a clear authority-led process.',
    timeline: 'Typically 5–12 working days',
    highlights: [
      'Great for services, trading, and digital-first businesses',
      'Transparent package options for license, visa allocation, and office needs',
      'Predictable formation steps with authority coordination',
    ],
    considerations: [
      'Each free zone has its own rules and activity scope',
      'Banking and operational needs should be planned early',
    ],
  },
  {
    key: 'offshore',
    label: 'Offshore',
    kicker: 'Holding and structuring',
    tag: 'Asset holding',
    idealFor:
      'Ownership structures, asset holding, and scenarios where UAE local operations are not required.',
    timeline: 'Typically 7–20 working days',
    highlights: [
      'Often used for holding, investments, and international structuring',
      'Streamlined documentation with clear KYC and compliance requirements',
      'Practical for specific use cases when aligned with goals',
    ],
    considerations: [
      'Not suitable for all operating models',
      'Use-case fit and compliance checks are essential',
    ],
  },
  {
    key: 'branch',
    label: 'Branch Office',
    kicker: 'Extend an existing company',
    tag: 'For established entities',
    idealFor:
      'Foreign or local companies that want a UAE presence under an existing parent entity structure.',
    timeline: 'Typically 10–25 working days',
    highlights: [
      'Operate under the parent company name and structure',
      'Good for expansion when the parent entity is established',
      'Clear scope for registrations, amendments, and renewals',
    ],
    considerations: [
      'Parent documentation must be complete and attested',
      'Authority approvals may be activity-specific',
    ],
  },
]

function CheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

function AlertIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="m10.29 3.86-8.6 14.88C1.11 20.04 2.21 22 3.86 22h16.28c1.65 0 2.75-1.96 2.17-3.26L13.71 3.86a2 2 0 0 0-3.42 0z" />
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
      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-[380px] w-[380px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[400px] w-[400px] rounded-full bg-[#00223E]/8 blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 relative">

        {/* ── Section header ── */}
        <FadeIn>
          <div className="mb-10 md:mb-14 max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-gray-400 uppercase">
                Formation options
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1a2744] leading-[1.15] tracking-tight">
              Choose the right UAE route for your activity,<br className="hidden md:block" /> timeline, and budget
            </h2>
            <p className="mt-4 text-[14.5px] md:text-[15px] text-gray-500 leading-relaxed font-medium max-w-[68ch]">
              We compare practical trade-offs between mainland, free zone, offshore, and branch setups
              so you can select a compliant, cost-aware, and growth-ready structure.
            </p>
          </div>
        </FadeIn>

        {/* ── Tab switcher ── */}
        <FadeIn delay={0.05}>
          <div
            className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 p-1.5 mb-8 shadow-sm overflow-x-auto max-w-full"
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
                    'shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-tight transition-all ' +
                    (isActive
                      ? 'bg-[#00223E] text-white shadow-[0_8px_24px_rgba(0,34,62,0.20)]'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50')
                  }
                >
                  {o.label}
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* ── Main content card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOption.key}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.38, ease: 'easeOut' }}
          >
            <div className="rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_32px_100px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="p-8 sm:p-10 md:p-14">
                
                {/* header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 pb-8 border-b border-gray-50">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-[11px] font-extrabold tracking-widest px-4 py-1.5 uppercase">
                        {activeOption.tag}
                      </span>
                      <span className="text-[13px] font-bold text-gray-400 tracking-wide uppercase">
                        {activeOption.kicker}
                      </span>
                    </div>
                    <h3 className="text-[32px] sm:text-[42px] font-black text-[#00223E] tracking-tighter leading-[1.1] uppercase">
                      {activeOption.label}{' '}
                      <span className="text-gray-300">Setup</span>
                    </h3>
                  </div>

                  {/* timeline pill */}
                  <div className="shrink-0 rounded-[2rem] bg-[#F7F9FC] border border-gray-100 px-8 py-5 flex flex-col items-center justify-center text-center">
                    <div className="text-[10px] font-black tracking-[0.25em] text-gray-400 uppercase mb-2">Estimated Timeline</div>
                    <div className="text-[16px] font-black text-[#00223E] tracking-tight">{activeOption.timeline}</div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
                  {/* Left Column: Vision & Ideal Use */}
                  <div className="space-y-10">
                    <div>
                      <div className="text-[12px] font-black tracking-[0.25em] text-gray-400 uppercase mb-4">Ideal Scenario</div>
                      <p className="text-[18px] text-gray-700 leading-relaxed font-medium italic border-l-4 border-[#0066A6]/20 pl-6">
                        "{activeOption.idealFor}"
                      </p>
                    </div>

                    {/* what's included strip */}
                    <div className="pt-8 border-t border-gray-100">
                      <div className="text-[12px] font-black tracking-[0.25em] text-gray-400 uppercase mb-6">
                        Included Services
                      </div>
                      <div className="grid gap-3">
                        {[
                          'Option evaluation and checklist',
                          'Document preparation and reviews',
                          'Submission coordination',
                          'Authority follow-ups',
                        ].map((x) => (
                          <div
                            key={x}
                            className="flex items-center gap-3 rounded-2xl bg-gray-50/50 border border-gray-100 px-5 py-4 transition-all hover:bg-white hover:shadow-md group"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#0066A6]/10 text-[#0066A6] flex items-center justify-center shrink-0 group-hover:bg-[#0066A6] group-hover:text-white transition-colors">
                              <CheckIcon size={12} />
                            </span>
                            <span className="text-[14px] font-bold text-gray-700">{x}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Comparative Analysis */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12">
                    {/* key benefits */}
                    <div className="bg-[#F0FDF4]/30 rounded-[2rem] p-8 border border-emerald-100/50">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <CheckIcon size={16} />
                        </span>
                        <span className="text-[12px] font-black tracking-[0.25em] text-emerald-700 uppercase">Operational Benefits</span>
                      </div>
                      <div className="space-y-4">
                        {activeOption.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-4">
                            <span className="mt-1 text-emerald-500 shrink-0">
                              <CheckIcon size={14} />
                            </span>
                            <span className="text-[15px] font-bold text-gray-800 leading-tight">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* things to know */}
                    <div className="bg-[#FFFBEB]/30 rounded-[2rem] p-8 border border-amber-100/50">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                          <AlertIcon size={16} />
                        </span>
                        <span className="text-[12px] font-black tracking-[0.25em] text-amber-700 uppercase">Key Considerations</span>
                      </div>
                      <div className="space-y-4">
                        {activeOption.considerations.map((c) => (
                          <div key={c} className="flex items-start gap-4">
                            <span className="mt-1 text-amber-500 shrink-0">
                              <AlertIcon size={14} />
                            </span>
                            <span className="text-[15px] font-bold text-gray-800 leading-tight">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom note ── */}
        <FadeIn delay={0.1}>
          <p className="mt-6 text-center text-[12.5px] text-gray-400 font-medium">
            Timelines vary by activity, authority, and completeness of documentation.
            We will confirm the expected timeline after reviewing your activity, authority, and document readiness.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
