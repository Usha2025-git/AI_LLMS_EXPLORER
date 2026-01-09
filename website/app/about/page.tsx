export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">About Us</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Awesome LLM Apps is an open-source ecosystem dedicated to empowering high-leverage AI builders with practical, real-world applications.
        </p>
        <p className="text-gray-600 mb-6">
          We curate and develop cutting-edge LLM applications that demonstrate the power of AI Agents, RAG (Retrieval-Augmented Generation), Multi-agent Teams, MCP (Model Context Protocol), Voice Agents, and more.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          To make advanced AI technologies accessible through well-documented, open-source projects that developers can learn from, build upon, and contribute to.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          <li>Comprehensive tutorials on AI Agents and RAG systems</li>
          <li>Starter projects for beginners</li>
          <li>Advanced multi-agent applications</li>
          <li>Voice AI agent implementations</li>
          <li>MCP (Model Context Protocol) integrations</li>
          <li>Chat-with-X applications (GitHub, PDF, YouTube, etc.)</li>
        </ul>
        <p className="text-gray-600">
          Join us in building the future of AI applications!
        </p>
      </div>
    </div>
  )
}
