import React from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';

function ClinicalExcellence() {
    const fadeLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const qualifications = [
        {
            code: "MBBS",
            degree: "Bachelor of Medicine & Surgery",
            institution: "Kilpauk Medical College, Chennai",
            year: "2001",
            icon: "/icons/about.svg"
        },
        {
            code: "DNB",
            degree: "Diplomate of National Board - Gen Surgery",
            institution: "National Board of Examinations",
            year: "2007",
            icon: "/icons/course.svg"
        },
        {
            code: "M.Ch",
            degree: "Magister Chirurgiae - CTVS",
            institution: "Madras Medical College / Rajiv Gandhi GH",
            year: "2017",
            icon: "/surgery/h-s.svg"
        },
        {
            code: "MRCS & FLS",
            degree: "International Fellowships",
            institution: "MRCS (UK), FLS (SAGES USA), FIAGES, FMAS",
            year: "International",
            icon: "/icons/star.svg"
        }
    ];

    const surgicalPillars = [
        {
            title: "Patient-Centred Care",
            subtitle: "Clear Communication & Empathy",
            desc: "Individualized surgical planning with dedicated patient counseling, clear risk explanations, and compassionate family engagement at every stage.",
            tag: "CARE ETHOS"
        },
        {
            title: "Multidisciplinary Care Team",
            subtitle: "Synchronous Precision",
            desc: "Close collaboration between cardiothoracic surgeons, cardiac anesthesiologists, perfusionists, intensivists, and specialized cardiac rehab teams.",
            tag: "COLLABORATION"
        },
        {
            title: "Evidence-Based Surgical Safety",
            subtitle: "Strict Protocol & Governance",
            desc: "Prioritizing surgical precision, modern hemodynamic monitoring, sterile barrier integrity, and accelerated postoperative recovery protocols.",
            tag: "CLINICAL SAFETY"
        }
    ];

    return (
        <section id="clinical" className="py-20 lg:py-28 relative overflow-hidden bg-white">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                
                {/* Header Tag */}
                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F5FE] text-[var(--acc-2)] font-semibold text-xs tracking-wider uppercase shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[var(--acc-7)]"></span>
                        Section I • Clinical Mastery
                    </div>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--t-c-d)] font-pt-san leading-tight">
                        Cardiothoracic Surgery at <span className="text-[var(--acc-3)]">SPEED Hospital</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                        From rigorous surgical residency to multidisciplinary tertiary hospital practice: grounded in technical excellence, ethical decision-making, and continuity of care.
                    </p>
                    <div className="mt-3">
                        <MaskImage w="140px" h="12px" url="/com/1.png" bg="var(--acc-3)" hBg="" c="" hL="1" />
                    </div>
                </motion.div>

                {/* Main Content Grid: Concept Art & Clinical Philosophy */}
                <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center mt-16">
                    
                    {/* Left Column: Visual Artwork from PDF & Badge */}
                    <motion.div
                        className="col-span-12 lg:col-span-6 relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                            <img 
                                src="/profile-assets/img_61.png" 
                                alt="SPEED Multi Speciality Hospital Visual Concept" 
                                className="w-full h-auto max-h-[560px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                            />
                            {/* Deep Scrim Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001020] via-[#001830]/80 to-transparent pointer-events-none" />

                            {/* Floating Experience Badge at Top Right */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-100 max-w-[220px] z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-[var(--acc-7)]">
                                        <MaskImage w="1.3em" h="1.3em" url="/surgery/h-s.svg" bg="var(--acc-7)" hBg="" c="" hL="1" />
                                    </div>
                                    <div>
                                        <span className="text-lg font-bold text-[var(--t-c-d)] font-pt-san block leading-none">25+ Yrs</span>
                                        <span className="text-[10px] text-gray-500 font-medium">Surgical Dedication</span>
                                    </div>
                                </div>
                            </div>

                            {/* Prominent High-Contrast Card Panel */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-5 sm:p-6 rounded-2xl bg-[#001529]/95 backdrop-blur-xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] text-white z-10">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-[var(--acc-7)] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                                        SPEED Multi Speciality Hospital
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[var(--acc-1)] text-[11px] font-semibold backdrop-blur-sm">
                                        Mangadu, Chennai
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold font-pt-san text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    Cardiothoracic Surgery & Care
                                </h3>
                                <p className="text-slate-200 text-xs sm:text-sm mt-1.5 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                    Equipped for tertiary cardiovascular care, advanced diagnostic imaging, beating-heart surgeries, and 24/7 cardiac emergency intervention.
                                </p>
                                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                                    <span>TNMC Registration No: <strong className="text-white">67377</strong></span>
                                    <span className="text-[var(--acc-1)] font-semibold">Practicing Consultant</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Qualifications & Core Pillars */}
                    <motion.div
                        className="col-span-12 lg:col-span-6 flex flex-col justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeRight}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--t-c-d)] font-pt-san">
                            Precision Surgery Matched with <span className="text-[var(--acc-3)]">Compassion</span>
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-4">
                            Dr. Vinayak Senthil's surgical approach centers on meticulous pre-operative planning, minimal access methodologies, and multidisciplinary coordination to optimize patient survival, shorten hospital stays, and enhance postoperative quality of life.
                        </p>

                        {/* Three Pillars Cards */}
                        <div className="mt-6 space-y-4">
                            {surgicalPillars.map((pillar, pIdx) => (
                                <div 
                                    key={pIdx}
                                    className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[var(--acc-3)]/10 flex items-center justify-center flex-shrink-0 text-[var(--acc-3)] mt-0.5">
                                        <MaskImage w="1.2em" h="1.2em" url="/icons/cir.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--acc-3)] bg-blue-50 px-2 py-0.5 rounded">
                                                {pillar.tag}
                                            </span>
                                            <h4 className="font-bold text-sm sm:text-base text-[var(--t-c-d)]">
                                                {pillar.title}
                                            </h4>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </motion.div>

                </div>

                {/* Qualifications Strip */}
                <motion.div
                    className="mt-16 pt-12 border-t border-slate-200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                        <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-[var(--t-c-d)] font-pt-san">
                                Academic Credentials & Surgical Qualifications
                            </h4>
                            <p className="text-gray-500 text-xs sm:text-sm mt-1">
                                Rigorously trained across Tamil Nadu's premier apex teaching hospitals and national board academies.
                            </p>
                        </div>
                        <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 flex items-center gap-1.5 flex-shrink-0">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Verified Public Registration
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {qualifications.map((q, idx) => (
                            <div 
                                key={idx}
                                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-pt-san font-bold text-lg text-[var(--acc-3)]">
                                            {q.code}
                                        </span>
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                                            {q.year}
                                        </span>
                                    </div>
                                    <h5 className="font-bold text-sm text-[var(--t-c-d)] leading-snug">
                                        {q.degree}
                                    </h5>
                                    <p className="text-xs text-gray-500 mt-2">
                                        {q.institution}
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-[var(--acc-2)] font-medium">
                                    <MaskImage w="1em" h="1em" url="/icons/ex.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                                    <span>Certified Specialisation</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default ClinicalExcellence;
