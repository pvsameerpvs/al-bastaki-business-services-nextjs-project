import { Rethink_Sans } from 'next/font/google'

export const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  // Next.js doesn't have fallback override metrics for every Google font.
  // Disabling fallback adjustment prevents noisy dev errors.
  adjustFontFallback: false
})
