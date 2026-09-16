import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MaskImage from '../components/MaskImage';
import { useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

function Header() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setDropdownOpen(null)
  }, [location.pathname]);

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location.pathname])

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <header className={`w-full p-0 m-0 fixed header-menu-wrapper duration-300 z-[100] py-8 ${isScrolled ? 'active' : ''}`}>
      <div className='header-menu grid grid-cols-12  w-full max-w-[1400px]  mx-auto p-0 m-0 2xl:px-0 sm:px-10 px-5'>
        <div className={`xl:col-span-7 lg:col-span-8 fixed lg:static lg:bg-transparent md:bg-white mobile-menu ${isMenuOpen ? 'isOpen' : ''} lg:shadow-none shadow-[0px_0px_10px_rgba(0,0,0,0.1)]`}>
          <div className='flex lg:flex-row flex-col gap-2 items-center justify-between w-full h-full 2xl:text-[17px] xl:text-[13px] lg:text-[14px]'>
            <div className="flex  flex-col gap-5 bg-[var(--acc-2)] w-full p-5  lg:hidden  shadow-[0px_5px_10px_rgba(0,0,0,0.3)]">

              <div className='flex items-center gap-2'>
                <div className="text-[var(--t-c-l)] font-semibold">Follow Us :</div>
                <div className='flex  gap-2'>
                  <div className='bg-[var(--bg-w)] p-[8px] rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'>
                    <MaskImage w='1em' h='1em' url="/icons/facebook.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                  </div>
                  <div className='bg-[var(--bg-w)] p-[8px] rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'>
                    <MaskImage w='1em' h='1em' url="/icons/whatsapp.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                  </div>
                  <div className='bg-[var(--bg-w)] p-[8px] rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'>
                    <MaskImage w='1em' h='1em' url="/icons/instagram.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                  </div>
                  <div className='bg-[var(--bg-w)] p-[8px] rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'>
                    <MaskImage w='1em' h='1em' url="/icons/x.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex lg:flex-row flex-col gap-2 lg:items-center lg:justify-between mobile-menu-child h-full w-full px-7 lg:p-0'>
              <div onClick={() => { setIsMenuOpen(false); setDropdownOpen(null); }} className='py-4 flex lg:h-full items-center gap-2 border-b border-[#013d7220] lg:border-[transparent]'>
                <div className="flex items-center md:hidden">
                  <MaskImage w='1em' h='1em' url="/icons/home.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                </div>
                <Link to="/" className={`nav-link-pc nav-link font-semibold lg:font-normal ${currentPage === "/" ? "active lg:text-[var(--bg-w)] text-[var(--acc-2)]" : "lg:text-[var(--t-c-l)] lg:hover:text-[var(--bg-w)] text-[var(--t-c-d)] hover:text-[var(--acc-3)] duration-300"} relative`}>Home</Link>
              </div>

              <div onClick={() => { setIsMenuOpen(false); setDropdownOpen(null); }} className='py-4 flex lg:h-full items-center gap-2 border-b border-[#013d7220] lg:border-[transparent]'>
                <div className="flex items-center md:hidden">
                  <MaskImage w='1em' h='1em' url="/icons/about.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                </div>
                <Link to="/about" className={`nav-link-pc nav-link font-semibold lg:font-normal ${currentPage.startsWith("/about") || currentPage === "/profile" ? "active lg:text-[var(--bg-w)] text-[var(--acc-2)]" : "lg:text-[var(--t-c-l)] lg:hover:text-[var(--bg-w)] text-[var(--t-c-d)] hover:text-[var(--acc-3)] duration-300"} relative`}>About Doctor</Link>
              </div>

              <div onClick={() => { setIsMenuOpen(false); setDropdownOpen(null); }} className='py-4 flex lg:h-full items-center gap-2 border-b border-[#013d7220] lg:border-[transparent]'>
                <div className="flex items-center md:hidden">
                  <MaskImage w='1em' h='1em' url="/icons/course.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                </div>
                <a href="/#why-choose" className={`nav-link-pc nav-link font-semibold lg:font-normal lg:text-[var(--t-c-l)] lg:hover:text-[var(--bg-w)] text-[var(--t-c-d)] hover:text-[var(--acc-3)] duration-300 relative`}>Expertise</a>
              </div>

              <div onClick={() => { setIsMenuOpen(false); setDropdownOpen(null); }} className='py-4 flex lg:h-full items-center gap-2 border-b border-[#013d7220] lg:border-[transparent]'>
                <div className="flex items-center md:hidden">
                  <MaskImage w='1em' h='1em' url="/icons/ai.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                </div>
                <a href="/#treatment" className={`nav-link-pc nav-link font-semibold lg:font-normal lg:text-[var(--t-c-l)] lg:hover:text-[var(--bg-w)] text-[var(--t-c-d)] hover:text-[var(--acc-3)] duration-300 relative`}>AI Powered</a>
              </div>

              <div onClick={() => { setIsMenuOpen(false); setDropdownOpen(null); }} className='py-4 flex lg:h-full items-center gap-2 border-b border-[#013d7220] lg:border-[transparent]'>
                <div className="flex items-center md:hidden">
                  <MaskImage w='1em' h='1em' url="/icons/contact.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                </div>
                <a href="/#surgery" className={`nav-link-pc nav-link font-semibold lg:font-normal lg:text-[var(--t-c-l)] lg:hover:text-[var(--bg-w)] text-[var(--t-c-d)] hover:text-[var(--acc-3)] duration-300 relative`}>Cardiac Surgery</a>
              </div>

              <div onClick={() => { setIsMenuOpen(false); setDropdownOpen(null); }} className='py-4 flex lg:h-full items-center gap-2 border-b border-[#013d7220] lg:border-[transparent]'>
                <div className="flex items-center md:hidden">
                  <MaskImage w='1em' h='1em' url="/icons/blog.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
                </div>
                <a href={currentPage.startsWith("/about") ? "#appointment" : "/#contact-us"} className={`nav-link-pc nav-link font-semibold lg:font-normal lg:text-[var(--t-c-l)] lg:hover:text-[var(--bg-w)] text-[var(--t-c-d)] hover:text-[var(--acc-3)] duration-300 relative`}>Contact Us</a>
              </div>
            </div>

            <span style={{ backgroundColor: isMenuOpen ? "hsl(0, 0%, 0% , 0.5)" : "hsl(0, 0%, 0% , 0)" }} className={`${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"} closeMenu m-[0px_!important] md:hidden flex justify-end `} >
            </span>
            <span onClick={() => { setIsMenuOpen(false), setDropdownOpen(null) }} className="bg-[#ffffff20] text-3xl p-2  h-max w-max rounded-full lg:hidden close-btn-mob shadow-[0px_0px_10px_#00000020]">
              <MaskImage w='.5em' h='.5em' url="/icons/close.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
            </span>
          </div>
        </div>
        <div className='xl:col-span-5 lg:col-span-4 col-span-12'>
          <div className='flex xl:gap-7 gap-1 items-center lg:justify-end justify-between h-full 2xl:text-[16px] xl:text-[13px] lg:p-0 pe-3'>

            <a href='tel:9840077508' className='group bg-[--bg-w] text-[12px] 2xl:text-[17px] xl:text-[12px] sm:text-[16px] hover:translate-y-[-3px] hover:bg-[var(--acc-3)]  cursor-pointer duration-300 flex justify-center items-center gap-2 sm:p-[10px] p-[8px] lg:px-6 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]'>
              <MaskImage w='1.4em' h='1.4em' url="/icons/call.svg" bg="var(--acc-3)" hBg="var(--t-c-l)" c="duration-300" hL="2" />
              <p className='text-[var(--acc-3)] font-semibold group-hover:text-[var(--t-c-l)] flex duration-300'>Contact Me</p>
            </a>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className=' flex justify-center items-center gap-2 ms-4 py-[10px] rounded-full lg:hidden'>
              <MaskImage w='1.3em' h='1.3em' url="/icons/menu.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;

