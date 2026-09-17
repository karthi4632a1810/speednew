import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import FourPillars from '../components/about/FourPillars';
import ClinicalExcellence from '../components/about/ClinicalExcellence';
import SpeedInstitute from '../components/about/SpeedInstitute';
import MedicalVillage from '../components/about/MedicalVillage';
import DopamineDigital from '../components/about/DopamineDigital';
import CareerMilestones from '../components/about/CareerMilestones';
import LeadershipPublicService from '../components/about/LeadershipPublicService';
import AboutAppointmentCta from '../components/about/AboutAppointmentCta';
import MaskImage from '../components/MaskImage';

function AboutDoctor() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Dr. K. Vinayak Senthil | High-End Professional Profile 2026 | SPEED Hospital";
    }, []);

    return (
        <div className="about-doctor-page min-h-screen bg-white">
            {/* 1. Executive Hero with Credentials, Cutout & Fast Stats */}
            <AboutHero />

            {/* 2. The Four Pillars of Leadership Architecture */}
            <FourPillars />

            {/* 3. Section I: Clinical Care at SPEED Multi Speciality Hospital */}
            <ClinicalExcellence />

            {/* 4. Section II: Educational Leadership at SPEED Medical Institute */}
            <SpeedInstitute />

            {/* 5. Section III: SPEED Medical Village (125-Acre Residential Ecosystem) */}
            <MedicalVillage />

            {/* 6. Section IV: DOPAMINE Digital Medical Education Platform */}
            <DopamineDigital />

            {/* 7. Chronological Trajectory & Milestones Timeline (2001 - 2026) */}
            <CareerMilestones />

            {/* 8. Professional Leadership, Rotary Presidency & Verified Sources */}
            <LeadershipPublicService />

            {/* 9. Direct Hospital Consultation Booking Section */}
            <AboutAppointmentCta />

            {/* Consistent High-End Hospital Footer matching Home */}
            <footer className="w-full max-w-[1920px] mx-auto footer-wrapper overflow-hidden">
                <div className="w-full max-w-[1280px] h-full mx-auto px-4 sm:px-8 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                        
                        {/* Column 1: Doctor & Specialty Info */}
                        <div className="md:col-span-5 flex flex-col text-white">
                            <h3 className="font-pridi text-2xl sm:text-3xl font-semibold">
                                Dr. K. Vinayak Senthil
                            </h3>
                            <p className="text-[var(--acc-1)] text-sm font-medium mt-1">
                                Cardio Vascular & Thoracic Surgeon
                            </p>
                            <p className="text-white/80 text-xs sm:text-sm mt-4 leading-relaxed max-w-md">
                                Committed to surgical precision, evidence-based patient safety, and pioneering structured medical education systems across India.
                            </p>
                            
                            <div className="mt-6 flex flex-wrap gap-3">
                                <a href="https://www.facebook.com/speedlearningapp/" target="_blank" rel="noreferrer" title="Facebook - SPEED" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all hover:scale-110">
                                    <MaskImage w="1em" h="1em" url="/icons/facebook.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                </a>
                                <a href="https://wa.me/919840077508" target="_blank" rel="noreferrer" title="WhatsApp - Dr. Vinayak Senthil" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all hover:scale-110">
                                    <MaskImage w="1em" h="1em" url="/icons/whatsapp.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                </a>
                                <a href="https://www.instagram.com/speedlearningapp/" target="_blank" rel="noreferrer" title="Instagram - SPEED" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-all hover:scale-110">
                                    <MaskImage w="1em" h="1em" url="/icons/instagram.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                </a>
                                <a href="https://www.youtube.com/@SpeedLearningApp" target="_blank" rel="noreferrer" title="YouTube Masterclasses - SPEED" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] flex items-center justify-center transition-all hover:scale-110">
                                    <MaskImage w="1em" h="1em" url="/icons/youtube.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                </a>
                                <a href="https://www.linkedin.com/company/speed-medical-centre/" target="_blank" rel="noreferrer" title="LinkedIn - SPEED Medical Centre" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center transition-all hover:scale-110">
                                    <MaskImage w="1em" h="1em" url="/icons/linkedin.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Page Navigation Links */}
                        <div className="md:col-span-3 flex flex-col text-white text-xs sm:text-sm">
                            <h4 className="font-bold text-base tracking-wider uppercase text-[var(--acc-1)] mb-4">
                                Page Sections
                            </h4>
                            <ul className="space-y-2.5 text-white/80">
                                <li><a href="/" className="hover:text-[var(--acc-1)] transition-colors">← Back to Main Home</a></li>
                                <li><a href="/#ecosystem" className="hover:text-[var(--acc-1)] transition-colors text-[var(--acc-1)] font-semibold">SPEED & DOPAMINE Ecosystem</a></li>
                                <li><a href="https://speedhospitals.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--acc-1)] transition-colors">SPEED Hospital Website ↗</a></li>
                                <li><a href="https://speedlearningapp.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--acc-1)] transition-colors">Speed Learning App ↗</a></li>
                                <li><a href="https://dopaminemed.com/index" target="_blank" rel="noreferrer" className="hover:text-[var(--acc-1)] transition-colors">DOPAMINE App & Web ↗</a></li>
                                <li><a href="https://dopaminemed.com/residential-neet-pg-inicet-pg-fmge/" target="_blank" rel="noreferrer" className="hover:text-[var(--acc-1)] transition-colors">Dopamine Retreat (CMR 2.0) ↗</a></li>
                                <li><a href="/contact" className="hover:text-[var(--acc-1)] transition-colors font-semibold text-[var(--acc-1)]">Hospital Contact & Map →</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Hospital Clinic Location & Hours */}
                        <div className="md:col-span-4 flex flex-col text-white text-xs sm:text-sm">
                            <h4 className="font-bold text-base tracking-wider uppercase text-[var(--acc-1)] mb-4">
                                Hospital & OPD Location
                            </h4>
                            <div className="space-y-3 text-white/80">
                                <p className="leading-relaxed">
                                    <strong className="text-white block">SPEED Multi Speciality Hospital</strong>
                                    494, Kundrathur Main Rd, Padmavathi Nagar, Kamatchiamman Nagar, Mangadu, Tamil Nadu 600122
                                </p>
                                <div>
                                    <span className="text-white font-medium block">Doctor & Emergency Hotline:</span>
                                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                                        <a href="tel:9840077508" className="text-[var(--acc-1)] font-semibold hover:underline">
                                            +91 98400 77508
                                        </a>
                                        <span className="text-white/40">/</span>
                                        <a href="tel:8015932591" className="text-white/90 hover:text-[var(--acc-1)] hover:underline">
                                            +91 80159 32591
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-white font-medium block">Official Email:</span>
                                    <div className="flex flex-col gap-0.5 mt-0.5">
                                        <a href="mailto:support@speedlearningapp.com" className="text-[var(--acc-1)] hover:underline">
                                            support@speedlearningapp.com
                                        </a>
                                        <a href="mailto:info@speedhospitals.com" className="text-white/80 hover:underline text-xs">
                                            info@speedhospitals.com
                                        </a>
                                    </div>
                                </div>
                                <p>
                                    <strong className="text-white">Consultation Hours:</strong><br />
                                    Monday – Sunday: 9:00 AM – 10:00 PM (Casualty 24/7)
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Copyright */}
                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
                        <p>© 2026 Dr. K. Vinayak Senthil. All rights reserved.</p>
                        <p>SPEED Multi Speciality Hospital • SPEED Medical Institute • DOPAMINE</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AboutDoctor;
