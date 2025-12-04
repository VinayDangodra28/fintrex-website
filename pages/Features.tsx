import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  MessageCircle, 
  Zap, 
  Database, 
  FileText, 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone,
  Layers,
  ScanLine,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { FadeIn, WaitlistInput } from '../components/ui/Motion';
import BrandRings from '../components/BrandRings';

// --- Animated Visual Components for each Feature ---

const WhatsAppVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
    <div className="w-64 bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">
      {/* Phone Header */}
      <div className="h-12 bg-[#075E54] flex items-center px-4 gap-3">
         <div className="w-8 h-8 rounded-full bg-white/20" />
         <div className="h-2 w-24 bg-white/20 rounded-full" />
      </div>
      {/* Chat Area */}
      <div className="p-4 space-y-4 bg-[#0b141a] h-64 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-5" />
         
         <motion.div 
           initial={{ opacity: 0, x: -20, scale: 0.8 }}
           whileInView={{ opacity: 1, x: 0, scale: 1 }}
           transition={{ delay: 0.5 }}
           className="bg-[#1f2c34] p-3 rounded-lg rounded-tl-none max-w-[80%] mr-auto text-[10px] text-gray-300"
         >
           Hi! Please upload your invoices for March filing.
         </motion.div>

         <motion.div 
           initial={{ opacity: 0, x: 20, scale: 0.8 }}
           whileInView={{ opacity: 1, x: 0, scale: 1 }}
           transition={{ delay: 1.5 }}
           className="bg-[#005c4b] p-2 rounded-lg rounded-tr-none max-w-[80%] ml-auto text-[10px] text-white flex items-center gap-2"
         >
           <div className="w-4 h-4 bg-white/20 rounded" /> Image.jpg
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="text-[9px] text-center text-gray-500 uppercase tracking-widest mt-4"
         >
            AI Processing...
         </motion.div>

          <motion.div 
           initial={{ opacity: 0, x: -20, scale: 0.8 }}
           whileInView={{ opacity: 1, x: 0, scale: 1 }}
           transition={{ delay: 3.5 }}
           className="bg-[#1f2c34] p-3 rounded-lg rounded-tl-none max-w-[80%] mr-auto text-[10px] text-brand border border-brand/20"
         >
           ✅ Received. Extracted 12 invoices. GST Filing ready.
         </motion.div>
      </div>
    </div>
    {/* Floating Elements */}
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute top-10 right-10 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] z-10"
    >
      <MessageCircle className="text-white w-6 h-6" />
    </motion.div>
  </div>
);

const OCRVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
    {/* Main Document Layer */}
    <div className="relative w-56 md:w-64 h-72 md:h-80 bg-[#f0f0f0] rounded-lg shadow-2xl overflow-hidden transform rotate-[-6deg] border border-gray-300 z-10 origin-center">
       {/* Document Content */}
       <div className="p-4 md:p-6 opacity-60 flex flex-col h-full relative">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
             <div className="w-8 h-8 bg-gray-400 rounded-full" />
             <div className="space-y-1 text-right">
                 <div className="w-20 h-2 bg-gray-400 rounded ml-auto" />
                 <div className="w-16 h-2 bg-gray-400 rounded ml-auto" />
             </div>
          </div>
          
          {/* Invoice Number Section */}
          <div className="mb-4 relative">
             <div className="w-12 h-2 bg-gray-400 rounded mb-1" />
             <div className="w-24 h-4 bg-gray-800 rounded opacity-80" />
             {/* Highlight Box 1 */}
             <motion.div 
               initial={{ opacity: 0, scale: 1.1 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1, duration: 0.3 }}
               className="absolute -inset-1 border-2 border-[#ff0077] rounded bg-[#ff0077]/10"
             />
          </div>

          {/* Date Section */}
          <div className="mb-6 md:mb-8 relative">
             <div className="w-10 h-2 bg-gray-400 rounded mb-1" />
             <div className="w-20 h-4 bg-gray-800 rounded opacity-80" />
             {/* Highlight Box 2 */}
             <motion.div 
               initial={{ opacity: 0, scale: 1.1 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 2, duration: 0.3 }}
               className="absolute -inset-1 border-2 border-[#ff0077] rounded bg-[#ff0077]/10"
             />
          </div>

          {/* Table Items */}
          <div className="space-y-2 flex-grow">
             <div className="w-full h-px bg-gray-300 mb-2" />
             {[1,2,3].map(i => (
                 <div key={i} className="flex justify-between">
                     <div className="w-24 h-2 bg-gray-400 rounded" />
                     <div className="w-8 h-2 bg-gray-400 rounded" />
                 </div>
             ))}
          </div>

          {/* Total Section */}
          <div className="mt-auto flex justify-between items-end relative pt-4 border-t border-gray-300">
             <div className="w-16 h-3 bg-gray-400 rounded" />
             <div className="w-24 h-6 bg-gray-800 rounded opacity-90" />
             {/* Highlight Box 3 */}
             <motion.div 
               initial={{ opacity: 0, scale: 1.1 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 3, duration: 0.3 }}
               className="absolute -inset-2 border-2 border-brand rounded bg-brand/10"
             />
          </div>
       </div>

       {/* Scanning Beam */}
       <motion.div 
         animate={{ top: ['-10%', '110%'] }}
         transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
         className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-brand/20 to-transparent -skew-y-6 pointer-events-none"
       />
    </div>

    {/* Connecting Lines & Extracted Data Cards Layer */}
    <div className="absolute inset-0 z-20 pointer-events-none">
       {/* Card 1: Invoice No */}
       <motion.div 
         initial={{ opacity: 0, x: 40 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ delay: 1.2, type: "spring" }}
         className="absolute top-[20%] right-[2%] md:right-[10%] lg:right-[15%]"
       >
          <div className="bg-neutral-900/90 backdrop-blur-md border border-[#ff0077]/30 p-3 rounded-xl shadow-[0_0_15px_rgba(255,0,119,0.2)] flex items-center gap-3 w-40 md:w-48">
             <div className="w-8 h-8 rounded-lg bg-[#ff0077]/20 flex items-center justify-center text-[#ff0077] shrink-0">
                <FileText size={14} />
             </div>
             <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Invoice #</div>
                <div className="text-xs md:text-sm font-bold text-white font-mono">INV-8842</div>
             </div>
          </div>
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 right-full w-12 h-px bg-[#ff0077]/50 origin-right rotate-12" />
          <div className="hidden md:block absolute top-1/2 right-full w-2 h-2 bg-[#ff0077] rounded-full -translate-y-1/2 -translate-x-12" />
       </motion.div>

       {/* Card 2: Date */}
       <motion.div 
         initial={{ opacity: 0, x: 40 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ delay: 2.2, type: "spring" }}
         className="absolute top-[42%] right-0 md:right-[5%] lg:right-[8%]"
       >
          <div className="bg-neutral-900/90 backdrop-blur-md border border-[#ff0077]/30 p-3 rounded-xl shadow-[0_0_15px_rgba(255,0,119,0.2)] flex items-center gap-3 w-40 md:w-44">
             <div className="w-8 h-8 rounded-lg bg-[#ff0077]/20 flex items-center justify-center text-[#ff0077] shrink-0">
                <Search size={14} />
             </div>
             <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Date</div>
                <div className="text-xs md:text-sm font-bold text-white font-mono">12 Mar 2025</div>
             </div>
          </div>
          <div className="hidden md:block absolute top-1/2 right-full w-8 h-px bg-[#ff0077]/50 origin-right" />
          <div className="hidden md:block absolute top-1/2 right-full w-2 h-2 bg-[#ff0077] rounded-full -translate-y-1/2 -translate-x-8" />
       </motion.div>

       {/* Card 3: Total */}
       <motion.div 
         initial={{ opacity: 0, x: 40 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ delay: 3.2, type: "spring" }}
         className="absolute bottom-[15%] right-[5%] md:right-[8%] lg:right-[12%]"
       >
          <div className="bg-neutral-900/90 backdrop-blur-md border border-brand/30 p-3 rounded-xl shadow-[0_0_15px_rgba(0,255,136,0.2)] flex items-center gap-3 w-48 md:w-52">
             <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center text-brand shrink-0">
                <ShieldCheck size={14} />
             </div>
             <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Total Amount</div>
                <div className="text-sm md:text-lg font-bold text-brand font-mono">₹ 45,200.00</div>
             </div>
          </div>
          <div className="hidden md:block absolute top-1/2 right-full w-16 h-px bg-brand/50 origin-right -rotate-12" />
          <div className="hidden md:block absolute top-1/2 right-full w-2 h-2 bg-brand rounded-full -translate-y-1/2 -translate-x-16" />
       </motion.div>
    </div>
  </div>
);

const VendorVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Hub */}
      <div className="w-24 h-24 rounded-full bg-neutral-900 border-2 border-[#ff0077]/50 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(255,0,119,0.2)]">
         <Database className="text-[#ff0077] w-8 h-8" />
      </div>
      
      {/* Orbiting Nodes */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="absolute"
            style={{ transform: `rotate(${deg}deg) translate(100px) rotate(-${deg}deg)` }}
          >
             <div className="w-12 h-12 bg-[#1a1a1a] border border-white/10 rounded-xl flex items-center justify-center text-[10px] text-gray-400 shadow-lg">
                Vendor {i+1}
             </div>
             {/* Connecting Line */}
             <div className="absolute top-1/2 left-1/2 w-[100px] h-[1px] bg-gradient-to-l from-[#ff0077]/50 to-transparent origin-right -translate-x-full -translate-y-1/2 -z-10" style={{ transform: `rotate(${deg + 180}deg)` }} />
          </motion.div>
      ))}
  </div>
);

const FinancialsVisual = () => (
   <div className="relative w-full h-full flex items-center justify-center p-8">
      <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-white/10 p-6 relative overflow-hidden">
         <div className="flex justify-between items-center mb-8">
             <div className="text-sm font-bold text-gray-400">Profit & Loss</div>
             <div className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">FY 2024-25</div>
         </div>
         <div className="flex items-end justify-between gap-2 h-40">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-full bg-gradient-to-t from-brand/20 to-brand rounded-t-sm relative group"
                >
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}%
                   </div>
                </motion.div>
            ))}
         </div>
         {/* Floating "Done" Badge */}
         <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2"
         >
            <CheckCircle2 className="text-brand" />
            Books Closed
         </motion.div>
      </div>
   </div>
);

const Features = () => {
  const features = [
    {
      title: "WhatsApp-Native Onboarding",
      subtitle: "Zero Friction",
      desc: "Your clients don't need another app. They simply WhatsApp their documents to your firm's dedicated number. Our bot handles collection, classification, and reminders automatically.",
      points: ["No app install required", "Auto-reminders for missing docs", "Real-time status updates"],
      visual: <WhatsAppVisual />
    },
    {
      title: "Smart Document Extraction",
      subtitle: "Unmatched Accuracy",
      desc: "We use advanced proprietary AI to achieve 99% accuracy. From crumpled receipts to handwritten notes, nothing gets missed.",
      points: ["Extracts HSN & Line Items", "Validates GSTIN & Dates", "Detects Duplicates instantly"],
      visual: <OCRVisual />
    },
    {
      title: "Automated Vendor Master",
      subtitle: "Smart Organization",
      desc: "Fintrex builds a global vendor database for your firm. It fuzzy-matches 'Reliance' with 'Reliance Jio Infocomm' automatically, keeping your ledgers clean.",
      points: ["Fuzzy Name Matching", "Global Vendor Repository", "Expense Analytics"],
      visual: <VendorVisual />
    },
    {
      title: "One-Click Financials",
      subtitle: "Instant Reports",
      desc: "Stop wrestling with Excel. Generate Balance Sheets, P&L, and Cash Flow statements in real-time. Depreciation and retained earnings are auto-calculated.",
      points: ["Auto-Depreciation", "Trial Balance Validation", "Excel/JSON/PDF Export"],
      visual: <FinancialsVisual />
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-body">
      <Helmet>
        <title>Features | Fintrex AI Accounting Automation - Fin's Capabilities</title>
        <meta name="description" content="Discover how Fin, our AI assistant, powers Fintrex features: WhatsApp integration, 99.9% accurate AI invoice extraction, automated vendor management, and one-click financial reports. Built for modern CA practices with cutting-edge AI technology." />
        <meta name="keywords" content="Fin AI features, AI invoice extraction, WhatsApp accounting integration, OCR invoice scanning, automated vendor management, financial report automation, GST filing automation, Tally integration features, CA software features India" />
        <link rel="canonical" href="https://fintrex.ai/features" />
        
        {/* Features Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Fintrex AI Features",
            "description": "Comprehensive list of Fin AI assistant capabilities and Fintrex platform features",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "WhatsApp-Native Onboarding",
                "description": "Zero friction client onboarding through WhatsApp with automated document collection",
                "image": "https://fintrex.ai/features/whatsapp-integration.png"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Smart Document Extraction with Fin AI",
                "description": "99.9% accurate AI-powered invoice and document extraction using advanced OCR",
                "image": "https://fintrex.ai/features/ai-extraction.png"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Automated Vendor Master",
                "description": "Intelligent vendor database with fuzzy matching and global repository",
                "image": "https://fintrex.ai/features/vendor-management.png"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "One-Click Financial Reports",
                "description": "Instant Balance Sheets, P&L, and Cash Flow with auto-depreciation",
                "image": "https://fintrex.ai/features/financial-reports.png"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Automated GST Filing",
                "description": "One-click GSTR filing with compliance validation",
                "image": "https://fintrex.ai/features/gst-filing.png"
              }
            ]
          })}
        </script>
        
        {/* HowTo Schema for Workflow */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Automate Accounting with Fintrex and Fin AI",
            "description": "Step-by-step guide to automating your accounting workflow",
            "image": "https://fintrex.ai/workflow-guide.png",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Connect",
                "text": "Add clients via WhatsApp to your Fintrex account"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Capture",
                "text": "Clients snap photos or send PDFs of invoices via WhatsApp"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Process",
                "text": "Fin AI extracts and validates all data with 99.9% accuracy"
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Review",
                "text": "Quick side-by-side verification in dashboard"
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "File",
                "text": "One-click GSTR filing with automated compliance"
              }
            ]
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
         
         {/* Brand Rings - Central Visual Element */}
         <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
             <BrandRings scale={1.8} />
         </div>

         <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/5 text-brand text-sm font-medium tracking-wide uppercase"
            >
              <Sparkles className="w-4 h-4 inline mr-2" />
              Features V1.0
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
              Built for the <br/> <span className="text-brand glow-text">Future of Accounting</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Every tool you need to automate compliance, scale your practice, and reclaim your time.
            </p>
         </div>
      </div>

      {/* Deep Dive Section */}
      <div className="container mx-auto px-4 max-w-7xl py-10 space-y-20 md:space-y-48 relative">
         {/* Connecting Line Background */}
         <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand/20 to-transparent -translate-x-1/2 hidden md:block" />

         {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}
            >
               {/* Text Content */}
               <div className="flex-1 z-10">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="h-px w-12 bg-brand" />
                     <span className="text-brand font-bold tracking-widest uppercase text-sm">{feature.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">{feature.title}</h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">{feature.desc}</p>
                  <ul className="space-y-4">
                     {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                           <div className="mt-1 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand/50 transition-colors">
                              <div className="w-2 h-2 rounded-full bg-brand" />
                           </div>
                           <span className="text-gray-300 group-hover:text-white transition-colors">{point}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Visual Mockup */}
               <div className="flex-1 w-full z-10">
                  <div className="relative aspect-square md:aspect-[4/3] rounded-3xl border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-sm overflow-hidden shadow-2xl group hover:border-brand/30 transition-colors duration-500">
                     <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     {feature.visual}
                  </div>
               </div>

               {/* Background Glow for each section */}
               <div className={`absolute top-1/2 ${idx % 2 === 0 ? 'right-0' : 'left-0'} -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 blur-[100px] rounded-full -z-0 pointer-events-none`} />
            </motion.div>
         ))}
      </div>

      {/* How It Works - Timeline */}
      <div className="mt-24 py-16 md:mt-40 md:py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
         <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center mb-12 md:mb-20">
               <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Workflow Timeline</h2>
               <p className="text-gray-400">From chaos to compliance in 5 simple steps</p>
            </div>

            <div className="relative">
               {/* Horizontal Line (Desktop) */}
               <div className="hidden md:block absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
               
               <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {[
                     { icon: <Smartphone />, title: "Connect", desc: "Add clients via WhatsApp" },
                     { icon: <ScanLine />, title: "Capture", desc: "Clients snap photos" },
                     { icon: <Zap />, title: "Process", desc: "AI extracts & validates" },
                     { icon: <Search />, title: "Review", desc: "Quick side-by-side check" },
                     { icon: <CheckCircle2 />, title: "File", desc: "1-Click GSTR filing" }
                  ].map((step, i) => (
                     <div key={i} className="relative flex flex-col items-center text-center group">
                        <motion.div 
                           initial={{ scale: 0.8, opacity: 0 }}
                           whileInView={{ scale: 1, opacity: 1 }}
                           transition={{ delay: i * 0.1 }}
                           className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-brand group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300"
                        >
                           {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-gray-400 group-hover:text-brand transition-colors" })}
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                        <p className="text-sm text-gray-500 max-w-[150px]">{step.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* CTA */}
      <div className="py-20 md:py-32 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-brand/5" />
         <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8">Ready to <span className="text-brand">Automate?</span></h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
               Join the waitlist today. No credit card required.
            </p>
            <div className="max-w-lg mx-auto">
               <WaitlistInput />
            </div>
         </div>
      </div>
    </div>
  );
};

export default Features;