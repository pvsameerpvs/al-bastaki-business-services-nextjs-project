'use client'

import { useState } from 'react'
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
      width="14"
      height="14"
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

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
      }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function TabContent({ t }: { t: FocusTab }) {
  return (
    <div className="h-full flex flex-col gap-5">
      {/* Description */}
      <p className="text-[13.5px] md:text-[14.5px] text-white/80 leading-relaxed font-medium">
        {t.description}
      </p>

      {/* Meta panel */}
      {t.meta?.length ? (
        <div className="rounded-2xl bg-white/10 border border-white/15 px-4 py-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {t.meta.slice(0, 3).map((m) => (
              <div key={m.label}>
                <div className="text-[10px] font-bold tracking-[0.22em] text-white/55 uppercase mb-1">
                  {m.label}
                </div>
                <div className="text-[13px] md:text-[13.5px] font-semibold text-white/90 leading-snug">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Bullets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {t.bullets.slice(0, 6).map((b) => (
          <div
            key={b}
            className="rounded-xl bg-white/10 border border-white/15 px-3.5 py-3 flex items-start gap-2.5"
          >
            <span className="mt-[2px] w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white/90">
              <CheckIcon />
            </span>
            <div className="text-[12.5px] md:text-[13px] font-semibold text-white/90 leading-snug">
              {b}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-auto pt-2">
        <div className="h-1.5 rounded-full bg-gradient-to-r from-primary/70 via-primary/25 to-transparent" />
      </div>
    </div>
  )
}

export default function ServiceFocusTabs({
  eyebrow = 'Focus areas',
  title,
  description,
  tabs,
  sideCards,
}: ServiceFocusTabsProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  if (!tabs.length) return null

  const stepFor = (idx: number) => String(idx + 1).padStart(2, '0')
  const active = tabs[activeTab]

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -right-24 h-[340px] w-[340px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-[380px] w-[380px] rounded-full bg-[#00223E]/10 blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-8 relative">

        {/* ── HEADER ── */}
        <FadeIn>
          <div className="max-w-[680px] mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.22em] text-gray-500 uppercase">
                {eyebrow}
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-bold text-[#1a2744] leading-[1.2] tracking-tight">
              {title}
            </h2>
            <p className="mt-4 text-[14px] md:text-[15.5px] text-gray-500 leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </FadeIn>

        {/* ── SIDE CARDS (if any) ── */}
        {sideCards?.length ? (
          <FadeIn delay={0.05}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 md:mb-14">
              {sideCards.slice(0, 4).map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white border border-gray-100 px-4 py-4 shadow-sm"
                >
                  <div className="text-[13.5px] font-bold text-gray-900 tracking-tight leading-snug">
                    {item.title}
                  </div>
                  <div className="mt-1.5 text-[12.5px] font-medium text-gray-500 leading-relaxed">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        ) : null}

        {/* ════════════════════════════════════════════
            DESKTOP LAYOUT  (md and up)
            Left: vertical tab list | Right: content panel
        ════════════════════════════════════════════ */}
        <FadeIn delay={0.1}>
          <div className="hidden md:grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] gap-6 items-start">

            {/* Tab list */}
            <div className="rounded-[1.5rem] bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <span className="text-[11px] font-bold tracking-[0.22em] text-gray-400 uppercase">
                  Focus Areas
                </span>
              </div>
              <div className="p-2">
                {tabs.map((t, idx) => {
                  const isActive = activeTab === idx
                  return (
                    <button
                      key={t.key}
                      onClick={() => setActiveTab(idx)}
                      className={`
                        w-full text-left rounded-xl px-4 py-3.5 mb-1 last:mb-0 transition-all duration-200
                        ${isActive
                          ? 'bg-[#00223E] text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-bold
                            ${isActive ? 'bg-white/15 text-white' : 'bg-gray-100 text-gray-500'}
                          `}
                        >
                          {stepFor(idx)}
                        </div>
                        <span className={`text-[13.5px] font-semibold leading-snug ${isActive ? 'text-white' : ''}`}>
                          {t.label}
                        </span>
                      </div>
                      {t.kicker && (
                        <div className={`mt-1.5 ml-10 text-[11.5px] font-medium ${isActive ? 'text-white/65' : 'text-gray-400'}`}>
                          {t.kicker}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Content panel */}
            <div
              key={active.key}
              className="rounded-[1.75rem] bg-[#00223E] text-white overflow-hidden relative shadow-[0_24px_60px_rgba(0,0,0,0.12)] border border-white/10"
              style={{ animation: 'fadeSlideIn 0.3s ease' }}
            >
              {/* blob accents */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 h-[220px] w-[220px] rounded-full bg-primary/25 blur-3xl" />
                <div className="absolute -bottom-24 -left-20 h-[260px] w-[260px] rounded-full bg-white/8 blur-3xl" />
              </div>

              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Card header */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-[11.5px] font-bold tracking-wide text-white/80 shrink-0">
                    Focus {stepFor(activeTab)}
                  </div>
                  {active.kicker && (
                    <div className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-[11.5px] font-bold tracking-wide text-white/80">
                      {active.kicker}
                    </div>
                  )}
                </div>

                <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-tight leading-[1.2] mb-2">
                  {active.label}
                </h3>

                <TabContent t={active} />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ════════════════════════════════════════════
            MOBILE LAYOUT (below md)
            Accordion — each tab is a collapsible card
        ════════════════════════════════════════════ */}
        <FadeIn delay={0.1}>
          <div className="md:hidden space-y-3">
            {tabs.map((t, idx) => {
              const isOpen = openAccordion === idx
              return (
                <div
                  key={t.key}
                  className={`
                    rounded-2xl overflow-hidden border transition-all duration-300
                    ${isOpen
                      ? 'border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.14)]'
                      : 'border-gray-200 bg-white shadow-sm'}
                  `}
                >
                  {/* Accordion trigger */}
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : idx)}
                    className={`
                      w-full flex items-center justify-between gap-3 px-4 py-4 transition-colors
                      ${isOpen ? 'bg-[#00223E] text-white' : 'bg-white text-gray-800'}
                    `}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 text-left min-w-0">
                      <div
                        className={`
                          w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-[11px] font-bold
                          ${isOpen ? 'bg-white/15 text-white' : 'bg-gray-100 text-gray-500'}
                        `}
                      >
                        {stepFor(idx)}
                      </div>
                      <div className="min-w-0">
                        <div className={`text-[14px] font-bold leading-snug truncate ${isOpen ? 'text-white' : 'text-gray-900'}`}>
                          {t.label}
                        </div>
                        {t.kicker && (
                          <div className={`text-[11.5px] font-medium mt-0.5 ${isOpen ? 'text-white/65' : 'text-gray-400'}`}>
                            {t.kicker}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className={`shrink-0 ${isOpen ? 'text-white/80' : 'text-gray-400'}`}>
                      <ChevronDownIcon open={isOpen} />
                    </span>
                  </button>

                  {/* Accordion body */}
                  <div
                    style={{
                      maxHeight: isOpen ? '9999px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div className="bg-[#00223E] text-white relative overflow-hidden">
                      {/* blobs */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute -top-16 -right-16 h-[180px] w-[180px] rounded-full bg-primary/20 blur-3xl" />
                        <div className="absolute bottom-0 -left-12 h-[160px] w-[160px] rounded-full bg-white/8 blur-3xl" />
                      </div>

                      <div className="relative px-4 pt-4 pb-5">
                        <TabContent t={t} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>

      {/* fade-slide-in keyframe */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
