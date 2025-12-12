import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowRight, 
  Users, 
  MapPin,
  Clock,
  TrendingUp,
  DollarSign,
  Target,
  Timer,
  Award
} from 'lucide-react';
import { CASE_STUDIES, getFeaturedCaseStudies, CaseStudy, CaseStudyResult } from '../content/case-studies';

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

const getResultIcon = (icon: CaseStudyResult['icon']) => {
  switch (icon) {
    case 'time':
      return <Timer size={24} />;
    case 'money':
      return <DollarSign size={24} />;
    case 'clients':
      return <Users size={24} />;
    case 'accuracy':
      return <Target size={24} />;
    case 'growth':
      return <TrendingUp size={24} />;
    default:
      return <Award size={24} />;
  }
};

const CaseStudyCard: React.FC<{ study: CaseStudy; featured?: boolean }> = ({ study, featured = false }) => {
  return (
    <motion.article
      variants={fadeInUp}
      className={`group bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand/30 transition-all duration-300 ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''
      }`}
    >
      <Link to={`/case-studies/${study.slug}`} className="block">
        <div className={`relative overflow-hidden ${featured ? 'lg:h-full' : 'h-56'}`}>
          <img
            src={study.coverImage}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1 bg-brand/90 text-black text-xs font-medium rounded-full">
            {study.clientType}
          </span>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {study.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {study.timeline}
          </span>
        </div>
        
        <Link to={`/case-studies/${study.slug}`}>
          <h3 className={`font-heading font-bold text-white group-hover:text-brand transition-colors mb-2 ${
            featured ? 'text-2xl' : 'text-lg'
          }`}>
            {study.title}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-4">
          {study.subtitle}
        </p>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {study.excerpt}
        </p>

        {/* Key Results */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {study.results.slice(0, 2).map((result, idx) => (
            <div key={idx} className="bg-black/30 rounded-lg p-3 text-center">
              <div className="text-brand font-bold text-xl">{result.value}</div>
              <div className="text-gray-500 text-xs">{result.metric}</div>
            </div>
          ))}
        </div>
        
        <Link
          to={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-2 text-brand text-sm font-medium hover:gap-3 transition-all"
        >
          Read Full Story <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
};

const CaseStudiesList: React.FC = () => {
  const [filterType, setFilterType] = React.useState<CaseStudy['clientType'] | null>(null);
  
  const featuredStudies = getFeaturedCaseStudies();
  const clientTypes: CaseStudy['clientType'][] = ['Individual CA', 'CA Firm', 'Enterprise'];
  
  const filteredStudies = filterType 
    ? CASE_STUDIES.filter(s => s.clientType === filterType)
    : CASE_STUDIES;

  return (
    <>
      <Helmet>
        <title>Case Studies | Fintrex AI - Success Stories</title>
        <meta 
          name="description" 
          content="Read real success stories from CAs and accounting firms using Fintrex AI. Learn how they scaled, automated GST filing, and transformed their practice." 
        />
        <meta name="keywords" content="case studies, CA success stories, accounting automation results, Fintrex testimonials" />
        <link rel="canonical" href="https://fintrex.ai/case-studies" />
        <meta property="og:title" content="Case Studies | Fintrex AI" />
        <meta property="og:description" content="Real success stories from CAs and accounting firms using Fintrex AI." />
        <meta property="og:type" content="website" />
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
              <span className="text-white">Case Studies</span>
            </nav>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Real <span className="text-brand">Results</span> from Real CAs
            </h1>
            <p className="text-gray-400 text-lg">
              Discover how Chartered Accountants across India are transforming their practices 
              with Fintrex AI. From solo practitioners to large firms—see what's possible.
            </p>
          </motion.div>
        </section>

        {/* Stats Overview */}
        <section className="container mx-auto px-4 max-w-7xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '150+', label: 'CAs Using Fintrex' },
              { value: '35 hrs', label: 'Avg Monthly Savings' },
              { value: '99.7%', label: 'OCR Accuracy' },
              { value: '168%', label: 'Avg Revenue Growth' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-neutral-900/50 border border-white/5 rounded-xl p-6 text-center">
                <div className="text-brand font-heading font-bold text-3xl mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Filter */}
        <section className="container mx-auto px-4 max-w-7xl mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterType(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filterType === null
                  ? 'bg-brand text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              All Stories
            </button>
            {clientTypes.map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filterType === type
                    ? 'bg-brand text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Case Study */}
        {!filterType && featuredStudies.length > 0 && (
          <section className="container mx-auto px-4 max-w-7xl mb-12">
            <h2 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-brand" size={24} />
              Featured Success Story
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid lg:grid-cols-3 gap-6"
            >
              <CaseStudyCard study={featuredStudies[0]} featured />
            </motion.div>
          </section>
        )}

        {/* All Case Studies */}
        <section className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">
            {filterType ? `${filterType} Stories` : 'All Case Studies'}
          </h2>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredStudies.map(study => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 max-w-7xl mt-20">
          <div className="bg-gradient-to-r from-brand/10 to-emerald-500/10 border border-brand/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join 150+ CAs who've transformed their practice with Fintrex AI. 
              Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-3 bg-brand text-black font-semibold rounded-xl hover:bg-brand/90 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                to="/features"
                className="px-8 py-3 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudiesList;
