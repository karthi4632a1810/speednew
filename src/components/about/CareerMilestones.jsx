import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';

function CareerMilestones() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const milestones = [
        {
            year: "2001",
            title: "MBBS & Medical Registration",
            institution: "Kilpauk Medical College, Chennai",
            desc: "Graduated with MBBS from the prestigious Kilpauk Medical College. Officially registered under Tamil Nadu Medical Council (TNMC Reg No: 67377).",
            category: "Clinical Foundation",
            icon: "/icons/about.svg",
            color: "border-blue-500 text-blue-600"
        },
        {
            year: "2002",
            title: "SPEED Medical Institute Founded",
            institution: "Chennai Headquarters",
            desc: "Established SPEED Medical Centre / Institute in Chennai to provide systematic, high-yield coaching and mentorship for postgraduate medical aspirants.",
            category: "Institution Building",
            icon: "/icons/speed.svg",
            color: "border-teal-500 text-teal-600"
        },
        {
            year: "2007",
            title: "DNB in General Surgery",
            institution: "National Board of Examinations",
            desc: "Completed Diplomate of National Board (DNB) in General Surgery, mastering advanced abdominal, trauma, and foundational surgical disciplines.",
            category: "Specialist Training",
            icon: "/surgery/cut.svg",
            color: "border-indigo-500 text-indigo-600"
        },
        {
            year: "2017",
            title: "M.Ch in CTVS & TN Govt Partnership",
            institution: "Madras Medical College & Govt of Tamil Nadu",
            desc: "Earned Magister Chirurgiae (M.Ch) in Cardio Thoracic & Vascular Surgery from Madras Medical College. Concurrently led SPEED's collaboration with the TN Government, powering 100 NEET instruction centers statewide via VSAT.",
            category: "Super-Specialty & Public Impact",
            icon: "/surgery/h-s.svg",
            color: "border-sky-500 text-sky-600"
        },
        {
            year: "2018",
            title: "Organising Secretary, ASICON 2018",
            institution: "Association of Surgeons of India (ASI)",
            desc: "Served as Organising Secretary for ASICON 2018 Chennai — the 78th Annual National Conference of the Association of Surgeons of India, orchestrating surgical symposia for thousands of surgeons nationwide.",
            category: "Fraternity Leadership",
            icon: "/icons/star.svg",
            color: "border-red-500 text-red-600"
        },
        {
            year: "2023",
            title: "Velammal Medical College Keynote",
            institution: "Velammal Medical College",
            desc: "Delivered invited keynote and workshop on NEET-PG sensitisation, exam strategy, mental resilience, and high-yield study protocols for MBBS interns.",
            category: "Academic Mentorship",
            icon: "/icons/blog.svg",
            color: "border-blue-500 text-blue-600"
        },
        {
            year: "2024",
            title: "President, Rotary Club Chennai Medical Fraternity",
            institution: "Rotary International (RCCMF)",
            desc: "Installed as President of the Rotary Club of Chennai Medical Fraternity, spearheading community wellness initiatives, free health screenings, and honoring healthcare workers.",
            category: "Community Service",
            icon: "/icons/user-1.svg",
            color: "border-amber-500 text-amber-600"
        },
        {
            year: "2025-26",
            title: "SPEED Medical Village & DOPAMINE Expansion",
            institution: "Kanchipuram & National Reach",
            desc: "Expanded SPEED Medical Village across 125 acres in Kanchipuram and scaled DOPAMINE nationwide, integrating CBME curriculum, Q-banks, and surgical case studies.",
            category: "Future Horizon",
            icon: "/icons/ai.svg",
            color: "border-cyan-500 text-cyan-600"
        }
    ];

    const [activeFilter, setActiveFilter] = useState("All");
    const categories = ["All", "Clinical Foundation", "Institution Building", "Specialist Training", "Super-Specialty & Public Impact", "Fraternity Leadership", "Community Service"];

    const filteredMilestones = activeFilter === "All" 
        ? milestones 
        : milestones.filter(m => m.category.includes(activeFilter) || activeFilter.includes(m.category));

    return (
        <section id="milestones" className="py-20 lg:py-28 relative overflow-hidden bg-white">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                
                {/* Header Tag */}
                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F5FE] text-[var(--acc-3)] font-semibold text-xs tracking-wider uppercase shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[var(--acc-7)]"></span>
                        Chronological Trajectory
                    </div>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--t-c-d)] font-pt-san leading-tight">
                        Leadership, Milestones & <span className="text-[var(--acc-3)]">Public Service</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                        A continuous quarter-century journey of professional advancement, surgical excellence, community leadership, and healthcare institution building.
                    </p>
                    <div className="mt-3">
                        <MaskImage w="140px" h="12px" url="/com/1.png" bg="var(--acc-3)" hBg="" c="" hL="1" />
                    </div>
                </motion.div>

                {/* Timeline Component */}
                <div className="relative mt-16 max-w-5xl mx-auto">
                    {/* Vertical timeline center line */}
                    <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[var(--acc-3)] via-[#2AD2C1] to-[var(--acc-6)] -translate-x-1/2 rounded-full hidden sm:block" />

                    <div className="space-y-8 sm:space-y-12">
                        {milestones.map((m, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div 
                                    key={idx}
                                    className="relative flex flex-col sm:flex-row items-center"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={fadeUp}
                                >
                                    {/* Left Side (Desktop) */}
                                    <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12 sm:text-left'} pl-12 sm:pl-0`}>
                                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                            <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-[var(--acc-3)]">
                                                    {m.category}
                                                </span>
                                            </div>
                                            <h3 className="font-pt-san font-bold text-lg sm:text-xl text-[var(--t-c-d)] group-hover:text-[var(--acc-3)] transition-colors">
                                                {m.title}
                                            </h3>
                                            <p className="text-xs font-semibold text-[var(--acc-2)] mt-0.5">
                                                {m.institution}
                                            </p>
                                            <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mt-2.5">
                                                {m.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Node Badge with Year */}
                                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[var(--acc-3)] shadow-lg flex items-center justify-center z-10">
                                        <MaskImage w="1.2em" h="1.2em" url={m.icon} bg="var(--acc-3)" hBg="" c="" hL="1" />
                                    </div>

                                    {/* Year Label across */}
                                    <div className={`w-full sm:w-1/2 ${isEven ? 'sm:order-2 sm:pl-12' : 'sm:pr-12 sm:text-right'} hidden sm:block`}>
                                        <span className="font-pt-san font-bold text-3xl lg:text-4xl text-slate-300 tracking-tight hover:text-[var(--acc-1)] transition-colors">
                                            {m.year}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default CareerMilestones;
