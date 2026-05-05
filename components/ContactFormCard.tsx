'use client'
import { useState } from 'react'

const languages = [
  { name: 'English', flag: '🇺🇸', code: 'EN' },
  { name: 'Arabic', flag: '🇦🇪', code: 'AR' },
  { name: 'Hindi', flag: '🇮🇳', code: 'HI' },
  { name: 'French', flag: '🇫🇷', code: 'FR' },
  { name: 'Chinese', flag: '🇨🇳', code: 'ZH' },
  { name: 'Italian', flag: '🇮🇹', code: 'IT' },
  { name: 'Spanish', flag: '🇪🇸', code: 'ES' },
  { name: 'Greek', flag: '🇬🇷', code: 'EL' },
  { name: 'Russian', flag: '🇷🇺', code: 'RU' },
]

export default function ContactFormCard() {
  const [selectedLang, setSelectedLang] = useState(languages[0])
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
      <div className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
        Contact form
      </div>

      <h2 className="mt-6 text-[26px] md:text-[32px] font-bold tracking-tight text-gray-900 leading-[1.2]">
        Request a callback
      </h2>
      <p className="mt-3 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[70ch]">
        Share your details and we will contact you with clear next steps for your business requirement.
      </p>

      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-[13px] font-semibold text-gray-700 mb-1"
              htmlFor="contactName"
            >
              Name
            </label>
            <input
              id="contactName"
              name="name"
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
              required
            />
          </div>
          <div>
            <label
              className="block text-[13px] font-semibold text-gray-700 mb-1"
              htmlFor="contactPhone"
            >
              Phone
            </label>
            <input
              id="contactPhone"
              name="phone"
              type="tel"
              placeholder="+971 50 123 4567"
              className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-[13px] font-semibold text-gray-700 mb-1"
              htmlFor="contactEmail"
            >
              Email
            </label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
              required
            />
          </div>
          
          <div className="relative">
            <label className="block text-[13px] font-semibold text-gray-700 mb-1">
              Language
            </label>
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="text-xl leading-none">{selectedLang.flag}</span>
                <span className="font-medium">{selectedLang.name}</span>
              </span>
              <svg className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 max-h-[240px] overflow-y-auto py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setSelectedLang(lang)
                      setShowDropdown(false)
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-primary/5 text-left transition-colors"
                  >
                    <span className="text-xl leading-none">{lang.flag}</span>
                    <span className={`text-[14px] ${selectedLang.code === lang.code ? 'font-bold text-primary' : 'text-gray-700 font-medium'}`}>
                      {lang.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
            {/* Hidden input for form submission */}
            <input type="hidden" name="language" value={selectedLang.name} />
          </div>
        </div>

        <div>
          <label
            className="block text-[13px] font-semibold text-gray-700 mb-1"
            htmlFor="contactMessage"
          >
            Requirement
          </label>
          <textarea
            id="contactMessage"
            name="message"
            rows={4}
            placeholder="Tell us what you need help with, the country involved, and your timeline"
            className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 rounded-full bg-primary text-white font-bold py-3.5 text-[14px] tracking-wide hover:bg-blue-800 transition-colors shadow-xl"
        >
          Submit
        </button>

        <div className="text-[12.5px] text-gray-500 leading-relaxed font-medium">
          By submitting, you agree to be contacted about your inquiry.
        </div>
      </form>
    </div>
  )
}
