import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">{siteConfig.site.name}</h3>
            <p className="text-gray-400 text-sm">
              {siteConfig.site.subtitle}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href={siteConfig.social.githubRepo} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/category/ai-blogs" className="hover:text-white">AI Blogs</a></li>
              <li><a href="/category/ai-tutorial" className="hover:text-white">AI Tutorial</a></li>
              <li><a href="/category/daily-unwind" className="hover:text-white">Daily Unwind</a></li>
              <li><a href="/category/weekly-unwind" className="hover:text-white">Weekly Unwind</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
