export type ArticleCategory = 'Business Tips' | 'Industry News'

export type Article = {
  id: number
  category: ArticleCategory
  date: string
  title: string
  image: string
}

export const articles: Article[] = [
  {
    id: 1,
    category: 'Business Tips',
    date: 'Sep 22, 2025',
    title: 'How to choose the right jurisdiction for your UAE business',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Industry News',
    date: 'Sep 20, 2025',
    title: 'What the latest tax changes mean for your business in 2025',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Business Tips',
    date: 'Sep 10, 2025',
    title: '7 common setup mistakes new businesses make in Dubai',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Industry News',
    date: 'Sep 05, 2025',
    title: 'The complete guide to obtaining a Golden Visa in the UAE',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Business Tips',
    date: 'Aug 28, 2025',
    title: 'How to successfully open a corporate bank account in Dubai',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  },
]
