import Link from 'next/link'

import PageHero from '../../components/PageHero'
import PageCTA from '../../components/PageCTA'
import FadeIn from '../../components/FadeIn'

const items = [
  {
    title: 'About Us',
    description:
      'Our story, milestones, and what we stand for as a business setup and consulting partner.',
    href: '/about',
  },
  {
    title: 'Our Team',
    description:
      'Meet the functions behind our delivery: setup, PRO, accounting, consultancy, and IT support.',
    href: '/team',
  },
  {
    title: 'Why Choose Us',
    description:
      'A clear view of our working style: expertise, client-first process, and proven outcomes.',
    href: '/why-choose-us',
  },
  {
    title: 'Testimonials',
    description:
      'What clients value most when working with Al Bastaki Business Services.',
    href: '/testimonials',
  },
]

export default function PagesIndex() {
  return (
    <main>
      <PageHero
        badge="Company profile"
        title="Pages"
        subtitle="Explore our company profile, team, and service approach. Every page follows the same design language as the homepage."
        image="/hero-main2.jpg"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {items.map((item, idx) => (
              <FadeIn key={item.href} delay={idx * 0.08}>
                <Link
                  href={item.href}
                  className="group block bg-[#F9FAFB] rounded-[1.75rem] p-8 md:p-10 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-gray-900">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-[14.5px] md:text-[15.5px] text-gray-600 leading-relaxed font-medium max-w-[56ch]">
                        {item.description}
                      </p>
                    </div>

                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Need help deciding where to start?"
        description="Share your goals and we will recommend the most practical path for your setup and ongoing support."
      />
    </main>
  )
}
