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
                            <div className="w-full max-w-[1500px] h-full mx-auto grid  grid-cols-9">
                                <div className="lg:col-span-5 col-span-10 h-full lg:py-20 2xl:py-[190px] 2xl:pb-[150px] pt-20 py-10 pb-3">
                                    <div className="h-full hero-section-content flex flex-col justify-center xl:text-[20px] text-[20px] sm:ps-16 px-8">
                                        <h1 style={{ "--pos": "100px", "--d": ".2s" }} className="mb-2 text-[var(--t-c-l)] font-pt-san font-bold 2xl:text-[3.17em] xl:text-[2.5em] lg:text-[2em] sm:text-[2.3em] text-[1.5em] leading-[1.2] [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] ">Dr K Vinayak Senthil</h1>
                                        <h3 style={{ "--pos": "100px", "--d": ".4s" }} className="mb-4 text-[var(--acc-1)] font-bold font-pt-san 2xl:text-[1.32em] xl:text-[1em] lg:text-[.8em] sm:text-[1em] text-[.7em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">MBBS., M.Ch(CVTS)., MRCS., UK DNB(Gen Surgery), FIAGES, FAIS, FMAS, FLS(SAGES) USA</h3>
                                        <h2 style={{ "--pos": "100px", "--d": ".6s" }} className="mb-9 text-[var(--t-c-l)] font-bold font-pt-san 2xl:text-[1.75em] xl:text-[1.3em] lg:text-[1em] sm:text-[1em] text-[1em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">Cardio Vascular & Thoracic Surgery</h2>
                                        <p style={{ "--pos": "100px", "--d": ".8s" }} className="mb-10 text-[var(--t-c-l)] font-pt-san 2xl:text-[.93em] xl:text-[.8em] lg:text-[.7em] sm:text-[.8em] text-[.7em] font-medium [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] sm:w-[75%]">Harnessing the power of artificial intelligence to advance cardiovsscular health and improve patient care.</p>
                                        <div className="flex md:gap-8 gap-3 2xl:text-[18px] xl:text-[15px] text-[14px] ">
                                            <a href='#form' style={{ "--pos": "100px", "--d": ".5s" }} className='gra-6 hero-btn  cursor-pointer flex justify-center items-center gap-2 py-[.7em] md:px-6 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='1.2em' h='1.2em' url="/icons/calender.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] tracking-[1px]'>Schedule an Appointment</span>
                                            </a>
                                        </div>

                                        <div style={{ "--pos": "100px", "--d": ".8s" }} className='contents-part sm:flex hidden xl:w-[65%] lg:w-[90%] justify-between mt-20 sm:text-[20px]'>
                                            <div className='flex flex-col gap-1 pe-7'>
                                                <h4 className='font-semibold text-[1.3em] text-[var(--t-c-l)]  '>800+</h4>
                                                <span className='text-[var(--t-c-l)]  text-[.85em] leading-5'>Succesful <br /> Surgeries</span>
                                            </div>
                                            <div className='flex flex-col gap-1 items-center border-l-[3px] border-r-[3px] border-[#ffffff50] px-9'>
                                                <h4 className='font-semibold text-[1.3em] text-[var(--t-c-l)]  text-center'>96%</h4>
                                                <span className='text-[var(--t-c-l)] text-center text-[.85em] leading-5'>Success rate <br /> we provide</span>
                                            </div>
                                            <div className='flex flex-col gap-1 items-center ps-7'>
                                                <h4 className='font-semibold text-[1.3em] text-[var(--t-c-l)]  text-center'>35,000+</h4>
                                                <span className='text-[var(--t-c-l)] text-center text-[.85em] leading-5'>People <br /> Trusted us</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-4  col-span-10 h-full">
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
                            <div className="w-full max-w-[1500px] h-full mx-auto grid  grid-cols-9">
                                <div className="lg:col-span-5 col-span-10 h-full lg:py-20 2xl:py-[190px] 2xl:pb-[150px] pt-20 py-10 pb-3">
                                    <div className="h-full hero-section-content flex flex-col justify-center xl:text-[20px] text-[20px] sm:ps-16 px-8">
                                        <h1 style={{ "--pos": "100px", "--d": ".2s" }} className="mb-2 text-[var(--t-c-l)] font-pt-san font-bold 2xl:text-[3.17em] xl:text-[2.5em] lg:text-[2em] sm:text-[2.3em] text-[1.5em] leading-[1.2] [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] ">Dr K Vinayak Senthil</h1>
                                        <h3 style={{ "--pos": "100px", "--d": ".4s" }} className="mb-4 text-[var(--acc-1)] font-bold font-pt-san 2xl:text-[1.32em] xl:text-[1em] lg:text-[.8em] sm:text-[1em] text-[.7em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">MBBS., M.Ch(CVTS)., MRCS., UK DNB(Gen Surgery), FIAGES, FAIS, FMAS, FLS(SAGES) USA</h3>
                                        <h2 style={{ "--pos": "100px", "--d": ".6s" }} className="mb-9 text-[var(--t-c-l)] font-bold font-pt-san 2xl:text-[1.75em] xl:text-[1.3em] lg:text-[1em] sm:text-[1em] text-[1em] lg:w-[90%] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">Cardio Vascular & Thoracic Surgery</h2>
                                        <p style={{ "--pos": "100px", "--d": ".8s" }} className="mb-10 text-[var(--t-c-l)] font-pt-san 2xl:text-[.93em] xl:text-[.8em] lg:text-[.7em] sm:text-[.8em] text-[.7em] font-medium [text-shadow:0px_0px_10px_rgba(0,0,0,0.1)] sm:w-[75%]">Harnessing the power of artificial intelligence to advance cardiovsscular health and improve patient care.</p>
                                        <div className="flex md:gap-8 gap-3 2xl:text-[18px] xl:text-[15px] text-[14px] ">
                                            <a href='#form' style={{ "--pos": "100px", "--d": ".5s" }} className='gra-6  cursor-pointer hero-btn flex justify-center items-center gap-2 py-[.7em] md:px-6 px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                                                <MaskImage w='1.2em' h='1.2em' url="/icons/calender.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                                                <span className='text-[var(--t-c-l)] tracking-[1px]'>Schedule an Appointment</span>
                                            </a>
                                        </div>

                                        <div style={{ "--pos": "100px", "--d": ".8s" }} className='contents-part sm:flex hidden xl:w-[65%] lg:w-[90%] justify-between mt-20 sm:text-[20px]'>
                                            <div className='flex flex-col gap-1 pe-7'>
                                                <h4 className='font-semibold text-[1.3em] text-[var(--t-c-l)]  '>800+</h4>
                                                <span className='text-[var(--t-c-l)]  text-[.85em] leading-5'>Succesful <br /> Surgeries</span>
                                            </div>
                                            <div className='flex flex-col gap-1 items-center border-l-[3px] border-r-[3px] border-[#ffffff50] px-9'>
                                                <h4 className='font-semibold text-[1.3em] text-[var(--t-c-l)]  text-center'>96%</h4>
                                                <span className='text-[var(--t-c-l)] text-center text-[.85em] leading-5'>Success rate <br /> we provide</span>
                                            </div>
                                            <div className='flex flex-col gap-1 items-center ps-7'>
                                                <h4 className='font-semibold text-[1.3em] text-[var(--t-c-l)]  text-center'>35,000+</h4>
                                                <span className='text-[var(--t-c-l)] text-center text-[.85em] leading-5'>People <br /> Trusted us</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-4  col-span-10 h-full">
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