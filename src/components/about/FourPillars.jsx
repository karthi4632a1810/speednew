import React from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';

function FourPillars() {
    const fadeUpHeader = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const pillars = [
        {
            number: "01",
            title: "Cardiothoracic Surgeon",
            subtitle: "Clinical Care at SPEED Hospital",
            badge: "Surgical Mastery",
            icon: "/surgery/h-s.svg",
            gradient: "from-[#0058A1] to-[#046BC0]",
            description: "Rooted in precision, safety, and patient-centred cardiothoracic & vascular surgical care at SPEED Multi Speciality Hospital in Mangadu, Chennai.",
            points: [
                "Complex coronary artery bypass grafting (CABG)",
                "Minimally invasive & valve repair procedures",
                "Multidisciplinary teamwork & evidence-based protocols"
            ],
            anchor: "#clinical",
            externalUrl: "https://speedhospitals.com/",
            externalLabel: "Visit SPEED Hospital"
        },
        {
            number: "02",
            title: "Medical Educator & Founder",
            subtitle: "SPEED Medical Institute & Learning App",
            badge: "⚡ FLAGSHIP #1 • 35,000+ DM/MCh SELECTIONS",
            icon: "/icons/course.svg",
            gradient: "from-[#002B49] to-[#046BC0]",
            description: "Pioneered structured super-specialty coaching since 2002. Creator of the Speed Learning App, India's undisputed leader for DM & MCh entrance preparation.",
            points: [
                "25+ years mentoring postgraduate aspirants",
                "Speed Learning App: India's #1 NEET SS Training App",
                "35,000+ Super-Specialty DM & MCh selections nationwide"
            ],
            anchor: "#education",
            externalUrl: "https://speedlearningapp.com/",
            externalLabel: "Open Speed Learning App"
        },
        {
            number: "03",
            title: "Ecosystem Builder",
            subtitle: "SPEED Medical Village (125 Acres)",
            badge: "125-Acre Retreat Sanctuary",
            icon: "/icons/home.svg",
            gradient: "from-[#046BC0] to-[#2AD2C1]",
            description: "Translating educational philosophy into physical reality: a 125-acre eco-friendly residential medical campus in Kanchipuram eliminating digital burnout.",
            points: [
                "Exclusive home to India’s First Dopamine Residential Retreat (CMR 2.0)",
                "24/7 monitored study halls, organic food & serene environment",
                "Holistic daily rhythm balancing academics, yoga & peer growth"
            ],
            anchor: "#village",
            externalUrl: "https://dopaminemed.com/residential-neet-pg-inicet-pg-fmge/",
            externalLabel: "Dopamine Retreat (CMR 2.0)"
        },
        {
            number: "04",
            title: "Digital Pioneer & Mentor",
            subtitle: "DOPAMINE Medical Learning App",
            badge: "🧬 FLAGSHIP #2 • THE JOY OF MEDICINE",
            icon: "/icons/ai.svg",
            gradient: "from-[#4C1D95] to-[#7C3AED]",
            description: "Revolutionizing undergraduate and postgraduate medical preparation through DOPAMINE's CBME-integrated platform, interactive Q-Banks, and direct faculty mentorship.",
            points: [
                "3.5 Lakh+ doctors trained across platforms",
                "The Joy of Medicine for MBBS, NEET PG, INICET & FMGE",
                "Direct mentorship with Dr. Vinayak Senthil & elite faculty"
            ],
            anchor: "#digital",
            externalUrl: "https://dopaminemed.com/index",
            externalLabel: "Explore DOPAMINE App"
        }
    ];

    return (
        <section id="four-pillars" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                
                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUpHeader}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4FE] text-[var(--acc-3)] font-semibold text-xs tracking-wider uppercase shadow-sm">
                        <MaskImage w="1em" h="1em" url="/icons/star.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                        Executive Profile Architecture
                    </div>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--t-c-d)] font-pt-san leading-tight">
                        The Four Connected Pillars of <span className="t-g-1">Dr. Vinayak Senthil</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                        An interconnected leadership ecosystem uniting hospital surgical care, nationwide medical competitive coaching, immersive residential preparation, and scalable digital edtech.
                    </p>
                    <div className="mt-3">
                        <MaskImage w="140px" h="12px" url="/com/1.png" bg="var(--acc-3)" hBg="" c="" hL="1" />
                    </div>
                </motion.div>

                {/* Four Cards Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                        >
                            {/* Card Accent Top Bar */}
                            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.gradient}`} />

                            <div>
                                {/* Number & Icon Header */}
                                <div className="flex items-center justify-between mb-5 pt-1">
                                    <span className="font-pt-san font-extrabold text-2xl sm:text-3xl text-slate-200 group-hover:text-[var(--acc-3)] transition-colors">
                                        {pillar.number}
                                    </span>
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50/80 flex items-center justify-center text-[var(--acc-3)] group-hover:bg-[var(--acc-3)] transition-colors">
                                        <MaskImage w="1.4em" h="1.4em" url={pillar.icon} bg="var(--acc-3)" hBg="#ffffff" c="duration-300 group-hover:!bg-white" hL="group" />
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[var(--acc-3)] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2.5">
                                    {pillar.badge}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold font-pt-san text-[var(--t-c-d)] leading-tight">
                                    {pillar.title}
                                </h3>
                                <p className="text-xs font-semibold text-[var(--acc-2)]/80 mt-1">
                                    {pillar.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mt-3.5 pb-4 border-b border-slate-100">
                                    {pillar.description}
                                </p>

                                {/* Key Points */}
                                <ul className="mt-4 space-y-2 text-xs text-slate-700">
                                    {pillar.points.map((pt, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--acc-3)] mt-1.5 flex-shrink-0" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card Action Links: In-page + Direct External Link */}
                            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                                <a 
                                    href={pillar.externalUrl} 
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-[var(--acc-3)] text-white text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                                >
                                    <span>{pillar.externalLabel}</span>
                                    <span>↗</span>
                                </a>
                                <a 
                                    href={pillar.anchor} 
                                    className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[var(--acc-3)] transition-colors py-1"
                                >
                                    <span>Read Details</span>
                                    <span>↓</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Quote Banner */}
                <motion.div
                    className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[var(--acc-6)] via-[var(--acc-2)] to-[var(--acc-3)] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpHeader}
                >
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                            <MaskImage w="2em" h="2em" url="/icons/quote.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                        </div>
                        <div>
                            <p className="font-pridi text-base sm:text-lg italic leading-relaxed text-white/95">
                                "A profile defined by the intersection of patient care, teaching, mentoring, and building durable learning systems for doctors."
                            </p>
                            <p className="text-xs uppercase tracking-widest text-[var(--acc-1)] font-semibold mt-1">
                                Executive Narrative • High-End Profile 2026
                            </p>
                        </div>
                    </div>
                    <a 
                        href="#milestones"
                        className="flex-shrink-0 px-6 py-3 rounded-full bg-white text-[var(--acc-2)] font-bold text-xs uppercase tracking-wider hover:bg-[var(--acc-1)] hover:text-white transition-all shadow-md"
                    >
                        View Timeline
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

export default FourPillars;
