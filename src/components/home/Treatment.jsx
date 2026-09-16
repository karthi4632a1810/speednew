import MaskImage from '../MaskImage';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Treatment() {

    const fadeUpHeader = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (

        <div id='treatment' className=' pb-20 md:pt-20 pt-10 w-full max-w-[1920px] mx-auto treatment-process overflow-hidden'>
            <div className='w-full max-w-[1300px] h-full mx-auto xl:px-2 px-6 py-8 '>
                <motion.div
                    className='headings xl:text-[19px] lg:text-[16px] text-[13px] px-5 flex flex-col items-center gap-3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUpHeader}
                >
                    <p className='uppercase  transform  text-[var(--acc-2)]  text-[1.05em] heading-1 relative w-max'>Your Care Journey With</p>
                    <h2 className='text-[var(--acc-2)] font-semibold text-center text-[2.1em] mb-1 leading-8'><span className='t-g-1'>Al-Powered</span> Treatment Process</h2>
                    <p className=' text-[var(--t-c-d)] text-center text-[.9em]  rounded-full md:w-max p-1 px-5 bg-[#F0F5FE] shadow-[0px_0px_5px_rgba(0,0,0,0.1)]'>From First Consultation To Full Recovery - <span className='text-[var(--acc-2)] font-medium'>Precision, Care & Innovation</span> At Every Step</p>
                </motion.div>
                <motion.div
                    className='grid grid-cols-12 xl:gap-16 sm:gap-3 gap-6 mt-20'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.div variants={cardVariants} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'>
                        <div className='group treatment-wrapper arrow bg-[var(--bg-w)] hover:bg-[var(--acc-6)] hover:translate-y-[-5px] duration-300 relative border-[#4EAFFF80] border xl:min-h-[360px] lg:min-h-[350px] sm:min-h-[380px] min-h-[450px] xl:text-[16px] lg:text-[15px] flex flex-col  shadow-[0px_10px_10px_rgba(0,0,0,0.1)] rounded-[10px] p-3'>
                            <div className='w-full overflow-hidden rounded-[10px]'>
                                <img className='w-full' src="/treatment/1.png" alt="" />
                            </div>
                            <div className='flex flex-col items-center py-3'>
                                <h3 className='text-center group-hover:text-[var(--t-c-l)] duration-300 font-semibold text-[1.1em] leading-5 text-[var(--acc-4)]'><span className='t-g-1'>Advanced</span> Diagnosis <br />
                                    & Evaluation</h3>
                                <MaskImage w='100%' h='1.2em' url="/com/1.png" hBg="var(--bg-w)" c="gra-7 icons" hL="3" />
                            </div>
                            <div className='flex flex-col px-2 gap-2'>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>Echo, CT scan, Angiography</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>Al-Powered Risk Analysis</p>
                                </div>
                            </div>
                            <div className='gra-8 w-[60%] h-[5px] absolute left-[50%] bottom-0 translate-x-[-50%] rounded-tr-[100px] rounded-tl-[100px]'></div>
                        </div>
                    </motion.div>
                    <motion.div variants={cardVariants} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'>
                        <div className='group treatment-wrapper arrow bg-[var(--bg-w)] hover:bg-[var(--acc-6)] hover:translate-y-[-5px] duration-300 relative border-[#4EAFFF80] border xl:min-h-[360px] lg:min-h-[350px] sm:min-h-[380px] min-h-[450px] xl:text-[16px] lg:text-[15px] flex flex-col  shadow-[0px_10px_10px_rgba(0,0,0,0.1)] rounded-[10px] p-3'>
                            <div className='w-full overflow-hidden rounded-[10px]'>
                                <img className='w-full' src="/treatment/2.png" alt="" />
                            </div>
                            <div className='flex flex-col items-center py-3'>
                                <h3 className='text-center font-semibold text-[1.1em] group-hover:text-[var(--t-c-l)] duration-300 leading-5 text-[var(--acc-4)]'><span className='t-g-1'>Al-Assisted
                                </span><br />
                                    Surgical Planning</h3>
                                <MaskImage w='100%' h='1.2em' url="/com/1.png" hBg="" c="gra-7 icons" hL="1" />
                            </div>
                            <div className='flex flex-col px-2 gap-2'>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="1" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>3D Heart Mapping</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="1" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>Personalized Strategy</p>
                                </div>
                            </div>
                            <div className='gra-8 w-[60%] h-[5px] absolute left-[50%] bottom-0 translate-x-[-50%] rounded-tr-[100px] rounded-tl-[100px]'></div>
                        </div>
                    </motion.div>
                    <motion.div variants={cardVariants} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'>
                        <div className='group treatment-wrapper arrow bg-[var(--bg-w)] hover:bg-[var(--acc-6)] hover:translate-y-[-5px] duration-300 relative border-[#4EAFFF80] border xl:min-h-[360px] lg:min-h-[350px] sm:min-h-[380px] min-h-[450px] xl:text-[16px] lg:text-[15px] flex flex-col  shadow-[0px_10px_10px_rgba(0,0,0,0.1)] rounded-[10px] p-3'>
                            <div className='w-full overflow-hidden rounded-[10px]'>
                                <img className='w-full' src="/treatment/3.png" alt="" />
                            </div>
                            <div className='flex flex-col items-center py-3'>
                                <h3 className='text-center font-semibold text-[1.1em] group-hover:text-[var(--t-c-l)] duration-300 leading-5 text-[var(--acc-4)]'><span className='t-g-1'>Precision</span> <br />
                                    Surgery</h3>
                                <MaskImage w='100%' h='1.2em' url="/com/1.png" hBg="" c="gra-7 icons" hL="1" />
                            </div>
                            <div className='flex flex-col px-2 gap-2'>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="1" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>Minimal Access / Robotic</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="1" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>Beating Heart Techniques</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="1" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>Real-Time Monitoring</p>
                                </div>
                            </div>
                            <div className='gra-8 w-[60%] h-[5px] absolute left-[50%] bottom-0 translate-x-[-50%] rounded-tr-[100px] rounded-tl-[100px]'></div>
                        </div>
                    </motion.div>
                    <motion.div variants={cardVariants} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'>
                        <div className='group treatment-wrapper bg-[var(--bg-w)] hover:bg-[var(--acc-6)] hover:translate-y-[-5px] duration-300 relative border-[#4EAFFF80] border xl:min-h-[360px] lg:min-h-[350px] sm:min-h-[380px] min-h-[450px] xl:text-[16px] lg:text-[15px] flex flex-col  shadow-[0px_10px_10px_rgba(0,0,0,0.1)] rounded-[10px] p-3'>
                            <div className='w-full overflow-hidden rounded-[10px]'>
                                <img className='w-full' src="/treatment/4.png" alt="" />
                            </div>
                            <div className='flex flex-col items-center py-3'>
                                <h3 className='text-center font-semibold text-[1.1em] group-hover:text-[var(--t-c-l)] duration-300 leading-5 text-[var(--acc-4)]'><span className='t-g-1'>Recovery & </span><br />
                                    Follow-up Care</h3>
                                <MaskImage w='100%' h='1.2em' url="/com/1.png" hBg="" c="gra-7 icons" hL="1" />
                            </div>
                            <div className='flex flex-col px-2 gap-2'>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="1" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>Fast-Track Recovery</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="1" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>24/7 Monitoring</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/cir.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="1" />
                                    <p className='text-[var(--acc-5)] font-semibold text-[.85em] group-hover:text-[var(--t-c-l)] duration-300'>Rehabilitation Plan</p>
                                </div>
                            </div>
                            <div className='gra-8 w-[60%] h-[5px] absolute left-[50%] bottom-0 translate-x-[-50%] rounded-tr-[100px] rounded-tl-[100px]'></div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>

    );
}

export default Treatment;