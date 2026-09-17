import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';

function EcosystemSection() {
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'speed', 'dopamine'

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const speedProducts = [
        {
            id: 'speed-learning',
            brand: 'SPEED',
            category: 'Super-Specialty Entrance Coaching',
            title: 'Speed Learning App',
            tagline: "India's #1 NEET Training App (DM/MCh, NEET PG, MDS, NEET UG)",
            description: 'The premier national medical training app founded and curated by Dr. K. Vinayak Senthil. Powering over 35,000 super-specialty DM & MCh selections across top medical institutions with adaptive Q-Banks, grand tests, and video lectures.',
            badge: "India's #1 NEET SS App",
            badgeBg: 'bg-amber-50 text-amber-800 border-amber-300',
            icon: '/icons/course.svg',
            iconBg: 'bg-amber-500/10 text-amber-600',
            link: 'https://speedlearningapp.com/',
            linkText: 'Open Speed Learning App ↗',
            highlights: [
                'Over 35,000 Super-Specialty DM & MCh seat selections',
                'Curated high-yield video lectures mentored directly by Dr. Vinayak Senthil',
                'Complete curriculum for NEET SS, INI-SS, PG Residency & Medical Licensure'
            ],
            metric: { value: '35,000+', label: 'DM/MCh Selections' },
            featured: true
        },
        {
            id: 'speed-hospital',
            brand: 'SPEED',
            category: 'Tertiary Clinical Care & Surgery',
            title: 'SPEED Multi Speciality Hospital',
            tagline: 'Advanced Cardiovascular Center & 24/7 Cardiac Emergency Care',
            description: 'State-of-the-art multi-speciality hospital founded by Dr. K. Vinayak Senthil in Mangadu, Chennai. Equipped with laminar airflow operating theatres, catheterization labs, and 24/7 cardiac emergency response.',
            badge: 'Tertiary Hospital',
            badgeBg: 'bg-blue-50 text-[var(--acc-3)] border-blue-200',
            icon: '/surgery/h-s.svg',
            iconBg: 'bg-blue-500/10 text-blue-600',
            link: 'https://speedhospitals.com/',
            linkText: 'Visit Hospital Website ↗',
            highlights: [
                'Comprehensive Cardio Vascular & Thoracic Surgery suites',
                '24/7 Trauma, Critical Care & Rapid Cardiac Response Team',
                'Accelerated postoperative rehabilitation protocols'
            ],
            metric: { value: '25+ Yrs', label: 'Surgical Mastery' }
        },
        {
            id: 'speed-village',
            brand: 'SPEED',
            category: '125-Acre Residential Campus',
            title: 'SPEED Medical Village',
            tagline: 'Eco-Friendly Residential Campus for Distraction-Free Preparation',
            description: 'A transformative 125-acre residential learning sanctuary in Kanchipuram. Purpose-built to eliminate digital fatigue with 24/7 air-conditioned study halls, hostel suites, and organic dining.',
            badge: '125-Acre Campus',
            badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
            icon: '/icons/home.svg',
            iconBg: 'bg-teal-500/10 text-teal-600',
            link: 'https://dopaminemed.com/residential-neet-pg-inicet-pg-fmge/',
            linkText: 'Explore Campus ↗',
            highlights: [
                'Live, Learn, Serve, Belong — holistic academic lifestyle',
                '24/7 monitored quiet halls and immediate faculty doubt clearing',
                'Official home to India’s First Dopamine Residential Retreat'
            ],
            metric: { value: '125 Acres', label: 'Green Campus' }
        }
    ];

    const dopamineProducts = [
        {
            id: 'dopamine-retreat',
            brand: 'DOPAMINE',
            category: '24-Week Intensive Exam-Ready Retreat',
            title: 'Dopamine Retreat (CMR 2.0 / Advance GMI 2.0)',
            tagline: 'India’s 1st Immersive, Exam-Ready 24-Week Retreat for NEET PG / INICET / FMGE',
            description: 'A groundbreaking 24-week residential transformation program at Speed Medical Village. Blends circadian academic discipline with yoga, organic nutrition, daily morning CBTs, evening discussions, and weekend marathons.',
            badge: 'CMR 2.0 Retreat (Top Priority)',
            badgeBg: 'bg-purple-100 text-purple-900 border-purple-300 font-extrabold',
            icon: '/icons/star.svg',
            iconBg: 'bg-purple-500/10 text-purple-600',
            link: 'https://dopaminemed.com/residential-neet-pg-inicet-pg-fmge/',
            linkText: 'Apply for 24-Week Retreat ↗',
            highlights: [
                'Direct mentorship from Dr. K. Vinayak Senthil & leading faculty',
                'Daily morning test, 2-hour discussion, and weekend application marathon',
                'Strictly limited to 100 students for personalized rank coaching'
            ],
            metric: { value: '24 Weeks', label: 'Immersive Retreat' },
            featured: true
        },
        {
            id: 'dopamine-app',
            brand: 'DOPAMINE',
            category: 'Digital MBBS & NEET PG Learning App',
            title: 'DOPAMINE Medical Learning App',
            tagline: 'The Joy of Medicine — The Ultimate Partner for Your MBBS Journey',
            description: 'Next-generation digital medical learning platform for undergraduate MBBS students and postgraduate aspirants. Features CBME-aligned syllabus, clinical video masterclasses, and high-yield Q-Banks with explanations.',
            badge: 'Digital Medical App',
            badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
            icon: '/icons/ai.svg',
            iconBg: 'bg-sky-500/10 text-sky-600',
            link: 'https://dopaminemed.com/index',
            linkText: 'Explore Dopamine App ↗',
            highlights: [
                'CBME (Competency-Based Medical Education) mapped modules',
                'Comprehensive high-yield Q-Banks with clinical case explanations',
                'Interactive video lectures & surgical operative breakdowns'
            ],
            metric: { value: '3.5 Lakh+', label: 'Doctors Mentored' },
            featured: true
        }
    ];

    const allItems = [
        ...speedProducts.map(p => ({ ...p, wing: 'speed' })),
        ...dopamineProducts.map(p => ({ ...p, wing: 'dopamine' }))
    ];

    const filteredItems = activeTab === 'all' 
        ? allItems 
        : allItems.filter(item => item.wing === activeTab);

    return (
        <section id="ecosystem" className="py-20 lg:py-28 bg-gradient-to-b from-[#F0F5FE] via-white to-[#F8FAFC] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-10 left-10 w-[35rem] h-[35rem] bg-[#0058A1]/8 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-1/3 right-5 w-[35rem] h-[35rem] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-1/4 w-[30rem] h-[30rem] bg-[#2AD2C1]/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
                
                {/* Master Header */}
                <motion.div
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--acc-1)] via-[#2BEFAD] to-[var(--acc-1)] text-slate-900 font-extrabold text-xs uppercase tracking-widest shadow-md">
                        <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping"></span>
                        DR. K. VINAYAK SENTHIL'S BEST PRODUCTS & INNOVATIONS
                    </div>
                    
                    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--t-c-d)] font-pt-san leading-tight tracking-tight">
                        The Twin Powerhouses: <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-[var(--acc-3)] via-blue-600 to-[#0058A1] bg-clip-text text-transparent">SPEED</span>
                        <span className="text-slate-400 mx-3">&</span>
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">DOPAMINE</span>
                    </h2>

                    <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                        Dr. K. Vinayak Senthil has engineered India’s most celebrated medical ecosystems — spanning tertiary cardiovascular hospital care, the nation's #1 NEET super-specialty training app, the revolutionary 24-week residential retreat, and comprehensive MBBS digital learning.
                    </p>
                </motion.div>

                {/* ================================================================ */}
                {/* 1. GRAND DUAL FLAGSHIP SHOWCASE (BIGGER, HIGH PRIORITY HERO CARDS) */}
                {/* ================================================================ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
                    
                    {/* FLAGSHIP #1: SPEED ECOSYSTEM */}
                    <motion.div
                        className="rounded-3xl bg-gradient-to-br from-[#051C33] via-[#02284D] to-[#0A3D6E] p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl border-2 border-blue-400/30 flex flex-col justify-between group hover:border-blue-400/60 transition-all duration-500"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2AD2C1]/15 rounded-full blur-3xl pointer-events-none" />
                        
                        <div>
                            {/* Card Top Badges */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-[#2BEFAD] font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#2BEFAD] animate-pulse"></span>
                                    Flagship Brand • Est. 2002
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/90">
                                    Hospital • App • Village
                                </span>
                            </div>

                            <div className="flex items-center gap-3.5 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-[#2BEFAD] flex items-center justify-center text-white text-2xl font-black shadow-lg">
                                    ⚡
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold font-pt-san tracking-tight text-white">
                                        SPEED Ecosystem
                                    </h3>
                                    <span className="text-xs sm:text-sm text-[#2BEFAD] font-semibold">
                                        India's #1 Super-Specialty Medical Powerhouse
                                    </span>
                                </div>
                            </div>

                            <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
                                Founded by Dr. Vinayak Senthil, the SPEED brand has mentored over <strong>350,000 doctors</strong> and produced more than <strong>35,000 super-specialty DM & MCh selections</strong> across AIIMS, PGI, and premier national institutes.
                            </p>

                            {/* Core Pillars of SPEED */}
                            <div className="space-y-3.5 pt-4 border-t border-white/15 mb-8">
                                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-[#2BEFAD] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                        01
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-xs sm:text-sm">Speed Learning App</h5>
                                        <p className="text-[11px] text-white/70">India's leading NEET SS, DM/MCh, NEET PG & MDS video lecture and test prep app.</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                        02
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-xs sm:text-sm">SPEED Multi Speciality Hospital</h5>
                                        <p className="text-[11px] text-white/70">Tertiary cardiac, vascular, and thoracic surgical center with 24/7 ICU in Mangadu, Chennai.</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                        03
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-xs sm:text-sm">SPEED Medical Village (125 Acres)</h5>
                                        <p className="text-[11px] text-white/70">Distraction-free eco-friendly residential learning campus located in Kanchipuram.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Metrics Bar */}
                            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/30 border border-white/10 text-center mb-6">
                                <div>
                                    <span className="block font-black text-xl text-[var(--acc-1)]">35,000+</span>
                                    <span className="text-[10px] text-white/70">DM/MCh Selections</span>
                                </div>
                                <div className="border-l border-r border-white/15">
                                    <span className="block font-black text-xl text-white">3.5L+</span>
                                    <span className="text-[10px] text-white/70">Doctors Mentored</span>
                                </div>
                                <div>
                                    <span className="block font-black text-xl text-[#2BEFAD]">25+ Yrs</span>
                                    <span className="text-[10px] text-white/70">Legacy of Care</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a
                                    href="https://speedlearningapp.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="py-3.5 px-4 rounded-xl bg-[var(--acc-1)] hover:bg-[#2BEFAD] text-slate-900 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <span>Open Speed Learning App</span>
                                    <span>↗</span>
                                </a>
                                <a
                                    href="https://speedhospitals.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="py-3.5 px-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                                >
                                    <span>Visit SPEED Hospital</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* FLAGSHIP #2: DOPAMINE ECOSYSTEM */}
                    <motion.div
                        className="rounded-3xl bg-gradient-to-br from-[#200B3B] via-[#32125B] to-[#4C1D95] p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl border-2 border-purple-400/40 flex flex-col justify-between group hover:border-purple-300 transition-all duration-500"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
                        
                        <div>
                            {/* Card Top Badges */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-purple-500/25 border border-purple-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                                    Next-Gen Revolution • "The Joy of Medicine"
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/90">
                                    App • 24-Week Retreat
                                </span>
                            </div>

                            <div className="flex items-center gap-3.5 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                                    🧬
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold font-pt-san tracking-tight text-white">
                                        DOPAMINE Platform
                                    </h3>
                                    <span className="text-xs sm:text-sm text-pink-300 font-semibold">
                                        Next-Gen MBBS App & Immersive Retreat
                                    </span>
                                </div>
                            </div>

                            <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
                                The crown-jewel innovation created by Dr. Vinayak Senthil to eliminate medical study burnout, bringing back "The Joy of Medicine" through CBME-aligned digital curriculum and India's 1st 24-week residential retreat.
                            </p>

                            {/* Core Pillars of DOPAMINE */}
                            <div className="space-y-3.5 pt-4 border-t border-white/15 mb-8">
                                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-purple-300/25 flex items-start gap-3 ring-1 ring-amber-400/30">
                                    <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                        01
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h5 className="font-bold text-white text-xs sm:text-sm">Dopamine Retreat (CMR 2.0 / Advance GMI 2.0)</h5>
                                            <span className="px-2 py-0.5 rounded text-[9px] font-extrabold bg-amber-400 text-slate-950 uppercase">Top Priority</span>
                                        </div>
                                        <p className="text-[11px] text-white/75 mt-0.5">India’s first 24-week residential immersion for NEET PG, INI-CET & FMGE at Speed Medical Village.</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                        02
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-xs sm:text-sm">DOPAMINE Medical Learning App</h5>
                                        <p className="text-[11px] text-white/70">Complete CBME-aligned MBBS curriculum, clinical video masterclasses, and conceptual Q-Banks.</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                        03
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-xs sm:text-sm">Direct Mentorship by Dr. Vinayak Senthil</h5>
                                        <p className="text-[11px] text-white/70">Exclusive batch of 100 aspirants receiving personalized clinical guidance & daily strategy reviews.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Metrics Bar */}
                            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/30 border border-white/10 text-center mb-6">
                                <div>
                                    <span className="block font-black text-xl text-amber-300">24 Weeks</span>
                                    <span className="text-[10px] text-white/70">Immersion Cycle</span>
                                </div>
                                <div className="border-l border-r border-white/15">
                                    <span className="block font-black text-xl text-white">100 Seats</span>
                                    <span className="text-[10px] text-white/70">Exclusive Batch</span>
                                </div>
                                <div>
                                    <span className="block font-black text-xl text-pink-300">Full CBME</span>
                                    <span className="text-[10px] text-white/70">MBBS & PG App</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a
                                    href="https://dopaminemed.com/residential-neet-pg-inicet-pg-fmge/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <span>Apply for 24-Week Retreat</span>
                                    <span>↗</span>
                                </a>
                                <a
                                    href="https://dopaminemed.com/index"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="py-3.5 px-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                                >
                                    <span>Explore Dopamine App</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* ================================================================ */}
                {/* 2. DETAILED INDIVIDUAL PRODUCT CATALOG (FILTERABLE TABS) */}
                {/* ================================================================ */}
                <div className="mt-24 pt-12 border-t border-slate-200">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold font-pt-san text-[var(--t-c-d)]">
                                Deep Dive Product Catalog
                            </h3>
                            <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                Explore all 5 entities across healthcare, digital education, and residential campuses.
                            </p>
                        </div>

                        {/* Filter Tabs */}
                        <div className="inline-flex p-1.5 rounded-full bg-slate-200/70 backdrop-blur-sm shadow-inner">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                    activeTab === 'all'
                                        ? 'bg-white text-[var(--acc-3)] shadow-md'
                                        : 'text-gray-600 hover:text-[var(--t-c-d)]'
                                }`}
                            >
                                All Products ({allItems.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('speed')}
                                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                                    activeTab === 'speed'
                                        ? 'bg-[var(--acc-3)] text-white shadow-md'
                                        : 'text-gray-600 hover:text-[var(--t-c-d)]'
                                }`}
                            >
                                <span className="w-2 h-2 rounded-full bg-[#2BEFAD]"></span>
                                SPEED (3)
                            </button>
                            <button
                                onClick={() => setActiveTab('dopamine')}
                                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                                    activeTab === 'dopamine'
                                        ? 'bg-purple-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-[var(--t-c-d)]'
                                }`}
                            >
                                <span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
                                DOPAMINE (2)
                            </button>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden ${
                                    item.featured 
                                        ? 'border-purple-300 shadow-[0_10px_30px_rgba(147,51,234,0.12)] ring-2 ring-purple-400/20' 
                                        : 'border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
                                }`}
                            >
                                {/* Accent Top Bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                                    item.brand === 'SPEED' 
                                        ? 'bg-gradient-to-r from-[var(--acc-3)] to-[#2AD2C1]' 
                                        : 'bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600'
                                }`} />

                                <div>
                                    {/* Top Header: Category & Badge */}
                                    <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${item.badgeBg}`}>
                                            {item.badge}
                                        </span>
                                        <div className="text-right">
                                            <span className="text-lg font-extrabold text-[var(--t-c-d)] font-pt-san block leading-none">
                                                {item.metric.value}
                                            </span>
                                            <span className="text-[10px] text-gray-400 font-medium">
                                                {item.metric.label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title & Brand */}
                                    <div className="flex items-start gap-3.5 mb-3">
                                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5 ${item.iconBg}`}>
                                            <MaskImage w="1.3em" h="1.3em" url={item.icon} bg="currentColor" hBg="" c="" hL="1" />
                                        </div>
                                        <div>
                                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                                                {item.brand} • {item.category}
                                            </span>
                                            <h4 className="text-xl font-bold text-[var(--t-c-d)] font-pt-san leading-tight group-hover:text-[var(--acc-3)] transition-colors">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </div>

                                    {/* Tagline */}
                                    <p className="text-xs font-semibold text-[var(--acc-2)] mb-3 leading-relaxed">
                                        {item.tagline}
                                    </p>

                                    {/* Description */}
                                    <p className="text-xs text-gray-600 leading-relaxed mb-5">
                                        {item.description}
                                    </p>

                                    {/* Key Highlights */}
                                    <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                                        {item.highlights.map((point, hIdx) => (
                                            <div key={hIdx} className="flex items-start gap-2 text-[12px] text-slate-700">
                                                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                                                    item.brand === 'SPEED' ? 'bg-[var(--acc-3)]' : 'bg-purple-600'
                                                }`} />
                                                <span>{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* External Action Button */}
                                <div className="pt-2">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm ${
                                            item.brand === 'SPEED'
                                                ? 'bg-slate-900 hover:bg-[var(--acc-3)] text-white hover:shadow-lg'
                                                : 'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg'
                                        }`}
                                    >
                                        <span>{item.linkText}</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ================================================================ */}
                {/* 3. RETREAT CIRCADIAN ROUTINE & CURRICULUM SPOTLIGHT */}
                {/* ================================================================ */}
                <motion.div
                    className="mt-16 rounded-3xl bg-gradient-to-r from-[#001529] via-[#002B49] to-[#043353] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-white/15"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-[#2AD2C1]/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

                    <div className="grid grid-cols-12 gap-8 items-center relative z-10">
                        <div className="col-span-12 lg:col-span-8">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#2BEFAD] text-xs font-semibold uppercase tracking-wider mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#2BEFAD] animate-ping" />
                                24-Week Immersive Routine @ Speed Medical Village
                            </span>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-pt-san leading-tight text-white">
                                Dopamine Retreat + Advance GMI 2.0
                            </h3>
                            <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                                Built to transform medical aspirants through 24 weeks of rigorous, scientifically timed circadian preparation. Learn directly under Dr. K. Vinayak Senthil with a proven timetable:
                            </p>
                            
                            {/* Daily Routine Schedule Pills */}
                            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px]">
                                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur border border-white/10">
                                    <span className="text-[#2BEFAD] font-bold block">5:30 AM</span>
                                    <span className="text-white/80">Yoga & Mindfulness</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur border border-white/10">
                                    <span className="text-[#2BEFAD] font-bold block">8:30 – 11:30 AM</span>
                                    <span className="text-white/80">Daily CBT Mock Exam</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur border border-white/10">
                                    <span className="text-[#2BEFAD] font-bold block">6:00 – 8:00 PM</span>
                                    <span className="text-white/80">2-Hr Faculty Discussion</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur border border-white/10">
                                    <span className="text-[#2BEFAD] font-bold block">Weekends 8AM-8PM</span>
                                    <span className="text-white/80">Application Marathon</span>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-300">
                                <span className="flex items-center gap-1.5"><strong className="text-white">Batch Limit:</strong> 100 Candidates</span>
                                <span className="flex items-center gap-1.5"><strong className="text-white">Venue:</strong> Speed Medical Village, Kanchipuram</span>
                                <span className="flex items-center gap-1.5"><strong className="text-white">Includes:</strong> Stay, Food, Tests & Mentorship</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex flex-col gap-3.5 justify-center lg:items-end">
                            <a
                                href="https://dopaminemed.com/residential-neet-pg-inicet-pg-fmge/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-extrabold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
                            >
                                <span>Apply for Retreat (CMR 2.0)</span>
                                <span>→</span>
                            </a>
                            <a
                                href="https://speedlearningapp.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold text-sm transition-all text-center"
                            >
                                <span>Visit Speed Learning App ↗</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default EcosystemSection;
