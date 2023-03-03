import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useClickOutside } from "react-click-outside-hook";
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [parentRef, isClickedOutside] = useClickOutside();

  const toggleMobileMenu = () => {
    if (showMobileMenu) {
      document.getElementById('mobileMenu').classList.remove('h-screen')
      document.getElementById('mobileMenu').classList.add('h-0')
      setTimeout(() => {
        setShowMobileMenu(false);
      }, 500);
    } else {
      document.getElementById('mobileMenu').classList.remove('h-0')
      document.getElementById('mobileMenu').classList.add('h-screen')
      setShowMobileMenu(true);
    }
  }

  useEffect(() => {
    console.log(isClickedOutside);
    if (isClickedOutside) {
      // setShowMobileMenu(false)
      document.getElementById('mobileMenu').classList.remove('h-screen')
      document.getElementById('mobileMenu').classList.add('h-0')
      setTimeout(() => {
        setShowMobileMenu(false);
      }, 500);
    };
  }, [isClickedOutside]);

  return (
    <div className="sticky top-0 left-0 w-full shadow-lg py-3 px-4 border-b border-[#d6dae0] bg-[#efeff4] z-50">
      <div className="px-[5%]">
        <div className="w-full max-w-[75rem] mx-auto flex justify-between items-center">
          <Link
            href="/"
            aria-current="page"
            className="nav-logo-link w-inline-block w--current"
          >
            <Image
              src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b4597ac1025b60cf3c6e61_logo.svg"
              loading="lazy"
              alt=""
              width={140}
              height={48}
              className="nav-logo"
            />
          </Link>

          <nav
            role="navigation"
            className="hidden lg:flex mr-auto ml-[1.25rem] justify-between w-full items-center relative float-right"
            style={{ transform: 'translateY(0px) translateX(0px)' }}
          >
            <div className="flex items-center">
              <Link href="/#company" className="py-2 px-5 relative inline-block align-top text-[#222] text-left mx-auto" style={{ transition: 'color 250ms ease' }}>
                Company
              </Link>
              <Link href="/#gettingstarted" className="py-2 px-5 relative inline-block align-top text-[#222] text-left mx-auto" style={{ transition: 'color 250ms ease' }}>
                Getting Started
              </Link>
              <Link href="/#pricing" className="py-2 px-5 relative inline-block align-top text-[#222] text-left mx-auto" style={{ transition: 'color 250ms ease' }}>
                Pricing
              </Link>
              <Link href="/#contact" className="py-2 px-5 relative inline-block align-top text-[#222] text-left mx-auto" style={{ transition: 'color 250ms ease' }}>
                Contact
              </Link>
            </div>
            <div className="flex items-center ml-5 gap-4">
              <a href="#features" className="py-2 px-4 rounded-[5rem] inline-block border-none bg-white text-[#26282f]" style={{ transition: 'color 200ms ease' }}>
                Learn More
              </a>
              <a href="#download" className="py-2 px-4 rounded-[5rem] inline-block border-none bg-[#26282f] text-white" style={{ transition: 'color 200ms ease' }}>
                Download
              </a>
            </div>
          </nav>

          <div className="lg:hidden">
            {!showMobileMenu ? <FaBars className="cursor-pointer" size={24} onClick={() => toggleMobileMenu()} /> : <FaTimes className="cursor-pointer" size={24} onClick={() => toggleMobileMenu()} />}
          </div>

          <div id='mobileMenu' className="h-0 overflow-hidden fixed top-[60px] md:top-[90px] left-0 right-0 w-full transition-all duration-500">
            <div className="flex flex-col items-center gap-4 bg-[#efeff4] shadow-2xl py-4 px-6 text-[#333] text-[18px] font-semibold z-50" ref={parentRef}>
              <Link href="/#company" onClick={() => toggleMobileMenu()}>Company</Link>
              <Link href="/#gettingstarted" onClick={() => toggleMobileMenu()}>Getting started</Link>
              <Link href="/#pricing" onClick={() => toggleMobileMenu()}>Pricing</Link>
              <Link href="/#contact" onClick={() => toggleMobileMenu()}>Contact</Link>
              <div className="flex items-center gap-6">
                <Link href="//#features" onClick={() => toggleMobileMenu()} className="bg-white text-black w-[100px] h-fit text-center py-3 rounded-full text-xs">LEARN MORE</Link>
                <Link href="//#download" onClick={() => toggleMobileMenu()} className="text-white bg-black w-[100px] h-fit text-center py-3 rounded-full text-xs">DOWNLOAD</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden">mobilenav</div>
    </div>
  );
}
