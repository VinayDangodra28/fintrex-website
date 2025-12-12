import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Linkedin, 
  Twitter,
  ChevronRight,
  Tag
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogBySlug, getRecentBlogs, BlogPost } from '../content/blogs';

// Custom blog components registry - add your custom components here
const CUSTOM_BLOG_COMPONENTS: Record<string, React.FC<{ post: BlogPost }>> = {
  // Example: 'interactive-gst-calculator': InteractiveGSTCalculator,
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogBySlug(slug || '');
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const recentPosts = getRecentBlogs(3).filter(p => p.id !== post.id);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Check if this post uses a custom component
  const CustomComponent = post.customComponent ? CUSTOM_BLOG_COMPONENTS[post.customComponent] : null;

  const shareUrl = `https://fintrex.ai/blog/${post.slug}`;
  const shareText = `${post.title} - Fintrex AI`;

  const handleShare = async (platform: 'linkedin' | 'twitter' | 'copy') => {
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(shareUrl);
        // Could add toast notification here
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.seo.metaTitle || post.title}</title>
        <meta name="description" content={post.seo.metaDescription || post.excerpt} />
        <meta name="keywords" content={post.seo.keywords?.join(', ') || post.tags.join(', ')} />
        <link rel="canonical" href={`https://fintrex.ai/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.seo.metaTitle || post.title} />
        <meta property="og:description" content={post.seo.metaDescription || post.excerpt} />
        <meta property="og:image" content={post.seo.ogImage || post.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://fintrex.ai/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo.metaTitle || post.title} />
        <meta name="twitter:description" content={post.seo.metaDescription || post.excerpt} />
        <meta name="twitter:image" content={post.seo.ogImage || post.coverImage} />

        {/* Schema.org Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.coverImage,
            "author": {
              "@type": "Person",
              "name": post.author.name,
              "jobTitle": post.author.role
            },
            "publisher": {
              "@type": "Organization",
              "name": "Fintrex AI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fintrex.ai/fintrex-logo.png"
              }
            },
            "datePublished": post.publishedAt,
            "dateModified": post.updatedAt || post.publishedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://fintrex.ai/blog/${post.slug}`
            },
            "keywords": post.tags.join(", ")
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-black pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-500 mb-8"
          >
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-brand transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400 truncate max-w-[200px]">{post.title}</span>
          </motion.nav>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-brand transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-gray-400 text-lg mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full bg-neutral-800"
                />
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-gray-500">{post.author.role}</p>
                </div>
              </div>
              
              <span className="flex items-center gap-1.5">
                <Calendar size={16} />
                {formattedDate}
              </span>
              
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                {post.readTime} min read
              </span>
            </div>
          </motion.header>

          {/* Cover Image */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.figure>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            {CustomComponent ? (
              <CustomComponent post={post} />
            ) : (
              <div className="prose prose-invert prose-lg max-w-none
                prose-headings:font-heading prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-white
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-100
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-brand prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-ul:text-gray-300 prose-ol:text-gray-300
                prose-li:marker:text-brand
                prose-blockquote:border-l-brand prose-blockquote:bg-neutral-900/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                prose-code:text-brand prose-code:bg-neutral-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-white/10
                prose-table:border-collapse
                prose-th:bg-neutral-900 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:border prose-th:border-white/10
                prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-white/10
                prose-img:rounded-xl
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content || ''}
                </ReactMarkdown>
              </div>
            )}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            <Tag size={16} className="text-gray-500" />
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 py-8 border-y border-white/10"
          >
            <span className="text-gray-400 flex items-center gap-2">
              <Share2 size={18} />
              Share this article:
            </span>
            <button
              onClick={() => handleShare('linkedin')}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={18} />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all"
              aria-label="Share on Twitter"
            >
              <Twitter size={18} />
            </button>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-neutral-900/50 border border-white/5 rounded-2xl p-6 mt-8"
          >
            <div className="flex items-start gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full bg-neutral-800"
              />
              <div>
                <h3 className="font-heading font-bold text-white text-lg">{post.author.name}</h3>
                <p className="text-gray-500 mb-2">{post.author.role}</p>
                <div className="flex gap-3">
                  {post.author.linkedin && (
                    <a 
                      href={post.author.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {post.author.twitter && (
                    <a 
                      href={post.author.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </article>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <section className="container mx-auto px-4 max-w-7xl mt-20">
            <h2 className="font-heading text-2xl font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand/30 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-brand text-sm">{relatedPost.category}</span>
                    <h3 className="font-heading font-bold text-white text-lg mt-2 group-hover:text-brand transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">{relatedPost.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default BlogPostPage;
