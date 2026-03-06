'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import FadeIn from './FadeIn'

type FocusTab = {
  key: string
  label: string
  kicker?: string
  description: string
  bullets: string[]
  meta?: { label: string; value: string }[]
}

type ServiceFocusTabsProps = {
  eyebrow?: string
  title: string
  description: string
  tabs: FocusTab[]
  sideCards?: { title: string; text: string }[]
}

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

export default function ServiceFocusTabs({
  eyebrow = 'Focus areas',
  title,
  description,
  tabs,
  sideCards,
}: ServiceFocusTabsProps) {
  const defaultKey = tabs[0]?.key
  const [active, setActive] = useState<string>(defaultKey)

  const activeTab = useMemo(
    () => tabs.find((t) => t.key === active) ?? tabs[0],
    [active, tabs]
  )

  if (!tabs.length) return null

  return (
    <section className="py-20 md:py-28 bg-[#F9FAFB] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -right-24 h-[340px] w-[340px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-[380px] w-[380px] rounded-full bg-[#00223E]/10 blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 relative">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
          <FadeIn>
            <div>
              <div className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                {eyebrow}
              </div>
              <h2 className="mt-5 text-[28px] md:text-[36px] lg:text-[42px] font-medium text-[#2d3748] leading-[1.25] tracking-tight">
                {title}
              </h2>
              <p className="mt-5 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[72ch]">
                {description}
              </p>

              {sideCards?.length ? (
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {sideCards.slice(0, 4).map((item) => (
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
              ) : null}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-[2rem] bg-white border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center justify-between gap-6 flex-wrap">
                  <div>
                    <div className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                      Explore
                    </div>
                    <div className="mt-3 text-[16px] md:text-[18px] font-bold text-gray-900 tracking-tight">
                      Tap a tab to view details
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-2 rounded-full bg-[#F3F6FA] border border-gray-100 p-1 overflow-x-auto max-w-full"
                    role="tablist"
                    aria-label="Service focus tabs"
                  >
                    {tabs.map((t) => {
                      const isActive = t.key === active
                      return (
                        <button
                          key={t.key}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setActive(t.key)}
                          className={
                            'shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-all ' +
                            (isActive
                              ? 'bg-primary text-white shadow-[0_10px_30px_rgba(0,102,166,0.25)]'
                              : 'text-gray-700 hover:text-gray-900 hover:bg-white')
                          }
                        >
                          {t.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <motion.div
                  key={activeTab.key}
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
                      <div className="flex items-start justify-between gap-6 flex-wrap">
                        <div>
                          {activeTab.kicker ? (
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-2 text-[12px] font-semibold tracking-wide text-white/90 backdrop-blur">
                              {activeTab.kicker}
                            </div>
                          ) : null}
                          <h3 className="mt-5 text-[24px] md:text-[28px] font-bold tracking-tight leading-[1.15]">
                            {activeTab.label}
                          </h3>
                          <p className="mt-4 text-[14.5px] text-white/85 leading-relaxed font-medium max-w-[62ch]">
                            {activeTab.description}
                          </p>
                        </div>

                        {activeTab.meta?.length ? (
                          <div className="shrink-0 rounded-2xl bg-white/10 border border-white/15 px-4 py-3">
                            <div className="grid gap-3">
                              {activeTab.meta.slice(0, 3).map((m) => (
                                <div key={m.label} className="min-w-[14rem]">
                                  <div className="text-[11px] font-bold tracking-[0.25em] text-white/65 uppercase">
                                    {m.label}
                                  </div>
                                  <div className="mt-1 text-[13.5px] font-semibold text-white/90 leading-snug">
                                    {m.value}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        {activeTab.bullets.slice(0, 6).map((b) => (
                          <div
                            key={b}
                            className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 flex items-start gap-3"
                          >
                            <span className="mt-[2px] w-9 h-9 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white/90">
                              <CheckIcon />
                            </span>
                            <div className="text-[13.5px] font-semibold text-white/90 leading-snug">
                              {b}
                            </div>
                          </div>
                        ))}
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
