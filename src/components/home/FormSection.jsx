import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_DOCTORS = [
    { id: 1, name: "VINAYAK SENTHIL KANNABIRAN", specialization: "Cardio Thoracic Vascular Surgeon" }
];

function FormSection({ doctors = DEFAULT_DOCTORS }) {
    const [step, setStep] = useState(1);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        doctor: "VINAYAK SENTHIL KANNABIRAN - Cardio Thoracic Vascular Surgeon",
        date: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    // --- TELEGRAM SETUP --- 
    const TELEGRAM_BOT_TOKEN = "8525398060:AAF5a_1LdOgoRxCx4CHaccNFj-yKFspI0f0";
    const TELEGRAM_CHAT_ID = "-1003653796216"; // group/channel id

    const sendToTelegram = async () => {
        const message = `
📌 *New Appointment Request From Bio Page*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}

👨‍⚕️ Doctor: ${form.doctor}
📅 Date: ${form.date}
⏰ Time: ${selectedSlot}

📝 Message:
${form.message || "N/A"}
    `;

        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        try {
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: "Markdown",
                }),
            });

            toast.success("Application submitted");

            // Reset form
            setForm({
                name: "",
                phone: "",
                email: "",
                doctor: "VINAYAK SENTHIL KANNABIRAN - Cardio Thoracic Vascular Surgeon",
                date: "",
                message: ""
            });
            setSelectedSlot(null);
            setStep(1);
        } catch (error) {
            console.error("Telegram Error:", error);
            alert("Failed to send appointment");
        }
    };

    const slots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM"
    ];

    // ---------------- VALIDATION ----------------
    const validateStep = () => {
        let newErrors = {};

        if (step === 1) {
            if (!form.name.trim()) newErrors.name = "Full name is required";
            if (!form.phone.trim()) newErrors.phone = "Phone number is required";
            if (!form.email.trim()) newErrors.email = "Email is required";
        }

        if (step === 2) {
            if (!form.doctor) newErrors.doctor = "Select a doctor";
            if (!form.date) newErrors.date = "Select a date";
        }

        if (step === 3) {
            if (!selectedSlot) newErrors.slot = "Select a time slot";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const next = () => {
        if (validateStep()) setStep(step + 1);
    };

    const prev = () => setStep(step - 1);

    // ---------------- STANDALONE ANIMATION CLASS ----------------
    const animationClass = "transition-all duration-500 ease-in-out transform";

    return (
        <section id="form" className="pb-20 p-4 flex justify-center overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-[1250px] formSection overflow-hidden w-full rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl border border-gray-200 grid md:grid-cols-2 gap-10">

                {/* Left Image / Illustration */}
                <div className="flex justify-center items-end relative order-2 md:order-1">
                    <div className="banner-graphic formSec w-full relative flex justify-center items-end order-2 md:order-1">
                        <motion.span
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.6, 0.5],
                                translate: ["-50% -50%", "-50% -52%", "-50% -50%"]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className='aspect-square rounded-full z-[3]'
                        ></motion.span>
                        <motion.span
                            animate={{
                                scale: [0.85, 0.9, 0.85],
                                opacity: [0.75, 0.8, 0.75],
                                translate: ["-50% -50%", "-48% -50%", "-50% -50%"]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className='aspect-square rounded-full z-[2]'
                        ></motion.span>
                        <motion.span
                            animate={{
                                scale: [0.7, 0.75, 0.7],
                                opacity: [0.5, 0.6, 0.5],
                                translate: ["-50% -50%", "-50% -48%", "-50% -50%"]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className='aspect-square rounded-full z-[1]'
                        ></motion.span>
                        {/* Make sure 'formdoctor' path points to a valid image in this new project */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            loading="lazy"
                            src={"/banner/formdoctor.webp"}
                            alt="Banner Doctor"
                            className='w-[70%] z-10 translate-x-[7%] mt-5'
                        />
                    </div>
                </div>

                {/* Right Form Component */}
                <div className="order-1 md:order-2 p-10">

                    {/* Progress bar */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            {["Patient Info", "Doctor & Date", "Time Slot"].map((label, index) => (
                                <span
                                    key={index}
                                    className={`text-xs font-medium ${step === index + 1 ? "text-teal-700" : "text-gray-500"
                                        }`}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>

                        <div className="relative h-2 bg-gray-100 rounded-full">
                            <div
                                className="absolute top-0 left-0 h-full bg-teal-600 rounded-full transition-all duration-500"
                                style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                            ></div>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-[#003B73] mb-6">
                        Book Your Appointment
                    </h2>

                    {/* ---------------- STEPS ---------------- */}
                    <div className="relative min-h-[350px]">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="translate-x-0">
                                    <label className="font-medium text-gray-700">Full Name *</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm ${errors.name ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Enter full name"
                                    />
                                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}

                                    <label className="font-medium text-gray-700 mt-4 block">Phone *</label>
                                    <input
                                        type="text"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Phone number"
                                    />
                                    {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}

                                    <label className="font-medium text-gray-700 mt-4 block">Email *</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm ${errors.email ? "border-red-500" : "border-gray-300"}`}
                                        placeholder="Email address"
                                    />
                                    {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}

                                    <div className="flex justify-end mt-6">
                                        <button
                                            onClick={next}
                                            className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 shadow-md transition"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="translate-x-0">
                                    <label className="font-medium text-gray-700">Select Doctor *</label>
                                    <select
                                        value={form.doctor}
                                        onChange={(e) => setForm({ ...form, doctor: e.target.value })}
                                        className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm ${errors.doctor ? "border-red-500" : "border-gray-300"}`}
                                    >
                                        <option value="">{form.doctor}</option>
                                    </select>
                                    {errors.doctor && <p className="text-red-600 text-xs mt-1">{errors.doctor}</p>}

                                    <label className="font-medium text-gray-700 mt-4 block">Select Date *</label>
                                    <input
                                        type="date"
                                        value={form.date}
                                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                                        className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm ${errors.date ? "border-red-500" : "border-gray-300"}`}
                                    />
                                    {errors.date && <p className="text-red-600 text-xs mt-1">{errors.date}</p>}

                                    <div className="flex justify-between mt-6">
                                        <button
                                            onClick={prev}
                                            className="px-6 py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 shadow transition"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={next}
                                            className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 shadow-md transition"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="translate-x-0">
                                    <label className="font-medium text-gray-700">Select Time Slot *</label>
                                    <div className="grid grid-cols-3 gap-3 mt-2">
                                        {slots.map((slot, idx) => (
                                            <motion.button
                                                key={slot}
                                                type="button"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setSelectedSlot(slot)}
                                                className={`py-2 rounded-xl border text-sm transition shadow-sm ${selectedSlot === slot
                                                    ? "bg-teal-600 text-white border-teal-600 shadow-lg"
                                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {slot}
                                            </motion.button>
                                        ))}
                                    </div>
                                    {errors.slot && <p className="text-red-600 text-xs mt-1">{errors.slot}</p>}

                                    <label className="font-medium text-gray-700 mt-4 block">Message (optional)</label>
                                    <textarea
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm h-24"
                                        placeholder="Describe your problem"
                                    />

                                    <div className="flex justify-between mt-6">
                                        <button
                                            onClick={prev}
                                            className="px-6 py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 shadow transition"
                                        >
                                            Back
                                        </button>

                                        <button
                                            onClick={() => {
                                                if (validateStep()) {
                                                    sendToTelegram();
                                                }
                                            }}
                                            className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 shadow-md transition"
                                        >
                                            Submit Appointment
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

export default FormSection;
