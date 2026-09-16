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
            anchor: "#clinical"
        },
        {
            number: "02",
            title: "Medical Educator",
            subtitle: "Founder, SPEED Medical Institute",
            badge: "Academic Leadership",
            icon: "/icons/course.svg",
            gradient: "from-[#134175] to-[#1E2D52]",
            description: "Pioneered structured coaching systems for NEET-PG, INI-CET, FMGE, and NEET-SS since founding SPEED Medical Institute in 2002.",
            points: [
                "23+ years training postgraduate aspirants",
                "100 NEET instruction centres with Tamil Nadu Govt (2017)",
                "5-point educational signature linking theory to practice"
            ],
            anchor: "#education"
        },
        {
            number: "03",
            title: "Ecosystem Builder",
            subtitle: "SPEED Medical Village",
            badge: "Immersive Learning",
            icon: "/icons/home.svg",
            gradient: "from-[#046BC0] to-[#2AD2C1]",
            description: "Translating educational philosophy into physical reality: a 125-acre eco-friendly residential medical learning campus in Kanchipuram.",
            points: [
                "High-accountability, distraction-free environment",
                "24/7 air-conditioned study hall and modern labs",
                "Holistic routine balancing academics, wellness & peers"
            ],
            anchor: "#village"
        },
        {
            number: "04",
            title: "Digital Innovator",
            subtitle: "Mentor, DOPAMINE Learning App",
            badge: "Digital Medical Education",
            icon: "/icons/ai.svg",
            gradient: "from-[#6D7FF7] to-[#68C6F4]",
            description: "Empowering hundreds of thousands of medical students through DOPAMINE's CBME-integrated platform, interactive Q-banks, and video recall sessions.",
            points: [
                "3.5 Lakh+ doctors trained across platforms",
                "High-yield 'Jewel of the Day' surgery clinical videos",
                "Personalized mentorship focused on mindset and strategy"
            ],
            anchor: "#digital"
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
                        A career positioned at the high-impact convergence of clinical patient care, structured medical coaching, immersive residential ecosystems, and modern digital healthcare education.
                    </p>
                    <div className="mt-3">
                        <MaskImage w="120px" h="12px" url="/com/2.png" bg="var(--acc-3)" hBg="" c="" hL="1" />
                    </div>
                </motion.div>

                {/* 4 Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,32,59,0.06)] border border-slate-100 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
                        >
                            {/* Top decorative gradient bar */}
                            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.gradient}`} />

                            <div>
                                {/* Header Row */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#0058A1]/10 flex items-center justify-center group-hover:bg-[var(--acc-3)] transition-colors duration-300">
                                        <MaskImage w="1.6em" h="1.6em" url={pillar.icon} bg="var(--acc-3)" hBg="#ffffff" c="duration-300 group-hover-white group-hover:!bg-white" hL="group" />
                                    </div>
                                    <span className="font-pt-san font-bold text-3xl text-slate-200 group-hover:text-[var(--acc-1)] transition-colors duration-300">
                                        {pillar.number}
                                    </span>
                                </div>

                                {/* Badge */}
                                <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-blue-50 text-[var(--acc-3)] mb-3">
                                    {pillar.badge}
                                </span>

                                {/* Titles */}
                                <h3 className="text-xl font-bold text-[var(--t-c-d)] font-pt-san leading-snug group-hover:text-[var(--acc-3)] transition-colors">
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

                            {/* Card Action Link */}
                            <div className="mt-6 pt-3">
                                <a 
                                    href={pillar.anchor} 
                                    className="inline-flex items-center gap-2 text-xs font-bold text-[var(--acc-3)] group-hover:text-[var(--acc-2)] group-hover:translate-x-1 transition-all"
                                >
                                    <span>Explore Section</span>
                                    <span>→</span>
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
