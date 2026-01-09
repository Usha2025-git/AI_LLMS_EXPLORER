import { siteConfig } from '@/config/site'

export default function SponsorPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Sponsor Us</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Support the {siteConfig.site.name} ecosystem and help us continue creating amazing open-source AI applications.
        </p>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Why Sponsor?</h2>
          <ul className="list-disc list-inside space-y-2 text-purple-800">
            <li>Help us maintain and improve the open-source ecosystem</li>
            <li>Support the creation of new tutorials and examples</li>
            <li>Enable us to dedicate more time to the project</li>
            <li>Get your logo featured on our website and README</li>
            <li>Early access to new features and tutorials</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Sponsorship Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Bronze</h3>
            <p className="text-3xl font-bold text-purple-600 mb-4">$25/mo</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Name in sponsors list</li>
              <li>✓ Recognition in README</li>
            </ul>
          </div>
          <div className="border-2 border-purple-500 rounded-lg p-6 bg-purple-50">
            <h3 className="text-xl font-bold mb-2">Silver</h3>
            <p className="text-3xl font-bold text-purple-600 mb-4">$50/mo</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Everything in Bronze</li>
              <li>✓ Logo on website</li>
              <li>✓ Featured in blog posts</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Gold</h3>
            <p className="text-3xl font-bold text-purple-600 mb-4">$100/mo</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Everything in Silver</li>
              <li>✓ Large logo placement</li>
              <li>✓ Custom content promotion</li>
              <li>✓ Priority support</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Sponsor?</h2>
          <p className="text-gray-600 mb-4">
            Contact us at <a href={`mailto:${siteConfig.sponsors.email}`} className="text-purple-600 hover:underline">{siteConfig.sponsors.email}</a> or visit our GitHub Sponsors page.
          </p>
          <a
            href={siteConfig.sponsors.githubSponsors}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Become a Sponsor →
          </a>
        </div>
      </div>
    </div>
  )
}
