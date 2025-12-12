import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  Search,
  ChevronRight
} from 'lucide-react';
import { 
  BLOG_POSTS, 
  getAllCategories, 
  getFeaturedBlogs,
  BlogPost,
  BlogCategory 
} from '../content/blogs';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const BlogCard: React.FC<{ post: BlogPost; featured?: boolean }> = ({ post, featured = false }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.article
      variants={fadeInUp}
      className={`group bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand/30 transition-all duration-300 ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''
      }`}
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className={`relative overflow-hidden ${featured ? 'lg:h-full' : 'h-48'}`}>
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1 bg-brand/90 text-black text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime} min read
          </span>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h3 className={`font-heading font-bold text-white group-hover:text-brand transition-colors mb-3 ${
            featured ? 'text-2xl' : 'text-lg'
          }`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full bg-neutral-800"
              loading="lazy"
            />
            <span className="text-sm text-gray-400">{post.author.name}</span>
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="text-brand text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const CategoryFilter: React.FC<{
  categories: BlogCategory[];
  selected: BlogCategory | null;
  onSelect: (category: BlogCategory | null) => void;
}> = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selected === null
            ? 'bg-brand text-black'
            : 'bg-white/5 text-gray-400 hover:bg-white/10'
        }`}
      >
        All Posts
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selected === category
              ? 'bg-brand text-black'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const BlogList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<BlogCategory | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const categories = getAllCategories();
  const featuredPosts = getFeaturedBlogs();
  
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog | Fintrex AI - Accounting Automation Insights</title>
        <meta 
          name="description" 
          content="Explore insights on AI accounting automation, GST compliance, and best practices for Chartered Accountants. Stay updated with Fintrex blog." 
        />
        <meta name="keywords" content="accounting blog, CA insights, GST automation, AI accounting, Fintrex blog" />
        <link rel="canonical" href="https://fintrex.ai/blog" />
        <meta property="og:title" content="Blog | Fintrex AI" />
        <meta property="og:description" content="Insights on AI accounting automation for Chartered Accountants in India." />
        <meta property="og:type" content="blog" />
      </Helmet>

      <main className="min-h-screen bg-black pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 max-w-7xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-brand transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">Blog</span>
            </nav>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Insights & <span className="text-brand">Resources</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Explore the latest in AI accounting automation, compliance best practices, 
              and success stories from CA professionals across India.
            </p>
          </motion.div>
        </section>

        {/* Search Bar */}
        <section className="container mx-auto px-4 max-w-7xl mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-neutral-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand/50 transition-colors"
            />
          </div>
        </section>

        {/* Category Filter */}
        <section className="container mx-auto px-4 max-w-7xl">
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </section>

        {/* Featured Posts */}
        {!selectedCategory && !searchQuery && featuredPosts.length > 0 && (
          <section className="container mx-auto px-4 max-w-7xl mb-12">
            <h2 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Tag className="text-brand" size={24} />
              Featured Articles
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featuredPosts.slice(0, 1).map(post => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </motion.div>
          </section>
        )}

        {/* All Posts */}
        <section className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">
            {selectedCategory ? selectedCategory : 'All Articles'}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="mt-4 text-brand hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="container mx-auto px-4 max-w-7xl mt-20">
          <div className="bg-gradient-to-r from-brand/10 to-emerald-500/10 border border-brand/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Get the latest insights on AI accounting automation delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand text-black font-semibold rounded-xl hover:bg-brand/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogList;
