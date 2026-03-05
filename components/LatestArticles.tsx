'use client'
import { motion } from 'framer-motion'
import { Rethink_Sans } from 'next/font/google'
import { useState, useRef } from 'react'

const rethink = Rethink_Sans({ subsets: ['latin'] })

const articles = [
  {
    id: 1,
    category: "Company Formation",
    date: "Sep 22, 2025",
    title: "How to choose the right jurisdiction for your UAE business",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Corporate Tax",
    date: "Sep 20, 2025",
    title: "What the latest tax changes mean for your business in 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Consulting",
    date: "Sep 10, 2025",
    title: "7 common setup mistakes new businesses make in Dubai",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Visas & PRO",
    date: "Sep 05, 2025",
    title: "The complete guide to obtaining a Golden Visa in the UAE",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Banking",
    date: "Aug 28, 2025",
    title: "How to successfully open a corporate bank account in Dubai",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  }
]

export default function LatestArticles() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const maxScroll = container.scrollWidth - container.clientWidth
    if (maxScroll <= 0) return
    
    // Calculate scroll progress from 0 to 1
    const scrollPercentage = container.scrollLeft / maxScroll
    // Map strictly to 3 points (0, 1, 2)
    const newIndex = Math.min(2, Math.max(0, Math.round(scrollPercentage * 2)))
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex)
    }
  }

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const maxScroll = container.scrollWidth - container.clientWidth
      // Map the 3 dot indices back to 0%, 50%, and 100% of the total scrollable width
      const targetScroll = (maxScroll / 2) * index
      container.scrollTo({ left: targetScroll, behavior: 'smooth' })
      setActiveIndex(index)
    }
  }

  return (
    <section className={`py-20 md:py-32 bg-[#F9FAFB] ${rethink.className}`}>
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 overflow-hidden">
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes glitch-anim-1 {
            0% { clip-path: inset(20% 0 80% 0); transform: translate(-4px, 1px); }
            20% { clip-path: inset(60% 0 10% 0); transform: translate(4px, -1px); }
            40% { clip-path: inset(40% 0 50% 0); transform: translate(-4px, 2px); }
            60% { clip-path: inset(80% 0 5% 0); transform: translate(4px, -2px); }
            80% { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 2px); }
            100% { clip-path: inset(30% 0 40% 0); transform: translate(4px, -2px); }
          }
          @keyframes glitch-anim-2 {
            0% { clip-path: inset(10% 0 60% 0); transform: translate(4px, -1px); }
            20% { clip-path: inset(30% 0 20% 0); transform: translate(-4px, 2px); }
            40% { clip-path: inset(70% 0 10% 0); transform: translate(3px, -2px); }
            60% { clip-path: inset(20% 0 50% 0); transform: translate(-3px, 1px); }
            80% { clip-path: inset(50% 0 30% 0); transform: translate(4px, -2px); }
            100% { clip-path: inset(5% 0 80% 0); transform: translate(-4px, 2px); }
          }
          .custom-glitch-parent:hover .glitch-layer-1 {
            animation: glitch-anim-1 0.2s infinite linear alternate-reverse;
            filter: sepia(100%) hue-rotate(150deg) saturate(300%) contrast(150%);
          }
          .custom-glitch-parent:hover .glitch-layer-2 {
            animation: glitch-anim-2 0.25s infinite linear alternate-reverse;
            filter: sepia(100%) hue-rotate(320deg) saturate(300%) contrast(150%);
          }
        `}} />

        {/* Header Section */}
        <div className="mb-12 md:mb-16 max-w-5xl mx-auto flex flex-col md:flex-row px-0 sm:px-4 items-start md:items-start gap-4 md:gap-12">
          <div className="md:w-[25%] pt-1 md:pt-3 text-left md:text-right">
            <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
              LATEST ARTICLES
            </span>
          </div>
          <div className="md:w-[75%] text-left">
            <h2 className="text-[28px] md:text-[36px] font-medium text-[#2d3748] leading-[1.35] tracking-tight">
              Business insights, industry updates, and expert advice — all in one place
            </h2>
          </div>
        </div>

        {/* Cards Grid / Slider */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 lg:gap-8 mb-12 snap-x snap-mandatory scroll-smooth pb-8 -mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {articles.map((article, idx) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(idx, 2) * 0.1 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)] flex-shrink-0 snap-start bg-white rounded-[1.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] group cursor-pointer hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-gray-100 custom-glitch-parent">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-10"
                />
                {/* Glitch Overlay Layers */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 mix-blend-screen pointer-events-none glitch-layer-1 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-20" 
                  style={{ backgroundImage: `url(${article.image})` }} 
                />
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 mix-blend-screen pointer-events-none glitch-layer-2 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-20" 
                  style={{ backgroundImage: `url(${article.image})` }} 
                />
              </div>
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-[13px] font-medium text-[#9CA3AF] mb-4">
                  <span className="text-[#6B7280]">{article.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 block"></span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#2d3748] leading-[1.3] tracking-tight group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots (Fixed at 3 dots) */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {[0, 1, 2].map((idx) => (
            <div 
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer transform duration-300 ${
                activeIndex === idx 
                  ? 'bg-primary scale-110' 
                  : 'bg-[#E5E7EB] hover:bg-[#D1D5DB] hover:scale-110'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
