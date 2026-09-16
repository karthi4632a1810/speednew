import MaskImage from '../../components/MaskImage';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Cta() {

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <div id='contact-us' className='overflow-hidden lg:overflow-visible'>
            <div className='w-full max-w-[1920px] mx-auto cta-wrapper mt-20 px-4 xl:px-0'>
                <div className='w-full max-w-[1200px] h-full mx-auto px-2'>
                    <div className='grid grid-cols-12'>
                        <motion.div
                            className='lg:col-span-5 col-span-12 h-full lg:py-20 py-10 lg:px-0 sm:px-5'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={fadeLeft}
                        >
                            <div className='flex flex-col xl:text-[25px] lg:text-[18px] md:text-[25px] h-full justify-center py-10 md:pb-20'>
                                <h2 className='font-pridi text-[var(--t-c-l)] text-[2em] font-semibold leading-[1.2]'>Your Heart Deserves The Best Care.</h2>
                                <p className='text-[var(--t-c-l)] text-[.83em] leading-[1.4] mt-6'>Consult Dr. K. Vinayak Senthil And Take The Next Step Toward A Healthier Life.</p>
                                <div className="flex flex-col sm:flex-row md:gap-5 gap-3 xl:text-[15px] md:text-[15px] text-[13px] mt-10">
                                    <a href='#form' style={{ "--pos": "100px", "--d": ".5s" }} className='gra-7 flex justify-center items-center gap-2 py-[.7em] md:px-4 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300 cursor-pointer'>
                                        <MaskImage w='1.2em' h='1.2em' url="/icons/calender.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        <span className='text-[var(--t-c-l)] tracking-[1px]'>Book an Appointment</span>
                                    </a>
                                    <a href='tel:9840077508' style={{ "--pos": "100px", "--d": ".5s" }} className='bg-[var(--bg-w)] flex justify-center items-center gap-2 py-[.7em] md:px-4 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300 cursor-pointer'>
                                        <MaskImage w='1.2em' h='1.2em' url="/icons/calender.svg" hBg="" c="gra-7" hL="1" />
                                        <span className='text-[var(--t-c-l)] tracking-[1px] t-g-1 font-medium'>Contact Hospital</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className='lg:col-span-7 col-span-12 w-full h-full'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={fadeRight}
                        >
                            <div className='flex w-full h-full relative justify-end'>
                                <div className='cta-image-1'></div>
                                <div className='cta-image'></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                className='w-full max-w-[1920px] mx-auto footer-wrapper'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={fadeUp}
            >
                <div className='w-full max-w-[1200px] h-full mx-auto px-2 pt-16'>
                    <div className='grid lg:grid-cols-11 grid-cols-12 px-5 xl:px-0'>
                        <div className='lg:col-span-4 sm:col-span-6 col-span-12'>
                            <div className='flex flex-col w-full lg:text-[19px] footer-line relative'>
                                <div className='flex flex-col '>
                                    <h2 className='font-pridi text-[var(--t-c-l)] text-[1.5em]'>Dr. K. Vinayak Senthil</h2>
                                    <p className='text-[var(--t-c-l)] text-[.9em]'>Cardio Vascular & Thoracic Surgery</p>
                                    <h6 className='text-[var(--t-c-l)] mt-5 text-[.9em] pb-7'>Committed to precision, compassion, and advanced cardiac treatment.</h6>
                                    <MaskImage w='100%' h='1.2em' url="/com/2.png" bg="var(--bg-w)" hBg="" hL="1" />
                                </div>
                                <div className='flex flex-col font-pt-san gap-5 lg:text-[18px] pt-7'>
                                    <h2 className='text-[var(--t-c-l)] font-semibold text-[1.1em]'>Hospital/Clinic Details</h2>
                                    <a href='tel:9840077508' className='flex gap-3'>
                                        <MaskImage w='1.2em' h='1.2em' url="/icons/call.svg" bg="var(--bg-w)" hBg="" c="flex-shrink-0" hL="1" />
                                        <span className='text-[var(--t-c-l)] font-normal text-[.95em] tracking-[1px] leading-5'>+91 98400 77508 </span>
                                    </a>
                                    <a href='mailto:Support@speedlearningapp.com' className='flex gap-3'>
                                        <MaskImage w='1.2em' h='1.2em' url="/icons/mail.svg" bg="var(--bg-w)" hBg="" c="flex-shrink-0" hL="1" />
                                        <span className='text-[var(--t-c-l)] font-normal text-[.95em] tracking-[1px] leading-5'>Support@speedlearningapp.com </span>
                                    </a>
                                    <div className='flex gap-3'>
                                        <MaskImage w='1.2em' h='1.2em' url="/icons/map.svg" bg="var(--bg-w)" hBg="" c="flex-shrink-0" hL="1" />
                                        <span className='text-[var(--t-c-l)] font-normal text-[.95em] tracking-[1px] leading-5'>24J6+XQ9, Mangadu Rd,
                                            Padmavathi Nagar,
                                            Mangadu, Chennai- 600122 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-4 sm:col-span-6 col-span-12'>
                            <div className='flex flex-col md:ps-10 mt-12 sm:mt-0 footer-line relative'>
                                <div className='lg:text-[16px] w-max pb-7'>
                                    <h2 className='text-[var(--t-c-l)] font-bold tracking-[1px] text-[1.2em] relative leading-6'>Quick Links</h2>
                                    <div className='mt-5 flex flex-col gap-2'>
                                        <Link className='text-[var(--t-c-l)] text-[1.1em] tracking-[.5px] relative hover:text-[var(--acc-1)] transition-colors' to="/about">About Doctor</Link>
                                        <a className='text-[var(--t-c-l)] text-[1.1em] tracking-[.5px] relative' href="/">Expertise</a>
                                        <a className='text-[var(--t-c-l)] text-[1.1em] tracking-[.5px] relative' href="/">Patient Outcomes</a>
                                        <a className='text-[var(--t-c-l)] text-[1.1em] tracking-[.5px] relative' href="/">Al In Cardiac Surgery</a>
                                        <a className='text-[var(--t-c-l)] text-[1.1em] tracking-[.5px] relative' href="/">Contact</a>
                                    </div>
                                </div>
                                <MaskImage w='100%' h='1.2em' url="/com/2.png" bg="var(--bg-w)" hBg="" hL="1" />
                                <div className='lg:text-[16px] w-max pt-7'>
                                    <h2 className='text-[var(--t-c-l)] font-bold tracking-[1px] text-[1.2em] relative leading-6'>Consultation Hours</h2>
                                    <div className='mt-3 flex flex-col gap-3'>
                                        <a className='text-[var(--t-c-l)] font-normal text-[1.1em] tracking-[.5px] relative'>Mon-Sun: 9:00 AM - 10:00 PM</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='lg:col-span-3 sm:col-span-6 col-span-12'>
                            <div className='flex flex-col lg:text-[14px] lg:ps-10 mt-12 lg:mt-0'>
                                <h2 className='font-pridi text-[var(--t-c-l)] text-[2em] font-semibold leading-[1.2]'>Take the Next Step</h2>
                                <p className='text-[var(--t-c-l)] text-[1.1em] leading-[1.4] mt-4'>Book a consultation and get expert guidance for your heart health.</p>
                                <div className="flex md:gap-5 gap-3 xl:text-[12px] md:text-[15px] text-[13px] mt-8">
                                    <a href='#form' style={{ "--pos": "100px", "--d": ".5s" }} className='gra-7 flex justify-center items-center gap-2 py-[.7em] md:px-4 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300 cursor-pointer'>
                                        <MaskImage w='1.2em' h='1.2em' url="/icons/calender.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                        <span className='text-[var(--t-c-l)] tracking-[1px]'>Book an Appointment</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center py-4 mt-12 bottom-footer relative'>
                        <p className='text-[var(--t-c-l)] text-[15px] text-center'>© 2026 Dr. K. Vinayak Senthil. All rights reserved.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Cta;