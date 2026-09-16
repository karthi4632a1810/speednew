import MaskImage from '../../components/MaskImage';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
    const RankPaginationRef = useRef(null);
    const RankPrevRef = useRef(null);
    const RankNextRef = useRef(null);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div id='testimonial' className='overflow-hidden'>
            <div className=' py-20'>
                <div className='w-full max-w-[1250px] h-full mx-auto px-2 sm:px-5 xl:px-0'>
                    <motion.div
                        className='headings xl:text-[19px] lg:text-[16px] text-[13px] px-5 flex flex-col items-center'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={fadeUp}
                    >
                        <p className='transform  text-[var(--acc-2)]  text-[1.1em] heading-1 relative w-max '>Real experiences. Trusted outcomes.</p>
                        <h2 className='text-[var(--acc-2)] font-semibold text-center text-[2.1em] mb-1 leading-8 mt-3'>What Patients Say About  <span className='t-g-1'>Dr. Vinayak Senthil</span></h2>
                    </motion.div>
                    <div className='py-10 relative'>
                        <div className='grid grid-cols-12 lg:gap-10 gap-6'>
                            <motion.div
                                className='lg:col-span-3 sm:col-span-5 col-span-12 pt-10 px-4 md:px-0'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.4 }}
                                variants={fadeLeft}
                            >
                                <div className='flex flex-col text-[20px]'>
                                    <div className='flex w-max'>
                                        <MaskImage w='3.2em' h='3.2em' url="/icons/quote.svg" bg="var(--acc-3)" hBg="var(--bg-w)" c="icons duration-300" hL="1" />
                                    </div>
                                    <h2 className='text-[var(--acc-2)] text-[1.5em] font-medium my-10 leading-10'>
                                        What our <br /> Patients are <br />saying
                                    </h2>
                                    <div className='flex justify-between items-center gap-3'>
                                        {/* Custom Buttons */}
                                        <div ref={RankPrevRef} className="sm:text-[16px] text-[12px]  flex justify-center items-center cursor-pointer rounded-full ">
                                            <MaskImage w='1em' h='1em' url="/icons/ar-6.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                        </div>
                                        <div ref={RankPaginationRef} className="custom-pagination flex justify-center"></div>
                                        <div ref={RankNextRef} className="sm:text-[16px] text-[12px]   flex justify-center items-center cursor-pointer rounded-full ">
                                            <MaskImage w='1em' h='1em' url="/icons/ar-6.svg" bg="var(--p-c)" hBg="" c="rotate-[180deg]" hL="1" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className='lg:col-span-9 col-span-12'
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div>
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        loop={true}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                        }}
                                        breakpoints={{
                                            0: { slidesPerView: 1, spaceBetween: 20 },
                                            640: { slidesPerView: 2, spaceBetween: 20 },
                                            768: { slidesPerView: 3, spaceBetween: 20 }
                                        }}

                                        onInit={(swiper) => {
                                            setTimeout(() => {
                                                if (!swiper || !swiper.params || !swiper.params.navigation || !swiper.navigation) return;
                                                swiper.params.navigation.prevEl = RankPrevRef.current;
                                                swiper.params.navigation.nextEl = RankNextRef.current;
                                                if (swiper.params.pagination) {
                                                    swiper.params.pagination.el = RankPaginationRef.current;
                                                }

                                                if (swiper.navigation && typeof swiper.navigation.init === 'function') {
                                                    swiper.navigation.init();
                                                    swiper.navigation.update();
                                                }

                                                if (swiper.pagination && typeof swiper.pagination.init === 'function') {
                                                    swiper.pagination.init();
                                                    swiper.pagination.render();
                                                    swiper.pagination.update();
                                                }
                                            });
                                        }}

                                        pagination={{
                                            el: RankPaginationRef.current,
                                            clickable: true,
                                        }}

                                        navigation={{
                                            prevEl: RankPrevRef.current,
                                            nextEl: RankNextRef.current,
                                        }}
                                        className="h-full testiswiper"
                                    >

                                        <SwiperSlide >
                                            <div className='flex flex-col'>
                                                <div className='w-full relative min-h-[250px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[9px] rounded-bl-[0px] sm:text-[16px] text-[18px] p-5'>
                                                    <h2 className='text-[var(--acc-2)] text-[.95em] font-bold'>Cardiac Bypass Patient</h2>
                                                    <p className='text-[var(--t-c-d)] text-[.73em] font-medium text-justify my-3 mb-7'>“Before my surgery, I was very anxious, but Dr. Vinayak Senthil explained everything clearly and patiently. The procedure went smoothly, and my recovery was faster than I expected. I’m truly grateful for the care and confidence he gave me.”</p>
                                                    <div className='flex gap-1'>
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                    </div>
                                                    <div className='w-[15%]   flex flex-shrink-0 overflow-hidden absolute bottom-0 translate-y-[63%] translate-x-[-7%] left-0'>
                                                        <img className='w-full flex-shrink-0' src="/icons/tri.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 mt-4 sm:px-6 px-10 items-center'>
                                                    <div className='w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] rounded-full flex flex-shrink-0 overflow-hidden relative shadow-[0px_0px_5px_rgba(0,0,0,0.2)]'>
                                                        <img className='w-full h-full absolute object-cover flex-shrink-0' src="/treatment/2.png" alt="" />
                                                    </div>
                                                    <div className='flex flex-col justify-center text-[17px] gap-2'>
                                                        <h6 className='text-[var(--acc-2)] text-[.9em] font-bold leading-3'>Rajesh K.</h6>
                                                        <p className='text-[var(--t-c-d)] text-[.8em] font-medium leading-3'>1 week ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide >
                                            <div className='flex flex-col'>
                                                <div className='w-full relative min-h-[250px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[9px] rounded-bl-[0px] text-[16px] p-5'>
                                                    <h2 className='text-[var(--acc-2)] text-[.95em] font-bold'>Cardiac Bypass Patient</h2>
                                                    <p className='text-[var(--t-c-d)] text-[.73em] font-medium text-justify my-3 mb-7'>“Before my surgery, I was very anxious, but Dr. Vinayak Senthil explained everything clearly and patiently. The procedure went smoothly, and my recovery was faster than I expected. I’m truly grateful for the care and confidence he gave me.”</p>
                                                    <div className='flex gap-1'>
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                    </div>
                                                    <div className='w-[15%]   flex flex-shrink-0 overflow-hidden absolute bottom-0 translate-y-[63%] translate-x-[-7%] left-0'>
                                                        <img className='w-full flex-shrink-0' src="/icons/tri.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 mt-4 sm:px-6 px-10 items-center'>
                                                    <div className='w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] rounded-full flex flex-shrink-0 overflow-hidden relative shadow-[0px_0px_5px_rgba(0,0,0,0.2)]'>
                                                        <img className='w-full h-full absolute object-cover flex-shrink-0' src="/treatment/2.png" alt="" />
                                                    </div>
                                                    <div className='flex flex-col justify-center text-[17px] gap-2'>
                                                        <h6 className='text-[var(--acc-2)] text-[.9em] font-bold leading-3'>Rajesh K.</h6>
                                                        <p className='text-[var(--t-c-d)] text-[.8em] font-medium leading-3'>1 week ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide >
                                            <div className='flex flex-col'>
                                                <div className='w-full relative min-h-[250px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[9px] rounded-bl-[0px] text-[16px] p-5'>
                                                    <h2 className='text-[var(--acc-2)] text-[.95em] font-bold'>Cardiac Bypass Patient</h2>
                                                    <p className='text-[var(--t-c-d)] text-[.73em] font-medium text-justify my-3 mb-7'>“Before my surgery, I was very anxious, but Dr. Vinayak Senthil explained everything clearly and patiently. The procedure went smoothly, and my recovery was faster than I expected. I’m truly grateful for the care and confidence he gave me.”</p>
                                                    <div className='flex gap-1'>
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                    </div>
                                                    <div className='w-[15%]   flex flex-shrink-0 overflow-hidden absolute bottom-0 translate-y-[63%] translate-x-[-7%] left-0'>
                                                        <img className='w-full flex-shrink-0' src="/icons/tri.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 mt-4 sm:px-6 px-10 items-center'>
                                                    <div className='w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] rounded-full flex flex-shrink-0 overflow-hidden relative shadow-[0px_0px_5px_rgba(0,0,0,0.2)]'>
                                                        <img className='w-full h-full absolute object-cover flex-shrink-0' src="/treatment/2.png" alt="" />
                                                    </div>
                                                    <div className='flex flex-col justify-center text-[17px] gap-2'>
                                                        <h6 className='text-[var(--acc-2)] text-[.9em] font-bold leading-3'>Rajesh K.</h6>
                                                        <p className='text-[var(--t-c-d)] text-[.8em] font-medium leading-3'>1 week ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide >
                                            <div className='flex flex-col'>
                                                <div className='w-full relative min-h-[250px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[9px] rounded-bl-[0px] text-[16px] p-5'>
                                                    <h2 className='text-[var(--acc-2)] text-[.95em] font-bold'>Cardiac Bypass Patient</h2>
                                                    <p className='text-[var(--t-c-d)] text-[.73em] font-medium text-justify my-3 mb-7'>“Before my surgery, I was very anxious, but Dr. Vinayak Senthil explained everything clearly and patiently. The procedure went smoothly, and my recovery was faster than I expected. I’m truly grateful for the care and confidence he gave me.”</p>
                                                    <div className='flex gap-1'>
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                    </div>
                                                    <div className='w-[15%]   flex flex-shrink-0 overflow-hidden absolute bottom-0 translate-y-[63%] translate-x-[-7%] left-0'>
                                                        <img className='w-full flex-shrink-0' src="/icons/tri.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 mt-4 sm:px-6 px-10 items-center'>
                                                    <div className='w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] rounded-full flex flex-shrink-0 overflow-hidden relative shadow-[0px_0px_5px_rgba(0,0,0,0.2)]'>
                                                        <img className='w-full h-full absolute object-cover flex-shrink-0' src="/treatment/2.png" alt="" />
                                                    </div>
                                                    <div className='flex flex-col justify-center text-[17px] gap-2'>
                                                        <h6 className='text-[var(--acc-2)] text-[.9em] font-bold leading-3'>Rajesh K.</h6>
                                                        <p className='text-[var(--t-c-d)] text-[.8em] font-medium leading-3'>1 week ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide >
                                            <div className='flex flex-col'>
                                                <div className='w-full relative min-h-[250px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[9px] rounded-bl-[0px] text-[16px] p-5'>
                                                    <h2 className='text-[var(--acc-2)] text-[.95em] font-bold'>Cardiac Bypass Patient</h2>
                                                    <p className='text-[var(--t-c-d)] text-[.73em] font-medium text-justify my-3 mb-7'>“Before my surgery, I was very anxious, but Dr. Vinayak Senthil explained everything clearly and patiently. The procedure went smoothly, and my recovery was faster than I expected. I’m truly grateful for the care and confidence he gave me.”</p>
                                                    <div className='flex gap-1'>
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                    </div>
                                                    <div className='w-[15%]   flex flex-shrink-0 overflow-hidden absolute bottom-0 translate-y-[63%] translate-x-[-7%] left-0'>
                                                        <img className='w-full flex-shrink-0' src="/icons/tri.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 mt-4 sm:px-6 px-10 items-center'>
                                                    <div className='w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] rounded-full flex flex-shrink-0 overflow-hidden relative shadow-[0px_0px_5px_rgba(0,0,0,0.2)]'>
                                                        <img className='w-full h-full absolute object-cover flex-shrink-0' src="/treatment/2.png" alt="" />
                                                    </div>
                                                    <div className='flex flex-col justify-center text-[17px] gap-2'>
                                                        <h6 className='text-[var(--acc-2)] text-[.9em] font-bold leading-3'>Rajesh K.</h6>
                                                        <p className='text-[var(--t-c-d)] text-[.8em] font-medium leading-3'>1 week ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide >
                                            <div className='flex flex-col'>
                                                <div className='w-full relative min-h-[250px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[9px] rounded-bl-[0px] text-[16px] p-5'>
                                                    <h2 className='text-[var(--acc-2)] text-[.95em] font-bold'>Cardiac Bypass Patient</h2>
                                                    <p className='text-[var(--t-c-d)] text-[.73em] font-medium text-justify my-3 mb-7'>“Before my surgery, I was very anxious, but Dr. Vinayak Senthil explained everything clearly and patiently. The procedure went smoothly, and my recovery was faster than I expected. I’m truly grateful for the care and confidence he gave me.”</p>
                                                    <div className='flex gap-1'>
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                        <MaskImage w='.9em' h='.9em' url="/icons/star.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                                    </div>
                                                    <div className='w-[15%]   flex flex-shrink-0 overflow-hidden absolute bottom-0 translate-y-[63%] translate-x-[-7%] left-0'>
                                                        <img className='w-full flex-shrink-0' src="/icons/tri.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 mt-4 sm:px-6 px-10 items-center'>
                                                    <div className='w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] rounded-full flex flex-shrink-0 overflow-hidden relative shadow-[0px_0px_5px_rgba(0,0,0,0.2)]'>
                                                        <img className='w-full h-full absolute object-cover flex-shrink-0' src="/treatment/2.png" alt="" />
                                                    </div>
                                                    <div className='flex flex-col justify-center text-[17px] gap-2'>
                                                        <h6 className='text-[var(--acc-2)] text-[.9em] font-bold leading-3'>Rajesh K.</h6>
                                                        <p className='text-[var(--t-c-d)] text-[.8em] font-medium leading-3'>1 week ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>


                                    </Swiper>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Testimonial;