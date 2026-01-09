import { siteConfig } from '@/config/site'

export default function AuthorInfo() {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-sm font-medium text-gray-500 mb-2">Written by</h3>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
        <div>
          <p className="font-semibold text-gray-900">{siteConfig.author.name}</p>
          <p className="text-sm text-gray-600">+{siteConfig.author.contributors - 1} contributor{siteConfig.author.contributors > 2 ? 's' : ''}</p>
        </div>
      </div>
    </div>
  )
}
