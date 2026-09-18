import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MaskImage from '../components/MaskImage';
import { motion, useScroll, useSpring } from "framer-motion";

function Header() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
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
      <header className={`w-full p-0 m-0 fixed header-menu-wrapper duration-300 z-[100] py-6 sm:py-7 ${isScrolled ? 'active' : ''}`}>
        <div className='header-menu flex items-center justify-between w-full max-w-[1440px] mx-auto px-5 sm:px-8 xl:px-10 2xl:px-12'>
          
          {/* Desktop Navigation - Responsive gap & typography, zero dropdown arrows */}
          <nav className='hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8'>
            <Link
              to="/"
              className={`nav-link-pc nav-link text-xs xl:text-[14px] 2xl:text-[16px] whitespace-nowrap transition-colors duration-200 ${
                currentPage === "/" ? "active text-[var(--bg-w)] font-bold" : "text-[var(--t-c-l)] hover:text-[var(--bg-w)] font-medium"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-link-pc nav-link text-xs xl:text-[14px] 2xl:text-[16px] whitespace-nowrap transition-colors duration-200 ${
                currentPage.startsWith("/about") || currentPage === "/profile" ? "active text-[var(--bg-w)] font-bold" : "text-[var(--t-c-l)] hover:text-[var(--bg-w)] font-medium"
              }`}
            >
              About Doctor
            </Link>

            <a
              href="/#ecosystem"
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[var(--acc-1)] via-[#2BEFAD] to-[var(--acc-1)] text-slate-900 font-extrabold text-[11px] xl:text-xs uppercase tracking-wider shadow-md hover:scale-105 hover:shadow-lg transition-all flex items-center gap-1.5 duration-300 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
              <span>SPEED & DOPAMINE</span>
            </a>

            <a
              href="/#why-choose"
              className="nav-link-pc nav-link text-xs xl:text-[14px] 2xl:text-[16px] whitespace-nowrap transition-colors duration-200 text-[var(--t-c-l)] hover:text-[var(--bg-w)] font-medium"
            >
              Expertise
            </a>

            <a
              href="/#treatment"
              className="nav-link-pc nav-link text-xs xl:text-[14px] 2xl:text-[16px] whitespace-nowrap transition-colors duration-200 text-[var(--t-c-l)] hover:text-[var(--bg-w)] font-medium"
            >
              AI Powered
            </a>

            <a
              href="/#surgery"
              className="nav-link-pc nav-link text-xs xl:text-[14px] 2xl:text-[16px] whitespace-nowrap transition-colors duration-200 text-[var(--t-c-l)] hover:text-[var(--bg-w)] font-medium"
            >
              Cardiac Surgery
            </a>

            <Link
              to="/contact"
              className={`nav-link-pc nav-link text-xs xl:text-[14px] 2xl:text-[16px] whitespace-nowrap transition-colors duration-200 ${
                currentPage.startsWith("/contact") ? "active text-[var(--bg-w)] font-bold" : "text-[var(--t-c-l)] hover:text-[var(--bg-w)] font-medium"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Button & Mobile Hamburger Toggle */}
          <div className='flex items-center gap-3 shrink-0 ms-auto lg:ms-0'>
            <a
              href='tel:9840077508'
              className='group bg-[var(--bg-w)] text-xs xl:text-sm 2xl:text-base hover:translate-y-[-2px] hover:bg-[var(--acc-3)] cursor-pointer duration-300 flex items-center gap-2 py-2 px-4 sm:px-5 xl:px-6 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)] whitespace-nowrap'
            >
              <MaskImage w='1.2em' h='1.2em' url="/icons/call.svg" bg="var(--acc-3)" hBg="var(--t-c-l)" c="duration-300" hL="2" />
              <span className='text-[var(--acc-3)] font-semibold group-hover:text-[var(--t-c-l)] duration-300'>Contact Me</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              className='lg:hidden flex items-center justify-center p-2 rounded-full bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.25)] text-white transition-colors ms-1'
            >
              <MaskImage w='1.3em' h='1.3em' url="/icons/menu.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-[99999998] lg:hidden backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Mobile Slide-Over Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white z-[99999999] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 bg-[var(--acc-2)] text-white shadow-md">
            <div>
              <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">Medical Ecosystem</div>
              <div className="text-base font-bold text-white">Dr. Vinayak Senthil</div>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Close menu"
            >
              <MaskImage w='.6em' h='.6em' url="/icons/close.svg" bg="var(--bg-w)" hBg="" c="" hL="1" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="flex flex-col py-3 px-4 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 py-3 px-3 rounded-lg font-medium text-sm transition-colors ${
                currentPage === "/" ? "bg-slate-100 text-[var(--acc-2)] font-bold" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <MaskImage w='1.1em' h='1.1em' url="/icons/home.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
              <span>Home</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 py-3 px-3 rounded-lg font-medium text-sm transition-colors ${
                currentPage.startsWith("/about") || currentPage === "/profile" ? "bg-slate-100 text-[var(--acc-2)] font-bold" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <MaskImage w='1.1em' h='1.1em' url="/icons/about.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
              <span>About Doctor</span>
            </Link>

            <div className="py-2 px-1">
              <a
                href="/#ecosystem"
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-4 py-2.5 rounded-full bg-gradient-to-r from-[var(--acc-1)] via-[#2BEFAD] to-[var(--acc-1)] text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
                <span>SPEED & DOPAMINE</span>
              </a>
            </div>

            <a
              href="/#why-choose"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 py-3 px-3 rounded-lg font-medium text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <MaskImage w='1.1em' h='1.1em' url="/icons/course.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
              <span>Expertise</span>
            </a>

            <a
              href="/#treatment"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 py-3 px-3 rounded-lg font-medium text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <MaskImage w='1.1em' h='1.1em' url="/icons/ai.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
              <span>AI Powered</span>
            </a>

            <a
              href="/#surgery"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 py-3 px-3 rounded-lg font-medium text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <MaskImage w='1.1em' h='1.1em' url="/icons/contact.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
              <span>Cardiac Surgery</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 py-3 px-3 rounded-lg font-medium text-sm transition-colors ${
                currentPage.startsWith("/contact") ? "bg-slate-100 text-[var(--acc-2)] font-bold" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <MaskImage w='1.1em' h='1.1em' url="/icons/contact.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Drawer Social Media Footer */}
          <div className="mt-auto p-5 bg-slate-50 border-t border-slate-200">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Connect With Us</div>
            <div className='flex items-center gap-2.5'>
              <a href="https://www.facebook.com/speedlearningapp/" target="_blank" rel="noreferrer" title="Facebook - SPEED" className='bg-white p-2.5 rounded-full shadow-sm hover:scale-110 transition-transform'>
                <MaskImage w='1.1em' h='1.1em' url="/icons/facebook.svg" bg="var(--acc-2)" hBg="" c="" hL="1" />
              </a>
              <a href="https://wa.me/919840077508" target="_blank" rel="noreferrer" title="WhatsApp - Dr. Vinayak Senthil" className='bg-white p-2.5 rounded-full shadow-sm hover:scale-110 transition-transform'>
                <MaskImage w='1.1em' h='1.1em' url="/icons/whatsapp.svg" bg="#25D366" hBg="" c="" hL="1" />
              </a>
              <a href="https://www.instagram.com/speedlearningapp/" target="_blank" rel="noreferrer" title="Instagram - SPEED" className='bg-white p-2.5 rounded-full shadow-sm hover:scale-110 transition-transform'>
                <MaskImage w='1.1em' h='1.1em' url="/icons/instagram.svg" bg="#E1306C" hBg="" c="" hL="1" />
              </a>
              <a href="https://www.youtube.com/@SpeedLearningApp" target="_blank" rel="noreferrer" title="YouTube Masterclasses - SPEED" className='bg-white p-2.5 rounded-full shadow-sm hover:scale-110 transition-transform'>
                <MaskImage w='1.1em' h='1.1em' url="/icons/youtube.svg" bg="#FF0000" hBg="" c="" hL="1" />
              </a>
              <a href="https://www.linkedin.com/company/speed-medical-centre/" target="_blank" rel="noreferrer" title="LinkedIn - SPEED Medical Centre" className='bg-white p-2.5 rounded-full shadow-sm hover:scale-110 transition-transform'>
                <MaskImage w='1.1em' h='1.1em' url="/icons/linkedin.svg" bg="#0A66C2" hBg="" c="" hL="1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
