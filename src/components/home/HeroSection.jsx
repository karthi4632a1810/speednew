import MaskImage from '../../components/MaskImage';
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroSection() {
    const paginationRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative">
            <div className='w-full max-w-[1920px] h-full mx-auto relative'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}

                    onInit={(swiper) => {
                        setTimeout(() => {
                            if (!swiper || !swiper.params || !swiper.params.navigation || !swiper.navigation) return;
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            if (swiper.params.pagination) {
                                swiper.params.pagination.el = paginationRef.current;
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
                        el: paginationRef.current,
                        clickable: true,
                    }}

                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}



                    className="h-full"
                >

                    <SwiperSlide>
                        <div style={{ "--hero-bg": "url(/banner/bg-1.png)" }} className="h-full hero-section-bg pt-10">
                            <div className="w-full max-w-[1500px] h-full mx-auto grid grid-cols-9">
                                <div className="lg:col-span-5 col-span-10 h-full lg:py-16 2xl:py-[180px] 2xl:pb-[140px] pt-20 py-10 pb-3">
                                    <div className="h-full hero-section-content flex flex-col justify-center xl:text-[20px] text-[20px] sm:ps-16 px-8">
                                        
                                        {/* Dual Flagship Priority Pill */}
                                        <div style={{ "--pos": "100px", "--d": ".1s" }} className="flex flex-wrap items-center gap-2 mb-3">
                                            <span className="px-3 py-1 rounded-full bg-[var(--acc-1)] text-slate-900 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-md">
                                                Founder & Chairman
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-[11px] sm:text-xs">
                                                ⚡ SPEED • 🧬 DOPAMINE
                                            </span>
                                        </div>

                                        <h1 style={{ "--pos": "100px", "--d": ".2s" }} className="mb-2 text-[var(--t-c-l)] font-pt-san font-bold 2xl:text-[3.17em] xl:text-[2.5em] lg:text-[2em] sm:text-[2.3em] text-[1.5em] leading-[1.2] [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)]">
                                            Dr. K. Vinayak Senthil
                                        </h1>
                                        <h3 style={{ "--pos": "100px", "--d": ".4s" }} className="mb-3 text-[var(--acc-1)] font-bold font-pt-san 2xl:text-[1.2em] xl:text-[.95em] lg:text-[.8em] sm:text-[.95em] text-[.7em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">
                                            MBBS., M.Ch(CVTS)., MRCS., UK DNB(Gen Surgery), FIAGES, FAIS, FMAS, FLS(SAGES) USA
                                        </h3>
                                        <h2 style={{ "--pos": "100px", "--d": ".6s" }} className="mb-4 text-[var(--t-c-l)] font-bold font-pt-san 2xl:text-[1.5em] xl:text-[1.2em] lg:text-[1em] sm:text-[1em] text-[1em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">
                                            Cardio Vascular & Thoracic Surgeon • Pioneer of SPEED & DOPAMINE
                                        </h2>
                                        <p style={{ "--pos": "100px", "--d": ".8s" }} className="mb-8 text-[var(--t-c-l)] font-pt-san 2xl:text-[.93em] xl:text-[.8em] lg:text-[.7em] sm:text-[.8em] text-[.7em] font-light [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] sm:w-[85%] leading-relaxed">
                                            Creator of India's most celebrated medical ecosystems: the <strong>Speed Learning App</strong>, <strong>SPEED Multi Speciality Hospital</strong>, and the breakthrough <strong>DOPAMINE</strong> medical app & 24-week residential retreat.
                                        </p>
                                        <div className="flex flex-wrap md:gap-4 gap-3 2xl:text-[16px] xl:text-[14px] text-[13px]">
                                            <a href='#ecosystem' style={{ "--pos": "100px", "--d": ".5s" }} className='px-6 py-3.5 rounded-full bg-gradient-to-r from-[var(--acc-1)] via-[#2BEFAD] to-[var(--acc-1)] text-slate-900 font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2'>
                                                <MaskImage w='1.2em' h='1.2em' url="/icons/star.svg" bg="#0f172a" hBg="" c="" hL="1" />
                                                <span>Explore SPEED & DOPAMINE ↗</span>
                                            </a>
                                            <a href='#form' style={{ "--pos": "100px", "--d": ".5s" }} className='px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold shadow-md hover:scale-105 transition-all flex items-center gap-2'>
                                                <MaskImage w='1.2em' h='1.2em' url="/icons/calender.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span>Book Consultation</span>
                                            </a>
                                        </div>

                                        <div style={{ "--pos": "100px", "--d": ".8s" }} className='contents-part sm:flex hidden xl:w-[75%] lg:w-[95%] justify-between mt-12 sm:text-[20px]'>
                                            <div className='flex flex-col gap-1 pe-6'>
                                                <h4 className='font-extrabold text-[1.3em] text-[var(--acc-1)]'>35,000+</h4>
                                                <span className='text-[var(--t-c-l)] text-[.8em] leading-tight'>Super-Specialty <br /> DM/MCh Seats</span>
                                            </div>
                                            <div className='flex flex-col gap-1 items-center border-l-[2px] border-r-[2px] border-[#ffffff30] px-6'>
                                                <h4 className='font-extrabold text-[1.3em] text-white'>3.5 Lakh+</h4>
                                                <span className='text-[var(--t-c-l)] text-center text-[.8em] leading-tight'>Doctors <br /> Mentored</span>
                                            </div>
                                            <div className='flex flex-col gap-1 items-center ps-6'>
                                                <h4 className='font-extrabold text-[1.3em] text-[#2BEFAD]'>25+ Yrs</h4>
                                                <span className='text-[var(--t-c-l)] text-center text-[.8em] leading-tight'>Clinical & Surgical <br /> Mastery</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-4 col-span-10 h-full">
                                    <div className='w-full flex items-end justify-center h-full slider-group-image-wrapper'>
                                        <div style={{ "--bg-image": "url(/banner/doc/f-5.png), url(/banner/doc/f-4.png), url(/banner/doc/f-3.png), url(/banner/doc/f-2.png), url(/banner/doc/f-1.png)" }} className='slider-group-image'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ "--hero-bg": "url(/banner/bg-2.png)" }} className="h-full hero-section-bg pt-10">
                            <div className="w-full max-w-[1500px] h-full mx-auto grid grid-cols-9">
                                <div className="lg:col-span-5 col-span-10 h-full lg:py-16 2xl:py-[180px] 2xl:pb-[140px] pt-20 py-10 pb-3">
                                    <div className="h-full hero-section-content flex flex-col justify-center xl:text-[20px] text-[20px] sm:ps-16 px-8">
                                        
                                        {/* Flagship Highlight Pill */}
                                        <div style={{ "--pos": "100px", "--d": ".1s" }} className="flex flex-wrap items-center gap-2 mb-3">
                                            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-md">
                                                Flagship Products
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-[11px] sm:text-xs">
                                                India's #1 Medical Coaching & Apps
                                            </span>
                                        </div>

                                        <h1 style={{ "--pos": "100px", "--d": ".2s" }} className="mb-2 text-[var(--t-c-l)] font-pt-san font-bold 2xl:text-[3em] xl:text-[2.4em] lg:text-[1.9em] sm:text-[2.2em] text-[1.4em] leading-[1.2] [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)]">
                                            SPEED & DOPAMINE
                                        </h1>
                                        <h3 style={{ "--pos": "100px", "--d": ".4s" }} className="mb-3 text-[var(--acc-1)] font-bold font-pt-san 2xl:text-[1.2em] xl:text-[.95em] lg:text-[.8em] sm:text-[.95em] text-[.7em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">
                                            Two Monumental Pillars Founded by Dr. K. Vinayak Senthil
                                        </h3>
                                        <h2 style={{ "--pos": "100px", "--d": ".6s" }} className="mb-4 text-[var(--t-c-l)] font-bold font-pt-san 2xl:text-[1.4em] xl:text-[1.15em] lg:text-[1em] sm:text-[1em] text-[1em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">
                                            Speed Learning App • SPEED Hospital • DOPAMINE Retreat CMR 2.0
                                        </h2>
                                        <p style={{ "--pos": "100px", "--d": ".8s" }} className="mb-8 text-[var(--t-c-l)] font-pt-san 2xl:text-[.93em] xl:text-[.8em] lg:text-[.7em] sm:text-[.8em] text-[.7em] font-light [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] sm:w-[85%] leading-relaxed">
                                            Empowering physicians across their journey — from first-year MBBS to super-specialty DM/MCh leadership, through world-class clinical care, high-yield digital platforms, and immersive campus retreats.
                                        </p>
                                        <div className="flex flex-wrap md:gap-4 gap-3 2xl:text-[16px] xl:text-[14px] text-[13px]">
                                            <a href='https://speedlearningapp.com/' target="_blank" rel="noreferrer" style={{ "--pos": "100px", "--d": ".5s" }} className='px-6 py-3.5 rounded-full bg-gradient-to-r from-[var(--acc-3)] to-[#0058A1] text-white font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2'>
                                                <MaskImage w='1.2em' h='1.2em' url="/icons/course.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span>Speed Learning App ↗</span>
                                            </a>
                                            <a href='https://dopaminemed.com/residential-neet-pg-inicet-pg-fmge/' target="_blank" rel="noreferrer" style={{ "--pos": "100px", "--d": ".5s" }} className='px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2'>
                                                <MaskImage w='1.2em' h='1.2em' url="/icons/star.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span>Dopamine Retreat (CMR 2.0) ↗</span>
                                            </a>
                                        </div>

                                        <div style={{ "--pos": "100px", "--d": ".8s" }} className='contents-part sm:flex hidden xl:w-[75%] lg:w-[95%] justify-between mt-12 sm:text-[20px]'>
                                            <div className='flex flex-col gap-1 pe-6'>
                                                <h4 className='font-extrabold text-[1.3em] text-[#FFD700]'>#1 Ranked</h4>
                                                <span className='text-[var(--t-c-l)] text-[.8em] leading-tight'>NEET SS DM/MCh <br /> Training System</span>
                                            </div>
                                            <div className='flex flex-col gap-1 items-center border-l-[2px] border-r-[2px] border-[#ffffff30] px-6'>
                                                <h4 className='font-extrabold text-[1.3em] text-[#2BEFAD]'>125 Acres</h4>
                                                <span className='text-[var(--t-c-l)] text-center text-[.8em] leading-tight'>SPEED Medical <br /> Village Campus</span>
                                            </div>
                                            <div className='flex flex-col gap-1 items-center ps-6'>
                                                <h4 className='font-extrabold text-[1.3em] text-white'>24 Weeks</h4>
                                                <span className='text-[var(--t-c-l)] text-center text-[.8em] leading-tight'>Dopamine Retreat <br /> Intensive Cycle</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-4 col-span-10 h-full">
                                    <div className='w-full flex items-end justify-center h-full slider-group-image-wrapper'>
                                        <div style={{ "--bg-image": "url(/banner/doc/1/f-5.png), url(/banner/doc/1/f-4.png), url(/banner/doc/1/f-3.png), url(/banner/doc/1/f-2.png), url(/banner/doc/1/f-1.png)" }} className='slider-group-image'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
}

export default HeroSection;