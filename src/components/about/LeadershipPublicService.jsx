import React from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';

function LeadershipPublicService() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const sources = [
        { name: "Practo Clinical Profile", desc: "Qualifications, MBBS, DNB, M.Ch, TNMC #67377, and SPEED Hospital Practice" },
        { name: "Times of India (2017)", desc: "Reporting on Tamil Nadu Govt partnership with SPEED for 100 NEET centres" },
        { name: "Association of Surgeons of India", desc: "Official announcement listing Dr. Vinayak Senthil as Organising Secretary for ASICON 2018" },
        { name: "The New Indian Express (2024)", desc: "Documented role as President of the Rotary Club of Chennai Medical Fraternity" },
        { name: "Velammal Medical College (2023)", desc: "Guest lecture and masterclass on competitive medical exam mindset and strategy" },
        { name: "Medusane National Webinar (2025)", desc: "National address on 'How to Approach NEET-PG and INI-CET' as SPEED MD & Founder" }
    ];

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden bg-[#F8FAFC]">
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
                        Professional Leadership & Community Impact
                    </div>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--t-c-d)] font-pt-san leading-tight">
                        Beyond The Classroom: <span className="t-g-1">Service & Governance</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                        Extending medical expertise into community healthcare philanthropy, national surgical conferences, and doctor empowerment across India.
                    </p>
                    <div className="mt-3">
                        <MaskImage w="140px" h="12px" url="/com/2.png" bg="var(--acc-3)" hBg="" c="" hL="1" />
                    </div>
                </motion.div>

                {/* Two Featured Leadership Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    
                    {/* Card 1: Rotary Club Presidency */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_10px_35px_rgba(0,32,59,0.06)] flex flex-col justify-between relative overflow-hidden group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform" />
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-wider border border-amber-200">
                                    Community Service • 2024
                                </span>
                                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                                    <MaskImage w="1.5em" h="1.5em" url="/icons/user-1.svg" bg="#D97706" hBg="" c="" hL="1" />
                                </div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--t-c-d)] font-pt-san leading-snug">
                                President, Rotary Club of Chennai Medical Fraternity
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                                Documented by <em>The New Indian Express</em> at the Doctors Award Ceremony in Chennai. Under Dr. Vinayak Senthil's presidency, the club prioritized preventive cardiovascular health screenings, rural health camps, medical education scholarships, and recognizing tireless frontline healthcare workers.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500 font-medium">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            <span>Documented in The New Indian Express (Aug 2024)</span>
                        </div>
                    </motion.div>

                    {/* Card 2: ASICON 2018 Organizing Secretary */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_10px_35px_rgba(0,32,59,0.06)] flex flex-col justify-between relative overflow-hidden group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform" />
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[var(--acc-3)] font-bold text-xs uppercase tracking-wider border border-blue-200">
                                    National Surgical Leadership • 2018
                                </span>
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[var(--acc-3)]">
                                    <MaskImage w="1.5em" h="1.5em" url="/surgery/h-s.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                                </div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--t-c-d)] font-pt-san leading-snug">
                                Organising Secretary, ASICON 2018 Chennai
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                                Entrusted with the operational and academic execution of the 78th Annual Conference of the Association of Surgeons of India (ASI) in Chennai — one of India's largest surgical gatherings, uniting thousands of operative surgeons, researchers, and global faculty.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500 font-medium">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span>Association of Surgeons of India Official Archives</span>
                        </div>
                    </motion.div>

                </div>

                {/* Research Sources & Transparency Standards Card */}
                <motion.div
                    className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                        <div>
                            <h4 className="font-pt-san font-bold text-lg sm:text-xl text-[var(--t-c-d)]">
                                Documented Public Sources & Editorial Standards
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                This high-end profile strictly adheres to public medical council records, indexed publications, and verified organizational archives.
                            </p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 w-max">
                            <MaskImage w="1em" h="1em" url="/icons/about.svg" bg="#475569" hBg="" c="" hL="1" />
                            Research Integrity
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {sources.map((src, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-100 flex items-start gap-3">
                                <span className="w-6 h-6 rounded-lg bg-blue-100 text-[var(--acc-3)] font-bold text-xs flex items-center justify-center flex-shrink-0">
                                    {idx + 1}
                                </span>
                                <div>
                                    <h5 className="font-bold text-xs text-[var(--t-c-d)]">{src.name}</h5>
                                    <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">{src.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default LeadershipPublicService;
