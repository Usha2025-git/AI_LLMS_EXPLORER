'use client'

import { useState } from 'react'

const categories = [
  { id: 'all', name: 'All Posts', color: 'bg-purple-100 text-purple-700' },
  { id: 'ai-blogs', name: 'AI Blogs', color: 'bg-blue-100 text-blue-700' },
  { id: 'ai-tutorial', name: 'AI Tutorial', color: 'bg-green-100 text-green-700' },
  { id: 'daily-unwind', name: 'Daily Unwind', color: 'bg-pink-100 text-pink-700' },
  { id: 'weekly-unwind', name: 'Weekly Unwind', color: 'bg-yellow-100 text-yellow-700' },
]

export default function CategoryTags() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeCategory === category.id
              ? category.color + ' ring-2 ring-purple-500'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}
