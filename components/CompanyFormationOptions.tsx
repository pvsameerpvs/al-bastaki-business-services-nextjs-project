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
  image: string
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
    kicker: 'Operate across the UAE',
    image: '/mainland.jpg',
    tag: 'Most flexible',
    idealFor:
      'Companies that need broad operational flexibility, local market access, or multiple client types.',
    timeline: 'Typically 7–15 working days',
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
    image: '/freezone.jpg',
    tag: 'Most popular',
    idealFor:
      'Founders who want straightforward setup packages and a clear authority-led process.',
    timeline: 'Typically 5–12 working days',
    highlights: [
      'Great for services, trading, and digital-first businesses',
      'Transparent package options: license, visa allocation, office',
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
    image: '/company-formation-3.jpg',
    tag: 'Asset holding',
    idealFor:
      'Ownership structures, asset holding, and scenarios where local operations are not required.',
    timeline: 'Typically 7–20 working days',
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
    label: 'Branch Office',
    kicker: 'Extend an existing company',
    image: '/branch.jpg',
    tag: 'For established entities',
    idealFor:
      'Foreign or local companies that want a UAE presence under the parent entity structure.',
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
              Choose the right route for your activity,<br className="hidden md:block" /> timeline, and budget
            </h2>
            <p className="mt-4 text-[14.5px] md:text-[15px] text-gray-500 leading-relaxed font-medium max-w-[68ch]">
              We compare practical trade-offs between mainland, freezone, offshore, and branch setups
              so you can pick the most compliant and cost-effective structure.
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
            <div className="rounded-[2rem] bg-white border border-gray-100 shadow-[0_24px_80px_rgba(0,0,0,0.07)] overflow-hidden">
              <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px]">

                {/* ── LEFT: details ── */}
                <div className="p-7 sm:p-8 md:p-10">

                  {/* header */}
                  <div className="flex items-start gap-4 flex-wrap mb-7">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-wide px-3 py-1 uppercase">
                          {activeOption.tag}
                        </span>
                        <span className="text-[12px] font-medium text-gray-400 tracking-wide">
                          {activeOption.kicker}
                        </span>
                      </div>
                      <h3 className="mt-3 text-[26px] sm:text-[30px] font-bold text-[#1a2744] tracking-tight leading-snug">
                        {activeOption.label}{' '}
                        <span className="text-gray-400 font-semibold">company setup</span>
                      </h3>
                    </div>

                    {/* timeline pill */}
                    <div className="shrink-0 rounded-2xl bg-[#F7F9FC] border border-gray-100 px-4 py-3">
                      <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-1">Timeline</div>
                      <div className="text-[13px] font-bold text-gray-800">{activeOption.timeline}</div>
                    </div>
                  </div>

                  {/* ideal for */}
                  <div className="rounded-2xl bg-[#F7F9FC] border border-gray-100 px-5 py-4 mb-6">
                    <div className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Ideal for</div>
                    <p className="text-[14px] text-gray-700 leading-relaxed font-medium">{activeOption.idealFor}</p>
                  </div>

                  {/* two columns: highlights + considerations */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* key benefits */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                          <CheckIcon size={13} />
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Key benefits</span>
                      </div>
                      <div className="space-y-2.5">
                        {activeOption.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-3">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                              <CheckIcon size={11} />
                            </span>
                            <span className="text-[13.5px] font-medium text-gray-700 leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* things to know */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
                          <AlertIcon size={13} />
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Things to know</span>
                      </div>
                      <div className="space-y-2.5">
                        {activeOption.considerations.map((c) => (
                          <div key={c} className="flex items-start gap-3">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                              <AlertIcon size={11} />
                            </span>
                            <span className="text-[13.5px] font-medium text-gray-700 leading-snug">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* what's included strip */}
                  <div className="mt-7 pt-6 border-t border-gray-100">
                    <div className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
                      Included with Al Bastaki
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        'Option evaluation & checklist',
                        'Document preparation & reviews',
                        'Submission coordination & follow-ups',
                        'Approval tracking & final handover',
                      ].map((x) => (
                        <div
                          key={x}
                          className="flex items-center gap-2.5 rounded-xl bg-[#F7F9FC] border border-gray-100 px-4 py-2.5"
                        >
                          <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <CheckIcon size={10} />
                          </span>
                          <span className="text-[13px] font-semibold text-gray-700">{x}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── RIGHT: image panel ── */}
                <div className="relative hidden lg:block bg-[#00223E] min-h-[460px]">
                  <Image
                    src={activeOption.image}
                    alt={`${activeOption.label} company formation`}
                    fill
                    className="object-cover opacity-70 mix-blend-luminosity"
                    sizes="480px"
                    priority
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00223E]/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001530]/80 via-transparent to-transparent" />

                  {/* overlay badge */}
                  <div className="absolute bottom-8 left-7 right-7">
                    <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 px-5 py-4">
                      <div className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase mb-1.5">
                        {activeOption.label}
                      </div>
                      <div className="text-[17px] font-bold text-white leading-snug">
                        {activeOption.kicker}
                      </div>
                      <div className="mt-2 text-[12.5px] text-white/70 font-medium">
                        {activeOption.timeline}
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
            We will confirm the expected timeline during the discovery call.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
