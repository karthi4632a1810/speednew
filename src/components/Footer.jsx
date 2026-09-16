import React from 'react';
import MaskImage from '../components/MaskImage';

function Footer() {
  return (
    <>
      <div className='footer-sec mt-36 md:px-4 px-2'>
        <div className='w-full max-w-[1350px] h-full mx-auto px-2 relative lg:pt-40 pt-16 pb-10'>
          <div className='news-letter-sec w-full aspect-[9] rounded-[22px] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] absolute  px-20 text-[20px] hidden lg:grid grid-cols-2'>
            <div className='col-span-1 h-full'>
              <div className='flex items-center h-full'>
                <p className='[text-shadow:0px_0px_10px_rgba(0,0,0,0.2)] font-semibold text-[1.4em] text-[var(--t-c-l)] leading-9'>For Latest Updates <br />Subscribe To Our Newsletter</p>
              </div>
            </div>
            <div className='col-span-1 h-full w-full'>
              <div className='flex w-full h-full items-center'>
                <div className='bg-[#ffffff40] flex justify-between w-full shadow-[0px_0px_10px_rgba(0,0,0,0.17)] p-1 rounded-full'>
                  <div className='flex items-center ps-7'>
                    <input className='bg-[#ffffff00] [text-shadow:0px_0px_10px_rgba(0,0,0,0.2)] text-[var(--t-c-l)] placeholder:text-[var(--t-c-l)] text-[.7em] focus:outline-none focus:ring-0 focus:border-none' type="text" name="" id="" placeholder='Enter Your Email' />
                  </div>
                  <div className='bg-[var(--bg-w)] cursor-pointer text-[var(--s-c)] px-[1.5em] py-[1em] rounded-full [text-shadow:0px_0px_10px_rgba(0,0,0,0.2)] text-[.7em] font-semibold tracking-[1px]'>
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-12'>
            <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 sm:mb-10 mb-16 lg:mb-0'>
              <div className='flex flex-col text-[16px]'>
                <div className='w-[210px] mb-9'>
                  <img className='w-full' src="/logo/logo.png" alt="SPEED Multi Speciality Hospital" />
                </div>
                <p className='text-[var(--t-c-l)] font-semibold text-[1.1em] mb-2'>SPEED Multi Speciality Hospital</p>
                <p className='text-[var(--t-c-l)] opacity-90 text-[.95em]'>Dedicated to cardiothoracic excellence, round-the-clock emergency medical response, and world-class healthcare delivery under the leadership of Dr. K. Vinayak Senthil.</p>
                <div className='flex gap-3 items-center mt-10'>
                  <div className='bg-[#ffffff10] w-[2.85em] text-[16px] aspect-square flex justify-center items-center shadow-[0px_0px_10px_rgba(0,0,0,0.1)] backdrop-blur'>
                    <MaskImage w='1.1em' h='1.1em' url="/icons/facebook.svg" bg="var(--bg-w)" hBg="" c="translate-x-[2px]" hL="1" />
                  </div>
                  <div className='bg-[#ffffff10] w-[2.85em] text-[16px] aspect-square flex justify-center items-center shadow-[0px_0px_10px_rgba(0,0,0,0.1)] backdrop-blur'>
                    <MaskImage w='1em' h='1em' url="/icons/whatsapp.svg" bg="var(--bg-w)" hBg="" c="translate-x-[2px]" hL="1" />
                  </div>
                  <div className='bg-[#ffffff10] w-[2.85em] text-[16px] aspect-square flex justify-center items-center shadow-[0px_0px_10px_rgba(0,0,0,0.1)] backdrop-blur'>
                    <MaskImage w='1em' h='1em' url="/icons/instagram.svg" bg="var(--bg-w)" hBg="" c="translate-x-[2px]" hL="1" />
                  </div>
                  <div className='bg-[#ffffff10] w-[2.85em] text-[16px] aspect-square flex justify-center items-center shadow-[0px_0px_10px_rgba(0,0,0,0.1)] backdrop-blur'>
                    <MaskImage w='1em' h='1em' url="/icons/x.svg" bg="var(--bg-w)" hBg="" c="translate-x-[2px]" hL="1" />
                  </div>
                </div>
              </div>

            </div>
            <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 sm:mb-10 mb-16 lg:mb-0'>
              <div className='flex sm:justify-center'>
                <div className='footer-links text-[16px] w-max'>
                  <h2 className='text-[var(--t-c-l)] font-bold tracking-[1px] text-[1.22em] fh-text relative leading-6'>Useful  Links</h2>
                  <div className='footer-link mt-8 flex flex-col gap-3'>
                    <a className='text-[var(--t-c-l)] text-[1.07em] tracking-[.5px] fl-text relative' href="/">Home</a>
                    <a className='text-[var(--t-c-l)] text-[1.07em] tracking-[.5px] fl-text relative' href="/about">About Doctor</a>
                    <a className='text-[var(--t-c-l)] text-[1.07em] tracking-[.5px] fl-text relative' href="/#why-choose">Clinical Expertise</a>
                    <a className='text-[var(--t-c-l)] text-[1.07em] tracking-[.5px] fl-text relative' href="/#surgery">Cardiac Surgery</a>
                    <a className='text-[var(--t-c-l)] text-[1.07em] tracking-[.5px] fl-text relative' href="/contact">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 sm:mb-10 mb-16 lg:mb-0'>
              <div className='flex flex-col'>
                <div className='footer-links text-[16px] w-max'>
                  <h2 className='text-[var(--t-c-l)] font-bold tracking-[1px] text-[1.22em] fh-text relative leading-6'>Useful  Links</h2>
                  <div className='footer-link mt-8 flex flex-col gap-3'>
                    <a className='text-[var(--t-c-l)] text-[1.07em] tracking-[.5px] fl-text relative' href="/">NEET SS / INI-SS</a>
                    <a className='text-[var(--t-c-l)] text-[1.07em] tracking-[.5px] fl-text relative' href="/">PG RESIDENCY MD/MS/DNB</a>
                    <a className='text-[var(--t-c-l)] text-[1.07em] tracking-[.5px] fl-text relative' href="/">EXIT SS - DM/MCH</a>
                  </div>
                </div>
                <div className='footer-links text-[16px] w-max mt-8'>
                  <h2 className='text-[var(--t-c-l)] font-bold tracking-[1px] text-[1.22em] fh-text relative leading-6'>Get Our App</h2>
                  <div className='flex gap-2 items-center mt-6'>
                    <div className=' h-[2.2em] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'><img className='h-full' src="/app/google-l.svg" alt="app" /></div>
                    <div className=' h-[2.2em] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'><img className='h-full' src="/app/apple-l.svg" alt="app" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 sm:mb-10 mb-16 lg:mb-0'>
              <div className='flex'>
                <div className='footer-links text-[16px] w-full'>
                  <h2 className='text-[var(--t-c-l)] font-bold tracking-[1px] text-[1.22em] fh-text relative leading-6'>Opening Hours</h2>
                  <div className='footer-link mt-8 flex flex-col gap-3'>
                    <div className='flex justify-between w-[76%]'>
                      <p className='text-[var(--t-c-l)] text-[.85em] tracking-[.5px]'>Monday</p>
                      <p className='text-[var(--s-c)] text-[.85em] font-bold'>9am - 10pm</p>
                    </div>
                    <div className='flex justify-between w-[76%]'>
                      <p className='text-[var(--t-c-l)] text-[.85em] tracking-[.5px]'>Tuesday</p>
                      <p className='text-[var(--s-c)] text-[.85em] font-bold'>9am - 10pm</p>
                    </div>
                    <div className='flex justify-between w-[76%]'>
                      <p className='text-[var(--t-c-l)] text-[.85em] tracking-[.5px]'>Wednesday</p>
                      <p className='text-[var(--s-c)] text-[.85em] font-bold'>9am - 10pm</p>
                    </div>
                    <div className='flex justify-between w-[76%]'>
                      <p className='text-[var(--t-c-l)] text-[.85em] tracking-[.5px]'>Thursday</p>
                      <p className='text-[var(--s-c)] text-[.85em] font-bold'>9am - 10pm</p>
                    </div>
                    <div className='flex justify-between w-[76%]'>
                      <p className='text-[var(--t-c-l)] text-[.85em] tracking-[.5px]'>Friday</p>
                      <p className='text-[var(--s-c)] text-[.85em] font-bold'>9am - 10pm</p>
                    </div>
                    <div className='flex justify-between w-[76%]'>
                      <p className='text-[var(--t-c-l)] text-[.85em] tracking-[.5px]'>Saturday</p>
                      <p className='text-[var(--s-c)] text-[.85em] font-bold'>9am - 10pm</p>
                    </div>
                    <div className='flex justify-between w-[76%]'>
                      <p className='text-[var(--t-c-l)] text-[.85em] tracking-[.5px]'>Sunday</p>
                      <p className='text-[var(--s-c)] text-[.85em] font-bold'>9am - 10pm</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-11 sm:mt-20 border-[2px] border-[#ffffff10]'>
            <div className='lg:col-span-5 col-span-12'>
              <div className='sm:p-5 px-3 py-4 flex justify-between xl:text-[16px] lg:text-[12px] text-[10px] lg:border-r-[2px] border-b-[2px] border-[#ffffff10]'>
                <div className='flex sm:gap-4 gap-2 w-full items-center'>
                  <div className='gra-1 p-2 rounded-full flex-shrink-0 shadow-[0px_0px_7px_rgba(0,0,0,0.25)]'>
                    <MaskImage w='2.5em' h='2.5em' url="/icons/call.svg" bg="var(--acc-1)" hBg="" c="" hL="1" />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <p className='text-[var(--t-c-l)] font-pt-san text-[.9em] eading-7'>Need Help? Contact Us</p>
                    <a href="/" className='text-[var(--s-c)] font-semibold text-[1.33em] leading-7'>+91 98400 77508 </a>
                  </div>
                  <div className='gra-1 ms-auto text-[10px] 2xl:text-[16px] xl:text-[12px] sm:text-[16px]  flex justify-center items-center gap-2 sm:p-[13px] p-[8px] lg:px-6 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
                    <MaskImage w='1.4em' h='1.4em' url="/icons/call.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
                    <p className='text-[var(--t-c-l)] font-semibold flex'>Enquire Now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:col-span-3 col-span-12'>
              <div className='flex items-center gap-3 py-4 sm:px-5 px-3 h-full lg:justify-center xl:text-[16px] lg:text-[12px] lg:border-r-[2px] border-b-[2px] border-[#ffffff10]'>
                <MaskImage w='1.5em' h='1.5em' url="/icons/mail.svg" bg="var(--s-c)" hBg="" c="flex-shrink-0" hL="1" />
                <p className='text-[.9em] text-[var(--t-c-l)]'>Support@speedlearningapp.com</p>
              </div>
            </div>
            <div className='lg:col-span-3 col-span-12'>
              <div className='flex items-center gap-3 sm:px-5 px-3 py-4 h-full lg:justify-center xl:text-[16px] lg:text-[12px]'>
                <MaskImage w='1.5em' h='1.5em' url="/icons/map.svg" bg="var(--s-c)" hBg="" c="flex-shrink-0" hL="1" />
                <p className='text-[.75em] text-[var(--t-c-l)] leading-relaxed'>494, Kundrathur Main Rd,
                  Padmavathi Nagar, Kamatchiamman Nagar,
                  Mangadu, Tamil Nadu 600122</p>
              </div>
            </div>
          </div>
          <div className='w-full mt-12'>
            <div className='flex lg:text-[16px] md:text-[12px] text-[16px] md:flex-row  items-center lg:gap-10 gap-4 flex-col-reverse'>
              <p className='text-[var(--t-c-l)] text-[.9em] md:me-auto text-center'>© 2026 <span className='text-[var(--s-c)]'>Speed Medical Centre</span>. All Rights Reserved</p>
              <a className='text-[var(--t-c-l)] text-[.8em] tracking-[.5px] text-center' href="/">Terms and Conditions</a>
              <a className='text-[var(--t-c-l)] text-[.8em] tracking-[.5px] text-center' href="/">Privacy Policy</a>
              <a className='text-[var(--t-c-l)] text-[.8em] tracking-[.5px] text-center' href="/">Refund Policy</a>
              <a className='text-[var(--t-c-l)] text-[.8em] tracking-[.5px] text-center' href="/">Cancellation and Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
