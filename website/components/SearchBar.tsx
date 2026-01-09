'use client'

import { useState } from 'react'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-3 pl-12 pr-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
      />
      <button
        type="submit"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  )
}
