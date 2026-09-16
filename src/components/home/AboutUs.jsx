import MaskImage from '../../components/MaskImage';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function AboutUs() {

    // Animation variants for reusability and clean code
    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div id='about-us-sec' className=' pb-20 md:pt-5 w-full max-w-[1920px] mx-auto about-us overflow-hidden '>
            <div className='w-full max-w-[1350px] h-full mx-auto px-2'>
                <div className='grid grid-cols-12 lg:gap-16'>
                    {/* Left Column - Image animated from left */}
                    <motion.div
                        className='lg:col-span-6 col-span-12 lg:px-0 px-2'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeLeft}
                    >
                        <div className='w-full relative py-10 flex justify-center'>
                            <img className='w-full' src="about-us/ab-2.png" alt="" />
                        </div>
                    </motion.div>

                    {/* Right Column - Content animated upwards sequentially */}
                    <motion.div
                        className='lg:col-span-6 col-span-12 lg:px-0 px-2 h-full'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <div className='w-full h-full relative xl:text-[20px] lg:text-[16px] sm:text-[20px] text-[18px] flex flex-col justify-center'>
                            <motion.p variants={fadeUp} className='uppercase  transform ms-10 text-[var(--acc-2)] font-semibold text-[.85em] heading-1 relative w-max'>
                                ABOUT DR. VINAYAK SENTHIL
                            </motion.p>

                            <motion.h2 variants={fadeUp} className='text-[var(--t-c-d)] font-semibold text-[2em] leading-[1.1] mt-4'>
                                Precision Surgery Backed By <span className='text-[var(--acc-3)]'>Experience</span> And <span className='text-[var(--acc-3)]'>Innovation</span>
                            </motion.h2>

                            <motion.p variants={fadeUp} className='text-[var(--t-c-d)] text-[.72em] leading-[1.4] mt-8 [text-shadow:0px_0px_10px_rgba(0,0,0,0.2)]'>
                                With over 25 years of experience in Cardio Vascular and Thoracic Surgery, Dr. K Vinayak Senthil combines clinical excellence with modern technology to deliver safer, smarter, and more precise treatments. His approach integrates advanced surgical techniques and Al-assisted planning to improve outcomes and accelerate patient recovery.
                            </motion.p>

                            <motion.div variants={fadeUp} className='grid grid-cols-12 gap-4 mt-8'>
                                <div className='md:col-span-4 col-span-6'>
                                    <div className='bg-[var(--bg-w)] shadow-[0px_0px_15px_rgba(0,0,0,0.1)] p-4 py-5 rounded-[14px] flex flex-col gap-3'>
                                        <div className='flex gap-3 items-center'>
                                            <div className='w-[1.8em] aspect-square bg-[#0058A130] rounded-full flex justify-center items-center'>
                                                <MaskImage w='1.1em' h='1.1em' url="/icons/ex.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='text-[var(--t-c-d)] text-[.64em] font-medium leading-4'>25+ Years</p>
                                                <p className='text-[var(--acc-3)] text-[.64em] font-medium leading-4'>Experience</p>
                                            </div>
                                        </div>
                                        <p className='text-[var(--t-c-d)] text-[.55em] leading-[1.2]'>Decades of expertise in complex cardiac procedures</p>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6'>
                                    <div className='bg-[var(--bg-w)] shadow-[0px_0px_15px_rgba(0,0,0,0.1)] p-4 py-5 rounded-[14px] flex flex-col gap-3'>
                                        <div className='flex gap-3 items-center'>
                                            <div className='w-[1.8em] aspect-square bg-[#0058A130] rounded-full flex justify-center items-center'>
                                                <MaskImage w='1.1em' h='1.1em' url="/icons/user-1.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='text-[var(--t-c-d)] text-[.64em] font-medium leading-4'>10,000+</p>
                                                <p className='text-[var(--acc-3)] text-[.64em] font-medium leading-4'>Successful Cases</p>
                                            </div>
                                        </div>
                                        <p className='text-[var(--t-c-d)] text-[.55em] leading-[1.2]'>Trusted by thousands of patients and families</p>
                                    </div>
                                </div>
                                <div className='md:col-span-4 col-span-6'>
                                    <div className='bg-[var(--bg-w)] shadow-[0px_0px_15px_rgba(0,0,0,0.1)] p-4 py-5 rounded-[14px] flex flex-col gap-3'>
                                        <div className='flex gap-3 items-center'>
                                            <div className='w-[1.8em] aspect-square bg-[#0058A130] rounded-full flex justify-center items-center'>
                                                <MaskImage w='1.1em' h='1.1em' url="/icons/ai.svg" bg="var(--acc-3)" hBg="" c="" hL="1" />
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='text-[var(--t-c-d)] text-[.64em] font-medium leading-4'>Al-Integrated</p>
                                                <p className='text-[var(--acc-3)] text-[.64em] font-medium leading-4'>Surgical Planning</p>
                                            </div>
                                        </div>
                                        <p className='text-[var(--t-c-d)] text-[.55em] leading-[1.2]'>Smarter, safer, more precise treatments</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className='flex flex-wrap items-center gap-4 mt-10'>
                                <motion.a href='#form' variants={fadeUp} className='gra-5 flex justify-center items-center text-[.8em] gap-2 py-[.7em] md:px-6 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)] cursor-pointer hover:scale-105 transition-transform'>
                                    <MaskImage w='1.2em' h='1.2em' url="/icons/calender.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                    <span className='text-[var(--t-c-l)] '>Schedule an Appointment</span>
                                </motion.a>
                                <motion.div variants={fadeUp}>
                                    <Link to='/about' className='bg-[var(--bg-w)] border border-[var(--acc-3)] text-[var(--acc-3)] hover:bg-[var(--acc-3)] hover:text-white flex justify-center items-center text-[.8em] gap-2 py-[.7em] md:px-6 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)] cursor-pointer hover:scale-105 transition-all duration-300 font-semibold'>
                                        <MaskImage w='1.1em' h='1.1em' url="/icons/about.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="" hL="2" />
                                        <span>View Full Profile</span>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    );
}

export default AboutUs;