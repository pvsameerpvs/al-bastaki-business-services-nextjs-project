import Link from 'next/link'

import FadeIn from './FadeIn'

type BlogItem = {
  id: number
  category: string
  date: string
  title: string
  image: string
}

export default function BlogSection({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: BlogItem[]
}) {
  return (
    <section className="py-20 md:py-28 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8 overflow-hidden">
        <div className="mb-12 md:mb-16 max-w-5xl mx-auto flex flex-col md:flex-row px-0 sm:px-4 items-start gap-4 md:gap-16">
          <div className="md:w-1/4 pt-1 md:pt-3 text-left">
            <span className="inline-block text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-gray-500 uppercase">
              BLOG
            </span>
          </div>
          <div className="md:w-3/4 text-left">
            <h2 className="text-[24px] md:text-[32px] font-medium text-[#2d3748] leading-[1.35] tracking-tight">
              {title}
            </h2>
            <p className="mt-3 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[78ch]">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 justify-center md:justify-end mb-8">
          <Link
            href="/blog"
            className="rounded-full px-4 py-2 text-[13px] font-semibold border border-gray-200 bg-white text-gray-700 hover:border-primary/40 hover:text-primary transition-colors"
          >
            Latest
          </Link>
          <Link
            href="/blog/business-tips"
            className="rounded-full px-4 py-2 text-[13px] font-semibold border border-gray-200 bg-white text-gray-700 hover:border-primary/40 hover:text-primary transition-colors"
          >
            Business Tips
          </Link>
          <Link
            href="/blog/news"
            className="rounded-full px-4 py-2 text-[13px] font-semibold border border-gray-200 bg-white text-gray-700 hover:border-primary/40 hover:text-primary transition-colors"
          >
            Industry News
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((article, idx) => (
            <FadeIn key={article.id} delay={Math.min(idx, 5) * 0.06}>
              <div className="bg-white rounded-[1.75rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] group cursor-pointer hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100">
                <div className="w-full aspect-[4/3] overflow-hidden relative bg-gray-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-25deg] group-hover:duration-700 group-hover:translate-x-[100%] transition-all ease-in-out pointer-events-none z-10" />
                </div>
                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[13px] font-medium text-[#9CA3AF] mb-4">
                    <span className="text-[#6B7280]">{article.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 block" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#2d3748] leading-[1.3] tracking-tight group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
