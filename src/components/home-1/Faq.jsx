import MaskImage from '../../components/MaskImage';
import { Link } from 'react-router-dom';
import { useRef, useState } from "react";

function Faqs() {
    const [activeIndex, setActiveIndex] = useState(1);

    const faqData = [
        {
            id: 1,
            question: "Which is the best app for preparing for the NEET SS?",
            answer: "The popular choice for both NEET SS and INI SS is Speed Learning App, developed by Speed Medical Institute. It provides a wide range of features, including live interactive classes, recorded video lectures by expert faculty, extensive question banks, subject-wise tests, and grand tests. The app covers various specialties, including Medical, Surgical, Paediatrics and other groups."
        },
        {
            id: 2,
            question: "Which app is best for the NEET SS plastic surgery preparation (e.g., Marrow, Speed, etc.)?",
            answer: ""
        },
        {
            id: 3,
            question: "Which is the best app for NEET SS surgery preparation that has relevant mock tests?",
            answer: ""
        },
        {
            id: 4,
            question: "Which online app is best to start for NEET-SS hematopathology preparation after completing pathology?",
            answer: ""
        },
        {
            id: 5,
            question: "Which is the best app for the NEET SS medicine preparation?",
            answer: ""
        },
        {
            id: 6,
            question: "What is the best app for preparation for the INI SS pediatric endocrinology?",
            answer: ""
        }
    ];

    return (

        <div className=' pb-20 md:pt-5'>
            <div className='w-full max-w-[1450px] h-full mx-auto px-2'>
                <div className='w-full grid grid-cols-12'>
                    <div className="lg:col-span-6 col-span-12 lg:mb-0 mb-10">
                        <div className='flex flex-col justify-center items-center'>
                            <div className='headings xl:text-[19px] lg:text-[16px] text-[14px] px-2 flex flex-col items-center'>
                                <div className='text-[18px] flex items-center gap-1 px-2 py-3'>
                                    <MaskImage w='.9em' h='.9em' url="/icons/dia.svg" bg="var(--p-c)" hBg="" c="" hL="1" />
                                    <p className='text-[var(--t-c-d)] text-[1em] font-bold flex uppercase'>faq</p>
                                </div>
                                <h2 className='text-[var(--t-c-d)] font-bold text-center text-[2.6em] mb-3 leading-[1.2]'>Frequently <br /> Asked <span className='text-[var(--p-c)]'>Questions</span></h2>
                                <p className='text-[var(--t-c-d)] text-center text-[.75em] '>Trusted by thousands across India, find answers to your most common questions.</p>
                            </div>
                            <div className='mt-2 lg:w-[100%] md:w-[70%]'>
                                <img className='w-full' src="/faq/faq.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-6 col-span-12 h-full lg:ps-5 px-1'>
                        <div className=' h-full flex flex-col gap-4 w-full justify-center items-center'>
                            {faqData.length > 0 && faqData.map((data, index) => (
                                <div key={data.id} className='bg-[var(--bg-w)] h-max sm:text-[16px] text-[13px] w-full cursor-pointer overflow-hidden shadow-[0px_0px_17px_rgba(0,0,0,0.1)] sm:px-5 px-3 pt-4 rounded-[13px] '>
                                    <div
                                        onClick={() =>
                                            setActiveIndex(activeIndex === index + 1 ? null : index + 1)
                                        }
                                        className='flex sm:gap-4 gap-2 items-center pb-5'>
                                        <div className='w-[2.2em] aspect-square flex-shrink-0 font-pt-san bg-[var(--bg-w)] shadow-[0px_2px_5px_rgba(0,0,0,0.16)] rounded-full flex justify-center items-center text-[1.2em] text-[var(--p-c)] font-bold'>0{index + 1}</div>
                                        <p className='text-[var(--t-c-d)] font-semibold text-[1.03em] leading-[1.2]'>{data.question}</p>
                                        <div className='w-[2em] flex-shrink-0 aspect-square ms-auto  rounded-full flex justify-center items-center border-[2px] border-[var(--p-c)] '>
                                            <MaskImage w='1em' h='1em' url={`/icons/${activeIndex === index + 1 ? "c-1" : "question"}.svg`} bg="var(--p-c)" hBg="" c="" hL="1" />
                                        </div>
                                    </div>
                                    <div className={` ${activeIndex === index + 1
                                        ? "max-h-[500px] opacity-100 py-5"
                                        : "max-h-0 opacity-0"} 
                                        px-2 border-t-[2px] border-dashed border-[var(--p-c)] transition-all duration-500`}>
                                        <p className='text-[.9em] font-semibold opacity-70 font-pt-san'>{data.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Faqs;