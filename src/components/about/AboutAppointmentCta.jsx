import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MaskImage from '../MaskImage';
import toast from 'react-hot-toast';

function AboutAppointmentCta() {
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

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Cardiothoracic Consultation',
        date: '',
        notes: ''
    });

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) {
            toast.error("Please enter your name and contact phone number.");
            return;
        }

        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            toast.success("Consultation request submitted! Our hospital team will contact you shortly.");
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: 'Cardiothoracic Consultation',
                date: '',
                notes: ''
            });
        }, 1200);
    };

    return (
        <section id="appointment" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-white to-[#F0F5FE]">
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
                        <span className="w-2 h-2 rounded-full bg-[var(--acc-7)]"></span>
                        Direct Patient Consultation
                    </div>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--t-c-d)] font-pt-san leading-tight">
                        Schedule a Consultation with <span className="text-[var(--acc-3)]">Dr. Vinayak Senthil</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                        Consult for cardiovascular surgery evaluations, second surgical opinions, coronary artery bypass, and valve condition assessments at SPEED Multi Speciality Hospital.
                    </p>
                    <div className="mt-3">
                        <MaskImage w="140px" h="12px" url="/com/1.png" bg="var(--acc-3)" hBg="" c="" hL="1" />
                    </div>
                </motion.div>

                {/* Main Card Container */}
                <div className="mt-16 bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,32,59,0.08)] border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-12">
                        
                        {/* Left Column: Hospital Contact Details & Doctor Highlight */}
                        <motion.div
                            className="col-span-12 lg:col-span-5 bg-gradient-to-br from-[var(--acc-6)] via-[var(--acc-2)] to-[var(--acc-3)] p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeLeft}
                        >
                            {/* Ambient circle */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <span className="px-3.5 py-1 rounded-full bg-white/15 text-[var(--acc-1)] text-xs font-semibold tracking-wider uppercase inline-block mb-4 border border-white/20">
                                    SPEED Multi Speciality Hospital
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold font-pt-san leading-snug">
                                    Cardiothoracic Surgery OPD & Inpatient Care
                                </h3>
                                <p className="text-white/80 text-xs sm:text-sm mt-3 leading-relaxed">
                                    Compassionate, evidence-based care delivered by Dr. K. Vinayak Senthil and a dedicated multidisciplinary surgical team.
                                </p>

                                {/* Contact Details List */}
                                <div className="mt-8 space-y-4 text-sm">
                                    <div className="flex items-start gap-3.5 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
                                            <MaskImage w="1.3em" h="1.3em" url="/icons/call.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-xs block">Hotline & Consultation Lines</span>
                                            <div className="flex flex-wrap items-center gap-2 mt-0.5">
                                                <a href="tel:9840077508" className="font-semibold text-white tracking-wide text-base hover:text-[var(--acc-1)] transition-colors">
                                                    +91 98400 77508
                                                </a>
                                                <span className="text-white/40">|</span>
                                                <a href="tel:8015932591" className="font-medium text-white/90 text-sm hover:text-[var(--acc-1)] transition-colors">
                                                    +91 80159 32591
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/919840077508?text=Hello%20Dr.%20Vinayak%20Senthil%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation." target="_blank" rel="noreferrer" className="flex items-start gap-3.5 group">
                                        <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 group-hover:bg-[#25D366]/30 flex items-center justify-center flex-shrink-0 transition-colors">
                                            <MaskImage w="1.3em" h="1.3em" url="/icons/whatsapp.svg" bg="#25D366" hBg="" c="" hL="1" />
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-xs block">Direct WhatsApp Chat</span>
                                            <span className="font-semibold text-[#2BEFAD] group-hover:underline text-sm block mt-0.5">
                                                Chat with Dr. Senthil's Coordinator ↗
                                            </span>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-3.5 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
                                            <MaskImage w="1.3em" h="1.3em" url="/icons/mail.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-xs block">Official Email Addresses</span>
                                            <a href="mailto:support@speedlearningapp.com" className="font-semibold text-white group-hover:text-[var(--acc-1)] transition-colors block text-xs sm:text-sm">
                                                support@speedlearningapp.com
                                            </a>
                                            <a href="mailto:info@speedhospitals.com" className="text-white/70 hover:text-[var(--acc-1)] transition-colors block text-xs mt-0.5">
                                                info@speedhospitals.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <MaskImage w="1.3em" h="1.3em" url="/icons/map.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-xs block">Hospital Location</span>
                                            <span className="font-medium text-white/90 text-xs leading-relaxed block mt-0.5">
                                                494, Kundrathur Main Rd, Mangadu, Chennai - 600122
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <MaskImage w="1.3em" h="1.3em" url="/icons/time.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-xs block">Consultation & Casualty</span>
                                            <span className="font-medium text-white/90 text-xs block mt-0.5">
                                                OPD: 9 AM - 10 PM • 24/7 Cardiac Emergency
                                            </span>
                                        </div>
                                    </div>

                                    {/* Social media icons pill */}
                                    <div className="pt-2 flex items-center gap-2.5">
                                        <span className="text-white/60 text-xs">Official Media:</span>
                                        <a href="https://www.youtube.com/@SpeedLearningApp" target="_blank" rel="noreferrer" title="YouTube Masterclasses" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF0000] flex items-center justify-center transition-all hover:scale-110">
                                            <MaskImage w="0.9em" h="0.9em" url="/icons/youtube.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        </a>
                                        <a href="https://www.facebook.com/speedlearningapp/" target="_blank" rel="noreferrer" title="Facebook - SPEED" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all hover:scale-110">
                                            <MaskImage w="0.9em" h="0.9em" url="/icons/facebook.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        </a>
                                        <a href="https://www.instagram.com/speedlearningapp/" target="_blank" rel="noreferrer" title="Instagram - SPEED" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-all hover:scale-110">
                                            <MaskImage w="0.9em" h="0.9em" url="/icons/instagram.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/speed-medical-centre/" target="_blank" rel="noreferrer" title="LinkedIn - SPEED Medical Centre" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center transition-all hover:scale-110">
                                            <MaskImage w="0.9em" h="0.9em" url="/icons/linkedin.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Trust pill */}
                            <div className="relative z-10 mt-10 pt-6 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
                                <span>25+ Years Surgical Practice</span>
                                <span className="font-bold text-[var(--acc-1)]">10,000+ Cases</span>
                            </div>
                        </motion.div>

                        {/* Right Column: Appointment Form */}
                        <motion.div
                            className="col-span-12 lg:col-span-7 p-8 sm:p-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeRight}
                        >
                            <h4 className="text-2xl font-bold text-[var(--t-c-d)] font-pt-san">
                                Book an In-Person or Online Consultation
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
                                Please submit your details below. Our healthcare coordinator will confirm your appointment slot within 2 business hours.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Patient Full Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            placeholder="e.g. Rajesh Kumar" 
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)] focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Phone Number *
                                        </label>
                                        <input 
                                            type="tel" 
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            placeholder="+91 98400 00000" 
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)] focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Email Address
                                        </label>
                                        <input 
                                            type="email" 
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            placeholder="patient@example.com" 
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)] focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Preferred Consultation Type
                                        </label>
                                        <select 
                                            value={formData.service}
                                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)] focus:border-transparent transition-all bg-white"
                                        >
                                            <option value="Cardiothoracic Consultation">Cardiothoracic & Vascular Consultation</option>
                                            <option value="CABG Evaluation">Coronary Bypass (CABG) Evaluation</option>
                                            <option value="Valve Repair/Replacement">Valve Repair & Replacement Assessment</option>
                                            <option value="Second Surgical Opinion">Second Surgical Opinion</option>
                                            <option value="Post-Op Rehabilitation">Post-Operative Rehabilitation</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Preferred Date
                                    </label>
                                    <input 
                                        type="date" 
                                        value={formData.date}
                                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)] focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Medical Notes / Existing Symptoms (Optional)
                                    </label>
                                    <textarea 
                                        rows="3"
                                        value={formData.notes}
                                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                        placeholder="Briefly describe your condition, previous diagnosis, or symptoms..."
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)] focus:border-transparent transition-all resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-3">
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full gra-6 py-4 rounded-full text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                                    >
                                        <MaskImage w="1.2em" h="1.2em" url="/icons/calender.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        <span>{submitting ? "Processing Request..." : "Confirm Consultation Request"}</span>
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutAppointmentCta;
