# Portable Appointment Form Setup

Here is the fully standalone setup for your "Book Your Appointment" form section. I've extracted it with its specific CSS, and decoupled it from the `DoctorContext` so you can easily drop it into any other React project.

### 1. Requirements

Since the form design heavily relies on Tailwind CSS, ensure your new React project has **Tailwind CSS** installed and configured.

You also need `react-hot-toast` (if you plan to use it later, though currently it just uses native `alert()`).
```bash
npm install react-hot-toast
```

---

### 2. Add Custom CSS

This form relies on custom background gradients and overlapping pseudo-elements. Copy this CSS snippet and paste it into your `index.css` or main stylesheet:

```css
/* Form Section Custom Gradients */
.formSection {
    background-image: linear-gradient(45deg, hsla(207, 100%, 50%), hsla(0, 0%, 100%), hsla(0, 0%, 100%));
    position: relative;
    isolation: isolate;
}

.formSection::before {
    content: "";
    position: absolute;
    border-radius: inherit;
    filter: blur(50px);
    background-color: hsla(0, 0%, 100%, 0.596);
    inset: -100px;
    z-index: -1;
}

/* Banner Graphic Circles used in the Form */
.banner-graphic.formSec > span {
    position: absolute;
    left: 50%;
    top: 60%;
    width: 90%;
    aspect-ratio: 1/1;
    border-radius: 50%;
}

.banner-graphic.formSec > span:nth-child(1) {
    position: absolute;
    background-image: linear-gradient(to bottom, hsla(207, 100%, 12%, 1), hsla(0, 0%, 60%, 0));
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
}

.banner-graphic.formSec > span:nth-child(2) {
    position: absolute;
    background-image: linear-gradient(to bottom, hsla(207, 100%, 12%, 0.39), hsla(207, 100%, 32%, 0));
    opacity: 0.75;
    transform: translate(-50%, -50%) scale(0.85);
}

.banner-graphic.formSec > span:nth-child(3) {
    position: absolute;
    background-image: linear-gradient(to bottom, hsla(207, 100%, 12%, 1), hsla(207, 100%, 32%, 0));
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.7);
}
```

---

### 3. The React Component (`FormSection.jsx`)

Create a new file called `FormSection.jsx` in your project and copy the code below.

I’ve made two adjustments to make it portable:
1. Standardized the `doctors` list as a component `prop` (or a fallback demo list) so it doesn't break if `DoctorContext` is missing.
2. Kept the Telegram integration fully intact.

```jsx
import React, { useState } from "react";
// Make sure to add your image in the public folder or import it directly
// import formdoctor from "/home-banner/formdoctor.webp"; 
import toast from "react-hot-toast";

// Demo Array for Doctors (You can replace this or pass as props)
const DEFAULT_DOCTORS = [
    { id: 1, name: "Dr. John Doe", specialization: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", specialization: "Neurology" },
    { id: 3, name: "Dr. Emily Davis", specialization: "Pediatrics" },
];

function FormSection({ doctors = DEFAULT_DOCTORS }) {
    const [step, setStep] = useState(1);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        doctor: "",
        date: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    // --- TELEGRAM SETUP --- 
    const TELEGRAM_BOT_TOKEN = "8525398060:AAF5a_1LdOgoRxCx4CHaccNFj-yKFspI0f0";
    const TELEGRAM_CHAT_ID = "-1003653796216"; // group/channel id

    const sendToTelegram = async () => {
        const message = `
📌 *New Appointment Request*

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

            // Redirect on success
            window.location.href = "/thank-you/";
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
        <section id="form" className="mt-20 p-4 flex justify-center">
            <div className="max-w-[1100px] formSection overflow-hidden w-full rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl border border-gray-200 grid md:grid-cols-2 gap-10">

                {/* Left Image / Illustration */}
                <div className="flex justify-center items-end relative order-2 md:order-1">
                    <div className="banner-graphic formSec w-full relative flex justify-center items-end order-2 md:order-1">
                        <span className='aspect-square rounded-full z-[3]'></span>
                        <span className='aspect-square rounded-full z-[2]'></span>
                        <span className='aspect-square rounded-full z-[1]'></span>
                        {/* Make sure 'formdoctor' path points to a valid image in this new project */}
                        <img 
                            loading="lazy" 
                            src={"/home-banner/formdoctor.webp"} 
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

                    {/* ---------------- STEP 1 ---------------- */}
                    {step === 1 && (
                        <div className={`${animationClass} translate-x-0`}>

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
                        </div>
                    )}

                    {/* ---------------- STEP 2 ---------------- */}
                    {step === 2 && (
                        <div className={`${animationClass} translate-x-0`}>

                            <label className="font-medium text-gray-700">Select Doctor *</label>
                            <select
                                value={form.doctor}
                                onChange={(e) => setForm({ ...form, doctor: e.target.value })}
                                className={`mt-1 w-full rounded-xl border px-4 py-3 text-sm ${errors.doctor ? "border-red-500" : "border-gray-300"}`}
                            >
                                <option value="">Select Doctor</option>
                                {doctors.map((doc) => (
                                    <option key={doc.id}>
                                        {doc.name} — {doc.specialization}
                                    </option>
                                ))}
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
                        </div>
                    )}

                    {/* ---------------- STEP 3 ---------------- */}
                    {step === 3 && (
                        <div className={`${animationClass} translate-x-0`}>

                            <label className="font-medium text-gray-700">Select Time Slot *</label>
                            <div className="grid grid-cols-3 gap-3 mt-2">
                                {slots.map((slot) => (
                                    <button
                                        key={slot}
                                        type="button"
                                        onClick={() => setSelectedSlot(slot)}
                                        className={`py-2 rounded-xl border text-sm transition shadow-sm ${selectedSlot === slot
                                            ? "bg-teal-600 text-white border-teal-600 shadow-lg"
                                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                            }`}
                                    >
                                        {slot}
                                    </button>
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
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

export default FormSection;
```

### 4. Assets

Finally, remember to copy the image used in the layout:
* Copy `public/banner/formdoctor.webp` to your new project's `public/banner/` folder (or adjust the `src` attribute in the code).

This setup allows you to reuse the exact multi-step design, Telegram API submission method, layout, glassmorphism UI, and slot selection logic seamlessly!
