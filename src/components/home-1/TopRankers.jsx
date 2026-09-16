import React, { useEffect, useState } from 'react';
import MaskImage from '../MaskImage';
import { Link } from 'react-router-dom';

function Toprankers() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const doctors = [
        { id: 1, rank: "1", name: "Dr. Ramesha CG", link: "dr-ramesha-cg", degree: "DM Medical Oncology", group: "neet ss 2024" },
        { id: 2, rank: "1", name: "Dr. Shahina", link: "dr-shahina", degree: "DM Respiratory Medicine", group: "neet ss 2024" },
        { id: 3, rank: "1", name: "Dr. Titishri Kundu", link: "dr-titishri-kundu", degree: "DM Clinical Pharmacology", group: "neet ss 2024" },
        { id: 4, rank: "1", name: "Dr. Zakir Hussain", link: "dr-zakir-hussain", degree: "DM Medical Group", group: "neet ss 2024" },
        { id: 5, rank: "1", name: "Dr. Yash Jain", link: "dr-yash-jain", degree: "MCH Surgical Group", group: "neet ss 2024" },
        { id: 6, rank: "1", name: "Dr. Kalpana Udupa", link: "dr-kalpana-udupa", degree: "MCH OBG Group", group: "neet ss 2024" },
        { id: 7, rank: "1", name: "Dr. Raima Mariam John", link: "dr-raima-mariam-john", degree: "MCH ENT Group", group: "neet ss 2024" },
        { id: 8, rank: "2", name: "Dr. Sushobhan Roy", link: "dr-sushobhan-roy", degree: "MCH Head & Neck Surgery", group: "neet ss 2024" }
    ];

    const visibleDoctors = doctors.slice(0, isMobile ? 4 : 5);

    return (
        <div className='bg-[#F6F7FE60] py-20'>
            <div className='w-full max-w-[1240px] h-full mx-auto'>
                <div className='headings xl:text-[19px] lg:text-[16px] text-[11px] px-5'>
                    <h2 className='text-[var(--acc-1)] font-semibold text-center text-[2.3em] mb-1 uppercase'>Top Rank Achievers</h2>
                    <p className='text-[var(--t-c-d)] text-center text-[1em]'>Celebrating our highest performers in NEET SS / INI-SS 2025</p>
                </div>
                <div className='grid xl:grid-cols-10 grid-cols-12 py-10 mx-auto'>
                    {visibleDoctors.length > 0 && visibleDoctors.map(data => (
                        <div key={data.id} className='xl:col-span-2 lg:col-span-3 sm:col-span-4 col-span-6 md:px-[15px] px-2 mb-6'>
                            <div className='top-rankers text-[13px] sm:text-[15px] bg-[var(--bg-w)] w-full shadow-[5px_5px_14px_rgba(0,0,0,0.1)] rounded-[12px] py-5 relative flex flex-col items-center'>
                                <div className={`top-badge ${data.rank == "1" ? "gra-2" : "gra-3"} text-[var(--t-c-l)] font-semibold absolute w-[25%] aspect-square flex justify-center items-center`}>
                                    <span className='translate-x-[-4px] translate-y-[-8px]'>#{data.rank}</span>
                                </div>
                                <div className='w-[58%] aspect-square  rounded-full relative overflow-hidden shadow-[0px_0px_25px_rgba(0,0,0,.12)]'>
                                    <img className='w-full absolute object-cover' src={`/top-rankers/${data.link}.png`} alt="logo" />
                                </div>
                                <h4 className='text-[1.05em] text-[var(--acc-3)] font-semibold mb-1 mt-4 text-center'>{data.name}</h4>
                                <p className='text-[.95em] text-[var(--t-c-d)] mb-4 text-center'>{data.degree}</p>
                                <div className={`${data.rank == "1" ? "gra-2" : "gra-3"} gap-3 py-[.2em] flex justify-center items-center px-6 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]`}>
                                    <span className='text-[var(--t-c-l)] text-[.8em] tracking-[.5px] uppercase flex justify-center items-center'>{data.group}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <Link className={`gra-2 gap-4 w-max text-[16px] py-[.5em] flex justify-center items-center px-6 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]`}>
                        <span className='text-[var(--t-c-l)] text-[.9em] tracking-[.5px] font-semibold flex justify-center items-center'>View More</span>
                        <MaskImage w='.8em' h='.8em' url="/icons/ar-2.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Toprankers;