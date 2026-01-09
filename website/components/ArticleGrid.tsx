const sampleArticles = [
  {
    id: 1,
    title: 'Building Your First AI Agent with OpenAI',
    category: 'AI Tutorial',
    categoryColor: 'bg-green-100 text-green-700',
    excerpt: 'Learn how to create intelligent AI agents using OpenAI\'s Agents SDK...',
    date: '2024-01-15',
    image: '/api/placeholder/400/250',
  },
  {
    id: 2,
    title: 'RAG Explained: Retrieval-Augmented Generation',
    category: 'AI Blogs',
    categoryColor: 'bg-blue-100 text-blue-700',
    excerpt: 'A comprehensive guide to RAG systems and how they enhance LLM capabilities...',
    date: '2024-01-12',
    image: '/api/placeholder/400/250',
  },
  {
    id: 3,
    title: 'Daily Unwind: Latest in LLM Development',
    category: 'Daily Unwind',
    categoryColor: 'bg-pink-100 text-pink-700',
    excerpt: 'Today\'s top stories from the world of large language models...',
    date: '2024-01-10',
    image: '/api/placeholder/400/250',
  },
  {
    id: 4,
    title: 'Multi-Agent Systems: When One Agent Isn\'t Enough',
    category: 'AI Tutorial',
    categoryColor: 'bg-green-100 text-green-700',
    excerpt: 'Discover how multiple AI agents can collaborate to solve complex problems...',
    date: '2024-01-08',
    image: '/api/placeholder/400/250',
  },
  {
    id: 5,
    title: 'Weekly Unwind: AI Agents Roundup',
    category: 'Weekly Unwind',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    excerpt: 'This week\'s highlights from the AI agents ecosystem...',
    date: '2024-01-05',
    image: '/api/placeholder/400/250',
  },
  {
    id: 6,
    title: 'Voice AI Agents: The Future of Interaction',
    category: 'AI Blogs',
    categoryColor: 'bg-blue-100 text-blue-700',
    excerpt: 'Exploring voice-enabled AI agents and their applications...',
    date: '2024-01-03',
    image: '/api/placeholder/400/250',
  },
]

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleArticles.map((article) => (
        <article
          key={article.id}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative">
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${article.categoryColor}`}>
                {article.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-purple-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{new Date(article.date).toLocaleDateString()}</span>
              <span className="text-purple-600 font-medium hover:underline">Read more →</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
