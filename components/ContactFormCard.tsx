'use client'

export default function ContactFormCard() {
  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
      <div className="text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
        Contact form
      </div>

      <h2 className="mt-6 text-[26px] md:text-[32px] font-bold tracking-tight text-gray-900 leading-[1.2]">
        Request a callback
      </h2>
      <p className="mt-3 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[70ch]">
        Share your details and we will contact you with a clear set of next steps.
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
              className="w-full rounded-xl bg-lightGrey border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
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
              className="w-full rounded-xl bg-lightGrey border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
              required
            />
          </div>
        </div>

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
            className="w-full rounded-xl bg-lightGrey border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors"
            required
          />
        </div>

        <div>
          <label
            className="block text-[13px] font-semibold text-gray-700 mb-1"
            htmlFor="contactMessage"
          >
            Message
          </label>
          <textarea
            id="contactMessage"
            name="message"
            rows={5}
            placeholder="Tell us what you need help with"
            className="w-full rounded-xl bg-lightGrey border border-gray-200 px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 focus:bg-white transition-colors resize-none"
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
          By submitting, you agree to be contacted regarding your inquiry.
        </div>
      </form>
    </div>
  )
}
