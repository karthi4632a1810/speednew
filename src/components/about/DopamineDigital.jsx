import React from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';

function DopamineDigital() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const digitalFeatures = [
        {
            title: "CBME-Based Curriculum",
            desc: "Aligned with the Competency-Based Medical Education directives, uniting preclinical basics with bedside clinical practice.",
            icon: "/icons/course.svg"
        },
        {
            title: "Interactive High-Yield Q-Bank",
            desc: "Comprehensive question banks with detailed rationale explanations, clinical pearls, and high-frequency exam concepts.",
            icon: "/icons/star.svg"
        },
        {
            title: "'Jewel of the Day' Surgical Videos",
            desc: "YouTube and in-app surgical masterclasses breaking down complex operative steps and clinical diagnostics into bite-sized lessons.",
            icon: "/icons/play.svg"
        },
        {
            title: "1-to-1 Mentorship & Strategy",
            desc: "Direct guidance on prioritization, revision cycles, mock exam analysis, and overcoming exam fatigue.",
            icon: "/icons/user-1.svg"
        }
    ];

    return (
        <section id="digital" className="py-20 lg:py-28 relative overflow-hidden bg-[#F8FAFC]">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                
                {/* Header Tag */}
                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[var(--acc-3)] font-semibold text-xs tracking-wider uppercase shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[var(--acc-1)]"></span>
                        Section IV • Digital Medical Education
                    </div>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--t-c-d)] font-pt-san leading-tight">
                        DOPAMINE: <span className="t-g-1">Concept-Based Learning & Mentorship</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                        A nationwide digital ecosystem for MBBS students and NEET-PG, INI-CET, and FMGE aspirants, democratizing world-class medical mentorship anytime, anywhere.
                    </p>
                    <div className="mt-3">
                        <MaskImage w="140px" h="12px" url="/com/2.png" bg="var(--acc-3)" hBg="" c="" hL="1" />
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center mt-16">
                    
                    {/* Left Column: Mission Narrative & Features */}
                    <motion.div
                        className="col-span-12 lg:col-span-6 flex flex-col justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--acc-3)]">
                            The Mentor's Vision
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--t-c-d)] font-pt-san mt-2 leading-snug">
                            Empowering Doctors to Overcome Obstacles with Clarity and Strategy
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                            DOPAMINE positions Dr. Vinayak Senthil as its core mentor. His own postgraduate preparation journey and early hurdles inspired a lifelong commitment: ensuring aspiring physicians avoid wasted years, expensive missteps, and psychological strain through structured guidance.
                        </p>

                        {/* Features 2x2 Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {digitalFeatures.map((feat, fIdx) => (
                                <div key={fIdx} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[var(--acc-3)] mb-2">
                                            <MaskImage w="1.1em" h="1.1em" url={feat.icon} bg="var(--acc-3)" hBg="" c="" hL="1" />
                                        </div>
                                        <h4 className="font-bold text-sm text-[var(--t-c-d)]">
                                            {feat.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                            {feat.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* App Download Links & Official Web Portal */}
                        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <a 
                                    href="https://dopaminemed.com/index" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-105"
                                >
                                    <span>Visit dopaminemed.com</span>
                                    <span>↗</span>
                                </a>
                                <a 
                                    href="https://dopaminemed.com/residential-neet-pg-inicet-pg-fmge/" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-purple-300 text-slate-700 font-semibold text-xs transition-colors"
                                >
                                    <span>Residential Retreat</span>
                                </a>
                            </div>

                            <div className="flex gap-2 items-center">
                                <span className="text-[11px] font-semibold text-gray-400">Apps:</span>
                                <div className="h-8 shadow-sm hover:scale-105 transition-transform cursor-pointer">
                                    <img className="h-full" src="/app/google-l.svg" alt="Google Play" />
                                </div>
                                <div className="h-8 shadow-sm hover:scale-105 transition-transform cursor-pointer">
                                    <img className="h-full" src="/app/apple-l.svg" alt="App Store" />
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column: PDF Section Artwork */}
                    <motion.div
                        className="col-span-12 lg:col-span-6 relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeRight}
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group relative">
                            <img 
                                src="/profile-assets/img_64.png" 
                                alt="DOPAMINE Digital Medical Education Visual Concept" 
                                className="w-full h-auto max-h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                            />
                            {/* Full Dark Gradient Scrim */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001020] via-[#001830]/80 to-transparent pointer-events-none" />

                            {/* Floating Impact Card at Top Left */}
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-100 max-w-[220px] z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-[var(--acc-3)]">
                                        <MaskImage w="1.3em" h="1.3em" url="/icons/user-1.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                                    </div>
                                    <div>
                                        <span className="text-lg font-bold text-[var(--t-c-d)] font-pt-san block leading-none">3.5 Lakh+</span>
                                        <span className="text-[10px] text-gray-500 font-medium">Doctors Mentored</span>
                                    </div>
                                </div>
                            </div>

                            {/* Prominent High-Contrast Card Panel */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-5 sm:p-6 rounded-2xl bg-[#001529]/95 backdrop-blur-xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] text-white z-10">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 rounded-full bg-[var(--acc-1)] text-slate-900 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                                            Digital Learning Ecosystem
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[var(--acc-1)] text-[11px] font-semibold backdrop-blur-sm">
                                            Mobile & Web
                                        </span>
                                    </div>
                                    <a
                                        href="https://dopaminemed.com/index"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[11px] font-bold text-[var(--acc-1)] hover:underline flex items-center gap-1"
                                    >
                                        <span>dopaminemed.com</span>
                                        <span>↗</span>
                                    </a>
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold font-pt-san text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    DOPAMINE Learning Platform
                                </h4>
                                <p className="text-slate-200 text-xs sm:text-sm mt-1.5 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                    Interactive Q-banks, CBME-based curriculum, grand tests, and surgery video discussions for medical students nationwide.
                                </p>
                                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                                    <span>The Joy of Medicine</span>
                                    <span className="text-[var(--acc-1)] font-semibold">3.5L+ Doctors Trained</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Social Footprint Strip */}
                <motion.div
                    className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <a 
                        href="https://www.youtube.com/@SpeedLearningApp" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                            <MaskImage w="1.2em" h="1.2em" url="/icons/youtube.svg" bg="#FF0000" hBg="" c="group-hover:bg-white" hL="1" />
                        </div>
                        <div>
                            <h5 className="font-bold text-xs sm:text-sm text-[var(--t-c-d)] group-hover:text-red-600 transition-colors">YouTube Masterclasses ↗</h5>
                            <p className="text-[11px] text-gray-500">Surgery cases & strategy</p>
                        </div>
                    </a>
                    <a 
                        href="https://www.linkedin.com/company/speed-medical-centre/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                            <MaskImage w="1.2em" h="1.2em" url="/icons/linkedin.svg" bg="#0A66C2" hBg="" c="group-hover:bg-white" hL="1" />
                        </div>
                        <div>
                            <h5 className="font-bold text-xs sm:text-sm text-[var(--t-c-d)] group-hover:text-[#0A66C2] transition-colors">SPEED Medical Centre ↗</h5>
                            <p className="text-[11px] text-gray-500">Official LinkedIn network</p>
                        </div>
                    </a>
                    <a 
                        href="https://www.facebook.com/speedlearningapp/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1877F2] flex items-center justify-center font-bold text-sm group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                            <MaskImage w="1.2em" h="1.2em" url="/icons/facebook.svg" bg="#1877F2" hBg="" c="group-hover:bg-white" hL="1" />
                        </div>
                        <div>
                            <h5 className="font-bold text-xs sm:text-sm text-[var(--t-c-d)] group-hover:text-[#1877F2] transition-colors">Facebook Community ↗</h5>
                            <p className="text-[11px] text-gray-500">Live sessions & updates</p>
                        </div>
                    </a>
                    <a 
                        href="https://wa.me/919840077508" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center font-bold text-sm group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                            <MaskImage w="1.2em" h="1.2em" url="/icons/whatsapp.svg" bg="#25D366" hBg="" c="group-hover:bg-white" hL="1" />
                        </div>
                        <div>
                            <h5 className="font-bold text-xs sm:text-sm text-[var(--t-c-d)] group-hover:text-[#25D366] transition-colors">Official WhatsApp ↗</h5>
                            <p className="text-[11px] text-gray-500">+91 98400 77508</p>
                        </div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

export default DopamineDigital;
