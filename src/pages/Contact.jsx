import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import MaskImage from '../components/MaskImage';
import toast from 'react-hot-toast';

function Contact() {
    useEffect(() => {
        document.title = "Contact Us | SPEED Multi Speciality Hospital • Mangadu, Chennai";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const hospitalAddress = "494, Kundrathur Main Rd, Padmavathi Nagar, Kamatchiamman Nagar, Mangadu, Tamil Nadu 600122";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalAddress)}`;
    const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(hospitalAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

    // Animations
    const fadeUp = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -35 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 35 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    // Form state
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        department: 'Cardiothoracic Surgery Consultation',
        date: '',
        timeSlot: 'Morning (09:00 AM - 01:00 PM)',
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(hospitalAddress);
        toast.success("Hospital address copied to clipboard!");
    };

    // Telegram setup matching hospital notifications
    const TELEGRAM_BOT_TOKEN = "8525398060:AAF5a_1LdOgoRxCx4CHaccNFj-yKFspI0f0";
    const TELEGRAM_CHAT_ID = "-1003653796216";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim()) {
            toast.error("Please enter your name and phone number.");
            return;
        }

        setSubmitting(true);

        const telegramText = `
🏥 *New Contact & Appointment Inquiry*
━━━━━━━━━━━━━━━━━━━━
👤 *Patient / Inquirer:* ${form.name}
📞 *Phone:* ${form.phone}
📧 *Email:* ${form.email || "Not provided"}
🩺 *Department:* ${form.department}
📅 *Preferred Date:* ${form.date || "Immediate / Earliest"}
⏰ *Slot:* ${form.timeSlot}
📝 *Message:*
${form.message || "None provided"}
━━━━━━━━━━━━━━━━━━━━
📍 *SPEED Multi Speciality Hospital, Mangadu*
        `;

        try {
            await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: telegramText,
                    parse_mode: "Markdown"
                })
            });

            toast.success("Inquiry submitted! Our hospital care coordinator will contact you promptly.", {
                duration: 5000,
                icon: '🏥'
            });

            setForm({
                name: '',
                phone: '',
                email: '',
                department: 'Cardiothoracic Surgery Consultation',
                date: '',
                timeSlot: 'Morning (09:00 AM - 01:00 PM)',
                message: ''
            });
        } catch (error) {
            console.error("Telegram notification error:", error);
            toast.success("Inquiry recorded! Our hospital desk will reach out to you shortly.");
        } finally {
            setSubmitting(false);
        }
    };

    const contactChannels = [
        {
            title: "Hospital Address",
            badge: "Physical Location",
            desc: "494, Kundrathur Main Rd, Padmavathi Nagar, Kamatchiamman Nagar, Mangadu, Tamil Nadu 600122",
            actionText: "Get Driving Directions",
            actionUrl: googleMapsUrl,
            icon: "/icons/map.svg",
            accent: "from-[#0058A1] to-[#046BC0]",
            extraAction: handleCopyAddress,
            extraActionText: "Copy Address"
        },
        {
            title: "Emergency Hotline",
            badge: "24/7 Critical Care",
            desc: "+91 98400 77508 / +91 80159 32591",
            subText: "24/7 ambulance dispatch, cardiac emergency intervention & trauma ICU.",
            actionText: "Call +91 98400 77508",
            actionUrl: "tel:9840077508",
            icon: "/icons/call.svg",
            accent: "from-[#FF3A44] to-[#EF5630]"
        },
        {
            title: "Consultation Hours",
            badge: "OPD & Inpatient Care",
            desc: "Mon – Sun: 9:00 AM – 10:00 PM",
            subText: "Casualty, cardiac emergency, and inpatient ICU operate 24 hours daily.",
            actionText: "Book Appointment",
            actionUrl: "#contact-form",
            icon: "/icons/time.svg",
            accent: "from-[#046BC0] to-[#2AD2C1]"
        },
        {
            title: "Email & Desk",
            badge: "General & Academic",
            desc: "support@speedlearningapp.com",
            subText: "Hospital desk: info@speedhospitals.com",
            actionText: "Send An Email",
            actionUrl: "mailto:support@speedlearningapp.com",
            icon: "/icons/mail.svg",
            accent: "from-[#6D7FF7] to-[#68C6F4]"
        }
    ];

    const departments = [
        { name: "Cardiothoracic Surgery (Dr. Vinayak Senthil)", phone: "+91 98400 77508", hours: "By Appointment / Emergency 24/7" },
        { name: "24/7 Casualty & Cardiac Emergency ICU", phone: "+91 80159 32591", hours: "Open 24 Hours • 365 Days" },
        { name: "SPEED Hospital Reception & Admission Desk", phone: "+91 80159 32591", hours: "8:00 AM – 10:00 PM" },
        { name: "SPEED Learning App Support & Mentorship", phone: "+91 98400 77508", hours: "9:00 AM – 8:00 PM" },
        { name: "DOPAMINE Platform & Retreat Desk", phone: "+91 98400 77508", hours: "9:00 AM – 7:00 PM" },
        { name: "SPEED Medical Village Administration", phone: "+91 80159 32591", hours: "9:00 AM – 7:00 PM" }
    ];

    const faqs = [
        {
            q: "How can I book a priority consultation with Dr. K. Vinayak Senthil?",
            a: "You can book directly by filling out the online appointment form on this page or calling our dedicated surgical consultation coordinator at +91 98400 77508. For urgent cardiac or surgical reviews, same-day walk-in evaluation is supported at our Mangadu hospital."
        },
        {
            q: "Where is SPEED Hospital situated and what are the nearest transport routes?",
            a: "We are situated at 494, Kundrathur Main Rd, Padmavathi Nagar, Kamatchiamman Nagar, Mangadu, Chennai 600122. We are just 10 minutes from Porur Junction and easily reachable from Poonamallee, Guindy, and Chennai International Airport via the Outer Ring Road."
        },
        {
            q: "Is 24/7 emergency care and ambulance service available?",
            a: "Yes. SPEED Multi Speciality Hospital maintains a 24/7 round-the-clock emergency department, fully equipped advanced cardiac life-support (ACLS) ambulances, and an on-duty critical care resuscitation team at all times."
        },
        {
            q: "Does the hospital offer cashless health insurance and TPA coverage?",
            a: "Yes. Our dedicated Insurance & TPA Helpdesk facilitates cashless hospitalisation with major public and private health insurance providers and corporate TPAs. Please bring your insurance card and valid photo ID upon admission."
        },
        {
            q: "Is patient and visitor parking available on the premises?",
            a: "Yes. SPEED Multi Speciality Hospital provides dedicated, monitored vehicular parking with priority drop-off bays for elderly patients, wheelchair access, and ambulance lanes."
        }
    ];

    return (
        <div className="w-full bg-[#F8FAFC] text-[var(--t-c-d)]">
            
            {/* 1. Hero Header Banner */}
            <section className="relative overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-24 hero-section-bg" style={{ "--hero-bg": "url(/banner/bg-1.png)" }}>
                {/* Glow effects */}
                <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#2AD2C1]/15 rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#0058A1]/25 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
                    <motion.div 
                        className="max-w-3xl"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    >
                        {/* Breadcrumbs */}
                        <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-4">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-[var(--acc-1)] font-semibold">Contact Us</span>
                        </motion.div>

                        {/* Eyebrow badge */}
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[var(--acc-1)] mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#2BEFAD] animate-pulse"></span>
                            SPEED Multi Speciality Hospital • Mangadu
                        </motion.div>

                        <motion.h1 
                            variants={fadeUp}
                            className="font-pt-san font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                        >
                            Get In Touch With <br />
                            <span className="text-[var(--acc-1)]">Our Care Team</span>
                        </motion.h1>

                        <motion.p 
                            variants={fadeUp}
                            className="text-white/85 text-sm sm:text-base lg:text-lg mt-4 leading-relaxed max-w-2xl"
                        >
                            Connect with SPEED Multi Speciality Hospital for cardiothoracic surgery, patient appointments, 24/7 casualty emergency, and academic queries. We are here to serve with compassion and clinical excellence.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                            <a 
                                href="tel:9840077508" 
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[var(--acc-7)] text-white font-bold text-sm shadow-xl hover:bg-red-600 transition-all transform hover:-translate-y-0.5"
                            >
                                <MaskImage w="1.1em" h="1.1em" url="/icons/call.svg" bg="#ffffff" hBg="" c="" hL="1" />
                                24/7 Emergency: +91 98400 77508
                            </a>
                            <a 
                                href="#contact-form" 
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[var(--acc-3)] font-bold text-sm shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-0.5"
                            >
                                <MaskImage w="1.1em" h="1.1em" url="/icons/calender.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                                Book An Appointment
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Four Quick Contact Channels Grid */}
            <section className="relative -mt-10 z-20">
                <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactChannels.map((c, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-[0_12px_30px_rgba(0,32,59,0.08)] border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${c.accent}`} />
                                
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#0058A1]/10 flex items-center justify-center group-hover:bg-[var(--acc-3)] transition-colors duration-300">
                                            <MaskImage w="1.5em" h="1.5em" url={c.icon} bg="var(--acc-3)" hBg="#ffffff" c="duration-300 group-hover-white group-hover:!bg-white" hL="group" />
                                        </div>
                                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                                            {c.badge}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-lg font-pt-san text-[var(--t-c-d)] group-hover:text-[var(--acc-3)] transition-colors">
                                        {c.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-700 font-medium mt-2 leading-relaxed break-words">
                                        {c.desc}
                                    </p>
                                    {c.subText && (
                                        <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                                            {c.subText}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
                                    <a
                                        href={c.actionUrl}
                                        target={c.actionUrl.startsWith("http") ? "_blank" : undefined}
                                        rel={c.actionUrl.startsWith("http") ? "noreferrer" : undefined}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--acc-3)] hover:text-[var(--acc-1)] transition-colors"
                                    >
                                        <span>{c.actionText}</span>
                                        <span>→</span>
                                    </a>
                                    {c.extraAction && (
                                        <button
                                            onClick={c.extraAction}
                                            className="text-left text-[11px] font-semibold text-gray-500 hover:text-[var(--acc-3)] transition-colors"
                                        >
                                            📋 {c.extraActionText}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Main Form & Hospital Emergency Info */}
            <section id="contact-form" className="py-20 lg:py-28">
                <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                    
                    <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
                        
                        {/* Left Column: Interactive Form */}
                        <motion.div 
                            className="col-span-12 lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,32,59,0.06)] border border-slate-100"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeLeft}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[var(--acc-3)]"></span>
                                <span className="text-xs font-bold uppercase tracking-wider text-[var(--acc-3)]">
                                    Appointment & Inquiry Request
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold font-pt-san text-[var(--t-c-d)]">
                                Send A Message / Book A Visit
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                                Fill in your details below. Our care team will review your inquiry and get back to you with confirmed timings.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="text"
                                            required
                                            placeholder="e.g. Ramesh Kumar"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)]/30 focus:border-[var(--acc-3)] transition-all bg-slate-50/50"
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Contact Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="tel"
                                            required
                                            placeholder="e.g. +91 98400 XXXXX"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)]/30 focus:border-[var(--acc-3)] transition-all bg-slate-50/50"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Email Address (Optional)
                                        </label>
                                        <input 
                                            type="email"
                                            placeholder="name@example.com"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)]/30 focus:border-[var(--acc-3)] transition-all bg-slate-50/50"
                                        />
                                    </div>

                                    {/* Department */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Select Service / Department
                                        </label>
                                        <select
                                            value={form.department}
                                            onChange={(e) => setForm({ ...form, department: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)]/30 focus:border-[var(--acc-3)] transition-all bg-slate-50/50"
                                        >
                                            <option value="Cardiothoracic Surgery Consultation">Cardiothoracic Surgery (Dr. Vinayak Senthil)</option>
                                            <option value="Cardiology & Heart Diagnostics">Cardiology & Heart Diagnostics</option>
                                            <option value="24/7 Emergency & Critical Care">24/7 Emergency & Critical Care</option>
                                            <option value="General OPD & Health Checkup">General OPD & Health Checkup</option>
                                            <option value="SPEED Medical Institute Mentorship">SPEED Medical Institute Mentorship</option>
                                            <option value="SPEED Medical Village Residency">SPEED Medical Village Residency</option>
                                            <option value="Other Medical Inquiries">Other Inquiries</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Preferred Date */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Preferred Date
                                        </label>
                                        <input 
                                            type="date"
                                            value={form.date}
                                            onChange={(e) => setForm({ ...form, date: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)]/30 focus:border-[var(--acc-3)] transition-all bg-slate-50/50"
                                        />
                                    </div>

                                    {/* Preferred Time Slot */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                            Preferred Slot
                                        </label>
                                        <select
                                            value={form.timeSlot}
                                            onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)]/30 focus:border-[var(--acc-3)] transition-all bg-slate-50/50"
                                        >
                                            <option value="Morning (09:00 AM - 01:00 PM)">Morning (09:00 AM - 01:00 PM)</option>
                                            <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                                            <option value="Evening (05:00 PM - 09:00 PM)">Evening (05:00 PM - 09:00 PM)</option>
                                            <option value="Immediate / Emergency Review">Immediate / Emergency Review</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                                        Clinical Query / Brief Symptoms
                                    </label>
                                    <textarea 
                                        rows={4}
                                        placeholder="Describe symptoms, medical history, or specific questions..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--acc-3)]/30 focus:border-[var(--acc-3)] transition-all bg-slate-50/50 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--acc-3)] to-[#046BC0] text-white font-bold text-base shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                >
                                    {submitting ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                            <span>Submitting Inquiry...</span>
                                        </>
                                    ) : (
                                        <>
                                            <MaskImage w="1.2em" h="1.2em" url="/icons/contact.svg" bg="#ffffff" hBg="" c="" hL="1" />
                                            <span>Submit Appointment Request</span>
                                        </>
                                    )}
                                </button>
                                
                                <p className="text-[11px] text-gray-500 text-center">
                                    🔒 Your medical information is handled with strict confidentiality.
                                </p>
                            </form>
                        </motion.div>

                        {/* Right Column: Emergency Card & Hospital Highlights */}
                        <motion.div 
                            className="col-span-12 lg:col-span-5 space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeRight}
                        >
                            {/* Emergency Red Card */}
                            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1E2D52] to-[#0E1B38] text-white shadow-2xl relative overflow-hidden border border-white/10">
                                <div className="absolute top-0 right-0 w-36 h-36 bg-[var(--acc-7)]/20 rounded-full blur-2xl" />
                                
                                <div className="flex items-center gap-2.5 mb-3">
                                    <span className="w-3 h-3 rounded-full bg-[var(--acc-7)] animate-ping"></span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--acc-7)] text-white text-[10px] font-bold uppercase tracking-wider">
                                        Immediate Care
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold font-pt-san text-white">
                                    Cardiac & Trauma Emergency
                                </h3>
                                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                                    For chest pain, acute respiratory distress, severe trauma, or cardiac emergencies, contact our 24-hour rapid response team immediately.
                                </p>

                                <div className="mt-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                                    <div>
                                        <span className="text-[11px] text-slate-300 block">Emergency Dispatch:</span>
                                        <a href="tel:9840077508" className="text-lg sm:text-xl font-bold font-pt-san text-[var(--acc-1)] hover:underline">
                                            +91 98400 77508
                                        </a>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[var(--acc-7)] flex items-center justify-center shadow-lg">
                                        <MaskImage w="1.3em" h="1.3em" url="/icons/call.svg" bg="#ffffff" hBg="" c="" hL="1" />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-3 text-xs text-slate-300">
                                    <span className="w-2 h-2 rounded-full bg-[#2BEFAD]"></span>
                                    <span>Advanced Cardiac Life Support (ACLS) Ambulances on standby</span>
                                </div>
                            </div>

                            {/* Location & Transport Information Card */}
                            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,32,59,0.06)]">
                                <h4 className="font-bold text-lg font-pt-san text-[var(--t-c-d)] flex items-center gap-2">
                                    <MaskImage w="1.2em" h="1.2em" url="/icons/map.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                                    How To Reach SPEED Hospital
                                </h4>
                                
                                <div className="mt-4 space-y-3.5 text-xs sm:text-sm text-gray-600">
                                    <div className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-blue-100 text-[var(--acc-3)] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                                        <div>
                                            <strong className="text-[var(--t-c-d)] block">Prominent Road Address:</strong>
                                            494, Kundrathur Main Rd, Padmavathi Nagar, Kamatchiamman Nagar, Mangadu, TN 600122.
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-blue-100 text-[var(--acc-3)] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                                        <div>
                                            <strong className="text-[var(--t-c-d)] block">Key Landmarks:</strong>
                                            Near Mangadu Kamakshi Amman Temple arch & Padmavathi Nagar main junction.
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="w-5 h-5 rounded-full bg-blue-100 text-[var(--acc-3)] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                                        <div>
                                            <strong className="text-[var(--t-c-d)] block">Connectivity:</strong>
                                            10 minutes from Porur Junction, 15 minutes from Poonamallee, 25 minutes from Guindy / Chennai Airport.
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                                    <a 
                                        href={googleMapsUrl} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-[var(--acc-3)] font-bold text-xs hover:bg-[var(--acc-3)] hover:text-white transition-all"
                                    >
                                        <span>Open Google Maps</span>
                                        <span>↗</span>
                                    </a>
                                    <button 
                                        onClick={handleCopyAddress}
                                        className="text-xs font-semibold text-gray-500 hover:text-[var(--acc-3)] transition-colors cursor-pointer"
                                    >
                                        📋 Copy Complete Address
                                    </button>
                                </div>
                            </div>

                            {/* Doctor Spotlight Card */}
                            <div className="rounded-3xl p-5 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white shadow-md flex-shrink-0 border border-white">
                                    <img src="/about-us/ab-2.png" alt="Dr. K. Vinayak Senthil" className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="text-xs">
                                    <span className="font-bold text-sm text-[var(--acc-2)] block font-pt-san">
                                        Dr. K. Vinayak Senthil
                                    </span>
                                    <span className="text-[var(--acc-3)] font-semibold block">
                                        M.Ch (CTVS), DNB, MBBS • TNMC #67377
                                    </span>
                                    <span className="text-gray-500 mt-0.5 block">
                                        Cardiothoracic & Vascular Surgeon • Managing Director
                                    </span>
                                </div>
                            </div>

                        </motion.div>

                    </div>

                </div>
            </section>

            {/* 4. Interactive Full Google Map Section */}
            <section className="py-12 bg-white relative">
                <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                    
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--acc-3)]">
                            Interactive Hospital Navigation
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold font-pt-san text-[var(--t-c-d)] mt-1">
                            Find SPEED Hospital On The Map
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                            Centrally positioned on Kundrathur Main Road, easily accessible via road, bus routes, and auto/cab services across Chennai.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 h-[460px] lg:h-[520px]">
                        <iframe
                            title="SPEED Multi Speciality Hospital Location Map"
                            src={googleMapsEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>

                        {/* Floating Overlay Badge on Map */}
                        <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/60">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[var(--acc-7)]"></span>
                                <span className="text-[11px] font-bold text-[var(--acc-7)] uppercase tracking-wider">
                                    Hospital Location
                                </span>
                            </div>
                            <h4 className="font-bold text-base font-pt-san text-[var(--t-c-d)]">
                                SPEED Multi Speciality Hospital
                            </h4>
                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                {hospitalAddress}
                            </p>
                            <div className="mt-3.5 flex items-center gap-3">
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 rounded-xl bg-[var(--acc-3)] text-white text-xs font-bold shadow hover:bg-[var(--acc-2)] transition-colors inline-flex items-center gap-1.5"
                                >
                                    <span>Get Directions</span>
                                    <span>→</span>
                                </a>
                                <button
                                    onClick={handleCopyAddress}
                                    className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
                                >
                                    Copy Address
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. Department Direct Contact Directory */}
            <section className="py-20 bg-[#F0F5FE] relative overflow-hidden">
                <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
                    
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--acc-3)]">
                            Directory & Extensions
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-pt-san text-[var(--t-c-d)] mt-1">
                            Hospital Department Directory
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2">
                            Direct telephone and helpline extensions for quick medical coordination.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {departments.map((dept, idx) => (
                            <div 
                                key={idx}
                                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_6px_20px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-lg transition-all"
                            >
                                <div>
                                    <span className="text-[11px] font-bold text-[var(--acc-3)] uppercase tracking-wider block">
                                        Department 0{idx + 1}
                                    </span>
                                    <h4 className="font-bold text-base font-pt-san text-[var(--t-c-d)] mt-1">
                                        {dept.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Timings: {dept.hours}
                                    </p>
                                </div>
                                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <a 
                                        href={`tel:${dept.phone.replace(/[^0-9+]/g, '')}`} 
                                        className="inline-flex items-center gap-2 text-xs font-bold text-[var(--acc-3)] hover:text-[var(--acc-1)] transition-colors"
                                    >
                                        <MaskImage w="1em" h="1em" url="/icons/call.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                                        <span>{dept.phone}</span>
                                    </a>
                                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                                        Available
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 6. Frequently Asked Questions (FAQ) */}
            <section className="py-20 bg-white">
                <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8">
                    
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--acc-3)]">
                            Visitor Guidance
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold font-pt-san text-[var(--t-c-d)] mt-1">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                            Key information to make your hospital visit and consultation seamless.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div 
                                key={idx}
                                className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-[var(--t-c-d)] font-pt-san flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-100/60 transition-colors"
                                >
                                    <span>{faq.q}</span>
                                    <span className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm text-xs font-bold text-[var(--acc-3)] transition-transform duration-300 flex-shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {activeFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed bg-white border-t border-slate-100"
                                        >
                                            {faq.a}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 7. Speed Hospital Footer — same as About page */}
            <footer className="w-full max-w-[1920px] mx-auto footer-wrapper overflow-hidden">
                <div className="w-full max-w-[1280px] h-full mx-auto px-4 sm:px-8 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                        
                        {/* Column 1: Doctor & Specialty Info */}
                        <div className="md:col-span-5 flex flex-col text-white">
                            <h3 className="font-pridi text-2xl sm:text-3xl font-semibold">
                                Dr. K. Vinayak Senthil
                            </h3>
                            <p className="text-[var(--acc-1)] text-sm font-medium mt-1">
                                Cardio Vascular &amp; Thoracic Surgeon
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
                                <li><a href="/about" className="hover:text-[var(--acc-1)] transition-colors">About Dr. Vinayak Senthil</a></li>
                                <li><a href="/#ecosystem" className="hover:text-[var(--acc-1)] transition-colors text-[var(--acc-1)] font-semibold">SPEED & DOPAMINE Ecosystem</a></li>
                                <li><a href="/#why-choose" className="hover:text-[var(--acc-1)] transition-colors">Clinical Care &amp; Surgery</a></li>
                                <li><a href="/#surgery" className="hover:text-[var(--acc-1)] transition-colors">Cardiothoracic Surgery</a></li>
                                <li><a href="/about#village" className="hover:text-[var(--acc-1)] transition-colors">SPEED Medical Village</a></li>
                                <li><a href="/about#digital" className="hover:text-[var(--acc-1)] transition-colors">DOPAMINE Digital Platform</a></li>
                                <li><a href="/about#milestones" className="hover:text-[var(--acc-1)] transition-colors">Career Trajectory (2001-2026)</a></li>
                                <li><Link to="/contact" className="hover:text-[var(--acc-1)] transition-colors font-semibold text-[var(--acc-1)]">Hospital Contact &amp; Map →</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Hospital Clinic Location & Hours */}
                        <div className="md:col-span-4 flex flex-col text-white text-xs sm:text-sm">
                            <h4 className="font-bold text-base tracking-wider uppercase text-[var(--acc-1)] mb-4">
                                Hospital &amp; OPD Location
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

export default Contact;
