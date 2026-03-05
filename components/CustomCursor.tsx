'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  // Motion values track without triggering React re-renders! Highly performant.
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Outer circle uses a physics spring for that 'trailing' momentum look
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only enable on desktop/mouse devices
    const hasMouse = window.matchMedia('(pointer: fine)').matches
    if (hasMouse) {
      setIsVisible(true)
      document.documentElement.classList.add('custom-cursor-enabled')
    }

    const setPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', setPosition)
    window.addEventListener('mouseover', checkHover)

    return () => {
      window.removeEventListener('mousemove', setPosition)
      window.removeEventListener('mouseover', checkHover)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] border-white pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
          opacity: isHovering ? 0.8 : 1
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
