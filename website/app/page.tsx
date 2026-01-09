import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CategoryTags from '@/components/CategoryTags'
import ArticleGrid from '@/components/ArticleGrid'
import AuthorInfo from '@/components/AuthorInfo'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Author and Social Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <AuthorInfo />
          <SocialLinks />
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>
        
        {/* Category Tags */}
        <div className="mb-12">
          <CategoryTags />
        </div>
        
        {/* Article Grid */}
        <ArticleGrid />
      </div>
    </div>
  )
}
