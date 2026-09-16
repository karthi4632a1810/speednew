import React from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';

function SpeedInstitute() {
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

    const educationalSignature = [
        {
            letter: "C",
            title: "Concept Clarity",
            subtitle: "Understanding Before Memorisation",
            desc: "Deconstructs dense medical pathophysiology into intuitive, first-principles clinical concepts that stick under exam pressure."
        },
        {
            letter: "S",
            title: "Exam Strategy",
            subtitle: "Pattern Awareness & Prioritisation",
            desc: "Tactical guidance on question weightage, negative marking mitigation, high-yield topics, and disciplined time management."
        },
        {
            letter: "M",
            title: "Holistic Mentorship",
            subtitle: "Mindset, Consistency & Resilience",
            desc: "One-to-one encouragement to overcome prep fatigue, build psychological resilience, and sustain peak exam focus."
        },
        {
            letter: "T",
            title: "Active Testing",
            subtitle: "Spaced Recall & Feedback Loops",
            desc: "High-yield MCQ marathons, recall sessions, and analytics-driven mock tests that identify precision knowledge gaps."
        },
        {
            letter: "A",
            title: "Clinical Application",
            subtitle: "Bedside to Boardroom Thinking",
            desc: "Directly bridges textbook surgical theory with real hospital ward scenarios, making learning inherently engaging."
        }
    ];

    return (
        <section id="education" className="py-20 lg:py-28 relative overflow-hidden bg-[#F8FAFC]">
            {/* Ambient gradients */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                
                {/* Header Tag */}
                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4FE] text-[var(--acc-3)] font-semibold text-xs tracking-wider uppercase shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[var(--acc-3)]"></span>
                        Section II • Medical Education Leadership
                    </div>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--t-c-d)] font-pt-san leading-tight">
                        SPEED Medical Institute: <span className="t-g-1">Direction & Discipline</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                        Founded in 2002, SPEED Medical Institute has redefined postgraduate and super-specialty medical training through structured learning systems rather than raw content delivery.
                    </p>
                    <div className="mt-3">
                        <MaskImage w="140px" h="12px" url="/com/2.png" bg="var(--acc-3)" hBg="" c="" hL="1" />
                    </div>
                </motion.div>

                {/* Content Split: Left Text / Stats & Right Visual */}
                <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center mt-16">
                    
                    {/* Left Column: Educational Legacy & TN Govt Partnership */}
                    <motion.div
                        className="col-span-12 lg:col-span-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--acc-3)]">
                            23+ Years of Academic Excellence
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--t-c-d)] font-pt-san mt-2 leading-snug">
                            Transforming Medical Exam Preparation into a Predictable Science
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                            Dr. Vinayak Senthil recognized early on that aspiring doctors struggle not from lack of talent, but from fragmented resources, burnout, and lack of tactical direction. Under his leadership as Founder and Managing Director, SPEED developed an integrated curriculum covering NEET-PG, INI-CET, FMGE, and NEET-SS.
                        </p>

                        {/* Highlight Box: TN Govt NEET Initiative */}
                        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[var(--acc-3)] to-[#2AD2C1]" />
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2.5 py-0.5 rounded bg-blue-100 text-[var(--acc-3)] text-[11px] font-bold uppercase">
                                    Documented Milestone • 2017
                                </span>
                                <span className="text-xs text-gray-400 font-medium">Times of India Reported</span>
                            </div>
                            <h4 className="font-bold text-base text-[var(--t-c-d)]">
                                100 Government NEET Instruction Centres Across Tamil Nadu
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                                In 2017, the Tamil Nadu Government partnered with SPEED Medical Institute to deliver state-wide NEET coaching via interactive VSAT video links to students across 100 centers, democratizing access for thousands of rural aspirants.
                            </p>
                        </div>

                        {/* Highlight 2: Velammal Guest Lecture */}
                        <div className="mt-4 p-4 rounded-xl bg-white/70 border border-slate-200 flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-[var(--acc-2)]/10 flex items-center justify-center flex-shrink-0">
                                <MaskImage w="1.3em" h="1.3em" url="/icons/blog.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                            </div>
                            <div className="text-xs sm:text-sm text-gray-700">
                                <strong className="text-[var(--acc-2)]">Velammal Medical College (2023):</strong> Invited guest lecture on competitive exam sensitization, psychological stamina, and study prioritization.
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
                                src="/profile-assets/img_62.png" 
                                alt="SPEED Medical Institute Academic Campus Visual" 
                                className="w-full h-auto max-h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                            />
                            {/* Full Dark Gradient Scrim */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001020] via-[#001830]/80 to-transparent pointer-events-none" />

                            {/* Prominent High-Contrast Card Panel */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-5 sm:p-6 rounded-2xl bg-[#001529]/95 backdrop-blur-xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] text-white z-10">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-[var(--acc-3)] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                                        Established 2002 • Chennai
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[var(--acc-1)] text-[11px] font-semibold backdrop-blur-sm">
                                        Headquarters
                                    </span>
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold font-pt-san text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    SPEED Medical Institute
                                </h4>
                                <p className="text-slate-200 text-xs sm:text-sm mt-1.5 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                    Pioneering structured medical postgraduate (NEET-PG / INI-CET) and super-specialty mentorship across India.
                                </p>
                                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                                    <span>Founded & Led by <strong>Dr. Vinayak Senthil</strong></span>
                                    <span className="text-[var(--acc-1)] font-semibold">23+ Yrs Excellence</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* The 5-Point Educational Signature */}
                <motion.div
                    className="mt-20 pt-12 border-t border-slate-200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--acc-3)]">
                            The SPEED Pedagogical Framework
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--t-c-d)] font-pt-san mt-1">
                            The 5-Point Educational Signature
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm mt-2">
                            A systematic blueprint engineered to guide medical aspirants from foundational clarity to rank-winning exam performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
                        {educationalSignature.map((item, idx) => (
                            <div 
                                key={idx}
                                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--acc-3)] to-[#2AD2C1] text-white flex items-center justify-center font-pt-san font-bold text-xl shadow-md group-hover:scale-110 transition-transform">
                                        {item.letter}
                                    </div>
                                    <h4 className="font-bold text-base text-[var(--t-c-d)] mt-4 group-hover:text-[var(--acc-3)] transition-colors">
                                        {item.title}
                                    </h4>
                                    <h5 className="text-[11px] font-semibold text-[var(--acc-2)]/80 mt-1">
                                        {item.subtitle}
                                    </h5>
                                    <p className="text-xs text-gray-600 leading-relaxed mt-3">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-gray-400">
                                    <span>Pillar 0{idx + 1}</span>
                                    <span className="text-[var(--acc-3)] font-bold">●</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default SpeedInstitute;
