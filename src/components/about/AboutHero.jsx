import React from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';

function AboutHero() {
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

    return (
        <section className="relative overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-24 hero-section-bg" style={{ "--hero-bg": "url(/banner/bg-1.png)" }}>
            {/* Ambient Lighting / Glow effects */}
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#2AD2C1]/15 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#0058A1]/20 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Text & Badges */}
                    <motion.div
                        className="col-span-12 lg:col-span-7 flex flex-col justify-center text-white"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.12 } }
                        }}
                    >
                        {/* Eyebrow badge */}
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[var(--acc-1)]">
                                <span className="w-2 h-2 rounded-full bg-[#2BEFAD] animate-pulse"></span>
                                Research-Backed Professional Profile
                            </span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-white/80">
                                September 2026
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1 
                            variants={fadeUp}
                            className="font-pt-san font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-[var(--t-c-l)] leading-[1.15] drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                        >
                            Dr. K. Vinayak Senthil
                        </motion.h1>

                        {/* Medical Degrees & Registration */}
                        <motion.div variants={fadeUp} className="mt-3">
                            <p className="text-[var(--acc-1)] font-bold text-sm sm:text-base lg:text-lg leading-relaxed font-pt-san drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                                MBBS, DNB (Gen Surg), M.Ch (CTVS), MRCS (UK), FIAGES, FAIS, FMAS, FLS (USA)
                            </p>
                            <p className="text-white/70 text-xs sm:text-sm mt-1 flex items-center gap-2">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--acc-1)]"></span>
                                TNMC Registration No: <strong className="text-white">67377</strong> (Reg. 2001)
                            </p>
                        </motion.div>

                        {/* Four Distinctive Roles Subtitle */}
                        <motion.h2 
                            variants={fadeUp}
                            className="mt-4 font-pridi text-lg sm:text-xl md:text-2xl text-white font-medium italic border-l-4 border-[var(--acc-1)] pl-4 py-1"
                        >
                            Surgeon • Educator • Mentor • Institution Builder
                        </motion.h2>

                        {/* Narrative Pitch */}
                        <motion.p 
                            variants={fadeUp}
                            className="mt-5 text-white/90 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-light"
                        >
                            Trained in cardiothoracic and vascular surgery with over 25 years of clinical and academic mastery. Leading patient care at SPEED Multi Speciality Hospital, super-specialty coaching via SPEED Medical Institute, 125-acre immersive learning at SPEED Medical Village, and high-impact digital education through DOPAMINE.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
                            <a 
                                href="#appointment" 
                                className="gra-6 px-6 sm:px-8 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base shadow-[0_8px_20px_rgba(109,127,247,0.35)] hover:shadow-[0_12px_28px_rgba(109,127,247,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5"
                            >
                                <MaskImage w="1.1em" h="1.1em" url="/icons/calender.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                <span>Book Consultation</span>
                            </a>
                            <a 
                                href="#four-pillars" 
                                className="px-6 sm:px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 shadow-sm"
                            >
                                <MaskImage w="1.1em" h="1.1em" url="/icons/speed.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                <span>Explore Leadership</span>
                            </a>
                        </motion.div>

                        {/* Metric Highlights Grid */}
                        <motion.div 
                            variants={fadeUp}
                            className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                        >
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl sm:text-3xl text-white font-pt-san tracking-tight">25+ Yrs</span>
                                <span className="text-white/70 text-xs sm:text-sm mt-0.5">Clinical Practice</span>
                            </div>
                            <div className="flex flex-col sm:border-l sm:border-white/15 sm:pl-5">
                                <span className="font-bold text-2xl sm:text-3xl text-[var(--acc-1)] font-pt-san tracking-tight">2002</span>
                                <span className="text-white/70 text-xs sm:text-sm mt-0.5">SPEED Founded</span>
                            </div>
                            <div className="flex flex-col sm:border-l sm:border-white/15 sm:pl-5">
                                <span className="font-bold text-2xl sm:text-3xl text-white font-pt-san tracking-tight">3.5L+</span>
                                <span className="text-white/70 text-xs sm:text-sm mt-0.5">Doctors Mentored</span>
                            </div>
                            <div className="flex flex-col sm:border-l sm:border-white/15 sm:pl-5">
                                <span className="font-bold text-2xl sm:text-3xl text-[#2BEFAD] font-pt-san tracking-tight">35,000+</span>
                                <span className="text-white/70 text-xs sm:text-sm mt-0.5">Super-Specialty Seats</span>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Right Column: Clean Doctor Image */}
                    <motion.div
                        className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end items-end relative"
                        initial="hidden"
                        animate="visible"
                        variants={fadeRight}
                    >
                        <div className="relative w-full max-w-[480px] flex items-end justify-center">
                            <img 
                                src="/about-us/ab-2.png" 
                                alt="Dr. K. Vinayak Senthil" 
                                className="w-full h-auto object-contain max-h-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom wave / divider decoration */}
            <div className="w-full absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
}

export default AboutHero;
