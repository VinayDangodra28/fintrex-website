import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Users, 
  Building2,
  Quote,
  ChevronRight,
  Share2,
  Linkedin,
  Twitter,
  TrendingUp,
  DollarSign,
  Target,
  Timer,
  Award,
  CheckCircle
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getCaseStudyBySlug, getRecentCaseStudies, CaseStudyResult } from '../content/case-studies';

const getResultIcon = (icon: CaseStudyResult['icon']) => {
  switch (icon) {
    case 'time':
      return <Timer size={28} className="text-brand" />;
    case 'money':
      return <DollarSign size={28} className="text-brand" />;
    case 'clients':
      return <Users size={28} className="text-brand" />;
    case 'accuracy':
      return <Target size={28} className="text-brand" />;
    case 'growth':
      return <TrendingUp size={28} className="text-brand" />;
    default:
      return <Award size={28} className="text-brand" />;
  }
};

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudyBySlug(slug || '');
  
  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const recentStudies = getRecentCaseStudies(3).filter(s => s.id !== study.id);
  const formattedDate = new Date(study.publishedAt).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const shareUrl = `https://fintrex.ai/case-studies/${study.slug}`;
  const shareText = `${study.title} - Fintrex AI Case Study`;

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
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>{study.seo?.metaTitle || study.title}</title>
        <meta name="description" content={study.seo?.metaDescription || study.excerpt} />
        <meta name="keywords" content={study.seo?.keywords?.join(', ') || study.tags.join(', ')} />
        <link rel="canonical" href={`https://fintrex.ai/case-studies/${study.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={study.seo?.metaTitle || study.title} />
        <meta property="og:description" content={study.seo?.metaDescription || study.excerpt} />
        <meta property="og:image" content={study.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://fintrex.ai/case-studies/${study.slug}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={study.seo?.metaTitle || study.title} />
        <meta name="twitter:description" content={study.seo?.metaDescription || study.excerpt} />
        <meta name="twitter:image" content={study.coverImage} />

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": study.title,
            "description": study.excerpt,
            "image": study.coverImage,
            "author": {
              "@type": "Organization",
              "name": "Fintrex AI"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Fintrex AI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fintrex.ai/fintrex-logo.png"
              }
            },
            "datePublished": study.publishedAt,
            "about": {
              "@type": "Thing",
              "name": study.clientName
            }
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
            <Link to="/case-studies" className="hover:text-brand transition-colors">Case Studies</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400 truncate max-w-[200px]">{study.clientName}</span>
          </motion.nav>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-brand transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Case Studies
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
              {study.clientType}
            </span>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {study.title}
            </h1>
            
            <p className="text-xl text-gray-400 mb-6">
              {study.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Building2 size={16} className="text-brand" />
                {study.clientName}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {study.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {study.timeline}
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
              src={study.coverImage}
              alt={study.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.figure>

          {/* Results Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Key Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.results.map((result, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900/50 border border-white/5 rounded-xl p-6 text-center"
                >
                  <div className="flex justify-center mb-3">
                    {getResultIcon(result.icon)}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                  <div className="text-sm text-gray-500">{result.metric}</div>
                  {result.description && (
                    <div className="text-xs text-gray-600 mt-1">{result.description}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Content Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-12"
          >
            {/* Challenge */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                  1
                </span>
                The Challenge
              </h2>
              <div className="prose prose-invert prose-lg max-w-none
                prose-headings:font-heading prose-headings:font-bold
                prose-h3:text-lg prose-h3:text-gray-100
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-strong:text-white
                prose-ul:text-gray-300 prose-li:marker:text-red-400
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {study.challenge}
                </ReactMarkdown>
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  2
                </span>
                The Solution
              </h2>
              <div className="prose prose-invert prose-lg max-w-none
                prose-headings:font-heading prose-headings:font-bold
                prose-h3:text-lg prose-h3:text-gray-100
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-strong:text-white
                prose-ul:text-gray-300 prose-li:marker:text-brand
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {study.solution}
                </ReactMarkdown>
              </div>
            </section>

            {/* Implementation */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  3
                </span>
                Implementation
              </h2>
              <div className="prose prose-invert prose-lg max-w-none
                prose-headings:font-heading prose-headings:font-bold
                prose-h3:text-lg prose-h3:text-gray-100
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-strong:text-white
                prose-ul:text-gray-300 prose-li:marker:text-blue-400
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {study.implementation}
                </ReactMarkdown>
              </div>
            </section>
          </motion.div>

          {/* Testimonial */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="my-12"
          >
            <div className="relative bg-gradient-to-r from-brand/10 to-emerald-500/10 border border-brand/20 rounded-2xl p-8 md:p-10">
              <Quote className="absolute top-6 left-6 text-brand/30" size={48} />
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 pl-8">
                  "{study.testimonial.quote}"
                </p>
                <footer className="flex items-center gap-4 pl-8">
                  {study.testimonial.avatar && (
                    <img
                      src={study.testimonial.avatar}
                      alt={study.testimonial.author}
                      className="w-14 h-14 rounded-full bg-neutral-800"
                    />
                  )}
                  <div>
                    <cite className="not-italic text-white font-semibold">{study.testimonial.author}</cite>
                    <p className="text-gray-500 text-sm">{study.testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.section>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {study.tags.map(tag => (
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
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4 py-8 border-y border-white/10"
          >
            <span className="text-gray-400 flex items-center gap-2">
              <Share2 size={18} />
              Share this story:
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
        </article>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl mt-12">
          <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Want Similar Results?
            </h3>
            <p className="text-gray-400 mb-6">
              See how Fintrex can transform your practice with a free 14-day trial.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand text-black font-semibold rounded-xl hover:bg-brand/90 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

        {/* Related Case Studies */}
        {recentStudies.length > 0 && (
          <section className="container mx-auto px-4 max-w-7xl mt-20">
            <h2 className="font-heading text-2xl font-bold text-white mb-8">
              More Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentStudies.map(relatedStudy => (
                <Link
                  key={relatedStudy.id}
                  to={`/case-studies/${relatedStudy.slug}`}
                  className="group bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand/30 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedStudy.coverImage}
                      alt={relatedStudy.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-brand/90 text-black text-xs font-medium rounded-full">
                      {relatedStudy.clientType}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-brand transition-colors">
                      {relatedStudy.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{relatedStudy.clientName}</p>
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

export default CaseStudyPage;
