'use client'
import React from 'react'
import logo from "@/public/mainlogo.png"
import Link from 'next/link'
import { DotsThree, XCircle } from 'phosphor-react'
import { useRef } from 'react'
import "./style.css"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
export default function NavigationBar() {
    const navRef = useRef();
    const pathname = usePathname()
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <div className='sticky top-0 z-[9999999] '>
            <header className=' bg-gradient-to-r from-[#37084D] to-[#0D042A] opacity-[95%]'>
                <Link href="/"><div className='flex items-center gap-5'>
                    <Image className='w-[80px]' src={logo} alt="this is logo" quality={75} />
                    <h1>Dream Weave Stations</h1>
                </div> </Link>

                <nav className='flex gap-5 items-center' ref={navRef}>

                    <div className='bigAvater h-[150px] w-[150px] rounded-full '><Image className='' src={logo} alt="this is logo" quality={100} /></div>

                    <span><Link prefetch={false} href='/' className={`text-white font-semibold p-[12px] rounded-lg transition ${pathname === "/"
                        ? "border-b-2 border-white"
                        : "hover:text-[#70CBDD]"
                        }`} >Home</Link></span>
                    <span><Link prefetch={false} href='/services' className={`text-white font-semibold p-[12px] rounded-lg transition ${pathname === "/services"
                        ? "border-b-2 border-white"
                        : "hover:text-[#70CBDD]"
                        }`} >Service</Link></span>
                    <span><Link prefetch={false} href='/portfolio' className={`text-white font-semibold p-[12px] rounded-lg transition ${pathname === "/portfolio"
                        ? "border-b-2 border-white"
                        : "hover:text-[#70CBDD]"
                        }`}>Portfolio</Link></span>
                    <span><Link prefetch={false} href='/blogs' className={`text-white font-semibold p-[12px] rounded-lg transition ${pathname === "/blogs"
                        ? "border-b-2 border-white"
                        : "hover:text-[#70CBDD]"
                        }`}>Blogs</Link></span>
                    <span><Link prefetch={false} href='/contact' className={`text-white font-semibold p-[12px] rounded-lg transition ${pathname === "/contact"
                        ? "border-b-2 border-white"
                        : "hover:text-[#70CBDD]"
                        }`}>Contact</Link></span>
                    <span><Link prefetch={false} href='/about' className={`text-white font-semibold p-[12px] rounded-lg transition ${pathname === "/about"
                        ? "border-b-2 border-white"
                        : "hover:text-[#70CBDD]"
                        }`}>About</Link></span>

                    <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                        <XCircle size={32} color="#f5f5f5" />
                    </button>

                </nav>

                <button className='nav-btn' onClick={showNavBar}><DotsThree size={32} color="#f5f5f5" /></button>

            </header>
        </div >
    )
}
