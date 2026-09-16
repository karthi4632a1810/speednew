import React from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';

function MedicalVillage() {
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

    const villagePillars = [
        {
            title: "Live",
            label: "RESIDENTIAL ROUTINE",
            desc: "A distraction-free, healthy circadian routine with disciplined sleep, wellness, and dedicated preparation blocks that eliminate burnout.",
            icon: "/icons/home.svg",
            accent: "from-blue-500 to-cyan-500"
        },
        {
            title: "Learn",
            label: "STRUCTURED ACADEMICS",
            desc: "24/7 air-conditioned library, tech-enabled digital classrooms, simulated test centers, and constant faculty access for instant doubt clearance.",
            icon: "/icons/course.svg",
            accent: "from-indigo-500 to-blue-600"
        },
        {
            title: "Serve",
            label: "PROFESSIONAL PURPOSE",
            desc: "Inculcating physician ethics, empathy, patient responsibility, and clinical awareness alongside competitive exam mastery.",
            icon: "/surgery/h-s.svg",
            accent: "from-teal-500 to-emerald-500"
        },
        {
            title: "Belong",
            label: "PEER COMMUNITY",
            desc: "Surrounded by fellow high-drive medical aspirants. Peer discussions, shared discipline, and an uplifting collective culture of success.",
            icon: "/icons/user-1.svg",
            accent: "from-sky-500 to-indigo-500"
        }
    ];

    return (
        <section id="village" className="py-20 lg:py-28 relative overflow-hidden bg-white">
            {/* Background elements */}
            <div className="absolute top-10 right-10 w-96 h-96 bg-[#2AD2C1]/10 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                
                {/* Header Tag */}
                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBFBF7] text-[#00897B] font-semibold text-xs tracking-wider uppercase shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#2AD2C1]"></span>
                        Section III • Residential Preparation Ecosystem
                    </div>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--t-c-d)] font-pt-san leading-tight">
                        SPEED Medical Village: <span className="text-[var(--acc-3)]">Environment Shapes Consistency</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                        A groundbreaking 125-acre eco-friendly residential learning campus in Kanchipuram engineered to remove distractions and foster peak academic accountability.
                    </p>
                    <div className="mt-3">
                        <MaskImage w="140px" h="12px" url="/com/1.png" bg="var(--acc-3)" hBg="" c="" hL="1" />
                    </div>
                </motion.div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center mt-16">
                    
                    {/* Left Column: Visual Artwork from PDF */}
                    <motion.div
                        className="col-span-12 lg:col-span-6 relative order-2 lg:order-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeLeft}
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group relative">
                            <img 
                                src="/profile-assets/img_63.png" 
                                alt="SPEED Medical Village 125-Acre Eco-Friendly Campus Concept" 
                                className="w-full h-auto max-h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                            />
                            {/* Full Dark Gradient Scrim */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001020] via-[#001830]/80 to-transparent pointer-events-none" />

                            {/* Floating Metric Card at Top Left */}
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-100 max-w-[220px] z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                                        <MaskImage w="1.3em" h="1.3em" url="/icons/calender.svg" bg="#00897B" hBg="" c="" hL="1" />
                                    </div>
                                    <div>
                                        <span className="text-lg font-bold text-[var(--t-c-d)] font-pt-san block leading-none">24/7 Access</span>
                                        <span className="text-[10px] text-gray-500 font-medium">Study Hall & Library</span>
                                    </div>
                                </div>
                            </div>

                            {/* Prominent High-Contrast Card Panel */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-5 sm:p-6 rounded-2xl bg-[#001529]/95 backdrop-blur-xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] text-white z-10">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-[#2AD2C1] text-slate-900 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                                        125-Acre Eco-Friendly Campus
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[var(--acc-1)] text-[11px] font-semibold backdrop-blur-sm">
                                        Kanchipuram, TN
                                    </span>
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold font-pt-san text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    SPEED Medical Village
                                </h4>
                                <p className="text-slate-200 text-xs sm:text-sm mt-1.5 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                    Modern classrooms, residential hostel suites, 24/7 air-conditioned study hall, and immersive preparation in nature.
                                </p>
                                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                                    <span>Residential Routine</span>
                                    <span className="text-[#2AD2C1] font-semibold">Live • Learn • Serve • Belong</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Strategic Philosophy & Routine */}
                    <motion.div
                        className="col-span-12 lg:col-span-6 flex flex-col justify-center order-1 lg:order-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeRight}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--acc-3)]">
                            Beyond The Classroom
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--t-c-d)] font-pt-san mt-2 leading-snug">
                            Turning High-Stakes Preparation into an Immersive Habitat
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                            The strategic concept behind SPEED Medical Village transcends conventional hostels or libraries: it systematically addresses the core obstacles to medical success — digital distractions, isolation, irregular routines, and unmonitored preparation.
                        </p>

                        {/* High-End Quote from PDF */}
                        <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100/80">
                            <p className="font-pridi text-sm sm:text-base italic text-[var(--acc-2)] leading-relaxed">
                                "SPEED Medical Village extends mentorship beyond the classroom — combining structured academics, disciplined routine, and an uplifting peer community in one immersive residential setting."
                            </p>
                            <span className="block mt-2 text-xs font-bold text-[var(--acc-3)] uppercase tracking-wider">
                                — Dr. K. Vinayak Senthil
                            </span>
                        </div>

                        {/* Village Stats Row */}
                        <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-200">
                            <div className="text-center p-3 rounded-xl bg-slate-50">
                                <span className="block font-bold text-lg sm:text-xl text-[var(--acc-3)] font-pt-san">125 Acres</span>
                                <span className="text-[11px] text-gray-500">Green Campus</span>
                            </div>
                            <div className="text-center p-3 rounded-xl bg-slate-50">
                                <span className="block font-bold text-lg sm:text-xl text-[var(--acc-3)] font-pt-san">24/7</span>
                                <span className="text-[11px] text-gray-500">Monitored Study</span>
                            </div>
                            <div className="text-center p-3 rounded-xl bg-slate-50">
                                <span className="block font-bold text-lg sm:text-xl text-[var(--acc-3)] font-pt-san">100%</span>
                                <span className="text-[11px] text-gray-500">Distraction-Free</span>
                            </div>
                        </div>

                    </motion.div>

                </div>

                {/* The 4 Rhythms (Live, Learn, Serve, Belong) */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    {villagePillars.map((item, idx) => (
                        <div 
                            key={idx}
                            className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#F0F5FE] flex items-center justify-center text-[var(--acc-3)] group-hover:bg-[var(--acc-3)] transition-colors">
                                        <MaskImage w="1.5em" h="1.5em" url={item.icon} bg="var(--acc-3)" hBg="#ffffff" c="duration-300 group-hover-white group-hover:!bg-white" hL="group" />
                                    </div>
                                    <span className="font-pt-san font-bold text-2xl text-slate-200 group-hover:text-[var(--acc-1)] transition-colors">
                                        0{idx + 1}
                                    </span>
                                </div>
                                <h4 className="font-bold text-xl text-[var(--t-c-d)] font-pt-san">
                                    {item.title}
                                </h4>
                                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[var(--acc-3)] bg-blue-50 px-2 py-0.5 rounded mt-1 mb-3">
                                    {item.label}
                                </span>
                                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                            <div className={`mt-5 h-1 w-full rounded-full bg-gradient-to-r ${item.accent} opacity-80`} />
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default MedicalVillage;
