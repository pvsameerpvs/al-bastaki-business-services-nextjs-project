
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SmoothScroller from '../components/SmoothScroller'
import CustomCursor from '../components/CustomCursor'
import { rethinkSans } from './fonts'

export const metadata = {
  title: 'Al Bastaki Business Services LLC',
  description: 'Business Setup Consultants Dubai'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rethinkSans.className}>
        <CustomCursor />
        <SmoothScroller>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  )
}
