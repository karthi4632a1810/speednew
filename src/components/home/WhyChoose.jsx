import MaskImage from '../../components/MaskImage';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function WhyChoose() {

    const fadeUpHeader = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (

        <div id='why-choose' className=' pb-20 pt-20 w-full max-w-[1920px] mx-auto overflow-hidden'>
            <div className='w-full max-w-[1250px] h-full mx-auto xl:px-2 px-5 pb-10'>
                <motion.div
                    className='headings xl:text-[19px] lg:text-[16px] sm:text-[15px] text-[15px] sm:px-5 flex flex-col items-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeUpHeader}
                >
                    <h2 className='text-[var(--acc-2)] font-semibold text-center text-[2.1em] mb-1 leading-10'>Why Choose Dr. Vinayak Senthil?</h2>
                    <p className='text-[var(--t-c-d)] text-center text-[.8em] sm:w-[70%] mt-2'>Dr Vinayak Senthil is dedicated to providing the highest standard of cardiac and thoracic care. Here are some key reasons why patients and medical professionals choose Dr. Senthil:</p>
                </motion.div>
                <motion.div
                    className='grid grid-cols-12 xl:gap-10 gap-5 mt-16'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.div variants={cardVariants} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'>
                        <motion.div 
                            whileHover={{ y: -10, scale: 1.02 }}
                            className='aspect-square why-choose xl:text-[16px] lg:text-[14px] md:text-[16px] text-[20px] flex flex-col justify-center items-center shadow-[0px_0px_17px_rgba(0,0,0,0.1)] rounded-[14px] bg-white transition-shadow hover:shadow-2xl'
                        >
                            <div className='w-[5em]'>
                                <img className='w-full' src="/why-choose/1.svg" alt="" />
                            </div>
                            <h4 className='text-[1em] text-[var(--acc-3)] font-semibold tracking-[1px] mt-4 w-[80%] text-center leading-5'>Extensive Experience</h4>
                            <p className='text-[.8em] text-[var(--t-c-d)] font-medium  text-center w-[85%] mt-3'>Over two decades of expertise in cardiac and thoracic surgery.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={cardVariants} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'>
                        <motion.div 
                            whileHover={{ y: -10, scale: 1.02 }}
                            className='aspect-square why-choose xl:text-[16px] lg:text-[14px] md:text-[16px] text-[20px] flex flex-col justify-center items-center shadow-[0px_0px_17px_rgba(0,0,0,0.1)] rounded-[14px] bg-white transition-shadow hover:shadow-2xl'
                        >
                            <div className='w-[4.7em]'>
                                <img className='w-full' src="/why-choose/2.svg" alt="" />
                            </div>
                            <h4 className='text-[1em] text-[var(--acc-3)] font-semibold tracking-[1px] mt-4 w-[80%] text-center leading-5'>Patient-Centered Approach</h4>
                            <p className='text-[.8em] text-[var(--t-c-d)] font-medium  text-center w-[85%] mt-3'>Personalized care with a focus on patient comfort and outcomes</p>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={cardVariants} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'>
                        <motion.div 
                            whileHover={{ y: -10, scale: 1.02 }}
                            className='aspect-square why-choose xl:text-[16px] lg:text-[14px] md:text-[16px] text-[20px] flex flex-col justify-center items-center shadow-[0px_0px_17px_rgba(0,0,0,0.1)] rounded-[14px] bg-white transition-shadow hover:shadow-2xl'
                        >
                            <div className='w-[4.7em]'>
                                <img className='w-full' src="/why-choose/3.svg" alt="" />
                            </div>
                            <h4 className='text-[1em] text-[var(--acc-3)] font-semibold tracking-[1px] mt-4 w-[80%] text-center leading-5'>Highly Qualified</h4>
                            <p className='text-[.8em] text-[var(--t-c-d)] font-medium  text-center w-[85%] mt-3'>Credentials from top medical institutions and international training</p>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={cardVariants} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12'>
                        <motion.div 
                            whileHover={{ y: -10, scale: 1.02 }}
                            className='aspect-square why-choose xl:text-[16px] lg:text-[14px] md:text-[16px] text-[20px] flex flex-col justify-center items-center shadow-[0px_0px_17px_rgba(0,0,0,0.1)] rounded-[14px] bg-white transition-shadow hover:shadow-2xl'
                        >
                            <div className='w-[4em]'>
                                <img className='w-full' src="/why-choose/4.svg" alt="" />
                            </div>
                            <h4 className='text-[1em] text-[var(--acc-3)] font-semibold tracking-[1px] mt-4 w-[80%] text-center leading-5'>Trusted and Recommended</h4>
                            <p className='text-[.8em] text-[var(--t-c-d)] font-medium  text-center w-[85%] mt-3'>Respected by peers with a strong track record of successful surgeries</p>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </div>

    );
}

export default WhyChoose;