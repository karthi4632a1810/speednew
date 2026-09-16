import MaskImage from '../../components/MaskImage';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Surgery() {

    const fadeLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div id='surgery' className='w-full max-w-[1920px] mx-auto surgery-wrapper sm:pt-10 pt-16 overflow-hidden'>
            <div className='w-full max-w-[1350px] h-full mx-auto px-2'>
                <motion.div
                    className='flex flex-col xl:text-[20px] sm:text-[14px] text-[10px] items-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={fadeUp}
                >
                    <h2 className='italic text-[var(--t-c-l)] text-[2.8em] font-bold [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)] text-center leading-8'>Cardiac Surgery <span className='text-[var(--acc-7)]'>Expertise</span></h2>
                    <p className='italic text-[var(--t-c-l)] text-[1.1em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)] heading-2 relative w-max text-center sm:mt-7 mt-2'>Advanced Care for Complex Heart Conditions</p>
                </motion.div>

                <div className='grid grid-cols-12 lg:gap-0 gap-5'>
                    <motion.div
                        className='xl:col-span-5 lg:col-span-6 col-span-12 h-full lg:order-1 order-2'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeLeft}
                    >
                        <div className='flex flex-col h-full'>
                            <div className='sur-doc relative z-[10]'></div>
                            <div className='flex flex-col py-5 pt-8 ps-10 lg:hidden relative isolate'>
                                <span className='gra-10 absolute w-[200%] h-full left-[50%] top-0 z-[-1] translate-x-[-50%]'></span>
                                <p className='italic text-[var(--t-c-l)] text-[1.2em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)] leading-5'>Committed to Saving Lives and Restoring Heart Health</p>
                                <MaskImage w='' h='2em' url="/com/6.png" bg="var(--bg-w)" hBg="" c="lg:w-[128%]" hL="1" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className='xl:col-span-7 lg:col-span-6 col-span-12 mt-10 lg:order-2 order-1'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        <div className='flex flex-col xl:text-[21px] px-4 lg:px-0'>
                            <motion.div variants={fadeRight} className='flex flex-col'>
                                <div className='flex gap-5 items-center py-5'>
                                    <div className='w-[1.8em] aspect-square rounded-full flex justify-center items-center flex-shrink-0'>
                                        <MaskImage w='2.5em' h='2.5em' url="/surgery/h-s.svg" bg="var(--bg-w)" hBg="" c="flex-shrink-0" hL="1" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='italic text-[var(--t-c-l)] text-[1.2em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]'>Expert in Heart Surgery</p>
                                        <p className='italic text-[var(--t-c-l)] text-[.8em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]'>Specializing in CABG, Valve Repairs, and Complex Cardiac Procedures</p>
                                    </div>
                                </div>
                                <MaskImage w='100%' h='1.2em' url="/com/5.png" bg="var(--bg-w)" hBg="" c="icons" hL="1" />
                            </motion.div>
                            <motion.div variants={fadeRight} className='flex flex-col'>
                                <div className='flex gap-5 items-center py-5'>
                                    <div className='w-[1.8em] aspect-square rounded-full flex justify-center items-center flex-shrink-0'>
                                        <MaskImage w='2.5em' h='2.5em' url="/surgery/tech.svg" bg="var(--bg-w)" hBg="" c="flex-shrink-0" hL="1" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='italic text-[var(--t-c-l)] text-[1.2em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]'>Minimally Invasive Techniques</p>
                                        <p className='italic text-[var(--t-c-l)] text-[.8em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]'>Pioneering in Minimally Invasive and Robotic Heart Surgery</p>
                                    </div>
                                </div>
                                <MaskImage w='100%' h='1.2em' url="/com/5.png" bg="var(--bg-w)" hBg="" c="icons" hL="1" />
                            </motion.div>
                            <motion.div variants={fadeRight} className='flex flex-col'>
                                <div className='flex gap-5 items-center py-5'>
                                    <div className='w-[1.8em] aspect-square rounded-full flex justify-center items-center flex-shrink-0'>
                                        <MaskImage w='2.5em' h='2.5em' url="/surgery/suc.svg" bg="var(--bg-w)" hBg="" c="flex-shrink-0" hL="1" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='italic text-[var(--t-c-l)] text-[1.2em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]'>High Success Rates</p>
                                        <p className='italic text-[var(--t-c-l)] text-[.8em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]'>Delivering Outstanding Outcomes with Compassionate Care</p>
                                    </div>
                                </div>
                                <MaskImage w='100%' h='1.2em' url="/com/5.png" bg="var(--bg-w)" hBg="" c="icons" hL="1" />
                            </motion.div>
                            <motion.div variants={fadeRight} className='flex flex-col'>
                                <div className='flex gap-5 items-center py-5'>
                                    <div className='w-[1.8em] aspect-square rounded-full flex justify-center items-center flex-shrink-0'>
                                        <MaskImage w='2.5em' h='2.5em' url="/surgery/cut.svg" bg="var(--bg-w)" hBg="" c="flex-shrink-0" hL="1" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='italic text-[var(--t-c-l)] text-[1.2em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]'>Cutting-Edge Technology</p>
                                        <p className='italic text-[var(--t-c-l)] text-[.8em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]'>Utilizing the Latest Innovations in Cardiac Care</p>
                                    </div>
                                </div>
                                <MaskImage w='100%' h='1.2em' url="/com/5.png" bg="var(--bg-w)" hBg="" c="icons" hL="1" />
                            </motion.div>
                            <div className='lg:flex flex-col py-5 pt-8 mt-5 md:ps-20  relative isolate hidden'>
                                <span className='gra-10 absolute w-[200%] h-full left-[50%] top-0 z-[-1] translate-x-[-50%]'></span>
                                <p className='italic text-[var(--t-c-l)] text-[1.2em] [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)] leading-5'>Committed to Saving Lives and Restoring Heart Health</p>
                                <MaskImage w='' h='2em' url="/com/6.png" bg="var(--bg-w)" hBg="" c="lg:w-[128%]" hL="1" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Surgery;