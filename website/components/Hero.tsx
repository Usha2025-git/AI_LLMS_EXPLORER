import { siteConfig } from '@/config/site'

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-white">{siteConfig.site.name.charAt(0)}</span>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
          {siteConfig.site.title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-purple-700 font-medium mb-8 max-w-3xl mx-auto">
          {siteConfig.site.subtitle}
        </p>
      </div>
    </div>
  )
}
