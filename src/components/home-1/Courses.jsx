import MaskImage from '../../components/MaskImage';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";

function Courses() {
    const courses = [
        { id: 1, name: "NEET SS / INI-SS", image: "neet-ss-ini-ss", description: "For NEET SS / INI-SS Graduates", link: "neet-ss-ini-ss" },
        { id: 2, name: "PG Residency", image: "pg-residency", description: "For PG RESIDENCY MD/MS/DNB", link: "pg-residency" },
        { id: 3, name: "EXIT SS - DM/MCH", image: "exit-ss-dm-mch", description: "For EXIT SS - DM/MCH Graduates", link: "exit-ss-dm-mch" },
    ];

    return (

        <div className=' pb-20 md:pt-5'>
            <div className='w-full max-w-[1350px] h-full mx-auto px-2'>
                <div className='headings xl:text-[19px] lg:text-[16px] text-[10px] px-2'>
                    <p className='text-[var(--s-c)] text-center sm:text-[.8em] text-[1em] font-medium'>Speed Courses</p>
                    <h2 className='text-[var(--acc-1)] font-semibold text-center text-[2.3em] mb-1 uppercase'>More Courses from SPEED Learning App</h2>
                    <p className='text-[var(--t-c-d)] text-center text-[1em]'>Take a moment to explore our courses and see how SPEED Institute prepares you for success.</p>
                </div>
                <div className='w-full grid grid-cols-12 md:mt-12 mt-5 pt-4 lg:gap-6 gap-4'>
                    {courses.length > 0 && courses.map(data => (
                        <div key={data.id} className='lg:col-span-4 sm:col-span-6 col-span-12'>
                            <div className='xl:text-[20px] lg:text-[14px] md:text-[20px] sm:text-[14px] text-[17px] bg-[var(--bg-w)] relative flex  items-center shadow-[6px_6px_17px_rgba(0,0,0,0.25)] isolate aspect-[1.7] rounded-[11px] overflow-hidden'>
                                <img className='absolute object-cover z-[-1]' src={`/courses/${data.image}.png`} alt="courses" />
                                <div className='w-full h-full flex items-end justify-between p-4 lg:px-8'>
                                    <div className='flex justify-end flex-col'>
                                        <h2 className='text-[var(--t-c-l)] font-semibold text-[1em] [text-shadow:0px_0px_10px_rgba(0,0,0,0.5)]'>{data.name}</h2>
                                        <p className='text-[var(--t-c-l)] font-medium text-[.7em] [text-shadow:0px_0px_10px_rgba(0,0,0,0.5)]'>{data.description}</p>
                                    </div>
                                    <Link className={`gra-4 gap-4 w-max text-[16px] py-[.3em] flex justify-center items-center px-5 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]`}>
                                        <span className='text-[var(--t-c-l)] text-[.7em] tracking-[.5px] font-medium flex justify-center items-center'>View More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Courses;