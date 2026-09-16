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
            <div className='w-full max-w-[1920px] h-full mx-auto relative '>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}

                    onInit={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.params.pagination.el = paginationRef.current;

                            swiper.navigation.init();
                            swiper.navigation.update();

                            swiper.pagination.init();
                            swiper.pagination.render();
                            swiper.pagination.update();
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
                        <div className="h-full hero-section-bg">
                            <div className="w-full max-w-[1600px] h-full mx-auto grid 2xl:grid-cols-9 grid-cols-10">
                                <div className="lg:col-span-5 col-span-10 h-full lg:py-20 2xl:py-[210px] md:py-10 py-10 pb-3">
                                    <div className="h-full hero-section-content flex flex-col justify-center text-[20px] lg:px-20 sm:px-10 px-5">
                                        <p style={{ "--pos": "100px", "--d": "0s" }} className="text-[var(--s-c)] xl:text-[.87em] lg:text-[.7em] sm:text-[.8em] text-[.55em] font-medium [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] mb-4">Discover the Perfect NEET SS Pathway for You!</p>
                                        <h1 style={{ "--pos": "100px", "--d": ".2s" }} className="text-[var(--t-c-d)] uppercase font-bold 2xl:text-[2.64em] xl:text-[1.8em] lg:text-[1.4em] sm:text-[2em] text-[1.2em] leading-[1.2] [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] md:mb-8 mb-5">Your One-Stop Resource for <span className="text-[#20A48A]">NEET SS / INI-SS</span></h1>
                                        <h3 style={{ "--pos": "100px", "--d": ".4s" }} className="text-[var(--t-c-d)] 2xl:text-[.87em] xl:text-[.7em] lg:text-[.55em] sm:text-[.8em] text-[.55em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)] md:border-l-[3px] border-l-[2px] border-l-[var(--acc-1)] px-2">A bunch of high-end Super Specialty courses for MD and MS Graduates
                                            to hone their skills in a particular specialization</h3>
                                        <div className="flex md:gap-8 gap-3 xl:text-[18px] md:text-[15px] text-[13px] md:mt-12 mt-7">
                                            <div style={{ "--pos": "100px", "--d": ".5s" }} className='gra-1 hero-btn flex justify-center items-center gap-2 py-[.55em] md:px-6 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='1.4em' h='1.4em' url="/icons/call.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Enquire Now</span>
                                            </div>
                                            <div style={{ "--pos": "100px", "--d": ".6s" }} className='bg-[var(--p-c)] hero-btn flex justify-center items-center gap-3 py-[.55em] md:px-8 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='.8em' h='.8em' url="/icons/ar-2.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Know more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="2xl:col-span-4 lg:col-span-5 col-span-10 h-full">
                                    <div className='w-full flex items-center justify-center h-full slider-group-image-wrapper'>
                                        <div className='slider-group-image'>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full hero-section-bg">
                            <div className="w-full max-w-[1600px] h-full mx-auto grid 2xl:grid-cols-9 grid-cols-10">
                                <div className="lg:col-span-5 col-span-10 h-full lg:py-20 2xl:py-[210px] md:py-10 py-10 pb-3">
                                    <div className="h-full hero-section-content flex flex-col justify-center text-[20px] lg:px-20 sm:px-10 px-5">
                                        <p style={{ "--pos": "100px", "--d": "0s" }} className="text-[var(--s-c)] xl:text-[.87em] lg:text-[.7em] sm:text-[.8em] text-[.55em] font-medium [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] mb-4">Discover the Perfect NEET SS Pathway for You!</p>
                                        <h1 style={{ "--pos": "100px", "--d": ".2s" }} className="text-[var(--t-c-d)] uppercase font-bold 2xl:text-[2.64em] xl:text-[1.8em] lg:text-[1.4em] sm:text-[2em] text-[1.2em] leading-[1.2] [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] md:mb-8 mb-5">Your One-Stop Resource for <span className="text-[#20A48A]">NEET SS / INI-SS</span></h1>
                                        <h3 style={{ "--pos": "100px", "--d": ".4s" }} className="text-[var(--t-c-d)] 2xl:text-[.87em] xl:text-[.7em] lg:text-[.55em] sm:text-[.8em] text-[.55em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)] md:border-l-[3px] border-l-[2px] border-l-[var(--acc-1)] px-2">A bunch of high-end Super Specialty courses for MD and MS Graduates
                                            to hone their skills in a particular specialization</h3>
                                        <div className="flex md:gap-8 gap-3 xl:text-[18px] md:text-[15px] text-[13px] md:mt-12 mt-7">
                                            <div style={{ "--pos": "100px", "--d": ".5s" }} className='gra-1 hero-btn flex justify-center items-center gap-2 py-[.55em] md:px-6 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='1.4em' h='1.4em' url="/icons/call.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Enquire Now</span>
                                            </div>
                                            <div style={{ "--pos": "100px", "--d": ".6s" }} className='bg-[var(--p-c)] hero-btn flex justify-center items-center gap-3 py-[.55em] md:px-8 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='.8em' h='.8em' url="/icons/ar-2.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Know more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="2xl:col-span-4 lg:col-span-5 col-span-10 h-full">
                                    <div className='w-full flex items-center justify-center h-full slider-group-image-wrapper'>
                                        <div className='slider-group-image'>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full hero-section-bg">
                            <div className="w-full max-w-[1600px] h-full mx-auto grid 2xl:grid-cols-9 grid-cols-10">
                                <div className="lg:col-span-5 col-span-10 h-full lg:py-20 2xl:py-[210px] md:py-10 py-10 pb-3">
                                    <div className="h-full hero-section-content flex flex-col justify-center text-[20px] lg:px-20 sm:px-10 px-5">
                                        <p style={{ "--pos": "100px", "--d": "0s" }} className="text-[var(--s-c)] xl:text-[.87em] lg:text-[.7em] sm:text-[.8em] text-[.55em] font-medium [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] mb-4">Discover the Perfect NEET SS Pathway for You!</p>
                                        <h1 style={{ "--pos": "100px", "--d": ".2s" }} className="text-[var(--t-c-d)] uppercase font-bold 2xl:text-[2.64em] xl:text-[1.8em] lg:text-[1.4em] sm:text-[2em] text-[1.2em] leading-[1.2] [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] md:mb-8 mb-5">Your One-Stop Resource for <span className="text-[#20A48A]">NEET SS / INI-SS</span></h1>
                                        <h3 style={{ "--pos": "100px", "--d": ".4s" }} className="text-[var(--t-c-d)] 2xl:text-[.87em] xl:text-[.7em] lg:text-[.55em] sm:text-[.8em] text-[.55em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)] md:border-l-[3px] border-l-[2px] border-l-[var(--acc-1)] px-2">A bunch of high-end Super Specialty courses for MD and MS Graduates
                                            to hone their skills in a particular specialization</h3>
                                        <div className="flex md:gap-8 gap-3 xl:text-[18px] md:text-[15px] text-[13px] md:mt-12 mt-7">
                                            <div style={{ "--pos": "100px", "--d": ".5s" }} className='gra-1 hero-btn flex justify-center items-center gap-2 py-[.55em] md:px-6 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='1.4em' h='1.4em' url="/icons/call.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Enquire Now</span>
                                            </div>
                                            <div style={{ "--pos": "100px", "--d": ".6s" }} className='bg-[var(--p-c)] hero-btn flex justify-center items-center gap-3 py-[.55em] md:px-8 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='.8em' h='.8em' url="/icons/ar-2.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Know more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="2xl:col-span-4 lg:col-span-5 col-span-10 h-full">
                                    <div className='w-full flex items-center justify-center h-full slider-group-image-wrapper'>
                                        <div className='slider-group-image'>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full hero-section-bg">
                            <div className="w-full max-w-[1600px] h-full mx-auto grid 2xl:grid-cols-9 grid-cols-10">
                                <div className="lg:col-span-5 col-span-10 h-full lg:py-20 2xl:py-[210px] md:py-10 py-10 pb-3">
                                    <div className="h-full hero-section-content flex flex-col justify-center text-[20px] lg:px-20 sm:px-10 px-5">
                                        <p style={{ "--pos": "100px", "--d": "0s" }} className="text-[var(--s-c)] xl:text-[.87em] lg:text-[.7em] sm:text-[.8em] text-[.55em] font-medium [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] mb-4">Discover the Perfect NEET SS Pathway for You!</p>
                                        <h1 style={{ "--pos": "100px", "--d": ".2s" }} className="text-[var(--t-c-d)] uppercase font-bold 2xl:text-[2.64em] xl:text-[1.8em] lg:text-[1.4em] sm:text-[2em] text-[1.2em] leading-[1.2] [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] md:mb-8 mb-5">Your One-Stop Resource for <span className="text-[#20A48A]">NEET SS / INI-SS</span></h1>
                                        <h3 style={{ "--pos": "100px", "--d": ".4s" }} className="text-[var(--t-c-d)] 2xl:text-[.87em] xl:text-[.7em] lg:text-[.55em] sm:text-[.8em] text-[.55em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)] md:border-l-[3px] border-l-[2px] border-l-[var(--acc-1)] px-2">A bunch of high-end Super Specialty courses for MD and MS Graduates
                                            to hone their skills in a particular specialization</h3>
                                        <div className="flex md:gap-8 gap-3 xl:text-[18px] md:text-[15px] text-[13px] md:mt-12 mt-7">
                                            <div style={{ "--pos": "100px", "--d": ".5s" }} className='gra-1 hero-btn flex justify-center items-center gap-2 py-[.55em] md:px-6 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='1.4em' h='1.4em' url="/icons/call.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Enquire Now</span>
                                            </div>
                                            <div style={{ "--pos": "100px", "--d": ".6s" }} className='bg-[var(--p-c)] hero-btn flex justify-center items-center gap-3 py-[.55em] md:px-8 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='.8em' h='.8em' url="/icons/ar-2.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Know more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="2xl:col-span-4 lg:col-span-5 col-span-10 h-full">
                                    <div className='w-full flex items-center justify-center h-full slider-group-image-wrapper'>
                                        <div className='slider-group-image'>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full hero-section-bg">
                            <div className="w-full max-w-[1600px] h-full mx-auto grid 2xl:grid-cols-9 grid-cols-10">
                                <div className="lg:col-span-5 col-span-10 h-full lg:py-20 2xl:py-[210px] md:py-10 py-10 pb-3">
                                    <div className="h-full hero-section-content flex flex-col justify-center text-[20px] lg:px-20 sm:px-10 px-5">
                                        <p style={{ "--pos": "100px", "--d": "0s" }} className="text-[var(--s-c)] xl:text-[.87em] lg:text-[.7em] sm:text-[.8em] text-[.55em] font-medium [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] mb-4">Discover the Perfect NEET SS Pathway for You!</p>
                                        <h1 style={{ "--pos": "100px", "--d": ".2s" }} className="text-[var(--t-c-d)] uppercase font-bold 2xl:text-[2.64em] xl:text-[1.8em] lg:text-[1.4em] sm:text-[2em] text-[1.2em] leading-[1.2] [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] md:mb-8 mb-5">Your One-Stop Resource for <span className="text-[#20A48A]">NEET SS / INI-SS</span></h1>
                                        <h3 style={{ "--pos": "100px", "--d": ".4s" }} className="text-[var(--t-c-d)] 2xl:text-[.87em] xl:text-[.7em] lg:text-[.55em] sm:text-[.8em] text-[.55em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)] md:border-l-[3px] border-l-[2px] border-l-[var(--acc-1)] px-2">A bunch of high-end Super Specialty courses for MD and MS Graduates
                                            to hone their skills in a particular specialization</h3>
                                        <div className="flex md:gap-8 gap-3 xl:text-[18px] md:text-[15px] text-[13px] md:mt-12 mt-7">
                                            <div style={{ "--pos": "100px", "--d": ".5s" }} className='gra-1 hero-btn flex justify-center items-center gap-2 py-[.55em] md:px-6 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='1.4em' h='1.4em' url="/icons/call.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Enquire Now</span>
                                            </div>
                                            <div style={{ "--pos": "100px", "--d": ".6s" }} className='bg-[var(--p-c)] hero-btn flex justify-center items-center gap-3 py-[.55em] md:px-8 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='.8em' h='.8em' url="/icons/ar-2.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] font-semibold tracking-[.5px]'>Know more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="2xl:col-span-4 lg:col-span-5 col-span-10 h-full">
                                    <div className='w-full flex items-center justify-center h-full slider-group-image-wrapper'>
                                        <div className='slider-group-image'>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                {/* Custom Pagination */}
                <div ref={paginationRef} className="custom-pagination hero-sec-pag absolute lg:flex flex-col justify-center hidden"></div>
            </div>
        </div >
    );
}

export default HeroSection;