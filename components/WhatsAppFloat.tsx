import { contactInfo } from '../lib/contact'

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="currentColor"
    >
      <path d="M19.11 4.93A9.93 9.93 0 0 0 12.05 2C6.56 2 2.1 6.46 2.1 11.95c0 1.76.46 3.49 1.34 5.01L2 22l5.2-1.36a9.93 9.93 0 0 0 4.76 1.21h.01c5.49 0 9.95-4.47 9.95-9.95 0-2.66-1.03-5.15-2.81-6.97Zm-7.14 15.24h-.01a8.25 8.25 0 0 1-4.2-1.14l-.3-.18-3.08.81.82-3-.19-.31A8.27 8.27 0 0 1 3.79 12c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.85 5.79 2.4A8.13 8.13 0 0 1 20.2 12c0 4.52-3.68 8.2-8.22 8.2Zm4.5-6.16c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.2-.47-.41-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.61.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-[160] sm:bottom-6 sm:right-6">
      <a
        href={contactInfo.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with us on WhatsApp at ${contactInfo.whatsappDisplay}`}
        title={`WhatsApp ${contactInfo.whatsappDisplay}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a]"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white">
          <WhatsAppIcon />
        </span>
      </a>
    </div>
  )
}
