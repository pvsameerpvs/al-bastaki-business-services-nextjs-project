'use client'
import { ReactLenis } from '@studio-freight/react-lenis'

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, syncTouch: true }}>
      {children as any}
    </ReactLenis>
  )
}
