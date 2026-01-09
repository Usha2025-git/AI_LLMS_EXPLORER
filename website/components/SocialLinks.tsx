import { siteConfig } from '@/config/site'

export default function SocialLinks() {
  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: siteConfig.social.twitter },
    { name: 'LinkedIn', icon: 'in', url: siteConfig.social.linkedin },
    { name: 'GitHub', icon: '6', url: siteConfig.social.github },
    { name: 'RSS', icon: 'RSS', url: siteConfig.social.rss },
  ]

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-sm font-medium text-gray-500 mb-3">Real-time Updates ✨</h3>
      <div className="flex space-x-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.name !== 'RSS' ? '_blank' : undefined}
            rel={link.name !== 'RSS' ? 'noopener noreferrer' : undefined}
            className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700 hover:border-purple-500 hover:text-purple-600 transition-all"
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
