import MaskImage from '../../components/MaskImage';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function RankersVideo() {
    const RankPaginationRef = useRef(null);
    const RankPrevRef = useRef(null);
    const RankNextRef = useRef(null);

    const rankers = [
        { id: 1, rank: "2", name: "Dr. Akshay Kumar H", link: "https://youtu.be/9UhRHzUobXI?si=ImPhH--fiqRQoZ0S", thumbnail: "dr-akshay-kumar-h", achieve: "Achiever, INI SS NOV 2025" },
        { id: 2, rank: "1", name: "Dr. Prasad Ajay Channewar", link: "https://youtu.be/9UhRHzUobXI?si=ImPhH--fiqRQoZ0S", thumbnail: "dr-prasad-ajay-channewar", achieve: "Achiever, INI SS NOV 2025" },
        { id: 3, rank: "2", name: "Dr. Yash Miglani", link: "https://youtu.be/9UhRHzUobXI?si=ImPhH--fiqRQoZ0S", thumbnail: "dr-yash-miglani", achieve: "Achiever, INI SS NOV 2025" },
        { id: 4, rank: "2", name: "Dr. Akshay Kumar H", link: "https://youtu.be/9UhRHzUobXI?si=ImPhH--fiqRQoZ0S", thumbnail: "dr-akshay-kumar-h", achieve: "Achiever, INI SS NOV 2025" },
        { id: 5, rank: "1", name: "Dr. Prasad Ajay Channewar", link: "https://youtu.be/9UhRHzUobXI?si=ImPhH--fiqRQoZ0S", thumbnail: "dr-prasad-ajay-channewar", achieve: "Achiever, INI SS NOV 2025" },
        { id: 6, rank: "2", name: "Dr. Yash Miglani", link: "https://youtu.be/9UhRHzUobXI?si=ImPhH--fiqRQoZ0S", thumbnail: "dr-yash-miglani", achieve: "Achiever, INI SS NOV 2025" },
    ];

    const [activeVideo, setActiveVideo] = useState(null);
    const getEmbedUrl = (url) => {
        const videoId = url.split("youtu.be/")[1]?.split("?")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <div>
            <div className=' py-20'>
                <div className='w-full max-w-[1350px] h-full mx-auto px-0 sm:px-2'>
                    <div className='headings xl:text-[19px] lg:text-[16px] text-[10px] px-2'>
                        <p className='text-[var(--s-c)] text-center sm:text-[.8em] text-[1em] font-medium'>Toppers Stories</p>
                        <h2 className='text-[var(--acc-1)] font-semibold text-center text-[2.3em] mb-1 uppercase'>SPEED - NEET SS toppers story</h2>
                        <p className='text-[var(--t-c-d)] text-center text-[1em]'>Take a moment and see what our toppers say about SPEED Institute</p>
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
                                0: { slidesPerView: 1, spaceBetween: 40 },
                                640: { slidesPerView: 2, spaceBetween: 40 },
                                1024: { slidesPerView: 3, spaceBetween: 40 },
                            }}

                            onInit={(swiper) => {
                                setTimeout(() => {
                                    swiper.params.navigation.prevEl = RankPrevRef.current;
                                    swiper.params.navigation.nextEl = RankNextRef.current;
                                    swiper.params.pagination.el = RankPaginationRef.current;

                                    swiper.navigation.init();
                                    swiper.navigation.update();

                                    swiper.pagination.init();
                                    swiper.pagination.render();
                                    swiper.pagination.update();
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
                            className="h-full rankersVideoswiper"
                        >
                            {rankers.length > 0 && rankers.map(data => (
                                <SwiperSlide key={data.id}>
                                    <div className='flex flex-col'>
                                        <div onClick={() => setActiveVideo(data.link)}
                                            className='cursor-pointer bg-[var(--bg-w)] relative flex justify-center items-center rankers-wrapper shadow-[6px_6px_17px_rgba(0,0,0,0.25)] aspect-[1.85] rounded-[11px] overflow-hidden'>
                                            <img className='absolute object-cover' src={`/top-rankers/thumbnail/${data.thumbnail}.png`} alt="" />
                                            <div className='bg-[#ffffff10] w-[11%] text-[16px] aspect-square flex justify-center items-center rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)] backdrop-blur'>
                                                <MaskImage w='1.3em' h='1.3em' url="/icons/play.svg" bg="var(--bg-w)" hBg="" c="translate-x-[2px]" hL="1" />
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center mt-3 xl:text-[18px] lg:text-[16px] sm:text-[18px] text-[17px] px-2'>
                                            <div className='flex flex-col'>
                                                <h2 className='text-[var(--t-c-d)] font-semibold text-[1em]'>{data.name}</h2>
                                                <h2 className='text-[#45454590] font-semibold text-[.7em]'>{data.achieve}</h2>
                                            </div>
                                            <div className={`side-badge gra-2 text-[var(--t-c-l)] font-medium w-[13.5%] aspect-square flex justify-center items-center`}>
                                                <span className='translate-x-[-4px] translate-y-[-2px] sm:text-[.9em] text-[.85em]'>#{data.rank}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}


                        </Swiper>
                        {activeVideo && (
                            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

                                {/* Close button */}
                                <div
                                    onClick={() => setActiveVideo(null)}
                                    className="absolute top-5 right-5 text-white text-2xl cursor-pointer"
                                >
                                    ✕
                                </div>

                                {/* Video */}
                                <div className="w-[90%] max-w-[800px] aspect-video bg-black rounded-lg overflow-hidden">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={getEmbedUrl(activeVideo)}
                                        title="YouTube video"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                        {/* Custom Buttons */}
                        <div ref={RankPrevRef} className="sm:text-[16px] text-[12px] absolute flex justify-center items-center  top-1/2 sm:translate-y-[-170%] translate-y-[-200%] z-20 cursor-pointer bg-[var(--acc-5)] sm:w-[35px] w-[28px] aspect-square rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
                            <MaskImage w='1.1em' h='1.1em' url="/icons/ar-3.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                        </div>

                        <div ref={RankNextRef} className="sm:text-[16px] text-[12px]  absolute flex justify-center items-center right-0 top-1/2 sm:translate-y-[-170%] translate-y-[-200%] z-20 cursor-pointer bg-[var(--acc-5)] sm:w-[35px] w-[28px] aspect-square rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
                            <MaskImage w='1.1em' h='1.1em' url="/icons/ar-3.svg" bg="var(--bg-w)" hBg="" c="rotate-[180deg]" hL="1" />
                        </div>

                        {/* Custom Pagination */}
                        <div ref={RankPaginationRef} className="custom-pagination flex justify-center mt-5"></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RankersVideo;