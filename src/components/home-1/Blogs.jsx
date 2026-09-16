import MaskImage from '../MaskImage';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';


function Blogs() {
    const BlogPaginationRef = useRef(null);
    const BlogPrevRef = useRef(null);
    const BlogNextRef = useRef(null);
    const blogData = [
        {
            id: 1,
            title: "Dr Anurag Vilas Ghotkar Secured Top Ranks in INI-SS & NEET SS Nephrology",
            category: ["SPEED BLOG", "INI-SS & NEET SS"],
            author: "Admin",
            date: "May 21, 2025",
            image: "3",
            link: "#"
        },
        {
            id: 2,
            title: "How Dr. Satya Cracked INI-SS Neonatology With Rank 11 In His First Attempt",
            category: ["SPEED BLOG", "INI-SS & NEET SS"],
            author: "Admin",
            date: "May 21, 2025",
            image: "4",
            link: "#"
        },
        {
            id: 3,
            title: "NEET SS Urology Preparation Success Story: INI-SS Ranker Strategy By Dr. Manis Har",
            category: ["SPEED BLOG", "INI-SS & NEET SS"],
            author: "Admin",
            date: "May 21, 2025",
            image: "1",
            link: "#"
        },
        {
            id: 4,
            title: "Dr. Vishnu Bhardwaj Secured Rank 9 In INI-SS Neonatology A Journey Of Consistency",
            category: ["SPEED BLOG", "INI-SS & NEET SS"],
            author: "Admin",
            date: "May 21, 2025",
            image: "2",
            link: "#"
        },
        {
            id: 5,
            title: "Dr Anurag Vilas Ghotkar Secured Top Ranks in INI-SS & NEET SS Nephrology",
            category: ["SPEED BLOG", "INI-SS & NEET SS"],
            author: "Admin",
            date: "May 21, 2025",
            image: "3",
            link: "#"
        },
        {
            id: 6,
            title: "How Dr. Satya Cracked INI-SS Neonatology With Rank 11 In His First Attempt",
            category: ["SPEED BLOG", "INI-SS & NEET SS"],
            author: "Admin",
            date: "May 21, 2025",
            image: "4",
            link: "#"
        },
        {
            id: 7,
            title: "NEET SS Urology Preparation Success Story: INI-SS Ranker Strategy By Dr. Manis Har",
            category: ["SPEED BLOG", "INI-SS & NEET SS"],
            author: "Admin",
            date: "May 21, 2025",
            image: "1",
            link: "#"
        },
        {
            id: 8,
            title: "Dr. Vishnu Bhardwaj Secured Rank 9 In INI-SS Neonatology A Journey Of Consistency",
            category: ["SPEED BLOG", "INI-SS & NEET SS"],
            author: "Admin",
            date: "May 21, 2025",
            image: "2",
            link: "#"
        },
    ];
    return (

        <div className=' md:pb-20 md:pt-10 pb-16'>
            <div className='w-full max-w-[1450px] h-full mx-auto px-2'>
                <div className='headings xl:text-[19px] lg:text-[16px] text-[10px] px-2 flex flex-col items-center'>
                    <p className='text-[var(--s-c)] text-center sm:text-[.8em] text-[1em] font-medium'>What good works we are doing</p>
                    <h2 className='text-[var(--acc-1)] font-semibold text-center text-[2.3em] mb-1 uppercase'>our lastest blogs</h2>
                    <p className='text-[var(--t-c-d)] text-center text-[1em] xl:w-[70%]'>Stay updated with the latest insights, trends, and expert opinions in medical education and specialization. Explore our blogs to learn, grow, and stay ahead in your medical career.</p>
                </div>
                <div className='py-10 relative'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.1,
                                spaceBetween: 20,
                                centeredSlides: true
                            },
                            620: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                centeredSlides: false
                            },
                            998: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                                centeredSlides: false
                            },
                            1150: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                                centeredSlides: false
                            },
                            1300: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                                centeredSlides: false
                            }
                        }}

                        onInit={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = BlogPrevRef.current;
                                swiper.params.navigation.nextEl = BlogNextRef.current;
                                swiper.params.pagination.el = BlogPaginationRef.current;

                                swiper.navigation.init();
                                swiper.navigation.update();

                                swiper.pagination.init();
                                swiper.pagination.render();
                                swiper.pagination.update();
                            });
                        }}

                        pagination={{
                            el: BlogPaginationRef.current,
                            clickable: true,
                        }}

                        navigation={{
                            prevEl: BlogPrevRef.current,
                            nextEl: BlogNextRef.current,
                        }}
                        className="h-full rankersVideoswiper"
                    >
                        {blogData.length > 0 && blogData.map(data => (
                            <SwiperSlide key={data.id}>
                                <div className=' shadow-[0px_0px_6px_rgba(0,0,0,0.1)] rounded-[14px]'>
                                    <div className='w-full px-4 pt-4 border-b-[2px] border-b-[#D0D0D040]'>
                                        <div className='w-full relative aspect-[1.5] shadow-[0px_0px_6px_rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden'>
                                            <img className='absolute w-full h-full object-cover' src={`/blog/${data.image}.png`} alt="" />
                                            <div className='text-[15px] absolute z-[2] gra-5 flex items-center gap-1 px-3 py-2 right-0 rounded-bl-[15px]'>
                                                <MaskImage w='.9em' h='.9em' url="/icons/calender.svg" bg="var(--t-c-l)" hBg="" c="" hL="1" />
                                                <p className='text-[var(--t-c-l)] text-[.85em] font-medium flex'>{data.date}</p>
                                            </div>
                                        </div>
                                        <div className='text-[15px] flex items-center gap-2 px-2 py-3'>
                                            <MaskImage w='.9em' h='.9em' url="/icons/user.svg" bg="#45454570" hBg="" c="" hL="1" />
                                            <p className='text-[#7d7d7d] text-[.85em] font-medium flex'>By {data.author}</p>
                                        </div>
                                    </div>
                                    <div className='w-full  px-5 py-3 text-[16px]'>
                                        <div className='flex gap-3 '>
                                            {data.category.slice(0, 2).map((cat, i) => (
                                                <p
                                                    key={i}
                                                    style={{
                                                        "--c": i === 0 ? "var(--p-c)" : "var(--s-c)",
                                                        "--o": "10%"
                                                    }}
                                                    className={`flex items-center justify-center  uppercase border-b rounded-full border-b-[#D0D0D040] font-semibold text-[${i === 0 ? "var(--p-c)" : "var(--s-c)"}] text-[.6em] px-2 pt-[4px] pb-[1px] color-mix`}>
                                                    {cat}
                                                </p>
                                            ))}
                                        </div>
                                        <div className='flex mt-4'>
                                            <p className='text-[var(--p-c)] font-semibold text-[.95em] leading-5'>{data.title}</p>
                                        </div>
                                        <Link to={data.link} className='text-[14px] flex items-end gap-[5px]  my-3 mt-7'>
                                            <p className='text-[var(--t-c-d)] text-[.85em] font-semibold  leading-[9px] flex uppercase'>REad more</p>
                                            <MaskImage w='.65em' h='.65em' url="/icons/ar-4.svg" bg="var(--t-c-d)" hBg="" c="" hL="1" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}





                    </Swiper>
                    {/* Custom Buttons */}
                    <div ref={BlogPrevRef} className="sm:text-[16px] text-[12px] absolute flex justify-center items-center  top-1/2 translate-y-[-50%] sm:translate-x-[0] translate-x-[50%]  z-20 cursor-pointer bg-[var(--acc-5)] sm:w-[35px] w-[28px] aspect-square rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
                        <MaskImage w='1.1em' h='1.1em' url="/icons/ar-3.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                    </div>

                    <div ref={BlogNextRef} className="sm:text-[16px] text-[12px]  absolute flex justify-center items-center right-0 top-1/2 translate-y-[-50%] sm:-translate-x-[0] -translate-x-[50%]   z-20 cursor-pointer bg-[var(--acc-5)] sm:w-[35px] w-[28px] aspect-square rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
                        <MaskImage w='1.1em' h='1.1em' url="/icons/ar-3.svg" bg="var(--bg-w)" hBg="" c="rotate-[180deg]" hL="1" />
                    </div>

                    {/* Custom Pagination */}
                    {/* <div ref={BlogPaginationRef} className="custom-pagination flex justify-center mt-5"></div> */}
                </div>
            </div>
        </div>

    );
}

export default Blogs;