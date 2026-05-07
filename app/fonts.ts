import { Rethink_Sans, Outfit } from 'next/font/google'

export const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false
})

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
