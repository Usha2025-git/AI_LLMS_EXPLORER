import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <div className="h-px bg-gray-200 w-full mb-6"></div>
        <p className="text-xl text-gray-600 mb-8">This page could not be found.</p>
        <Link 
          href="/"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
